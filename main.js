// const aveSpd = function (upTime, upSpeed, dawnSpeed) {
//     let totalDistance = (upSpeed * upTime) * 2
//     let dawnTime = (totalDistance / 2) / dawnSpeed
//     let totalTime = upTime + dawnTime

//     return totalDistance / totalTime
// }

// aveSpd()


// function getDays(date1, date2) {
//     return Math.abs(date1 - date2) / (1000 * 60 * 60 * 24)
// }
// getDays(new Date('June 12, 2019'), new Date())


// function sevenBoom(arr) {
//     const arrNum = arr.join('').split('')
//     if (arrNum.includes('7')) return 'Boom!'
//     else return 'there is no 7 in the array'
// }
// sevenBoom([34, 234, 667, 8, 3])



///4 

// Create a function that takes a number as an argument and returns n instances of the Fibonacci sequence as an array.Fibonacci numbers: F(n) = F(n - 1) + F(n - 2) with F(0) = 0 and F(1) = 1. So the easy explanation is: The next element is the sum of the two previous elements.If you want to read more about this sequence, take a look at the On - Line Encyclopedia of Integer Sequences.Fibonacci numbers are strongly related to the golden ratio.See the OEIS and Wikipedia links in the resources tab.

// const fibSeq = function (num) {
//     let num1 = +prompt('Number 1?')
//     let num2 = +prompt('Number 2?')
//     let next;



//     let arr = [num1, num2]
//     for (let i = 2; i < num; i++) {
//         next = num1 + num2;
//         num1 = num2;
//         num2 = next
//         arr.push(next)
//     }

//     if (num <= 2) console.log('Please write number > 2 ');
//     if (!num) console.log(undefined);
//     if (num > 2) console.log(arr);
// }
// fibSeq(7)