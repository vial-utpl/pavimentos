$(document).ready(function() {
    console.log("Start...");

    loadGraph4();




});

var polino9 = function(a, b, c, d, e, f, g, h, i, j, k) {
    return ((a) + (b * (k)) + (c * Math.pow(k, 2)) + (d * Math.pow(k, 3)) + (e * Math.pow(k, 4)) + (f * Math.pow(k, 5)) + (g * Math.pow(k, 6)) + (h * Math.pow(k, 7)) + (i * Math.pow(k, 8)) + (j * Math.pow(k, 9)));
}
var polino3 = function(a, b, c, d, j) {
    return ((a) + (b * (j)) + (c * Math.pow(j, 2)) + (d * Math.pow(j, 3)));
}
var interpo = function(a, b, c, d, e) {
    return (d + (((c - a) * (e - d)) / (b - a)));
}

function loadGraph4() {
    var ctx = document.getElementById("moduloReaccionCompuestoK").getContext('2d');
    if(window.myChart4 != null){
        window.myChart4.destroy();
    }
    window.myChart4 = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                    data: [{
                        x: 436.048325,
                        y: 850,
                        r: "Espesor de subbase Dsb (plg)"
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
                            size: 8.5,
                        },
                    },

                },
                {
                    data: [{
                        x: 500,
                        y: 1650,
                        r: "Módulo elástico de subbase Esb (psi)"
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
                            size: 8.5,
                        },
                    },

                },
                {
                    data: [{
                        x: 1500,
                        y: 1700,
                        r: "Módulo de reacción compuesto K (pci)"
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
                            size: 8.5,
                        },
                    },

                },
                {
                    data: [{
                        x: 420,
                        y: 150,
                        r: "Módulo resiliente de subrasante Mr (psi)"
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
                            size: 8.5,
                        },
                    },

                },
                {
                    label: 'Espesor de subbase ',
                    data: [{
                            x: 0,
                            y: 876.18858,
                            r: ""
                        }, {
                            x: 109.01208125,
                            y: 876.18858,
                            r: 18
                        },
                        {
                            x: 218.0241625,
                            y: 876.18858,
                            r: 16
                        },
                        {
                            x: 327.03624375,
                            y: 876.18858,
                            r: 14
                        },
                        {
                            x: 436.048325,
                            y: 876.18858,
                            r: 12
                        },
                        {
                            x: 545.06040625,
                            y: 876.18858,
                            r: 10
                        },
                        {
                            x: 654.0724875,
                            y: 876.18858,
                            r: 8
                        },
                        {
                            x: 763.08456875,
                            y: 876.18858,
                            r: 6
                        },
                        {
                            x: 872.09665,
                            y: 876.18858,
                            r: ""
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
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'top',
                        font: {
                            size: 8.5,
                        },
                    }
                },

                {
                    label: 'Módulo resiliente de la subrasante 1000psi ',
                    data: [{
                            x: 0,
                            y: 834.928541906177,
                            r: "1000 psi"
                        },
                        {
                            x: 87.081755,
                            y: 821.024159716082,
                            r: ""
                        },
                        {
                            x: 174.16351,
                            y: 805.199021725026,
                            r: ""
                        },
                        {
                            x: 261.245265,
                            y: 788.130201383264,
                            r: ""
                        },
                        {
                            x: 348.32702,
                            y: 769.188999233693,
                            r: ""
                        },
                        {
                            x: 435.408775,
                            y: 747.432718475862,
                            r: ""
                        },

                        {
                            x: 522.49053,
                            y: 721.655362004113,
                            r: ""
                        },
                        {
                            x: 609.572285,
                            y: 691.242863564035,
                            r: ""
                        },

                        {
                            x: 696.65404,
                            y: 655.580824872032,
                            r: ""
                        },
                        {
                            x: 783.735795,
                            y: 611.594019198842,
                            r: ""
                        },

                        {
                            x: 870.81755,
                            y: 556.657140029325,
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
                        align: 'left',
                        font: {
                            size: 8.5,
                        },
                    }
                },
                {
                    label: 'Módulo resiliente de la subrasante 2000psi ',
                    data: [{
                            x: 0,
                            y: 745.84986295551,
                            r: "2000 psi"
                        },
                        {
                            x: 87.081755,
                            y: 729.49126464825,
                            r: ""
                        },
                        {
                            x: 174.16351,
                            y: 710.834857105179,
                            r: ""
                        },
                        {
                            x: 261.245265,
                            y: 690.781158313411,
                            r: ""
                        },
                        {
                            x: 348.32702,
                            y: 669.040186253568,
                            r: ""
                        },
                        {
                            x: 435.408775,
                            y: 644.654279735565,
                            r: ""
                        },

                        {
                            x: 522.49053,
                            y: 616.837272115658,
                            r: ""
                        },
                        {
                            x: 609.572285,
                            y: 584.299648958723,
                            r: ""
                        },

                        {
                            x: 696.65404,
                            y: 544.746949715615,
                            r: ""
                        },
                        {
                            x: 783.735795,
                            y: 495.976379776973,
                            r: ""
                        },

                        {
                            x: 870.81755,
                            y: 435.954382841974,
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
                        align: 'left',
                        font: {
                            size: 8.5,
                        },
                    }
                },
                {
                    label: 'Módulo resiliente de la subrasante 3000psi ',
                    data: [{
                            x: 0,
                            y: 692.634432449936,
                            r: "3000 psi"
                        },
                        {
                            x: 87.081755,
                            y: 675.161359399085,
                            r: ""
                        },
                        {
                            x: 174.16351,
                            y: 656.04685600551,
                            r: ""
                        },
                        {
                            x: 261.245265,
                            y: 635.081806246488,
                            r: ""
                        },
                        {
                            x: 348.32702,
                            y: 613.089346995505,
                            r: ""
                        },
                        {
                            x: 435.408775,
                            y: 588.444367188872,
                            r: ""
                        },

                        {
                            x: 522.49053,
                            y: 559.838030002652,
                            r: ""
                        },
                        {
                            x: 609.572285,
                            y: 526.775289724706,
                            r: ""
                        },

                        {
                            x: 696.65404,
                            y: 487.33737442141,
                            r: ""
                        },
                        {
                            x: 783.735795,
                            y: 436.310370007322,
                            r: ""
                        },

                        {
                            x: 870.81755,
                            y: 365.875370928616,
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
                        align: 'left',
                        font: {
                            size: 8.5,
                        },
                    }
                },
                {
                    label: 'Módulo resiliente de la subrasante 5000psi ',
                    data: [{
                            x: 0,
                            y: 626.298621874302,
                            r: "5000 psi"
                        },
                        {
                            x: 87.081755,
                            y: 608.642966929652,
                            r: ""
                        },
                        {
                            x: 174.16351,
                            y: 588.569993830373,
                            r: ""
                        },
                        {
                            x: 261.245265,
                            y: 567.570046040307,
                            r: ""
                        },
                        {
                            x: 348.32702,
                            y: 544.897978713877,
                            r: ""
                        },
                        {
                            x: 435.408775,
                            y: 517.861437186827,
                            r: ""
                        },

                        {
                            x: 522.49053,
                            y: 485.720125658629,
                            r: ""
                        },
                        {
                            x: 609.572285,
                            y: 448.26821671761,
                            r: ""
                        },

                        {
                            x: 696.65404,
                            y: 403.48430965003,
                            r: ""
                        },
                        {
                            x: 783.735795,
                            y: 348.846978774163,
                            r: ""
                        },

                        {
                            x: 870.81755,
                            y: 278.028962350239,
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
                        align: 'left',
                        font: {
                            size: 8.5,
                        },
                    }
                },
                {
                    label: 'Módulo resiliente de la subrasante 7000psi ',
                    data: [{ x: 0, y: 581.304927647113, r: "7000 psi"}, 
                    { x: 87.081755, y: 563.48803154494, r: ""}, 
                    { x: 174.16351, y: 542.688786154539, r: ""}, 
                    { x: 261.245265, y: 519.953227764524, r: ""}, 
                    { x: 348.32702, y: 494.971974697895, r: ""}, 
                    { x: 435.408775, y: 467.718964485548, r: ""}, 
                    { x: 522.49053, y: 436.643262826338, r: ""}, 
                    { x: 609.572285, y: 399.217363899958, r: ""}, 
                    { x: 696.65404, y: 353.574751973379, r: ""}, 
                    { x: 783.735795, y: 297.258943983012, r: ""}, 
                    { x: 870.81755, y: 220.755781882739, r: ""}, 
                    


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
                        align: 'left',
                        font: {
                            size: 8.5,
                        },
                    },
                    tooltips: {
                        display: false,
                    },
                },
                {
                    label: 'Módulo resiliente de la subrasante 10000psi ',
                    data: [{ x: 0, y: 534.716569688171, r: "10000 psi"}, 
                    { x: 87.081755, y: 516.432011805842, r: ""}, 
                    { x: 174.16351, y: 496.578885427391, r: ""}, 
                    { x: 261.245265, y: 474.832944406868, r: ""}, 
                    { x: 348.32702, y: 450.209678214833, r: ""}, 
                    { x: 435.408775, y: 420.906263547852, r: ""}, 
                    { x: 522.49053, y: 386.150231186097, r: ""}, 
                    { x: 609.572285, y: 345.668737484254, r: ""}, 
                    { x: 696.65404, y: 297.998382643839, r: ""}, 
                    { x: 783.735795, y: 239.667484906036, r: ""}, 
                    { x: 870.81755, y: 163.300601023093, r: ""}, 
                    


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
                        align: 'left',
                        font: {
                            size: 8.5,
                        },
                    }
                },
                {
                    label: 'Módulo resiliente de la subrasante 12000psi ',
                    data: [{ x: 0, y: 514.04854882881, r: "12000 psi"}, 
                    { x: 87.081755, y: 493.706497121689, r: ""}, 
                    { x: 174.16351, y: 470.885908930966, r: ""}, 
                    { x: 261.245265, y: 447.175732849982, r: ""}, 
                    { x: 348.32702, y: 421.482495497794, r: ""}, 
                    { x: 435.408775, y: 391.320426362498, r: ""}, 
                    { x: 522.49053, y: 356.704864518627, r: ""}, 
                    { x: 609.572285, y: 317.523374801602, r: ""}, 
                    { x: 696.65404, y: 270.231545979443, r: ""}, 
                    { x: 783.735795, y: 209.792580542398, r: ""}, 
                    { x: 870.81755, y: 127.951514933899, r: ""}, 
                    


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
                        align: 'left',
                        font: {
                            size: 8.5,
                        },
                    }
                },
                {
                    label: 'Módulo resiliente de la subrasante 16000psi ',
                    data: [{ x: 0, y: 474.954583162441, r: "16000 psi"}, 
                    { x: 87.081755, y: 454.445719634311, r: ""}, 
                    { x: 174.16351, y: 432.661616833705, r: ""}, 
                    { x: 261.245265, y: 409.276707182259, r: ""}, 
                    { x: 348.32702, y: 383.427240924989, r: ""}, 
                    { x: 435.408775, y: 352.810632097925, r: ""}, 
                    { x: 522.49053, y: 317.07841450023, r: ""}, 
                    { x: 609.572285, y: 276.464091345367, r: ""}, 
                    { x: 696.65404, y: 228.272298761884, r: ""}, 
                    { x: 783.735795, y: 166.394270777555, r: ""}, 
                    { x: 870.81755, y: 82.4065918515844, r: ""}, 
                    


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
                        align: 'left',
                        font: {
                            size: 8.5,
                        },
                    }
                },
                {
                    label: 'Módulo resiliente de la subrasante 20000psi ',
                    data: [{ x: 0, y: 449.886162484064, r: "20000 psi"}, 
                    { x: 87.081755, y: 428.014921101985, r: ""}, 
                    { x: 174.16351, y: 403.343285541882, r: ""}, 
                    { x: 261.245265, y: 378.196077721959, r: ""}, 
                    { x: 348.32702, y: 352.082465093986, r: ""}, 
                    { x: 435.408775, y: 321.350909909725, r: ""}, 
                    { x: 522.49053, y: 284.720102482371, r: ""}, 
                    { x: 609.572285, y: 242.273983680411, r: ""}, 
                    { x: 696.65404, y: 191.834427388646, r: ""}, 
                    { x: 783.735795, y: 128.792532816949, r: ""}, 
                    { x: 870.81755, y: 43.4887693316487, r: ""}, 
                    


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
                        align: 'left',
                        font: {
                            size: 8.5,
                        },
                    }
                },
                {
                    label: 'Módulo resiliente de la subbase 15000psi ',
                    data: [{ x: 0, y: 1455.5758485198, r: "15000 psi"}, 
                    { x: 87.081755, y: 1431.65705405252, r: ""}, 
                    { x: 174.16351, y: 1404.87657520905, r: ""}, 
                    { x: 261.245265, y: 1377.02185607408, r: ""}, 
                    { x: 348.32702, y: 1346.85740394883, r: ""}, 
                    { x: 435.408775, y: 1311.78086941913, r: ""}, 
                    { x: 522.49053, y: 1271.28850843113, r: ""}, 
                    { x: 609.572285, y: 1225.48430963584, r: ""}, 
                    { x: 696.65404, y: 1172.34058698762, r: ""}, 
                    { x: 783.735795, y: 1108.34264851844, r: ""}, 
                    { x: 870.81755, y: 1028.52625736001, r: ""}, 
                    


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
                        align: 'left',
                        font: {
                            size: 8.5,
                        },
                    }
                },
                {
                    label: 'Módulo resiliente de la subbase 30000psi ',
                    data: [{ x: 0, y: 1499.41643765568, r: "30000 psi"}, 
                    { x: 87.081755, y: 1473.30908126154, r: ""}, 
                    { x: 174.16351, y: 1444.63973082574, r: ""}, 
                    { x: 261.245265, y: 1414.76624625386, r: ""}, 
                    { x: 348.32702, y: 1382.6163681949, r: ""}, 
                    { x: 435.408775, y: 1345.73969053084, r: ""}, 
                    { x: 522.49053, y: 1303.25203360174, r: ""}, 
                    { x: 609.572285, y: 1254.86130013639, r: ""}, 
                    { x: 696.65404, y: 1198.87264269166, r: ""}, 
                    { x: 783.735795, y: 1132.14060797824, r: ""}, 
                    { x: 870.81755, y: 1046.36684976876, r: ""}, 
                    


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
                        align: 'left',
                        font: {
                            size: 8.5,
                        },
                    }
                },
                {
                    label: 'Módulo resiliente de la subbase 50000psi ',
                    data: [{ x: 0, y: 1531.01420108973, r: "50000 psi"}, 
                    { x: 87.081755, y: 1504.05461333453, r: ""}, 
                    { x: 174.16351, y: 1475.13151192006, r: ""}, 
                    { x: 261.245265, y: 1444.63227303798, r: ""}, 
                    { x: 348.32702, y: 1410.57704528601, r: ""}, 
                    { x: 435.408775, y: 1371.78984223074, r: ""}, 
                    { x: 522.49053, y: 1327.73808084321, r: ""}, 
                    { x: 609.572285, y: 1277.43795840569, r: ""}, 
                    { x: 696.65404, y: 1218.92008196688, r: ""}, 
                    { x: 783.735795, y: 1148.5986703892, r: ""}, 
                    { x: 870.81755, y: 1056.4884394857, r: ""}, 
                    


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
                        align: 'left',
                        font: {
                            size: 8.5,
                        },
                    }
                },
                {
                    label: 'Módulo resiliente de la subbase 75000psi ',
                    data: [{ x: 0, y: 1556.92605264484, r: "75000 psi"}, 
                    { x: 87.081755, y: 1528.4191642574, r: ""}, 
                    { x: 174.16351, y: 1498.01634889106, r: ""}, 
                    { x: 261.245265, y: 1466.05283806047, r: ""}, 
                    { x: 348.32702, y: 1431.24175858715, r: ""}, 
                    { x: 435.408775, y: 1391.35920015858, r: ""}, 
                    { x: 522.49053, y: 1345.82552221012, r: ""}, 
                    { x: 609.572285, y: 1294.12125674408, r: ""}, 
                    { x: 696.65404, y: 1233.78528703596, r: ""}, 
                    { x: 783.735795, y: 1161.34339419436, r: ""}, 
                    { x: 870.81755, y: 1068.90676423806, r: ""}, 
                    


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
                        align: 'left',
                        font: {
                            size: 8.5,
                        },
                    }
                },
                {
                    label: 'Módulo resiliente de la subbase 100000psi ',
                    data: [{ x: 0, y: 1576.60995687544, r: "100000 psi"}, 
                    { x: 87.081755, y: 1546.45864182414, r: ""}, 
                    { x: 174.16351, y: 1514.5075266594, r: ""}, 
                    { x: 261.245265, y: 1480.65835886876, r: ""}, 
                    { x: 348.32702, y: 1444.31502355885, r: ""}, 
                    { x: 435.408775, y: 1403.60084922864, r: ""}, 
                    { x: 522.49053, y: 1357.47356947889, r: ""}, 
                    { x: 609.572285, y: 1305.29243309715, r: ""}, 
                    { x: 696.65404, y: 1245.00524831984, r: ""}, 
                    { x: 783.735795, y: 1172.64019655227, r: ""}, 
                    { x: 870.81755, y: 1082.20805642386, r: ""}, 
                    


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
                        align: 'left',
                        font: {
                            size: 8.5,
                        },
                    }
                },
                {
                    label: 'Módulo resiliente de la subbase 200000psi ',
                    data: [{ x: 0, y: 1618.13610726594, r: "200000 psi"}, 
                    { x: 87.081755, y: 1588.68905655406, r: ""}, 
                    { x: 174.16351, y: 1557.00212457208, r: ""}, 
                    { x: 261.245265, y: 1522.99155984274, r: ""}, 
                    { x: 348.32702, y: 1485.92069123486, r: ""}, 
                    { x: 435.408775, y: 1442.98845861475, r: ""}, 
                    { x: 522.49053, y: 1393.09096694724, r: ""}, 
                    { x: 609.572285, y: 1336.33528145184, r: ""}, 
                    { x: 696.65404, y: 1271.01737539304, r: ""}, 
                    { x: 783.735795, y: 1191.93782004428, r: ""}, 
                    { x: 870.81755, y: 1087.11946831282, r: ""}, 
                    
                    


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
                        align: 'left',
                        font: {
                            size: 8.5,
                        },
                    }
                },
                {
                    label: 'Módulo resiliente de la subbase 400000psi ',
                    data: [{ x: 0, y: 1659.9200246185, r: "400000 psi"}, 
                    { x: 87.081755, y: 1627.6440418807, r: ""}, 
                    { x: 174.16351, y: 1593.33734435013, r: ""}, 
                    { x: 261.245265, y: 1557.79756966031, r: ""}, 
                    { x: 348.32702, y: 1519.13193168551, r: ""}, 
                    { x: 435.408775, y: 1474.618456641, r: ""}, 
                    { x: 522.49053, y: 1423.46331360519, r: ""}, 
                    { x: 609.572285, y: 1365.02619775655, r: ""}, 
                    { x: 696.65404, y: 1296.61471744082, r: ""}, 
                    { x: 783.735795, y: 1213.92459672604, r: ""}, 
                    { x: 870.81755, y: 1105.62523336528, r: ""}, 
                     
                    

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
                        align: 'left',
                        font: {
                            size: 8.5,
                        },
                    }
                },
                {
                    label: 'Módulo resiliente de la subbase 600000psi ',
                    data: [{ x: 0, y: 1686.49739691615, r: "600000 psi"}, 
                    { x: 87.081755, y: 1654.42684880806, r: ""}, 
                    { x: 174.16351, y: 1618.48000602511, r: ""}, 
                    { x: 261.245265, y: 1581.22613918504, r: ""}, 
                    { x: 348.32702, y: 1540.95057217396, r: ""}, 
                    { x: 435.408775, y: 1494.99178852734, r: ""}, 
                    { x: 522.49053, y: 1442.27795413068, r: ""}, 
                    { x: 609.572285, y: 1382.15369148292, r: ""}, 
                    { x: 696.65404, y: 1312.36667886151, r: ""}, 
                    { x: 783.735795, y: 1228.06313311639, r: ""}, 
                    { x: 870.81755, y: 1115.82146749812, r: ""}, 
                    


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
                        align: 'left',
                        font: {
                            size: 8.5,
                        },
                    }
                },
                {
                    label: 'Módulo resiliente de la subbase 1000000psi ',
                    data: [{ x: 0, y: 1719.25529906153, r: "1000000 psi"}, 
                    { x: 87.081755, y: 1685.09622563992, r: ""}, 
                    { x: 174.16351, y: 1647.88029656647, r: ""}, 
                    { x: 261.245265, y: 1609.40702224405, r: ""}, 
                    { x: 348.32702, y: 1567.66688165584, r: ""}, 
                    { x: 435.408775, y: 1519.9896317719, r: ""}, 
                    { x: 522.49053, y: 1465.80174145503, r: ""}, 
                    { x: 609.572285, y: 1404.13895331577, r: ""}, 
                    { x: 696.65404, y: 1331.29952195344, r: ""}, 
                    { x: 783.735795, y: 1242.61561990382, r: ""}, 
                    { x: 870.81755, y: 1129.26474339331, r: ""}, 
                    


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
                        align: 'left',
                        font: {
                            size: 8.5,
                        },
                    }
                },



                {
                    label: 'Línea trans',
                    data: [{
                            x: 872.09665,
                            y: 876.18858,
                            r: ""
                        },
                        {
                            x: 1749.21687,
                            y: 0,
                            r: " "
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
                            size: 8.5,
                        },
                    }
                },
                {
                    label: 'Líneas del módulo K 50 pci',
                    data: [{
                            x: 871.82018,
                            y: 1315.635535,
                            r: "50 pci "
                        },
                        {
                            x: 1310.440905
                            ,
                            y: 875.769082
                            ,
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
                        align: 'left',
                        padding: -2,
                        font: {
                            size: 8.5,
                        },
                    }
                },
                {
                    label: 'Líneas del módulo K 100 pci',
                    data: [{
                            x: 872.147424
                            ,
                            y: 1445.28984
                            ,
                            r: "100 pci "
                        },
                        {
                            x: 1440.51251
                            ,
                            y: 875.651395
                            ,
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
                        align: 'left',
                        padding: -2,
                        font: {
                            size: 8.5,
                        },
                    }
                },
                {
                    label: 'Líneas del módulo K 200 pci',
                    data: [{
                            x: 872.041388
                            ,
                            y: 1576.21433
                            ,
                            r: "200 pci "
                        },
                        {
                            x: 1572.117236
                            ,
                            y: 875.822877
                            ,
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
                        align: 'left',
                        padding: -2,
                        font: {
                            size: 8.5,
                        },
                    }
                },
                {
                    label: 'Líneas del módulo K 300 pci',
                    data: [{
                            x: 870.628557
                            ,
                            y: 1651.129013
                            ,
                            r: "300 pci "
                        },
                        {
                            x: 1645.610004
                            ,
                            y: 876.053994
                            ,
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
                        align: 'left',
                        padding: -2,
                        font: {
                            size: 8.5,
                        },
                    }
                },
                {
                    label: 'Líneas del módulo K 400 pci',
                    data: [{
                            x: 869.924127
                            ,
                            y: 1710.043215
                            ,
                            r: "400 pci "
                        },
                        {
                            x: 1704.223214
                            ,
                            y: 874.738203
                            ,
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
                        align: 'left',
                        padding: -2,
                        font: {
                            size: 8.5,
                        },
                    }
                },
                {
                    label: 'Líneas del módulo K 500 pci',
                    data: [{
                            x: 871.013177
                            ,
                            y: 1759.624332
                            ,
                            r: "500 pci "
                        },
                        {
                            x: 1752.130949
                            ,
                            y: 875.588721
                            ,
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
                        align: 'left',
                        padding: -2,
                        font: {
                            size: 8.5,
                        },
                    }
                },
                {
                    label: 'Líneas del módulo K 600 pci',
                    data: [{
                            x: 908.028992
                            ,
                            y: 1759.853879
                            ,
                            r: " "
                        },
                        {
                            x: 1752.363088
                            ,
                            y: 912.186011
                            ,
                            r: "600 pci"
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
                            size: 8.5,
                        },
                    }
                },
                {
                    label: 'Líneas del módulo K 800 pci',
                    data: [{
                            x: 959.777606
                            ,
                            y: 1759.93869
                            ,
                            r: ""
                        },
                        {
                            x: 1750.913029
                            ,
                            y: 961.655326
                            ,
                            r: "800 pci "
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
                            size: 8.5,
                        },
                    }
                },
                {
                    label: 'Líneas del módulo K 1000 pci',
                    data: [{
                            x: 1002.099304
                            ,
                            y: 1760.679444
                            ,
                            r: ""
                        },
                        {
                            x: 1750.249962
                            ,
                            y: 1008.248052
                            ,
                            r: "1000 pci "
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
                            size: 8.5,
                        },
                    }
                },
                {
                    label: 'Líneas del módulo K 1500 pci',
                    data: [{
                            x: 1079.107954
                            ,
                            y: 1759.435807
                            ,
                            r: ""
                        },
                        {
                            x: 1751.149556
                            ,
                            y: 1085.778824
                            ,
                            r: "1500 pci "
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
                            size: 8.5,
                        },
                    }
                },
                {
                    label: 'Líneas del módulo K 2000 pci',
                    data: [{
                            x: 1134.98136
                            ,
                            y: 1759.53864,
                            r: " "
                        },
                        {
                            x: 1689.447869,
                            y: 1202.722298
                            ,
                            r: "2000 pci"
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
                            size: 8.5,
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
                        align: 'right',
                        padding: -2,
                        font: {
                            size: 8.5,
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
                        min: -175.2363088,
                        max: 1752.363088,
                        stepSize: 175.2363088,
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
                        min: 0,
                        max: 1760.679444,
                        stepSize: 176.0679444,
                        display: false

                    }
                }],

            }
        }
    });

    var espesorsubbase = parseFloat($('#espesorsubbase').val());    
    if ((6 <= espesorsubbase) && (espesorsubbase <= 18)) {
        var espesorsubbasegraf = (espesorsubbase*-54.50604063)-(-1090.120813);
        $("#espesorsubbasegraf").val(espesorsubbasegraf);
    } else if ((espesorsubbase < 6)) {
        alert("Valores entre 6 y 18");
        $('#espesorsubbase').val("");
        $("#espesorsubbasegraf").val("");
    } else if (18 < espesorsubbase) {
        alert("Valores entre 6 y 18");
        $('#espesorsubbase').val("");
        $("#espesorsubbasegraf").val("");
    }
    else {
        
    }

    var espesorsubbasex = parseFloat($('#espesorsubbasegraf').val()); 
    var mesubbase = parseFloat($('#moduloresilientesubbase').val());
    var me15000 = polino9(1455.5758485198, -0.280695294961333, 0.000650719914119691, -1.17031017907721e-5, 7.76468844776446e-8, -2.71315789279747e-10, 5.35926188952214e-13, -6.05223066733106e-16, 3.65013245924936e-19, -9.13770056032357e-23, espesorsubbasex); 
    var me30000 = polino9(1499.41643765568, -0.30718051828444, 0.000616269186139107, -1.05572971733636e-5, 6.86153533990819e-8, -2.37675518155456e-10, 4.68669428353025e-13, -5.3191345040921e-16, 3.24483528484855e-19, -8.26706538703426e-23, espesorsubbasex); 
    var me50000 = polino9(1531.01420108973, -0.272740755230188, -0.000739050621632487, 4.97104701935314e-6, -1.78416748042309e-8, 2.91069460200966e-11, -1.42776144639728e-14, -2.04140498942003e-17, 3.06711850292186e-20, -1.19439283957851e-23, espesorsubbasex); 
    var me75000 = polino9(1556.92605264484, -0.3496383279562, 0.000917934696190059, -1.27242324197141e-5, 7.86514746664579e-08, -2.70119565604077e-10, 5.36236324983654e-13, -6.15556948098948e-16, 3.79837989787809e-19, -9.76948884635113e-23, espesorsubbasex); 
    var me100000 = polino9(1576.60995687544, -0.367126528173685, 0.000783070980105549, -9.98424729914404e-6, 5.62709203677514e-8, -1.78270675998959e-10, 3.28455131474135e-13, -3.51315729310328e-16, 2.02487403303234e-19, -4.87688610638211e-23, espesorsubbasex); 
    var me200000 = polino9(1618.13610726594, -0.379763294011354, 0.00142340088495985, -1.73551197804045e-5, 9.75097833588734e-8, -3.08086174627409e-10, 5.6752070762018e-13, -6.08260685700638e-16, 3.52626358423623e-19, -8.58487630427555e-23, espesorsubbasex); 
    var me400000 = polino9(1659.9200246185, -0.381691560149193, 0.000671655463520437, -1.09325546873151e-5, 7.28044007303197e-8, -2.61139283808109e-10, 5.31730041941625e-13, -6.20758789186273e-16, 3.88062155479935e-19, -1.00988934945443e-22, espesorsubbasex); 
    var me600000 = polino9(1686.49739691615, -0.336437275633216, -0.00025542953517288, -3.49820174960769e-6, 3.65876964281142e-8, -1.51379839219423e-10, 3.2597442269338e-13, -3.90278953716451e-16, 2.47318589175562e-19, -6.50659227275639e-23, espesorsubbasex); 
    var me1000000 = polino9(1719.25529906153, -0.386433327570558, 0.000382483995053917, -9.6885646598821e-6, 7.16342185569374e-8, -2.70081318420878e-10, 5.66531495110531e-13, -6.74118847308419e-16, 4.26225464283867e-19, -1.11462540209866e-22, espesorsubbasex); 
    $("#moduloresilientesubbasegrafrevisar").val(me15000);
    if ((15000 <= mesubbase) && (mesubbase <= 30000)) {
        var me = interpo(15000, 30000, mesubbase, me15000, me30000);
        $("#moduloresilientesubbasegraf").val(me);
    } else if ((30000 < mesubbase) && (mesubbase <= 50000)) {
        var me = interpo(30000, 50000, mesubbase, me30000, me50000);
        $("#moduloresilientesubbasegraf").val(me);
    } else if ((50000 < mesubbase) && (mesubbase <= 75000)) {
        var me = interpo(50000, 75000, mesubbase, me50000, me75000);
        $("#moduloresilientesubbasegraf").val(me);
    } else if ((75000 < mesubbase) && (mesubbase <= 100000)) {
        var me = interpo(75000, 100000, mesubbase, me75000, me100000);
        $("#moduloresilientesubbasegraf").val(me);
    } else if ((100000 < mesubbase) && (mesubbase <= 200000)) {
        var me = interpo(100000, 200000, mesubbase, me100000, me200000);
        $("#moduloresilientesubbasegraf").val(me);
    } else if ((200000 < mesubbase) && (mesubbase <= 400000)) {
        var me = interpo(200000, 400000, mesubbase, me200000, me400000);
        $("#moduloresilientesubbasegraf").val(me);
    } else if ((400000 < mesubbase) && (mesubbase <= 600000)) {
        var me = interpo(400000, 600000, mesubbase, me400000, me600000);
        $("#moduloresilientesubbasegraf").val(me);
    } else if ((600000 < mesubbase) && (mesubbase <= 1000000)) {
        var me = interpo(600000, 1000000, mesubbase, me600000, me1000000);
        $("#moduloresilientesubbasegraf").val(me);
    } else {
        $("#moduloresilientesubbasegraf").val("");
    }


    var mrsubrasante = parseFloat($('#moduloresiliente').val());
    var mr1000 = polino9(834.928541906177, -0.122183242812753, -0.000835480022942647, 7.24535379958979E-06, -3.92073662425219E-08, 1.28484747147217E-10, -2.59971745194577E-13, 3.13181789864238E-16, -2.04850580765115E-19, 5.57803467195687E-23, espesorsubbasex); 
    var mr2000 = polino9(745.84986295551, -0.180074846372008, 8.96626734174788E-05, -3.73212515114574E-06, 2.61281600799634E-08, -9.39804276067768E-11, 1.91267032594034E-13, -2.2366025409747E-16, 1.39780165847039E-19, -3.61722338882216E-23, espesorsubbasex); 
    var mr3000 = polino9(692.634432449936, -0.246156862936914, 0.00138745619915426, -1.52627419538476E-05, 7.81109248393363E-08, -2.24160398576423E-10, 3.76805452616778E-13, -3.6888001626283E-16, 1.94575414281816E-19, -4.28222445445351E-23, espesorsubbasex); 
    var mr5000 = polino9(626.298621874302, -0.233462916687131, 0.00127525547577534, -1.77378833541297E-05, 1.09114915325392E-07, -3.67490288200045E-10, 7.16067816478559E-13, -8.09088485108043E-16, 4.92801590254861E-19, -1.2534819529245E-22, espesorsubbasex); 
    var mr7000 = polino9(581.304927647113, -0.143986603245139, -0.00135423873143736, 1.16004357550992E-05, -5.98512004401641E-08, 1.79807625386164E-10, -3.20898825090579E-13, 3.32381836404231E-16, -1.83833204176327E-19, 4.17242748044905E-23, espesorsubbasex); 
    var mr10000 = polino9(534.716569688171, -0.225872478447855, 0.000620391940174159, -8.11964025615453E-06, 4.68175640477853E-08, -1.52668582636961E-10, 2.88387691412808E-13, -3.15388664725137E-16, 1.85868323745975E-19, -4.58773379585269E-23, espesorsubbasex); 
    var mr12000 = polino9(514.04854882881, -0.263076989911497, 0.00128392499755137, -1.84279433597112E-05, 1.16428535257285E-07, -4.0137743129165E-10, 7.96800813670324E-13, -9.11874364922911E-16, 5.59307391333503E-19, -1.42590491786504E-22, espesorsubbasex); 
    var mr16000 = polino9(474.954583162441, -0.28148242062889, 0.00145157532824669, -1.70001472952208E-05, 9.63079385130072E-08, -3.08598490511569E-10, 5.76409654327783E-13, -6.23427359869153E-16, 3.62036285908256E-19, -8.75287299039841E-23, espesorsubbasex); 
    var mr20000 = polino9(449.886162484064, -0.291995292995125, 0.00164015469272272, -2.23676324822009E-05, 1.35310610271944E-07, -4.4446343914345E-10, 8.421230631773E-13, -9.24373786934443E-16, 5.47184626479186E-19, -1.35486794207393E-22, espesorsubbasex);

    if ((1000 <= mrsubrasante) && (mrsubrasante <= 2000)) {
        var mr = interpo(1000, 2000, mrsubrasante, mr1000, mr2000);
        $("#moduloresilientegraf").val(mr);
        $("#lt").val((mr-1747.358926)/(-0.998937842));
    } else if ((2000 < mrsubrasante) && (mrsubrasante <= 3000)) {
        var mr = interpo(2000, 3000, mrsubrasante, mr2000, mr3000);
        $("#moduloresilientegraf").val(mr);
        $("#lt").val((mr-1747.358926)/(-0.998937842));
    } else if ((3000 < mrsubrasante) && (mrsubrasante <= 5000)) {
        var mr = interpo(3000, 5000, mrsubrasante, mr3000, mr5000);
        $("#moduloresilientegraf").val(mr);
        $("#lt").val((mr-1747.358926)/(-0.998937842));
    } else if ((5000 < mrsubrasante) && (mrsubrasante <= 7000)) {
        var mr = interpo(5000, 7000, mrsubrasante, mr5000, mr7000);
        $("#moduloresilientegraf").val(mr);
        $("#lt").val((mr-1747.358926)/(-0.998937842));
    } else if ((7000 < mrsubrasante) && (mrsubrasante <= 10000)) {
        var mr = interpo(7000, 10000, mrsubrasante, mr7000, mr10000);
        $("#moduloresilientegraf").val(mr);
        $("#lt").val((mr-1747.358926)/(-0.998937842));
    } else if ((10000 < mrsubrasante) && (mrsubrasante <= 12000)) {
        var mr = interpo(10000, 12000, mrsubrasante, mr10000, mr12000);
        $("#moduloresilientegraf").val(mr);
        $("#lt").val((mr-1747.358926)/(-0.998937842));
    } else if ((12000 < mrsubrasante) && (mrsubrasante <= 16000)) {
        var mr = interpo(12000, 16000, mrsubrasante, mr12000, mr16000);
        $("#moduloresilientegraf").val(mr);
        $("#lt").val((mr-1747.358926)/(-0.998937842));
    } else if ((16000 < mrsubrasante) && (mrsubrasante <= 20000)) {
        var mr = interpo(16000, 20000, mrsubrasante, mr16000, mr20000);
        $("#moduloresilientegraf").val(mr);
        $("#lt").val((mr-1747.358926)/(-0.998937842));
    } else {
        $("#moduloresilientegraf").val("");
    }



    var moduloresilientesubbasegraf = parseFloat($("#moduloresilientesubbasegraf").val());
    var lt = parseFloat($("#lt").val());
    var k50 = (2189.9317738528)-(1.00284010291579*lt);
    var k100 = (2319.39121510403)-(1.00224039047972*lt);
    var k200 = (2448.64884762877)-(1.00045081569788*lt);
    var k300 = (2521.86268951271)-(1.00012074036844*lt);
    var k400 = (2581.01622079794)-(1.00120571291218*lt);
    var k500 = (2633.5218860695)-(1.00331151975503*lt);
    var k600 = (2671.4681371881)-(1.00394840407087*lt);
    var k800 = (2728.38792723477)-(1.00903504159766*lt);
    var k1000 = (2768.51251401069)-(1.00572175421697*lt);
    var k1500 = (2841.13760483272)-(1.00240369237412*lt);
    var k2000 = (2899.33005896956)-(1.00423800703385*lt);

    if ((k50 <= moduloresilientesubbasegraf) && (moduloresilientesubbasegraf <= k100)) {
        var ksubrasante = interpo(k50, k100, moduloresilientesubbasegraf, 50, 100);
        $("#ksubrasante").val(ksubrasante);
        $("#kredondeado").val((Math.ceil(ksubrasante / 0.5) * 0.5).toFixed(2));
    } else if ((k100 < moduloresilientesubbasegraf) && (moduloresilientesubbasegraf <= k200)) {
        var ksubrasante = interpo(k100, k200, moduloresilientesubbasegraf, 100, 200);
        $("#ksubrasante").val(ksubrasante);
        $("#kredondeado").val((Math.ceil(ksubrasante / 0.5) * 0.5).toFixed(2));
    } else if ((k200 < moduloresilientesubbasegraf) && (moduloresilientesubbasegraf <= k300)) {
        var ksubrasante = interpo(k200, k300, moduloresilientesubbasegraf, 200, 300);
        $("#ksubrasante").val(ksubrasante);
        $("#kredondeado").val((Math.ceil(ksubrasante / 0.5) * 0.5).toFixed(2));
    } else if ((k300 < moduloresilientesubbasegraf) && (moduloresilientesubbasegraf <= k400)) {
        var ksubrasante = interpo(k300, k400, moduloresilientesubbasegraf, 300, 400);
        $("#ksubrasante").val(ksubrasante);
        $("#kredondeado").val((Math.ceil(ksubrasante / 0.5) * 0.5).toFixed(2));
    } else if ((k400 < moduloresilientesubbasegraf) && (moduloresilientesubbasegraf <= k500)) {
        var ksubrasante = interpo(k400, k500, moduloresilientesubbasegraf, 400, 500);
        $("#ksubrasante").val(ksubrasante);
        $("#kredondeado").val((Math.ceil(ksubrasante / 0.5) * 0.5).toFixed(2));
    } else if ((k500 < moduloresilientesubbasegraf) && (moduloresilientesubbasegraf <= k600)) {
        var ksubrasante = interpo(k500, k600, moduloresilientesubbasegraf, 500, 600);
        $("#ksubrasante").val(ksubrasante);
        $("#kredondeado").val((Math.ceil(ksubrasante / 0.5) * 0.5).toFixed(2));

    } else if ((k600 < moduloresilientesubbasegraf) && (moduloresilientesubbasegraf <= k800)) {
        var ksubrasante = interpo(k600, k800, moduloresilientesubbasegraf, 600, 800);
        $("#ksubrasante").val(ksubrasante);
        $("#kredondeado").val((Math.ceil(ksubrasante / 0.5) * 0.5).toFixed(2));

    } else if ((k800 < moduloresilientesubbasegraf) && (moduloresilientesubbasegraf <= k1000)) {
        var ksubrasante = interpo(k800, k1000, moduloresilientesubbasegraf, 800, 1000);
        $("#ksubrasante").val(ksubrasante);
        $("#kredondeado").val((Math.ceil(ksubrasante / 0.5) * 0.5).toFixed(2));

    } else if ((k1000 < moduloresilientesubbasegraf) && (moduloresilientesubbasegraf <= k1500)) {
        var ksubrasante = interpo(k1000, k1500, moduloresilientesubbasegraf, 1000, 1500);
        $("#ksubrasante").val(ksubrasante);
        $("#kredondeado").val((Math.ceil(ksubrasante / 0.5) * 0.5).toFixed(2));

    } else if ((k1500 < moduloresilientesubbasegraf) && (moduloresilientesubbasegraf <= k2000)) {
        var ksubrasante = interpo(k1500, k2000, moduloresilientesubbasegraf, 1500, 2000);
        $("#ksubrasante").val(ksubrasante);
        $("#kredondeado").val((Math.ceil(ksubrasante / 0.5) * 0.5).toFixed(2));

    } else {
        $("#ksubrasante").val("");
        $("#kredondeado").val("")
    }





    var tz1 = { x: document.getElementById("espesorsubbasegraf").value, y: document.getElementById("moduloresilientegraf").value, r: "Mr" + " = " + document.getElementById("Modulor").value };
    window.myChart4.data.datasets[35].data[0, 0, 0] = tz1;
    var tz2 = { x: document.getElementById("espesorsubbasegraf").value, y: 876.18858, r: "Dsb" + " = " + document.getElementById("espesorsubbase").value };
    window.myChart4.data.datasets[35].data[1, 1, 1] = tz2;
    var tz3 = { x: document.getElementById("espesorsubbasegraf").value, y: document.getElementById("moduloresilientesubbasegraf").value, r: "Esb" + " = " + document.getElementById("moduloresilientesubbase").value };
    window.myChart4.data.datasets[35].data[2, 2, 2] = tz3;
    var tz4 = { x: document.getElementById("lt").value, y: document.getElementById("moduloresilientesubbasegraf").value, r: "K" + " = " + document.getElementById("kredondeado").value };
    window.myChart4.data.datasets[35].data[3, 3, 3] = tz4;
    var tz5 = { x: document.getElementById("lt").value, y: document.getElementById("moduloresilientegraf").value, r: "" };
    window.myChart4.data.datasets[35].data[4, 4, 4] = tz5;
    var tz6 = { x: document.getElementById("espesorsubbasegraf").value, y: document.getElementById("moduloresilientegraf").value, r: "Mr" + " = " + document.getElementById("Modulor").value };
    window.myChart4.data.datasets[35].data[5, 5, 5] = tz6;
    window.myChart4.update();
}