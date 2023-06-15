$(document).ready(function() {
    EpMr1();
});
Chart.plugins.register({
    beforeDraw: function(chartInstance) {
        var ctx = chartInstance.chart.ctx;
        ctx.fillStyle = "rgba(255, 255, 255)";
        ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);

    }
});
function EpMr1() {
    var ctx = document.getElementById("CFS").getContext('2d');
    if(window.graficaCFS != null){
        window.graficaCFS.destroy();
    }
    window.graficaCFS= new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                data: [{
                    x: 5,
                    y: 20,
                    r: 100
                }, {
                    x: 7.4096,
                    y: 15.3215,
                    r: 100
                }, {
                    x: 10,
                    y: 11.6293,
                    r: 100
                }, {
                    x: 10.909,
                    y: 10.5258,
                    r: 100
                }, {
                    x: 12.0674,
                    y: 9.3602,
                    r: 100
                }, {
                    x: 15,
                    y: 7.5248,
                    r: 100
                }, {
                    x: 17.0754,
                    y: 6.6641,
                    r: 100
                }, {
                    x: 20,
                    y: 5.7764,
                    r: 100
                }, {
                    x: 25,
                    y: 4.7926,
                    r: 100
                }, {
                    x: 30,
                    y: 4.1095,
                    r: 100
                }, {
                    x: 35,
                    y: 3.6202,
                    r: 100
                }, {
                    x: 40,
                    y: 3.3097,
                    r: 100
                }, {
                    x: 45,
                    y: 3,
                    r: 100
                }, {
                    x: 50,
                    y: 2.7865,
                    r: 100
                }],
                pointStyle: 'line',
                showLine: true,
                borderColor: ['#F7DC6F'],
                backgroundColor: ['rgba(0,0,0,0)'],
                label: ['Ep/Mr=100'],
                pointRadius:0,
                pointBackgroundColor: ['#F7DC6F', '#F7DC6F', '#F7DC6F', '#F7DC6F', '#F7DC6F', '#F7DC6F', '#F7DC6F', '#F7DC6F', '#F7DC6F', '#F7DC6F', '#F7DC6F', '#F7DC6F', '#F7DC6F', '#F7DC6F'],
                borderWidth: 1,
                datalabels: {
                    display: false,
                }
            }, {
                data: [{
                    x: 5,
                    y: 25.5497,
                    r: 50
                }, {
                    x: 7.4096,
                    y: 19.1343,
                    r: 50
                }, {
                    x: 10,
                    y: 15,
                    r: 50
                }, {
                    x: 10.909,
                    y: 13.9841,
                    r: 50
                }, {
                    x: 12.0674,
                    y: 12.6221,
                    r: 50
                }, {
                    x: 15,
                    y: 10,
                    r: 50
                }, {
                    x: 17.0754,
                    y: 8.7934,
                    r: 50
                }, {
                    x: 20,
                    y: 7.6385,
                    r: 50
                }, {
                    x: 25,
                    y: 6.4672,
                    r: 50
                }, {
                    x: 30,
                    y: 5.6031,
                    r: 50
                }, {
                    x: 35,
                    y: 5,
                    r: 50
                }, {
                    x: 40,
                    y: 4.6423,
                    r: 50
                }, {
                    x: 45,
                    y: 4.3181,
                    r: 50
                }, {
                    x: 50,
                    y: 4,
                    r: 50
                }],
                pointStyle: 'line',
                showLine: true,
                borderColor: ['#28B463'],
                backgroundColor: ['rgba(0, 0, 0, 0)'],
                label: ['Ep/Mr=50'],
                pointRadius:0,
                pointBackgroundColor: ['#28B463', '#28B463', '#28B463', '#28B463', '#28B463', '#28B463', '#28B463', '#28B463', '#28B463', '#28B463', '#28B463', '#28B463', '#28B463', '#28B463'],
                borderWidth: 1,
                datalabels: {
                    display: false,
                }
            }, {
                data: [{
                    x: 5,
                    y: 33.2776,
                    r: 20
                }, {
                    x: 7.4096,
                    y: 26.2965,
                    r: 20
                }, {
                    x: 10,
                    y: 20.7,
                    r: 20
                }, {
                    x: 10.909,
                    y: 19,
                    r: 20
                }, {
                    x: 12.0674,
                    y: 17.5462,
                    r: 20
                }, {
                    x: 15,
                    y: 14.829,
                    r: 20
                }, {
                    x: 17.0754,
                    y: 13.4521,
                    r: 20
                }, {
                    x: 20,
                    y: 12.0083,
                    r: 20
                }, {
                    x: 25,
                    y: 10.1,
                    r: 20
                }, {
                    x: 30,
                    y: 9.1,
                    r: 20
                }, {
                    x: 35,
                    y: 8.5,
                    r: 20
                }, {
                    x: 40,
                    y: 7.9092,
                    r: 20
                }, {
                    x: 45,
                    y: 7.4208,
                    r: 20
                }, {
                    x: 50,
                    y: 7,
                    r: 20
                }],
                pointStyle: 'line',
                showLine: true,
                borderColor: ['#CB4335'],
                backgroundColor: ['rgba(0, 0, 0, 0)'],
                label: ['Ep/Mr=20'],
                pointRadius:0,
                pointBackgroundColor: ['#CB4335', '#CB4335', '#CB4335', '#CB4335', '#CB4335', '#CB4335', '#CB4335', '#CB4335', '#CB4335', '#CB4335', '#CB4335', '#CB4335', '#CB4335', '#CB4335'],
                borderWidth: 1,
                datalabels: {
                    display: false,
                }
            }, {
                data: [{
                    x: 5,
                    y: 40,
                    r: 10
                }, {
                    x: 7.4096,
                    y: 33.1033,
                    r: 10
                }, {
                    x: 10,
                    y: 27.0974,
                    r: 10
                }, {
                    x: 10.909,
                    y: 25.4762,
                    r: 10
                }, {
                    x: 12.0674,
                    y: 23.3789,
                    r: 10
                }, {
                    x: 15,
                    y: 20,
                    r: 10
                }, {
                    x: 17.0754,
                    y: 18.8082,
                    r: 10
                }, {
                    x: 20,
                    y: 17.4817,
                    r: 10
                }, {
                    x: 25,
                    y: 15.9219,
                    r: 10
                }, {
                    x: 30,
                    y: 14.6872,
                    r: 10
                }, {
                    x: 35,
                    y: 13.8017,
                    r: 10
                }, {
                    x: 40,
                    y: 12.791,
                    r: 10
                }, {
                    x: 45,
                    y: 11.8801,
                    r: 10
                }, {
                    x: 50,
                    y: 10.9927,
                    r: 10
                }],
                pointStyle: 'line',
                showLine: true,
                borderColor: ['#BFC9CA'],
                backgroundColor: ['rgba(0, 0, 0, 0)'],
                label: ['Ep/Mr=10'],
                pointRadius:0,
                pointBackgroundColor: ['#BFC9CA', '#BFC9CA', '#BFC9CA', '#BFC9CA', '#BFC9CA', '#BFC9CA', '#BFC9CA', '#BFC9CA', '#BFC9CA', '#BFC9CA', '#BFC9CA', '#BFC9CA', '#BFC9CA', '#BFC9CA'],
                borderWidth: 1,
                datalabels: {
                    display: false,
                }
            }, {
                data: [{
                    x: 5,
                    y: 50,
                    r: 5
                }, {
                    x: 7.4096,
                    y: 42.0234,
                    r: 5
                }, {
                    x: 10,
                    y: 35.5054,
                    r: 5
                }, {
                    x: 10.909,
                    y: 33.5937,
                    r: 5
                }, {
                    x: 12.0674,
                    y: 31.8292,
                    r: 5
                }, {
                    x: 15,
                    y: 29.1205,
                    r: 5
                }, {
                    x: 17.0754,
                    y: 27.6519,
                    r: 5
                }, {
                    x: 20,
                    y: 25.971,
                    r: 5
                }, {
                    x: 25,
                    y: 24.1372,
                    r: 5
                }, {
                    x: 30,
                    y: 22.7238,
                    r: 5
                }, {
                    x: 35,
                    y: 21.7268,
                    r: 5
                }, {
                    x: 40,
                    y: 20.8805,
                    r: 5
                }, {
                    x: 45,
                    y: 20.2484,
                    r: 5
                }, {
                    x: 50,
                    y: 20,
                    r: 5
                }],
                pointStyle: 'line',
                showLine: true,
                borderColor: ['#85C1E9'],
                backgroundColor: ['rgba(0, 0, 0, 0)'],
                label: ['Ep/Mr=5'],
                pointRadius:0,
                pointBackgroundColor: ['#85C1E9', '#85C1E9', '#85C1E9', '#85C1E9', '#85C1E9', '#85C1E9', '#85C1E9', '#85C1E9', '#85C1E9', '#85C1E9', '#85C1E9', '#85C1E9', '#85C1E9', '#85C1E9'],
                borderWidth: 1,
                datalabels: {
                    display: false,
                }
            }, {
                data: [{
                    x: 5,
                    y: 53.4457,
                    r: 4
                }, {
                    x: 7.4096,
                    y: 45.7543,
                    r: 4
                }, {
                    x: 10,
                    y: 39.543,
                    r: 4
                }, {
                    x: 10.909,
                    y: 37.9141,
                    r: 4
                }, {
                    x: 12.0674,
                    y: 35.9943,
                    r: 4
                }, {
                    x: 15,
                    y: 33.0902,
                    r: 4
                }, {
                    x: 17.0754,
                    y: 31.2865,
                    r: 4
                }, {
                    x: 20,
                    y: 29.5933,
                    r: 4
                }, {
                    x: 25,
                    y: 27.9342,
                    r: 4
                }, {
                    x: 30,
                    y: 26.72,
                    r: 4
                }, {
                    x: 35,
                    y: 25.9379,
                    r: 4
                }, {
                    x: 40,
                    y: 25.3051,
                    r: 4
                }, {
                    x: 45,
                    y: 24.8044,
                    r: 4
                }, {
                    x: 50,
                    y: 24.3509,
                    r: 4
                }],
                pointStyle: 'line',
                showLine: true,
                borderColor: ['#D2B4DE'],
                backgroundColor: ['rgba(0, 0, 0, 0)'],
                label: ['Ep/Mr=4'],
                pointRadius:0,
                pointBackgroundColor: ['#D2B4DE', '#D2B4DE', '#D2B4DE', '#D2B4DE', '#D2B4DE', '#D2B4DE', '#D2B4DE', '#D2B4DE', '#D2B4DE', '#D2B4DE', '#D2B4DE', '#D2B4DE', '#D2B4DE', '#D2B4DE'],
                borderWidth: 1,
                datalabels: {
                    display: false,
                }
            }, {
                data: [{
                    x: 5,
                    y: 57.8781,
                    r: 3
                }, {
                    x: 7.4096,
                    y: 51.05,
                    r: 3
                }, {
                    x: 10,
                    y: 45.4611,
                    r: 3
                }, {
                    x: 10.909,
                    y: 43.7445,
                    r: 3
                }, {
                    x: 12.0674,
                    y: 41.7683,
                    r: 3
                }, {
                    x: 15,
                    y: 38.9696,
                    r: 3
                }, {
                    x: 17.0754,
                    y: 37.4743,
                    r: 3
                }, {
                    x: 20,
                    y: 36.012,
                    r: 3
                }, {
                    x: 25,
                    y: 34.2808,
                    r: 3
                }, {
                    x: 30,
                    y: 32.8167,
                    r: 3
                }, {
                    x: 35,
                    y: 32.1107,
                    r: 3
                }, {
                    x: 40,
                    y: 31.3864,
                    r: 3
                }, {
                    x: 45,
                    y: 30.7123,
                    r: 3
                }, {
                    x: 50,
                    y: 30,
                    r: 3
                }],
                pointStyle: 'line',
                showLine: true,
                borderColor: ['#2C3E50'],
                backgroundColor: ['rgba(0, 0, 0, 0)'],
                label: ['Ep/Mr=3'],
                pointRadius:0,
                pointBackgroundColor: ['#2C3E50', '#2C3E50', '#2C3E50', '#2C3E50', '#2C3E50', '#2C3E50', '#2C3E50', '#2C3E50', '#2C3E50', '#2C3E50', '#2C3E50', '#2C3E50', '#2C3E50', '#2C3E50'],
                borderWidth: 1,
                datalabels: {
                    display: false,
                }
            }, {
                type: 'line',
                data: [{
                    x: "",
                    y: ""
                },{
                    x: "",
                    y: ""
                },{
                    x: "",
                    y: "",
                    r:""
                }],
                tension: 0,
                showLine: true,
                borderColor: ['rgba(150, 0, 0, 1)'],
                label: ['Líneas de trazado'],
                backgroundColor: ['rgba(0, 0, 0, 0)'],
                
                pointBackgroundColor: [
                'black','black','black'
                ],
                borderDash: [5, 5],
                pointStyle: 'line',
                pointRadius: 3,
                pointHoverRadius: 6,
                borderWidth: 1.5,
                datalabels: {
                    display: false,
                }
            } ],
        },
        options: {
            responsive: false,
            responsiveAnimationDuration:0, 
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
                position: 'right',
                labels:{
                    usePointStyle: true,
                }
            },out: {
                padding: {
                    left: 1,
                    right: 40,
                    top: 2,
                    bottom: 2
                }
            },
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Espesor total del pavimento en pulgadas',
                        fontSize: 15
                    },
                    type: 'linear',
                    position: 'bottom',
                    display: true,
                    ticks: {
                        min: 0,
                        max: 60,
                        stepSize: 5
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Fórmula (Mr*d0)/P',
                        fontSize: 15
                    },
                    type: 'logarithmic',
                    position: 'left',
                    display: true,
                    ticks: {
                        min: 1,
                        max: 100
                    }
                }],
            }
        }
    });

    var x1 = document.getElementById("espesorTotalPavconFre").value;
    var y = 1000 * document.getElementById("moduloResRetro").value * document.getElementById("totalD0Cor").value;
    var y1= y / document.getElementById("carga").value;
    document.getElementById('recibeformulaEpMrps1').innerHTML = "(Mr*d0 corregido)/P = ("+1000+" * "+document.getElementById("moduloResRetro").value+" psi * "+ document.getElementById("totalD0Cor").value+" in) / "+document.getElementById("carga").value+" lb";
    document.getElementById('recibeformulaEpMrps2').innerHTML = "(Mr*d0 corregido)/P = "+y.toFixed(3)+" lb/in / "+document.getElementById("carga").value+" lb";
    document.getElementById('recibeformulaEpMrps3').innerHTML = "(Mr*d0 corregido)/P = "+y1.toFixed(3)+" 1/in";
    document.getElementById('recibeformulaEpMrps4').innerHTML = "Una vez obtenido el valor (Mr*d0 corregido)/P, en la Figura 2, se traza una línea horizontal, mientras que se traza una línea vertical a partir del espesor efectivo del pavimento. En la intersección de las dos líneas se lee la relación Ep/Mr, que en este caso es de "+
    document.getElementById('totalEpMr').value+"."; 

    window.graficaCFS.data.datasets[7].data[0] = {x: 0,y: y1, r: "Y= " + y1};
    window.graficaCFS.data.datasets[7].data[1] = {x: x1,y: y1, r: document.getElementById("totalEpMr").value};
    window.graficaCFS.data.datasets[7].data[2] = {x: x1,y: 0, r: "Espesor pavimento:" + x1};
    window.graficaCFS.update();
    
}

function imgEpMr(){ 
    var canvas = document.getElementById('CFS');
    var dataURL = canvas.toDataURL('image/jpeg');
    console.log(dataURL);
    document.getElementById("descargaEpMr").href = dataURL;
}