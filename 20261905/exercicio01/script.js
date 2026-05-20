//EXE01
function mostraMsg(){
    let nomeExe01, paragrafoExe01;
    nomeExe01 = document.getElementById("txtExe01");
    paragrafoExe01 = document.getElementById("pExe01");

    if (nomeExe01.value != ""){
        paragrafoExe01.innerText = "Olá, " + nomeExe01.value + ", seja bem vindo(a)!";
    } else {
        paragrafoExe01.innerHTML =
            "<span style='color:red'>Digite seu nome!!</span>";
    }
}

//EXE02
function trocaEstilo(){
    let btnExe02, paragrafoExe02;

    btnExe02 = document.getElementById("btnExe02");
    paragrafoExe02 = document.getElementById("pExe02");

    if (btnExe02.innerText == "Troca Estilo"){
        paragrafoExe02.style.color = 'blue';
        paragrafoExe02.style.fontSize = '30px';
        paragrafoExe02.style.background = 'yellow';
        btnExe02.innerText = "Retorna Estilo";
    } else {
        paragrafoExe02.style.color = '';
        paragrafoExe02.style.fontSize = '';
        paragrafoExe02.style.background = '';
        btnExe02.innerText = "Troca Estilo";
    }
}

//EXE03
function trocaCor(novaCor){
    document.body.style.background = novaCor;
}

//EXE04
function addParagrafo(){
    let div, novoParagrafo;

    div = document.getElementById("conteudo");

    novoParagrafo = document.createElement("p");

    novoParagrafo.innerText = "Parágrafo Adicionado via JS";

    div.appendChild(novoParagrafo);
}

function removeParagrafo(){
    let div, ultimoParagrafo;

    div = document.getElementById("conteudo");

    ultimoParagrafo = div.lastElementChild;

    if (ultimoParagrafo){
        div.removeChild(ultimoParagrafo);
    } else {
        alert("Não há mais parágrafos para serem removidos!");
    }
}

//EXE05
function mostraImg(){
    let img;

    img = document.getElementById("imgExe05");

    img.style.display = 'block';
}

function escondeImg(){
    let img;

    img = document.getElementById("imgExe05");

    img.style.display = 'none';
}

//EXE06
function trocaImg(tipo){
    let img;

    img = document.getElementById("imgExe06");

    switch (tipo){
        case "Bicicleta":
            img.src = "/20261905/img/bicicleta.jpg";
            break;

        case "Carro":
            img.src = "/20261905/img/carro.jpg";
            break;

        case "Moto":
            img.src = "/20261905/img/moto.jpg";
            break;

        case "Ônibus":
            img.src = "/20261905/img/onibus.jpg";
            break;

        default:
            img.src = "/20261905/img/img02.png";
    }
}

//EXE07
function entrouNaArea(){
    let areaDiv07 = document.getElementById("areaExe07");

    areaDiv07.style.width = '400px';
    areaDiv07.style.height = '400px';
    areaDiv07.style.background = 'green';
}

function saiuDaArea(){
    let areaDiv07 = document.getElementById("areaExe07");

    areaDiv07.style.width = '300px';
    areaDiv07.style.height = '300px';
    areaDiv07.style.background = 'blue';
}

//EXE08
function mostraTxt(status){
    let paragrafoExe08;

    paragrafoExe08 = document.getElementById("pExe08");

    if (status){
        paragrafoExe08.innerHTML =
            "<b>Tecnologias FrontEnd fundamentais</b>";

        paragrafoExe08.style.opacity = "1";
    } else {
        paragrafoExe08.style.opacity = "0";
    }
}

//EXE09
function criarLista(){
    let numItens, lista, txtItem;

    numItens = document.getElementById("numItensExe09").value;

    if (numItens != ""){
        numItens = Number(numItens);

        lista = document.getElementById("listaExe09");

        for (let i = 0; i < numItens; i++){
            txtItem = prompt("Digite o texto do " + (i+1) + " item");

            let novoItem = document.createElement("li");

            novoItem.innerText = txtItem;

            lista.appendChild(novoItem);
        }
    } else {
        alert("Digite o número de itens que deseja inserir!");
    }
}