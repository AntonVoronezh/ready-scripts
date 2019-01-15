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

    getBtn.addEventListener('click', function () {

        getTbl.innerHTML = '';

        const elem = getPlace.querySelector('.end-time');

        elem2.style.display = 'none';

        elem.innerHTML = `Осталось <span class="timer">${setup(round).time}</span> секунд`;

        createTable(shuffle(range(1, setup(round).sqr)), round);

    });


    function createTable(argArr, argDiv) {

        let makeTr;

        for (let i = 0; i < argArr.length; i += 1) {


            if (i === 0 || i % argDiv === 0) {
                makeTr = document.createElement('tr');
            }

            let makeTd = document.createElement('td');

            makeTd.innerHTML = argArr[i];

            setStyle(makeTd);

            makeTr.appendChild(makeTd);

            if (i === 0 || i % argDiv === 0) {
                getTbl.appendChild(makeTr);
            }
        }


        makeActive();
        startTimer();
        makeBtnDis()

    };

    createTable(shuffle(range(1, setup(round).sqr)), round);

    function makeActive() {

        const getAllTd = getTbl.querySelectorAll('td');

        getAllTd.forEach(elem => {

            elem.addEventListener('click', function addActive() {

                if (isNext(+elem.innerHTML) === +elem.innerHTML) {

                    elem.classList.add('active');

                    elem.removeEventListener('click', addActive);

                }

            });

        });

    };


    function isNext(argNum) {


        const getAllActive = getTbl.querySelectorAll('.active');


        if (getAllActive.length + 1 === round * round) {

            makeWinner();

            stopTimer();

        }

        return getAllActive.length + 1;

    };



    function startTimer() {

        window.timerId = window.setInterval(timer, 1000);

    };

    function timer() {

        const elem = getPlace.querySelector('.timer');

        let newNum = +elem.innerHTML - 1;

        elem.innerHTML = newNum;


        if (newNum === 0) {

            stopTimer();

            endGame();

        }

    };

    function stopTimer() {

        window.clearInterval(window.timerId);

    };

    function endGame() {

        const getAllTd = getTbl.querySelectorAll('td');
        const getAllActive = getTbl.querySelectorAll('.active');
        const getSpan = getPlace.querySelector('.result');
        const getDiv = getPlace.querySelector('.end-time');

        getAllTd.forEach(elem => {

            elem.classList.add('end');

        });

        getSpan.innerHTML = getAllActive.length;

        getDiv.innerHTML = '<h3>Конец игры</h3>';

        elem2.style.display = 'block';

        getBtn.innerHTML = 'Начать заново';

        round = 2;

        makeBtnDis();

    };

    function makeBtnDis() {

        if (getBtn.disabled) {
            getBtn.disabled = false;
        } else {
            getBtn.disabled = true;
        }

    };

    function setStyle(argElem) {

        argElem.style.cssText = `
border: 1px solid #000000;
    width: 50px;
    height: 50px;
    text-align: center;
    font-size: 35px;
    cursor: pointer;
`;

    };






};


