//* 1. Find positives, negatives and zeroes in the Array.
// function findPosiNegiAndZeros(ar){
//      p=0, z=0, n=0;
//     ar.forEach((value,index, self)=> {
//         if(value === 0) {
//             z++;
//         }
//         else if(value<0) {
//             n++;
//         }
//         else {
//             p++
//         }
//     })
//     const no = ar.length;
//     console.log(`${(p/no).toFixed(6)}, ${(n/no).toFixed(6)}, ${(z/no).toFixed(6)}`)
//     console.log((p/no).toFixed(6))
// }

// const numbers = [1, -2, 3, 0, -4, 5, 0, -6, 7, 0];
// findPosiNegiAndZeros(numbers);

//* 2. Find Position of Kangaroos' Meeting
// function KangarooMeet(x1,v1,x2,v2) {
//     if(v1 === v2){
//         return x1 === x2 ? 'YES' : 'NO'
//     }
//     let d= x2-x1;
//     let vd=v1-v2;

//     if(d % vd ===0 && (d/vd)>=0) {
//         return 'YES'
//     }
//     else {
//         return 'NO'
//     }
// }

// console.log(KangarooMeet(0,4,3,3))

//* 3. Anagram String
function isAnagram(a, b) {
    const formatString = str => str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    return formatString(a) === formatString(b);
}

console.log(isAnagram('listen', 'silent')); // true