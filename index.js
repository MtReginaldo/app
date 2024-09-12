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

const { select } = require('@inquirer/prompts')

const start = async () => {
    while(true){ // menu
        
                      // esperar o usuario digitar   
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
                console.log("vamos cadastrar")
                break
            case "listar":
                console.log("vamos listar")
                break
            case "sair":
                console.log("Até a próxima!")
                return                
        }
    }
}

// Função criada precisa ser executada()
start()