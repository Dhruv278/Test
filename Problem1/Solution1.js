function findCombinations(arr) {
  let output = [];
   arr=arr.sort((a, b) => a - b)

  for (let i = 0; i < arr.length - 2; i++) {
    for(let j=i+1;j<arr.length-1;j++){
      for(let k=j+1;k<arr.length;k++){
        if(arr[i]+arr[j]==arr[k]){
          let pair = [arr[i], arr[j],arr[k]].sort((a, b) => a - b);

          // check that triplet is already existed or not
          if(!output.some(item => JSON.stringify(item) === JSON.stringify(pair))){
            output.push(pair)
          }
        }
      }
    }
  }

  return  output;
}

// example usage
let arr = [2, 3, 11, 30, 3, 1, 4, 14, 27, 17, 5];
let result = findCombinations(arr);
console.log(result);


// Time complexity in both cases is O(n^3)
// Space Complexity is O(1)