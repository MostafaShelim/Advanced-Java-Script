let bonus = 20;
function sum(first, second){
    let result = first + second + bonus;//result variable ta k bhaire theke call kora jabe na
    if(result>9){
        let mood = "happy";//mood ekhane block scope variable
        mood = "fishy";// jodi var mood use kortam eta kinto func er j kono jaygay use kora jaito
        console.log(mood);
    }
    return result;
}
//bonus variable ta holo global variable eta sobai use korte parbe
const output = sum(3, 4);
console.log(output);

// var jdi scope a use kori taholoe parent er j kono jaygay use kora jaito 
// let/const jdi scope a use kori tahole r kono jaygay use kora jabe na eta sudo block variable
