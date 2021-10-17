/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//the least efficient time complexity solution of O(n^2)

 var twoSum = function(nums, target) {
    for (var i=0; i<nums.length; i++) {
        for (var j=i+1; j<nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i,j];
            }
        }
    }
};

module.exports = twoSum