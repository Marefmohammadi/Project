let length;
let width;

function calculateArea(){
    length = document.getElementById("length").value;
    width = document.getElementById("width").value;

    let area = length * width;

    document.getElementById("result").innerText= `The area of the rectangel is: ${area}`;
}


let amount1;
let amount2;
let amount3;

function groceryTracker(){
    amount1 = parseFloat(document.getElementById("grocery1").value);
    amount2 = parseFloat(document.getElementById("grocery2").value);
    amount3 = parseFloat(document.getElementById("grocery3").value);

    let temp = amount1 + amount2 + amount3;

    document.getElementById("total").innerHTML = `The total amount is: ${temp}`;
}
// function closure

function outerFunction(){
    const outerVar = "I'm from the outer funtion";
    function innerFuntion(){
        console.log(outerVar);
    }
    return innerFuntion;
}
const closure = outerFunction();
closure();
