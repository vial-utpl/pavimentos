$(document).ready(function() {
    console.log("Start...");
    loadGraph10();

});

var polino8 = function(a, b, c, d, e, f, g, h, i, j) {
    var hola;
    return ((a) + (b * (j)) + (c * Math.pow(j, 2)) + (d * Math.pow(j, 3)) + (e * Math.pow(j, 4)) + (f * Math.pow(j, 5)) + (g * Math.pow(j, 6)) + (h * Math.pow(j, 7)) + (i * Math.pow(j, 8)));
}
Chart.plugins.register({
    beforeDraw: function(chartInstance) {
        var ctx = chartInstance.chart.ctx;
        ctx.fillStyle = "rgba(255, 255, 255)";
        ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);

    }
});

function loadGraph10() {
    var ctx = document.getElementById("chart_moduloElastico").getContext('2d');
    if(window.myChart5 != null){
        window.myChart5.destroy();
    }
    window.myChart5 = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                    label: 'Módulo elástico',
                    data: [{
                            x: "",
                            y: "",
                            r: ""
                        }, {
                            x: "",
                            y: "",
                            r: ""
                        }
                    ],

                    showLine: true,
                    pointRadius: 0,
                    borderColor: [
                        'rgba(150, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    pointBackgroundColor: [
                        'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)',
                    ],

                    borderWidth: 1.8,
                    datalabels: {
                        display: false,
                    }
                },{
                    label: 'a1',
                    data: [{
                            x: "",
                            y: "",
                            r: ""
                        }, {
                            x: "",
                            y: "",
                            r: ""
                        }
                    ],
                    showLine: true,
                    pointRadius: 0,
                    borderColor: [
                        'rgba(150, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    pointBackgroundColor: [
                        'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)',
                    ],

                    borderWidth: 1.8,
                    datalabels: {
                        display: false,
                    }
                },{
                    label: 'a1',
                    data: [{
                            x: 107.365434712621,
                            y: 0.202948127934633,
                            r: ""
                        },{
                            x: 110.000,
                            y: 0.206713746925976,
                            r: ""
                        },{
                            x: 150.000,
                            y: 0.25367398871067,
                            r: ""
                        },{
                            x: 200.000,
                            y: 0.29884795816014,
                            r: ""
                        },{
                            x: 250.000,
                            y: 0.334815463044441,
                            r: ""
                        },{
                            x: 300.000,
                            y: 0.364851346228768,
                            r: ""
                        },{
                            x: 350.000,
                            y: 0.39248482246607,
                            r: ""
                        },{
                            x: 400.000,
                            y: 0.41824328408896,
                            r: ""
                        },{
                            x: 450.000,
                            y: 0.441489056348292,
                            r: ""
                        },{
                            x: 500.000,
                            y: 0.461391418275236,
                            r: ""
                        }
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: ['rgba(0, 0, 0, 1)'],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 1.5,
                    datalabels: {
                        align: 'right'
                    }
                }
            ]
        },
        options: {
            responsive: false,
            responsiveAnimationDuration:0, 
            tooltips: {
                callbacks: {
                    label: function(item, data) {
                        var datasetLabel = data.datasets[item.datasetIndex].label || '';
                        var dataPoint = data.datasets[item.datasetIndex].data[item.index];
                        return datasetLabel + " " + ':  ' + dataPoint.r + '';
                    }
                },
            },
            legend: {
                display: false
            },
            labels: {
                fontColor: 'rgb(255, 99, 132)'
            },
            layout: {
                padding: {
                    left: 2,
                    right: 7,
                    top: 2,
                    bottom: 2
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        lineWidth: 1,
                        color: 'rgba(0, 0, 0, 1)',
                        offsetGridLines: false
                    }, 
                    type: 'linear',
                    position: 'bottom',
                    ticks: {
                       
                        showLine: true,
                    
                        fontColor: 'rgba(0, 0, 0, 1)',
                        min: 0
                    },
                    scaleLabel: {
                        fontColor: 'rgba(0, 0, 0, 1)',
                        display: true,
                        labelString: 'Módulo elástico de la carpeta asfáltica x 1000 psi'
                        
                    }
                    
                }],
                yAxes: [{
                    gridLines: {
                        lineWidth: 1,
                        color: 'rgba(0, 0, 0, 1)',
                        offsetGridLines: false
                    },
                    type: 'linear',
                    position: 'bottom',
                    ticks: {
                        fontColor: 'rgba(0, 0, 0, 1)',
                        min: 0
                    },
                    
                    scaleLabel: {
                        fontColor: 'rgba(0, 0, 0, 1)',
                        display: true,
                        labelString: 'Coeficiente estructural a1'
                    }
                }],

            }
        }
    });
    var modulo_elastico_asfalto = document.getElementById("modelascarpeta").value;
    var modulo_elastico = (modulo_elastico_asfalto/1000)
    var res1 = { x: modulo_elastico, y: document.getElementById("coefEstrucCarpAsNDT").value, r: "Intersección" };
    window.myChart5.data.datasets[0].data[0, 0, 0] = res1;
    var res2 = { x: modulo_elastico, y: 0, r: document.getElementById("modelascarpeta").value };
    window.myChart5.data.datasets[0].data[1, 1, 1] = res2;
    var res3 = { x: 0, y: document.getElementById("coefEstrucCarpAsNDT").value, r: document.getElementById("coefEstrucCarpAsNDT").value };
    window.myChart5.data.datasets[1].data[0, 0, 0] = res3;
    var res4 = { x: modulo_elastico, y: document.getElementById("coefEstrucCarpAsNDT").value, r: "Intersección" };
    window.myChart5.data.datasets[1].data[1, 1, 1] = res4;
    window.myChart5.update();
}