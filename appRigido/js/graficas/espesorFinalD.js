$(document).ready(function() {
    console.log("Start...");

    loadGraph7();




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

function loadGraph7() {
    var ctx = document.getElementById("espesorFinalD").getContext('2d');
    var ctxamplio = document.getElementById("espesorFinalDamplio").getContext('2d');
    if(window.myChart7 != null){
        window.myChart7.destroy();
    }
    if(window.myChart8 != null){
        window.myChart8.destroy();
    }
    window.myChart7 = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                    data: [{
                        x: 31.85,
                        y: -10,
                        r: "Módulo de reacción efectiva de subrasante K(pci)"
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
                            size: 7,
                        },
                    },

                },
                {
                    label: 'Módulo efectivo de reacción ',
                    data: [{
                            x: 0,
                            y: 0,
                            r: 800
                        }, {
                            x: 6.83238792975686,
                            y: 0,
                            r: 500
                        },
                        {
                            x: 30.2285991127529,
                            y: 0,
                            r: 100
                        },
                        {
                            x: 40.3047988170039,
                            y: 0,
                            r: 50
                        },
                        {
                            x: 63.70101,
                            y: 0,
                            r: 10
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
                            size: 7,
                        },
                    }
                },
                {
                    data: [{
                        x: 203,
                        y: 28,
                        r: "Índice de serviciabilidad Δpsi"
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
                        rotation: -90,
                        color: 'rgba(0, 0, 0, 1)',
                        font: {
                            size: 7,
                        },
                    },

                },
                {
                    label: 'ΔPSI ',
                    data: [{
                            x: 207.08684,
                            y: 23.86479,
                            r: 3
                        }, {
                            x: 207.08684,
                            y: 26.1538029685223,
                            r: 2
                        },
                        {
                            x: 207.08684,
                            y: 30.0668964842612,
                            r: 1
                        },
                        {
                            x: 207.08684,
                            y: 33.97999,
                            r: 0.5
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
                        font: {
                            size: 7,
                        },
                    }
                },
                {
                    data: [{
                        x: 283,
                        y: -83,
                        r: "Desviación estándar So"
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
                        rotation: 18,
                        color: 'rgba(0, 0, 0, 1)',
                        font: {
                            size: 7,
                        },
                    },

                },
                {
                    label: 'Desviación estandar ',
                    data: [{
                            x: 271.55756,
                            y: -68.38794,
                            r: 0.2
                        }, {
                            x: 282.590357720909,
                            y: -72.379866527313,
                            r: 0.3
                        },
                        {
                            x: 290.418252279091,
                            y: -75.212183472687,
                            r: 0.4
                        },
                        {
                            x: 296.490039012755,
                            y: -77.4090991728966,
                            r: 0.5
                        },
                        {
                            x: 301.45105,
                            y: -79.20411,
                            r: 0.6
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
                            size: 7,
                        },
                    }
                },
                {
                    label: 'Módulo elástico del hormigón 3x10^6 ',
                    data: [{
                            x: 4.29810000,
                            y: 0.0251529081868232,
                            r: ""
                        },
                        {
                            x: 10,
                            y: 11.3626468838951,
                            r: ""
                        },

                        {
                            x: 20,
                            y: 27.6853561068056,
                            r: ""
                        },

                        {
                            x: 30,
                            y: 40.2120313018772,
                            r: ""
                        },
                        {
                            x: 31.85,
                            y: 42.2044013703086,
                            r: 3
                        },

                        {
                            x: 40,
                            y: 50.1518314898567,
                            r: ""
                        },

                        {
                            x: 50,
                            y: 58.5098225561395,
                            r: ""
                        },

                        {
                            x: 60,
                            y: 65.2601886858886,
                            r: ""
                        },
                        {
                            x: 63.70101,
                            y: 67.2542680393838,
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
                    pointBackgroundColor: [
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        font: {
                            size: 7,
                        },
                        align: 'bottom',
                        padding: 0,
                        display: true,
                        color: 'rgba(0, 0, 0, 1)',
                    }
                },
                {
                    label: 'Módulo elástico del hormigón 4x10^6 ',
                    data: [{
                            x: 0,
                            y: -0.0215573124587536,
                            r: ""
                        },
                        {
                            x: 10,
                            y: 18.8745824141635,
                            r: ""
                        },

                        {
                            x: 20,
                            y: 33.3689534741004,
                            r: ""
                        },
                        {
                            x: 22,
                            y: 35.8700206825064,
                            r: 4
                        },
                        {
                            x: 30,
                            y: 44.6862722961824,
                            r: ""
                        },

                        {
                            x: 40,
                            y: 53.7062945531993,
                            r: ""
                        },

                        {
                            x: 50,
                            y: 61.3940631456378,
                            r: ""
                        },

                        {
                            x: 60,
                            y: 67.5322936117909,
                            r: ""
                        },
                        {
                            x: 63.70101,
                            y: 69.4998669053844,
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
                    pointBackgroundColor: [
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        font: {
                            size: 7,
                        },
                        align: 'bottom',
                        padding: 0,
                        display: true,
                        color: 'rgba(0, 0, 0, 1)',
                    }
                },
                {
                    label: 'Módulo elástico del hormigón 5x10^6 ',
                    data: [{
                            x: 0,
                            y: 6.62043310003355,
                            r: 5
                        },
                        {
                            x: 10,
                            y: 23.7352340446685,
                            r: ""
                        },

                        {
                            x: 20,
                            y: 37.1622635508811,
                            r: ""
                        },

                        {
                            x: 30,
                            y: 47.7321998170947,
                            r: ""
                        },

                        {
                            x: 40,
                            y: 56.3685792658578,
                            r: ""
                        },

                        {
                            x: 50,
                            y: 63.5340841707731,
                            r: ""
                        },

                        {
                            x: 60,
                            y: 69.3676980810261,
                            r: ""
                        },
                        {
                            x: 63.70101,
                            y: 71.1620677536397,
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
                    pointBackgroundColor: [
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        font: {
                            size: 7,
                        },
                        align: 'left',
                        padding: 0,
                        display: true,
                        color: 'rgba(0, 0, 0, 1)',
                    }
                },

                {
                    label: 'Módulo elástico del hormigón 6x10^6 ',
                    data: [{
                            x: 0,
                            y: 11.8628967390395,
                            r: 6
                        },
                        {
                            x: 10,
                            y: 27.4898784485757,
                            r: ""
                        },

                        {
                            x: 20,
                            y: 40.2158838263103,
                            r: ""
                        },

                        {
                            x: 30,
                            y: 50.191370387248,
                            r: ""
                        },

                        {
                            x: 40,
                            y: 58.1072328128289,
                            r: ""
                        },

                        {
                            x: 50,
                            y: 64.8131475867055,
                            r: ""
                        },

                        {
                            x: 60,
                            y: 70.6078927527568,
                            r: ""
                        },
                        {
                            x: 63.70101,
                            y: 72.5292013182695,
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
                    pointBackgroundColor: [
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        font: {
                            size: 7,
                        },
                        align: 'left',
                        padding: 0,
                        display: true,
                        color: 'rgba(0, 0, 0, 1)',
                    }
                },

                {
                    label: 'Módulo elástico del hormigón 7x10^6 ',
                    data: [{
                            x: 0,
                            y: 16.0135546084493,
                            r: 7
                        },
                        {
                            x: 10,
                            y: 30.5977476051227,
                            r: ""
                        },

                        {
                            x: 20,
                            y: 42.6680832858983,
                            r: ""
                        },
                        {
                            x: 30,
                            y: 52.2992317848758,
                            r: ""
                        },

                        {
                            x: 40,
                            y: 59.9558779534468,
                            r: ""
                        },

                        {
                            x: 50,
                            y: 66.3809193999338,
                            r: ""
                        },

                        {
                            x: 60,
                            y: 71.7407567258683,
                            r: ""
                        },
                        {
                            x: 63.70101,
                            y: 73.1397970805046,
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
                    pointBackgroundColor: [
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        font: {
                            size: 7,
                        },
                        align: 'left',
                        padding: 0,
                        display: true,
                        color: 'rgba(0, 0, 0, 1)',
                    }
                },
                {
                    data: [{
                        x: 85,
                        y: 29,
                        r: "Módulo de rotura del hormigón Sc(psi)"
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
                        rotation: -90,
                        color: 'rgba(0, 0, 0, 1)',
                        font: {
                            size: 7,
                        },
                    },

                },
                {
                    label: 'Módulo de rotura media del hormigón',
                    data: [{
                            x: 90.75304,
                            y: -2.47433,
                            r: 500
                        }, {
                            x: 90.75304,
                            y: 14.6049888028488,
                            r: 650
                        },
                        {
                            x: 90.75304,
                            y: 19.4292497776237,
                            r: 700
                        },
                        {
                            x: 90.75304,
                            y: 28.1218407044082,
                            r: 800
                        },
                        {
                            x: 90.75304,
                            y: 35.7892492961447,
                            r: 900
                        },
                        {
                            x: 90.75304,
                            y: 42.6479799994472,
                            r: 1000
                        },
                        {
                            x: 90.75304,
                            y: 48.8524566241081,
                            r: 1100
                        },
                        {
                            x: 90.75304,
                            y: 54.5167,
                            r: 1200
                        },

                    ],
                    pointBackgroundColor: [
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],

                    showLine: true,
                    pointRadius: 2,
                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],

                    borderWidth: 1.8,
                    datalabels: {
                        align: 'right',
                        font: {
                            size: 7,
                        },
                    }
                },
                {
                    data: [{
                        x: 181,
                        y: 29,
                        r: "Línea de paso"
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
                        rotation: -90,
                        color: 'rgba(0, 0, 0, 1)',
                        font: {
                            size: 7,
                        },
                    },

                },
                {
                    label: 'Linea de paso',
                    data: [{
                            x: 185.05559,
                            y: -20.39362,
                            r: 100
                        }, {
                            x: 185.05559,
                            y: -10.478007,
                            r: 90
                        },
                        {
                            x: 185.05559,
                            y: -0.562394,
                            r: 80
                        },
                        {
                            x: 185.05559,
                            y: 9.353219,
                            r: 70
                        },
                        {
                            x: 185.05559,
                            y: 19.268832,
                            r: 60
                        },
                        {
                            x: 185.05559,
                            y: 29.184445,
                            r: 50
                        },
                        {
                            x: 185.05559,
                            y: 39.100058,
                            r: 40
                        },
                        {
                            x: 185.05559,
                            y: 49.015671,
                            r: 30
                        },
                        {
                            x: 185.05559,
                            y: 58.931284,
                            r: 20
                        },
                        {
                            x: 185.05559,
                            y: 68.846897,
                            r: 10
                        },
                        {
                            x: 185.05559,
                            y: 78.76251,
                            r: 0
                        },

                    ],
                    pointBackgroundColor: [
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],

                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    pointRadius: 2,
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'right',
                        font: {
                            size: 7,
                        },
                    }
                },
                {
                    label: 'TL',
                    data: [{
                            x: 103.91735,
                            y: -13.10973,
                            r: ""
                        },
                        {
                            x: 103.91735,
                            y: 58.85345,
                            r: "TL"
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
                        align: 'top'
                    }
                },
                {
                    data: [{
                        x: 273,
                        y: -9,
                        r: "Número de ejes equivalentes SN"
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
                            size: 7,
                        },
                    },

                },
                {
                    label: 'Número de ejes equivalentes',
                    data: [{
                            x: 226.76063,
                            y: -13.2006,
                            r: 1000
                        }, {
                            x: 233.274327751447,
                            y: -13.2006,
                            r: 500
                        },
                        {
                            x: 248.398665562138,
                            y: -13.2006,
                            r: 100
                        },
                        {
                            x: 254.912363313586,
                            y: -13.2006,
                            r: 50
                        },
                        {
                            x: 270.036701124276,
                            y: -13.2006,
                            r: 10
                        },
                        {
                            x: 276.550398875724,
                            y: -13.2006,
                            r: 5
                        },
                        {
                            x: 291.674736686414,
                            y: -13.2006,
                            r: 1
                        },
                        {
                            x: 298.188434437862,
                            y: -13.2006,
                            r: 0.5
                        },
                        {
                            x: 313.312772248553,
                            y: -13.2006,
                            r: 0.1
                        },
                        {
                            x: 319.82647,
                            y: -13.2006,
                            r: 0.05
                        },
                    ],
                    showLine: true,
                    pointRadius: 2,
                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    pointBackgroundColor: [
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'bottom',
                        font: {
                            size: 7,
                        },
                    }
                },
                {
                    label: 'TL2',
                    data: [{
                            x: 144.3721,
                            y: -3.73147,
                            r: ""
                        },
                        {
                            x: 144.3721,
                            y: 63.54641,
                            r: "TL"
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
                        align: 'top'
                    }
                },
                {
                    label: 'TL3',
                    data: [{
                            x: 227.36174,
                            y: -52.00229,
                            r: "TL"
                        },
                        {
                            x: 337.89041,
                            y: -52.00229,
                            r: ""
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
                        align: 'left'
                    }
                },
                {
                    data: [{
                        x: 125,
                        y: 35,
                        r: "Coeficiente de transferencia de carga J"
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
                        rotation: -90,
                        color: 'rgba(0, 0, 0, 1)',
                        font: {
                            size: 7,
                        },
                    },

                },
                {
                    label: 'Coeficiente de transferencia de carga',
                    data: [{
                            x: 128.97991,
                            y: 22.23003,
                            r: 2.2
                        }, {
                            x: 128.97991,
                            y: 26.8403679434522,
                            r: 2.5
                        },
                        {
                            x: 128.97991,
                            y: 33.4158339682331,
                            r: 3
                        },
                        {
                            x: 128.97991,
                            y: 38.9753112770327,
                            r: 3.5
                        },
                        {
                            x: 128.97991,
                            y: 43.7911495733046,
                            r: 4
                        },
                        {
                            x: 128.97991,
                            y: 48.03902,
                            r: 4.5
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
                        font: {
                            size: 7,
                        },
                    }
                },
                {
                    data: [{
                        x: 298,
                        y: -105,
                        r: "Confiabilidad R(%)"
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
                            size: 7,
                        },
                    },

                },
                {
                    label: 'Confiabilidad',
                    data: [{
                            x: 251.85886,
                            y: -92.86475,
                            r: "100 %"
                        }, {
                            x: 273.188098845126,
                            y: -92.86475,
                            r: "99 %"
                        },
                        {
                            x: 292.216832716917,
                            y: -92.86475,
                            r: "95 %"
                        },
                        {
                            x: 302.360980332411,
                            y: -92.86475,
                            r: "90 %"
                        },
                        {
                            x: 314.644748309869,
                            y: -92.86475,
                            r: "80 %"
                        },
                        {
                            x: 323.502209252109,
                            y: -92.86475,
                            r: "70 %"
                        },
                        {
                            x: 331.070583039299,
                            y: -92.86475,
                            r: "60 %"
                        },
                        {
                            x: 338.14456,
                            y: -92.86475,
                            r: "50 %"
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
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'bottom',
                        font: {
                            size: 7,
                        },


                    }
                },

                {
                    label: 'esp5',
                    data: [{
                            x: 273.44797,
                            y: -1.2339,
                            r: ""
                        },
                        {
                            x: 338.57239,
                            y: 62.28613,
                            r: "5 "
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
                            size: 7,
                        },
                        color: 'rgba(0, 0, 0, 1)',

                    }
                },
                {
                    label: 'esp6',
                    data: [{
                            x: 262.9717,
                            y: -1.2339,
                            r: ""
                        },
                        {
                            x: 338.2677,
                            y: 71.88777,
                            r: "6 "
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
                            size: 7,
                        },
                        color: 'rgba(0, 0, 0, 1)',
                    }
                },
                {
                    label: 'esp7',
                    data: [{
                            x: 253.11794,
                            y: -1.2339,
                            r: ""
                        },
                        {
                            x: 338.26769,
                            y: 81.46471,
                            r: "7 "
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
                            size: 7,
                        },
                        color: 'rgba(0, 0, 0, 1)',
                    }
                },
                {
                    label: 'esp8',
                    data: [{
                            x: 243.7826,
                            y: -1.2339,
                            r: ""
                        },
                        {
                            x: 338.2677,
                            y: 90.29507,
                            r: "8 "
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
                            size: 7,
                        },
                        color: 'rgba(0, 0, 0, 1)',
                    }
                },
                {
                    label: 'esp9',
                    data: [{
                            x: 235.48883,
                            y: -1.2339,
                            r: ""
                        },
                        {
                            x: 338.26769,
                            y: 98.78192,
                            r: "9 "
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
                            size: 7,
                        },
                        color: 'rgba(0, 0, 0, 1)',
                    }
                },
                {
                    label: 'esp10',
                    data: [{
                            x: 226.6943,
                            y: -1.2339,
                            r: ""
                        },
                        {
                            x: 338.2677,
                            y: 106.42979,
                            r: "10 "
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
                            size: 7,
                        },
                        color: 'rgba(0, 0, 0, 1)',
                    }
                },
                {
                    label: 'esp11',
                    data: [{
                            x: 226.76943,
                            y: 5.7419,
                            r: ""
                        },
                        {
                            x: 331.78969,
                            y: 107.62404,
                            r: "11 "
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
                            size: 7,
                        },
                        color: 'rgba(0, 0, 0, 1)',
                    }
                },
                {
                    label: 'esp12',
                    data: [{
                            x: 226.76943,
                            y: 12.4477,
                            r: ""
                        },
                        {
                            x: 325.23084,
                            y: 107.62404,
                            r: "12 "
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
                            size: 7,
                        },
                        color: 'rgba(0, 0, 0, 1)',
                    }
                },
                {
                    label: 'esp13',
                    data: [{
                            x: 226.76943,
                            y: 18.76776,
                            r: ""
                        },
                        {
                            x: 318.86712,
                            y: 107.62404,
                            r: "13 "
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
                            size: 7,
                        },
                        color: 'rgba(0, 0, 0, 1)',
                    }
                },
                {
                    label: 'esp14',
                    data: [{
                            x: 226.76943,
                            y: 24.50944,
                            r: ""
                        },
                        {
                            x: 312.56852,
                            y: 107.62404,
                            r: "14 "
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
                            size: 7,
                        },
                        color: 'rgba(0, 0, 0, 1)',
                    }
                },
                {
                    data: [{
                        x: 164,
                        y: 26,
                        r: "Coeficiente de drenaje Cd"
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
                        rotation: -90,
                        color: 'rgba(0, 0, 0, 1)',
                        font: {
                            size: 7,
                        },
                    },

                },
                {
                    label: 'coeficiente de drenaje',
                    data: [{
                            x: 167.97391,
                            y: 15.09582,
                            r: 0.6
                        },
                        {
                            x: 167.97391,
                            y: 19.2885281011685,
                            r: 0.7
                        },
                        {
                            x: 167.97391,
                            y: 26.1239701541951,
                            r: 0.9
                        },
                        {
                            x: 167.97391,
                            y: 31.5819652241753,
                            r: 1.1
                        },
                        {
                            x: 167.97391,
                            y: 36.12563,
                            r: 1.3
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
                        font: {
                            size: 7,
                        },
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 0,
                            y: 0
                        },
                        {
                            x: 63.70101,
                            y: 0
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 0,
                            y: 7.09632090909091
                        },
                        {
                            x: 63.70101,
                            y: 7.09632090909091
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 0,
                            y: 14.1926418181818
                        },
                        {
                            x: 63.70101,
                            y: 14.1926418181818
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 0,
                            y: 21.2889627272727
                        },
                        {
                            x: 63.70101,
                            y: 21.2889627272727
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 0,
                            y: 28.3852836363636
                        },
                        {
                            x: 63.70101,
                            y: 28.3852836363636
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 0,
                            y: 35.4816045454545
                        },
                        {
                            x: 63.70101,
                            y: 35.4816045454545
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 0,
                            y: 42.5779254545455
                        },
                        {
                            x: 63.70101,
                            y: 42.5779254545455
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 0,
                            y: 49.6742463636364
                        },
                        {
                            x: 63.70101,
                            y: 49.6742463636364
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 0,
                            y: 56.7705672727273
                        },
                        {
                            x: 63.70101,
                            y: 56.7705672727273
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 0,
                            y: 63.8668881818182
                        },
                        {
                            x: 63.70101,
                            y: 63.8668881818182
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 0,
                            y: 70.9632090909091
                        },
                        {
                            x: 63.70101,
                            y: 70.9632090909091
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 0,
                            y: 78.05953
                        },
                        {
                            x: 63.70101,
                            y: 78.05953
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 0,
                            y: 0
                        },
                        {
                            x: 0,
                            y: 78.05953
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 10.616835,
                            y: 0
                        },
                        {
                            x: 10.616835,
                            y: 78.05953
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 21.23367,
                            y: 0
                        },
                        {
                            x: 21.23367,
                            y: 78.05953
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 31.850505,
                            y: 0
                        },
                        {
                            x: 31.850505,
                            y: 78.05953
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 42.46734,
                            y: 0
                        },
                        {
                            x: 42.46734,
                            y: 78.05953
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 53.084175,
                            y: 0
                        },
                        {
                            x: 53.084175,
                            y: 78.05953
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 63.70101,
                            y: 0
                        },
                        {
                            x: 63.70101,
                            y: 78.05953
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: -1.2339
                        },
                        {
                            x: 338.2677,
                            y: -1.2339
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: 6.02329666666667
                        },
                        {
                            x: 338.2677,
                            y: 6.02329666666667
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: 13.2804933333333
                        },
                        {
                            x: 338.2677,
                            y: 13.2804933333333
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: 20.53769
                        },
                        {
                            x: 338.2677,
                            y: 20.53769
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: 27.7948866666667
                        },
                        {
                            x: 338.2677,
                            y: 27.7948866666667
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: 35.0520833333333
                        },
                        {
                            x: 338.2677,
                            y: 35.0520833333333
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: 42.30928
                        },
                        {
                            x: 338.2677,
                            y: 42.30928
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: 49.5664766666667
                        },
                        {
                            x: 338.2677,
                            y: 49.5664766666667
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: 56.8236733333333
                        },
                        {
                            x: 338.2677,
                            y: 56.8236733333333
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: 64.08087
                        },
                        {
                            x: 338.2677,
                            y: 64.08087
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: 71.3380666666667
                        },
                        {
                            x: 338.2677,
                            y: 71.3380666666667
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: 78.5952633333333
                        },
                        {
                            x: 338.2677,
                            y: 78.5952633333333
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: 85.85246
                        },
                        {
                            x: 338.2677,
                            y: 85.85246
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: 93.1096566666667
                        },
                        {
                            x: 338.2677,
                            y: 93.1096566666667
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: 100.366853333333
                        },
                        {
                            x: 338.2677,
                            y: 100.366853333333
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: 107.62405
                        },
                        {
                            x: 338.2677,
                            y: 107.62405
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: -1.2339
                        },
                        {
                            x: 226.76943,
                            y: 107.62405
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 235.34622,
                            y: -1.2339
                        },
                        {
                            x: 235.34622,
                            y: 107.62405
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 243.92301,
                            y: -1.2339
                        },
                        {
                            x: 243.92301,
                            y: 107.62405
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 252.4998,
                            y: -1.2339
                        },
                        {
                            x: 252.4998,
                            y: 107.62405
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 261.07659,
                            y: -1.2339
                        },
                        {
                            x: 261.07659,
                            y: 107.62405
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 269.65338,
                            y: -1.2339
                        },
                        {
                            x: 269.65338,
                            y: 107.62405
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 278.23017,
                            y: -1.2339
                        },
                        {
                            x: 278.23017,
                            y: 107.62405
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 286.80696,
                            y: -1.2339
                        },
                        {
                            x: 286.80696,
                            y: 107.62405
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 295.38375,
                            y: -1.2339
                        },
                        {
                            x: 295.38375,
                            y: 107.62405
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 303.96054,
                            y: -1.2339
                        },
                        {
                            x: 303.96054,
                            y: 107.62405
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 312.53733,
                            y: -1.2339
                        },
                        {
                            x: 312.53733,
                            y: 107.62405
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 321.11412,
                            y: -1.2339
                        },
                        {
                            x: 321.11412,
                            y: 107.62405
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 329.69091,
                            y: -1.2339
                        },
                        {
                            x: 329.69091,
                            y: 107.62405
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 338.2677,
                            y: -1.2339
                        },
                        {
                            x: 338.2677,
                            y: 107.62405
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
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
                    pointBackgroundColor: [
                        'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        font: {
                            size: 7,
                        },
                        align: 'right',
                        padding: 0,
                        display: false,
                        color: 'rgba(0, 0, 0, 1)',
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
                    pointBackgroundColor: [
                        'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        font: {
                            size: 7,
                        },
                        align: 'top',
                        padding: 0,
                        display: false,
                        color: 'rgba(0, 0, 0, 1)',
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
                xAxes: [{
                    type: 'linear',
                    position: 'bottom',
                    display: false,
                    ticks: {
                        min: -20
                    }
                }],
                yAxes: [{
                    type: 'linear',
                    position: 'bottom',
                    display: false,
                    ticks: {
                        min: -120,
                        max: 110
                    }
                }],

            }
        }
    });
    window.myChart8 = new Chart(ctxamplio, {
        type: 'scatter',
        data: {
            datasets: [{
                    data: [{
                        x: 31.85,
                        y: -10,
                        r: "Módulo de reacción efectiva de subrasante K(pci)"
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
                            size: 9,
                        },
                    },

                },
                {
                    label: 'Módulo efectivo de reacción ',
                    data: [{
                            x: 0,
                            y: 0,
                            r: 800
                        }, {
                            x: 6.83238792975686,
                            y: 0,
                            r: 500
                        },
                        {
                            x: 30.2285991127529,
                            y: 0,
                            r: 100
                        },
                        {
                            x: 40.3047988170039,
                            y: 0,
                            r: 50
                        },
                        {
                            x: 63.70101,
                            y: 0,
                            r: 10
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
                            size: 9,
                        },
                    }
                },
                {
                    data: [{
                        x: 203,
                        y: 28,
                        r: "Índice de serviciabilidad Δpsi"
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
                        rotation: -90,
                        color: 'rgba(0, 0, 0, 1)',
                        font: {
                            size: 9,
                        },
                    },

                },
                {
                    label: 'ΔPSI ',
                    data: [{
                            x: 207.08684,
                            y: 23.86479,
                            r: 3
                        }, {
                            x: 207.08684,
                            y: 26.1538029685223,
                            r: 2
                        },
                        {
                            x: 207.08684,
                            y: 30.0668964842612,
                            r: 1
                        },
                        {
                            x: 207.08684,
                            y: 33.97999,
                            r: 0.5
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
                        font: {
                            size: 9,
                        },
                    }
                },
                {
                    data: [{
                        x: 283,
                        y: -83,
                        r: "Desviación estándar So"
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
                        rotation: 12,
                        color: 'rgba(0, 0, 0, 1)',
                        font: {
                            size: 9,
                        },
                    },

                },
                {
                    label: 'Desviación estandar ',
                    data: [{
                            x: 271.55756,
                            y: -68.38794,
                            r: 0.2
                        }, {
                            x: 282.590357720909,
                            y: -72.379866527313,
                            r: 0.3
                        },
                        {
                            x: 290.418252279091,
                            y: -75.212183472687,
                            r: 0.4
                        },
                        {
                            x: 296.490039012755,
                            y: -77.4090991728966,
                            r: 0.5
                        },
                        {
                            x: 301.45105,
                            y: -79.20411,
                            r: 0.6
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
                            size: 9,
                        },
                    }
                },
                {
                    label: 'Módulo elástico del hormigón 3x10^6 ',
                    data: [{
                            x: 4.29810000,
                            y: 0.0251529081868232,
                            r: ""
                        },
                        {
                            x: 10,
                            y: 11.3626468838951,
                            r: ""
                        },

                        {
                            x: 20,
                            y: 27.6853561068056,
                            r: ""
                        },

                        {
                            x: 30,
                            y: 40.2120313018772,
                            r: ""
                        },
                        {
                            x: 31.85,
                            y: 42.2044013703086,
                            r: 3
                        },

                        {
                            x: 40,
                            y: 50.1518314898567,
                            r: ""
                        },

                        {
                            x: 50,
                            y: 58.5098225561395,
                            r: ""
                        },

                        {
                            x: 60,
                            y: 65.2601886858886,
                            r: ""
                        },
                        {
                            x: 63.70101,
                            y: 67.2542680393838,
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
                    pointBackgroundColor: [
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        font: {
                            size: 9,
                        },
                        align: 'bottom',
                        padding: 0,
                        display: true,
                        color: 'rgba(0, 0, 0, 1)',
                    }
                },
                {
                    label: 'Módulo elástico del hormigón 4x10^6 ',
                    data: [{
                            x: 0,
                            y: -0.0215573124587536,
                            r: ""
                        },
                        {
                            x: 10,
                            y: 18.8745824141635,
                            r: ""
                        },

                        {
                            x: 20,
                            y: 33.3689534741004,
                            r: ""
                        },
                        {
                            x: 22,
                            y: 35.8700206825064,
                            r: 4
                        },
                        {
                            x: 30,
                            y: 44.6862722961824,
                            r: ""
                        },

                        {
                            x: 40,
                            y: 53.7062945531993,
                            r: ""
                        },

                        {
                            x: 50,
                            y: 61.3940631456378,
                            r: ""
                        },

                        {
                            x: 60,
                            y: 67.5322936117909,
                            r: ""
                        },
                        {
                            x: 63.70101,
                            y: 69.4998669053844,
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
                    pointBackgroundColor: [
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        font: {
                            size: 9,
                        },
                        align: 'bottom',
                        padding: 0,
                        display: true,
                        color: 'rgba(0, 0, 0, 1)',
                    }
                },
                {
                    label: 'Módulo elástico del hormigón 5x10^6 ',
                    data: [{
                            x: 0,
                            y: 6.62043310003355,
                            r: 5
                        },
                        {
                            x: 10,
                            y: 23.7352340446685,
                            r: ""
                        },

                        {
                            x: 20,
                            y: 37.1622635508811,
                            r: ""
                        },

                        {
                            x: 30,
                            y: 47.7321998170947,
                            r: ""
                        },

                        {
                            x: 40,
                            y: 56.3685792658578,
                            r: ""
                        },

                        {
                            x: 50,
                            y: 63.5340841707731,
                            r: ""
                        },

                        {
                            x: 60,
                            y: 69.3676980810261,
                            r: ""
                        },
                        {
                            x: 63.70101,
                            y: 71.1620677536397,
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
                    pointBackgroundColor: [
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        font: {
                            size: 9,
                        },
                        align: 'left',
                        padding: 0,
                        display: true,
                        color: 'rgba(0, 0, 0, 1)',
                    }
                },

                {
                    label: 'Módulo elástico del hormigón 6x10^6 ',
                    data: [{
                            x: 0,
                            y: 11.8628967390395,
                            r: 6
                        },
                        {
                            x: 10,
                            y: 27.4898784485757,
                            r: ""
                        },

                        {
                            x: 20,
                            y: 40.2158838263103,
                            r: ""
                        },

                        {
                            x: 30,
                            y: 50.191370387248,
                            r: ""
                        },

                        {
                            x: 40,
                            y: 58.1072328128289,
                            r: ""
                        },

                        {
                            x: 50,
                            y: 64.8131475867055,
                            r: ""
                        },

                        {
                            x: 60,
                            y: 70.6078927527568,
                            r: ""
                        },
                        {
                            x: 63.70101,
                            y: 72.5292013182695,
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
                    pointBackgroundColor: [
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        font: {
                            size: 9,
                        },
                        align: 'left',
                        padding: 0,
                        display: true,
                        color: 'rgba(0, 0, 0, 1)',
                    }
                },

                {
                    label: 'Módulo elástico del hormigón 7x10^6 ',
                    data: [{
                            x: 0,
                            y: 16.0135546084493,
                            r: 7
                        },
                        {
                            x: 10,
                            y: 30.5977476051227,
                            r: ""
                        },

                        {
                            x: 20,
                            y: 42.6680832858983,
                            r: ""
                        },
                        {
                            x: 30,
                            y: 52.2992317848758,
                            r: ""
                        },

                        {
                            x: 40,
                            y: 59.9558779534468,
                            r: ""
                        },

                        {
                            x: 50,
                            y: 66.3809193999338,
                            r: ""
                        },

                        {
                            x: 60,
                            y: 71.7407567258683,
                            r: ""
                        },
                        {
                            x: 63.70101,
                            y: 73.1397970805046,
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
                    pointBackgroundColor: [
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        font: {
                            size: 9,
                        },
                        align: 'left',
                        padding: 0,
                        display: true,
                        color: 'rgba(0, 0, 0, 1)',
                    }
                },
                {
                    data: [{
                        x: 85,
                        y: 29,
                        r: "Módulo de rotura del hormigón Sc(psi)"
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
                        rotation: -90,
                        color: 'rgba(0, 0, 0, 1)',
                        font: {
                            size: 9,
                        },
                    },

                },
                {
                    label: 'Módulo de rotura media del hormigón',
                    data: [{
                            x: 90.75304,
                            y: -2.47433,
                            r: 500
                        }, {
                            x: 90.75304,
                            y: 14.6049888028488,
                            r: 650
                        },
                        {
                            x: 90.75304,
                            y: 19.4292497776237,
                            r: 700
                        },
                        {
                            x: 90.75304,
                            y: 28.1218407044082,
                            r: 800
                        },
                        {
                            x: 90.75304,
                            y: 35.7892492961447,
                            r: 900
                        },
                        {
                            x: 90.75304,
                            y: 42.6479799994472,
                            r: 1000
                        },
                        {
                            x: 90.75304,
                            y: 48.8524566241081,
                            r: 1100
                        },
                        {
                            x: 90.75304,
                            y: 54.5167,
                            r: 1200
                        },

                    ],
                    pointBackgroundColor: [
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],

                    showLine: true,
                    pointRadius: 2,
                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],

                    borderWidth: 1.8,
                    datalabels: {
                        align: 'right',
                        font: {
                            size: 9,
                        },
                    }
                },
                {
                    data: [{
                        x: 181,
                        y: 29,
                        r: "Línea de paso"
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
                        rotation: -90,
                        color: 'rgba(0, 0, 0, 1)',
                        font: {
                            size: 9,
                        },
                    },

                },
                {
                    label: 'Linea de paso',
                    data: [{
                            x: 185.05559,
                            y: -20.39362,
                            r: 100
                        }, {
                            x: 185.05559,
                            y: -10.478007,
                            r: 90
                        },
                        {
                            x: 185.05559,
                            y: -0.562394,
                            r: 80
                        },
                        {
                            x: 185.05559,
                            y: 9.353219,
                            r: 70
                        },
                        {
                            x: 185.05559,
                            y: 19.268832,
                            r: 60
                        },
                        {
                            x: 185.05559,
                            y: 29.184445,
                            r: 50
                        },
                        {
                            x: 185.05559,
                            y: 39.100058,
                            r: 40
                        },
                        {
                            x: 185.05559,
                            y: 49.015671,
                            r: 30
                        },
                        {
                            x: 185.05559,
                            y: 58.931284,
                            r: 20
                        },
                        {
                            x: 185.05559,
                            y: 68.846897,
                            r: 10
                        },
                        {
                            x: 185.05559,
                            y: 78.76251,
                            r: 0
                        },

                    ],
                    pointBackgroundColor: [
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],

                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    pointRadius: 2,
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'right',
                        font: {
                            size: 9,
                        },
                    }
                },
                {
                    label: 'TL',
                    data: [{
                            x: 103.91735,
                            y: -13.10973,
                            r: ""
                        },
                        {
                            x: 103.91735,
                            y: 58.85345,
                            r: "TL"
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
                        align: 'top'
                    }
                },
                {
                    data: [{
                        x: 273,
                        y: -9,
                        r: "Número de ejes equivalentes SN"
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
                            size: 9,
                        },
                    },

                },
                {
                    label: 'Número de ejes equivalentes',
                    data: [{
                            x: 226.76063,
                            y: -13.2006,
                            r: 1000
                        }, {
                            x: 233.274327751447,
                            y: -13.2006,
                            r: 500
                        },
                        {
                            x: 248.398665562138,
                            y: -13.2006,
                            r: 100
                        },
                        {
                            x: 254.912363313586,
                            y: -13.2006,
                            r: 50
                        },
                        {
                            x: 270.036701124276,
                            y: -13.2006,
                            r: 10
                        },
                        {
                            x: 276.550398875724,
                            y: -13.2006,
                            r: 5
                        },
                        {
                            x: 291.674736686414,
                            y: -13.2006,
                            r: 1
                        },
                        {
                            x: 298.188434437862,
                            y: -13.2006,
                            r: 0.5
                        },
                        {
                            x: 313.312772248553,
                            y: -13.2006,
                            r: 0.1
                        },
                        {
                            x: 319.82647,
                            y: -13.2006,
                            r: 0.05
                        },
                    ],
                    showLine: true,
                    pointRadius: 2,
                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    pointBackgroundColor: [
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'bottom',
                        font: {
                            size: 9,
                        },
                    }
                },
                {
                    label: 'TL2',
                    data: [{
                            x: 144.3721,
                            y: -3.73147,
                            r: ""
                        },
                        {
                            x: 144.3721,
                            y: 63.54641,
                            r: "TL"
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
                        align: 'top'
                    }
                },
                {
                    label: 'TL3',
                    data: [{
                            x: 227.36174,
                            y: -52.00229,
                            r: "TL"
                        },
                        {
                            x: 337.89041,
                            y: -52.00229,
                            r: ""
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
                        align: 'left'
                    }
                },
                {
                    data: [{
                        x: 125,
                        y: 35,
                        r: "Coeficiente de transferencia de carga J"
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
                        rotation: -90,
                        color: 'rgba(0, 0, 0, 1)',
                        font: {
                            size: 9,
                        },
                    },

                },
                {
                    label: 'Coeficiente de transferencia de carga',
                    data: [{
                            x: 128.97991,
                            y: 22.23003,
                            r: 2.2
                        }, {
                            x: 128.97991,
                            y: 26.8403679434522,
                            r: 2.5
                        },
                        {
                            x: 128.97991,
                            y: 33.4158339682331,
                            r: 3
                        },
                        {
                            x: 128.97991,
                            y: 38.9753112770327,
                            r: 3.5
                        },
                        {
                            x: 128.97991,
                            y: 43.7911495733046,
                            r: 4
                        },
                        {
                            x: 128.97991,
                            y: 48.03902,
                            r: 4.5
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
                        font: {
                            size: 9,
                        },
                    }
                },
                {
                    data: [{
                        x: 298,
                        y: -105,
                        r: "Confiabilidad R(%)"
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
                            size: 9,
                        },
                    },

                },
                {
                    label: 'Confiabilidad',
                    data: [{
                            x: 251.85886,
                            y: -92.86475,
                            r: "100 %"
                        }, {
                            x: 273.188098845126,
                            y: -92.86475,
                            r: "99 %"
                        },
                        {
                            x: 292.216832716917,
                            y: -92.86475,
                            r: "95 %"
                        },
                        {
                            x: 302.360980332411,
                            y: -92.86475,
                            r: "90 %"
                        },
                        {
                            x: 314.644748309869,
                            y: -92.86475,
                            r: "80 %"
                        },
                        {
                            x: 323.502209252109,
                            y: -92.86475,
                            r: "70 %"
                        },
                        {
                            x: 331.070583039299,
                            y: -92.86475,
                            r: "60 %"
                        },
                        {
                            x: 338.14456,
                            y: -92.86475,
                            r: "50 %"
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
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'bottom',
                        font: {
                            size: 9,
                        },


                    }
                },

                {
                    label: 'esp5',
                    data: [{
                            x: 273.44797,
                            y: -1.2339,
                            r: ""
                        },
                        {
                            x: 338.57239,
                            y: 62.28613,
                            r: "5 "
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
                            size: 9,
                        },
                        color: 'rgba(0, 0, 0, 1)',

                    }
                },
                {
                    label: 'esp6',
                    data: [{
                            x: 262.9717,
                            y: -1.2339,
                            r: ""
                        },
                        {
                            x: 338.2677,
                            y: 71.88777,
                            r: "6 "
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
                            size: 9,
                        },
                        color: 'rgba(0, 0, 0, 1)',
                    }
                },
                {
                    label: 'esp7',
                    data: [{
                            x: 253.11794,
                            y: -1.2339,
                            r: ""
                        },
                        {
                            x: 338.26769,
                            y: 81.46471,
                            r: "7 "
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
                            size: 9,
                        },
                        color: 'rgba(0, 0, 0, 1)',
                    }
                },
                {
                    label: 'esp8',
                    data: [{
                            x: 243.7826,
                            y: -1.2339,
                            r: ""
                        },
                        {
                            x: 338.2677,
                            y: 90.29507,
                            r: "8 "
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
                            size: 9,
                        },
                        color: 'rgba(0, 0, 0, 1)',
                    }
                },
                {
                    label: 'esp9',
                    data: [{
                            x: 235.48883,
                            y: -1.2339,
                            r: ""
                        },
                        {
                            x: 338.26769,
                            y: 98.78192,
                            r: "9 "
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
                            size: 9,
                        },
                        color: 'rgba(0, 0, 0, 1)',
                    }
                },
                {
                    label: 'esp10',
                    data: [{
                            x: 226.6943,
                            y: -1.2339,
                            r: ""
                        },
                        {
                            x: 338.2677,
                            y: 106.42979,
                            r: "10 "
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
                            size: 9,
                        },
                        color: 'rgba(0, 0, 0, 1)',
                    }
                },
                {
                    label: 'esp11',
                    data: [{
                            x: 226.76943,
                            y: 5.7419,
                            r: ""
                        },
                        {
                            x: 331.78969,
                            y: 107.62404,
                            r: "11 "
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
                            size: 9,
                        },
                        color: 'rgba(0, 0, 0, 1)',
                    }
                },
                {
                    label: 'esp12',
                    data: [{
                            x: 226.76943,
                            y: 12.4477,
                            r: ""
                        },
                        {
                            x: 325.23084,
                            y: 107.62404,
                            r: "12 "
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
                            size: 9,
                        },
                        color: 'rgba(0, 0, 0, 1)',
                    }
                },
                {
                    label: 'esp13',
                    data: [{
                            x: 226.76943,
                            y: 18.76776,
                            r: ""
                        },
                        {
                            x: 318.86712,
                            y: 107.62404,
                            r: "13 "
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
                            size: 9,
                        },
                        color: 'rgba(0, 0, 0, 1)',
                    }
                },
                {
                    label: 'esp14',
                    data: [{
                            x: 226.76943,
                            y: 24.50944,
                            r: ""
                        },
                        {
                            x: 312.56852,
                            y: 107.62404,
                            r: "14 "
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
                            size: 9,
                        },
                        color: 'rgba(0, 0, 0, 1)',
                    }
                },
                {
                    data: [{
                        x: 164,
                        y: 26,
                        r: "Coeficiente de drenaje Cd"
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
                        rotation: -90,
                        color: 'rgba(0, 0, 0, 1)',
                        font: {
                            size: 9,
                        },
                    },

                },
                {
                    label: 'coeficiente de drenaje',
                    data: [{
                            x: 167.97391,
                            y: 15.09582,
                            r: 0.6
                        },
                        {
                            x: 167.97391,
                            y: 19.2885281011685,
                            r: 0.7
                        },
                        {
                            x: 167.97391,
                            y: 26.1239701541951,
                            r: 0.9
                        },
                        {
                            x: 167.97391,
                            y: 31.5819652241753,
                            r: 1.1
                        },
                        {
                            x: 167.97391,
                            y: 36.12563,
                            r: 1.3
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
                        font: {
                            size: 9,
                        },
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 0,
                            y: 0
                        },
                        {
                            x: 63.70101,
                            y: 0
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 0,
                            y: 7.09632090909091
                        },
                        {
                            x: 63.70101,
                            y: 7.09632090909091
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 0,
                            y: 14.1926418181818
                        },
                        {
                            x: 63.70101,
                            y: 14.1926418181818
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 0,
                            y: 21.2889627272727
                        },
                        {
                            x: 63.70101,
                            y: 21.2889627272727
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 0,
                            y: 28.3852836363636
                        },
                        {
                            x: 63.70101,
                            y: 28.3852836363636
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 0,
                            y: 35.4816045454545
                        },
                        {
                            x: 63.70101,
                            y: 35.4816045454545
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 0,
                            y: 42.5779254545455
                        },
                        {
                            x: 63.70101,
                            y: 42.5779254545455
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 0,
                            y: 49.6742463636364
                        },
                        {
                            x: 63.70101,
                            y: 49.6742463636364
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 0,
                            y: 56.7705672727273
                        },
                        {
                            x: 63.70101,
                            y: 56.7705672727273
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 0,
                            y: 63.8668881818182
                        },
                        {
                            x: 63.70101,
                            y: 63.8668881818182
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 0,
                            y: 70.9632090909091
                        },
                        {
                            x: 63.70101,
                            y: 70.9632090909091
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 0,
                            y: 78.05953
                        },
                        {
                            x: 63.70101,
                            y: 78.05953
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 0,
                            y: 0
                        },
                        {
                            x: 0,
                            y: 78.05953
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 10.616835,
                            y: 0
                        },
                        {
                            x: 10.616835,
                            y: 78.05953
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 21.23367,
                            y: 0
                        },
                        {
                            x: 21.23367,
                            y: 78.05953
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 31.850505,
                            y: 0
                        },
                        {
                            x: 31.850505,
                            y: 78.05953
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 42.46734,
                            y: 0
                        },
                        {
                            x: 42.46734,
                            y: 78.05953
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 53.084175,
                            y: 0
                        },
                        {
                            x: 53.084175,
                            y: 78.05953
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C1',
                    data: [{
                            x: 63.70101,
                            y: 0
                        },
                        {
                            x: 63.70101,
                            y: 78.05953
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: -1.2339
                        },
                        {
                            x: 338.2677,
                            y: -1.2339
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: 6.02329666666667
                        },
                        {
                            x: 338.2677,
                            y: 6.02329666666667
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: 13.2804933333333
                        },
                        {
                            x: 338.2677,
                            y: 13.2804933333333
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: 20.53769
                        },
                        {
                            x: 338.2677,
                            y: 20.53769
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: 27.7948866666667
                        },
                        {
                            x: 338.2677,
                            y: 27.7948866666667
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: 35.0520833333333
                        },
                        {
                            x: 338.2677,
                            y: 35.0520833333333
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: 42.30928
                        },
                        {
                            x: 338.2677,
                            y: 42.30928
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: 49.5664766666667
                        },
                        {
                            x: 338.2677,
                            y: 49.5664766666667
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: 56.8236733333333
                        },
                        {
                            x: 338.2677,
                            y: 56.8236733333333
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: 64.08087
                        },
                        {
                            x: 338.2677,
                            y: 64.08087
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: 71.3380666666667
                        },
                        {
                            x: 338.2677,
                            y: 71.3380666666667
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: 78.5952633333333
                        },
                        {
                            x: 338.2677,
                            y: 78.5952633333333
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: 85.85246
                        },
                        {
                            x: 338.2677,
                            y: 85.85246
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: 93.1096566666667
                        },
                        {
                            x: 338.2677,
                            y: 93.1096566666667
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: 100.366853333333
                        },
                        {
                            x: 338.2677,
                            y: 100.366853333333
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: 107.62405
                        },
                        {
                            x: 338.2677,
                            y: 107.62405
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 226.76943,
                            y: -1.2339
                        },
                        {
                            x: 226.76943,
                            y: 107.62405
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 235.34622,
                            y: -1.2339
                        },
                        {
                            x: 235.34622,
                            y: 107.62405
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 243.92301,
                            y: -1.2339
                        },
                        {
                            x: 243.92301,
                            y: 107.62405
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 252.4998,
                            y: -1.2339
                        },
                        {
                            x: 252.4998,
                            y: 107.62405
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 261.07659,
                            y: -1.2339
                        },
                        {
                            x: 261.07659,
                            y: 107.62405
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 269.65338,
                            y: -1.2339
                        },
                        {
                            x: 269.65338,
                            y: 107.62405
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 278.23017,
                            y: -1.2339
                        },
                        {
                            x: 278.23017,
                            y: 107.62405
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 286.80696,
                            y: -1.2339
                        },
                        {
                            x: 286.80696,
                            y: 107.62405
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 295.38375,
                            y: -1.2339
                        },
                        {
                            x: 295.38375,
                            y: 107.62405
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 303.96054,
                            y: -1.2339
                        },
                        {
                            x: 303.96054,
                            y: 107.62405
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 312.53733,
                            y: -1.2339
                        },
                        {
                            x: 312.53733,
                            y: 107.62405
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 321.11412,
                            y: -1.2339
                        },
                        {
                            x: 321.11412,
                            y: 107.62405
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 329.69091,
                            y: -1.2339
                        },
                        {
                            x: 329.69091,
                            y: 107.62405
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C2',
                    data: [{
                            x: 338.2677,
                            y: -1.2339
                        },
                        {
                            x: 338.2677,
                            y: 107.62405
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.5)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
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
                    pointBackgroundColor: [
                        'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        font: {
                            size: 12,
                        },
                        align: 'right',
                        padding: 0,
                        display: false,
                        color: 'rgba(0, 0, 0, 1)',
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
                    pointBackgroundColor: [
                        'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)', 'rgba(150, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        font: {
                            size: 12,
                        },
                        align: 'top',
                        padding: 0,
                        display: false,
                        color: 'rgba(0, 0, 0, 1)',
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
                xAxes: [{
                    type: 'linear',
                    position: 'bottom',
                    display: false,
                    ticks: {
                        min: -20
                    }
                }],
                yAxes: [{
                    type: 'linear',
                    position: 'bottom',
                    display: false,
                    ticks: {
                        min: -120,
                        max: 110
                    }
                }],

            }
        }
    });
    var k = (Math.log10(parseFloat($('#kfinal').val())) * -33.4724108872471) - (-97.1734208872471);
    $("#valorxk").val(k);
    calcularyec();
    var sc = (Math.log10(parseFloat($('#Sc').val())) * 149.893069293381) - (407.031227880694);
    var ecy = (parseFloat($('#ecy').val()))
    var m1 = (sc - ecy) / (90.75304 - 63.70101);
    var tl1 = (m1 * (103.91735 - 90.75304)) + sc;
    var j = (Math.log10(parseFloat($('#tcvalor').val())) * 83.0432249175011) - (6.20585370037218);
    var m2 = (j - tl1) / (128.97991 - 103.91735);
    var tl2 = (m2 * (144.3721 - 128.97991)) + j;
    var cd = (Math.log10(parseFloat($('#subbasem2').val())) * 62.6274706270793) - (-28.9896460502526);
    var m3 = (cd - tl2) / (167.97391 - 144.3721);
    var tl3 = (m3 * (185.05559 - 167.97391)) + cd;
    var psi = (Math.log10(parseFloat($('#deltapsi').val())) * -12.9990152878544) - (-30.0668964842612);
    var m4 = (psi - tl3) / (207.08684 - 185.05559);
    var tl4 = (m4 * (226.76943 - 207.08684)) + psi;

    var zr = parseFloat($('#desvest').val());
    var r = ((-zr) * (-27.9220755759306)) - (-338.14456);
    var destandx = (62.653863570937 * Math.log10(parseFloat($('#destandar').val()))) + (315.350731291846);
    var destandy = -((84.2333426455836) - ((-22.6696461182706) * Math.log10(parseFloat($('#destandar').val()))));

    var m5 = (destandy + 92.86475) / (destandx - r);
    var tl5 = (((-52.00229) - destandy) / (m5)) + destandx;
    var esals = (-21.6380355621381 * Math.log10(parseFloat($('#numeroejesequi').val()) / 1000000)) - (-291.674736686414);
    var m6 = (-13.2006 + 52.00229) / (esals - tl5);
    var tl6 = ((-1.2339 + 13.2006) / (m6)) + esals;
    var valconf = $("#factorc option:selected").text();


    var t1 = { x: document.getElementById("valorxk").value, y: 0, r: "K" + " = " + document.getElementById("kfinal").value };
    window.myChart7.data.datasets[85].data[0, 0, 0] = t1;
    var t2 = { x: document.getElementById("valorxk").value, y: document.getElementById("ecy").value, r: "Ec" + " = " + document.getElementById("Ec").value };
    window.myChart7.data.datasets[85].data[1, 1, 1] = t2;
    var t3 = { x: 63.70101, y: document.getElementById("ecy").value, r: "" };
    window.myChart7.data.datasets[85].data[2, 2, 2] = t3;
    var t4 = { x: 90.75304, y: sc, r: "Sc" + " = " + document.getElementById("Sc").value };
    window.myChart7.data.datasets[85].data[3, 3, 3] = t4;
    var t5 = { x: 103.91735, y: tl1, r: "" };
    window.myChart7.data.datasets[85].data[4, 4, 4] = t5;
    var t6 = { x: 128.97991, y: j, r: "J" + " = " + document.getElementById("tcvalor").value };
    window.myChart7.data.datasets[85].data[5, 5, 5] = t6;
    var t7 = { x: 144.3721, y: tl2, r: "" };
    window.myChart7.data.datasets[85].data[6, 6, 6] = t7;
    var t8 = { x: 167.97391, y: cd, r: "Cd" + " = " + document.getElementById("subbasem2").value };
    window.myChart7.data.datasets[85].data[7, 7, 7] = t8;
    var t9 = { x: 185.05559, y: tl3, r: "" };
    window.myChart7.data.datasets[85].data[8, 8, 8] = t9;
    var t10 = { x: 207.08684, y: psi, r: "PSI" + " = " + document.getElementById("deltapsi").value };
    window.myChart7.data.datasets[85].data[9, 9, 9] = t10;
    var t11 = { x: 226.76943, y: tl4, r: "" };
    window.myChart7.data.datasets[85].data[10, 10, 10] = t11;
    var t12 = { x: tl6, y: tl4, r: "" };
    window.myChart7.data.datasets[85].data[11, 11, 11] = t12;


    var t13 = { x: r, y: -92.86475, r: "R" + " = " + valconf };
    window.myChart7.data.datasets[86].data[0, 0, 0] = t13;
    var t14 = { x: destandx, y: destandy, r: "So" + " = " + document.getElementById("destandar").value };
    window.myChart7.data.datasets[86].data[1, 1, 1] = t14;
    var t15 = { x: tl5, y: -52.00229, r: "" };
    window.myChart7.data.datasets[86].data[2, 2, 2] = t15;
    var t16 = { x: esals, y: -13.2006, r: "Esals" + " = " + document.getElementById("numeroejesequi").value };
    window.myChart7.data.datasets[86].data[3, 3, 3] = t16;
    var t17 = { x: tl6, y: -1.2339, r: "" };
    window.myChart7.data.datasets[86].data[4, 4, 4] = t17;
    var t18 = { x: tl6, y: tl4, r: "D" + " = " + document.getElementById("d").value };
    window.myChart7.data.datasets[86].data[5, 5, 5] = t18;
    window.myChart7.update();

    var t1 = { x: document.getElementById("valorxk").value, y: 0, r: "K" + " = " + document.getElementById("kfinal").value };
    window.myChart8.data.datasets[85].data[0, 0, 0] = t1;
    var t2 = { x: document.getElementById("valorxk").value, y: document.getElementById("ecy").value, r: "Ec" + " = " + document.getElementById("Ec").value };
    window.myChart8.data.datasets[85].data[1, 1, 1] = t2;
    var t3 = { x: 63.70101, y: document.getElementById("ecy").value, r: "" };
    window.myChart8.data.datasets[85].data[2, 2, 2] = t3;
    var t4 = { x: 90.75304, y: sc, r: "Sc" + " = " + document.getElementById("Sc").value };
    window.myChart8.data.datasets[85].data[3, 3, 3] = t4;
    var t5 = { x: 103.91735, y: tl1, r: "" };
    window.myChart8.data.datasets[85].data[4, 4, 4] = t5;
    var t6 = { x: 128.97991, y: j, r: "J" + " = " + document.getElementById("tcvalor").value };
    window.myChart8.data.datasets[85].data[5, 5, 5] = t6;
    var t7 = { x: 144.3721, y: tl2, r: "" };
    window.myChart8.data.datasets[85].data[6, 6, 6] = t7;
    var t8 = { x: 167.97391, y: cd, r: "Cd" + " = " + document.getElementById("subbasem2").value };
    window.myChart8.data.datasets[85].data[7, 7, 7] = t8;
    var t9 = { x: 185.05559, y: tl3, r: "" };
    window.myChart8.data.datasets[85].data[8, 8, 8] = t9;
    var t10 = { x: 207.08684, y: psi, r: "PSI" + " = " + document.getElementById("deltapsi").value };
    window.myChart8.data.datasets[85].data[9, 9, 9] = t10;
    var t11 = { x: 226.76943, y: tl4, r: "" };
    window.myChart8.data.datasets[85].data[10, 10, 10] = t11;
    var t12 = { x: tl6, y: tl4, r: "" };
    window.myChart8.data.datasets[85].data[11, 11, 11] = t12;


    var t13 = { x: r, y: -92.86475, r: "R" + " = " + valconf };
    window.myChart8.data.datasets[86].data[0, 0, 0] = t13;
    var t14 = { x: destandx, y: destandy, r: "So" + " = " + document.getElementById("destandar").value };
    window.myChart8.data.datasets[86].data[1, 1, 1] = t14;
    var t15 = { x: tl5, y: -52.00229, r: "" };
    window.myChart8.data.datasets[86].data[2, 2, 2] = t15;
    var t16 = { x: esals, y: -13.2006, r: "Esals" + " = " + document.getElementById("numeroejesequi").value };
    window.myChart8.data.datasets[86].data[3, 3, 3] = t16;
    var t17 = { x: tl6, y: -1.2339, r: "" };
    window.myChart8.data.datasets[86].data[4, 4, 4] = t17;
    var t18 = { x: tl6, y: tl4, r: "D" + " = " + document.getElementById("d").value };
    window.myChart8.data.datasets[86].data[5, 5, 5] = t18;
    window.myChart8.update();

}