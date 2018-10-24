
function BinarySearchTree(value){
  this.value = value;
  this.left = null;
  this.right = null;
}
BinarySearchTree.prototype.insert = function(value, loc) {
  let context = loc || this;
  if(!this.value){
    this.value = new BinarySearchTree(value);
  }else {
    if(this.value < value){
      if(!this.right){
        this.right = new BinarySearchTree(value)
      }else {
        return this.insert(value, this.right).bind(this);
      }
    }else{
      if(!this.left){
        this.left = new BinarySearchTree(value)
      }else {
        return this.insert(value, this.left).bind(this);
      }
    }
  }
}



let x = new BinarySearchTree(12);
x.insert(15);
x.insert(11);
x.insert(17);
console.log(x)
