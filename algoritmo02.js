// arrays

let metas = ["mayk","alunos"]

console.log(metas[1] + " " + metas[0])
// + Concatenação

// -----------------------------
// objetos
let meta = {
    value: 'ler um livro por mes',
    checked: false,
    // isChecked: () => {}
    log: (info) => {
        console.log(info);
    }
}

console.log(meta.value);
console.log(meta.checked);

meta.log(meta.value);

// metódo (dentro de um objeto) function (fora)

// arrow function: Atribuindo a essa constante
const criarMeta = () => {}

// named function
function criarMeta() {}
