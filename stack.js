'use strict';

class Stack {

    constructor() {
        this.top = 0;
        this.data = [];
    }

    peek() {
        return this.top;
    }

    pop() {

        if (this.top === 0) {
            return 'UNDERFLOW';
        }

        (this.top)--;
        let item = this.data[this.top];

        return item;
    }

    push(item) {

        this.data[this.top] = item;
        (this.top)++;

        return this.top;
    }

    display() {

        for (let i = 0; i < this.top; i++) {
            console.log(`\n Element at ${i}: ${this.data[i]} \n`);
        }

    }
}