function findUniqueCombinations(arr) {
    // remove duplicates
     const uniqueNums = new Set(arr); 
     arr=Array.from(uniqueNums);
 
 
    
   
     const results =[]
     for (let i = 0; i < arr.length; i++) {
       for (let j = i + 1; j < arr.length; j++) {
         const sum = arr[i] + arr[j];
 
         // check the sum is in the arr or not 
         if (arr.includes(sum)) {
           const pair = [arr[i], arr[j],sum].sort((a, b) => a - b);
           results.push(pair);
         }
       }
     }
   
     return results;
   }
   
   // Example usage
   const arr = [ 2, 3, 11, 30, 3, 1, 4, 14, 27, 17, 5 ];
   const combinations = findUniqueCombinations(arr);
   console.log(combinations);
 
 
 //   Base case time complaxity =O(n^2)
 //  Worst case time complaxity =O(n^2)
 //  Space Complaxity=O(n) (Because we use set to remove duplicates)
   