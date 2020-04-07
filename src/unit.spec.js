import StylesheetSwitcher from './stylesheetSwitcher.svelte';

import { render, fireEvent } from '@testing-library/svelte';

describe('StylesheetSwitcher', () => {
  let testElem;

  beforeEach(() => {
    testElem = document.createElement('test');
    document.body.append(testElem);
    // Replace document.head.querySelector() with a mock that returns a fake stylesheet
    // If you mock the more-general document.querySelector, things break.
    document.head.querySelector = jasmine.createSpy('qsa').and.returnValue({ disabled: false });
  });

  afterEach(() => {
    testElem.remove();
    sessionStorage.clear();
  });

  function createComponent(data) {
    return render(StylesheetSwitcher, {
      target: document.querySelector('test'),
      props: { ...data },
    });
  }

  function expectLabel(text) {
    expect(document.querySelector('test label').textContent).toEqual(text);
  }

  function expectOptionsCount(num) {
    expect(document.querySelectorAll('test select option').length).toEqual(num);
  }

  function expectOptionsText(arrayOfStr) {
    let elems = [...document.querySelectorAll('test select option')];
    let textArray = elems.reduce((acc, val) => {
      acc.push(val.textContent);
      return acc;
    }, []);

    expect(textArray).toEqual(arrayOfStr);
  }

  function expectSelectId(re) {
    expect(document.querySelector('test select').getAttribute('id')).toMatch(re);
  }

  function expectSelectValue(text) {
    expect(document.querySelector('test select').value).toEqual(text);
  }

  it('should have default values when it is created', () => {
    createComponent();
    expectLabel('Style sheet:');
    expectOptionsCount(0);
    expectSelectId(/mySSS_select/);
  });

  it('should allow the label to be changed to a truthy value (or an empty string otherwise)', async () => {
    const { component: comp } = createComponent({ label: 'foo' });
    expectLabel('foo');

    await comp.$set({ label: 777 });
    expectLabel('777');

    await comp.$set({ label: '' });
    expectLabel('');

    await comp.$set({ label: false });
    expectLabel('false');

    await comp.$set({ label: 'really really long label' });
    expectLabel('really really long label');
  });

  it('should allow the id to be changed to any value', async () => {
    const { component: comp } = createComponent({ id: 'foo' });
    expectSelectId('foo');

    await comp.$set({ id: 777 });
    expectSelectId(/777_/);

    await comp.$set({ id: undefined });
    expectSelectId(/undefined_/);

    await comp.$set({ id: false });
    expectSelectId(/false_/);

    await comp.$set({ id: 'really really long label' });
    expectSelectId(/really really long label_/);
  });

  it('should allow the stylehseets to be changed', async () => {
    const { component: comp } = createComponent({ stylesheets: [{ label: 'Foo', linkHrefContains: 'foo' }] });
    expectOptionsCount(1);
    expectOptionsText(['Foo']);

    await comp.$set({
      stylesheets: [
        { label: 'Foo', linkHrefContains: 'foo' },
        { label: 'Bar', linkHrefContains: 'bar' },
        { label: 'Car', linkHrefContains: 'car' },
      ],
    });
    expectOptionsCount(3);
    expectOptionsText(['Foo', 'Bar', 'Car']);
  });

  it('should persist the selected stylesheet into sessionStorage by default', () => {
    const { component: comp } = createComponent({
      stylesheets: [
        { label: 'Foo', linkHrefContains: 'foo' },
        { label: 'Bar', linkHrefContains: 'bar' },
      ],
    });

    expect(sessionStorage.getItem('__stylesheetSwitcher')).toEqual('Foo');
    expect(comp.getSelected()).toEqual('Foo');
  });

  it('should show the correct selected option when the persisted option is not the first stylesheet', () => {
    sessionStorage.setItem('__stylesheetSwitcher', 'Bar');
    const { component: comp } = createComponent({
      stylesheets: [
        { label: 'Foo', linkHrefContains: 'foo' },
        { label: 'Bar', linkHrefContains: 'bar' },
      ],
    });

    expectSelectValue('Bar');
    expect(comp.getSelected()).toEqual('Bar');
  });

  it('should be possible to change the selectedItem through the UI', async () => {
    const { getByLabelText } = createComponent({
      label: 'theme',
      stylesheets: [
        { label: 'Foo', linkHrefContains: 'foo' },
        { label: 'Bar', linkHrefContains: 'bar' },
      ],
    });
    expectSelectValue('Foo');

    const select = getByLabelText('theme');
    expect(select).toBeInTheDocument();

    // Change to Bar
    await fireEvent.change(select, { target: { value: 'Bar' } });
    expectSelectValue('Bar');

    // and back to Foo again
    await fireEvent.change(select, { target: { value: 'Foo' } });
    expectSelectValue('Foo');
  });

  it('should be possible to change the selectedItem through the setSelected() method', async () => {
    let spy = jest.fn();
    const { component: comp } = createComponent({
      stylesheets: [
        { label: 'Foo', linkHrefContains: 'foo' },
        { label: 'Bar', linkHrefContains: 'bar' },
      ],
    });
    comp.$on('selectionChange', event => {
      // console.log(event.detail);
      spy(event.detail);
    });

    expectSelectValue('Foo');
    expect(comp.getSelected()).toEqual('Foo');
    expect(spy).not.toHaveBeenCalled(); // The listener is not attached when the first event is fired.

    await comp.setSelected('Bar');
    expectSelectValue('Bar');
    expect(comp.getSelected()).toEqual('Bar');
    expect(spy).toHaveBeenCalledWith({ value: 'Bar' }); // Now it is
    expect(spy).toHaveBeenCalledTimes(1);

    await comp.setSelected('Bar');
    expect(spy).toHaveBeenCalledTimes(1); // Value didn't change, so no notification e

    await comp.setSelected('Foo');
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenLastCalledWith({ value: 'Foo' });
  });
});
