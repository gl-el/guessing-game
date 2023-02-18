class GuessingGame {
    constructor() {
        this.minNum;
        this.maxNum;
        this.half = 0;
    }
    setRange(min, max) {
        this.minNum = min;
        this.maxNum = max;
    }

    guess(number) {
        return this.half = Math.ceil((this.maxNum + this.minNum) / 2);
    }

    lower() {
        this.maxNum = this.half;
    }

    greater() {
        this.minNum = this.half;
    }
}

module.exports = GuessingGame;
