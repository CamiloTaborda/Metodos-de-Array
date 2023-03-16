// .concat , concatena dos arrays formando un nuevo array 

const elements = [1, 1, 2, 2];
const otherElements = [3, 3, 4, 4];

const newElements = elements.concat(otherElements);
console.log(newElements);

// -------------------------------------------------

// utilizando .push y split operation puedes concatenar dos arrays dentro del array original

const Elements = [1, 1, 2, 2];
const OtherElements = [3, 3, 4, 4];

Elements.push(...OtherElements);
console.log(Elements);
