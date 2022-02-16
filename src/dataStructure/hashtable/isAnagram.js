/*
https://leetcode-cn.com/problems/valid-anagram/
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
注意：若s 和 t中每个字符出现的次数都相同，则称s 和 t互为字母异位词。*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// 解题思路： 1.便利第一个字符串用一个对象存储出现的字母以及次数 然后遍历第二个算出减去出现字母次数 最后遍历对象判断
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    let map = {};

    for(let i of s){
        if(map[i]){
            map[i] = map[i] + 1;
        }else{
            map[i] = 1;
        }
    }

    for(let i of t){
        if(map[i]){
            map[i] = map[i] - 1;
        }else{
            return false;
        }
    }

    // 判断是否有多余元素
    let keys = Object.keys(map);

    for(let i=0; i<keys.length; i++){
        if(map[keys[i]] !== 0){
            return false;
        }
    }

    return true;
};


console.log(isAnagram("anagram", "nagaram"));
