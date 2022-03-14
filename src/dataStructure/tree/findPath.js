// 实现 findPath函数，输入id，找到对应路径，并以数组形式返回， id输入6，返回[3,4,6]
// 实现思路1：先递归找到指定节点，并返回true。用一个全局作用域的数组来存储逆向路径
// 实现思路2： 使用回溯算法。确定回溯条件，找到id为指定id的节点，如果没找到就回溯。
let list = [
    {
        id: 1,
        children: [
            {
                id: 2,
            }
        ]
    },
    {
        id: 3,
        children: [
            {
                id:4,
                children: [
                    {
                        id: 5
                    },
                    {
                        id: 6
                    }
                ]
            }
        ]
    }
];

// 路径节点id
let nodePathArr = [];

function findPath(tree, id, result){
    for(let i=0; i<tree.length; i++){
        if(tree[i].id === id){
            nodePathArr.push(id)
            return true;
        }
        if(tree[i].children){
            let result =  findPath(tree[i].children, id)
            if(result) {
                nodePathArr.push(tree[i].id)
                return true;
            }
        }
    }
}

// findPath(list, 6);
// 这个路径是逆向的
// console.log(nodePathArr)


let pathArr = [];
// 采用回溯算法
function findPath2(tree, id){
    for(let i = 0; i<tree.length; i++){
        if(tree[i].id === id){
            pathArr.push(id);
            return true;
        }

        if(tree[i].children){
            pathArr.push(tree[i].id);
            let result = findPath2(tree[i].children, id);
            if(result) return true;
            pathArr.pop()
        }
    }
}

findPath2(list, 2);

console.log(pathArr, count)
