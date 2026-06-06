async function obtenerDatos() {

    document.getElementById("humedad").innerHTML = "84%";
    document.getElementById("estado").innerHTML = "Humedo";
    document.getElementById("bomba").innerHTML = "Apagada";
}

obtenerDatos();

setInterval(obtenerDatos,15000);
