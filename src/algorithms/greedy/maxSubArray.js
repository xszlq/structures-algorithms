/**
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

 子数组 是数组中的一个连续部分。

  

 示例 1：

 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 输出：6
 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 示例 2：

 输入：nums = [1]
 输出：1
 示例 3：

 输入：nums = [5,4,-1,7,8]
 输出：23

 思路1：暴力解法，两个for循环
 思路2：贪心解法。局部最优：当前连续和为负数立刻放弃，从下一个元素重新计算连续和，因为负数加上下一个元素连续和只会越来越小

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/maximum-subarray
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 暴力解法
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    let count, startIndex = 0, endIndex;
    for(let i=0; i<nums.length; i++){
        count = nums[i]
        if(count>max){
            max = count;
        }
        for(let j = i+1; j<nums.length; j++){
            count += nums[j];
            if(count > max){
                startIndex = i;
                endIndex = j;
                max = count;
            }
        }
    }

    console.log(startIndex, endIndex)

    return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([5,4,-1,7,8]));
console.log(maxSubArray([-1, 2]));
