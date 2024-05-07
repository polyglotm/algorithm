from typing import List


class Solution:
    def missingElement(self, nums: List[int], k: int) -> int:
        target = nums[0]
        index = 0
        count = 0
        length = len(nums)

        while (count < k):
            if index == length:
                return target + k - count - 1

            if target < nums[index]:
                target += 1
                count += 1
            else:
                index += 1
                target += 1

        return target - 1
