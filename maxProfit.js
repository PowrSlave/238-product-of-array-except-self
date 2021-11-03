/**
 * @param {number[]} prices
 * @return {number}
 */

//single pass solution
var maxProfit = function(prices) {

    if (prices.length < 2) {
        return 0
    }

    let minPrice = prices[0];
    let maxProfit = 0;

    //[3,2,6,5,0,3]

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice)
        } else {
            minPrice = Math.min(minPrice, prices[i])
        }
    }

    return maxProfit
};

module.exports = maxProfit