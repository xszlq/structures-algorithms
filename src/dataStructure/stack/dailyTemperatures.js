/**
 * 给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。
 * 
 示例 1:
输入: temperatures = [73,74,75,71,69,72,76,73]
输出: [1,1,4,2,1,1,0,0]

 */

/**
 * for 循环解体办法
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const days = [];

  const dayLen = temperatures.length;

  for (let i = 0; i < dayLen; i++) {
    // 最后一天为0
    if (i === dayLen - 1) {
      days.push(0);
      break;
    }
    const left = temperatures[i];

    let countDay = 0;

    for (let j = i + 1; j < dayLen; j++) {
      const right = temperatures[j];
      countDay++;
      if (right > left) {
        days.push(countDay);
        break;
      }

      if (j === dayLen - 1) {
        days.push(0);
      }
    }
  }

  return days;
};
const temperatures1 = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures1));

/**
 * 单调栈
 * 单调递增stack存储数组的下标, 结果存储到数组 res
 * 过程如下：
 * [0(73)] [1, 0, 0, 0, 0, 0, 0, 0]
 * [1(74)] [1, 1, 0, 0, 0, 0, 0, 0]
 * [2(75)] [1, 1, 1, 0, 0, 0, 0, 0]
 * [2(75),3(71)] [1, 1, 1, 2, 0, 0, 0, 0]
 * [2(75),3(71),4(69)]
 * [2(75),5(72)]
 * [6(76)]
 * [6(76),7(73)]
 * @param {number[]} temperatures
 * @return {number[]}
 */
var monotoneStack = function (temperatures) {
  const listLen = temperatures.length;
  const res = new Array(listLen).fill(0);

  const stack = [];

  stack.push(0);

  for (let i = 1; i < listLen; i++) {
    while (
      stack.length &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      const top = stack.pop();
      res[top] = i - top;
    }

    stack.push(i);
  }

  return res;
};

console.log(monotoneStack(temperatures1));
