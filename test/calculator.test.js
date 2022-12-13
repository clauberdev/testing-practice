// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.

const calculator = require('./calculator')

test('adds 2 + 2 to equal 4', () => {
    expect(calculator.add(2, 2)).toBe(4)
})

test('subtract 4 - 2 to equal 2', () => {
    expect(calculator.subtract(4, 2)).toBe(2)
})

test('divide 8 / 2 to equal 4', () => {
    expect(calculator.divide(8, 2)).toBe(4)
})

test('multiply 6 * 2 to equal 12', () => {
    expect(calculator.multiply(6, 2)).toBe(12)
})

