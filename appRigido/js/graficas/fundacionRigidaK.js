$(document).ready(function() {
    console.log("Start...");

    loadGraph9();





});

var polino8 = function(a, b, c, d, e, f, g, h, i, j) {
    return ((a) + (b * (j)) + (c * Math.pow(j, 2)) + (d * Math.pow(j, 3)) + (e * Math.pow(j, 4)) + (f * Math.pow(j, 5)) + (g * Math.pow(j, 6)) + (h * Math.pow(j, 7)) + (i * Math.pow(j, 8)));
}

function loadGraph9() {
    var ctx = document.getElementById("KfundacionRigida").getContext('2d');
    if(window.myChart9 != null){
        window.myChart9.destroy();
    }
    window.myChart9 = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                    data: [{
                        x: 26,
                        y: -5,
                        r: "Módulo resiliente de subrasante Mr(psi)"
                    }],
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
                        align: 'center',
                        rotation: 0,
                        color: 'rgba(0, 0, 0, 1)',
                        font: {
                            size: 10,
                        },
                    },

                },
                {
                    label: 'Módulo resiliente de subrasante ',
                    data: [{
                            x: 0,
                            y: 0,
                            r: 20000
                        }, {
                            x: 12.8439805,
                            y: 0,
                            r: 15000
                        },
                        {
                            x: 25.687961,
                            y: 0,
                            r: 10000
                        },
                        {
                            x: 38.5319415,
                            y: 0,
                            r: 5000
                        },
                        {
                            x: 51.375922,
                            y: 0,
                            r: 0
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
                        align: 'bottom',
                        font: {
                            size: 11,
                        },
                    }
                },
                {
                    data: [{
                        x: 77,
                        y: -5,
                        r: "Módulo de reacción de subrasante K(pci)"
                    }],
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
                        align: 'center',
                        rotation: 0,
                        color: 'rgba(0, 0, 0, 1)',
                        font: {
                            size: 10,
                        },
                    },

                },
                {
                    data: [{
                        x: 77,
                        y: -6.5,
                        r: "(modificado por la presencia de una fundación rígida cerca de la superficie)"
                    }],
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
                        align: 'center',
                        rotation: 0,
                        color: 'rgba(0, 0, 0, 1)',
                        font: {
                            size: 10,
                        },
                    },

                },
                {
                    label: 'Módulo efectivo de subrasante corregido ',
                    data: [{
                            x: 51.375922,
                            y: 0,
                            r: 0
                        }, {
                            x: 64.13629225,
                            y: 0,
                            r: 500
                        },
                        {
                            x: 76.8966625,
                            y: 0,
                            r: 1000
                        },
                        {
                            x: 89.65703275,
                            y: 0,
                            r: 1500
                        },
                        {
                            x: 102.417403,
                            y: 0,
                            r: 2000
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
                        align: 'bottom',
                        font: {
                            size: 11,
                        },
                    }
                },

                {
                    label: 'Módulo elástico del hormigón 10plg ',
                    data: [{
                            x: 0,
                            y: -0.0938097257167101,
                            r: ""
                        },
                        {
                            x: 5,
                            y: 0.35710934740354700,
                            r: ""
                        },
                        {
                            x: 10,
                            y: 1.00114962532101,
                            r: ""
                        },
                        {
                            x: 15,
                            y: 1.72395440408485,
                            r: ""
                        },
                        {
                            x: 20,
                            y: 2.69784236636797,
                            r: ""
                        },
                        {
                            x: 25,
                            y: 4.05897962035253,
                            r: ""
                        },

                        {
                            x: 30,
                            y: 5.63959129756385,
                            r: ""
                        },
                        {
                            x: 35,
                            y: 7.68013730892625,
                            r: ""
                        },

                        {
                            x: 40,
                            y: 11.032513794049,
                            r: "10 pies"
                        },
                        {
                            x: 45,
                            y: 17.5020906838063,
                            r: ""
                        },

                        {
                            x: 48.4587,
                            y: 28.2828671671359,
                            r: ""
                        },

                    ],
                    showLine: true,
                    pointRadius: 0,
                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],

                    borderWidth: 1.8,
                    datalabels: {
                        align: 'bottom',
                        padding: 20,
                        font: {
                            size: 11,
                        },
                    }
                },
                {
                    label: 'Módulo elástico del hormigón 5plg ',
                    data: [{
                            x: 0,
                            y: 2.02378632314503,
                            r: ""
                        },
                        {
                            x: 5,
                            y: 2.85592818746071,
                            r: ""
                        },
                        {
                            x: 10,
                            y: 3.91287748475681,
                            r: ""
                        },
                        {
                            x: 15,
                            y: 4.96194484090547,
                            r: ""
                        },
                        {
                            x: 20,
                            y: 6.2207979677795,
                            r: ""
                        },
                        {
                            x: 25,
                            y: 8.06648888308862,
                            r: ""
                        },

                        {
                            x: 30,
                            y: 10.1325314128798,
                            r: ""
                        },
                        {
                            x: 35,
                            y: 12.8793899174166,
                            r: ""
                        },

                        {
                            x: 40,
                            y: 17.6504167892854,
                            r: "5 pies"
                        },
                        {
                            x: 45,
                            y: 26.4401918081658,
                            r: ""
                        },

                        {
                            x: 48.4132,
                            y: 42.9119439615788,
                            r: ""
                        },

                    ],
                    showLine: true,
                    pointRadius: 0,
                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],

                    borderWidth: 1.8,
                    datalabels: {
                        align: 'bottom',
                        padding: 10,
                        font: {
                            size: 11,
                        },
                    }
                },
                {
                    data: [{
                        x: 20,
                        y: 45,
                        r: "Profundidad de subrasante a la cimentación rígida Dsg(pies)"
                    }],
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
                        align: 'center',
                        rotation: 0,
                        color: 'rgba(0, 0, 0, 1)',
                        font: {
                            size: 10,
                        },
                    },

                },
                {
                    data: [{
                        x: 80,
                        y: 75,
                        r: "Módulo de reacción de subrasante k (pci)"
                    }],
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
                        align: 'center',
                        rotation: 0,
                        color: 'rgba(0, 0, 0, 1)',
                        font: {
                            size: 10,
                        },
                    },

                },
                {
                    label: 'Módulo elástico del hormigón 2plg ',
                    data: [{
                            x: 0,
                            y: 6.54811454378068,
                            r: ""
                        },
                        {
                            x: 5,
                            y: 7.36025377738051,
                            r: ""
                        },
                        {
                            x: 10,
                            y: 8.4641708989569,
                            r: ""
                        },
                        {
                            x: 15,
                            y: 10.0712450133084,
                            r: ""
                        },
                        {
                            x: 20,
                            y: 12.2007483480114,
                            r: ""
                        },
                        {
                            x: 25,
                            y: 14.4683296512785,
                            r: ""
                        },

                        {
                            x: 30,
                            y: 17.5707861974204,
                            r: ""
                        },
                        {
                            x: 35,
                            y: 22.0764929175093,
                            r: ""
                        },

                        {
                            x: 40,
                            y: 29.0340073147818,
                            r: "2 pies"
                        },
                        {
                            x: 45,
                            y: 46.0091705860832,
                            r: ""
                        },

                        {
                            x: 48.3228,
                            y: 71.7905669170796,
                            r: ""
                        },

                    ],
                    showLine: true,
                    pointRadius: 0,
                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],

                    borderWidth: 1.8,
                    datalabels: {
                        align: 'bottom',
                        padding: 20,
                        font: {
                            size: 11,
                        },
                    }
                },

                {
                    label: 'Módulo efectivo de  reacción subrasante 1400pci',
                    data: [{
                            x: 92.349629,
                            y: 0,
                            r: ""
                        },
                        {
                            x: 102.417403,
                            y: 3.838149,
                            r: "1400 "
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'right',
                        padding: -2,
                        font: {
                            size: 11,
                        },

                    }
                },
                {
                    label: 'Módulo efectivo de  reacción subrasante 1200pci',
                    data: [{
                            x: 85.065861,
                            y: 0,
                            r: ""
                        },
                        {
                            x: 102.417403,
                            y: 8.459568,
                            r: "1200 "
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'right',
                        padding: -2,
                        font: {
                            size: 11,
                        },

                    }
                },
                {
                    label: 'Módulo efectivo de  reacción subrasante 1000pci',
                    data: [{
                            x: 77.547541,
                            y: 0,
                            r: ""
                        },
                        {
                            x: 102.417403,
                            y: 14.831737,
                            r: "1000 "
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'right',
                        padding: -2,
                        font: {
                            size: 11,
                        },

                    }
                },
                {
                    label: 'Módulo efectivo de  reacción subrasante 800pci',
                    data: [{
                            x: 70.688419,
                            y: 0,
                            r: ""
                        },
                        {
                            x: 102.417403,
                            y: 26.162659,
                            r: "800 "
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'right',
                        padding: -2,
                        font: {
                            size: 11,
                        },

                    }
                },
                {
                    label: 'Módulo efectivo de  reacción subrasante 700pci',
                    data: [{
                            x: 67.339346,
                            y: 0,
                            r: ""
                        },
                        {
                            x: 102.417403,
                            y: 34.429775,
                            r: "700 "
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'right',
                        padding: -2,
                        font: {
                            size: 11,
                        },

                    }
                },
                {
                    label: 'Módulo efectivo de  reacción subrasante 600pci',
                    data: [{
                            x: 64.29326,
                            y: 0,
                            r: ""
                        },
                        {
                            x: 102.417403,
                            y: 46.241574,
                            r: "600 "
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'right',
                        padding: -2,
                        font: {
                            size: 11,
                        },

                    }
                },
                {
                    label: 'Módulo efectivo de  reacción subrasante 500pci',
                    data: [{
                            x: 61.641615,
                            y: 0,
                            r: ""
                        },
                        {
                            x: 102.417403,
                            y: 63.520892,
                            r: "500 "
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'top',
                        padding: -2,
                        font: {
                            size: 11,
                        },

                    }
                },
                {
                    label: 'Módulo efectivo de  reacción subrasante 400pci',
                    data: [{
                            x: 58.795951,
                            y: 0,
                            r: ""
                        },
                        {
                            x: 92.852924,
                            y: 71.894985,
                            r: "400 "
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'top',
                        padding: -2,
                        font: {
                            size: 11,
                        },

                    }
                },
                {
                    label: 'Módulo efectivo de  reacción subrasante 300pci',
                    data: [{
                            x: 56.314741,
                            y: 0,
                            r: ""
                        },
                        {
                            x: 79.755968,
                            y: 71.894985,
                            r: "300 "
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'top',
                        padding: -2,
                        font: {
                            size: 11,
                        },

                    }
                },
                {
                    label: 'Módulo efectivo de  reacción subrasante 200pci',
                    data: [{
                            x: 54.063187,
                            y: 0,
                            r: ""
                        },
                        {
                            x: 67.136437,
                            y: 71.894985,
                            r: "200 "
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'top',
                        padding: -2,
                        font: {
                            size: 11,
                        },

                    }
                },
                {
                    label: 'Módulo efectivo de  reacción subrasante 100pci',
                    data: [{
                            x: 52.392799,
                            y: 0,
                            r: ""
                        },
                        {
                            x: 57.139227,
                            y: 71.894985,
                            r: "100 "
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'top',
                        padding: -2,
                        font: {
                            size: 11,
                        },

                    }
                },
                {
                    label: 'Módulo efectivo de  reacción subrasante 50pci',
                    data: [{
                            x: 51.826064,
                            y: 0,
                            r: ""
                        },
                        {
                            x: 53.230979,
                            y: 71.894985,
                            r: "50 "
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'top',
                        padding: -2,
                        font: {
                            size: 11,
                        },

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
                        {
                            x: "",
                            y: "",
                            r: ""
                        },
                    ],
                    pointRadius: 2.5,
                    tension: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(150, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'top',
                        padding: -2,
                        font: {
                            size: 11,
                        },
                        display: false
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
                    top: 10,

                }
            },
            plugins: {
                datalabels: {
                    color: 'rgba(0, 0, 0, 1)',
                    font: {
                        size: 10,
                        
                    },


                }
            },


            scales: {
                scaleLabel: {
                    display: false,
                },
                xAxes: [{

                    gridLines: {
                        display: true,
                        tickMarkLength: 0,
                    },


                    type: 'linear',
                    position: 'bottom',
                    ticks: {
                        min: -5,
                        max: 112.6591433,
                        stepSize: 5.12087015,
                        display: true,
                        fontColor: 'rgba(255, 255, 255, 1)',
                    }
                }],
                yAxes: [{

                    gridLines: {
                        display: true,
                        tickMarkLength: 0,
                    },

                    type: 'linear',
                    position: 'bottom',
                    ticks: {
                        min: -10,
                        max: 76.81305225,
                        stepSize: 5.12087015,
                        display: false

                    }
                }],

            }
        }
    });
    var kfrsub = (parseFloat($('#kfrsubrasante').val()));
    var kfrsubr = kfrsub.toFixed(2);
    var r1 = { x: document.getElementById("mrx").value, y: 0, r: "Mr" + " = " + document.getElementById("Modulor").value };
    window.myChart9.data.datasets[22].data[0, 0, 0] = r1;
    var r2 = { x: document.getElementById("mrx").value, y: document.getElementById("profunrigiday").value, r: "Dsg" + " = " + document.getElementById("profrigida").value };
    window.myChart9.data.datasets[22].data[1, 1, 1] = r2;
    var r3 = { x: document.getElementById("kfrx").value, y: document.getElementById("profunrigiday").value, r: "K" + " = " + document.getElementById("kredondeado").value };
    window.myChart9.data.datasets[22].data[2, 2, 2] = r3;
    var r3 = { x: document.getElementById("kfrx").value, y: 0, r: "K" + " = " + kfrsubr };
    window.myChart9.data.datasets[22].data[3, 3, 3] = r3;
    window.myChart9.update();
}