const VENTAS_BASE = 5;

function calcularComision (numeroVentas , precioProducto){
    let comision = 0;
    if(comision < VENTAS_BASE){
        let ventasExtra = numeroVentas - VENTAS_BASE;
        comision = ventasExtra * (precioProducto * 0.1);
   
    }
    return comision
}

function calculadora (){
    
    let contenedorSueldoBase = document.getElementById("txtSueldoBase");
    let contenedorNumVentas = document.getElementById("txtVentas");
    let contenedorPrecioProducto = document.getElementById("txtPrecio")

    let sueldoBaseStr = contenedorSueldoBase.value;
    let numeroVentasStr = contenedorNumVentas.value;
    let precioProductoStr =contenedorPrecioProducto.value;

    let sueldoBase = parseFloat(sueldoBaseStr);
    let numeroVentas = parseFloat(numeroVentasStr);
    let precioProducto = parseFloat(precioProductoStr);

    let comision=calcularComision(numeroVentas, precioProducto)
    
    let total = sueldoBase + comision;

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase
    spComision.textContent = comision
    spTotal.textContent = total


    
}
