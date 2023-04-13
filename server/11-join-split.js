// usando .join anexas separadores dentro de los strign del array

const elements = ["fire", "water", "air"];

const newElements = elements.join(" | ");
console.log(newElements);

// -------------------------------------------------------

const title = "Curso De Manipulacion De Arrays";

const urlFinal = title.split(" ").join("-").toLowerCase();
console.log(urlFinal);