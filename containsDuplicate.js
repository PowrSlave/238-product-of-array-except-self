/**
 * @param {number[]} nums
 * @return {boolean}
 */

//return true if array has duplicate values and false if it does not

var containsDuplicate = function(nums) {
    //[1,2,3,1]
    nums.sort(function(a, b){return a-b})
    //[1,1,2,3]
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i-1]) {
            return true
        }
    }

    return false
};

module.exports = containsDuplicate