class  Set {
  constructor (){
    this.dataStore = [];
  }

  add(data){
    if(this.dataStore.indexOf(data)< 0){
      this.dataStore.push(data);
      return true;
    }else{
      return false;
    }
  }

  remove(data){
    let pos = this.dataStore.indexOf(data);
    if(pos > -1){
      this.dataStore.splice(pos, 1);
      return true;
    }else{
      return false;
    }
  }

  size(){
    return this.dataStore.length;
  }

  // 交集
  intersect(){
    let tempSet = new Set();

    this.dataStore.forEach(i=>{
      if(set.contain(i)){
        tempSet.add(i);
      }
    })

    return tempSet;
  }

  // 判断一个集合是否为另一个集合子集
  subset(set){
    let isSub = true;

    for(let i=0; i<set.dataStore.length; i++){
      if(!this.contain(set.dataStore[i])) return false;
    }

    return isSub;
  }

  // 补集
  difference(set){
    let tempSet = new Set();

    this.dataStore.forEach(i=>{
      if(!set.contain(i)) tempSet.push(i)
    })

    return tempSet;
  }

  show(){
    return this.dataStore;
  }
  // 并集
  union(set){
    let tempSet = new Set();

    this.dataStore.forEach(i=>{
      if(!tempSet.contain(i)){
        tempSet.add(i);
      }
    })

    set.dataStore.forEach(i=>{
      if(!tempSet.contain(i)){
        tempSet.add(i);
      }
    })

    return tempSet;
  }
  contain(data){
    return this.dataStore.includes(data)
  }
}

let set1 = new Set();

set1.add(1);
set1.add(1);
set1.add(2);
set1.add(3);

console.log(set1.show())

let set2 = new Set();
set2.add(2);
set2.add(4);

// 并集
let unionSet = set1.union(set2);

console.log(unionSet.show());

console.log(set1.subset(set2));
console.log(unionSet.subset(set2));

