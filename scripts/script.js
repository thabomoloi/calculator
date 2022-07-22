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

function parseExpression(exp) {

    exp = exp.split(" ");

    const output = new Queue();
    const operator_stack = new Stack();

    const precedence = {
        "^": [4, "right"],
        "/": [3, "left"],
        "*": [3, "left"],
        "p": [2, "left"],
        "m": [2, "left"]
    };
    var operators = ["^", "/", "*", "p", "m"]

    for (let i = 0; i < exp.length; i++) {
        if (!isNaN(exp[i]) && !isNaN(parseFloat(exp[i]))) {
            output.enqueue(exp[i])
        }
        else if (operators.indexOf(exp[i]) != -1) {
            while ((operator_stack.peek() && operator_stack.peek() != "(") &&
                (precedence[operator_stack.peek()][0] > precedence[exp[i]][0] ||
                    (precedence[operator_stack.peek()][0] == precedence[exp[i]][0] &&
                        (precedence[operator_stack.peek()][1] == "left" && precedence[exp[i]][1] == "left"))
                )) {
                output.enqueue(operator_stack.remove())
            }
            //}
            operator_stack.add(exp[i]);
        }
        else if (exp[i] == "(") {
            operator_stack.add(exp[i]);
        }
        else if (exp[i] == ")") {
            while (operator_stack.peek() != "(") {
                console.assert(!operator_stack.isEmpty(), { stack: operator_stack, msg: "stack is empty" });
                /* If the stack runs out without finding a left parenthesis, then there are mismatched parentheses. */
                output.enqueue(operator_stack.remove());
            }
            console.assert(operator_stack.peek() == "(", { top: operator_stack.peek(), msg: "top is not '('" });
            operator_stack.remove();
        }

    }
    /* After the while loop, pop the remaining items from the operator stack into the output queue. */
    while (operator_stack.size() != 0) {
        /* If the operator token on the top of the stack is a parenthesis, then there are mismatched parentheses. */
        console.assert(operator_stack.peek() != "(", { top: operator_stack.peek(), msg: "top is '('" });
        output.enqueue(operator_stack.remove());
    }
    return output;
}

exp = "-3 p 4 * 2 / ( 1 m 5 ) ^ 2 ^ 3";
sya = parseExpression(exp);
