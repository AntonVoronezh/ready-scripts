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

    function getFromLocalStorage(argName) {

        return localStorage.getItem(argName)

    };

    function saveInLocalStorage(argName, argValue) {

        localStorage.setItem(argName, argValue)

    };

    function addElementsInObj() {

        const obj = {};

        addElemInObj(input, 'input', 'value', obj);

        addElemInObj(textarea, 'textarea', 'value', obj);

        addElemInObj(checkbox, 'checkbox', 'checked', obj);

        addElemInObj(radio, 'radio', 'checked', obj);

        addElemInObj(select, 'select', 'selected', obj);

        console.log(obj);

        return obj;

    };

    function addElemInObj(argElems, argName, argPass, argObj) {

        const argArr = [];

        let outZero, out;

        if (argName === 'input') {

            argElems = form.querySelectorAll('input[type=text]');

        }

        if (argName === 'textarea') {

            argElems = form.querySelectorAll('textarea');

        }

        if (argName === 'checkbox') {

            argElems = form.querySelectorAll('input[type=checkbox]');

        }

        if (argName === 'radio') {

            argElems = form.querySelectorAll('input[type=radio]');

        }

        if (argName === 'select') {

            argElems = form.querySelectorAll('select');

        }

        if (argElems.length === 1) {

            if (argPass === 'value') {
                outZero = argElems[0].value;
            }
            if (argPass === 'checked') {
                outZero = argElems[0].checked;
            }
            if (argPass === 'selected') {
                // outZero = argElems[0].selected;
                const arr = [];

                for (let item of argElems[0]) {

                    arr.push(item.selected);

                }

                argArr.push(arr);
            }

            if (argPass !== 'selected') {

                argArr.push(outZero);

            }

        } else {

            for (let elem of argElems) {

                if (argPass === 'value') {
                    out = elem.value;
                }
                if (argPass === 'checked') {
                    out = elem.checked;
                }
                if (argPass === 'selected') {

                    const arr = [];

                    for (let item of elem) {

                        arr.push(item.selected);

                    }

                    argArr.push(arr);

                }

                if (argPass !== 'selected') {

                    argArr.push(out);

                }

            }

        }

        argObj[argName] = argArr;

    };

    function getElementsFromObj(argObj) {

        input = form.querySelectorAll('input[type=text]');
        textarea = form.querySelectorAll('textarea');
        checkbox = form.querySelectorAll('input[type=checkbox]');
        radio = form.querySelectorAll('input[type=radio]');
        select = form.querySelectorAll('select');


        if (input.length !== 0 && argObj.input) {

            input.forEach((elem, i) => {

                elem.value = argObj.input[i];

            });

        }

        if (textarea.length !== 0) {

            textarea.forEach((elem, i) => {

                elem.value = argObj.textarea[i];

            });

        }

        if (checkbox.length !== 0) {

            checkbox.forEach((elem, i) => {

                elem.checked = argObj.checkbox[i];

            });

        }

        if (radio.length !== 0) {

            radio.forEach((elem, i) => {

                elem.checked = argObj.radio[i];

            });

        }

        if (select.length !== 0) {

            select.forEach((elem, i) => {

                const selectedIndex = argObj.select[i].indexOf(true);

                elem.selectedIndex = selectedIndex;

            });

        }

    };

    inputBtn.addEventListener('click', function () {

        makeElem('input', 'text');

        checkCount('input-count');

    });

    textareaBtn.addEventListener('click', function () {

        makeElem('textarea');

        checkCount('textarea-count');

    });










   


    


}());