// const bubbleSort = arr => {
//   for(let i=0; i<arr.length; i++) {
//     for(let j=0; j<arr.length -i -1; j++) { // -i diyar fole iterate kome jabe
//       console.log('To see: ', arr, arr[j], arr[j+1])
//       if(arr[j] > arr[j+1]) {
//         // let temp = arr[j];
//         // arr[j] = arr[j+1];
//         // arr[j+1] = temp;
        
//         [arr[j], arr[j+1]] = [arr[j+1], arr[j]] //ES6
//       }
//     }
//   }
//   return arr;
// }

//optimize
const bubbleSort = arr => {
  let isSwap
  for(let i=0; i<arr.length; i++) {
    isSwap  = false
    for(let j=0; j<arr.length -i -1; j++) { // -i diyar fole iterate kome jabe
      console.log('To see: ', arr, arr[j], arr[j+1])
      if(arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        
        // [arr[j], arr[j+1]] = [arr[j+1], arr[j]] //ES6
        isSwap = true;
      }
    }
    if(!isSwap) break;
  }
  return arr;
}


// const input = [4, 2, 1, 3]
const input = [3, 8, 9, 4, 6, 1, 11, 24, 28, 21, -5, -65];
console.log(bubbleSort(input))