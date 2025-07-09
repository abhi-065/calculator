const lowerDisplay = document.querySelector(".lowerDisplay");
const errorDisplay = document.querySelector(".errorDisplay");
errorDisplay.addEventListener("click", () => errorDisplay.textContent = "");
const allClear = document.querySelector("#clear");
const backSpace = document.querySelector("#backspace");
const percentage = document.querySelector("#percentage");
const division = document.querySelector("#division");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const multiply = document.querySelector("#multiply");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const minus = document.querySelector("#minus");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const plus = document.querySelector("#plus");
const doubleZero = document.querySelector("#doubleZero");
const zero = document.querySelector("#zero");
const dot = document.querySelector("#dot");
const equalsTo = document.querySelector("#equalsTo");
allClear.addEventListener("click", () => lowerDisplay.textContent = "");
backSpace.addEventListener("click", () => lowerDisplay.textContent = lowerDisplay.textContent.slice(0,-1));
percentage.addEventListener("click", () => appendSymbol("%"));
division.addEventListener("click", () => appendSymbol("÷"));
seven.addEventListener("click", () => appendSymbol("7"));
eight.addEventListener("click", () => appendSymbol("8"));
nine.addEventListener("click", () => appendSymbol("9"));
multiply.addEventListener("click", () => appendSymbol("×"));
four.addEventListener("click", () => appendSymbol("4"));
five.addEventListener("click", () => appendSymbol("5"));
six.addEventListener("click", () => appendSymbol("6"));
minus.addEventListener("click", () => appendSymbol("-"));
one.addEventListener("click", () => appendSymbol("1"));
two.addEventListener("click", () => appendSymbol("2"));
three.addEventListener("click", () => appendSymbol("3"));
plus.addEventListener("click", () => appendSymbol("+"));
doubleZero.addEventListener("click", () => appendSymbol("00"));
zero.addEventListener("click", () => appendSymbol("0"));
dot.addEventListener("click", () => appendSymbol("."));
document.addEventListener("keypress", (e) => appendSymbol(`${e.key}`));
function appendSymbol(symbol){
    if (lowerDisplay.textContent.length<10){
        lowerDisplay.textContent += symbol;
    }
    else {
        errorDisplay.textContent = "Only 10 characters are allowed";
        backSpace.addEventListener("click", () => errorDisplay.textContent = "");
        allClear.addEventListener("click", () => errorDisplay.textContent = "");
    }
}