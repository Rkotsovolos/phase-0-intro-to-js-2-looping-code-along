// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`wrapped ${gifts[i]} and added a bow!`);
        
    }
    return gifts;
 }
 wrapGifts(gifts);
 */


const names = ["Lisa", "Kaitlin", "Jan"];

let newArr = [];
function writeCards(names, event) {
    for(let i = 0; i < names.length; i++) {
        newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
return newArr;
}

//let newNumber= 10;

function countDown(newNumber) {
    
    while (newNumber >= 0)
        console.log(newNumber--);
}
countDown(10);