# structures-algorithms

数据结构和算法

## 数据结构

### 数组

### stack（栈）

先进后出

#### monotone stack（单调栈）

在先进后出的基础上，从栈顶到栈低元素是单调递增或者递减的

- 每日温度（dailyTemperatures） middle:

  - 用两个 for 循环可以解决问题，但是时间复杂度是 O(n^2)
  - 单调栈解决办法

- 接雨水（trap）hard
  - 暴力解法 遍历每个元素，前后查找左边和右边最大值，并且与当前值求差值，大于 0 则表示能接到雨水。因为每个元素都要遍历前后元素，所以时间复杂度是 O(n^2)
  - 动态规划版本，如果知道每个元素左右最大的值则不需要额外的便利，通过从前往后算出每个元素左边最大值，再从右往左算出每个元素右边最大值，再计算每日接到的雨水就简单的多。并且时间复杂度降为了 O(n)。
  - 单调栈版本 把雨水分解为横向宽度来计算，不容易想到

### queue（队列）

#### 队列

先进先出

#### 优先队列

出队列不遵循先进先出的原则

### 链表

#### 单向链表（linkedlist）

链表 node 只有 element 和 next，只有从头到尾遍历

#### 双向链表（double)

双向链表实现从尾到头遍历就很简单了，找到尾节点，while 循环即可

#### 循环链表

循环脸变和单向链表类似，只是 head.next 指向 head 自己，在遍历自己的时候要修改遍历条件，这里就不实现了

### Dictionary（字典）

js 中的对象基于字典设计

### HashTable（散列）

目前还没看到散列的使用场景

### Set(集合)

实例方法有 add、remove、size、union、difference、subset、intersect

### 二叉树和二叉树查找（BST）

二叉查找树实例方法：insert inOrder:中序遍历 getMin getMax find

### Graph(图)

图的简单实现，构造函数接受入参顶点数。用一个二维数组来存储每个顶点链接的顶点，两个顶点连接成一条边。

### tree(树)

- 将数组转换为树 arrToTree
- 找到对应 path findPath

## 算法

### 排序（sort)

CArray(数组测试平台类)，排序算法都基于这个数组生成类来做。

#### bubbleSort（冒泡排序）

#### insertSort（插入排序）

#### selectionSort（选择排序）

#### quickSort（快速排序）

### 检索

#### 顺序查找

使用循环查找

#### 二分查找

- binarySearch 最开始用的递归来解决，耗时很少，但是内存消耗较高。可以优化为动态标记左右边界版本

### 高级算法

#### 动态规划(dynamic)

- 斐波那契数列（dynFib）
- 寻找最长公共子串（lcs）
- 杨辉三角(generate)

#### 贪心算法(greedy)

- 摆动序列最长子序列长度（wiggleMaxLength）
- 找零问题
- 最大子数组和（maxSubArray） todo：采用贪心解法实现

#### 回溯算法

回溯算法主要使用穷举的方式解题，实现采用递归方式。常见的组合问题、排序问题使用回溯算法。一般采用回溯模板解题  
``
// 回溯模板
function backtracking(param){
if(终止条件){
存放结果
return
}

    for(选择：本层集合中元素（树中节点孩子的数量就是集合的大小）){
        处理节点；
        backtracking(路径，选择列表); // 递归
        回溯，撤销处理结果
    }

}
``

- combine
- combine2 (找出和为指定值的组合)

## leetcode

基于这篇文章来刷：https://programmercarl.com/0202.%E5%BF%AB%E4%B9%90%E6%95%B0.html

### 数组

- 二分查找
- 有序数组的平方
- 长度最小的子数组

### 哈希表

- 字母异位词
- 快乐数
- 两数之和
- 四数相加

### 字符串

- 反转字符串（不适用内置函数）
- 反转字符串 2

### 链表

- 删除指定元素
- 反转链表

### 队列和栈

- 有效的括号(isValid)

### 二叉树 bst 路径

- 二叉树递归遍历 bst/bst
- 二叉树利用栈迭代遍历 bst/stack preOrder 方法通过栈来实现对二叉树的遍历
- 最大深度 maxDepth
- 反转二叉树 invertTree
- 最小深度 https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/

### 双指针法 dataStructure/doublePointer

- 移除元素（removeElement）
