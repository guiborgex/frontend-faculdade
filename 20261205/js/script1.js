//ex01
    function soma(){
        let n1 = Number(document.getElementById("num1").value);
        let n2 = Number(document.getElementById("num2").value);

        let resposta = n1 + n2;

        let result = document.getElementById("result");
        result.value = resposta;
    }

    function subtracao(){
        let n1 = Number(document.getElementById("num1").value);
        let n2 = Number(document.getElementById("num2").value);

        let resposta = n1 - n2;
        
        let result = document.getElementById("result");
        result.value = resposta;
    }

    function multiplicacao(){
        let n1 = Number(document.getElementById("num1").value);
        let n2 = Number(document.getElementById("num2").value);

        let resposta = n1 * n2;
        
        let result = document.getElementById("result");
        result.value = resposta;
    }

    function divisao(){
        let n1 = Number(document.getElementById("num1").value);
        let n2 = Number(document.getElementById("num2").value);

        let resposta = n1 / n2;
        
        let result = document.getElementById("result");
        result.value = resposta;
    }