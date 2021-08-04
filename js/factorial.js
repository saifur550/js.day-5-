

// // find factorial 
// var factorial = 1;

// for (i = 1; i <=7; i ++ ){
//     var outPut = (i);
//     console.log(outPut);
   
//     factorial = factorial * i;
//     console.log(factorial);
// }


// // find factorial 
// var factorial = 1;

// for (i = 1; i <=10; i ++ ){
//     var outPut = (i);
//     console.log(outPut);
   
//     factorial = factorial * i;
//     console.log(factorial);
// }




// function factorial (number){
//     let fact = 1;
//     for (i = 1; i <= number ; i ++ ){
//         fact = fact * i;
//     }
//         return fact;
    
// }



// // var firstNumber = factorial(7);
// var firstNumber = prompt("enter the number ")
// var firstOut = factorial(firstNumber);
// console.log(firstOut);


// var firstNumber2 = factorial(10);
// console.log(firstNumber2);





function getFactorial (passNumber){
    let fact = 1;
    for (i = 1; i <= passNumber; i ++ ){
        fact =fact * i;
    } return fact ;

}


var userInPut =  prompt("enter the number ");
var finalOut = getFactorial(userInPut);
console.log(finalOut);