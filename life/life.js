(function life() {

    const life = document.querySelector('#life');

    const start = life.querySelector('.life__start');

    makeMarking();

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

})();