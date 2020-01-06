//Declaración de variables

var nombreUsuario = ("cande rufail");
var saldoCuenta = 50000;
var limiteExtraccion = 10000;
var montoASumar;
var montoARestar;
var pagoDeServicios;
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;
var cuentaAmiga1 = "1234567";
var cuentaAmiga2 = "7654321";
var codigoDeSeguridad = "1988";

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
    iniciarSesion();
}



//funciones auxiliares
function sumar(montoASumar) {
    saldoCuenta += montoASumar;
    return saldoCuenta;
}
function restar(montoARestar) {
    saldoCuenta -= montoARestar;
    return saldoCuenta;
}

function haySaldoDisponible(monto) {
    if (monto > saldoCuenta) {
        alert("no hay dinero disponible en tu cuenta para realizar esta operacion");
        return false;
    } else {
        return true;
    }
}

function validarLimite(monto) {
    if (monto > limiteExtraccion) {
        alert("la cantidad de dinero que desea extraer es mayor a su limite de extraccion");
        return false;
    } else {
        return true;
    }
}

function extraerCien(monto) {
    if (monto % 100 === 0) {
        return true;
    } else {
        alert(" solo puede extraer billetes de $100");
        return false;
    }
}

function validarRespuesta(monto) {
    if (isNaN(monto) || monto <= 0) {
        alert ("por favor ingrese un numero valido");
        return false;
    } else {
        return true;
    }
}


//Funciones que tenes que completar

function cambiarLimiteDeExtraccion() {
    var nuevoLimite = prompt("ingrese nuevo limite de extraccion");
    if (validarRespuesta(nuevoLimite)) {
        limiteExtraccion = nuevoLimite;
        actualizarLimiteEnPantalla();
        alert("su  nuevo limite de extraccion es: " + nuevoLimiteNumero);
    }
}
function extraerDinero() {
    var extraerDinero = prompt("Ingrese el monto a extraer");
    if (haySaldoDisponible(extraerDinero) && validarLimite(extraerDinero) && extraerCien(extraerDinero)&& validarRespuesta(extraerDinero)){
        var saldoAnterior = saldoCuenta;
        var saldoActual = restar(extraerDinero);
        actualizarSaldoEnPantalla()
        alert("has extraido:" + extraerDinero + "\n" + "saldoAnterior: " + saldoAnterior + "\n" + "saldo actual: " + saldoActual);
    }
}

function depositarDinero() {
    var depositarDinero = parseInt(prompt("Ingrese el monto a depositar"));
    if (validarRespuesta(depositarDinero)){
    var saldoAnterior = saldoCuenta;
    var saldoActual = sumar(depositarDinero);
    actualizarSaldoEnPantalla();
    alert("depositaste:" + depositarDinero + "\n" + "saldoAnterior: " + saldoAnterior + "\n" + "saldo actual: " + saldoActual);
}
}

function pagarServicio() {
    var pagarServicios = prompt("ingresa el numero  del servicio que desee pagar" + "\n" + "1 agua" + "\n" + "2 telefono" + "\n" + "3 luz" + "\n" + "4 internet");
    var saldoAnterior = saldoCuenta;
    if (validarRespuesta(pagarServicios) && haySaldoDisponible(pagarServicios) ) {
    switch (pagarServicios) {
        case "1":
            if (haySaldoDisponible(agua)) {
                restar(agua);
                actualizarSaldoEnPantalla();
                alert("has pagado el serivicio agua\n saldo anterior: " + saldoAnterior + "\n dinero descontado: " + agua + "\nsaldo actual " + saldoCuenta);
            }
            break;
        case "2":
            if (haySaldoDisponible(telefono)){
                restar(telefono);
                actualizarLimiteEnPantalla();
                alert("has pagado el serivicio telefono\n saldo anterior: " + saldoAnterior + "\n dinero descontado: " + telefono + "\nsaldo actual " + saldoCuenta);
            }
           break;
        case "3":
            if (haySaldoDisponible(luz)){
                restar(luz);
                actualizarLimiteEnPantalla();
                alert("has pagado el serivicio luz\n saldo anterior: " + saldoAnterior + "\n dinero descontado: " + luz + "\nsaldo actual " + saldoCuenta);
            }
            break;
        case "4":
            if (haySaldoDisponible(internet)){
                restar(internet);
                actualizarLimiteEnPantalla();
                alert("has pagado el serivicio internet\n saldo anterior: " + saldoAnterior + "\n dinero descontado: " + internet + "\nsaldo actual " + saldoCuenta);
                break;
            }
             default:
                alert("el numero ingresado no es correcto");
             } 
            }

    }



function transferirDinero() {
    var montoATransferir = parseInt(prompt("ingrese el monto que desea transferir"));
    if (haySaldoDisponible(montoATransferir) && validarRespuesta (montoATransferir)) {
        cuentaAmiga = prompt("ingrese el numero de cuenta al que desea tranferir el dinero");
        if (cuentaAmiga === cuentaAmiga1 || cuentaAmiga === cuentaAmiga2) {
            saldoCuenta = restar(montoATransferir);
            actualizarSaldoEnPantalla()
            alert("se ha transferido: " + montoATransferir + "\n cuenta destino: " + cuentaAmiga);
        } else {
            alert("solo puede trasferir dinero a una cuenta amiga");
        }
    }
}

function iniciarSesion() {
    var codigoDeSeguridad = prompt("ingrese su codigo se seguridad");
    if (codigoDeSeguridad === "1988" && validarRespuesta (codigoDeSeguridad)) {
        alert("bienvenida Rufail Candelaria ya puedes comenzar a realizar operaciones");
    } else {
        saldoCuenta = 0;
        alert("codigo incorrecto. tu dinero ha sido retenido por cuestiones de seguridad");
        actualizarSaldoEnPantalla()
    }
}



//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}