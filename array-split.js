const nums = [1, 2, 3, 4, 5];
const part = nums.slice(2, 5);//kete dewa 2 number position theke 5 position er ag porjonto
console.log(part);
const part2 = nums.splice(2, 1, 33);// ja soraiche ta part2 te thakbe, 2 pos theke 2 ta ele sorai dow
console.log(part2);
console.log(nums);
const together = nums.join("ami");
console.log(together);