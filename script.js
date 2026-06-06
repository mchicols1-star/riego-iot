const channelID = "13399676";
const readKey = "0E4LE0EFERMORWDY";

async function obtenerDatos() {

    const url =
    `https://api.thingspeak.com/channels/${channelID}/feeds.json?api_key=${readKey}&results=20`;

    const respuesta = await fetch(url);

    const datos = await respuesta.json();

    const feeds = datos.feeds;

    let humedadActual =
        feeds[feeds.length-1].field1;

    document.getElementById("humedad").innerHTML =
        humedadActual + "%";

    if(humedadActual < 30)
        document.getElementById("estado").innerHTML = "Suelo Seco";
    else
        document.getElementById("estado").innerHTML = "Suelo Húmedo";

    let etiquetas = [];
    let humedad = [];

    feeds.forEach(f => {

        etiquetas.push(
            new Date(f.created_at)
            .toLocaleTimeString()
        );

        humedad.push(f.field1);
    });

    dibujarGrafica(etiquetas, humedad);
}
let chart;

function dibujarGrafica(labels,data){

    if(chart){
        chart.destroy();
    }

    const ctx =
      document.getElementById('grafica');

    chart = new Chart(ctx, {

        type:'line',

        data:{
            labels:labels,

            datasets:[{
                label:'Humedad (%)',
                data:data
            }]
        }
    });
}

obtenerDatos();

setInterval(obtenerDatos,15000);