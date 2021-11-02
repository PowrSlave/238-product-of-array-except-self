/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//the least efficient time complexity solution of O(n^2)
// var twoSum = function(nums, target) {
//     for (var i=0; i<nums.length; i++) {
//         for (var j=i+1; j<nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i,j];
//             }
//         }
//     }
// };

// optimization #1: O(n) time complexity
var twoSum = function(nums, target) {

    let hash = {}

    for (let i = 0; i < nums.length; i++) {
        let n = nums[i]
        if (hash[target - n] !== undefined) {
            return [hash[target - n], i]
        }
        hash[n] = i
    }
    return []
};

module.exports = twoSum