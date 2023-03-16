const words = ["spray", "limit", "elite", "exuberant"];

console.log(words);

// impresion usando .filter para mandar llamar items mayores o iguales a 6 letras
const newArray = words.filter(item => item.length >= 6);
console.log(newArray);


// impresion usando .filter para los true 
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

const newOrder = order.filter(item => item.delivered);
console.log(newOrder);

// impresion usando .filter para las "entregas" mayores a 100
const newOrder1 = order.filter(item => item.delivered && item.total >= 100);
console.log(newOrder1);

// Creando un Buscador

const search = (query) => {
    return order.filter(item => {
        return item.customerName.includes(query);
    })
}

console.log(search("ca"));