var heading =document.querySelector('h2');
function inchToFeet(inches){
    var feet = inches/12;
    return feet;
    
}

var userInPut = prompt('Enter the name: ---')

var myInches  = userInPut;
var feet = inchToFeet(myInches);
heading.innerHTML = feet;