//slice function
const arr = [1, 2, 4];
// console.log(arr.slice(1, 3));

//elaborate way
// const square = [];
// for(let i = 0; i<arr.length; i++){
//     const ele = arr[i];
//     const result = ele * ele;
//     square.push(result);
// }
// console.log(square);

const result = arr.map(function(element){//map array er protita element dhore ene kaj koray
    return element * element;
})
// console.log(result);

const result1 = arr.map(ele => ele * ele);//eta true false ans dibe
console.log(result1);

const result2 = arr.filter(ele => ele > 3);//eta real value dibe
console.log(result2);//filter array return korbe

const result3 = arr.find(ele => ele > 3);
console.log(result3);//find just ekta value return korbe