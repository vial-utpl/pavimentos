$(document).ready(function() {
    console.log("Start...");
    loadGraph2();
});

var polino8 = function(a, b, c, d, e, f, g, h, i, j) {
    return ((a) + (b * (j)) + (c * Math.pow(j, 2)) + (d * Math.pow(j, 3)) + (e * Math.pow(j, 4)) + (f * Math.pow(j, 5)) + (g * Math.pow(j, 6)) + (h * Math.pow(j, 7)) + (i * Math.pow(j, 8)));
}

function loadGraph2() {
    var ctx = document.getElementById("subBaseCemento").getContext('2d');
    if(window.myChart2 != null){
        window.myChart2.destroy();
    }
    window.myChart2 = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{

                    data: [{
                            x: -0.5,
                            y: 26,
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
                    borderWidth: 1,
                    datalabels: {
                        align: 'right',
                        rotation: -90,
                        color: 'rgba(0, 0, 0, 1)',
                    },

                }, {
                    label: 'a2 ',
                    data: [{
                            x: 0,
                            y: 0.0581606772029772,
                            r: 0
                        }, {
                            x: 0,
                            y: 18.4100898769068,
                            r: 0.1
                        },
                        {
                            x: 0,
                            y: 22.1493249342428,
                            r: 0.12
                        },
                        {
                            x: 0,
                            y: 25.8606931394808,
                            r: 0.14
                        },
                        {
                            x: 0,
                            y: 29.5154766574804,
                            r: 0.16
                        },
                        {
                            x: 0,
                            y: 33.156393492979,
                            r: 0.18
                        },
                        {
                            x: 0,
                            y: 36.8587273168597,
                            r: 0.20
                        },
                        {
                            x: 0,
                            y: 40.6450806242559,
                            r: 0.22
                        },
                        {
                            x: 0,
                            y: 44.426418860662,
                            r: 0.24
                        },
                        {
                            x: 0,
                            y: 48.0897062718279,
                            r: 0.26
                        },
                        {
                            x: 0,
                            y: 51.9000673528039,
                            r: 0.28
                        },

                    ],
                    showLine: true,
                    pointRadius: 2,

                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    pointBackgroundColor: [
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'right',


                    }
                },
                {

                    data: [{
                            x: 2.5,
                            y: 26,
                            r: "Resistencia a la compresión no confinada"
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
                    borderWidth: 1,
                    datalabels: {
                        align: 'right',
                        rotation: -90,
                        color: 'rgba(0, 0, 0, 1)',
                    },

                },
                {
                    label: 'Resistencia a la compresión no confinada',
                    data: [{
                            x: 3,
                            y: 0,
                            r: ""
                        }, {
                            x: 3,
                            y: 23.1986445114016,
                            r: 200
                        },
                        {
                            x: 3,
                            y: 28.611460801078,
                            r: 400
                        },
                        {
                            x: 3,
                            y: 34.6853210117279,
                            r: 600
                        },
                        {
                            x: 3,
                            y: 40.76003239931,
                            r: 800
                        },
                        {
                            x: 3,
                            y: 46.2622064160088,
                            r: 1000
                        },
                    ],
                    showLine: true,
                    pointRadius: 2,
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
                            x: 5.5,
                            y: 26,
                            r: "Módulo resiliente x 10000"
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
                    borderWidth: 1,
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
                            y: 22.1160292315198,
                            r: 5
                        },
                        {
                            x: 6,
                            y: 28.5525300280278,
                            r: 6
                        },
                        {
                            x: 6,
                            y: 35.0706654067598,
                            r: 7
                        },
                        {
                            x: 6,
                            y: 40.145750768017,
                            r: 8
                        },
                        {
                            x: 6,
                            y: 44.5667337416307,
                            r: 9
                        },
                        {
                            x: 6,
                            y: 49.1138017916674,
                            r: 10
                        },

                    ],
                    showLine: true,
                    pointRadius:2,

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
                    pointRadius: 2.5,
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
            
            maintainAspectRatio: true,
            responsiveAnimationDuration: 0,
            tooltips: {
                callbacks: {
                    label: function(item, data) {
                        var datasetLabel = data.datasets[item.datasetIndex].label || '';
                        var dataPoint = data.datasets[item.datasetIndex].data[item.index];
                        return datasetLabel + " " + '=  ' + dataPoint.r + '';
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
                        size: 10,
                        
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
                        min: -5
                    }
                }],

            }
        }
    });
    var probscem = parseFloat($('#subbase-crc').val());
    var txtebscem = $('#subbase-crc-td').text();
    var bscemfi = $('#dat-subbase-grafi').text();

    if ((txtebscem == "Resistencia a la compresión no confinada") && (200 <= probscem) && (probscem <= 1000)) {
        $('#dat-subbase-grafi').val(3);

        var grafrcbs = polino8(23.1986445114016, 0.030158423629473, -0.0000711909358415141, 0.000000505361224867329, -0.00000000155404795976199, 0.00000000000245589193512835, -0.00000000000000185051637387738, 0.000000000000000000347634439749139, 0.000000000000000000000177282023894864, (probscem - 200))

        $("#dat-subbase-graf").val(grafrcbs);

    } else {
        $("#dat-subbase-graf").val("");
    }

    var bscem1 = { x: 0, y: document.getElementById("dat-subbase-graf").value, r: "a2" + " = " + document.getElementById("subbasea2").value };
    window.myChart2.data.datasets[6].data[0, 0, 0] = bscem1;
    var bscem2 = { x: document.getElementById("dat-subbase-grafi").value, y: document.getElementById("dat-subbase-graf").value, r: document.getElementById("subbase-crc-td").textContent + " = " + document.getElementById("subbase-crc").value };
    window.myChart2.data.datasets[6].data[1, 1, 1] = bscem2;
    var bscem3 = { x: 6, y: document.getElementById("dat-subbase-graf").value, r: "Módulo resiliente" + " = " + document.getElementById("subbaseMb").value };
    window.myChart2.data.datasets[6].data[2, 2, 2] = bscem3;

    window.myChart2.update();
}