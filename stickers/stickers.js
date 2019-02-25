(function stickers() {

    const settings = {

        notes: document.querySelector('#stickers'),
        sticker: 'sticker',
        storage_name: 'stick'

    };

    class Notes {

        constructor() {

            this._start();

        }

        _start() {

            const objForElems = new Map;

            const mapWork = new MapWork(objForElems);

            const zIndex = new ZIndex();

            const storage = new Storage();

            window.addEventListener('load', () => {

                const history = storage.get();

                const install = new Install(mapWork, zIndex, history);

            });

            settings.notes.addEventListener('dblclick', () => {

                new Sticker(mapWork, zIndex, event.pageX, event.pageY);

            });

            window.addEventListener('unload', () => {

                const save = new Save(objForElems, zIndex, storage);

            });

        }

    }




  

})();