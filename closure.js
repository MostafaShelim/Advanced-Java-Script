function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
const clock1 = stopWatch();
console.log(clock1());//it will return 1
console.log(clock1());//it will return 2
console.log(clock1());//it will return 3
console.log(clock1);//it will return a function()

const clock2 = stopWatch();
console.log(clock2());//it will return 1
console.log(clock2());//it will return 2
console.log(clock2());//it will return 3