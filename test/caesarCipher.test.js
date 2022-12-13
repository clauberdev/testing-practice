
const caesarCipher = require('./caesarCipher')

test('A caesarCipher function that takes a string and returns it with each character "shifted"', () => {
    expect(caesarCipher("defend the east wall of the castle").toBe("efgfoe uif fbtu xbmm pg uif dbtumf"))
})