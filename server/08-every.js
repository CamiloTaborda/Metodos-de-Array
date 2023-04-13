// .every retorna con un bolean cuando todos los elementos cumplen con la condicion , en este ejemplo que todos los items sean mayores a 40 (false)

const numbers = [1, 30, 49, 29, 10, 13];

const newNunmbers = numbers.every(item => item <= 40);
console.log(newNunmbers);

// --------------------------------------------------------------

const team = [
    {
        name:"camilo",
        age: 14
    },
    {
        name:"valentina",
        age: 12
    },
    {
        name:"oscar",
        age: 10
    },
    {
        name:"cristian",
        age: 8
    },
    {
        name:"sofia",
        age: 6
    },
];

const newTeam = team.map(item => item.age)
.every(item => item <= 15);

console.log(newTeam);
