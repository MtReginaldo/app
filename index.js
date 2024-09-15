/*
function start(){
    // Estrutura de repetiçao

    // count++ = count = count + 1
    let count = 0
    while(count < 10){
        console.log(count)
        count++
        // return para a execução da repetiçao  
    }
}
*/

// npm node package manager
// npm instal inquirer
// package.json -> Lista dependencias
// package-lock.json -> Mapeamento de componentes das dependencias


const { select, input, checkbox } = require('@inquirer/prompts')
const fs = require("fs").promises

let mensagem = "Bem vindo ao App de Metas";

/*
let meta = {
    value: 'Tomar 3L de água',
    checked: false
}
*/

let metas

const carregarMetas = async () => {
    try {
        const dados = await fs.readFile("metas.json", "utf-8")
        metas = JSON.parse(dados)
    }
    catch (erro) {
        metas = []
    }
}

const salvarMetas = async () => { // configurar metas e enviar para o arquivo json
    await fs.writeFile("metas.json", JSON.stringify(metas, null, 2))
}

const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite a meta:" })

    if (meta.length == 0) { // == comparação
        mensagem = 'A meta não pode ser vazia.'
        return
        // cadastrarMeta()
    }
    // colocar dentro
    metas.push(
        { value: meta, checked: false }
    )
    mensagem = "Meta cadastrada com sucesso!"
}

const deletarMetas = async () => {
    if(metas.length == 0) {
        mensagem = "Não existem metas!"
        return
    }

    const metasDesmarcadas = metas.map((meta) => {
        return { value: meta.value, checked: false }
    })

    const itemsADeletar = await checkbox({
        message: "Selecione item para deletar",
        choices: [...metasDesmarcadas],
        instructions: false,
    })

    if (itemsADeletar.length == 0) {
        mensagem = "Nenhum item para deletar!"
        return
    }

    itemsADeletar.forEach((item) => {
        metas = metas.filter((meta) => {
            return meta.value != item
        })
    })

    mensagem = "Meta(s) deleta(s) com sucesso!"
}

const listarMetas = async () => {
    if (metas.length == 0) {
        mensagem = "Não existem metas!"
        return
    }

    const respostas = await checkbox({
        message: "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o Enter para finalizar essa etapa",
        choices: [...metas], // rest spread
        instructions: false,
    })

    metas.forEach((m) => {
        m.checked = false
    })

    if (respostas.length == 0) {
        mensagem = "Nenhuma meta selecionada!"
        return
    }

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        }) // procurar

        meta.checked = true
    })

    mensagem = 'Meta(s) marcada(s) como concluída(s)'

}

const metasRealizadas = async () => {
    if (metas.length == 0) { 
        mensagem = "Não existem metas!"
        return
    }

    const realizadas = metas.filter((meta) => { // se a meta tiver realizada ela vai pra lista 
        return meta.checked 
    })

    if (realizadas.length == 0) {
        mensagem = 'Não existem metas realizadas! :('
        return
    }

    await select({
        message: "Metas Realizadas: " + realizadas.length,
        choices: [...realizadas]
    })
}

const metasAbertas = async () => {
    if (metas.length == 0) {
        mensagem = "Não existem metas!"
        return
    }

    const abertas = metas.filter((meta) => {
        return meta.checked != true // se falso diferente de verdadeiro
    })

    if (abertas.length == 0) {
        mensagem = 'Não existem metas abertas! :)'
        return
    }

    await select({
        message: "Metas Abertas: " + abertas.length,
        choices: [...abertas]
    })
}

const mostrarMensagem = () => {
    console.clear();

    if (mensagem != "") {
        console.log(mensagem)
        console.log("")
        mensagem = ""
    }
}

const start = async () => {
    await carregarMetas()

    while (true) { // menu
                   // esperar o usuario digitar  
                   // await espera uma promessa (volta com uma resposta) 
        mostrarMensagem()
        await salvarMetas()

        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Deletar metas",
                    value: "deletar"
                },                
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Metas realizadas",
                    value: "realizadas"
                },
                {
                    name: "Metas abertas",
                    value: "abertas"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })

        switch (opcao) {
            case "cadastrar":
                await cadastrarMeta()
                break
            case "deletar":
                await deletarMetas()
                break                
            case "listar":
                await listarMetas()
                break
            case "realizadas":
                await metasRealizadas()
                break
            case "abertas":
                await metasAbertas()
                break
            case "sair":
                console.log('Até a próxima!')
                return
        }
    }
}

// Função criada precisa ser executada()
start();