const insertionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        console.log(arr, arr[j], arr[j - 1])
        // [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
        let temp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = temp
      } else {
        break
      }
    }
  }
  return arr;
}

const input = [3, 8, 9, 4, 6, 1, 11, 24, 28, -9, 21];
console.log(insertionSort(input))