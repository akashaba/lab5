"use strict"
// Question 1

function max(a , b) {
    if(a>b){
        return a;
    }else{
        return b;
    }
}
console.log(max(7,6))

//Question 2

function maxOfThree(a, b, c){
    let arr = [a,b,c]
    return Math.max(...arr);
}
console.log(maxOfThree(8,5,10));

//Question 3

function isVowel(char){
    var vowels=['a','e','i','o','u'];
    return vowels.includes(char);
}
console.log(isVowel('u'))

//Question 4

function sum(array){
    let total =0;//= 0arr.reduce((a , b) => a+b, 0);
    for(let i=0; i<array.length; i++){
        total +=array[i]
    }
  
    return total;
}
function multiply(...arr){
    var total =0;// arr.reduce((a , b) => a*b);
    for(var i=0; i<arr.length; i++){
        total *=arr[i]
    }
    return total;
}
console.log(sum(1,2,3,4))
console.log(multiply(1,2,3,4))


//Question 5

function reverse(a){
    //var rev;
    // for(var i=a.length-1;i>=0;i--){
    //    var rev = rev + a[i]
    // }
    // return rev;
    return a.split("").reverse().join("")
}
console.log(reverse('bryan'))

//Question 6

function findLongestWord(... arr){
    var max=0;
    for(var i = 0; i<arr.length;i++){
        if(arr[i].length > max){
            max = arr[i].length;
        }
    }
    return max;
}
console.log(findLongestWord('akasha','longest', 'sdhf', 'iiyiywejhe'))

// Question 7
function filterLongWords(i, ...arr){
    const a = arr.filter(s => s.length>i)
    return a;
}
console.log(filterLongWords(5,'akasha','longest', 'sdhf', 'iiyiywejhe'))

//Question 8
function computeSumOfSquares(...a){
    var square = a.map(s => s*s)
    var sq = square.reduce((a,b) => a+b,0)
    return sq;
}
console.log(computeSumOfSquares(1,2,3))

//Question 9
function printOddNumbersOnly(...arr){
    var odd = arr.filter(s => s%2!==0);
    return odd;
}
console.log(printOddNumbersOnly(1,2,3,4,5,7,8))

//Question 10
function computeSumOfSquaresOfEvensOnly(...arr){
    var even = arr.filter(s => s%2===0);
    var square = even.map(s => s*s);
    var sum = square.reduce((a,b) => a+b,0)
    return sum;
}
console.log(computeSumOfSquaresOfEvensOnly(1,2,3,4,5))

//Question 11
function sum(...arr){
    var total = arr.reduce((a , b) => a+b, 0);
    // for(var i=0; i<arr.length; i++){
    //     total +=arr[i]
    // }
    return total;
}
function multiply(...arr){
    var total = arr.reduce((a , b) => a*b);
    // for(var i=0; i<arr.length; i++){
    //     total *=arr[i]
    // }
    return total;
}
console.log('Sum:'+ sum(1,2,3,4))
console.log('Multply: '+multiply(1,2,3,4))

//Question 12
function findSecondBiggest(...arr){
    var second=0;
    var max=0;
    for(var i=0; i<arr.length;i++){
        if(arr[i]>max){
            second=max;
            max = arr[i];
        }else if(arr[i]<max && arr[i]>second){
            second =arr[i]
        }
    }
    return second;
}
console.log(findSecondBiggest(19,9,11,0,12))
console.log(findSecondBiggest(1,2,3,4,5))

//Question 13
function printFibo(n) {
    // a=0
    // b=1
    let fib = [0,1]
    for(var i=2;i<= n;i++){
        fib[i]=fib[i-1]+fib[i-2]
    }
    return fib;
}
console.log('Fibonacci Number: '+ printFibo(7))

//Question 14
function sum(...arr){
    var fil = arr.filter(s => s > 20)
    var total = fil.reduce((a,b)=> a+b,0)
    return total; 
}
console.log('Sum of elements greater than 20: '+ sum(21,26,2,3,5,7))

function getNewArray(...arr){
    var newArray = arr.filter(s => s.length>=5 && s.includes('a'))
    return newArray;
}
console.log(getNewArray('aksshs', 'bryton', 'bryant', 'nankumbi', 'kevi'))