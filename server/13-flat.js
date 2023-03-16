// usando .flat puedes unificar todas las iteraciones que hayan dentro de un array;

const elements = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const newElements = elements.flat(2);
console.log(newElements);
