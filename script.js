
function verificador(params) {
    var nasc = document.getElementById('campoAno');
    var data = new Date();
    var anoAtual = data.getFullYear();
    var resultado = document.getElementById('resultado');
    var idade = anoAtual - nasc.value;
    resultado.innerHTML = `Uma pessoa de ${idade} anos`; 
}
