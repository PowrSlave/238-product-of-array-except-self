const containsDuplicate = require('./containsDuplicate')

describe("containsDuplicate test cases", () => {
    test('Because the values at array index 0 and index 3 are both 1, return true', () => {
        expect(containsDuplicate([1,2,3,1])).toBeTruthy()
    })
    test('Because no values in the array are duplicates, return false', () => {
        expect(containsDuplicate([1,2,3,4])).toBeFalsy()
    })
    test('Because there are multiple duplicates pairs in the array, return true', () => {
        expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBeTruthy()
    })
})