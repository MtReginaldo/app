// Hello World 
console.log("Hello World!");

// console objeto
// log função (caixa com funções, nesse caso recebe o dado de texto (string) e apresenta)

// -----------------------------

let mensagem = 2
mensagem = 3
// variável
// para atribuir valor precisam ser do mesmo tipo de dado
const aviso = "oi"
// aviso = "tchau"
// variável que não pode ser alterada 
console.log(mensagem);
console.log(aviso);

// -----------------------------

const mensagens = "olá eu"
// escopo global

{
    const mensagens = "olá mundo"
    console.log(mensagens);
} // novo escopo local, grupo

console.log(mensagens);