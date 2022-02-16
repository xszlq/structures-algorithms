/*
给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，请你计算有多少个元组 (i, j, k, l) 能满足：

0 <= i, j, k, l < n
nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/4sum-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


// 思路：先遍历nums1和nums2 把所有可能出现的和作为map的key值，value为出现的次数。在遍历nums3和nums4,计算出可能的和，然后判断map中是否有key值与和加起来为0的，为0的count+对应的value

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {

};