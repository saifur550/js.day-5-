// //variable 

// var time = '10.00';
// var bookPrice = 150;
// var iswhitecolor = true;


// // value of variable could change 
// var price = 29;
// price = 30;
// price = 43;
// console.log(price);


// //value of the variable will not change 

// let userName = " player001";
// newUserName='player002';
// userName = ' player003'
// console.log(userName);
// console.log(newUserName);


// //array

// var partners = ['sakib','rakib','kabir','monir','abul','babul']
// var elementCount =partners.length;
// console.log(elementCount);
// var arrayIndex = partners.indexOf('rakib');
// console.log(arrayIndex);
// var addNewItem = partners.push('karim');
// console.log(partners);
// var partnerRemove = partners.pop();
// console.log(partners);


// //conditional

// if (bookPrice <= 150){
//     console.log('able to buy this pook');
// } else{
//     console.log('unable to purcahse is book ');
// }

// //while loop 

// var i = 0;
// while (i <= 15){
//     i++;
//     console.log(i);
// }

// //for loop

// for(var i = 1; i < 10 ; i ++){
//     console.log(i);
// }


// //function
// function add(){
//     console.log('function is beatiful');
// }

// add()


// //function return

// function add(a, b, c) {
//     return a + b + c;
// }

// var num1 = 20; 
// var num2 = 40;
// var num3 = 55;

// var total =add( num1, num2, num3)
// console.log(total);


// function add(a, b, c) {
//     return a - b * c;
// }

// var num1 = 208; 
// var num2 = 407;
// var num3 = 585;

// var total =add( num1, num2, num3)
// console.log(total);


function getFactorial(factorial){
    factorial = 1;
    for(i=1; i <= factorial; i++){
        factorial = factorial * i;
    }
    return factorial;
}
var result = getFactorial(5);
console.log('Factorial 5 is', result);