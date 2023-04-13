const letters = ["a", "b", "c"];
letters.forEach(item => console.log(item)); /* a b c */

const Letters = ["a", "b", "c"];
const newArray = Letters.map(item => item + "🚗"); /*"a🚗", "b🚗", "c🚗"*/

const order = [{costumerName: "camilo", total: 50, delivered: true}];
const newOrder = order.map((item) => item.total) /*[50]*/

const words = ["spray", "limit", "elite", "exuberant"];
const NewArray = words.filter(item => item.length >= 6); /*["exuberant"]*/

const totals = [1,2,3,4,20];
const newTotal = totals.reduce((sum, element) => sum + element, 0); /*30*/

const numbers = [1, 2, 3, 4];
const newNumbers = numbers.some(item => item % 2 === 0); /*true*/


const Numbers = [1, 30, 49, 29, 10, 13];
const newNunmbers = Numbers.every(item => item <= 40); /*false*/

const numeros = [1, 30, 46, 58, 27, 36];
const newNumeros = numeros.find(item => item === 30); /*30*/

const pets = ["cat", "dog", "bat"];
const newPets = pets.includes("dog"); /*true*/

const elements = ["fire", "water", "air"];
const newElements = elements.join(" | "); /*fire | water | air*/

const elementos = [1, 1, 2, 2];
const otherElementos = [3, 3, 4, 4];
const newElementos = elementos.concat(otherElementos); /*[1, 1, 2, 2, 3, 3, 4, 4]*/

const elemento = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const newElemento = elemento.flat(2); /*[1, 2, 3, 4, 5, 6, 7, 8, 9]*/

const users = [{userId: 1, userName: "camilo", attributes: ["nice", "cute"]}];
const newUser = users.flatMap(users => users.attributes); /*["nice", "cute"]*/

const Numeros = [1, 30, 4, 21, 100000];
Numeros.sort((a,b) => a - b); /*[1, 4, 21, 30, 100000]*/

