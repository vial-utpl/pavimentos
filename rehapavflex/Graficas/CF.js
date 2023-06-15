function Gracf(){ 
    var ctx = document.getElementById("CF").getContext('2d');
    if(window.myChart3 != null){
        window.myChart3.destroy();
    }
    window.myChart3 = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                data: [{
                    x: 100,
                    y: 1,
                    r: ""      
                }, {
                    x: 90,
                    y: 0.9811,
                    r: ""
                }, {
                    x: 80,
                    y: 0.9624,
                    r: ""
                },{
                    x: 70,
                    y: 0.9418,
                    r: ""
                },{
                    x: 60,
                    y: 0.9187,
                    r: ""
                },{
                    x: 50,
                    y: 0.892,
                    r: ""
                },{
                    x: 40,
                    y: 0.8632,
                    r: ""
                },{
                    x: 35.321,
                    y: 0.849,
                    r: ""
                },{
                    x: 31,
                    y: 0.8325,
                    r: ""
                },{
                    x: 30,
                    y: 0.829,
                    r: ""
                },{
                    x: 26.7455,
                    y: 0.8135,
                    r: ""
                },{
                    x: 23.408,
                    y: 0.797,
                    r: ""
                },{
                    x: 20,
                    y: 0.776,
                    r: ""
                },{
                    x: 18.6358,
                    y: 0.766,
                    r: ""
                },{
                    x: 17.075,
                    y: 0.754,
                    r: ""
                },{
                    x: 15.3775,
                    y: 0.739,
                    r: ""
                },{
                    x: 14,
                    y: 0.7262,
                    r: ""
                },{
                    x: 11.8474,
                    y: 0.704,
                    r: ""
                },{
                    x: 10,
                    y: 0.6822,
                    r: ""
                },{
                    x: 7.3562,
                    y: 0.6505,
                    r: ""
                },{
                    x: 5.7916,
                    y: 0.6242,
                    r: ""
                },{
                    x: 4.4226,
                    y: 0.6,
                    r: ""
                },{
                    x: 0,
                    y: 0.5,
                    r: ""
                }
                ],
                pointStyle: 'line',
                pointRadius: 0,
                showLine: true,

                borderColor: [
                'rgba(0, 0, 0, 1)'
                ],
                label:[
                "Curva CF"
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
                tension: 0,
                showLine: true,
                borderColor: [
                'rgba(150, 0, 0, 1)',
                ],
                backgroundColor: [
                'rgba(0, 0, 0, 0)'
                ],
                label:[
                "Líneas de trazado"
                ],
                pointBackgroundColor: [
                'black', 'black', 'black',
                ],
                pointStyle: 'line',
                pointRadius: 3,
                pointHoverRadius: 6,
                borderWidth: 1.5,
                datalabels: {
                    display: false,
                }
            },
            ],

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
                    color: 'rgba(255, 159, 64, 1)',
                    font: {
                        size: 11,
                        weight: 'bold'
                    },

                }
            },

            scales: {
                xAxes: [{
                    scaleLabel: { display: true, labelString: 'Vida Remanente(% RL)', fontSize:15 },
                    type: 'linear',
                    position: 'bottom',
                    display: true,
                    ticks: {
                        min: 0
                    }
                }],
                yAxes: [{
                    scaleLabel: { display: true, labelString: 'Valor CF', fontSize:15 },
                    type: 'linear',
                    position: 'left',
                    display: true,
                    ticks: {
                        min: 0.5
                    }
                }],

            }
        }
    });
    var x1 = document.getElementById("RL").value;
    var y1 = document.getElementById("totalCF").value;
    window.myChart3.data.datasets[1].data[0] = {x: 0, y: y1};
    window.myChart3.data.datasets[1].data[1] = {x: x1, y: y1, r:"CF:"+y1};
    window.myChart3.data.datasets[1].data[2] = {x: x1, y: 0, r:"%RL:"+x1};
    window.myChart3.update();
    
}
function imgCf(){  
    var canvas = document.getElementById('CF');
    var dataURL = canvas.toDataURL('image/jpeg',1.0);
    console.log(dataURL);
    document.getElementById("descargaCF").href = dataURL;
}