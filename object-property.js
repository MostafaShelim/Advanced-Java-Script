const Student = [
    {id: 10, name: 'omar'},
    {id: 11, name: 'manna'},
    {id: 12, name: 'DeepJol'},
    {id: 13, name: 'elias'}
];
//loop diye sobar naam ber korlam arki

// const nameList = [];
// for(let i = 0; i<Student.length; i++){
//     const element = Student[i].name;
//     nameList.push(element);
// }
// console.group(nameList);

// eki jinish with map function 
const names = Student.map( s => s.name);
console.log(names);//array theke sobar naam niye aslam
const ids = Student.map( s => s.id);
console.log(ids);// array theke sobar id ta niye aslam

//ekhn amra exactly id pete chai
const biggerId = Student.filter( s => s.id>10);//eta array return korbe
console.log(biggerId);
const biggerOne = Student.find( s => s.id>10);//eta value return korbe
console.log(biggerOne);