/**
 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

 有效字符串需满足：

 左括号必须用相同类型的右括号闭合。
 左括号必须以正确的顺序闭合。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/valid-parentheses
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

var isValid = function(s) {
  let stackIns = new Stack();

  for(let char of s){
    if(isPair(stackIns.peek(), char)){
      stackIns.pop();
    }else{
      stackIns.push(char);
    }
  }

  return stackIns.isEmpty();
};


function isPair(s1, s2){
  let map = {
    "{": "}",
    "[": "]",
    "(": ")"
  }

  return map[s1] === s2
}

class Stack{
  constructor(){
    this.list = [];
  }
  push(v){
    this.list.push(v)
  }
  pop(){
    return this.list.pop();
  }
  peek(){
    return this.list[this.list.length -1]
  }
  isEmpty(){
    return this.list.length === 0
  }
}

console.log(isValid("()"))
