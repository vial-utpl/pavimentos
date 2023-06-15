$(document).ready(function() {
    console.log("Start...");

    loadGraphSubbaseGranular();




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

function loadGraphSubbaseGranular() {
    var ctx = document.getElementById("chart_subbase_Granular").getContext('2d');
    if(window.myChart4 != null){
        window.myChart4.destroy();
    }
    window.myChart4 = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{

                    data: [{
                            x: -0.5,
                            y: 32.5,
                            r: "Coeficiente estructural a3"
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
                    label: 'a3 ',
                    data: [{
                            x: 0,
                            y: 0.0170056871138513,
                            r: 0
                        }, {
                            x: 0,
                            y: 27.8315582600064,
                            r: 0.06
                        },
                        {
                            x: 0,
                            y: 37.3520310294275,
                            r: 0.08
                        },
                        {
                            x: 0,
                            y: 46.7054331718355,
                            r: 0.10
                        },
                        {
                            x: 0,
                            y: 55.9863403596636,
                            r: 0.12
                        },
                        {
                            x: 0,
                            y: 65.4714368771514,
                            r: 0.14
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
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'right',


                    }
                },
                {

                    data: [{
                            x: 1.5,
                            y: 32.5,
                            r: "CBR"
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
                    label: 'CBR',
                    data: [{
                            x: 2,
                            y: 0,
                            r: ""
                        }, {
                            x: 2,
                            y: 22.8778595721814,
                            r: 5
                        },
                        {
                            x: 2,
                            y: 36.1448563060371,
                            r: 10
                        },
                        {
                            x: 2,
                            y: 44.2686218981409,
                            r: 20
                        },
                        {
                            x: 2,
                            y: 50.5817717097285,
                            r: 30
                        },
                        {
                            x: 2,
                            y: 56.0168310209473,
                            r: 40
                        },
                        {
                            x: 2,
                            y: 58.6165403277833,
                            r: 50
                        },
                        {
                            x: 2,
                            y: 61.0645835498359,
                            r: 70
                        },
                        {
                            x: 2,
                            y: 65.1859919582732,
                            r: 100
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
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'right',


                    }
                },
                {

                    data: [{
                            x: 3.5,
                            y: 32.5,
                            r: "Valor-R"
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
                    label: 'Valor-R',
                    data: [{
                            x: 4,
                            y: 0,
                            r: ""
                        }, {
                            x: 4,
                            y: 20.8129754888359,
                            r: 25
                        },
                        {
                            x: 4,
                            y: 25.9768129661281,
                            r: 30
                        },
                        {
                            x: 4,
                            y: 33.1934720106274,
                            r: 40
                        },
                        {
                            x: 4,
                            y: 41.4148072126472,
                            r: 50
                        },
                        {
                            x: 4,
                            y: 49.299476592429,
                            r: 60
                        }, {
                            x: 4,
                            y: 55.8734749582637,
                            r: 70
                        },
                        {
                            x: 4,
                            y: 60.898772447643,
                            r: 80
                        },
                        {
                            x: 4,
                            y: 65.4963875550146,
                            r: 90
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
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'right',


                    }
                },
                {

                    data: [{
                            x: 5.5,
                            y: 32.5,
                            r: "Triaxial de Texas"
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
                    label: 'Triaxial de Texas',
                    data: [{
                            x: 6,
                            y: 0,
                            r: ""
                        },
                        {
                            x: 6,
                            y: 21.6849410627037,
                            r: 5
                        },
                        {
                            x: 6,
                            y: 38.5326989616733,
                            r: 4
                        },
                        {
                            x: 6,
                            y: 55.7608171049505,
                            r: 3
                        },
                        {
                            x: 6,
                            y: 65.3907166856806,
                            r: 2
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
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)'
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'right',
                        rotate: 90,


                    }
                }, {

                    data: [{
                            x: 7.5,
                            y: 32.5,
                            r: "Módulo resiliente x 1000 psi"
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
                            x: 8,
                            y: 0,
                            r: ""
                        }, {
                            x: 8,
                            y: 35.8682256592437,
                            r: 10
                        },
                        {
                            x: 8,
                            y: 39.1036682110672,
                            r: 11
                        },
                        {
                            x: 8,
                            y: 41.83439819052,
                            r: 12
                        },
                        {
                            x: 8,
                            y: 44.923956857073,
                            r: 13
                        },
                        {
                            x: 8,
                            y: 48.3212181357666,
                            r: 14
                        },
                        {
                            x: 8,
                            y: 51.5084756068383,
                            r: 15
                        },
                        {
                            x: 8,
                            y: 64.6136346971907,
                            r: 20
                        },

                    ],

                    showLine: true,
                    borderWidth: 1.8,
                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    pointBackgroundColor: [
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    
                    datalabels: {
                        align: 'right',
                    },

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
                        'rgba(0, 0, 0, 0)'
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
                display: false,

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
                        max: 8.1
                    }
                }],
                yAxes: [{
                    type: 'linear',
                    position: 'bottom',
                    display: false,
                    ticks: {
                        min: -5
                    }
                }],

            }
        }
    });

    var prosbs = parseFloat($('#subbase_caracteristicas').val());
    var txtesbs = $('#subbase_caracteristicas_td').text();
    var sbsgrafi = $('#coord_x_subbase_graf').text();

    if ((txtesbs == "CBR (%)")) {
        $('#coord_x_subbase_graf').val(2);
        if ((5 <= prosbs) && (prosbs <= 100)) {
            var grafcbr = polino8(22.8778595721814, 4.19610502920113, -0.410012855543755, 0.0237859235421638, -0.00076540805116565, 0.0000141485623412763, -0.000000150246627833583, 0.000000000853741438221894, -0.00000000000201383566279697, (prosbs - 5))

            $("#prop_subbase_clc_grafica").val(grafcbr);

        } else {
            $("#prop_subbase_clc_grafica").val("");
        }
    } else {
        if (txtesbs == "Valor-R") {
            $('#coord_x_subbase_graf').val(4);
            if ((25 <= prosbs) && (prosbs <= 90)) {
                var grafvalr = polino8(20.8129754888359, 1.47146699111908, -0.13140103436308, 0.0108265468006721, -0.000475377057682635, 0.0000121879753578469, -0.000000184570061234623, 0.00000000152632653044327, -0.0000000000052948615544140, (prosbs - 25))

                $("#prop_subbase_clc_grafica").val(grafvalr);



            } else {
                $("#prop_subbase_clc_grafica").val("");


            }
        } else {
            if (txtesbs == "Triaxial de Texas") {
                $('#coord_x_subbase_graf').val(6);
                if ((2 <= prosbs) && (prosbs <= 5)) {
                    var graftt = polino8(65.3907166856806, -4.39226656220853, -39.1327328681945, 113.347107857465, -151.716818153858, 103.996415734291, -38.537680581212, 7.38030679710209, -0.574231804115697, (prosbs - 2))

                    $("#prop_subbase_clc_grafica").val(graftt);

                } else {
                    $("#prop_subbase_clc_grafica").val("");

                }

            } else {

            }

        }

    }

    var ressbs1 = { x: 0, y: document.getElementById("prop_subbase_clc_grafica").value, r: "a3" + " = " + document.getElementById("a3").value };
    window.myChart4.data.datasets[10].data[0, 0, 0] = ressbs1;
    var ressbs2 = { x: document.getElementById("coord_x_subbase_graf").value, y: document.getElementById("prop_subbase_clc_grafica").value, r: document.getElementById("subbase_caracteristicas_td").textContent + " = " + document.getElementById("subbase_caracteristicas").value };
    window.myChart4.data.datasets[10].data[1, 1, 1] = ressbs2;
    var ressbs3 = { x: 8, y: document.getElementById("prop_subbase_clc_grafica").value, r: "Módulo resiliente" + " = " + document.getElementById("Msb").value };
    window.myChart4.data.datasets[10].data[2, 2, 2] = ressbs3;

    window.myChart4.update();
}