class Stack{
    constructor(){
        this.dataSource = [];
    }

    push(v){
        this.dataSource.push(v);
    }
    pop(){
        return this.dataSource.pop()
    }
    // 访问栈顶元素
    peek(){
        return this.dataSource[this.dataSource.length-1]
    }
    clear(){
        this.dataSource = [];
    }
    length(){
        return this.dataSource.length;
    }
}
