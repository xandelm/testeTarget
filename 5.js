/**
 * Função que inverte uma string.
 * Tem complexidade de tempo Θ(n), onde n é o tamanho da string.
 * @param {string} str A string a ser invertida.
 * @return {string} A string invertida.
 */
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Digite uma string: ", (str) => {
  console.log(`A string invertida é: ${reverseString(str)}`);
  rl.close();
});