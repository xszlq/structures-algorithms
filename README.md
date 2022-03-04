# structures-algorithms
数据结构和算法

## 数据结构

### 数组


### stack（栈）
先进后出

### queue（队列）
#### 队列
先进先出
#### 优先队列
出队列不遵循先进先出的原则

### 链表
#### 单向链表（linkedlist）
链表node只有element和next，只有从头到尾遍历
#### 双向链表（double)
双向链表实现从尾到头遍历就很简单了，找到尾节点，while循环即可

#### 循环链表
循环脸变和单向链表类似，只是head.next指向head自己，在遍历自己的时候要修改遍历条件，这里就不实现了

### Dictionary（字典）
js中的对象基于字典设计

### HashTable（散列）
目前还没看到散列的使用场景


### Set(集合)
实例方法有add、remove、size、union、difference、subset、intersect

### 二叉树和二叉树查找（BST）
二叉查找树实例方法：insert inOrder:中序遍历 getMin getMax find

### Graph(图)
图的简单实现，构造函数接受入参顶点数。用一个二维数组来存储每个顶点链接的顶点，两个顶点连接成一条边。

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

### 高级算法
#### 动态规划(dynamic)
- 斐波那契数列（dynFib）
- 寻找最长公共子串（lcs）
#### 贪心算法
- 找零问题

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
- 反转字符串2

### 链表
- 删除指定元素
- 反转链表

### 队列和栈
- 有效的括号(isValid)

### 二叉树 bst路径
- 二叉树递归遍历 bst/bst
- 二叉树利用栈迭代遍历 bst/stack preOrder方法通过栈来实现对二叉树的遍历
- 最大深度 maxDepth
- 反转二叉树 invertTree
- 最小深度 https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/

