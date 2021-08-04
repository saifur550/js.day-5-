// var htmlOutPut = document.querySelector('h2');


// const userInput = prompt("Enter the  Number ");
// const remainder = userInput % 2;
// htmlOutPut.innerHTML = (remainder  == 0);

// console.log(4 % 2 == 0);



function isEven(number) {
    if(number % 2 == 0){
        return true;
    } 
    return false;
}


const user1 = 1641;
const isMyNuberEven1 = isEven(user1);
console.log(isMyNuberEven1);


function isOdd(number) {
    if(number % 2 != 0){
        return true;
    } 
    return false;
}

function isOdd(number) {
    if(number % 2 == 1){
        return true;
    } 
    return false;
}



const user2 = 7;
const isMyNuberOdd = isOdd(user2);
console.log(isMyNuberOdd);