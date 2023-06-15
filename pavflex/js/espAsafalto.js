$(document).ready(function () {
    console.log("Start...");

    espAsfalto();

});

function espAsfalto() {
    var ctx = document.getElementById("espAsfalto");
    if (window.myChartespAsfalto != null) {
        window.myChartespAsfalto.destroy();
    }
    window.myChartespAsfalto = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [""],
            datasets: [{
                label: 'Carpeta asfáltica',
                data: [{
                    y: "",
                    r: ""
                }],
                backgroundColor: [
                    '#8A8279',

                ],
                borderColor: [
                    '#62605E',

                ],
                borderWidth: 2,
                datalabels: {
                    align: 'center',
                    font: {
                        size: 10,
                        weight: 'bold'
                    },
                }
            }, ]
        },
        options: {
            responsive: false,
            responsiveAnimationDuration: 0, 
            tooltips: {
                callbacks: {
                    label: function (item, data) {
                        var datasetLabel = data.datasets[item.datasetIndex].label || '';
                        var dataPoint = data.datasets[item.datasetIndex].data[item.index];
                        return datasetLabel + " " + ':  ' + item.yLabel + " " + 'in ';
                    }
                },
            },

            layout: {
                padding: {
                    left: 1,
                    right: 40,
                    top: 2,
                    bottom: 2
                }
            },
            legend: {
                display: false
            },
            plugins: {
                datalabels: {

                    backgroundColor: function (context) {
                        return context.dataset.backgroundColor;

                    },

                    color: 'rgba(1, 1, 1, 1)',
                    font: {
                        size: 14,
                        weight: 'bold'
                    },

                }
            },
            scales: {
                yAxes: [{
                    display: false,
                    stacked: true,
                    ticks: {

                        beginAtZero: true,

                    }
                }],
                xAxes: [{
                    display: false,
                    stacked: true,
                    ticks: {

                        beginAtZero: true
                    }
                }]

            }
        }
    });

    var e1 = {
        y: document.getElementById("espesor_asfalto_recomendado").value,
        r: "Carpeta asfáltica" + " = " + document.getElementById("espesor_asfalto_recomendado").value + "" + " in"
    };
    window.myChartespAsfalto.data.datasets[0].data[0, 0] = e1;

    window.myChartespAsfalto.update();

}
