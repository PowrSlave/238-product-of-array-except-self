const productExceptSelf = require('./productExceptSelf')

describe("productExceptSelf test cases", () => {
    test('The product of each index in [1,2,3,4] except current index should be [24,12,8,6]', () => {
        expect(productExceptSelf([1,2,3,1])).toBe([24,12,8,6])
    })
    test('The product of each index in [-1,1,0,-3,3] except current index should be [0,0,9,0,0]', () => {
        expect(productExceptSelf([-1,1,0,-3,3])).toBe([0,0,9,0,0])
    })
})