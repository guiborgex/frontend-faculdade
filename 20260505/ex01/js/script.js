console.log("javascript carregado com sucesso!");

//DOM METODOS
//getElementById() - retorna o elemento que possui o id especificado
let p1 = document.getElementById("prim_paragr");
console.log(p1.innerText);
p1.style.color = "blue";
p1.style.fontSize = "25px";

//getElementsByTagName() - retorna uma coleção de elementos com a tag especificada
let Array_Tit1 = document.getElementsByTagName("h1");
for (let i = 0; i < Array_Tit1.length; i++) {
    console.log("Elemento h1 numero: " + (i + 1));
    console.log("O texto deste Tit1 é: " + Array_Tit1[i].innerText);
    Array_Tit1[i].innerText = "mudei o conteudo do titulo";
    Array_Tit1[i].style.backgroundColor = "pink";
}

//getElementsByClassName() - retorna uma coleção de elementos com a classe especificada
let Array_Campo = document.getElementsByClassName("campo");
console.log(Array_Campo);
for (let i = 0; i < Array_Campo.length; i++) {
    console.log("O nome do campo é: " + Array_Campo[i].name);
    console.log("O placeholder do campo é: " + Array_Campo[i].placeholder);
    console.log("A cor de fundo do campo é: " + Array_Campo[i].style.backgroundColor.name);
}
for (let i = 0; i < Array_Campo.length; i++) {
    Array_Campo[i].name = "nome_ " + i;
    Array_Campo[i].placeholder = "Digite aqui: " + i;
    Array_Campo[i].style.backgroundColor = "yellow";
}