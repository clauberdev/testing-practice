// A capitalize function that takes a string and returns it with the first character capitalized.

const capitalize = require('./capitalize');

test('return first character capitalized', () => {
    expect(capitalize("hello").toBe('Hello'))
})