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