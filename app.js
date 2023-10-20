


//? Calculator

function calculate(num1 , num2 ,  operator) {
        let result;
         
        switch (operator) {
          case '+':
            result = num1 + num2;
            break;
          case '-':
            result = num1 - num2;
            break;
          case '*':
            result = num1 * num2;
            break;
          case '/':
            if (num2 !== 0) {
              result = num1 / num2;
            } else {
              return document.write("Division by zero is not allowed");
            }
            break;
          default:
            return document.write("Invalid operator No operation can be performed");
        }
      
        document.write(`Result: ${num1} ${operator} ${num2} = ${result}`);
       
}

let num1 = prompt("Enter Num 1");

    if (isNaN(num1)) {
        alert(num1 + " is not a Number.");
    }

let operator = prompt("Enter Operator");
if (operator != null && (operator == '+' || operator == '-' || operator == '*' || operator == '/')) {
} else {
    alert(operator + " is not a Operator");
}
let num2 = prompt("Enter Num 2");
if (num2 != null && num2 != '') {
    if (isNaN(num2)) {
        alert(num2 + " is not a Number.");
    }
}            

calculate( +num1 , +num2 , operator);