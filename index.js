const selectionSot = arr => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j
      }
    }
    // [arr[i], arr[lowest]] = [arr[lowest], arr[i]] //not work
    if (i !== lowest) {
      console.log('to see: ', arr, i, lowest)
      let temp = arr[i]
      arr[i] = arr[lowest]
      arr[lowest] = temp
    }
  }
  return arr;
}


// const input = [0, 1, -1, 3];
const input = [3, 8, 9, 4, 6, 1, 11, 24, 28, 21];
console.log(selectionSot(input))