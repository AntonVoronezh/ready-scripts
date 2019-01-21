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


    };






















};