/**
 * https://leetcode.cn/problems/trapping-rain-water/description/
 *
 * 动态规划实现
 * @param {number[]} height
 * @return {number}
 */
var dynamicTrap = function (height) {
  let rains = 0;
  let arrLen = height.length;

  let leftMaxHeight = [];
  leftMaxHeight.push(height[0]);
  for (let i = 1; i < height.length; i++) {
    const cur = height[i];
    leftMaxHeight[i] = Math.max(leftMaxHeight[i - 1], cur);
  }
  let rightMaxHeight = new Array(arrLen).fill(0);

  rightMaxHeight[arrLen - 1] = height[arrLen - 1];
  for (let i = arrLen - 2; i >= 0; i--) {
    const cur = height[i];
    rightMaxHeight[i] = Math.max(rightMaxHeight[i + 1], cur);
  }

  console.log(leftMaxHeight, rightMaxHeight);

  for (let i = 1; i < height.length; i++) {
    const minHeight = Math.min(leftMaxHeight[i], rightMaxHeight[i]);
    const rainDayHeight = minHeight - height[i];
    if (rainDayHeight > 0) {
      rains += rainDayHeight;
    }
  }

  return rains;
};

const height1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

console.log(dynamicTrap(height1));
