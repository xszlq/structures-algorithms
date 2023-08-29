/**
找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。

说明：

所有数字都是正整数。
解集不能包含重复的组合。
 */

let temp = [];
let result = [];
let triggerCount;

function combine(n, k) {
  triggerCount = 0;
  temp = [];
  result = [];
  combineHelper(n, k, 1);
  return result;
}

function combineHelper(n, k, start) {
  triggerCount++;
  if (temp.length === n) {
    const count = temp.reduce((acc, item) => acc + item, 0);
    if (count === k) {
      result.push([...temp]);
    }

    return true;
  }

  for (let i = start; i <= 9; i++) {
    temp.push(i);
    combineHelper(n, k, i + 1);
    temp.pop();
  }
}

combine(3, 7);

console.log(JSON.stringify(result), triggerCount);
