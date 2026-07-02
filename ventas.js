const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto) {
    let comision = 0;
    if (comision < VENTAS_BASE) {
        let ventasExtra = numeroVentas - VENTAS_BASE;
        comision = ventasExtra * (precioProducto * 0.1);

    }
    return comision
}


function validarInput(input, idError) {

    let valor = input.value;
    let error = document.getElementById(idError);

    error.textContent = "";

    if (valor == "") {
        error.textContent = "Este campo no puede estar vacío.";
        return false;
    }

    if (isNaN(valor)) {
        error.textContent = "Solo se permiten números.";
        return false;
    }

    if (valor.length > 5) {
        error.textContent = "Máximo 5 dígitos.";
        return false;
    }

    return true;
}


function calculadora() {



    let sueldoBase = recuperarFloat("txtSueldoBase")
    let numeroVentas = recuperarFloat("txtVentas");
    let precioProducto = recuperarFloat("txtPrecio")

    let comision = calcularComision(numeroVentas, precioProducto)

    let total = sueldoBase + comision;

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase
    spComision.textContent = comision
    spTotal.textContent = total



}
