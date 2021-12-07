
class Graph{
  // 构造函数接受顶点数量
  constructor (v){
    this.vertices = v;
    // 边的数量
    this.edges = 0;
    this.adj = [];

    for(let i=0; i<v; i++){
      this.adj[i] = [];
      // 初始一个空字符串
      // this.adj[i].push('')
    }

    this.visitedList = new Array(v).fill(false);
  }

  addEdge(v, w){
    this.adj[v].push(w);
    this.adj[w].push(v);

    this.edges++;
  }

  showGraph(){
    for(let i=0; i<this.vertices; i++){

      for(let j=0; j<this.vertices; j++){
        if(this.adj[i][j] !== undefined){
          console.log(this.adj[i][j])
        }
      }
    }
  }
  // 深度优先遍历
  deepFirst(index){
    this.visitedList[index] = true;

    if(this.adj[index] !== undefined){
      console.log(`visit ${index}`)
    }

    for(let i=0; i<this.adj[index].length; i++){
      let vertice = this.adj[index][i];
      if(!this.visitedList[vertice]){
        this.deepFirst(vertice);
      }
    }
  }
}

let graph1 = new Graph(5);
graph1.addEdge(0, 1)
graph1.addEdge(0, 2)
graph1.addEdge(1, 3)
graph1.addEdge(2, 4)

graph1.showGraph();

graph1.deepFirst(0);
