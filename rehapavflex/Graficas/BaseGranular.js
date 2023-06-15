$(document).ready(function() {
    GranularGra();
});
var mychartedi;
function GranularGra(){	
	var ctx = document.getElementById("graficaGranular").getContext('2d');
	if(window.mychartedi != null){
        window.mychartedi.destroy();
    }
	if (mychartedi!=null) {
		mychartedi.destroy();
	}
	
	window.mychartedi = new Chart(ctx, {
		type: 'scatter',
		data: {
			datasets: [{
				data: [{
					x: 30,
					y: 1.3575,
					r: 1.358

				}, {
					x: 40,
					y: 1.260240846,
					r: 1.260

				}, {
					x: 50,
					y: 1.16433203,
					r: 1.164

				},{
					x: 60,
					y: 1.075517059,
					r: 1.076

				},{
					x: 68,
					y: 1,
					r: 1

				},{
					x: 70,
					y: 0.974661848,
					r: 0.975

				},{
					x: 80,
					y: 0.85606849,
					r: 0.856

				},{
					x: 90,
					y: 0.744218189,
					r: 0.744

				},{
					x: 100,
					y: 0.628468174,
					r: 0.629

				},{
					x: 110,
					y: 0.513681577,
					r: 0.514

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
			}, {
				data: [{
					x: 30,
					y: 1.328,
					r: 1.328


				}, {
					x: 40,
					y: 1.239706366,
					r: 1.240

				}, {
					x: 50,
					y: 1.154108908,
					r: 1.154

				},{
					x: 60,
					y: 1.071188342,
					r: 1.071

				},{
					x: 68,
					y: 1,
					r: 1

				},{
					x: 70,
					y: 0.97839381,
					r: 0.978

				},{
					x: 80,
					y: 0.878832224,
					r: 0.879

				},{
					x: 90,
					y: 0.785556595,
					r: 0.786

				},{
					x: 100,
					y: 0.691081826,
					r: 0.691

				},{
					x: 110,
					y: 0.594933978,
					r: 0.595

				},{
					x: 120,
					y: 0.5,
					r: 0.50

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
					y: 1.2779,
					r: 1.278

				}, {
					x: 40,
					y: 1.202611314,
					r: 1.203

				}, {
					x: 50,
					y: 1.131624636,
					r: 1.132

				},{
					x: 60,
					y: 1.062788962,
					r: 1.063

				},{
					x: 68,
					y: 1,
					r: 1

				},{
					x: 70,
					y: 0.986799712,
					r: 0.987

				},{
					x: 80,
					y: 0.91945574,
					r: 0.920

				},{
					x: 90,
					y: 0.851936543,
					r: 0.852

				},{
					x: 100,
					y: 0.788923379,
					r: 0.789

				},{
					x: 110,
					y: 0.723629712,
					r: 0.724

				},{
					x: 120,
					y: 0.6609,
					r: 0.661

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
					y: 1.1576,
					r: 1.158

				}, {
					x: 40,
					y: 1.119709212,
					r: 1.120

				}, {
					x: 50,
					y: 1.078968036,
					r: 1.079

				},{
					x: 60,
					y: 1.035183541,
					r: 1.035

				},{
					x: 68,
					y: 1,
					r: 1

				},{
					x: 70,
					y: 0.991985642,
					r: 0.992

				},{
					x: 80,
					y: 0.952386824,
					r: 0.952

				},{
					x: 90,
					y: 0.913344595,
					r: 0.913

				},{
					x: 100,
					y: 0.873684966,
					r: 0.874

				},{
					x: 110,
					y: 0.836461149,
					r: 0.836

				},{
					x: 120,
					y: 0.8,
					r: 0.8
				}
				],
				showLine: true,

				borderColor: [
				'orange',
				],
				backgroundColor: [
				'rgba(0, 0, 0, 0)'
				],
				label:[
				'2plg'
				],
				pointBackgroundColor: [
				'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange'
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
				label: [
				'Líneas de trazado'
				],
				borderColor: [
				'rgba(150, 0, 0, 1)'
                ],
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
			maintainAspectRatio: true,
			onResize:null,
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
				}],
			}
		}
	});
	var x1 = document.getElementById("temperatura").value;
	var y1 = document.getElementById("FactorCorrec").value;
	window.mychartedi.data.datasets[4].data[0] = {x: 0, y: y1};
	window.mychartedi.data.datasets[4].data[1] = {x: x1, y: y1, r:"Factor de Correción:"+document.getElementById("FactorCorrec").value};
	window.mychartedi.data.datasets[4].data[2] = {x: x1, y: 0, r:"Temperatura:"+document.getElementById("temperatura").value};
	window.mychartedi.update();
}

function imgGranular(){	
	var canvas = document.getElementById('graficaGranular');
	var dataURL = canvas.toDataURL('image/jpeg',1.0);
	console.log(dataURL);
	document.getElementById("descargagranular").href = dataURL;
}
