// en este ejemplo usamos metodos mutables para seleccionar un objeto de un array , eliminarlo y acomodarlo en otro array utilizando .findindex para encontrar la posicion del objeto y .push para ubicarlo en otro array;

const products = [
    {title: "pizza", price: 25, id: "🍕"},
    {title: "burguer", price: 39, id: "🍔"},
    {title: "papas", price: 56, id: "🍟"},
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const newProduct = products.findIndex(item => item.id === "🍔");
if(newProduct) {
    myProducts.push(products[newProduct]);
    products.splice(newProduct, 1);
};

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));


// update

const productsV2 = [
    {title: "pizza", price: 25, id: "🍕"},
    {title: "burguer", price: 39, id: "🍔"},
    {title: "papas", price: 56, id: "🍟"},   
];

const update = {
    id: "🍕",
    changes: {
        price: 30,
        description: "delicious"
    }

};

const newProductsV2 = productsV2.findIndex(item => item.id === update.id);
productsV2[newProductsV2] = {
    ...productsV2[newProductsV2],
    ...update.changes,
};

console.log(productsV2);