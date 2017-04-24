import StylesheetSwitcher from '../stylesheetSwitcher.html';

describe('StylesheetSwitcher', () => {
  let testElem;

  beforeEach(() => {
    testElem = document.createElement('test');
    document.body.appendChild(testElem);
    document.head.querySelector = jasmine.createSpy('qsa').and.returnValue({disabled: false});
  });

  afterEach(() => {
    document.body.removeChild(testElem);
    sessionStorage.clear();
  });

  function createComponent(data) {
    return new StylesheetSwitcher({
      target: document.querySelector('test'),
      data: Object.assign({}, data),
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
    expectLabel('Stylesheet:');
    expectOptionsCount(0);
    expectSelectId(/sss_/);
  });

  it('should allow the label to be changed to a truthy value (or an empty string otherwise)', () => {
    let comp = createComponent({label: 'foo'});
    expectLabel('foo');

    comp.set({label: 777});
    expectLabel('777');

    comp.set({label: undefined});
    expectLabel('');

    comp.set({label: false});
    expectLabel('');

    comp.set({label: 'really really long label'});
    expectLabel('really really long label');
  });

  it('should allow the id to be changed to any value', () => {
    let comp = createComponent({id: 'foo'});
    expectSelectId('foo');

    comp.set({id: 777});
    expectSelectId(/777_/);

    comp.set({id: undefined});
    expectSelectId(/undefined_/);

    comp.set({id: false});
    expectSelectId(/false_/);

    comp.set({id: 'really really long label'});
    expectSelectId(/really really long label_/);
  });


  it('should allow the stylehseets to be changed', () => {
    let comp = createComponent({stylesheets: [
      {label: 'Foo', linkHrefContains: 'foo'},
    ]});
    expectOptionsCount(1);
    expectOptionsText(['Foo']);

    comp.set({stylesheets: [
      {label: 'Foo', linkHrefContains: 'foo'},
      {label: 'Bar', linkHrefContains: 'bar'},
      {label: 'Car', linkHrefContains: 'car'},
    ]});
    expectOptionsCount(3);
    expectOptionsText(['Foo', 'Bar', 'Car']);
  });

  it('should persist the selected stylesheet into sessionStorage by default', () => {
    createComponent({stylesheets: [
      {label: 'Foo', linkHrefContains: 'foo'},
      {label: 'Bar', linkHrefContains: 'bar'},
    ]});

    expect(sessionStorage.getItem('__stylesheetSwitcher')).toEqual('Foo');
  });


  it('should show the correct selected option when the persisted option is not the first stylesheet', () => {
    sessionStorage.setItem('__stylesheetSwitcher', 'Bar');
    createComponent({stylesheets: [
      {label: 'Foo', linkHrefContains: 'foo'},
      {label: 'Bar', linkHrefContains: 'bar'},
    ]});

    expectSelectValue('Bar');
  });
});
