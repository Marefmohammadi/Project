//try catch method

function performOperation (){
    try{
        const num1 = parseFloat(document.getElementById("input1").value);
        const num2 = parseFloat(document.getElementById("input2").value);
        const operations = document.getElementById("selectOperation").value;
        // Check if inputs are valid numbers

        if(isNaN(num1) || isNaN(num2)){
                // validate inputs
            throw new Error("Please enter valid numbers");
        
        } 
        let result;
        switch(operations){
            case "add": 
                result = add(num1, num2);
                break;
            case "subtract":
                result = subtract(num1, num2);
                break;
            case "multiply":
                result = multiply(num1, num2);
                break;
            case "divide":
                if(operations === "divide"  && num2 === 0){
                    throw new Error("Cannot divide by zero");
                }
                result = divide(num1,num2);
                break;
            default:
                throw new Error("Invalid operation selected");
                
        }
        displayResult(result);
    } catch(error){
        displayResult(error.message);
    }

    
}

function add(a, b){

    return a + b;
}

function subtract(a, b){

    return a - b;
}

function multiply(a, b){

    return a * b;
}
function divide(a, b){

    return a / b;
}

function displayResult(result){

    const resultElement = document.getElementById("result");
    resultElement.textContent = `The result is : ${result}`;
}