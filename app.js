alert('Bem-vindo ao jogo do número secreto.');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// while = enquanto; enquanto o chute não for igual ao número secreto o jogo vai continuar perguntando 
while(chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 10');
    // se o chute for igual ao número secreto 

    // se o chute for igual ao número secreto 
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // adicionando +1 a cada tentativa
        tentativas++
    } 
        
    }
    if (tentativas >1){
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
 } else { "Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);"

 }


