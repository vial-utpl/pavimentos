function SNefNDT1() {
    var ctx = document.getElementById("Ult").getContext('2d');
    if(window.myChart7 != null){
        window.myChart7.destroy();
    }
    window.myChart7 = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                data: [{
                    x: 5.9705,
                    y: 2.7116,
                    r: 1000000
                }, {
                    x: 22.1806,
                    y: 10,
                    r: 1000000
                }],
                pointStyle: 'line',
                showLine: true,
                borderColor: ['#5DADE2', ],
                backgroundColor: ['rgba(0, 0, 0, 0)'],
                label: ['EP=1000000 PSI'],
                pointBackgroundColor: ['rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 1,
                datalabels: {
                    display: false,
                }
            }, {
                data: [{
                    x: 5.9705,
                    y: 2.5096,
                    r: 800000
                }, {
                    x: 23.9162,
                    y: 10,
                    r: 800000
                }],
                pointStyle: 'line',
                showLine: true,
                borderColor: ['#58D68D', ],
                backgroundColor: ['rgba(0, 0, 0, 0)'],
                label: ['EP=800000 PSI'],
                pointBackgroundColor: ['rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 1,
                datalabels: {
                    display: false,
                }
            }, {
                data: [{
                    x: 5.9705,
                    y: 2.2457,
                    r: 600000
                }, {
                    x: 26.2602,
                    y: 10,
                    r: 600000
                }],
                pointStyle: 'line',
                showLine: true,
                borderColor: ['#A569BD', ],
                backgroundColor: ['rgba(0, 0, 0, 0)'],
                label: ['EP=600000 PSI'],
                pointBackgroundColor: ['rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 1,
                datalabels: {
                    display: false,
                }
            }, {
                data: [{
                    x: 5.9705,
                    y: 2,
                    r: 600000
                }, {
                    x: 30,
                    y: 10,
                    r: 400000
                }],
                pointStyle: 'line',
                showLine: true,
                borderColor: ['#EC7063', ],
                backgroundColor: ['rgba(0, 0, 0, 0)'],
                label: ['EP=400000 PSI'],
                pointBackgroundColor: ['rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 1,
                datalabels: {
                    display: false,
                }
            }, {
                data: [{
                    x: 5.9705,
                    y: 1.5578,
                    r: 200000
                }, {
                    x: 37.9783,
                    y: 10,
                    r: 200000
                }],
                pointStyle: 'line',
                showLine: true,
                borderColor: ['#D7DBDD', ],
                backgroundColor: ['rgba(0, 0, 0, 0)'],
                label: ['EP=200000 PSI'],
                pointBackgroundColor: ['rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 1,
                datalabels: {
                    display: false,
                }
            }, {
                data: [{
                    x: 5.9705,
                    y: 1.2167,
                    r: 100000
                }, {
                    x: 47.8796,
                    y: 10,
                    r: 100000
                }],
                pointStyle: 'line',
                showLine: true,
                borderColor: ['#F7DC6F', ],
                backgroundColor: ['rgba(0, 0, 0, 0)'],
                label: ['EP=100000 PSI'],
                pointBackgroundColor: ['rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 1,
                datalabels: {
                    display: false,
                }
            }, {
                data: [{
                    x: 5.9705,
                    y: 0.9627,
                    r: 50000
                }, {
                    x: 48.2774,
                    y: 8,
                    r: 50000
                }],
                pointStyle: 'line',
                showLine: true,
                borderColor: ['#34495E', ],
                backgroundColor: ['rgba(0, 0, 0, 0)'],
                label: ['EP=50000 PSI'],
                pointBackgroundColor: ['rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 1,
                datalabels: {
                    display: false,
                }
            }, {
                data: [{
                    x: 5.9705,
                    y: 0.7596,
                    r: 25000
                }, {
                    x: 48.2774,
                    y: 6.3189,
                    r: 25000
                }],
                pointStyle: 'line',
                showLine: true,
                borderColor: ['#F7DC6F', ],
                backgroundColor: ['rgba(0, 0, 0, 0)'],
                label: ['EP=25000 PSI'],
                pointBackgroundColor: ['rgba(65, 195, 18, 1)', 'rgba(65, 195, 18, 1)', 'rgba(65, 195, 18, 1)', 'rgba(65, 195, 18, 1)', 'rgba(65, 195, 18, 1)', 'rgba(65, 195, 18, 1)', 'rgba(65, 195, 18, 1)', 'rgba(65, 195, 18, 1)', 'rgba(65, 195, 18, 1)', 'rgba(65, 195, 18, 1)', 'rgba(65, 195, 18, 1)', 'rgba(65, 195, 18, 1)', 'rgba(65, 195, 18, 1)', 'rgba(65, 195, 18, 1)'],
                borderWidth: 1,
                datalabels: {
                    display: false,
                }
            },{
                data:[{
                    x:"",
                    y:""
                },{
                    x:"",
                    y:"",
                    r:""
                },{
                    x:"",
                    y:"",
                    r:""
                }],
                tension: 0,
                showLine: true,
                borderColor: [
                'rgba(150, 0, 0, 1)'
                ],
                label: [
                'Líneas de trazado'
                ],
                backgroundColor: [
                'rgba(0, 0, 0, 0)'
                ],
                pointBackgroundColor: [
                'black','black','black'
                ],
                pointStyle: 'line',
                borderDash: [5, 5],
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
            },
            layout: {
                padding: {
                    left: 1,
                    right: 40,
                    top: 2,
                    bottom: 2
                }
            },
            scales: {
                xAxes: [{
                    scaleLabel: { display: true, labelString: 'Espesor del pavimento (plg)', fontSize:15 },
                    type: 'linear',
                    position: 'bottom',
                    display: true,
                    ticks: {
                        min: 0,
                        max: 50,
                        stepSize: 5
                    }
                }],
                yAxes: [{
                    scaleLabel: { display: true, labelString: 'SNef', fontSize:15 },
                    type: 'linear',
                    position: 'left',
                    display: true,
                    ticks: {
                        min: 0,
                        max: 10
                    }
                }],
            }
        }
    });
    var espesorTotalPav5 = document.getElementById("espesorTotalPav").value;
    var fregraf = document.getElementById('fres').value;
    if (fregraf=='') {
        var totalGraf =espesorTotalPav5-0;
        var x7 = totalGraf;
    }else{
        var totalGraf = espesorTotalPav5-fregraf;
        var x7 = totalGraf;
    }
    var y7 = document.getElementById("snefNDT").value;
    window.myChart7.data.datasets[8].data[0] = {x: 0, y: y7};
    window.myChart7.data.datasets[8].data[1] = {x: x7, y: y7, r:"Snef:"+document.getElementById("snefNDT").value};
    window.myChart7.data.datasets[8].data[2] = {x: x7, y: 0, r:"Espesor pavimento:"+x7};
    window.myChart7.update();
}
function imgNdt(){ 
    var canvas = document.getElementById('Ult');
    var dataURL = canvas.toDataURL('image/jpeg',1.0);
    console.log(dataURL);
    document.getElementById("descargandt").href = dataURL;
}