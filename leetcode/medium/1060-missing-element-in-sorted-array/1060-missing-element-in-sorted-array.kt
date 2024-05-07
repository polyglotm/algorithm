class Solution {
    fun missingElement(nums: IntArray, k: Int): Int {
        var target = nums[0]
        var index = 0
        var count = 0
        var length = 0

        while (count < k) {
            if (index == nums.size) {
                return target + k - count - 1
            }

            if (nums[index] == target) {
                index++
            } else {
                count++
            }
            target++
        }

        return target - 1
    }
}
