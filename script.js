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
