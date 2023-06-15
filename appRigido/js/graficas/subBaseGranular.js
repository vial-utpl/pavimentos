$(document).ready(function() {
    console.log("Start...");

    loadGraph1();




});

var polino8 = function(a, b, c, d, e, f, g, h, i, j) {
    return ((a) + (b * (j)) + (c * Math.pow(j, 2)) + (d * Math.pow(j, 3)) + (e * Math.pow(j, 4)) + (f * Math.pow(j, 5)) + (g * Math.pow(j, 6)) + (h * Math.pow(j, 7)) + (i * Math.pow(j, 8)));
}

function loadGraph1() {
    var ctx = document.getElementById("subBaseGranular").getContext('2d');
    if(window.myChart14 != null){
        window.myChart14.destroy();
    }
    window.myChart14 = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{

                    data: [{
                            x: -0.5,
                            y: 189,
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
                            y: 0.0424781888723373,
                            r: 0
                        }, {
                            x: 0,
                            y: 53.19352430186,
                            r: 0.02
                        },
                        {
                            x: 0,
                            y: 108.258019953321,
                            r: 0.04
                        },
                        {
                            x: 0,
                            y: 160.684897489455,
                            r: 0.06
                        },
                        {
                            x: 0,
                            y: 213.432634727042,
                            r: 0.08
                        },
                        {
                            x: 0,
                            y: 266.787495051747,
                            r: 0.10
                        },
                        {
                            x: 0,
                            y: 320.250815196139,
                            r: 0.12
                        },
                        {
                            x: 0,
                            y: 378.5962984388,
                            r: 0.14
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
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'right',


                    }
                },
                {

                    data: [{
                            x: 1.5,
                            y: 189,
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
                    borderWidth: 1,
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
                            y: 188.19863898307,
                            r: 20
                        },
                        {
                            x: 2,
                            y: 251.768543760637,
                            r: 30
                        },
                        {
                            x: 2,
                            y: 285.455092155633,
                            r: 40
                        },
                        {
                            x: 2,
                            y: 310.555918967733,
                            r: 50
                        },
                        {
                            x: 2,
                            y: 334.616108513641,
                            r: 60
                        },
                        {
                            x: 2,
                            y: 349.559238816057,
                            r: 70
                        },
                        {
                            x: 2,
                            y: 377.207280621863,
                            r: 100
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
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'right',


                    }
                },
                {

                    data: [{
                            x: 3.5,
                            y: 189,
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
                    borderWidth: 1,
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
                            y: 161.536968966946,
                            r: 50
                        },
                        {
                            x: 4,
                            y: 227.568260882356,
                            r: 60
                        },
                        {
                            x: 4,
                            y: 284.237172070053,
                            r: 70
                        },
                        {
                            x: 4,
                            y: 349.669462925295,
                            r: 80
                        },
                        {
                            x: 4,
                            y: 376.289075098891,
                            r: 85
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
                            y: 189,
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
                    borderWidth: 1,
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
                            y: 146.061248630983,
                            r: 4
                        },
                        {
                            x: 6,
                            y: 212.74954979925,
                            r: 3.5
                        },
                        {
                            x: 6,
                            y: 287.9880370131,
                            r: 2.5
                        },
                        {
                            x: 6,
                            y: 376.233877242309,
                            r: 2
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
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'right',


                    }
                },
                {

                    data: [{
                            x: 7.5,
                            y: 189,
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
                            x: 8,
                            y: 0,
                            r: ""
                        }, {
                            x: 8,
                            y: 190.159673010259,
                            r: 15
                        },
                        {
                            x: 8,
                            y: 259.634381938345,
                            r: 20
                        },
                        {
                            x: 8,
                            y: 323.142365238911,
                            r: 25
                        },
                        {
                            x: 8,
                            y: 376.343561603562,
                            r: 30
                        },
                        {
                            x: 8,
                            y: 468.562998898735,
                            r: 40
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
                    borderWidth: 1,
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

    var probs = parseFloat($('#subbase-crc').val());
    var txtebs = $('#subbase-crc-td').text();
    var bsgrafi = $('#dat-subbase-grafi').text();

    if ((txtebs == "CBR (%)")) {
        $('#dat-subbase-grafi').val(2);
        if ((20 <= probs) && (probs <= 100)) {
            var grafcbrbs = polino8(188.19863898307, 6.36750660371035, 0.309705876512453, -0.0521250507736113, 0.00272890149062732, -0.0000719201496508504, 0.00000102561222137254, -0.00000000755693095946808, 0.000000000022590098628511, (probs - 20))

            $("#dat-subbase-graf").val(grafcbrbs);

        } else {
            $("#dat-subbase-graf").val("");
        }
    } else {
        if (txtebs == "Valor-R") {
            $('#dat-subbase-grafi').val(4);
            if ((50 <= probs) && (probs <= 85)) {
                var grafvalrbs = polino8(161.536968966946, 6.93368801474571, -0.241966977715492, 0.0709704337641597, -0.00893141617416404, 0.0005285296610964, -0.0000157857028284525, 0.000000229556708752909, -0.00000000127992851733927, (probs - 50))

                $("#dat-subbase-graf").val(grafvalrbs);



            } else {
                $("#dat-subbase-graf").val("");


            }
        } else {
            if (txtebs == "Triaxial de Texas") {
                $('#dat-subbase-grafi').val(6);
                if ((2 <= probs) && (probs <= 4)) {
                    var graftt1 = polino8(376.233877242309, -115.002643451094, -605.810867905616, 1627.49790906906, -1651.70097160339, 651.246668815612, 64.7062635421752, -122.981255292892, 25.7453703582286, (probs - 2))

                    $("#dat-subbase-graf").val(graftt1);

                } else {
                    $("#dat-subbase-graf").val("");

                }

            } else {

            }

        }

    }

    var ressbs1 = { x: 0, y: document.getElementById("dat-subbase-graf").value, r: "a2" + " = " + document.getElementById("subbasea2").value };
    window.myChart14.data.datasets[10].data[0, 0, 0] = ressbs1;
    var ressbs2 = { x: document.getElementById("dat-subbase-grafi").value, y: document.getElementById("dat-subbase-graf").value, r: document.getElementById("subbase-crc-td").textContent + " = " + document.getElementById("subbase-crc").value };
    window.myChart14.data.datasets[10].data[1, 1, 1] = ressbs2;
    var ressbs3 = { x: 8, y: document.getElementById("dat-subbase-graf").value, r: "Módulo resiliente" + " = " + document.getElementById("subbaseMb").value };
    window.myChart14.data.datasets[10].data[2, 2, 2] = ressbs3;

    window.myChart14.update();
}