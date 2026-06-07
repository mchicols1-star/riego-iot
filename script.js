console.log("Script cargado");

const URL =
"https://script.google.com/macros/s/AKfycbxFjbGbkXZeMuZsOGx-0iKak9qGNvqaYaaADs8rild1EkCBSyEuoWouE-6aoj_5v6kciw/exec";

async function obtenerDatos() {

    try {

        const respuesta = await fetch(URL);
        const datos = await respuesta.json();

        document.getElementById("humedad").innerHTML =
            datos.humedad + "%";

        document.getElementById("estado").innerHTML =
            datos.estado;

        document.getElementById("bomba").innerHTML =
            datos.bomba == 1
                ? "🟢 Encendida"
                : "🔴 Apagada";

    } catch(error) {

        console.error(error);

        document.getElementById("estado").innerHTML =
            "Error de conexión";
    }
}


obtenerDatos();

// Actualizar cada 15 segundos
setInterval(obtenerDatos, 15000);
