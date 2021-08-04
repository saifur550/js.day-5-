// function isleapYear(year){
//     if(year % 2 ==0 ){
//         return true;
//     }else{
//         return false
//     }
// }


// const  userInPut = prompt("Enter the Year ");
// const isMyYearLeapYear =  isleapYear(userInPut);
// console.log(isMyYearLeapYear);



//program to check leap year
function checkLeapyear (year){
    // three conditions to fimd out the leap year 
    if((0 == year  % 4) && (0 != year % 100) || (0 == year % 400)){
        console.log(year + ' is a leap year');
    }else {
        console.log(year + ' is not a leap year');
    }
}


const year =  prompt('Enter a year:');
const finalOut = checkLeapyear(year)
console.log(finalOut);