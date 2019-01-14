function startCrossZero() {

    // <div id="cross-zero"></div>
    // startCrossZero();
            
    const getElem = document.getElementById('cross-zero');

    makeMarking();

    const getTbl = document.querySelector('.field');
    const getBtn = document.querySelector('.refresh');
    const getGamer = document.querySelector('.gamer');
    const getWinner = document.querySelector('.winner');

    makeClearField();
    makeRefresh();
    makeProgress();

    let flag = true;


    function makeMarking() {

        getElem.innerHTML = '<h1>Крестики-нолики </h1>\
            aka AntonVoronezh\
             <br> <br> <br>\
            <table class="field"></table>\
            <p>Победитель: <span class="winner">?</span></p>\
            <p>Сейчас ходит: <span class="gamer">X</span></p>\
            <button class="refresh">Начать заново</button>\
            ';

        getElem.style.border = '1px solid #000';
        getElem.style.textAlign = 'center';
        getElem.style.padding = '20px';

    };


    function makeProgress() {

        const getAllCeils = getTbl.querySelectorAll('.ceil');



    };


 




















};