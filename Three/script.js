
//Define the function
function Sum(num1, num2){
    return `Addition: ${num1} + ${num2} = ${num1+num2}`;
}

function Sub(num1, num2){
    return `Subtraction: ${num1} - ${num2} = ${num1-num2}`;
}

function Multiplication(num1, num2){
    return `Multiplication: ${num1} * ${num2} = ${num1*num2}`;
}

function Division(num1, num2){
    return `Division: ${num1} / ${num2} = ${num1/num2}`;
}

const Calculate = () => {
    //variables
    let x = Number(prompt("Enter Number one: "));
    let y = Number(prompt("Enter Number two: "));
    let centerDiv = document.getElementById("showResults");
    let sum = Sum(x,y);
    let subtract = Sub(x,y);
    let multi = Multiplication(x,y);
    let div = Division(x,y);
    let mathmatician = [sum, subtract, multi, div];
    let nodes = mathmatician.map(calc => {
        let para = document.createElement("p");
        para.setAttribute("class", "mathmaticians");
        para.textContent = calc;
        return para;
    });
    centerDiv.append(...nodes);
}
