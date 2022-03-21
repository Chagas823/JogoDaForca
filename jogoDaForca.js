let palavras = ["nome", "carro", "fogão", "caderno"];
let IndexDapalavraEscolhida = Math.floor(Math.random()*4);
palavraEscolhida = palavras[IndexDapalavraEscolhida];
let erros = 0;
let acertos = 0;


let mostraConsole = [];
let primeiro = palavraEscolhida[0];

for (let index = 0; index < palavraEscolhida.length; index++) {
    mostraConsole += "_ ";
    
}
function replaceByIndex(str, index, replacement) {
    return str.substr(0, index) + replacement + str.substr(index + replacement.length);
}
mostraConsole = replaceByIndex(mostraConsole, 0, palavraEscolhida[0]);
let controla = 0;
console.log(mostraConsole);
console.log("você não pode errar mais de cinco vezes");
let aux = 0;
while(acertos < palavraEscolhida.length - 1 && erros< 5){
    
    let escolha = prompt("digite uma letra");
    aux = acertos;
    for (let index = 0; index < palavraEscolhida.length; index++) {
        if(escolha == palavraEscolhida[index]){
            mostraConsole = replaceByIndex(mostraConsole, index*2,escolha);
            acertos++;
            
        }
        
        console.log(mostraConsole);
    }
    if(acertos === aux){
        erros++;
    }
    console.log("erros = "+erros);
    
}

if(erros === 5){
    console.log("você perdeu");
}else if(acertos === palavraEscolhida.length - 1){
    console.log("você acertou");
}