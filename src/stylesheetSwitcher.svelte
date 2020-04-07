<script>
  import { createEventDispatcher } from 'svelte';

  // Props
  export let id = 'mySSS';
  export let label = 'Style sheet:';
  export let stylesheets = [];
  export let persistenceKeyName = '__stylesheetSwitcher';
  export let showUI = true;

  // Internal state
  let selectedKey;

  // Create a map of all the stylesheets, so we can enable one of them and disable the others
  const ssMap = new Map();

  // Event dispatcher
  const dispatch = createEventDispatcher();

  // When stylesheets prop changes, update the stylesheet map too.
  $: {
    updateStylesheetDOM(stylesheets);
  }

  // Component Methods
  export function setSelected(newKey) {
    // don't update if the selected key does not change
    if (newKey === selectedKey) {
      return;
    }

    // update our internal state
    selectedKey = newKey;

    ssMap.forEach((styleSheetOrArray, key) => {
      // Handle either a single style or an array or styles:
      if (styleSheetOrArray && styleSheetOrArray.length) {
        styleSheetOrArray.forEach(style => (style.disabled = key !== selectedKey));
      } else {
        styleSheetOrArray.disabled = key !== selectedKey;
      }
    });
    persistSelectedStyleSheet(persistenceKeyName, selectedKey);

    dispatch('selectionChange', { value: selectedKey });
  }

  export function getSelected() {
    return selectedKey;
  }

  function updateStylesheetDOM(sheets) {
    let persistedValue = retrieveSelectedStyleSheet(persistenceKeyName);
    const styleBlocksArr = [].slice.call(document.querySelectorAll('style')); // Calculate this once

    ssMap.clear();
    sheets.forEach(sheet => {
      // v2.0 behaviour was all stylesheets were <link> elements.
      // v2.1 behaviour means that a stylesheet can also be in a <style> tag.
      if (sheet.linkHrefContains) {
        // <link> elements must be inside the <head> element. This also makes unit testing easier (as we can just mock document.head.querySelector)
        ssMap.set(
          sheet.label,
          document.head.querySelectorAll(`link[rel="stylesheet"][href*="${sheet.linkHrefContains}"]`)
        );
      } else if (sheet.styleElemContains) {
        ssMap.set(sheet.label, findStyleRuleContainingText(styleBlocksArr, sheet.styleElemContains));
      } else {
        throw new Error(
          `StyleSheetSwitcher.sheets."${sheet}" must contain a "linkHrefContains" property or a "styleElemContains" property which identifies the link/style element to control`
        );
      }
    });

    if (persistedValue && ssMap.has(persistedValue)) {
      setSelected(persistedValue);
    } else if (ssMap.size > 0) {
      // Set selected value to first value in the list (no need to update UI)
      setSelected(ssMap.keys().next().value, false);
    }
  }

  // Utility methods
  function persistSelectedStyleSheet(keyName, value) {
    window.sessionStorage.setItem(keyName, value);
  }

  function retrieveSelectedStyleSheet(keyName) {
    return window.sessionStorage.getItem(keyName);
  }

  function findStyleRuleContainingText(styleBlocksArray, searchText) {
    const matching = styleBlocksArray.filter(sheet => (sheet.textContent || '').includes(searchText));

    return matching.length ? matching : null; // We can match multiple <style> elements. handle this case inside setSelected()
  }

  // PolyFill NodeList.forEach if necessary
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function(callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }
</script>

{#if showUI}
  <div>
    <label for="{id}_select">{label}</label>
    <select id="{id}_select" value={selectedKey} on:change={event => setSelected(event.target.value)}>
      {#each stylesheets as sheet}
        <option value={sheet.label}>{sheet.label}</option>
      {/each}
    </select>
  </div>
{/if}
