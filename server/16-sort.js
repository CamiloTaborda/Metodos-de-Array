// usando .sort se ordena los arrays teniemdo en cuenta la tabla aski

const months = ["march", "jan", "feb", "dec"];
months.sort();
console.log(months);

// en este caso para darle un orden correcto utilizamos una arrow function
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => a - b);
console.log(numbers);

const words = ["reserve", "premier", "communique", "cafe", "adieu"];
words.sort();
console.log(words);

// en este caso usando .sort imprimimos los toteles de mayor a menor;
const orders = [
    {
        customerName: "camilo",
        total: 600,
        delivered: true,
    },
    {
        customerName: "valen",
        total: 60,
        delivered: false,
    },
    {
        customerName: "cristian",
        total: 500,
        delivered: true,
    },
    {
        customerName: "sofia",
        total: 70,
        delivered: false,
    },
];

orders.sort((a,b) => b.total - a.total);
console.log(orders);