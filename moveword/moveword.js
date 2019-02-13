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



    };





























})();