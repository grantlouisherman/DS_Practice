function Node(value){
  this.value = value;
  this.next = null;
}



class Singlelinkedlist {
  constructor(){
    this.list;
  }
  insertion(value){
    if(!this.list){
      this.list = new Node(value);
    } else {
      let n = this.list;
      while(n.next){
        n = n.next;
      }
      n.next=new Node(value);
    }
  }
  deleteTail(){
    if(!this.list.next){
      this.list = '';
    }else{
      let n = this.list;
      let fast = this.list.next
      while(n.next){
        if(!n.next.next){
          n.next = null;
          return;
        }
        n = n.next;
        fast = n.next.next;
      }
    }
  }
  deleteHead(){
    if(!this.list.next){
      this.list = '';
    } else {
      let n = this.list;
      this.list = n.next;
    }
  }
}

class DoublyLinkedList{
  constructor(){
    this.list;
  }
  Node(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
  insertion(value){
    if(!this.list){
      this.list = new Node(value);
    }else {
      let n = this.list;
      while(n.next){
        n = n.next;
      };
      n.next = new Node(value);
      n.next.prev = n;
    }
  }
  delete(value){
    if(!this.list){
      return false;
    }else{
      let n = this.list;
      if(n.value === value){
        this.list = this.list.next;
        this.list.prev = null;
      }
      n = n.next;
      while(n.next){
        if(n.value === value){
          n.prev.next = n.next;
          n.next.prev = n.prev;
          return true;
        }
        n = n.next;
      }
      if(n.value === value){
        n.prev.next = null;
        return true;
      }
      return false;
    }
  }
}

let x = new DoublyLinkedList();
x.insertion(12);
x.insertion(11);
x.insertion(15);
console.log(x)
x.delete(12);
console.log(x)
