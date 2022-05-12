const numArr = [1.01, 10.32, 50.00, 87.23];
let num = 500.00;

const addMoneyHandler = (number, numberArray) => {
    let finalNum = number;
    for (let i = 0; i<numberArray.length; i++) {
        finalNum = finalNum + numberArray[i]
    }
    return finalNum;
}

const checkingEl = document.querySelector('#checkingsLink')
let checkingContent = checkingEl.textContent
let checking = 

console.log('checking',checking)

document.addEventListener('click',)