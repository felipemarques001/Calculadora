function unir(value){
    document.getElementById("visor").value += value;
}
function limpar(){
    document.getElementById("visor").value = ""
}
function calc(){
    let resultado = 0;
    resultado = document.getElementById("visor").value;
    document.getElementById("visor").value = eval(resultado);
}
