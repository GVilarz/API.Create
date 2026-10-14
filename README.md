# ⚽ API.Create — Galeria de Bolas por Ano

Uma aplicação web interativa que consome uma API Node.js local para exibir imagens de bolas de futebol históricas, permitindo busca por ano/edição ou sorteio aleatório.

---

## 📌 Sobre o Projeto

Este projeto consiste em uma interface Front-End construída com **HTML, CSS e JavaScript Vanilla** que se comunica com uma API REST em **Node.js**. 

**Funcionalidades Principais:**
- 🎲 **Busca Aleatória:** Carrega uma bola de futebol sorteada aleatoriamente ao clicar na imagem ou no botão dedicado.
- 🔎 **Busca por Ano:** Permite ao usuário digitar o ano/edição no campo de busca para exibir a bola correspondente.
- ⚠️ **Tratamento de Erros:** Exibe mensagens amigáveis na tela caso uma edição não seja encontrada ou se o servidor estiver offline.
- ⏳ **Feedback Visual:** Animação de carregamento enquanto as requisições HTTP são processadas.

---

## 📸 Prints do Projeto

<p align="center">
  <img src="Prints!/Print-Aleatorio.png" alt="Busca Aleatória de Bola" width="700">
  <br>
  <em>Busca de bola aleatória / Tela inicial</em>
</p>

<br>

<p align="center">
  <img src="Prints!/Print-Busca.png" alt="Busca por Ano" width="700">
  <br>
  <em>Busca por ano/edição específica</em>
</p>

<br>

<p align="center">
  <img src="Prints!/Print-Erro.png" alt="Tratamento de Erro" width="700">
  <br>
  <em>Tratamento de erro quando o ano não é encontrado ou servidor está offline</em>
</p>

---

## 🛠️ Tecnologias Utilizadas

- **Front-End:** HTML5, CSS3, JavaScript (ES6+ / Async/Await / Fetch API)
- **Back-End:** Node.js, Express
- **API:** Rest API local servindo arquivos estáticos e respostas JSON

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- Um navegador web moderno (Chrome, Edge, Firefox, etc.)