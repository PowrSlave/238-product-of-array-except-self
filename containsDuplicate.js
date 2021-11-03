/**
 * @param {number[]} nums
 * @return {boolean}
 */

//return true if array has duplicate values and false if it does not

/* Solution 1: quick fast and loose attempt. */

// var containsDuplicate = function(nums) {
//     //[1,2,3,1]
//     nums.sort(function(a, b){return a-b})
//     //[1,1,2,3]
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] === nums[i-1]) {
//             return true
//         }
//     }

//     return false
// };

/* Solution 2: slightly faster via the use of a map instead of sorting values first */

var containsDuplicate = function(nums) {
    const map = {}
    for(const num of nums) {
        // If we have seen this num before return true
        if(map[num]) return true
        map[num] = true
    }
    return false
};


module.exports = containsDuplicate