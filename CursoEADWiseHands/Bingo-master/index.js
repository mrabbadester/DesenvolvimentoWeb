function gerarNumeroAleatorio(inicioIntervalo, fimIntervalo) {
    return Math.floor((fimIntervalo - inicioIntervalo) * Math.random()) + inicioIntervalo;
}

function gerarFileira(quantidadeNumeros, inicio, fim) {
    let cartela = [];
    for (i = 0; i < quantidadeNumeros; i++) {
        let numeroCartelaExiste = true;
        while (numeroCartelaExiste == true) {
            let numeroAleatorio = gerarNumeroAleatorio(inicio, fim);
            if (cartela.includes(numeroAleatorio) == true) {
                numeroCartelaExiste = true;
            } else {
                numeroCartelaExiste = false;
                cartela.push(numeroAleatorio);
            }
        }
    }
    return cartela;
}

function gerarCartela(){
    return [gerarFileira(5, 1, 15), gerarFileira(5, 16, 30), gerarFileira(5, 31, 45), gerarFileira(5, 46, 60), gerarFileira(5, 61, 75)];
}

function gerarCartelaHTML() {

    let nomeJogador = prompt("Digite o nome do jogador:;")

    let titulo = ['B', 'I', 'N', 'G', 'O'];
    let cartela = gerarCartela();
    
    let divBingo = document.getElementById("bingo");

    let h3nome = document.createElement("h3");
    h3nome.style = "text-align: center;"
    h3nome.innerText = nomeJogador;

    
    let divCartela = document.createElement("div");
    divCartela.appendChild(h3nome);
    divCartela.className = "col-4";
    let table = document.createElement("table");
    let tr = document.createElement("tr");
    tr.className="table-primary color_blue ";
    
    titulo.forEach(function (elemento) {
        let td = document.createElement("td");
        td.innerText = elemento;
        tr.appendChild(td);
    });

    table.appendChild(tr);

    for(let linha = 0; linha < 5; linha++){
        let tr = document.createElement("tr");
        for(let coluna = 0; coluna < 5; coluna++){
            let td = document.createElement("td");
            if(linha == 2 && coluna == 2){
                td.innerText = "X";
            }else{
                td.innerText = cartela[coluna][linha];
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    table.classList = ["table", "table-dark", "table-striped"];
    divCartela.appendChild(table);
    divCartela.style = "display: inline;"
    divBingo.appendChild(divCartela);

}

function verificaCartela(cartela, numerosSorteados, quantidadeNumeros){
    if(numerosSorteados.length < quantidadeNumeros){
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
      while(numeroExiste == true){
        let numeroAleatorio = gerarNumeroAleatorio(1,75);
        if(numerosSorteados.includes(numeroAleatorio) == true){
          numeroExiste = true;
        }else{
          numeroExiste = false;
          numerosSorteados.push(numeroAleatorio);
          console.log("N??meros sorteados:", numerosSorteados);
          vetorJogadores.forEach(function(jogador){
            if(verificaCartela(jogador.cartela, numerosSorteados, 25) == true){
              console.log(`${jogador.nome} ganhou o BINGO! Parab??nnnsssssss!!!!!!`);
              clearInterval(intervalo);
            }
          });
        }
      }
      if(numerosSorteados.length >= 75){
        console.log("Sorteio Finalizado!");
        clearInterval(intervalo);
      }
    }, 1000);
  }
  