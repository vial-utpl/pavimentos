$(document).ready(function() {
    CementorGra();
});
function CementorGra(){
	var ctx = document.getElementById("graficaCemento").getContext('2d');
	if(window.myChart6 != null){
        window.myChart6.destroy();
    }
	window.myChart6 = new Chart(ctx, {
		type: 'scatter',
		data: {
			datasets: [{
				data: [{
					x: 30,
					y: 1.2366,
					r: 1.237
				}, {
					x: 40,
					y: 1.175663595,
					r: 1.176
				}, {
					x: 50,
					y: 1.117072948,
					r: 1.117
				},{
					x: 60,
					y: 1.052621345,
					r: 1.053
				},{
					x: 68,
					y: 1,
					r: 1
				},{
					x: 70,
					y: 0.972250919,
					r: 0.972
				},{
					x: 80,
					y: 0.853415929,
					r: 0.853
				},{
					x: 90,
					y: 0.740349547,
					r: 0.740
				},{
					x: 100,
					y: 0.627283165,
					r: 0.627
				},{
					x: 110,
					y: 0.513681577,
					r: 0.512
				},{
					x: 120,
					y: 0.4,
					r: 0.40
				}
				],
				showLine: true,

				borderColor: [
				'blue',
				],
				label:[
				'12plg'
				],
				backgroundColor: [
				'rgba(0, 0, 0, 0)'
				],
				pointBackgroundColor: [
				'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue'
				],
				pointStyle: 'line',
				borderWidth: 1,
				pointRadius: 0,
				datalabels: {
					display: false,
				}
			},{
				data: [{
					x: 30,
					y: 1.179,
					r: 1.179
				}, {
					x: 40,
					y: 1.133925303,
					r: 1.134
				}, {
					x: 50,
					y: 1.088074482,
					r: 1.088
				},{
					x: 60,
					y: 1.039661048,
					r: 1.040
				},{
					x: 68,
					y: 1,
					r: 1
				},{
					x: 70,
					y: 0.97494611,
					r: 0.975
				},{
					x: 80,
					y: 0.87308205,
					r: 0.873
				},{
					x: 90,
					y: 0.775934855,
					r: 0.776
				},{
					x: 100,
					y: 0.674591025,
					r: 0.675
				},{
					x: 110,
					y: 0.57632053,
					r: 0.576
				},{
					x: 120,
					y: 0.4761,
					r: 0.476
				}
				] ,
				showLine: true,

				borderColor: [
				'red',
				],
				backgroundColor: [
				'rgba(0, 0, 0, 0)'
				],
				label:[
				'8plg'
				],
				pointBackgroundColor: [
				'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red'
				],
				pointStyle: 'line',
				borderWidth: 1,
				pointRadius: 0,
				datalabels: {
					display: false,
				}
			},{
				data: [{
					x: 30,
					y: 1.1309,
					r: 1.131
				}, {
					x: 40,
					y: 1.098162192,
					r: 1.098
				}, {
					x: 50,
					y: 1.064920917,
					r: 1.065
				},{
					x: 60,
					y: 1.027791452,
					r: 1.028
				},{
					x: 68,
					y: 1,
					r: 1
				},{
					x: 70,
					y: 0.985704789,
					r: 0.986
				},{
					x: 80,
					y: 0.916231246,
					r: 0.916
				},{
					x: 90,
					y: 0.851311406,
					r: 0.851
				},{
					x: 100,
					y: 0.790266814,
					r: 0.790
				},{
					x: 110,
					y: 0.724009776,
					r: 0.724
				},{
					x: 120,
					y: 0.6592,
					r: 0.659
				}
				],
				showLine: true,

				borderColor: [
				'green',
				],
				backgroundColor: [
				'rgba(0, 0, 0, 0)'
				],
				label:[
				'4plg'
				],
				pointBackgroundColor: [
				'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green'
				],
				pointStyle: 'line',
				borderWidth: 1,
				pointRadius: 0,
				datalabels: {
					display: false
				}
			},{
				data: [{
					x: 30,
					y: 1.1008,
					r: 1.101
				}, {
					x: 40,
					y: 1.076112486,
					r: 1.076
				}, {
					x: 50,
					y: 1.050375703,
					r: 1.050
				},{
					x: 60,
					y: 1.020895388,
					r: 1.021
				},{
					x: 68,
					y: 1,
					r: 1
				},{
					x: 70,
					y: 0.991436757,
					r: 0.991
				},{
					x: 80,
					y: 0.951903501,
					r: 0.952
				},{
					x: 90,
					y: 0.915472821,
					r: 0.915
				},{
					x: 100,
					y: 0.879447182,
					r: 0.879
				},{
					x: 110,
					y: 0.844006966,
					r: 0.844
				},{
					x: 120,
					y: 0.8101,
					r: 0.810
				}],
				showLine: true,

				borderColor: [
				'rgba(255, 159, 64, 1)',
				],
				backgroundColor: [
				'rgba(0, 0, 0, 0)'
				],
				label:[
				'2plg'
				],
				pointBackgroundColor: [
				'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)'
				],
				pointStyle: 'line',
				borderWidth: 1,
				pointRadius: 0,
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
				'black',
				],
				label:[
				"Líneas de trazado"
				],
				borderColor: [
				'rgba(150, 0, 0, 1)'
                ]
				,
				backgroundColor: [
				'rgba(0, 0, 0, 0)'
				],
				pointBackgroundColor: [
				'black','black','black'
				],
				pointStyle: 'line',
				pointRadius: 3,
				borderDash: [5, 5],
				pointHoverRadius: 6,
				borderWidth: 1.5,
				datalabels: {
					display: false,
				}
			}
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
					bottom: 2
				}
			},
			scales: {
				xAxes: [{
					scaleLabel: { display: true, labelString: 'Temperatura en °F', fontSize:15 },
					title:'asdasd',
					type: 'linear',
					position: 'bottom',
					display: true,
					ticks: {
						min: 30,
						max: 120,
						stepSize: 5
					}
				}],
				yAxes: [{
					scaleLabel: { display: true, labelString: 'Factor de Corrección d0', fontSize:15 },
					type: 'linear',
					position: 'left',
					display: true,
					ticks: {
						max: 1.4,
						stepSize: 0.2
					}
				}]
			}
		}
	});
	var x5 = document.getElementById("temperatura").value;
	var y6 = document.getElementById("FactorCorrec").value;
	window.myChart6.data.datasets[4].data[0] = {x: 0, y: y6};
	window.myChart6.data.datasets[4].data[1] = {x: x5, y: y6, r:"Factor de Corrección:"+document.getElementById("FactorCorrec").value};
	window.myChart6.data.datasets[4].data[2] = {x: x5, y: 0, r:"Temperatura:" + document.getElementById("temperatura").value};
	window.myChart6.update();
}

function imgCemento(){	
	var canvas = document.getElementById('graficaCemento');
	var dataURL = canvas.toDataURL('image/jpeg',1.0);
	console.log(dataURL);
	document.getElementById("descargacemento").href = dataURL;
}