const maxProfit = require('./maxProfit')

describe("maxProfit test cases", () => {
    test('Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.', () => {
        expect(maxProfit([7,1,5,3,6,4])).toEqual(5)
    })
    test('In this case, no transactions are done and the max profit = 0.', () => {
        expect(maxProfit([7,6,4,3,1])).toEqual(0)
    })
})