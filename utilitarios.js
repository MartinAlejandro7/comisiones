function recuperarTexto(idComponente) {
    let componenete = document.getElementById(idComponente);
    let valor = componenete.value;

    return valor;
}

function recuperarFloat(idComponente){
    let valorTexto = recuperarTexto(idComponente);
    let valorFloat = parseFloat(valorTexto);
    return valorFloat
}