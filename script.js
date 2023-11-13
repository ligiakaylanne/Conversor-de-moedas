function converter() {
    var valorEmDolar = parseFloat(document.getElementById('valorDolar').value);


    var cotacaoParaReal = 5.32;
    var cotacaoParaEuro = 0.84;

    var valorEmReal = (valorEmDolar * cotacaoParaReal).toFixed(2);
    var valorEmEuro = (valorEmDolar * cotacaoParaEuro).toFixed(2);

  
    document.getElementById('valorDigitado').textContent = valorEmDolar.toFixed(2);
    document.getElementById('valorEmReal').textContent = "R$ " + valorEmReal;
    document.getElementById('valorEmEuro').textContent = "€ " + valorEmEuro;

    document.getElementById('resultado').style.display = 'block';
}


