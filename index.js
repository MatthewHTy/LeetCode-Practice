// Two Sum Problem
var twoSum = function(nums, target) {
    // for loop needed to run through the input of the integer array
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            // another for loop needed to account for the second num inputted
            if (nums[i] + nums[j] === target) {
                // if integeres inputted = target, return the two nums
                return [i, j]
            }
        }
    }
 };