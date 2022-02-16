/**
 * 编写一个算法来判断一个数 n 是不是快乐数。

 「快乐数」 定义为：

 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
 然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
 如果这个过程 结果为 1，那么这个数就是快乐数。
 如果 n 是 快乐数 就返回 true ；不是，则返回 false 。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/happy-number
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let count = calCount(n);
    if(count===1) return true;

    let map={};
    while(count !== 1){
        count = calCount(count);

        if(map[count]){
            break;
        }else{
         map[count] = true;
        }
    }

    return count === 1;
};

function calCount(n){
    let strN = n.toString();

    let count=0;
    for(let i of strN){
        count += i/1*i;
    }

    return count;
}

console.log(isHappy(33))
console.log(isHappy(19))
