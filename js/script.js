/*make a function that takes three arguments
number, number, operater, 
*/
const body = document.body;
body.style.backgroundColor = 'red';

function calc(num1, num2, operator){
    let result;
    if (operator == '+'){
        result = (num1 + num2);
        console.log(result);
    }
    else if (operator == '-'){
        result = (num1 - num2);
        console.log(result);
    }
    else if (operator == '*'){
        result = (num1 * num2);
        console.log(result);
    }
    else if (operator == '/'){
        result = (num1 / num2);
        console.log(result);
    }
    else{
        console.log("Invalid"); //for if operator is invalid
    }
}
calc(4, 9, '-');//needs quotations