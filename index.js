// Two Sum Problem

var twoSum = function(nums, target) {
    let arrayOfNums = [];
    for (let i = 0; i < nums.length; i++) 
        for (let j = 0; i < nums.length; i++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
};