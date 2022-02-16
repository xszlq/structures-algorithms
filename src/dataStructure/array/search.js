/*
* 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-search
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let len = nums.length;

  let left = 0;
  let right = len-1;

  if(len === 1) return nums[0] === target ? 0 : -1;
  if(len === 0) return -1;

  while(left < right){
    // 只有两个数的情况
    if(right - left === 1){
      if(target === nums[left]) return left
      if(target === nums[right]) return right;

      return -1
    }

    let compareIndex = parseInt((left + right)/2);

    if(nums[compareIndex] === target) return compareIndex;

    if(nums[compareIndex]>target){
      right = compareIndex
    }
    if(nums[compareIndex]<target){
      left = compareIndex
    }
  }

  return -1;
};

console.log(search([-1,0,3,5,9,12], 9))
console.log(search([-1,0,3,5,9,12], 2))


var removeElement = function(nums, val) {
  let k = 0;
  for(let i = 0;i < nums.length;i++){
    if(nums[i] != val){
      nums[k++] = nums[i]
    }
  }
  console.log(nums)
  return k;
};

removeElement([1,2,3,2,4], 2)