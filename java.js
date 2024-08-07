function calcular() {

    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;
    let valor3 = document.getElementById('valor3').value;

    if (valor1 <= 0) {
        document.getElementById("resultado").innerHTML = "Isso não é um triângulo!"
        return
    } else if (valor2 <= 0) {
        document.getElementById("resultado").innerHTML = "Isso não é um triângulo!"
        return
    } else if (valor3 <= 0) {
        document.getElementById("resultado").innerHTML = "Isso não é um triângulo!"
        return
    }

    if(valor1 === valor2 && valor1 === valor3) {
        document.getElementById('resultado').innerHTML = 'Triângulo Equilátero: Todos os três lados são iguais.'
    } else if(valor1 === valor2 && valor1 !== valor3 || valor1 === valor3 && valor1 !== valor2 || valor2 === valor3 && valor2 !== valor1) {
        document.getElementById('resultado').innerHTML = 'Triângulo Isósceles: Exatamente dois lados são iguais.'
    }  else if(valor1 !== valor2 !== valor3) {
        document.getElementById('resultado').innerHTML = 'Triângulo Escaleno: Todos os três lados são diferentes.'
    }
}

function limpar() {
    document.getElementById('valor1').value = '';
    document.getElementById('valor2').value = '';
    document.getElementById('valor3').value = '';
    document.getElementById('resultado').innerHTML = '';
}