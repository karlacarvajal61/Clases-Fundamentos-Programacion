const number = 1987;
let sum = 0;

const numberString = number.toString();

for (let i = 0; i < numberString.length; i++) {
    sum += Number(numberString[i]);
}

console.log(`La suma de los dígitos del número ${number} es ${sum}`);




const word = "esternocleidomastoideo";
let totalAmount = 0;
let uniqueAmount = 0;
const vowelsRef = "aeiouáéíóú";
let uniqueVowelsFound = [];
const cleanWord = word.toLowerCase();

for (let i = 0; i < cleanWord.length; i++) {
    let char = cleanWord[i];

    if (vowelsRef.includes(char)) {
        totalAmount++;

        if (!uniqueVowelsFound.includes(char)) {
            uniqueVowelsFound.push(char);
        }
    }
}

uniqueAmount = uniqueVowelsFound.length;

console.log(`La palabra ${word} tiene ${totalAmount} vocales totales y ${uniqueAmount} vocales únicas`);