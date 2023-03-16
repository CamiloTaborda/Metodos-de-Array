const totals = [1,2,3,4,20];
// sumando los elementos de array usando .reduce (reduce a un solo valor)
const newTotal = totals.reduce((sum, element) => sum + element, 0);
console.log(newTotal);

