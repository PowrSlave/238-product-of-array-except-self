const leetFunc = require('./leetFunc')

describe("leetFunc test cases", () => {
    test('Because nums[0] + nums[1] == 9, we should return [0, 1].', () => {
        expect(leetFunc([2,7,11,15], 9)).toEqual([0,1])
    })
})