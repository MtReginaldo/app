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

const { select , input } = require('@inquirer/prompts')

let metas = [ ]

const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite a meta"})

                   // == comparação
    if(meta.length == 0){
        console.log("A meta não pode estar vazia")
        return
        // cadastrarMeta()
    }

    // colocar dentro
    metas.push(
        {
            value: meta, 
            checked: false
        }
    )
}

const start = async () => {
    while(true){ // menu
        
                      // esperar o usuario digitar  
                      // await espera uma promessa (volta com uma resposta) 
        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {                                          
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })

        switch(opcao){
            case "cadastrar":
                await cadastrarMeta()
                break
            case "listar":
                console.log("vamos listar")
                console.log(metas)
                break
            case "sair":
                console.log("Até a próxima!")
                return                
        }
    }
}

// Função criada precisa ser executada()
start()