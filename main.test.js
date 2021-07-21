const getPath = require('./main')

test('getPath return null if have no argument', () => {
    expect(getPath()).toBe(null)
})