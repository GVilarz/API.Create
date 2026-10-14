/*
=====================================
  FRONT-END — consome nossa API local
=====================================

Este arquivo roda no navegador.
Ele faz requisições para nossa API Node.js
e mostra os dados na tela.
*/

//=======================
//ELEMENTOS DO HTML
//=======================
//foto do cachorro
const ballImage = document.getElementById("ballImage");
//nome raça
const ballName = document.getElementById("ballName");
//cachorro aleatório
const randomBtn = document.getElementById("randomBtn");
//botão que busca cachorro por raça
const searchBtn = document.getElementById("searchBtn");
//campo de texto onde o usuário digita a raça
const nearInput = document.getElementById("nearInput");
//area onde fica a imagem do cachorro
//usamos querySelector porque é uma classe(.dog-area)
const ballArea = document.querySelector(".ball-area");

//==============================
// URL DA API
//==============================

const API = "http://localhost:3000/api/bolas";

//==============================
// FUNÇÃO PRINCIPAL
//==============================

async function buscarAno(url){
  // adiciona a classe "loading"
  // normalmente usada para mostrar animação de carregamento
  ballArea.classList.add("loading");

  try {
    //faz requisição HTTP para a API
    const response = await fetch(url);
    // converte a resposta para JSON
    const data = await response.json();
    //mostra no console a resposta da API
    console.log("Resposta da API:", data)

    //Vamos verificar se a API retornou erro
    if (data.status === "error"){
      //mostra a mensagem de erro na tela
      //breedName - Elemento HTML
      //.textContent - Propriedade que define o texto do elemento
      //data - Objeto com os dados recebidos da API
      //.message - Propriedade que contém a mensagem ou URL
      ballName.textContent = data.message;
      //remove a imagem
      ballImage.src = "";
      //execução da função
      return;
    }

    //coloca a imagem do cachorro na tela 
    // o src define qual imagem será exibida
    ballImage.src = data.message;

    // extrai o nome da raça da URL da imagem
    // exemplo da URL:
    // http://localhost:3000/fotos/husky/1.jpg

    //separa a URL em partes usando "/"
    const partes = data.message.split("/")

    //pega a posição 5 do array
    // que corresponde ao nome da raça
    const ano = partes[5]

    //coloca a primeira letra maiúscula
    // ex: husky --> Husky
    ballName.textContent = 
      //raca.charAt(0) - pega a primeira letra
      //.toUpperCase() - Transforma em maiúscula
      //raca.slice(1) - pega o texto a partir da segunda letra
      ano.charAt(0).toUpperCase() + ano.slice(1);

  } catch (erro){
    //caso o servidor esteja desligado
    //ou aconteça algum erro na requisição

    console.error(erro);
    
    //mostra mensagem na tela
    ballName.textContent = 
      "📴 servidor offline - rode: node server.js"
    
    //remove a imagem
    ballImage.src = "";
  } finally {
    //remove a classe de carregamento
    //independentemente de erro ou sucesso.
    ballArea.classList.remove("loading")
  }
}

// ==============================
// AÇÕES
// ==============================

//função que busca o cachorro aleatório
function bolaAleatoria(){
  //chamar a função principal
  //passando a rota /aleatorio da API
  buscarAno(`${API}/aleatorio`);
}

//função que busca cachorro por raça
function buscarPorAno(){
  //pegar o texto digitado input
  //Trim ele remove os espaços em branco {trim()} do inicio e do fim do texto.
  const ano = nearInput.value.trim().toLowerCase();

  //verificar se o usuário digitou algo
  if (!ano) {
    // se não digitou, mostra alerta
    alert ("Digite um pais sede correto!")
    // interrompe a função
    return;
  }

  //chamar a API passando a raca na URL
  //exemplo: /api/cachorros/husky
  buscarAno(`${API}/${ano}`)
}

// ====================================
// EVENTOS
// ====================================

// quando clicar no botão "aleatório"
randomBtn.addEventListener("click", bolaAleatoria);

// quando clicar no botão "buscar"
searchBtn.addEventListener("click", buscarPorAno);

//quando clicar na imagem do cachorro
//carrega outro cachorro aleatório
ballImage.addEventListener("click", bolaAleatoria);

//quando o usuário apertar o ENTER no input
nearInput.addEventListener("keypress", (event) =>{
  //verifica se a tecla pressionada foi enter
  if (event.key === "Enter"){
    //executa a busca por raça
    buscarPorAno();
  }
})

//CARREGA AO ABRIR A PÁGINA

bolaAleatoria();