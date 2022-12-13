
const reverseString = require('../reverseString');

test('hello deve ser igual olleh', () => {
    expect(reverseString("hello")).toBe("olleh")
})