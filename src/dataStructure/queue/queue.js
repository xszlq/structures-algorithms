class Queue{
    constructor(){
        this.dataStore = [];
    }
    enqueue(v){
        this.dataStore.push(v);
    }
    dequeue(){
        return this.dataStore.shift();
    }
    front(){
        return this.dataStore[0]
    }
    end(){
        return this.dataStore[this.dataStore.length - 1];
    }
    // 判断一个队列是否为空
    empty(){
        return this.dataStore.length === 0
    }
}
