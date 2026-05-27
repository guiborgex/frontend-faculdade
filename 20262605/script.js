// exe01

let botaoExe01;

botaoExe01 = document.getElementById("btnExe01");
botaoExe01.addEventListener("click", mostrarMensagem);

function mostrarMensagem() {
    let nomeExe01, respostaExe01;

    nomeExe01 = document.getElementById("nomeExe01").value;
    respostaExe01 = document.getElementById("pExe01");

    if (nomeExe01 != "") {
        respostaExe01.innerText = "Olá " + nomeExe01 + "! Seja Bem-vindo(a)!!";
    } else {
        respostaExe01.innerHTML = "<span style='color: red; font-size: 30px;'>Digite seu nome!</span>";
    }
}


// exe02

let btnExe02, paragrafoExe02;

btnExe02 = document.getElementById("btnExe02");
paragrafoExe02 = document.getElementById("pExe02");

btnExe02.addEventListener("click", estiloNovo);

function estiloNovo() {
    let labelBotao;

    labelBotao = btnExe02.innerText;

    if (labelBotao == "Alterar Estilo") {
        paragrafoExe02.style.color = "white";
        paragrafoExe02.style.backgroundColor = "darkblue";
        paragrafoExe02.style.fontSize = "30px";
        btnExe02.innerText = "Estilo Original";
    } else {
        paragrafoExe02.style.color = "";
        paragrafoExe02.style.backgroundColor = "";
        paragrafoExe02.style.fontSize = "";
        btnExe02.innerText = "Alterar Estilo";
    }
}


// exe03

let botoes;

botoes = document.querySelectorAll(".cor");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", trocarCor);
}

function trocarCor() {
    let cor;

    cor = this.dataset.cor;
    document.body.style.background = cor;
}


// exe04

document.getElementById("btnCriar").addEventListener("click", criarParagrafo);
document.getElementById("btnRemover").addEventListener("click", removerParagrafo);

function criarParagrafo() {
    let p = document.createElement("p");
    let texto_paragrado = prompt("Digite um texto para o Parágrafo que será criado:");

    p.innerText = texto_paragrado;

    document.getElementById("conteudo").appendChild(p);
}

function removerParagrafo() {
    let conteudo = document.getElementById("conteudo");

    if (conteudo.lastElementChild) {
        let resposta = confirm("Deseja realmente excluir o último parágrafo?");

        if (resposta) {
            conteudo.removeChild(conteudo.lastElementChild);
        }
    } else {
        alert("Não existe mais parágrafo a ser excluído!");
    }
}


// exe06

let seletor;

seletor = document.getElementById("selectExe06");
seletor.addEventListener("change", trocarVeiculo);

function trocarVeiculo() {
    let valorSelecionado, foto, figura;

    valorSelecionado = seletor.value;
    foto = document.getElementById("fotoExe06");

    switch (valorSelecionado) {
        case "car":
            figura = "./img/carro.jpg";
            break;

        case "moto":
            figura = "./img/moto.jpg";
            break;

        case "bus":
            figura = "./img/onibus.jpg";
            break;

        case "bike":
            figura = "./img/bicicleta.jpg";
            break;

        default:
            figura = "";
            break;
    }

    foto.src = figura;
}


// exe07

let caixa;

caixa = document.getElementById("divExe07");

caixa.addEventListener("mouseenter", entrou);
caixa.addEventListener("mouseleave", saiu);

function entrou() {
    caixa.style.background = "red";
    caixa.style.transform = "scale(1.5)";
}

function saiu() {
    caixa.style.background = "orange";
    caixa.style.transform = "scale(1)";
}


// exe08

let img, txtExe08;

img = document.getElementById("imgExe08");
img.addEventListener("mouseover", mostrarTexto);
img.addEventListener("mouseout", esconderTexto);

txtExe08 = document.getElementById("textoExe08");

function mostrarTexto() {
    txtExe08.style.color = "red";
    txtExe08.style.fontSize = "30px";
    txtExe08.style.transition = "0.5s";
    txtExe08.innerText = "Treino Pago!!";
}

function esconderTexto() {
    txtExe08.style.color = "";
    txtExe08.style.fontSize = "";
    txtExe08.innerText = "";
}


// exe09

let btnExe09;

btnExe09 = document.getElementById("btnExe09");
btnExe09.addEventListener("click", criarLista);

function criarLista() {
    let qtde = Number(document.getElementById("qtdeExe09").value);
    let lista = document.getElementById("listaExe09");

    lista.innerHTML = "";

    if (qtde != "") {
        for (let i = 1; i <= qtde; i++) {
            let texto = prompt("Digite o texto para o item " + i);
            let li = document.createElement("li");

            li.innerText = texto;
            lista.appendChild(li);
        }
    } else {
        alert("Digite a quantidade de itens que deseja incluir!");
    }
}


// exe10

let produtos, totalCompra;

produtos = document.querySelectorAll(".produto");
totalCompra = 0;

for (let i = 0; i < produtos.length; i++) {
    produtos[i].addEventListener("click", adicionarProduto);
}

function adicionarProduto() {
    let descricao, preco, lista, item, valorCompra;

    descricao = this.dataset.descr;
    preco = Number(this.dataset.preco);

    lista = document.getElementById("listaProdExe10");
    valorCompra = document.getElementById("valorCompraExe10");

    item = document.createElement("li");
    item.innerText = descricao + " - R$ " + preco;

    lista.appendChild(item);

    totalCompra = totalCompra + preco;

    valorCompra.innerText = "R$ " + totalCompra;
}

// exe11

let produtosExe11, totalCompraExe11;

produtosExe11 = document.querySelectorAll(".produtoExe11");
totalCompraExe11 = 0;

for (let i = 0; i < produtosExe11.length; i++) {
    produtosExe11[i].addEventListener("click", controlarProdutoExe11);
}

function controlarProdutoExe11() {
    let descricao, preco, quantidade, subtotal, lista, valorCompra, itemExistente;

    descricao = this.dataset.descr;
    preco = Number(this.dataset.preco);

    lista = document.getElementById("listaProdExe11");
    valorCompra = document.getElementById("valorCompraExe11");

    itemExistente = document.getElementById("item" + descricao + "Exe11");

    if (itemExistente) {
        totalCompraExe11 = totalCompraExe11 - Number(itemExistente.dataset.subtotal);

        lista.removeChild(itemExistente);

        this.style.backgroundColor = "bisque";
        this.style.border = "2px solid blue";

        valorCompra.innerText = "R$ " + totalCompraExe11;
    } else {
        quantidade = Number(prompt("Digite a quantidade de " + descricao + ":"));

        if (quantidade > 0) {
            subtotal = preco * quantidade;

            let li = document.createElement("li");

            li.id = "item" + descricao + "Exe11";
            li.dataset.subtotal = subtotal;
            li.innerText = descricao + " - Quantidade: " + quantidade + " - R$ " + subtotal;

            lista.appendChild(li);

            totalCompraExe11 = totalCompraExe11 + subtotal;

            this.style.backgroundColor = "lightgreen";
            this.style.border = "4px solid green";

            valorCompra.innerText = "R$ " + totalCompraExe11;
        } else {
            alert("Digite uma quantidade válida!");
        }
    }
}