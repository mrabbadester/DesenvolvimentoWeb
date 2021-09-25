function gerarNumeroAleatorio0a100(){
  return Math.ceil(100*Math.random());
} //Para fazer o sorteio

function gerarCartela(){
  //Quantos números terão nossa cartela
  //Gerar uma cartela com 24 números aleatórios de 0 a 100
  let cartela = [];

  for(i = 0; i < 24; i++){
    let numeroCartelaExiste = true;
    while(numeroCartelaExiste == true){
      let numeroAleatorio = gerarNumeroAleatorio0a100();
      if(cartela.includes(numeroAleatorio) == true){
        numeroCartelaExiste = true;
      }else{
        numeroCartelaExiste = false;
        cartela.push(numeroAleatorio);
      }
    }
  }

  //O que fazer para gerar os números da cartela???
  //Preciso esperar um tempo para gerar os números da minha cartela???
  return cartela;
}

let cartelaCarol = gerarCartela();
//console.log("Cartela da Carol", cartelaCarol);
//let cartelaOtavio = gerarCartela();

//A condição para uma pessoa ganhar o bingo é todos os números de sua cartela serem sorteados

function verificaCartela(cartela, numerosSorteados){
  //Vocês vão pensar um pouco para escrever ....
  //Se todos os numeros da cartela estiverem em numeros sorteados, retorna TRUE, senão, retorna FALSE
  if(numerosSorteados.length < 24){
    return false;
  }

  let numerosExistem = true; 
  cartela.forEach(function(numero){
    if(numerosSorteados.includes(numero) == true){
      numerosExistem = true;
    }else{
      numerosExistem = false;
      return false;
    }
  });

  if(numerosExistem == true){
    return true;
  }
}

function jogarBingo(vetorJogadores){
  let numerosSorteados = [];

  let intervalo = setInterval(function(){
    let numeroExiste = true;
    //Sorteando até que eu tenha certeza que o número ainda não foi sorteado
    while(numeroExiste == true){
      let numeroAleatorio = gerarNumeroAleatorio0a100();
      if(numerosSorteados.includes(numeroAleatorio) == true){
        numeroExiste = true;
      }else{
        numeroExiste = false;
        numerosSorteados.push(numeroAleatorio);
        //AQUI EU TENHO QUE VERIFICAR SE UMA PESSOA GANHOU!!!1
        vetorJogadores.forEach(function(jogador){
          if(verificaCartela(jogador.cartela, numerosSorteados) == true){
            console.log(`${jogador.nome} ganhou o BINGO!`);
            clearInterval(intervalo);
          }else{
            console.log(`${jogador.nome} ainda ganhou o BINGO!!!`);
          }
        })
        
        console.log("Números sorteados:", numerosSorteados);
      }
    }
    //console.log(numerosSorteados);
    if(numerosSorteados.length >= 100){
      console.log("Sorteio Finalizado!");
      clearInterval(intervalo);
    }
  }, 1000);
}

function perguntarJogador(vetorJogadores){
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let jogar = false;
  rl.question("Qual o nome do jogador? Digite 'jogar' para iniciar o jogo.\n", function(nomeJogador){
    if(nomeJogador == "jogar"){
      jogar = true;
      console.log("Jogadores inscritos:", vetorJogadores);
      rl.close();
      0; //Chama a função / Executa a função
    }else{
      let jogador = {
        nome: nomeJogador,
        cartela: gerarCartela()
      }
      rl.close();
      console.log("Jogador criado com sucesso. Seguem os seus dados:", jogador);
      vetorJogadores.push(jogador);
      perguntarJogador(vetorJogadores);
    }
  })
}

let vetorJogadores = [];
perguntarJogador(vetorJogadores);










 