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

let result = twoSum([2,7,11,15], 9);
console.log(result);