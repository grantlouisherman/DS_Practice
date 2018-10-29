/*
1. (index − 1)/2 (parent index)
2. 2 ∗ index + 1 (left child)
3. 2 ∗ index + 2 (right child)
*/

function MinHeap(){
  this.heap = [];
}
MinHeap.prototype.swap = function(arr, i){
  let tmpVal = this.heap[i];
  let pValue = this.heap[Math.floor((i-1)/2)];
  this.heap[i] = pValue;
  this.heap[Math.floor((i-1)/2)] = tmpVal;
}

MinHeap.prototype.Heapify = function(){
  for(let i=0;i<this.heap.length;i++){
    // let parent = (i-1)/2;
    while(this.heap[i] < this.heap[Math.floor((i-1)/2)]){
      this.swap(this.heap, i);
    }
  }
}
MinHeap.prototype.insert = function(value){
  this.heap.push(value);
  this.Heapify();
}

let x = new MinHeap();
min = Math.ceil(1);
max = Math.floor(100);
for(let i=0;i<40;i++){
 x.insert(Math.floor(Math.random() * (max - min)) + min);
}
console.log(x.heap)
