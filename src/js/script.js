// função de click para ver os input

let botao = document.getElementById('carimbo');
let carimbo = document.getElementById('informação');


let resultado = document.getElementById('resultado')
let resultado2 = document.getElementById('resultado2')
let resultado3 = document.getElementById('resultado3')
let resultado4= document.getElementById('resultado4')
let resultado5= document.getElementById('resultado5')
let resultado6= document.getElementById('resultado6')
let resultado7= document.getElementById('resultado7')


let n2Sim = document.getElementById('Sim')
let n2nao = document.getElementById('Não')

let n2Sim2= document.getElementById('Sim1')
let n2nao2 = document.getElementById('Não2')

let n2Sim3= document.getElementById('Sim3')
let n2nao3 = document.getElementById('Não4')

let n2Sim4= document.getElementById('Sim5')
let n2nao4 = document.getElementById('Não6')

// alternas 
let radio = document.getElementsByName('Alternativas');
let radio2 = document.getElementsByName('Alternativas2');
let radio3 = document.getElementsByName('Alternativas3');
let radio4 = document.getElementsByName('Alternativas4');

n2Sim.addEventListener('click', function (){
    let selecionaSim = 'X'
    
     resultado.innerHTML = `Falta de contato com N2 (${selecionaSim}) SIM / ( ) NÃO`
})

 n2nao.addEventListener('click', function(){
          let SelecionaNao = 'X'

           resultado.innerHTML = `Falta de contato com N2 ( ) SIM / ( ${SelecionaNao}) NÃO`
})

n2Sim2.addEventListener('click', function(){
    let selecionaSim = 'X'

    resultado2.innerHTML = `TA incorreto falta informação (${selecionaSim}) SIM / () NÃO`
})


n2nao2.addEventListener('click', function(){
    let selecionaNao = 'X'

    resultado2.innerHTML = `TA incorreto falta informação () SIM / (${selecionaNao}) NÃO`
})

n2Sim3.addEventListener('click', function(){
    let selecionaSim = 'X'

    resultado4.innerHTML = `Devolução gestor incorreto (${selecionaSim}) SIM / ( ) NÃO`
})


n2nao3.addEventListener('click', function(){
    let selecionaNao = 'X'

    resultado4.innerHTML = `Devolução gestor incorreto ( ) SIM / ( ${selecionaNao} ) NÃO`
})
n2Sim4.addEventListener('click', function(){
    let selecionaSim = 'X'

    resultado5.innerHTML = `Transferência indevida automação: ( ${selecionaSim} ) SIM / ( ) NÃO`
})

n2nao4.addEventListener('click', function(){
    let selecionaNao = 'X'

    resultado5.innerHTML = `Transferência indevida automação: ( ) SIM / ( ${selecionaNao} ) NÃO`
})


 






radio.onclick =  function (clickRadio){

    var Radios = clickRadio.name;
    for(var i = 0; i < Radios.length; i++ ){

        if(Radios[i] !== clickRadio){
             Radios[i].cracked = false;
        }
    }

}
radio2.onchange =  function (clickRadio){

    var Radios = clickRadio.name;
    for(var i = 0; i < Radios.length; i++ ){

        if(Radios[i] !== clickRadio){
             Radios[i].cracked = false;
        }
    }
}
radio3.onchange =  function (clickRadio){

    var Radios = clickRadio.name;
    for(var i = 0; i < Radios.length; i++ ){

        if(Radios[i] !== clickRadio){
             Radios[i].cracked = false;
        }
    }
}
radio4.onclick =  function (clickRadio){

    var Radios = clickRadio.name;
    for(var i = 0; i < Radios.length; i++ ){

        if(Radios[i] !== clickRadio){
             Radios[i].cracked = false;
        }
    }
}





