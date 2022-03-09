let nodeList = [
    {
        parentId: 0,
        id: 1,
        value: '一级'
    },
    {
        parentId: 0,
        id: 2,
        value: '二级'
    },
    {
        parentId: 1,
        id: 3,
        value: "一级-子级",
    },
    {
        parentId: 3,
        id: 4,
        value: "一级-子1-子1"
    },
    {
        parentId: 2,
        id: 5,
        value: "二级-子1"
    },
    {
        parentId: 2,
        id: 6,
        value: "二级-子2"
    },
];

function arrToTree(list){
    let result = [];
    list.forEach(i=>{
        // 根节点
        if(i.parentId === 0){
            i.children = getChildren(list, i.id)
            result.push(i);
        }
    })

    return result;
}

function getChildren(list, id){
    let result = [];
    for(let i=0; i<list.length; i++){
        if(list[i].parentId === id){
            list[i].children = getChildren(list, list[i].id)
            result.push(list[i])
        }
    }
    return result;
}

console.log(JSON.stringify(arrToTree(nodeList)))
