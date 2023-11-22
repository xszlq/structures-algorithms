/**
 * 给你一个 非严格递增排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数。
 * 
例如： 
输入：nums = [0,0,1,1,1,2,2,3,3,4]
输出：5, nums = [0,1,2,3,4]
 */

/*
两个指针：快指针和慢指针
*/
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let res = 0;

  let cur = nums[0];
  for (let j = 1; j < nums.length; j++) {
    if (cur !== nums[j]) {
      res += 1;
      cur = nums[j];
      nums[res] = nums[j];
    }
  }
  return res + 1;
}

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums));
console.log(nums);
