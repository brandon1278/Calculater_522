
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


const compute = (action) => {
    let storedValue = majorNum;
    majorNum = "";
    findNum(n); //getting the new number

    storedValue = changeToNum(storedValue); //changing into numbers
    majorNum = changeToNum(majorNum);   //changing into numbers


}


const calculater = (x, action) => {
    function calculate(y) {
        if (action === "add") {
            x = add(storedValue, majorNum);
            document.getElementById("event").innerHTML = x;
            return x;
        } else if (action === "subtract") {
            x = subtract(storedValue, majorNum);
            document.getElementById("event").innerHTML = x;
            return x;
        } else if (action === "multiply") {
            x = multiply(storedValue, majorNum);
            document.getElementById("event").innerHTML = x;
            return x;
        } else if (action === "divide") {
            x = divide(storedValue, majorNum);
            document.getElementById("event").innerHTML = x;
            return x;
        }
    }
}



document.getElementById(arg)

const aFunc = () => {


}
