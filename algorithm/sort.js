var a = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];
// 冒泡
function bubbleSort(arr) {
  let len = arr.length;
  if (len < 2) return arr;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (arr[i] > arr[j]) {
        let tem = arr[j];
        arr[j] = arr[i];
        arr[i] = tem;
      }
    }
  }
  console.log(arr);
}
// bubbleSort(a)

// 快排
function quickSort(arr) {
  let len = arr.length;
  if (len < 2) return arr;
  let index = arr[len >> 1];
  let left = [];
  let right = [];
  let mid = arr.splice(index, 1);
  for (let i = 0; i < len; i++) {
    if (arr[i] > mid) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return left.concat([mid], right);
}
// quickSort(a);
// console.log(a);

// 插入排序
function insertSort(arr) {
  let len = arr.length;
  let current;
  let prev;
  for (let i = 1; i < len; i++) {
    prev = i - 1;
    current = arr[i];
    while (prev >= 0 && arr[prev] > current) {
      arr[prev + 1] = arr[prev];
      prev--
    }
    arr[prev+1] = current;
  }
  return arr;
}
console.log(insertSort(a))