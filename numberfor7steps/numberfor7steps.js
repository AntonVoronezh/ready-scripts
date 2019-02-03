(function numberfor7steps() {

    const num7st = document.querySelector('#num7st');

    makeMarking();

    setStyle();

    const start = num7st.querySelector('.num7st__start');

    const count = num7st.querySelector('.num7st__count');

    const wrap = num7st.querySelector('.num7st__wrap');

    const number = num7st.querySelector('.num7st__number');

    const less = num7st.querySelector('.num7st__less');

    const more = num7st.querySelector('.num7st__more');
    

    let flag;

    let startNum = 0;

    let endNum = 100;

    let num = 50;

    let countNum = 1;


    start.addEventListener('click', function () {

        addCount();

        addNumber(num);

        hideStartBtn();

        addBtns();

    });


















}());