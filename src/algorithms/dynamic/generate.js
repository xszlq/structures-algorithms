/**
 * 给定一个非负整数 numRows， 生成杨辉三角的前 numRows 行。
 * 例如：
 * 
 * 输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
[1,5,10,10,5,1]
 * 
 */

function generate(rowNums) {
  if (rowNums === 0) {
    return [];
  }
  if (rowNums === 1) {
    return [[1]];
  }
  if (rowNums === 2) {
    return [[1], [1, 1]];
  }

  const returnValue = [[1], [1, 1]];

  for (let i = 2; i < rowNums; i++) {
    const pre = returnValue[i - 1];
    const newValue = [1];

    for (let j = 0; j < pre.length - 1; j++) {
      newValue.push(pre[j] + pre[j + 1]);
    }
    newValue.push(1);
    returnValue.push(newValue);
  }

  return returnValue;
}

console.log(JSON.stringify(generate(6)));
