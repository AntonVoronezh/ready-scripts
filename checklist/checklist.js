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


   
   

    
   

    

   

   





  

}());