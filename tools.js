module.exports = {
    intSpiral: class intSpiral {
        constructor(width, height) {
            this._width = width;
            this._height = height;
            this._square = this._width * this._height;
            this._layout = [];
            this._coordinates = {x: 0, y: 0};
            this._direction = {x: 1, y: 0};

            let initLayout = (x, y) => {
                this._layout = new Array(y);
                for (let i = 0; y > i; i++) this._layout[i] = new Array(x);
            };

            initLayout(this._width, this._height);
        };

        finishHim() {
            for (let number = 0; this._square > number; number++) {
                this.putValueIntoCoordinate(number);
                this.iterateCoordinates();
            }
            console.log(this._layout);
        };

        putValueIntoCoordinate(value) {
            this._layout[this._coordinates.y][this._coordinates.x] = value;
        }

        whatIsNext() {
            return {
                x: this._coordinates.x + this._direction.x,
                y: this._coordinates.y + this._direction.y
            };
        };

        iterateCoordinates() {
            if (!(this.whatIsNext().y >= 0 && this.whatIsNext().x >= 0 && this._layout.length > this.whatIsNext().y && this._layout[this.whatIsNext().y].length > this.whatIsNext().x && this._layout[this.whatIsNext().y][this.whatIsNext().x] === undefined)) {
                this.changeDirection();
            }

            this._coordinates.y = this.whatIsNext().y;
            this._coordinates.x = this.whatIsNext().x;
        }

        changeDirection() {
            switch (this._direction.x + "" + this._direction.y) {
                case "10":
                    this._direction = {x: 0, y: 1};
                    break;
                case "01":
                    this._direction = {x: -1, y: 0};
                    break;
                case "-10":
                    this._direction = {x: 0, y: -1};
                    break;
                case "0-1":
                    this._direction = {x: 1, y: 0};
                    break;

            }
        }

    }
};