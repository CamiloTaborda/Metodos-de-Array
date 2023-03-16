const order = [
    {
        customerName: "camilo",
        total: 50,
        delivered: true,
    },
    {
        customerName: "daniel",
        total: 35,
        delivered: false,
    },
    {
        customerName: "valentina",
        total: 5345,
        delivered: true,
    },
    {
        customerName: "oscar",
        total: 67,
        delivered: false,
    },
    {
        customerName: "chichi",
        total: 17,
        delivered: true,
    },
];

// impresion original
console.log(order);

// impresion solo del total utilizando .map
const rta = order.map((item) => item.total);
console.log(rta);

// impresion anexando un nuevo item
const rta2 = order.map((item) => {
    item.tax = 0.19;
    return {
        ...item,
        tax: .19
    };
});

console.log(rta2);