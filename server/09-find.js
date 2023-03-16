// .find retorna un elemento del array estrictamente indicado , en este ejemplo el item 30

const numbers = [1, 30, 46, 58, 27, 36];

const newNumbers = numbers.find(item => item === 30);
console.log(newNumbers);

// ------------------------------------------------------

const products = [
    {
        name: "burguer",
        price: 34,
        id: "🍔"
    },
    {
        name: "hot dog",
        price: 35,
        id: "🌭"
    },
    {
        name: "pizza",
        price: 23,
        id: "🍕"
    },
    {
        name: "papas",
        price: 18,
        id: "🍟"
    },
];

const newProducts = products.find(item => item.id === "🍔");
console.log(newProducts);

// .findindex retorna la posicion en la que se encuentre el objeto del array , en este ejemplo la burguer en la posicion 0

const newProductIndex = products.findIndex(item => item.id === "🍔");
console.log(newProductIndex);