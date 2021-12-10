
// 动态规划版本
console.time('dynFib');
function dynFib (n) {

  if(n<2) return n;
  let queue = [0, 1];

  for(let i=2; i<=n; i++){
    let sum = queue[0] + queue[1];
    // 入队列
    queue.push(sum);
    // 出队列
    queue.shift();
  }

  return queue[1]
}

// 递归版本
console.time('recuFib');
function recuFib(n){
  if(n<2) return n;

  return recuFib(n-1) + recuFib(n-2)
}

console.log(recuFib(100))
// console.timeEnd('recuFib')
//  dynFib(100)
// console.timeEnd('dynFib')
