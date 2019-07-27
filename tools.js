module.exports = {
    intSpiral: class intSpiral {
        constructor(width, height) {
            this._width = width;
            this._height = height;
            this._square = this._width * this._height;
            this._layout = [];
            this.createLayout();
        }

        createLayout() {
            for (let rowNumber = 0; rowNumber < this._height; rowNumber++) {
                this._layout[rowNumber] = new Array(this._width);
            }
        }

        finishHim() {
            let row = 0;
            let col = 0;
            for (let number = 0; number < this._square; number++) {
                col = number % this._width;
                row = Math.floor(number / this._width);
                this.setPoint(col, row, number);
            }
            console.log(this._layout);
        }

        setPoint(coordinateX, coordinateY, value) {
            this._layout[coordinateY][coordinateX] = value;
        }
    }
};