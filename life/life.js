(function life() {

    const life = document.querySelector('#life');

    const start = life.querySelector('.life__start');

    makeMarking();

    setStyle();

    const map = [];
    const all = [];
    const settings = {};
    const mapForEnd = [];
    let timerId;

    class Cell {

        constructor(argTr, argTd) {

            this._tr = argTr;

            this._td = argTd;

        }

        getCell() {

            return `ячейка ${this._tr} - ${this._td}`;

        }

        getNeighbors(argTrCount, argTdCount) {

            const _result = {};

            let _rightMiddle,
                _leftMiddle,
                _top,
                _bottom,
                _rightTop,
                _rightBottom,
                _leftTop,
                _leftBottom;

            if (this._tr < argTrCount) {

                if (this._isExists(this._tr + 1, this._td - 1) !== undefined) {

                    if (this._td - 1 !== 0) {

                        _leftBottom = [this._tr + 1, this._td - 1];

                        _result.leftBottom = _leftBottom;

                    }

                }
            }

            if (this._isExists(this._tr - 1, this._td - 1) !== undefined) {

                if (this._tr - 1 !== 0) {

                    if (this._td - 1 !== 0) {

                        _leftTop = [this._tr - 1, this._td - 1];

                        _result.leftTop = _leftTop;

                    }

                }

            }

            if (this._tr < argTrCount) {

                if (this._isExists(this._tr, this._td + 1) !== undefined) {

                    _rightBottom = [this._tr + 1, this._td + 1];

                    _result.rightBottom = _rightBottom;

                }

            }

            if (this._isExists(this._tr - 1, this._td + 1) !== undefined) {

                if (this._tr - 1 !== 0) {

                    _rightTop = [this._tr - 1, this._td + 1];

                    _result.rightTop = _rightTop;

                }

            }

            if (this._tr < argTrCount) {

                _bottom = [this._tr + 1, this._td];

                _result.bottom = _bottom;

            }

            if (this._isExists(this._tr - 1, this._td) !== undefined) {

                if (this._tr - 1 !== 0) {

                    _top = [this._tr - 1, this._td];

                    _result.top = _top;

                }

            }

            if (this._isExists(this._tr, this._td + 1) !== undefined) {

                _rightMiddle = [this._tr, this._td + 1];

                _result.rightMiddle = _rightMiddle;

            }

            if (this._isExists(this._tr, this._td - 1) !== undefined) {

                if (this._td - 1 !== 0) {

                    _leftMiddle = [this._tr, this._td - 1];

                    _result.leftMiddle = _leftMiddle;

                }

            }

            return _result;

        }

        _isExists(argTr, argTd) {

            return map[argTr][argTd];

        }

    };

    start.addEventListener('click', () => {

        closeStart();

        createElem('div', 'life__title', 'Это жизнь!', '.life__field');

        addField();

        createElem('div', 'life__text', '', '.life__field');

        addButtons();

    });

    function handlerStep() {

        const elems = life.querySelectorAll('.life__td');

        elems.forEach(elem => {

            const i = Number(elem.dataset.tr);

            const j = Number(elem.dataset.td);

            const result = processingNeighbors(map[i][j].getNeighbors(settings.width, settings.height));

            makeLife(elem, result);

        });

        addEnd();

        addText(mapForEnd.length + 1);

    };

    function makeLife(argElem, argCount) {

        if (argCount.length === 3) {

            argElem.classList.add('black');

        }

        if (argCount.length < 2 || argCount.length > 3) {

            argElem.classList.remove('black');

        }

    };

    function addButtons() {

        createElem('button', 'life__populate', 'Заселить', '.life');

        const populate = life.querySelector('.life__populate');

        populate.addEventListener('click', handlerPopulate);

        createElem('button', 'life__step', 'Одно поколение', '.life');

        const step = life.querySelector('.life__step');

        step.addEventListener('click', handlerStep);

        createElem('button', 'life__quick', 'Просто смотреть', '.life');

        const quick = life.querySelector('.life__quick');

        quick.addEventListener('click', () => {

            timerId = setInterval(function () {

                handlerStep();

            }, 1500);

        });

        createElem('button', 'life__stop', 'Остановить', '.life');

        const stop = life.querySelector('.life__stop');

        stop.addEventListener('click', () => {

            clearInterval(timerId);

        });

    };

    function addEnd() {

        checkRepeat();

        checkZeroForEnd();

        checkMapForEnd();

        makeMapForEnd();

    };

    function makeMarking() {

        life.innerHTML = `
        <div class="life__wrap">
        <input type="text" class="life__input life__width" placeholder="ширина (кол-во клеток)">
        <input type="text" class="life__input life__height" placeholder="высота (кол-во клеток)">
        Если просто нажать Старт, <br> то будет поле 20х20 клеток
        <button class="life__start">старт</button>
        </div>
        <div class="life__field"></div>
            `;

    };

    function setStyle() {

        const style = document.querySelector('style');

        style.innerHTML = style.innerHTML + `
        .life {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: 1px solid #999;
            padding: 10px;
        }

        .life__input {
            margin-bottom: 5px;
        }

        .life__wrap {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .life__table {
            border-spacing: 0;
        }

        .life__td {
            border: 1px solid #999;
            width: 4px;
            height: 4px;
        }

        .dn {
            display: none;
        }

        .life__run {
            margin-top: 5px;
        }

        .black {
            background-color: #000;
        }

        .life__populate {
            margin-top: 10px;
        }

        .life__step {
            margin-top: 10px;
        }

        .life__quick {
            margin-top: 10px;
        }

        .life__stop {

            margin-top: 10px;
        }

        .life__title {
            text-align: center;
            font-size: 23px;
            margin-bottom: 10px;
        }

        .span {
            margin-bottom: 10px;
            margin-top: 10px;
            font-size: 18px;
            color: red;
        }

        .life__text {
            text-align: center;
            margin-top: 10px;
        }

        .life__start {
            margin-top: 10px;
        }

        .life__field {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
            `;

    };


})();