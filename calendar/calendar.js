function makeCalendar() {

    // <div id="calendar"></div>
    // makeCalendar();

    const calendar = document.querySelector('#calendar');

    setStyle();
    makeMarking();

    const calendarInfo = calendar.querySelector('.calendar__info');
    const calendarDates = calendar.querySelector('.calendar__dates');
    const calendarPrev = calendar.querySelector('.calendar__prev');
    const calendarNext = calendar.querySelector('.calendar__next');

    const dateInint = new Date();

    const year = setupDates().year,
        month = setupDates().month,
        day = setupDates().day,
        date = setupDates().date;

    let monthNumber = month;
    let yearNumber = year;
    const arrMonths = ['январь', 'февраль', 'март', 'апрель', 'март', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']

    createDatesTable(year, month, date, calendarDates);

    function createDatesTable(argYear, argMonth, argDate) {

        const daysInMonth = getLastDayOfMonth(argYear, argMonth);

        const firstDay = 1;

        const NumberOfFirstDayRussianVariant = getNumberOfDayRussianVariant(argYear, argMonth, firstDay);

        const NumberOfLastDayRussianVariant = getNumberOfDayRussianVariant(argYear, argMonth, daysInMonth);

        const countEmptyStartMonth = getCountEmpty(NumberOfFirstDayRussianVariant, 'start');

        const countEmptyFinishMonth = getCountEmpty(NumberOfLastDayRussianVariant, 'finish');

        const arrNumbers = makeArr(firstDay, daysInMonth);

        const arrNumbersWidthStartEmptys = makeArrWidthEmptys(arrNumbers, 'start', countEmptyStartMonth);

        const arrNumbersWidthFinishEmptys = makeArrWidthEmptys(arrNumbersWidthStartEmptys, 'finish', countEmptyFinishMonth);
        
        const chunkedArr = chunkArr(arrNumbersWidthFinishEmptys);
       
        makeTableFromArr(chunkedArr, calendarDates, argDate, argYear, argMonth);

        makeInfo(argYear, argMonth, calendarInfo);

    };

    calendarNext.addEventListener('click', getNextMonth);

    calendarPrev.addEventListener('click', getPrevMonth);

    function getPrevMonth() {

        clearTable();

        if (monthNumber > 0) {

            monthNumber -= 1;

        } else {

            yearNumber -= 1;

            monthNumber = arrMonths.length - 1;
        }

        createDatesTable(yearNumber, monthNumber, date, calendarDates);

    };

    function getNextMonth() {

        clearTable();

        if (monthNumber < arrMonths.length - 1) {

            monthNumber += 1;

        } else {

            yearNumber += 1;

            monthNumber = 0;

        }

        createDatesTable(yearNumber, monthNumber, date, calendarDates);

    };



















};