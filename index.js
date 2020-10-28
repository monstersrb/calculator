let firstNumber = document.querySelector("#num1");
let oP = document.querySelector("#opration-input");
let secondNumber = document.querySelector("#num2");
let calculateBtn = document.querySelector("#calculate");
let resultShower = document.querySelector("#result-text");

calculateBtn.addEventListener(`click`, () => {
    if (firstNumber.value.length > 0 && oP.value.length === 1 && secondNumber.value.length > 0) {
        let result;
        switch (oP.value) {
            case '+':
                result = Number(firstNumber.value) + Number(secondNumber.value);
                break;
            case '-':
                result = Number(firstNumber.value) - Number(secondNumber.value);
                break;
            case '*':
                result = Number(firstNumber.value) * Number(secondNumber.value);
                break;
            case '/':
                result = Number(firstNumber.value) / Number(secondNumber.value);
                break;
            default:
                result = `Sorry, I can't get it`;
        }
        resultShower.innerHTML = result;
    }
    firstNumber.value = "";
    oP.value = "";
    secondNumber.value = "";
})