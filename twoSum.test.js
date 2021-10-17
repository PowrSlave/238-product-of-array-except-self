const twoSum = require('./twoSum')

describe("TwoSum tests", () => {
    test('Because nums[0] + nums[1] == 9, we should return [0, 1].', () => {
        expect(twoSum([2,7,11,15], 9)).toEqual([0,1])
    })
})