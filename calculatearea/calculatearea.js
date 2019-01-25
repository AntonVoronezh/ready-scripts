(function calculateArea() {
    // <div id="area"></div>

    const area = document.querySelector('#area');

    makeMarking();

    setStyle();

    const geometricShapes = [
        {
            shape: 'квадрат',
            formula: (a) => a * a,
            elements: {
                a: 'длина стороны'
            }
        },
        {
            shape: 'ромб',
            formula: (a, b) => (a * b) / 2,
            elements: {
                a: 'диагональ ромба a',
                b: 'диагональ ромба b'
            }
        },
        {
            shape: 'круг',
            formula: (r) => 3.14 * (r * r),
            elements: {
                r: 'радиус круга'
            }
        },
        {
            shape: 'кольцо',
            formula: (R, r) => 3.14 * (Math.pow(R, 2) - Math.pow(r, 2)),
            elements: {
                R: 'внешний радиус R',
                r: 'внутренний радиус r'
            }
        },
        {
            shape: 'прямоугольник',
            formula: (a, b) => a * b,
            elements: {
                a: 'длина стороны a',
                b: 'длина стороны b'
            }
        },
        {
            shape: 'трапеция',
            formula: (a, b, h) => (a + b) * h / 2,
            elements: {
                a: 'длина основания a',
                b: 'длина основания b',
                h: 'высота h'
            }
        },
        {
            shape: 'параллелограмм',
            formula: (a, h) => a * h,
            elements: {
                a: 'длина основания a',
                h: 'высота h'
            }
        },
        {
            shape: 'равносторонний треугольник',
            formula: (a, h) => (a * h) / 2,
            elements: {
                a: 'длина стороны a',
                h: 'высота h'
            }
        },
        {
            shape: 'прямоугольный треугольник',
            formula: (a, b) => (a * b) / 2,
            elements: {
                a: 'длина катета a',
                b: 'длина катета b'
            }
        },
        {
            shape: 'произвольный треугольник (по 3-м сторонам)',
            formula: (a, b, c) => (a + b + c) / 2,
            elements: {
                a: 'длина стороны a',
                b: 'длина стороны b',
                c: 'длина стороны c'
            }
        },

    ];


    const list = area.querySelector('.area__list');

    makeList(geometricShapes);


    function makeList(argObj) {

        argObj.forEach((elem, i) => {

            const li = createElem('li');

            li.classList.add('area__item');

            li.dataset.number = i;

            li.innerHTML = ucFirst(elem.shape);

            li.addEventListener('click', makePage);

            list.appendChild(li);

        });

    };


    function makePage() {

        const { shape, formula, elements } = geometricShapes[this.dataset.number];

        clearPage();

        addTitle(shape);

        makeInputsForElements(elements);

        addButton(formula);

    };






































})();





