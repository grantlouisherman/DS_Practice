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
  for(let i=this.heap.length;i>0;i--){
    let tmpCount = i;
    while(tmpCount > 0 && this.heap[tmpCount] < this.heap[Math.floor((tmpCount-1)/2)]){
      this.swap(this.heap, i);
      tmpCount = Math.floor((tmpCount-1)/2);
    }
  }
}
MinHeap.prototype.insert = function(value){
  this.heap.push(value);
}

let x = new MinHeap();
min = Math.ceil(1);
max = Math.floor(100);
for(let i=0;i<10;i++){
 x.insert(Math.floor(Math.random() * (max - min)) + min);
}
x.Heapify()
console.log(x.heap)
