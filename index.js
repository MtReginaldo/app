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


function start(){
    while(true){
        
        let opcao = "sair"

        switch(opcao){
            case "cadastrar":
                console.log("vamos cadastrar")
                break
            case "listar":
                console.log("vamos listar")
                break
            case "sair":
                return                
        }
    }
}

// Função criada precisa ser executada()
start()