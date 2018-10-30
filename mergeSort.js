function swap(newIdx, oldVIdx, arr){
  let tmpNew = arr[newIdx];
  let tmpOld = arr[oldVIdx];
  arr[oldVIdx]=tmpNew;
  arr[newIdx]=tmpOld;
}

function merge(left, right){
  let results = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]){
      results.push(left[leftIndex]);
      leftIndex++
    }else{
      results.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return results.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
function MergeSort(list){
  if(list.length === 1){
    return list;
  }
  let middle = Math.floor(list.length/2);
  let left = list.slice(0, middle);
  let right = list.slice(middle);
  return merge(MergeSort(left), MergeSort(right));
}



console.log(MergeSort([2,1,5,4,1, 0, 50]))
/*

Merge Sort illustrated
[2,1,5,4,1,0, 50,20]

MergeSort{
  left => [2,1,5,4]
  right => [1,0, 50,20]
  return merge(MergeSort(left), MergeSort(right))
}
returns merge which recursies on the MergeSort
So then MS is called again( we will do the left side )
MergeSort([2,1,5,4]){
left => [2,1]
right => [5,4]
return merge(MergeSort(left), MergeSort(right))
}
Then we finally hit the base case when the arrays are length one
So then we bounce
and eventually merge is called with merge([1],[2])
then merge compares the two arrays and returns
[1,2]

and keeps going

}



*/
