# 3173-bitwise-or-of-adjacent-elements
# URL: https://leetcode.com/problems/bitwise-or-of-adjacent-elements/description/
class Solution:
    def orArray(self, nums: List[int]) -> List[int]:
        res = []

        for i in range(len(nums) - 1):
            res.append(nums[i] | res[i - 1])

        return res
