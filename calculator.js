function add(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
function subtract(num1, num2)
{
  return  num1 - num2;
  
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divition(num1, num2) {
  return num1 / num2;
}
function calculator(a, b, operation) {
  if (operation === 'add') {
    const result = add(a,b);
    return result
  }
  else if (operation === 'subtract') {
    const result = subtract(a, b);
    return result;
  }
  else if (operation === 'multiply') {
    const result = multiply(a, b);
    return result;
  }
  else if (operation === 'divition')
  {
    const result = divition(a, b);
    return result;
  }
  else {
    return  "only 'add','subtract''mulitply''divition'and all the operation"
  }
}
const result = calculator(3, 6, 'multiply');
console.log(result);
