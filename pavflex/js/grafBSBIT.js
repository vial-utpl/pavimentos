$(document).ready(function() {
    console.log("Start...");

    loadGraphBaseBituminosa();




});

var polino8 = function(a, b, c, d, e, f, g, h, i, j) {
    return ((a) + (b * (j)) + (c * Math.pow(j, 2)) + (d * Math.pow(j, 3)) + (e * Math.pow(j, 4)) + (f * Math.pow(j, 5)) + (g * Math.pow(j, 6)) + (h * Math.pow(j, 7)) + (i * Math.pow(j, 8)));
}
Chart.plugins.register({
    beforeDraw: function(chartInstance) {
        var ctx = chartInstance.chart.ctx;
        ctx.fillStyle = "rgba(255, 255, 255)";
        ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);

    }
});

function loadGraphBaseBituminosa() {
    var ctx = document.getElementById("chartBituminoso").getContext('2d');
    if(window.myChart3 != null){
        window.myChart3.destroy();
    }
    window.myChart3 = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{

                    data: [{
                            x: -0.5,
                            y: 4.3,
                            r: "Coeficiente estructural a2"
                        }

                    ],
                    pointRadius: 0,
                    showLine: true,

                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    pointBackgroundColor: [
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'right',
                        rotation: -90,
                        color: 'rgba(0, 0, 0, 1)',
                    },

                },
                {
                    label: 'a2 ',
                    data: [{
                            x: 0,
                            y: 0,
                            r: 0
                        }, {
                            x: 0,
                            y: 2.90428651341937,
                            r: 0.1
                        },
                        {
                            x: 0,
                            y: 5.78174198166406,
                            r: 0.2
                        },
                        {
                            x: 0,
                            y: 8.69052494762604,
                            r: 0.3
                        },


                    ],
                    showLine: true,

                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    pointBackgroundColor: [
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'right',


                    }
                },
                {
                    data: [{
                            x: 2.5,
                            y: 4.3,
                            r: "Estabilidad de Marshall"
                        }

                    ],
                    pointRadius: 0,
                    showLine: true,

                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    pointBackgroundColor: [
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'right',
                        rotation: -90,
                        color: 'rgba(0, 0, 0, 1)',
                    },

                },
                {
                    label: 'Estabilidad de Marshall',
                    data: [{
                            x: 3,
                            y: 0,
                            r: ""
                        }, {
                            x: 3,
                            y: 2.00519877104671,
                            r: 0
                        },
                        {
                            x: 3,
                            y: 3.56373488455424,
                            r: 200
                        },
                        {
                            x: 3,
                            y: 4.56620740660477,
                            r: 400
                        },
                        {
                            x: 3,
                            y: 5.21323071267024,
                            r: 600
                        },
                        {
                            x: 3,
                            y: 5.89559524221704,
                            r: 800
                        },
                        {
                            x: 3,
                            y: 6.59841260645943,
                            r: 1000
                        },
                        {
                            x: 3,
                            y: 7.23971828428122,
                            r: 1200
                        },
                        {
                            x: 3,
                            y: 7.89695380970267,
                            r: 1400
                        },
                        {
                            x: 3,
                            y: 8.61238194775176,
                            r: 1600
                        },
                        {
                            x: 3,
                            y: 9.20611994907977,
                            r: 1800
                        },
                        {
                            x: 3,
                            y: 9.53076040986624,
                            r: 1900
                        },
                    ],
                    showLine: true,

                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    pointBackgroundColor: [
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'right',


                    }
                },
                {
                    data: [{
                            x: 5.5,
                            y: 4.3,
                            r: "Módulo resiliente x 100000"
                        }

                    ],
                    pointRadius: 0,
                    showLine: true,

                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    pointBackgroundColor: [
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'right',
                        rotation: -90,
                        color: 'rgba(0, 0, 0, 1)',
                    },

                },
                {
                    label: 'Módulo resiliente',
                    data: [{
                            x: 6,
                            y: 0,
                            r: ""
                        }, {
                            x: 6,
                            y: 3.65684036945459,
                            r: 1
                        },
                        {
                            x: 6,
                            y: 5.33525728022619,
                            r: 1.5
                        },
                        {
                            x: 6,
                            y: 6.3640425868216,
                            r: 2
                        },
                        {
                            x: 6,
                            y: 7.14386281995689,
                            r: 2.5
                        },
                        {
                            x: 6,
                            y: 7.9358291948447,
                            r: 3
                        },
                        {
                            x: 6,
                            y: 9.39625239762245,
                            r: 4
                        },

                    ],
                    showLine: true,

                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    pointBackgroundColor: [
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'right',


                    }
                },
                {
                    data: [{
                            x: "",
                            y: "",
                            r: ""
                        },
                        {
                            x: "",
                            y: "",
                            r: ""
                        },
                        {
                            x: "",
                            y: "",
                            r: ""
                        },

                    ],
                    showLine: true,

                    borderColor: [
                        'rgba(150, 0, 0, 1)',
                    ],
                    backgroundColor: [
                        'white'
                    ],
                    pointBackgroundColor: [
                        'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)',
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        display: false,



                    }
                },
            ],

        },
        options: {
            responsive: false,
             responsiveAnimationDuration: 0,
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
            layout: {
                padding: {
                    left: 1,
                    right: 40,
                    top: 2,
                    bottom: 2
                }
            },
            plugins: {
                datalabels: {
                    backgroundColor: function(context) {
                        return context.dataset.backgroundColor;
                    },
                    borderRadius: 4,
                    color: 'rgba(0, 0, 0, 1)',
                    font: {
                        size: 11,
                        
                    },

                }
            },


            scales: {
                xAxes: [{
                    type: 'linear',
                    position: 'bottom',
                    display: false,
                    ticks: {
                        min: -0.5,
                        max: 6.1
                    }
                }],
                yAxes: [{
                    type: 'linear',
                    position: 'bottom',
                    display: false,
                    ticks: {
                        min: -0.5
                    }
                }],

            }
        }
    });
    var probsbit = parseFloat($('#base_caracteristicas').val());
    var txtebsbit = $('#base_caracteristicas_td').text();
    var bsbitfi = $('#coord_x_base_graf').text();

    if ((txtebsbit == "Estabilidad de Marshall") && (198.630256174412 <= probsbit) && (probsbit <= 1627.5568227323)) {
        $('#coord_x_base_graf').val(3);

        var grafembs = polino8(2.00519877104671, 0.00669633168035944, 0.0000229521236576602, -0.0000001321738156701, 0.000000000277723428347525, -0.00000000000030196853890371, 0.000000000000000180459495237718, -0.0000000000000000000562420739367487, 0.0000000000000000000000071462634227101, (probsbit))

        $("#prop_base_clc_grafica").val(grafembs);


    } else {
        $("#prop_base_clc_grafica").val("");
    }

    var bsbit1 = { x: 0, y: document.getElementById("prop_base_clc_grafica").value, r: "a2" + " = " + document.getElementById("a2").value };
    window.myChart3.data.datasets[6].data[0, 0, 0] = bsbit1;
    var bsbit2 = { x: document.getElementById("coord_x_base_graf").value, y: document.getElementById("prop_base_clc_grafica").value, r: document.getElementById("base_caracteristicas_td").textContent + " = " + document.getElementById("base_caracteristicas").value };
    window.myChart3.data.datasets[6].data[1, 1, 1] = bsbit2;
    var bsbit3 = { x: 6, y: document.getElementById("prop_base_clc_grafica").value, r: "Módulo resiliente" + " = " + document.getElementById("Mb").value };
    window.myChart3.data.datasets[6].data[2, 2, 2] = bsbit3;

    window.myChart3.update();
}