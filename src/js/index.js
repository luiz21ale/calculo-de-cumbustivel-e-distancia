window.addEventListener('load', function() {
    const formulario = document.getElementById('transicao');
    formulario.classList.add('visible');
});



function calcularLitrosGastos() {
    // Obter valores dos campos
    var tempo = document.getElementById('tempo').value;
    var velocidade = document.getElementById('velocidade').value;

    // Limpar mensagens de erro e resultados anteriores
    document.getElementById('mensagem-erro').textContent = '';
    document.getElementById('resultado-distancia').textContent = '';
    document.getElementById('resultado-litros').textContent = '';

    // Verificar se os campos foram preenchidos
    if (tempo === '' || velocidade === '') {
        document.getElementById('mensagem-erro').textContent = "Por favor, preencha todos os campos.";
        return;
    }

    // Converter os valores para números
    tempo = parseFloat(tempo);
    velocidade = parseFloat(velocidade);

    // Verificar se os valores são numéricos válidos
    if (isNaN(tempo) || isNaN(velocidade)) {
        document.getElementById('mensagem-erro').textContent = "Por favor, insira valores numéricos válidos.";
        return;
    }

    // Realizar os cálculos
    var distancia = tempo * velocidade;
    var litrosGastos = distancia / 12;

    // Exibir os resultados
    document.getElementById('resultado-distancia').textContent =
        "Distância percorrida: " + distancia.toFixed(2) + " km";
    document.getElementById('resultado-litros').textContent =
        "Quantidade de litros utilizados: " + litrosGastos.toFixed(2) + " litros";
}

