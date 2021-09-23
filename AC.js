
PART I
function alwaysHungry(arr) {    
    let count = 0;
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] === "food"){
            console.log("yummy");
        } else{
            count ++;
        }
        if(count === arr.length){
            console.log("Im Hungry");
        }
        }
    }

alwaysHungry([3.14, "food", "pie", true, "food"]);

alwaysHungry([4, 1, 5, 7, 2]);

PART II
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(let i = 0; i < arr.length; i ++){
        if( arr[i] > 5){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); 

PART III 
function betterThanAverage(arr) {
    var sum = 0;
    var count = 0
    var average = 0
    for(let i = 0; i < arr.length; i ++){
        sum = sum + arr[i];
    }
        average = sum / arr.length;
        for(let i = 0; i < arr.length; i ++){
        if(arr[i] > average){
            count ++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);

PART IV
function reverse(arr) {
    let reverseArr = [];
    let cascade = arr.length - 1
    for(let i = 0; i < arr.length; i ++){
        reverseArr.push(arr[cascade]);
        cascade --;
    }
        return reverseArr;
    }
    
    var result = reverse(["a", "b", "c", "d", "e"]);
    console.log(result); // we expect back ["e", "d", "c", "b", "a"]

PART V
function fibonacciArray(n) {
    var fibArr = [0, 1];
    let pushNum = 0;
    for(let i = 2; i < n; i ++){
        pushNum = fibArr[i - 1] + fibArr[i -2];
        fibArr.push(pushNum)
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result);
