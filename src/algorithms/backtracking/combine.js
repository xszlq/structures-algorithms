/**
 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

 你可以按 任何顺序 返回答案。
 https://leetcode-cn.com/problems/combinations/

 解题思路：
 优化：去掉没必要的遍历 详见29行代码
 */

let outPut = [];
let temp  = [];

var combine = function(n, k,) {
    outPut = [];
    combineHelper(n, k, 1);
    return outPut;
};

function combineHelper(n, k, startIndex){
    if(temp.length === k){
        return outPut.push([...temp]);
    }

    // 未优化版本 有很多不必要的遍历
    // for(let i = startIndex; i<n; i++){
    // opt:减少不必要的遍历
    for(let i = startIndex; n-i+1>=k-temp.length; i++){
        temp.push(i);
        combineHelper(n, k, i+1);
        temp.pop();
    }
}

combine(4,2);
console.log(outPut);


