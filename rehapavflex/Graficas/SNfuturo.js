$(document).ready(function() {
    loadGraphSN();
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

function loadGraphSN() {
    
    var ctx = document.getElementById("chartSNfuturo").getContext('2d');
    if(window.myChart0 != null){
        window.myChart0.destroy();
    }
    myChart0 = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                    data: [{
                        x: -0.1,
                        y: 25,
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
                        'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black',
                    ],
                    borderWidth: 1,
                    datalabels: {
                        align: 'left',
                        rotation: -90,
                        color: 'black',
                        font: {
                            size: 8,
                        },
                    },

                },
                {
                    label: 'Confiabilidad',
                    data: [{
                            x: 0,
                            y: 0,
                            r: 50
                        }, {
                            x: 0,
                            y: 4.20647202881765,
                            r: 60
                        },
                        {
                            x: 0,
                            y: 8.70717213080916,
                            r: 70
                        },
                        {
                            x: 0,
                            y: 13.9742464177876,
                            r: 80
                        },
                        {
                            x: 0,
                            y: 21.2791979858313,
                            r: 90
                        },
                        {
                            x: 0,
                            y: 38.6271235479956,
                            r: 99
                        },
                        {
                            x: 0,
                            y: 51.3108,
                            r: 99.9
                        },
                    ],
                    showLine: true,

                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    pointBackgroundColor: [
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1,
                    datalabels: {
                        align: 'right',
                    }
                },
                {
                    data: [{
                        x: 18,
                        y: 32,
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
                        'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1,
                    datalabels: {
                        padding: 8,
                        align: 'left',
                        rotation: -75.5,
                        color: 'rgba(0, 0, 0, 1)',
                        font: {
                            size: 6,
                        },
                    },

                },

                {
                    label: 'Desviación estándar',
                    data: [{
                            x: 8.8136,
                            y: 22.0563,
                            r: 0.6
                        }, {
                            x: 9.9674936870306,
                            y: 25.001492073205,
                            r: 0.5
                        },
                        {
                            x: 11.3797454234177,
                            y: 28.6061158493181,
                            r: 0.4
                        },
                        {
                            x: 13.2004545765823,
                            y: 33.2532841506819,
                            r: 0.3
                        },
                        {
                            x: 15.7666,
                            y: 39.8031,
                            r: 0.2
                        },

                    ],
                    pointRadius: 2,
                    pointBackgroundColor: [
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],

                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],

                    borderWidth: 1,
                    datalabels: {
                        align: 'right'
                    }
                },
                {
                    label: 'TL',
                    data: [{
                            x: 25.9009,
                            y: 0,
                            r: ""
                        },
                        {
                            x: 25.9009,
                            y: 66.1603,
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
                    borderWidth: 1,
                    datalabels: {
                        align: 'top'
                    }
                },
                {
                    data: [{
                        x: 48,
                        y: 42.5,
                        r: "Número de ejes equivalentes (millones)"
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
                        'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1,
                    datalabels: {
                        align: 'left',
                        rotation: -90,
                        color: 'rgba(0, 0, 0, 1)',
                        font: {
                            size: 8,
                        },
                    },

                },
                {
                    label: 'Número de ejes equivalentes',
                    data: [{
                            x: 48.813,
                            y: 18.7193,
                            r: 0.05
                        }, {
                            x: 48.813,
                            y: 23.4838923937044,
                            r: 0.1
                        },
                        {
                            x: 48.813,
                            y: 34.5469333333333,
                            r: 0.5
                        },
                        {
                            x: 48.813,
                            y: 39.3115257270377,
                            r: 1
                        },
                        {
                            x: 48.813,
                            y: 50.3745666666667,
                            r: 5
                        },
                        {
                            x: 48.813,
                            y: 55.1391590603711,
                            r: 10
                        },
                        {
                            x: 48.813,
                            y: 66.2022,
                            r: 50
                        },
                    ],
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    pointBackgroundColor: [
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 1,
                    datalabels: {
                        align: 'right'
                    }
                },
                {
                    label: 'TL2',
                    data: [{
                            x: 58.027,
                            y: 0,
                            r: ""
                        },
                        {
                            x: 58.027,
                            y: 66.5217,
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
                    borderWidth: 1,
                    datalabels: {
                        align: 'top'
                    }
                },
                {
                    data: [{
                        x: 102.5,
                        y: 35.3,
                        r: "Módulo resiliente (ksi)"
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
                        'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1,
                    datalabels: {
                        align: 'left',
                        rotation: -90,
                        color: 'rgba(0, 0, 0, 1)',
                        font: {
                            size: 8,
                        },
                    },

                },
                {
                    label: 'Módulo resiliente',
                    data: [{
                            x: 103.085,
                            y: 21.709,
                            r: 1
                        }, {
                            x: 103.085,
                            y: 33.5962370224744,
                            r: 5
                        },
                        {
                            x: 103.085,
                            y: 38.7157913483163,
                            r: 10
                        },
                        {
                            x: 103.085,
                            y: 43.8353456741581,
                            r: 20
                        },
                        {
                            x: 103.085,
                            y: 48.9549,
                            r: 40
                        },

                    ],
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    pointBackgroundColor: [
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1,
                    datalabels: {
                        align: 'right'
                    }
                },
                {
                    data: [{
                        x: 180,
                        y: -8.5,
                        r: "Número estructural de diseño, SN"
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
                        'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1,
                    datalabels: {
                        align: 'left',
                        rotation: 0,
                        color: 'rgba(0, 0, 0, 1)',
                        font: {
                            size: 8,
                        },
                    },

                },
                {
                    label: 'SN',
                    data: [{
                            x: 125.6554,
                            y: 0,
                            r: ""
                        }, {
                            x: 128.762155154857,
                            y: 0,
                            r: 9
                        },
                        {
                            x: 132.235211934196,
                            y: 0,
                            r: 8
                        },
                        {
                            x: 136.172638965388,
                            y: 0,
                            r: 7
                        },
                        {
                            x: 140.718064888827,
                            y: 0,
                            r: 6
                        },
                        {
                            x: 146.094162688601,
                            y: 0,
                            r: 5
                        },
                        {
                            x: 152.673974622798,
                            y: 0,
                            r: 4
                        },
                        {
                            x: 161.156827577428,
                            y: 0,
                            r: 3
                        },
                        {
                            x: 173.112737311399,
                            y: 0,
                            r: 2
                        },
                        {
                            x: 193.5515,
                            y: 0,
                            r: 1
                        },
                    ],
                    pointRadius: 2,
                    showLine: true,
                    borderColor: [

                        'rgba(0, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    pointBackgroundColor: [
                        'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1,
                    datalabels: {
                        align: 'bottom'

                    }
                },
                {
                    label: 'psi0.5',
                    data: [{
                            x: 128.6554,
                            y: 15.1042730265595,
                            r: 0.5
                        }, {
                            x: 130.6554,
                            y: 17.8032367378614,
                            r: ""
                        },
                        {
                            x: 135.6554,
                            y: 23.9423415607102,
                            r: ""
                        },
                        {
                            x: 140.6554,
                            y: 29.5224444874459,
                            r: ""
                        },
                        {
                            x: 145.6554,
                            y: 34.2843563275792,
                            r: ""
                        },
                        {
                            x: 150.6554,
                            y: 37.8496894405266,
                            r: ""
                        },
                        {
                            x: 155.6554,
                            y: 40.4498813457614,
                            r: ""
                        },
                        {
                            x: 160.6554,
                            y: 42.9031230746784,
                            r: ""
                        },
                        {
                            x: 165.6554,
                            y: 45.9759164500974,
                            r: ""
                        },
                        {
                            x: 170.6554,
                            y: 49.7861580857301,
                            r: ""
                        },
                        {
                            x: 175.6554,
                            y: 53.8710842215539,
                            r: ""
                        },
                        {
                            x: 180.6554,
                            y: 57.9561095518989,
                            r: ""
                        },
                        {
                            x: 185.6554,
                            y: 62.319554961151,
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
                    borderWidth: 1,
                    datalabels: {
                        align: 'left',
                        padding: -2,
                        font: {
                            size: 7,
                        },

                    }
                },
                {
                    label: 'psi0.6',
                    data: [{
                            x: 128.6554,
                            y: 13.2796015612704
                        }, {
                            x: 130.6554,
                            y: 15.6767939685509
                        },
                        {
                            x: 135.6554,
                            y: 21.9662296985739
                        },
                        {
                            x: 140.6554,
                            y: 27.6696127935313
                        },
                        {
                            x: 145.6554,
                            y: 32.4543850789698
                        },
                        {
                            x: 150.6554,
                            y: 36.245000338697
                        },
                        {
                            x: 155.6554,
                            y: 39.2646261431684
                        },
                        {
                            x: 160.6554,
                            y: 42.0904739030832
                        },
                        {
                            x: 165.6554,
                            y: 45.3586492230534
                        },
                        {
                            x: 170.6554,
                            y: 49.3212144301815
                        },
                        {
                            x: 175.6554,
                            y: 53.6746532384421
                        },
                        {
                            x: 180.6554,
                            y: 57.945123881887
                        },
                        {
                            x: 185.6554,
                            y: 62.2317817080439
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.4)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 1,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'psi0.7',
                    data: [{
                            x: 129.6554,
                            y: 12.6701558254691
                        }, {
                            x: 130.6554,
                            y: 13.9436629529126
                        },
                        {
                            x: 135.6554,
                            y: 20.2346259381092
                        },
                        {
                            x: 140.6554,
                            y: 25.9526830927879
                        },
                        {
                            x: 145.6554,
                            y: 30.8603419467395
                        },
                        {
                            x: 150.6554,
                            y: 34.9146744277071
                        },
                        {
                            x: 155.6554,
                            y: 38.2966900622949
                        },
                        {
                            x: 160.6554,
                            y: 41.4424217837606
                        },
                        {
                            x: 165.6554,
                            y: 44.8829997742996
                        },
                        {
                            x: 170.6554,
                            y: 48.9327556867605
                        },
                        {
                            x: 175.6554,
                            y: 53.4351965163499
                        },
                        {
                            x: 180.6554,
                            y: 57.8865143267721
                        },
                        {
                            x: 185.6554,
                            y: 62.3051549774333
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.4)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 1,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'psi0.8',
                    data: [{
                            x: 129.6554,
                            y: 11.0592301388896
                        }, {
                            x: 130.6554,
                            y: 12.3208205249979
                        },
                        {
                            x: 135.6554,
                            y: 18.6162575939019
                        },
                        {
                            x: 140.6554,
                            y: 24.5387717811161
                        },
                        {
                            x: 145.6554,
                            y: 29.6805687422321
                        },
                        {
                            x: 150.6554,
                            y: 33.9074356121889
                        },
                        {
                            x: 155.6554,
                            y: 37.4745306711447
                        },
                        {
                            x: 160.6554,
                            y: 40.9020135640239
                        },
                        {
                            x: 165.6554,
                            y: 44.6724218192248
                        },
                        {
                            x: 170.6554,
                            y: 48.9389404829208
                        },
                        {
                            x: 175.6554,
                            y: 53.4570035426036
                        },
                        {
                            x: 180.6554,
                            y: 57.8710084569844
                        },
                        {
                            x: 185.6554,
                            y: 62.3033185391241
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.4)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 1,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'psi0.9',
                    data: [{
                            x: 129.6554,
                            y: 9.84618933754507
                        }, {
                            x: 130.6554,
                            y: 11.1196454485867
                        },
                        {
                            x: 135.6554,
                            y: 17.2888658337745
                        },
                        {
                            x: 140.6554,
                            y: 23.2499067342633
                        },
                        {
                            x: 145.6554,
                            y: 28.5689555195435
                        },
                        {
                            x: 150.6554,
                            y: 32.9795131535136
                        },
                        {
                            x: 155.6554,
                            y: 36.7602568934265
                        },
                        {
                            x: 160.6554,
                            y: 40.4880763982518
                        },
                        {
                            x: 165.6554,
                            y: 44.5712575215148
                        },
                        {
                            x: 170.6554,
                            y: 48.9839249006594
                        },
                        {
                            x: 175.6554,
                            y: 53.4372982302962
                        },
                        {
                            x: 180.6554,
                            y: 57.8360678203514
                        },
                        {
                            x: 185.6554,
                            y: 62.2792526921144
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(0, 0, 0, 0.4)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 1,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'psi1',
                    data: [{
                            x: 128.7554,
                            y: 7.32013961221662,
                            r: 1.0
                        }, {
                            x: 133.7554,
                            y: 13.6934544820467,
                            r: ""
                        },
                        {
                            x: 138.7554,
                            y: 19.9005689894636,
                            r: ""
                        },
                        {
                            x: 143.7554,
                            y: 25.5456448321704,
                            r: ""
                        },
                        {
                            x: 148.7554,
                            y: 30.517766200074,
                            r: ""
                        },
                        {
                            x: 153.7554,
                            y: 34.7953032206748,
                            r: ""
                        },
                        {
                            x: 158.7554,
                            y: 38.6777937358453,
                            r: ""
                        },
                        {
                            x: 163.7554,
                            y: 42.6684292016207,
                            r: ""
                        },
                        {
                            x: 168.7554,
                            y: 47.0651726480916,
                            r: ""
                        },
                        {
                            x: 173.7554,
                            y: 51.6985151082697,
                            r: ""
                        },
                        {
                            x: 178.7554,
                            y: 56.1788917228191,
                            r: ""
                        },
                        {
                            x: 183.7554,
                            y: 60.4868298519832,
                            r: ""
                        },
                        {
                            x: 185.6554,
                            y: 62.1461214544943,
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
                    borderWidth: 1,
                    datalabels: {
                        align: 'left',
                        font: {
                            size: 7,
                        },
                        padding: -2
                    }
                },
                {
                    label: 'psi1.5',
                    data: [{
                            x: 129.0554,
                            y: 2.8459945084795,
                            r: 1.5
                        }, {
                            x: 134.0554,
                            y: 9.44650428619716,
                            r: ""
                        },
                        {
                            x: 139.0554,
                            y: 15.7731463557113,
                            r: ""
                        },
                        {
                            x: 144.0554,
                            y: 21.7774373990732,
                            r: ""
                        },
                        {
                            x: 149.0554,
                            y: 27.3109230904729,
                            r: ""
                        },
                        {
                            x: 154.0554,
                            y: 32.329277581562,
                            r: ""
                        },
                        {
                            x: 159.0554,
                            y: 37.0440183117003,
                            r: ""
                        },
                        {
                            x: 164.0554,
                            y: 41.7531459457495,
                            r: ""
                        },
                        {
                            x: 169.0554,
                            y: 46.559415231029,
                            r: ""
                        },
                        {
                            x: 174.0554,
                            y: 51.3160168712407,
                            r: ""
                        },
                        {
                            x: 179.0554,
                            y: 55.9242031385179,
                            r: ""
                        },
                        {
                            x: 185.6554,
                            y: 61.98876845839,
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
                    borderWidth: 1,
                    datalabels: {
                        align: 'left',
                        font: {
                            size: 7,
                        },
                        padding: -2
                    }
                },
                {
                    label: 'psi2',
                    data: [{
                            x: 130.6554,
                            y: 1.52932100078552,
                            r: 2.0
                        },
                        {
                            x: 135.6554,
                            y: 8.28474811090033,
                            r: ""
                        },
                        {
                            x: 140.6554,
                            y: 14.610970047949,
                            r: ""
                        },
                        {
                            x: 145.6554,
                            y: 20.7743184158309,
                            r: ""
                        },
                        {
                            x: 150.6554,
                            y: 26.705872031572,
                            r: ""
                        },
                        {
                            x: 155.6554,
                            y: 32.210774200811,
                            r: ""
                        },
                        {
                            x: 160.6554,
                            y: 37.4160471031209,
                            r: ""
                        },
                        {
                            x: 165.6554,
                            y: 42.6300968273263,
                            r: ""
                        },
                        {
                            x: 170.6554,
                            y: 47.8948787806578,
                            r: ""
                        },
                        {
                            x: 175.6554,
                            y: 52.8858051983698,
                            r: ""
                        },
                        {
                            x: 180.6554,
                            y: 57.4549243023639,
                            r: ""
                        },
                        {
                            x: 185.6554,
                            y: 62.0196842983332,
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
                    borderWidth: 1,
                    datalabels: {
                        align: 'left',
                        font: {
                            size: 7,
                        },
                        padding: -2
                    }
                },
                {
                    label: 'psi2.5',
                    data: [{
                            x: 131.6554,
                            y: 0.286750468004554
                        },
                        {
                            x: 135.6554,
                            y: 5.71194726588703
                        },
                        {
                            x: 140.6554,
                            y: 12.1928242579607
                        },
                        {
                            x: 145.6554,
                            y: 18.5148270967785
                        },
                        {
                            x: 150.6554,
                            y: 24.7898145410338
                        },
                        {
                            x: 155.6554,
                            y: 30.8870519168236
                        },
                        {
                            x: 160.6554,
                            y: 36.6717883798306
                        },
                        {
                            x: 165.6554,
                            y: 42.1613637390419
                        },
                        {
                            x: 170.6554,
                            y: 47.4589238156191
                        },
                        {
                            x: 175.6554,
                            y: 52.5806256169282
                        },
                        {
                            x: 180.6554,
                            y: 57.4114136925936
                        },
                        {
                            x: 185.6554,
                            y: 62.00704690671
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
                    borderWidth: 1,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'psi3',
                    data: [{
                            x: 132.7554,
                            y: 0.0278626102261114,
                            r: ""
                        },
                        {
                            x: 135.6554,
                            y: 3.8517925453732,
                            r: 3.0
                        },
                        {
                            x: 140.6554,
                            y: 10.4399951778068,
                            r: ""
                        },
                        {
                            x: 145.6554,
                            y: 16.9757365147987,
                            r: ""
                        },
                        {
                            x: 150.6554,
                            y: 23.4119168100081,
                            r: ""
                        },
                        {
                            x: 155.6554,
                            y: 29.7026287659645,
                            r: ""
                        },
                        {
                            x: 160.6554,
                            y: 35.8159159322931,
                            r: ""
                        },
                        {
                            x: 165.6554,
                            y: 41.6981585527974,
                            r: ""
                        },
                        {
                            x: 170.6554,
                            y: 47.2556379403565,
                            r: ""
                        },
                        {
                            x: 175.6554,
                            y: 52.428427632721,
                            r: ""
                        },
                        {
                            x: 180.6554,
                            y: 57.2967692125858,
                            r: ""
                        },
                        {
                            x: 185.6554,
                            y: 61.8805127617611,
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
                    borderWidth: 1,
                    datalabels: {
                        font: {
                            size: 7,
                        },
                        align: 'bottom',
                        padding: 0
                    }
                },
                {
                    label: 'ln-res',
                    data: [{
                            x: 132.7554,
                            y: 0.0278626102261114
                        },
                        {
                            x: 135.6554,
                            y: 3.8517925453732
                        },
                        {
                            x: 140.6554,
                            y: 10.4399951778068
                        },
                        {
                            x: 145.6554,
                            y: 16.9757365147987
                        },
                        {
                            x: 150.6554,
                            y: 23.4119168100081
                        },
                        {
                            x: 155.6554,
                            y: 29.7026287659645
                        },
                        {
                            x: 160.6554,
                            y: 35.8159159322931
                        },
                        {
                            x: 165.6554,
                            y: 41.6981585527974
                        },
                        {
                            x: 170.6554,
                            y: 47.2556379403565
                        },
                        {
                            x: 175.6554,
                            y: 52.428427632721
                        },
                        {
                            x: 180.6554,
                            y: 57.2967692125858
                        },
                        {
                            x: 185.6554,
                            y: 61.8805127617611
                        },
                    ],
                    pointRadius: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(255, 159, 64, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 1,
                    datalabels: {
                        display: false
                    }
                },
                {
                    data: [{
                        x: 124.1,
                        y: 64,
                        r: "Pérdida de serviciabilidad de diseño Δpsi "
                    }],
                    pointRadius: 0,
                    showLine: true,
                    fontSize:12,

                    borderColor: [
                        'rgba(0, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    pointBackgroundColor: [
                        'rgba(0, 0, 0, 1)',
                    ],
                    borderWidth: 1,
                    datalabels: {
                        align: 'right',
                        rotation: 0,
                        color: 'rgba(0, 0, 0, 1)',
                        font: {
                            size: 7,
                        },
                    },

                },
                {
                    label: 'C',
                    data: [{
                            x: 125.6554,
                            y: 0
                        },
                        {
                            x: 125.6554,
                            y: 67.2151
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
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C',
                    data: [{
                            x: 131.827772727273,
                            y: 0
                        },
                        {
                            x: 131.827772727273,
                            y: 61.0427272727273
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
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C',
                    data: [{
                            x: 138.000145454545,
                            y: 0
                        },
                        {
                            x: 138.000145454545,
                            y: 61.0427272727273
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
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C',
                    data: [{
                            x: 144.172518181818,
                            y: 0
                        },
                        {
                            x: 144.172518181818,
                            y: 61.0427272727273
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
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C',
                    data: [{
                            x: 150.344890909091,
                            y: 0
                        },
                        {
                            x: 150.344890909091,
                            y: 61.0427272727273
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
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C',
                    data: [{
                            x: 156.517263636364,
                            y: 0
                        },
                        {
                            x: 156.517263636364,
                            y: 61.0427272727273
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
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C',
                    data: [{
                            x: 162.689636363636,
                            y: 0
                        },
                        {
                            x: 162.689636363636,
                            y: 61.0427272727273
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
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C',
                    data: [{
                            x: 168.862009090909,
                            y: 0
                        },
                        {
                            x: 168.862009090909,
                            y: 61.0427272727273
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
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C',
                    data: [{
                            x: 175.034381818182,
                            y: 0
                        },
                        {
                            x: 175.034381818182,
                            y: 67.2151
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
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C',
                    data: [{
                            x: 181.206754545454,
                            y: 0
                        },
                        {
                            x: 181.206754545454,
                            y: 67.2151
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
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C',
                    data: [{
                            x: 187.379127272727,
                            y: 0
                        },
                        {
                            x: 187.379127272727,
                            y: 67.2151
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
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C',
                    data: [{
                            x: 193.5515,
                            y: 0
                        },
                        {
                            x: 193.5515,
                            y: 67.2151
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
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C',
                    data: [{
                            x: 125.6554,
                            y: 0
                        },
                        {
                            x: 193.5515,
                            y: 0
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
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C',
                    data: [{
                            x: 125.6554,
                            y: 5.49137272727273
                        },
                        {
                            x: 193.5515,
                            y: 5.49137272727273
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
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C',
                    data: [{
                            x: 125.6554,
                            y: 11.6637454545455
                        },
                        {
                            x: 193.5515,
                            y: 11.6637454545455
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
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C',
                    data: [{
                            x: 125.6554,
                            y: 17.8361181818182
                        },
                        {
                            x: 193.5515,
                            y: 17.8361181818182
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
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C',
                    data: [{
                            x: 125.6554,
                            y: 24.0084909090909
                        },
                        {
                            x: 193.5515,
                            y: 24.0084909090909
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
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C',
                    data: [{
                            x: 125.6554,
                            y: 30.1808636363637
                        },
                        {
                            x: 193.5515,
                            y: 30.1808636363637
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
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C',
                    data: [{
                            x: 125.6554,
                            y: 36.3532363636364
                        },
                        {
                            x: 193.5515,
                            y: 36.3532363636364
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
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C',
                    data: [{
                            x: 125.6554,
                            y: 42.5256090909091
                        },
                        {
                            x: 193.5515,
                            y: 42.5256090909091
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
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C',
                    data: [{
                            x: 125.6554,
                            y: 48.6979818181818
                        },
                        {
                            x: 193.5515,
                            y: 48.6979818181818
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
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C',
                    data: [{
                            x: 125.6554,
                            y: 54.8703545454546
                        },
                        {
                            x: 193.5515,
                            y: 54.8703545454546
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
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }

                },
                {
                    label: 'C',
                    data: [{
                            x: 125.6554,
                            y: 61.0427272727273
                        },
                        {
                            x: 193.5515,
                            y: 61.0427272727273
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
                    borderWidth: 0.3,
                    datalabels: {
                        display: false
                    }
                },
                {
                    label: 'C',
                    data: [{
                            x: 125.6554,
                            y: 67.2151
                        },
                        {
                            x: 193.5515,
                            y: 67.2151
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


                    ],
                    pointRadius: 2,
                    tension: 0,
                    showLine: true,
                    borderColor: [
                        'rgba(150, 0, 0, 1)'
                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)'
                    ],
                    borderWidth: 1,
                    datalabels: {
                        display: false
                    }
                },
            ],
        },
        options: {
            responsive:false,
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
                    top: 10,

                }
            },
            plugins: {
                datalabels: {
                    color: 'black',
                    font: {
                        size: 11,
                        weight: 'bold'
                    },


                }
            },


            scales: {
                xAxes: [{
                    gridLines: {
                        display: true,
                        tickMarkLength: 0,
                    },
                    type: 'linear',
                    position: 'bottom',
                    display: false,
                    ticks: {
                        min: -10
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: true,
                        tickMarkLength: 0,
                    },
                    type: 'linear',
                    position: 'bottom',
                    display: false,
                    ticks: {
                        min: -10
                    }
                }],

            }
        }
    });

    var zr = $('#zr').val();
    var confiabilidad = 16.604188634875 * Math.log10(Math.pow((10), -zr));
    var so = $('#desviEst').val();
    var desvestestandx = (-14.5728154661341 * Math.log10(so)) - 3.23296088955175 + 8.8136;
    var desvestestandy = (-37.1955762281589 * Math.log10(so)) - 8.25179207747691 + 22.0563;
    var m1 = (desvestestandy - confiabilidad) / (desvestestandx - 0);
    var tly = (m1 * (25.9009 - desvestestandx)) + desvestestandy;
    var w18 = parseFloat($('#nroFinal').val());

    var wkip = w18 / 1000000;
    var ejesy = (15.8276333333333 * Math.log10(wkip)) + 20.5922257270378 + 18.7193;

    var m2 = (ejesy - tly) / (48.813 - 25.9009);

    var tl2y = (m2 * (58.027 - 48.813)) + ejesy;

    var mres = $('#totalModResEfectivo').val();
    var mresy = (17.0067913483163 * Math.log10(mres / 1000)) + 21.709;
    var m3 = (mresy - tl2y) / (103.085 - 58.027);
    var tl3y = (m3 * (125.6554 - 103.085)) + mresy;
    $("#tl3graf").val(tl3y);
    
    
    calcularpxpsi();
    var psix = parseFloat($('#psixgraf').val());

    var conf = { x: 0, y: confiabilidad, r: "R" + " = " + document.getElementById("cmbconfia").text };
    window.myChart0.data.datasets[48].data[0, 0, 0] = conf;
    var desvest = { x: desvestestandx, y: desvestestandy, r: "So" + " = " + document.getElementById("desviEst").value };
    window.myChart0.data.datasets[48].data[1, 1, 1] = desvest;
    var tl1 = { x: 25.9009, y: tly, r: "" };
    window.myChart0.data.datasets[48].data[2, 2, 2] = tl1;
    var ejesequi = { x: 48.813, y: ejesy, r: "Esals" + " = " + document.getElementById("nroFinal").value };
    window.myChart0.data.datasets[48].data[3, 3, 3] = ejesequi;
    var tl21 = { x: 58.027, y: tl2y, r: "" };
    window.myChart0.data.datasets[48].data[4, 4, 4] = tl21;
    var mr1 = { x: 103.085, y: mresy, r: "Mr" + " = " + document.getElementById("totalModResEfectivo").value };
    window.myChart0.data.datasets[48].data[5, 5, 5] = mr1;
    var tl3 = { x: 125.6554, y: tl3y, r: "" };
    window.myChart0.data.datasets[48].data[6, 6, 6] = tl3;
    var psi = { x: psix, y: tl3y, r: "PSI" + " = " + document.getElementById("totalPsi").textContent };
    window.myChart0.data.datasets[48].data[7, 7, 7] = psi;
    var sn = { x: psix, y: 0, r: "SN" + " = " + document.getElementById("totalSN").value };
    window.myChart0.data.datasets[48].data[8, 8, 8] = sn;
    window.myChart0.update();
    
}
function imgSn(){  
    var canvas = document.getElementById('chartSNfuturo');
    var dataURL = canvas.toDataURL('image/jpeg',1.0);
    console.log(dataURL);
    document.getElementById("descargaSN").href = dataURL;
}