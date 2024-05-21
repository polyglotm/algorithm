// 3151-special-array-i
// URL: https://leetcode.com/problems/special-array-i/description/


function isArraySpecial(nums: number[]): boolean {
    if (nums.length === 1) {
      return true;
    }
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] % 2 === nums[i - 1] % 2) {
        return false;
      }
    }
  
    return true;
  };
  