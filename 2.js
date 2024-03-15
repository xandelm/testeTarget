/**
 * Retorna o enésimo número da sequencia Fibonnaci.
 *
 * Essa função utiliza memoização para armazenar os valores já calculados, reduzindo a complexidade de tempo da função para (Θ(n))
 *
 *
 * @param {number} n A posição do número na sequência.
 * @return {number} O enésimo número da sequência de Fibonacci.
 */
function fib(n) {
  const memo = {};

  function fibHelper(n) {
    if (n <= 1) {
      return 1;
    }

    if (memo[n]) {
      return memo[n];
    }

    memo[n] = fibHelper(n - 1) + fibHelper(n - 2);
    return memo[n];
  }

  return fibHelper(n);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askForInput() {
  rl.question("Escreva um número inteiro: ", (input) => {
    handleUserInput(input, rl);
  });
}

function handleUserInput(input, rl) {
  try {
    const inputNumber = parseInt(input);
    if (isNaN(inputNumber) || inputNumber < 0) {
      throw new Error("Por favor, digite um número inteiro válido");
    }
    console.log(
      `Fibonacci[${inputNumber}]:  ${fib(inputNumber)}`
    );
    rl.close();
  } catch (e) {
    console.log(e.message);
    // Permite que o usuário tente novamente
    askForInput();
  }
}

askForInput();
