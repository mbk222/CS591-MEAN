// Mehmet Bulut Kurt
// Problem Set 1, Problem 2

let evaluate = (expression) => {
    if (expression.charAt(1) == '+') {
        return (left, right) => {
            left =  Number(expression.charAt(0));
            right = Number(expression.charAt(2));
            return left + right;
        }
    }
    else if (expression.charAt(1) == '-') {
        return (left, right) => {
            left =  Number(expression.charAt(0));
            right = Number(expression.charAt(2));
            return left - right;
        }
    }
    else if (expression.charAt(1) == '*') {
        return (left, right) => {
            left =  Number(expression.charAt(0));
            right = Number(expression.charAt(2));
            return left * right;
        }
    }
    else if (expression.charAt(1) == '%') {
        return (left, right) => {
            left =  Number(expression.charAt(0));
            right = Number(expression.charAt(2));
            return left % right;
        }
    }
    return;
}

const expression = '8%3';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`)
