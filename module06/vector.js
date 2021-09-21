module.exports = class Vector {
    constructor(data) {
        this.data = data;
    }
    validate(length) {
        let equalFlag = Boolean();
        if (this.data.length === length) {
            equalFlag = true;
        } else {
            equalFlag = false;
            console.error('Error: vectors are not of the same dimension');
        }
        return equalFlag;
    };

    add(vector) {
        if (this.validate(vector.data.length)) {
            let newData = this.data.map((value, index) => value + vector.data[index]);
            return new Vector(newData);
        }
    };

    subtract(vector) {
        if (this.validate(vector.data.length)) {
            let newData = this.data.map((value, index) => value - vector.data[index]);
            return new Vector(newData);
        }
    };

    dot(vector) {
        if (this.validate(vector.data.length)) {
            let accumulator = 0;
            this.data.map((value, index) => accumulator += (value * vector.data[index]));
            return accumulator;
        }
    };

    norm() {
        if (this.data.length) {
            let accumulator = 0;
            this.data.map((value) => accumulator += Math.pow(value, 2));
            return `sqrt(${accumulator}) = ${Math.sqrt(accumulator)}`;
        }
    };

    equalTo(vector) {
        if (this.validate(vector.data.length)) {
            let message = '';
            JSON.stringify(this.data) === JSON.stringify(vector.data) ? message = 'Equals' : message = 'Not Equals';
            return message;
        }
    };

    toString() {
        if (this.data.length) {
            return `(${this.data.join(',')})`;
        }
    };
}
