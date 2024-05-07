// 1060-missing-element-in-sorted-array
// URL: https://leetcode.com/problems/missing-element-in-sorted-array/description/?envType=study-plan-v2&envId=premium-algo-100

function missingElement(nums: number[], k: number): number {
    let count = 0;
    let target = nums[0];
    let index = 0;
  
    while (count < k) {
      if (target === nums[index]) {
        target += 1;
        index += 1;
      } else {
        count++;
        target++;
      }
    }
  
    return target - 1;
  };
  