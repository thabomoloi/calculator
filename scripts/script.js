/**
 * Adds two numbers.
 * @param {Number} a 
 * @param {Number} b 
 * @returns the sum of a and b.
 */
function add(a, b) {
    return a + b;
}

/**
 * Subtract one number from the another.
 * @param {Number} a 
 * @param {Number} b 
 * @returns the diffrence between a and b.
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Multiplies two numbers.
 * @param {Number} a 
 * @param {Number} b 
 * @returns the product of a and b.
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Divide one number by another.
 * @param {Number} a The dividend.
 * @param {Number} b The divisor.
 * @returns the quotient between a and b.
 */
function divide(a, b) {
    return a / b;
}

/**
 * Returns value of base taken to a specified number
 * @param {Number} a The base.
 * @param {Number} b The exponent.
 */
function pow(a, b) {
    return a ** b;
}
/**
 * Takes in two numbers and operator then returns result.
 * @param {Number} a 
 * @param {Number} b 
 * @param {Number} operator 
 */
function operate(a, b, operator) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "/":
            return divide(a, b);
        case "*":
            return multiply(a, b);
        case "^":
            return pow(a, b);
        default:
            console.log(`Error: The operator "${operator}" is not supported.`);
            break;
    }
}

/**
 * Queue implementation
 * @link https://www.programiz.com/javascript/examples/queue
 */
class Queue {
    constructor() {
        this.items = [];
    }

    // add element to the queue
    enqueue(element) {
        return this.items.push(element);
    }

    // remove element from the queue
    dequeue() {
        if (this.items.length > 0) {
            return this.items.shift();
        }
    }

    // view the last element
    peek() {
        return this.items[this.items.length - 1];
    }

    // check if the queue is empty
    isEmpty() {
        return this.items.length == 0;
    }

    // the size of the queue
    size() {
        return this.items.length;
    }

    // empty the queue
    clear() {
        this.items = [];
    }
}

/**
 * Stack implementation
 * @link https://www.programiz.com/javascript/examples/stack
 */
class Stack {
    constructor() {
        this.items = [];
    }

    // add element to the stack
    add(element) {
        return this.items.push(element);
    }

    // remove element from the stack
    remove() {
        if (this.items.length > 0) {
            return this.items.pop();
        }
    }

    // view the last element
    peek() {
        return this.items[this.items.length - 1];
    }

    // check if the stack is empty
    isEmpty() {
        return this.items.length == 0;
    }

    // the size of the stack
    size() {
        return this.items.length;
    }

    // empty the stack
    clear() {
        this.items = [];
    }
}
