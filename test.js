// Calculator constructor function
function Calculator() {
    this.result = 0;
}

// Addition method
Calculator.prototype.add = function(num) {
    this.result += num;
};

// Subtraction method
Calculator.prototype.subtract = function(num) {
    this.result -= num;
};

// Multiplication method
const Calculator = require('./path-to-your-calculator-file'); // Update with the path to your Calculator file

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('multiply method multiplies the result by the given number', () => {
        calculator.result = 5;
        calculator.multiply(2);
        expect(calculator.result).toBe(10);
    });

    test('multiply method works with negative numbers', () => {
        calculator.result = -3;
        calculator.multiply(4);
        expect(calculator.result).toBe(-12);
    });

    test('multiply method works with zero', () => {
        calculator.result = 10;
        calculator.multiply(0);
        expect(calculator.result).toBe(0);
    });
});

// Division method
Calculator.prototype.divide = function(num) {
    if (num !== 0) {
        this.result /= num;
    } else {
        console.log("Error: Division by zero is not allowed.");
    }
};

// Create a new calculator object
const calculator = new Calculator();

// Perform some calculations
calculator.add(5);
calculator.subtract(2);
calculator.multiply(3);
calculator.divide(4);

// Print the result
console.log("Result:", calculator.result);