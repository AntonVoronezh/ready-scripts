(function checklist() {

    const getElem = document.getElementById('checklist');

    init();

    const getInput = getElem.querySelector('.checklist__input');
    const getUl = getElem.querySelector('.checklist__ul');


    getInput.addEventListener('keydown', (event) => {

        if (event.keyCode === 13 && getInput.value !== '') {

            addNewNote(getInput.value);

            getInput.value = '';

        }

    });


    function addNewNote(argText) {

        const createLi = createElem('li');
        const createCheck = createElem('input');
        const createClose = createElem('div');
        const createText = createElem('div');
        const createBackInp = createElem('input');

        addClass(createLi, 'checklist__li');
        addClass(createText, 'checklist__text');
        addClass(createCheck, 'checklist__ckeckbox');
        addClass(createClose, 'checklist__close');
        addClass(createBackInp, 'checklist__none');
        addClass(createBackInp, 'checklist__back-input');

        createLi.dataset.number = getCountNotes();
        createText.dataset.number = getCountNotes();
        createCheck.dataset.number = getCountNotes();
        createClose.dataset.number = getCountNotes();
        createBackInp.dataset.number = getCountNotes();

        createLi.addEventListener('click', (event) => {

            if (event.target.classList.contains('checklist__ckeckbox')) {

                checklistFunc(event.target.dataset.number);

            } else if (event.target.classList.contains('checklist__close')) {

                closeFunc(event.target.dataset.number);


            } else if (event.target.classList.contains('checklist__back-input')) {

            }

        });

        createLi.addEventListener('dblclick', (event) => {

            if (event.target.classList.contains('checklist__text')) {

                textFunc(event.target.dataset.number);

            }

        });

        createCheck.type = 'checkbox';
        createText.innerHTML = argText;
        createBackInp.value = argText;
        createClose.innerHTML = 'X';

        appendElem(createLi, createCheck);
        appendElem(createLi, createText);
        appendElem(createLi, createBackInp);
        appendElem(createLi, createClose);

        appendElem(getUl, createLi);


    };

   

    
   

    

   

   





  

}());