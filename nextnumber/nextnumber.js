function nextNumber() {

    // <script src="nextnumber.js"></script>
    // <div id="next-number">

    const getElem = document.getElementById('next-number');

    let round = 2;

    init();

    function setup(argNum) {

        return {
            sqr: argNum * argNum,
            time: argNum * argNum * 2
        };

    };


    function init() {



        getElem.innerHTML = `<h1>Следующее число </h1>
    aka AntonVoronezh
     <br> <br> <br>
    <table class="tbl"></table><br>
    <div class="end-time">Осталось <span class="timer">${setup(round).time}</span> секунд</div><br>
    <div class="end-time2">Ваш результат <span class="result"></span> из ${setup(round).sqr}</div><br>
    <button class="btn">начать заново</button>
    `;

        getElem.style.border = '1px solid #000';
        getElem.style.textAlign = 'center';
        getElem.style.padding = '20px';

        const getStyle = document.querySelector('style');




        getStyle.innerHTML = getStyle.innerHTML + `
.tbl {
    margin: 0 auto;
}
.active {
background-color: red;
color: #fff;
}
.end {
background-color: gray;
}`;



    };

    const getPlace = document.getElementById('next-number');
    const getTbl = getPlace.querySelector('.tbl');
    const getBtn = getPlace.querySelector('.btn');
    const elem2 = getPlace.querySelector('.end-time2');






















};


