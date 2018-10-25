
function BinarySearchTree(value){
  this.value = value;
  this.left = null;
  this.right = null;
}
BinarySearchTree.prototype.insert = function(value) {
  if(!this.value){
    this.value = new BinarySearchTree(value);
  }else {
    if(this.value < value){
      if(!this.right){
        this.right = new BinarySearchTree(value)
      }else {
        return this.right.insert(value);
      }
    }else{
      if(!this.left){
        this.left = new BinarySearchTree(value)
      }else {
        return this.left.insert(value);
      }
    }
  }
};

BinarySearchTree.prototype.search = function(value){
  if(this.value  === value){
    return true;
  }else {
    if(this.value < value){
      if(!this.right){
        return false;
      }else {
        return this.right.search(value);
      }
    }else{
      if(!this.left){
        return false;
      }else {
        return this.left.search(value);
      }
    }
  }
}

//(Left-Root-Right)
/*
Uses of Inorder
In case of binary search trees (BST),
Inorder traversal gives nodes in non-decreasing order.
To get nodes of BST in non-increasing order,
 a variation of Inorder traversal where Inorder traversal s reversed can be used.
*/
BinarySearchTree.prototype.Inorder = function(){
  if(this.left){
    this.left.Inorder();
  }
  console.log(this.value);
  if(this.right){
    this.right.Inorder();
    }
}

//(Root, Left, Right)
/*
Preorder traversal is used to create a copy of the tree.
Preorder traversal is also used to get prefix expression on of an expression tree.
Please see http://en.wikipedia.org/wiki/Polish_notation to know why prefix expressions are useful.
Example: Preorder traversal for the above given figure is 1 2 4 5 3.
*/
BinarySearchTree.prototype.Preorder = function(){
  console.log(this.value);
  if(this.left){
    this.left.Inorder();
  }
  if(this.right){
    this.right.Inorder();
    }
}

/*

Uses of Postorder
Postorder traversal is used to delete the tree.
Please see the question for deletion of tree for details.
Postorder traversal is also useful to get the postfix expression of an expression tree.
Please see http://en.wikipedia.org/wiki/Reverse_Polish_notation to for the usage of postfix expression.

*/
BinarySearchTree.prototype.Postorder = function(){
  if(this.right){
    this.right.Inorder();
    }
  console.log(this.value);
  if(this.left){
    this.left.Inorder();
  }

}


let x = new BinarySearchTree(12);
min = Math.ceil(1);
max = Math.floor(100);
for(let i=0;i<40;i++){
 x.insert(Math.floor(Math.random() * (max - min)) + min);
}
console.log(x.Postorder())
