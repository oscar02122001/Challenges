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

//5

// let num = 0
// const towerHanoi = function (descs) {
//     let fromRod = []
//     let usingRod = []
//     let toRod = []

//     for (let i = descs; i > 0; i--) fromRod.push(i)
//     runHanoi(descs, fromRod, toRod, usingRod)
//     return num
// }

// towerHanoi(5)

// function runHanoi(z, A, B, C) {
//     if (z === 1) {
//         move(A, B);
//         num++
//     } else {
//         runHanoi(z - 1, A, C, B);
//         move(A, B)
//         num++
//         runHanoi(z - 1, C, B, A)
//     }
// }

// function move(A, B) {
//     B.push(A.pop())
// }

//6

function countBoomerangs(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i - 1] === arr[i + 1] && arr[i] !== arr[i + 1]) {
            newArr.push([arr[i - 1], arr[i], arr[i + 1]])
        }
    }

    return newArr.length
}

// console.log(countBoomerangs([1, 2, 3, 2, 4, 2, 5, 6, 7, 6, 1, 1, 1]));

//7

function doesBrickFit(a, b, c, w, h) {
    if (a === h && b === w) return true
    else return false
}
// console.log(doesBrickFit(2, 1, 2, 2, 2));


//8

function textToNumberBinary(str) {
    let arr = [...str.toLowerCase()].join('').split(' ')
    let x = ''
    console.log(arr);

    for (let i = 0; i <= 8; i++) {
        if (arr[i] === 'zero') {
            x += 0
        } else if (arr[i] === 'one') {
            x += 1
        }
    }

    if (x.length < 8) return console.log(x = "");
    else return console.log(x);
}
// textToNumberBinary('one one one one zero zero zero zero')
// textToNumberBinary('one Zero zero one zero zero one one one one one zero oNe one one zero one zerO')
// textToNumberBinary('one zero one')
// textToNumberBinary('one zero zero one zero ten one one one one two')
// textToNumberBinary('One zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero')
// textToNumberBinary('TWO one zero one one zero one zero')
// textToNumberBinary('TWO one zero one one zero one zero one')


// const request = new XMLHttpRequest()
// request.open('GET', '"https://v3.football.api-sports.io"')
// request.send()

// request.addEventListener('load', function () {
//     console.log(this);
// })



const swrap = document.querySelector('.slidre-wrap')
const slider = document.querySelector('.slider')
const slides = document.querySelectorAll('.slide')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')


let curSlide = 0
let maxSize = slides.length

const goToSlide = function (slide) {
    slides.forEach((s, i) => s.style.transform = `translateX(${100 *(i-slide)}%)`)
}
goToSlide(0)
next.addEventListener('click', () => {
    if (curSlide === maxSize - 1) {
        curSlide = 0
    } else {
        curSlide++
    }
    goToSlide(curSlide)
})
prev.addEventListener('click', () => {
    if (curSlide === 0) {
        curSlide = maxSize - 1
    } else {
        curSlide--
    }
    goToSlide(curSlide)
})

const getPrefix = function (arr) {
    if (arr.length === 1) return [];
    for (let i = 0; i <= arr[0].length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[0][i] !== arr[j][i]) {
                return arr[0].slice(0, i)
            }
        }
    }
    return arr[0]
}
console.log(getPrefix(["flower", "flowers", "flowers"]))
// getPrefix(["olima", "oltin", "olis"])

let twoSum = function (arr, target) {
    let indexNum = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === target && i - j !== 0) {
                indexNum.push(i)
            };
        }
    }
    return console.log(indexNum);
}
twoSum([3, 3], 6)


const addTwoNumbers = function (l1, l2) {

}
console.log(addTwoNumbers());


// const addTwoNumbers = function (l1, l2) {
//     l1 = [2, 4, 3]
//     l2 = [5, 6, 4]
//     let num1 = l1
//     let num2 = l2
//     let n1 = +num1.join('')
//     let n2 = +num2.join('')
//     let sum = (n1 + n2).toString()

//     let arr = []
//     for (let i = 0; i < sum.length; i++) {
//         arr.push(sum[i] * 1);
//     }
//     return arr.reverse()
// }
// console.log(addTwoNumbers());


var isValid = function (s) {
    console.log(s);
    let x = ['(', ')', '[', ']', '{', '}'];
    for (let i = 0; i < x.length; i++) {
        console.log(x[i] + x[i + 1]);
    }
};
console.log(isValid('({})'));