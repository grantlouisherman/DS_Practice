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
  let heap = this.heap
  let count = this.heap.length;
  while(count > 0){
    let parent = Math.floor((count-1)/2);
    if(heap[count] < heap[parent]){
      this.swap(heap, count);
      count = this.heap.length;
    } else{
      count--;
    }
  }
}
MinHeap.prototype.insert = function(value){
  this.heap.push(value);
  this.Heapify();
}
MinHeap.prototype.delete = function(value){
  this.heap.forEach((item, idx) => {
    if(item === value){
      this.heap.splice(idx,1);
    }
  });
  this.Heapify();
}

let x = new MinHeap();
min = Math.ceil(1);
max = Math.floor(100);
for(let i=0;i<10;i++){
 x.insert(Math.floor(Math.random() * (max - min)) + min);
}
x.insert(10);
console.log(x.heap);
x.delete(10);
console.log(x.heap);
