/* const alim = 90;
const redoyan = 67;
if (alim > redoyan) {
  console.log('get the fresh strowbery ');
}
else {
  console.log('redoyan will get strwbery');
}
 */
function getTheStrobery(alim, redoyan) {
  if (alim > redoyan) {
    return alim;
  }
  else {
    return redoyan;
  }
}
const mister = getTheStrobery(40, 67);
console.log('get the max numbe:', mister);

/* const max1 = getTheStrobery(96, 79);
const max2 = getTheStrobery(56, 98);
const ultimateMax = getTheStrobery(max1, max2);

console.log('max of two is:', ultimateMax); */