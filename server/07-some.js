// .some retorna boleans si almenos algun objeto cumple con la condicion, en este ejemplo retorna numeros pares del array

const numbers = [1, 2, 3, 4];

const newNumbers = numbers.some(item => item % 2 === 0);
console.log(newNumbers);

// ---------------------------------------------------------------

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

const newOrder = order.some(item => item.delivered);
console.log(newOrder);

// ------------------------------------------------------------

const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: "reunion"
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 15, 30),
        title: "cena"
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title: "cumpleaños"
    },
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: "entreno"
    },
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 19),
    endDate: new Date(2021, 1, 1, 30),
};

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
        {start: date.startDate, end: date.endDate},
        {star: newDate.startDate, end: newDate.endDate}
        )
    })
};

console.log(isOverlap(newAppointment));