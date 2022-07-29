const controle = document.querySelectorAll("[data-controle]")

controle.forEach((elemento) => {

    elemento.addEventListener("click", (evento) => {
        console.log(evento.target)
       manipularDados(evento.target.dataset.controle, evento.target.parentNode)

    })
})

//somar.addEventListener("click" , () => {manipularDados("somar")
    //braco.value = parseInt(braco.value) + 1;
//})

//subtrair.addEventListener("click", (evento) => {manipularDados("subtrair")
   // braco.value = parseInt(braco.value) - 1;
//})

function manipularDados(operacao, controle) {

    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-"){

        peca.value = parseInt(peca.value) - 1
        
    } else{

        peca.value = parseInt(peca.value) + 1
    }
}