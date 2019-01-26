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








    };

   

    
   

    

   

   





  

}());