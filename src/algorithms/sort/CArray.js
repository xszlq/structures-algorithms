
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
}

let nums = new CArray(10);
nums.setData();
nums.bubbleSort();

console.log(nums.dataStore);
