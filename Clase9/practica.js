// Input
const word = 'salas';
let wordReversed = "";
const cantidadDeLetras = word.length;

// Output
for (let letra = cantidadDeLetras - 1; letra >= 0; letra--){
    wordReversed = wordReversed + word.charAt(letra);
}

if (word===wordReversed) {
    console.log (`La palabra ${word} SI es un palindromo`)
} else {
    console.log (`La palabra ${word} NO es un palindromo`)
}