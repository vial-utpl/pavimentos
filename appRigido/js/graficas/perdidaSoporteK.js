$(document).ready(function() {
    console.log("Start...");

    

});

var interpo = function(a, b, c, d, e) {
    return (d + (((c - a) * (e - d)) / (b - a)));
}

function loadGraph6() {
    var ctx = document.getElementById("perdidaSoporteK").getContext('2d');
    if(window.myChart6 != null){
        window.myChart6.destroy();
    }
    window.myChart6 = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                    data: [{
                        x: 97.5,
                        y: -10,
                        r: "Módulo efectivo de subrasante k(pci)"
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
                            size: 12,
                        },
                    },

                },
                {
                    label: 'Módulo efectivo de subrasante ',
                    data: [{
                            x: 0,
                            y: 0,
                            r: 1
                        }, {
                            x: 37.2417849743289,
                            y: 0,
                            r: 5
                        },
                        {
                            x: 53.2809487435822,
                            y: 0,
                            r: 10
                        },
                        {
                            x: 90.5227337179111,
                            y: 0,
                            r: 50
                        },
                        {
                            x: 106.561897487164,
                            y: 0,
                            r: 100
                        },
                        {
                            x: 143.803682461493,
                            y: 0,
                            r: 500
                        },
                        {
                            x: 159.842846230747,
                            y: 0,
                            r: 1000
                        },
                        {
                            x: 175.88201,
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
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        align: 'bottom',
                        font: {
                            size: 8.5,
                        },
                    }
                },
                {
                    data: [{
                        x: -10,
                        y: 102,
                        r: "Módulo efectivo de subrasante corregido k(pci)"
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
                        rotation: -90,
                        color: 'rgba(0, 0, 0, 1)',
                        font: {
                            size: 12,
                        },
                    },

                },
                {
                    label: 'Módulo efectivo de subrasante ',
                    data: [{
                            x: 0,
                            y: 0,
                            r: 1
                        }, {
                            x: 0,
                            y: 41.8766792502795,
                            r: 5
                        },
                        {
                            x: 0,
                            y: 59.9119833333333,
                            r: 10
                        },
                        {
                            x: 0,
                            y: 101.788662583613,
                            r: 50
                        },
                        {
                            x: 0,
                            y: 119.823966666667,
                            r: 100
                        },
                        {
                            x: 0,
                            y: 161.700645916946,
                            r: 500
                        },
                        {
                            x: 0,
                            y: 179.73595,
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
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
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
                    label: 'Perdida de soporte LS3',
                    data: [{
                            x: 18.08161,
                            y: 0,
                            r: ""
                        },
                        {
                            x: 175.88201,
                            y: 96.22049,
                            r: "LS = 3 "
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
                    label: 'Perdida de soporte LS2',
                    data: [{
                            x: 7.30972,
                            y: 0,
                            r: ""
                        },
                        {
                            x: 175.88201,
                            y: 122.3599,
                            r: "LS = 2 "
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
                    label: 'Perdida de soporte LS1',
                    data: [{
                            x: 4.40602,
                            y: 0,
                            r: ""
                        },
                        {
                            x: 175.88201,
                            y: 161.50248,
                            r: "LS = 1 "
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
                    label: 'Perdida de soporte LS0',
                    data: [{
                            x: 0,
                            y: 0,
                            r: ""
                        },
                        {
                            x: 157.80367,
                            y: 179.73595,
                            r: "LS = 0 "
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
                    ],
                    pointRadius: 2.5,
                    tension: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(170, 12, 12, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 1.8,
                    datalabels: {
                        font: {
                            size: 8.5,
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
                scaleLabel: {
                    display: false,
                },
                xAxes: [{

                    gridLines: {
                        display: false,
                        tickMarkLength: 0,
                    },


                    type: 'linear',
                    position: 'bottom',
                    ticks: {
                        min: -15,
                        max: 184.673015,
                        stepSize: 8.7941005,
                        display: false,
                        fontColor: 'rgba(255, 255, 255, 1)',
                    }
                }],
                yAxes: [{

                    gridLines: {
                        display: false,
                        tickMarkLength: 0,
                    },

                    type: 'linear',
                    position: 'bottom',
                    ticks: {
                        min: -15,
                        max: 180,
                        stepSize: 20,
                        display: false

                    }
                }],

            }
        }
    });




    var kgraf = parseFloat($('#usoK').val());
    var kx = 53.2809487435822 * Math.log10(kgraf);

    var l0 = (kx * 1.13898460029478) + (0);
    var l1 = (kx * 0.941837279959719) + (-4.14975389224813);
    var l2 = (kx * 0.725860104291162) + (-5.30583412153918);
    var l3 = (kx * 0.60976074838847) + (-11.0254560456684);
    var valorsoporte = parseFloat($('#valorLsoporte').val());


    if ((0 <= valorsoporte) && (valorsoporte < 0.5)) {
        valorsoporte = 0
        var ly = interpo(0, 1, valorsoporte, l0, l1)
        $("#ly").val(ly)
    } else if ((0.5 <= valorsoporte) && (valorsoporte < 1.5)) {
        valorsoporte = 1
        var ly = interpo(0, 1, valorsoporte, l0, l1)
        $("#ly").val(ly)
    }
     else if ((1.5 <= valorsoporte) && (valorsoporte < 2.5)) {
        valorsoporte = 2
        var ly = interpo(1, 2, valorsoporte, l1, l2)
        $("#ly").val(ly)
    } else if ((2.5 <= valorsoporte) && (valorsoporte <= 3)) {
        valorsoporte = 3
        var ly = interpo(2, 3, valorsoporte, l2, l3)
        $("#ly").val(ly)
    }
    var distanciay = parseFloat($('#ly').val());
    var distydiv = distanciay / 59.9119833333333;

    var kcs = Math.pow(10, distydiv);
    $("#Kcorr").val(kcs.toFixed(2));

    var s1 = { x: kx, y: 0, r: "K" + " = " + kgraf.toFixed(2) };
    window.myChart6.data.datasets[8].data[0, 0, 0] = s1;
    var s2 = { x: kx, y: document.getElementById("ly").value, r: "Ls" + "=" + $('#valorLsoporte').val() };
    window.myChart6.data.datasets[8].data[1, 1, 1] = s2;
    var s3 = { x: 0, y: document.getElementById("ly").value, r: "Kcorr" + " = " + kcs.toFixed(2) };
    window.myChart6.data.datasets[8].data[2, 2, 2] = s3;
    window.myChart6.update();

}