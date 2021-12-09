
class CArray{
    constructor(numElements) {
        this.dataStore = [];
        this.pos = 0;
        this.newElements = numElements;

        for(let i=0; i<this.newElements; i++){
            this.dataStore[i] = i;
        }
    }

    insert(element){
        this.dataStore[this.pos++] = element;
    }

    toString(){

    }
    // 全部元素设置为0
    clear(){
        for(let i=0; i<this.dataStore.length; i++){
            this.dataStore[i] = 0;
        }
    }

    setData(){
        for(let i=0; i<this.newElements; i++){
            this.dataStore[i] = Math.floor(Math.random()*(this.newElements+1))
        }
    }

    // 交换顺序
    swap(arr, index1, index2){
        let element1 = arr[index1];
        let element2 = arr[index2];

        arr[index1] = element2;
        arr[index2] = element1;
    }

    // 冒泡排序
    bubbleSort(){
        for(let outer = this.dataStore.length; outer>1; outer--){
            for(let inner = 0; inner<outer-1; inner++){
                if(this.dataStore[inner] > this.dataStore[inner+1]){
                    this.swap(this.dataStore, inner, inner+1);
                }
            }
        }
    }
    // 选择排序
    selectionSort(){
        let arrLen = this.dataStore.length;
        let arr = this.dataStore;

        for(let outer=0; outer<arrLen-1; outer++){
            // 默认是当前元素
            let minIndex = outer;
            for(let inner = outer+1; inner<arrLen; inner++){
                if(arr[minIndex] > arr[inner]){
                    minIndex = inner;
                }
            }

            let element = arr[minIndex];
            arr.splice(minIndex, 1);
            arr.splice(outer, 0, element)
        }
    }
    // 插入排序
    insertSort(){
        let arr = this.dataStore;

        for(let outer=1; outer<arr.length; outer++){
            let compareIndex = outer;

            for(let inner=outer-1; inner>=0; inner--){
               if(arr[inner]>arr[compareIndex]){
                   this.swap(arr, compareIndex, inner);
                   compareIndex = inner;
               }
            }
        }
    }
}

let nums = new CArray(10);
nums.setData();
// nums.bubbleSort();
// nums.selectionSort();
nums.insertSort();

console.log(nums.dataStore);
