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

    class MapWork {

        constructor(argObj) {

            this._map = argObj;

        }

        console() {

            // console.log('_map', this._map);
            // console.log('_map.size', this.size());

        }

        add(argStick) {

            this._map.set(this._num(), argStick);

            this.console();

        }

        size() {

            return this._num();

        }

        _num() {

            return this._map.size;

        }

        _for() {

            this._map.forEach((elem, i) => {

                console.log('_for', i, elem);


            });

        }

    }

    class ZIndex {

        constructor() {

            this._map = new Map;

        }

        console() {

            // console.log('_z', this._map);
            // console.log('_z.size', this.size());

        }

        add() {

            if (!this._map.has(this._num())) {

                this._map.set(this._num(), [0]);

            }

            this.console();

        }

        change(argNum) {

            this._map.set(argNum, [this._getNextNum(argNum)]);

            return this._getNextNum(argNum);

        }

        size() {

            return this._num();

        }

        getNum(argNum) {

            return this._map.get(argNum);

        }

        getMin() {

            const arr = this._for();

            arr.length = arr.length - 1;

            return Math.min(...arr);

        }

        _getNextNum(argNum) {

            let [num] = this._for(argNum);

            if (this._getMax(this._for()) === num) {

                return this._getMax(this._for());

            }

            return this._getMax(this._for()) + 1;

        }

        _num() {

            return this._map.size;

        }

        _getMax(argArr) {

            return Math.max(...argArr);

        }

        _for(arg) {

            const result = [];

            this._map.forEach((elem, i) => {

                // console.log('_for', i, elem);

                // if (elem[0] > 0) {

                if (arg) {

                    if (arg === i)

                        result.push(elem[0]);

                } else {

                    result.push(elem[0]);

                }

            });

            return result;

        }

    }

    class Storage {

        get() {

            const json = localStorage.getItem(settings.storage_name);

            return JSON.parse(json);

        }

        set(argValue) {

            const json = JSON.stringify(argValue);

            localStorage.setItem(settings.storage_name, json);

        }

    }

    class Save {

        constructor(argMap, argZ, argStorage) {

            this._map = argMap;

            this._zIndex = argZ;

            this._obj = [];

            this._storage = argStorage;

            this._check();

        }

        _check() {

            console.log('_check', this._obj);

            this._map.forEach((elem, i) => {

                if (this._isReal(elem[1])) {

                    let text = elem[1].value;

                    let width = elem[1].style.width;

                    let height = elem[1].style.height;

                    let top = elem[1].style.top;

                    let left = elem[1].style.left;

                    let zIndex = this._zIndex.getNum(i);

                    let minZIndex = this._zIndex.getMin();

                    let zForSave = zIndex[0] - minZIndex;

                    let item = this._map.get(i);

                    // console.log('_check', item, i, text, width, height, top, left, zForSave);

                    const obj = {};

                    obj.elem = item;
                    obj.text = text.trim();
                    obj.width = width;
                    obj.height = height;
                    obj.top = top;
                    obj.left = left;
                    obj.zForSave = zForSave;

                    this._obj.push(obj);

                    this._save();

                }

            });

        }

        _save() {

            this._storage.set(this._obj);

        }

        _isReal(argElem) {

            return document.body.contains(argElem);

        }

    }


})();