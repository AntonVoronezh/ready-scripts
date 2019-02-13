(function moveword() {

    // <div id="moveword" class="moveword"></div>

    const words = {

        3: [
            'аул', 'бак', 'воз', 'гол', 'дым', 'ель', 'жук', 'зло', 'имя', 'ком', 'лев', 'мыс', 'нос', 'оба'
        ],
        4: [
            'атом', 'брус', 'вилы', 'двор', 'енот', 'жара', 'игла', 'кафе', 'леди', 'мята', 'негр', 'ожог'
        ],
        5: [
            'веник', 'гудок', 'дылда', 'жокей', 'зерно', 'ислам', 'кивер', 'ложка', 'мойва', 'навет', 'океан'
        ],
        6: [
            'ацетон', 'вымпел', 'герцог', 'домино', 'ерунда', 'истома', 'лавина', 'медаль', 'напалм', 'ограда'
        ],
        7: [
            'атомщик', 'бандюга', 'вестерн', 'гашетка', 'дробина', 'единица', 'желание', 'инвалид', 'костыль', 'матрица'
        ],

    };

    const setings = {
        numInArrWords: 0,
        wordSet: '',
        selectedOption: 0,
        prototypeWord: '',

        oldNumInArrWords: 0,
        oldwordSet: '',
        oldSelectedOption: 0,
        oldPrototypeWord: '',

        flag: false
    };

    const moveword = document.querySelector('#moveword');

    makeMarking();

    setStyle();

    const start = moveword.querySelector('.moveword__start');

    start.addEventListener('click', () => {

        const lettersCount = findSelectedOption();

        startPlay(lettersCount);

    });

    function startPlay(argNumSelectedOption) {

        setings.selectedOption = argNumSelectedOption;

        addFields(argNumSelectedOption);

        addButtons();

        const word = getWord(argNumSelectedOption);

        // console.log(word);

        setings.prototypeWord = word;

        const arrLetters = getArrFromStr(word);

        const arrShuffledLetters = shuffleLetters(arrLetters);

        addShuffledLetters(arrShuffledLetters);

        addHideVisible();

        addElementsListeners();

        if (setings.flag === false) {

            addButtonsListeners();

            setings.flag = true;

        }

    };

    function addButtonsListeners() {

        const again = moveword.querySelector('.moveword__again');

        again.addEventListener('click', () => {

            addHideVisible();

            cleanField();

            cleanSetings();

            startPlay(setings.selectedOption);

        });

        const more = moveword.querySelector('.moveword__more');

        more.addEventListener('click', () => {

            addHideVisible();

            cleanField();

            cleanSetings();

            const arrLength = words[setings.selectedOption].length;

            setings.numInArrWords = setings.numInArrWords + 1;

            if (arrLength === setings.numInArrWords) {

                setings.selectedOption = setings.selectedOption + 1;

                setings.numInArrWords = 0;

                changeOption(setings.selectedOption);

                startPlay(setings.selectedOption);


            } else {

                startPlay(setings.selectedOption);

            }

        });

    };

    function cleanSetings() {

        setings.wordSet = '';

    };

    function cleanField() {

        const elem = moveword.querySelector('.moveword__field');

        elem.innerHTML = '';

    };

    function addButtons() {

        createElem('button', 'moveword__again dn', 'Еще раз', '.moveword');

        createElem('button', 'moveword__more dn', 'Дальше', '.moveword');

        const more = moveword.querySelector('.moveword__more');

        more.disabled = true;

    };

    function addFields(argCount) {

        createElem('div', 'moveword__parent', '', '.moveword__field');

        createElem('div', 'moveword__panel', '', '.moveword__field');

        const parent = moveword.querySelector('.moveword__parent');

        const panel = moveword.querySelector('.moveword__panel');

        parent.style.height = `${(argCount * 50) + 10}px`;

        panel.style.height = `${(argCount * 50) + 10}px`;

    };

    function addElementsListeners() {

        const parent = moveword.querySelector('.moveword__parent');

        const elems = moveword.querySelectorAll('.moveword__elems');

        const field = moveword.querySelector('.moveword__field');

        elems.forEach((elem, i) => {

            elem.addEventListener('dragstart', (event) => {

                event.dataTransfer.setData('data-index', i);

                event.dataTransfer.setData('data-letter', elem.innerHTML);

            });

        });

        parent.addEventListener('dragover', (event) => {

            event.preventDefault();

        });

        parent.addEventListener('drop', (event) => {

            parent.appendChild(elems[event.dataTransfer.getData('data-index')]);

            addLetterInWordSet(event.dataTransfer.getData('data-letter'));

            if (getCountLetters() === setings.selectedOption) {

                if (setings.prototypeWord === setings.wordSet) {

                    addBorder(true);

                    const more = moveword.querySelector('.moveword__more');

                    more.disabled = false;

                } else {

                    addBorder(false);

                }

            }

        });

    };

    function addBorder(arg) {

        const elem = moveword.querySelector('.moveword__parent');

        const elems = moveword.querySelectorAll('.moveword__elems');

        if (arg) {

            elem.classList.add('green');

        } else {

            elem.classList.add('red');

        }

        elems.forEach(item => {

            if (arg) {

                item.classList.add('none');

            } else {

                item.classList.add('none');

            }

        });

    };

    function getCountLetters() {

        return moveword.querySelector('.moveword__parent').childNodes.length;

    };

    function addLetterInWordSet(argStr) {

        setings.wordSet += argStr;

    };

    function addHideVisible() {

        const again = moveword.querySelector('.moveword__again');

        const more = moveword.querySelector('.moveword__more');

        start.classList.add('dn');
        more.classList.add('db');
        again.classList.add('db');

    };

    function addShuffledLetters(argArr) {

        argArr.forEach(elem => {

            createElem('div', 'moveword__elems', elem, '.moveword__panel', true);

        });

    };












})();