/*
* 给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。

如果剩余字符少于 k 个，则将剩余字符全部反转。
如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-string-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */

// 思路：基于2k循环，然后改变顺序
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let sArr = s.split(''), sLen = sArr.length;

    for(let i=0; i<sLen; i+=2*k){
        let start = i;
        let end = i+k>sLen-1? sLen-1: i+k-1;

        console.log(start, end)

        while(start < end){
            [sArr[start], sArr[end]] = [sArr[end], sArr[start]];

            start++;
            end--;
        }
    }

    return  sArr.join('');
};

console.log(reverseStr('abcdefg', 2))
console.log(reverseStr('abcd', 3))
