
let majorNum = "";



const findNum = (n) => {
    let result = "";
    switch (n) {
        case 0: result = "0";
            break;
        case 1: result = "1";
            break;
        case 2: result = "2";
            break;
        case 3: result = "3";
            break;
        case 4: result = "4";
            break;
        case 5: result = "5";
            break;
        case 6: result = "6";
            break;
        case 7: result = "7";
            break;
        case 8: result = "8";
            break;
        case 9: result = "9";
            break;
    }
    majorNum += result
    return <p>${majorNum}</p>;
}

let storedValue = 0;
let action = false;

// if (action) {
//     storedValue = majorNum;
// }

//COMPUTATIONS:
const add = (prevNum, currNum) => {
    majorNum = prevNum + currNum;
    return majorNum;
}

const subtract = (prevNum, currNum) => {
    majorNum = prevNum - currNum;
    return majorNum;
}

const multiply = (prevNum, currNum) => {
    majorNum = prevNum * currNum;
    return majorNum;
}

const divide = (prevNum, currNum) => {
    majorNum = prevNum / currNum;
    return majorNum;
}

//CONVERTING FROM NUMBERS TO STRINGS
const changeToNum = n => {
    for (let i = 0; i <= 9999999999; i++) {
        if (n == i) {
            return i;
        }
    }
}


const compute = (action) => {
    let storedValue = majorNum;
    majorNum = "";
    findNum(n); //getting the new number

    storedValue = changeToNum(storedValue); //changing into numbers
    majorNum = changeToNum(majorNum);   //changing into numbers
    if (action === "add") {
        return add(storedValue, majorNum);
    } else if (action === "subtract") {
        return subtract(storedValue, majorNum);
    } else if (action === "multiply") {
        return multiply(storedValue, majorNum);
    } else if (action === "divide") {
        return divide(storedValue, majorNum);
    }

}
//main function
