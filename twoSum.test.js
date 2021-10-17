const twoSum = require('./twoSum')
const twoSum2 = require('./twoSum2')

describe("TwoSum tests: Unoptimized O(n^2)", () => {
    test('Because nums[0] + nums[1] == 9, we should return [0, 1].', () => {
        expect(twoSum([2,7,11,15], 9)).toEqual([0,1])
    })
    test('Because nums[1] + nums[2] == 6, we should return [1, 2].', () => {
        expect(twoSum([3,2,4], 6)).toEqual([1,2])
    })
    test('Because nums[0] + nums[1] == 6, we should return [0, 1].', () => {
        expect(twoSum([3,3], 6)).toEqual([0,1])
    })
})

describe("TwoSum tests: Optimized for  O(n)", () => {
    test('Because nums[0] + nums[1] == 9, we should return [0, 1].', () => {
        expect(twoSum([2,7,11,15], 9)).toEqual([0,1])
    })
    test('Because nums[1] + nums[2] == 6, we should return [1, 2].', () => {
        expect(twoSum([3,2,4], 6)).toEqual([1,2])
    })
    test('Because nums[0] + nums[1] == 6, we should return [0, 1].', () => {
        expect(twoSum([3,3], 6)).toEqual([0,1])
    })
})