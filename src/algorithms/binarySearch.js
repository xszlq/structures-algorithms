/**
 * 
 * https://leetcode.cn/problems/binary-search/description/
给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 * @returns 
 */

// 递归版本 内存消耗过高
var search = function (nums, target, base) {
  const len = nums.length;
  const half = Math.ceil(len / 2);

  const start = base ? base : 0;

  if (len <= 2) {
    return nums.indexOf(target) === -1 ? -1 : nums.indexOf(target) + start;
  }

  // 中数小于target， 取二分后的后半部分继续查找
  if (nums[half - 1] < target) {
    return search(nums.slice(half - 1), target, half - 1 + start);
  }
  // 中树大于target， 取二分后的前半部分继续查找
  else if (nums[half - 1] > target) {
    return search(nums.slice(0, half - 1), target, start);
  } else {
    return half - 1 + start;
  }
};

const num1 = [-1, 0, 3, 5, 9, 12],
  target1 = 9;

const num2 = [-1, 0, 3, 5, 9, 12],
  target2 = 2;

const num3 = [-1, 0, 5],
  target3 = 5;

// console.log(search(num1, target1));
// console.log(search(num2, target2));
console.log(search(num3, target3));

// while 循环版本 内存消耗少很多，时间从leetcode上看慢很多？
var search2 = function (nums, target) {
  let left = 0,
    right = nums.length;

  while (left < right) {
    const half = Math.ceil(right - left / 2);

    // 中数小于target， 取二分后的后半部分继续查找
    if (nums[half - 1] < target) {
      left = half;
    }
    // 中树大于target， 取二分后的前半部分继续查找
    else if (nums[half - 1] > target) {
      right = half - 1;
    } else {
      return half - 1;
    }
  }

  return -1;
};

console.log(search2(num1, target1));
