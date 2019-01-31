(function savinghtmlform() {

    // <div id="savinghtmlform" class="saving-html-form"></div>

    const savingHtmlForm = document.querySelector('#savinghtmlform');


    makeMarking();

    setStyle();


    const form = savingHtmlForm.querySelector('form');

    let input = form.querySelectorAll('input[type=text]');

    let textarea = form.querySelectorAll('textarea');

    let checkbox = form.querySelectorAll('input[type=checkbox]');

    let radio = form.querySelectorAll('input[type=radio]');

    let select = form.querySelectorAll('select');

    const formWrap = document.querySelector('.saving-html-form__form');

    const inputBtn = document.querySelector('.saving-html-form__input');

    const textareaBtn = document.querySelector('.saving-html-form__textarea');

    const checkboxBtn = document.querySelector('.saving-html-form__checkbox');

    const radioBtn = document.querySelector('.saving-html-form__radio');

    const selectBtn = document.querySelector('.saving-html-form__select');

    const inputSelect = document.querySelector('.saving-html-form__input-select');

    const resetBtn = document.querySelector('.saving-html-form__delete');


    window.addEventListener('unload', function () {

        const obj = addElementsInObj();

        const json = JSON.stringify(obj);

        saveInLocalStorage('obj', json);

    });

    window.addEventListener('load', function () {

        addElementsOnWindow('input-count', 'input', 'text');

        addElementsOnWindow('textarea-count', 'textarea');

        addElementsOnWindow('checkbox-count', 'input', 'checkbox');

        addElementsOnWindow('radio-count', 'input', 'radio');

        addElementsOnWindow('select-count', 'select');


        const json = getFromLocalStorage('obj');

        const obj = JSON.parse(json);

        getElementsFromObj(obj);

    });
















   


    


}());