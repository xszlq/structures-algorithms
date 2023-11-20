/**
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 示例：

s = "leetcode"
返回 0

s = "loveleetcode"
返回 2
你可以假定该字符串只包含小写字母
 */

const firstUniqChar = (str) => {
  const map = {};
  for (let i of str) {
    map[i] = (map[i] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (map[str.charAt(i)] === 1) return i;
  }

  console.log(map);

  return -1;
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
