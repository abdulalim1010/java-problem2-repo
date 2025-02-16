/**
 * upto 100: ---> 100
 * more than 101-200: --> 90
 * more than 200: --> 70
*/

function lowDiscount(quantity) {
  if (quantity <= 100) {
    const total = quantity * 100;
    return total;
  }
 else if (quantity <= 200){
    const total = quantity * 80;
    return total;

  }
  else {
    const total = quantity * 70;
    return total;
  }
}
const total = lowDiscount(260);
console.log("low dis count on the number:", total);