const maxProfit = require('./maxProfit')

describe("maxProfit test cases", () => {
    test('Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.', () => {
        expect(maxProfit([7,1,5,3,6,4])).toEqual(5)
    })
    test('In this case, no transactions are done and the max profit = 0.', () => {
        expect(maxProfit([7,6,4,3,1])).toEqual(0)
    })
    test('Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4.', () => {
        expect(maxProfit([3,2,6,5,0,3])).toEqual(4)
    })
    test('there is only one day, so profit is 0', () => {
        expect(maxProfit([4])).toEqual(0)
    })

})