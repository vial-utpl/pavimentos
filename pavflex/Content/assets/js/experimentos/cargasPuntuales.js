var UN_TRAMO = 1;
var DOS_TRAMOS = 2;

var COLOR_ROJO = "rgb(255, 0, 0)";
var COLOR_AZUL = "rgb(062, 095, 138)";
var COLOR_NEGRO = "rgb(0, 0, 0)";
var LINEA_GRUESA = 2;
var LINEA_FINA = 0.7;
var SEPARACION_CABLE_DEFORMADA = 0.5;
var SEPARACION_DEFORMADA = 3;

var datasetDeformada = [];
function mostrarResultados(msg) {
    console.log('Desplegando resultados...');
    var alturaChart = 198;
    var anchoChart = 500;

    // captura los datos de resultados
    var datos = msg.d;

    // número de línea donde se encuentra los datos de las graficas
    var nroLine_start_xy;
    var nroLine_start_xx_yy;
    

    // variables para gráficas
    var datosCable = [];
    var datosDeformada = [];
    var datosDeformadaCableContiguo = [];
    var datosDeformadaInferior = [];

    var arrCtrlSalidasTramo1 = ['tbNFuerzaA', 'tbNFuerzaAX', 'tbNFuerzaAY',        // Fuerzas [PUNTO A]
                                'tbNFuerzaB', 'tbNFuerzaBX', 'tbNFuerzaBY',        //         [PUNTO B]
                                'tb_TMAX_AB', 'tb_TMIN_AB', 'tb_L_AB', 'tb_S_AB']; // Tensiones [TRAMO AB]

    var arrCtrlSalidasTramo2 = ['tbNFuerzaA', 'tbNFuerzaAX', 'tbNFuerzaAY',        // Fuerzas [PUNTO A]
                                'tbNFuerzaB', 'tbNFuerzaBX', 'tbNFuerzaBY',        //         [PUNTO B] 
                                'tbNFuerzaC', 'tbNFuerzaCX', 'tbNFuerzaCY',        //         [PUNTO C]
                                'tb_TMAX_AB', 'tb_TMIN_AB', 'tb_L_AB', 'tb_S_AB',  // Tensiones [TRAMO AB]
                                'tb_TMAX_BC', 'tb_TMIN_BC', 'tb_L_BC', 'tb_S_BC']; //           [TRAMO BC]

    var arrCtrlSalidasTramo3 = ['tbNFuerzaA', 'tbNFuerzaAX', 'tbNFuerzaAY',        // Fuerzas [PUNTO A]
                                'tbNFuerzaB', 'tbNFuerzaBX', 'tbNFuerzaBY',        //         [PUNTO B] 
                                'tbNFuerzaC', 'tbNFuerzaCX', 'tbNFuerzaCY',        //         [PUNTO C]
                                'tbNFuerzaD', 'tbNFuerzaDX', 'tbNFuerzaDY',        //         [PUNTO D]
                                'tb_TMAX_AB', 'tb_TMIN_AB', 'tb_L_AB', 'tb_S_AB',  // Tensiones [TRAMO AB]
                                'tb_TMAX_BC', 'tb_TMIN_BC', 'tb_L_BC', 'tb_S_BC',  //           [TRAMO BC]
                                'tb_TMAX_CD', 'tb_TMIN_CD', 'tb_L_CD', 'tb_S_CD']; //           [TRAMO CD]

    

    var arrTensiones = ['tbT_1', // Tensiones
                        'tbT_2',
                        'tbT_3',
                        'tbT_4',
                        'tbT_5',
                        'tbT_6',
                        'tbT_7',
                        'tbT_8',
                        'tbT_9',
                        'tbT_10'];

    var arrDesniveles = ['tbH_1', // Desniveles
                        'tbH_2',
                        'tbH_3',
                        'tbH_4',
                        'tbH_5',
                        'tbH_6',
                        'tbH_7',
                        'tbH_8',
                        'tbH_9',
                        'tbH_10',
                        'tbH_11'];

    var nroTramos = $('#ddlNroTramos').val();

    if (nroTramos == UN_TRAMO) {
        console.log('Imprimiendo datos de un tramo');

        // Fuerzas y tensiones
        jQuery.each(arrCtrlSalidasTramo1, function (i, val) {
            $("#" + val).val(datos[i]);
        });
        
        // Tensiones y desniveles
        //console.log('Tensiones...' + datos[14]);
        jQuery.each(arrTensiones, function (i, nombreCtrl) {
            $("#" + nombreCtrl).val(datos[14][i]);
        });

        //console.log('Desniveles...' + datos[15]);
        jQuery.each(arrDesniveles, function (i, nombreCtrl) {
            $("#" + nombreCtrl).val(datos[15][i]);
        });

        nroLine_start_xy = 10;
        nroLine_start_xx_yy = 12;

    } else if (nroTramos == DOS_TRAMOS) {
        console.log('Imprimiendo datos de dos tramos');

        // Fuerzas y tensiones
        jQuery.each(arrCtrlSalidasTramo2, function (i, val) {
            $("#" + val).val(datos[i]);
        });

        
        nroLine_start_xy = 17; 
        nroLine_start_xx_yy = 19;

    } else {
        console.log('Imprimiendo datos de tres tramos');

        // Fuerzas y tensiones
        jQuery.each(arrCtrlSalidasTramo3, function (i, val) {
            $("#" + val).val(datos[i]);
        });

        nroLine_start_xy = 24;
        nroLine_start_xx_yy = 26;
    }

    
    // datos x, y
    for (var i = 0; i < datos[nroLine_start_xy].length; i++) {
        datosCable.push({ x: parseFloat(datos[nroLine_start_xy][i]), y: parseFloat(datos[nroLine_start_xy + 1][i]) });
    }

    // datos xx, yy
    for (var i = 0; i < datos[nroLine_start_xx_yy].length - 1; i++) {
        datosDeformada.push({ x: parseFloat(datos[nroLine_start_xx_yy][i]), y: parseFloat(datos[nroLine_start_xx_yy + 1][i]) });
        datosDeformadaCableContiguo.push({ x: parseFloat(datos[nroLine_start_xx_yy][i]), y: parseFloat(datos[nroLine_start_xx_yy + 1][i]) - SEPARACION_CABLE_DEFORMADA });
        datosDeformadaInferior.push({ x: parseFloat(datos[nroLine_start_xx_yy][i]), y: parseFloat(datos[nroLine_start_xx_yy+1][i]) - SEPARACION_DEFORMADA });
    }

    
   

    var puntosCable = {
        datasets: [{
            label: 'Posición inicial del cable',
            fillColor: "rgba(151,249,190,0.5)",
            strokeColor: "rgba(255,255,255,1)",
            pointColor: "rgba(220,220,220,1)",
            borderColor: "rgb(062, 095, 138)",
            pointStrokeColor: "#fff",
            pointRadius: 0,
            lineTension: 0,
            fill: false,
            data: datosCable
        }]
    }

    var ctxCable = document.getElementById('chartCable').getContext("2d");
    ctxCable.canvas.height = alturaChart;  // setting height of canvas
    ctxCable.canvas.width = anchoChart;

    var chartCable = new Chart(ctxCable, {
        type: 'line',
        data: puntosCable,
        options: {
            legend: {
                display: false,
                position: 'bottom'
            },
            scales: {
                xAxes: [{
                    display: true,
                    type: 'linear',
                    position: 'bottom',
                    scaleLabel: {
                        display: false,
                        labelString: 'x'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: false,
                        labelString: 'y'
                    }
                }]

            }
        }
    });


    // Deformada

    addDatasetsDeformada(datosDeformada, COLOR_NEGRO, LINEA_GRUESA);
    addDatasetsDeformada(datosDeformadaCableContiguo, COLOR_NEGRO, LINEA_GRUESA);
    addDatasetsDeformada(datosDeformadaInferior, COLOR_ROJO, LINEA_FINA);

    // líneas verticales en el cable
    addFlechas(datosDeformada, COLOR_NEGRO, LINEA_FINA, SEPARACION_CABLE_DEFORMADA, 5);

    // líneas verticales en la deformada
    addFlechas(datosDeformada, COLOR_ROJO, LINEA_FINA, SEPARACION_DEFORMADA, 17);

    var puntosDeformada = {
        datasets: datasetDeformada
    }

    var ctxDeformada = document.getElementById('chartDeformada').getContext("2d");
    ctxDeformada.canvas.height = alturaChart;  
    ctxDeformada.canvas.width = anchoChart;

    var chartCable = new Chart(ctxDeformada, {
        type: 'line',
        data: puntosDeformada,
        options: {
            legend: {
                display: false,
                position: 'bottom'
            },
            scales: {
                xAxes: [{
                    display: true,
                    type: 'linear',
                    position: 'bottom',
                    scaleLabel: {
                        display: false,
                        labelString: 'x'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: false,
                        labelString: 'y'
                    }
                }]

            }
        }
    });

    datasetDeformada = [];

}


function generarInformeTXT(msg) {
    // captura los datos del archivo de resultados
    var aData = msg.d;

    console.log("Imprimiendo resultado para el usuario.");
    console.log(aData[0]);

    var blob = new Blob([aData[0]], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "ResultadosCargasPuntuales.txt");
}

// para lineas verticales en cable y deformada
function addFlechas(datos, colorLinea, grosorLinea, separacionY, separacionX) {
    var myNewLine = [];
    console.log("Generado lineas para las flechas");
    for (var i = 0; i <= datos.length; i++) {
        // Agrega líneas verticales con saltos
        if (i % separacionX == 0) {
            // Genera los dos puntos de la linea
            myNewLine.push({ x: datos[i].x, y: datos[i].y });
            myNewLine.push({ x: datos[i].x, y: datos[i].y - separacionY });
            addDatasetsDeformada(myNewLine, colorLinea, grosorLinea);

            // Adhiere la línea a la lista de dataset de "Deformada"
            myNewLine = [];
        }
    }
}

// Agrega un nuevo dataset a la grafica de "Deformada"
function addDatasetsDeformada(datos, colorLinea, grosorLinea) {
    var myNewDataset = {
        label: 'Deformada de cable inferior',
        borderWidth: grosorLinea,
        fillColor: "rgba(151,249,190,0.5)",
        strokeColor: "rgba(255,255,255,1)",
        pointColor: "rgba(220,220,220,1)",
        borderColor: colorLinea,
        backgroundColor: colorLinea,
        pointStrokeColor: "#fff",
        pointRadius: 0,
        lineTension: 0,
        fill: false,
        data: datos
    }

    datasetDeformada.push(myNewDataset);

}

function ejecutarModelo() {
    console.log("Procesando modelo...");

    var strInput = '';
    var nroTramos = $('#ddlNroTramos').val();

    //strInput += $('#tbValor').val() + '\n';
    
    if (nroTramos == 1) {

        strInput += 6 + '\n';

        var nroCargasTramoAB = $('#ddlNroCargasAB').val();
        strInput += nroCargasTramoAB + '\n';
        strInput += getInputs('AB', nroCargasTramoAB);

    } else if (nroTramos == 2) {

        strInput += 7 + '\n';

        var nroCargasTramoAB = $('#ddlNroCargasAB').val();
        var nroCargasTramoBC = $('#ddlNroCargasBC').val();

        strInput += nroTramos + '\n';
        strInput += nroCargasTramoAB + '\n';
        strInput += getInputs('AB', nroCargasTramoAB);
        strInput += nroCargasTramoBC + '\n';
        strInput +=  getInputs('BC', nroCargasTramoBC);

    } else {

        strInput += 8 + '\n';

        var nroCargasTramoAB = $('#ddlNroCargasAB').val();
        var nroCargasTramoBC = $('#ddlNroCargasBC').val();
        var nroCargasTramoCD = $('#ddlNroCargasCD').val();
        strInput += nroTramos + '\n';

        strInput += nroCargasTramoAB + '\n';
        strInput += getInputs('AB', nroCargasTramoAB);

        strInput += nroCargasTramoBC + '\n';
        strInput += getInputs('BC', nroCargasTramoBC);
        
        strInput += nroCargasTramoCD + '\n';
        strInput += getInputs('CD', nroCargasTramoCD);
        
    }

    console.log(strInput);

    

    var actionData = "{'value': '" + strInput + "'}";

    
        // abre ventana modal de espera
        waitingDialog.show('Procesando modelo.', { dialogSize: 'sm', progressType: 'warning' });

        // envio de datos al servidor
        $.ajax({
            type: "POST",
            url: "cargasPuntuales.aspx/procesarModelo",
            data: actionData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {

                //graficarResultados(msg);
                console.log("Extrayendo resultados devueltos....")
                //console.log(msg);

                try {
                    mostrarResultados(msg);
                } catch (err) {
                    alert('Error en la ejecución del modelo');
                }

                // cierra ventana modal de espera
                waitingDialog.hide();
            }
        });

        // habilita controles para descarga
        $('#save-deformada').prop('disabled', false);
        $('#save-cable').prop('disabled', false);
        $('#btnDecargarResultados').prop('disabled', false);
    

   
}


/**
 * Asigna los valores del ejemplo
 * @param {strTramo} Nombre de tramo
 * @param {nroCargas} Número de cargas 
 * Autor: Santiago Quiñones
*/
function setInputs(strTramo, nroCargas, arrCargas, arrDistancias, longVano, longCable) {
    var arrWAB = ["tbW" + strTramo + "_1", "tbW" + strTramo + "_2", "tbW" + strTramo + "_3", "tbW" + strTramo + "_4",
        "tbW" + strTramo + "_5", "tbW" + strTramo + "_6", "tbW" + strTramo + "_7", "tbW" + strTramo + "_8", "tbW" + strTramo + "_9", "tbW" + strTramo + "_10"];
    var arrDAB = ["tbD" + strTramo + "_1", "tbD" + strTramo + "_2", "tbD" + strTramo + "_3", "tbD" + strTramo + "_4", "tbD" + strTramo + "_5",
        "tbD" + strTramo + "_6", "tbD" + strTramo + "_7", "tbD" + strTramo + "_8", "tbD" + strTramo + "_9", "tbD" + strTramo + "_10", "tbD" + strTramo + "_11"];

    jQuery.each(arrWAB, function (i, val) {
        if (i < nroCargas && nroCargas != 0)
            $("#" + val).val(arrCargas[i]);
    });

    

    jQuery.each(arrDAB, function (i, val) {
        if (i <= nroCargas && nroCargas != 0)
            $("#" + val).val(arrDistancias[i]);
    });
    

    $("#tbHL" + strTramo).val(longVano);
    $("#tbY_" + strTramo).val(longCable); 
}

/**
 * Otiene los datos de entrada de los tramos
 * @param {strTramo} Nombre de tramo
 * @param {nroCargas} Número de tramos 
 * Autor: Santiago Quiñones
*/
function getInputs(strTramo, nroCargas) {
    var strDatos = "";

    var arrWAB = ["tbW" + strTramo + "_1", "tbW" + strTramo + "_2", "tbW" + strTramo + "_3", "tbW" + strTramo + "_4",
        "tbW" + strTramo + "_5", "tbW" + strTramo + "_6", "tbW" + strTramo + "_7", "tbW" + strTramo + "_8", "tbW" + strTramo + "_9", "tbW" + strTramo + "_10"];
    var arrDAB = ["tbD" + strTramo + "_1", "tbD" + strTramo + "_2", "tbD" + strTramo + "_3", "tbD" + strTramo + "_4", "tbD" + strTramo + "_5",
        "tbD" + strTramo + "_6", "tbD" + strTramo + "_7", "tbD" + strTramo + "_8", "tbD" + strTramo + "_9", "tbD" + strTramo + "_10", "tbD" + strTramo + "_11"];

    jQuery.each(arrWAB, function (i, val) {
        if (i < nroCargas && nroCargas != 0)
            strDatos = strDatos + $("#" + val).val() + ' ';
    });

    strDatos += '\n';

    jQuery.each(arrDAB, function (i, val) {
        if (i <= nroCargas && nroCargas != 0)
            strDatos = strDatos + $("#" + val).val() + ' ';
    });
    strDatos += '\n';

    strDatos = strDatos + $("#tbHL" + strTramo).val() + '\n';
    strDatos = strDatos + $("#tbY_" + strTramo).val() + '\n';

    return strDatos;
}


//Disable all ctrl Tramos
function disableCtrTramos(strTramo, nroTramos) {
    estado = nroTramos == 0 ? true : false;

    var arrWAB = ["tbW" + strTramo + "_1", "tbW" + strTramo + "_2", "tbW" + strTramo + "_3", "tbW" + strTramo + "_4",
        "tbW" + strTramo + "_5", "tbW" + strTramo + "_6", "tbW" + strTramo + "_7", "tbW" + strTramo + "_8", "tbW" + strTramo + "_9", "tbW" + strTramo + "_10"];
    var arrDAB = ["tbD" + strTramo + "_1", "tbD" + strTramo + "_2", "tbD" + strTramo + "_3", "tbD" + strTramo + "_4", "tbD" + strTramo + "_5",
        "tbD" + strTramo + "_6", "tbD" + strTramo + "_7", "tbD" + strTramo + "_8", "tbD" + strTramo + "_9", "tbD" + strTramo + "_10", "tbD" + strTramo + "_11"];

    jQuery.each(arrWAB, function (i, val) {
        if (i < nroTramos && nroTramos != 0) {
            $("#" + val).prop("disabled", false);
            //document.getElementById(val).required = true;
        }
        else {
            $("#" + val).prop("disabled", true);
            //document.getElementById(val).required = false;
        }
    });

    jQuery.each(arrDAB, function (i, val) {
        if (i <= nroTramos && nroTramos != 0)
            $("#" + val).prop("disabled", false);
        else
            $("#" + val).prop("disabled", true);
    });

    $("#tbHL" + strTramo).prop("disabled", estado)
    $("#tbY_" + strTramo).prop("disabled", estado);
}




/**
 * Establece configuraciones iniciales del experimento
 * Autor: Santiago Quiñones
*/
function configuracionInicial() {
    //Deshabilita los tramos BC - CD
    $('#myTab li:eq(1)').addClass('disabled');
    $('#myTab li:eq(2)').addClass('disabled');
    $('#myTab li:eq(1) a').removeAttr("data-toggle");
    $('#myTab li:eq(2) a').removeAttr("data-toggle");

    disableCtrTramos("AB", 0);
    disableCtrTramos("BC", 0);
    disableCtrTramos("CD", 0);

    // Output
    $('#tablaPuntoC').hide();
    $('#tablaPuntoD').hide();
    $('#tabla_Tensiones_BC').hide();
    $('#tabla_Tensiones_CD').hide();


}




$(document).ready(function () {

    

    configuracionInicial();

    /**
      * Control de tramos - Input y Output
      * Autor: Santiago Quiñones
    */
    function controlDeCambios() {
        var nroTramos = $('#ddlNroTramos').val();

        if (nroTramos == UN_TRAMO) {
            // input
            $('#myTab li:eq(0) a').tab('show')
            console.log('Primer tab');
            $('#myTab li:eq(1)').addClass('disabled');
            $('#myTab li:eq(2)').addClass('disabled');
            $('#myTab li:eq(1) a').removeAttr("data-toggle");
            $('#myTab li:eq(2) a').removeAttr("data-toggle");

            // output
            $('#tablaPuntoC').hide();
            $('#tablaPuntoD').hide();
            $('#tabla_Tensiones_BC').hide();
            $('#tabla_Tensiones_CD').hide();
            $('#tabsResultados li:eq(2) a').tab('show');

            // esquema
            $("#FigMain").fadeOut(1000, function () {
                $(this).attr('src', '../../Images/CargaPuntual/Tramo1-min.png');
            }).fadeIn(1000);



        } else if (nroTramos == DOS_TRAMOS) {
            // input
            $('#myTab li:eq(0) a').tab('show')
            $('#myTab li:eq(1)').removeClass('disabled');
            $('#myTab li:eq(1) a').attr("data-toggle", "tab");
            $('#myTab li:eq(2)').addClass('disabled');
            $('#myTab li:eq(2) a').removeAttr("data-toggle");

            // output
            $('#tablaPuntoC').show();
            $('#tablaPuntoD').hide();
            $('#tabla_Tensiones_BC').show();
            $('#tabla_Tensiones_CD').hide();
            $('#tabsResultados li:eq(2)').addClass('disabled');
            $('#tabsResultados li:eq(2) a').removeAttr("data-toggle")

            // esquema
            //$('#FigMain').attr('src', '../../Images/CargaPuntual/Tramo2-min.png');

            $("#FigMain").fadeOut(1000, function () {
                $(this).attr('src', '../../Images/CargaPuntual/Tramo2-min.png');
            }).fadeIn(1000);

        } else {
            // input
            $('#myTab li:eq(0) a').tab('show')
            $('#myTab li:eq(1)').removeClass('disabled');
            $('#myTab li:eq(1) a').attr("data-toggle", "tab");
            $('#myTab li:eq(2)').removeClass('disabled');
            $('#myTab li:eq(2) a').attr("data-toggle", "tab");

            // output
            $('#tablaPuntoC').show();
            $('#tablaPuntoD').show();
            $('#tabla_Tensiones_BC').show();
            $('#tabla_Tensiones_CD').show();
            $('#tabsResultados li:eq(2)').addClass('disabled');
            $('#tabsResultados li:eq(2) a').removeAttr("data-toggle")

            // esquema
            $("#FigMain").fadeOut(1000, function () {
                $(this).attr('src', '../../Images/CargaPuntual/Tramo3-min.png');
            }).fadeIn(1000);
        }
    }

    /**
      * Control de cambios en tramos - Input y Output
      * Autor: Santiago Quiñones
    */
    $('#ddlNroTramos').change(function () {
        controlDeCambios();
    });

    /**
      * Maneja la visualización de los controles en el tramo AB - input
      * Autor: Santiago Quiñones
    */
    $('#ddlNroCargasAB').change(function () {
        setConfiguracionControlesTramos('AB');
    });

    /**
      * Maneja la visualización de los controles en el tramo AB - input
      * Autor: Santiago Quiñones
    */
    $('#ddlNroCargasBC').change(function () {
        setConfiguracionControlesTramos('BC');
    });

    /**
      * Maneja la visualización de los controles en el tramo AB - input
      * Autor: Santiago Quiñones
    */
    $('#ddlNroCargasCD').change(function () {
        setConfiguracionControlesTramos('CD');
    });

    function setConfiguracionControlesTramos(strTramo) {
        if(strTramo == "AB"){
            var nroCargasTramoAB = $('#ddlNroCargasAB').val();
            disableCtrTramos("AB", nroCargasTramoAB);
        }else if(strTramo == "BC"){
            var nroCargasTramoAB = $('#ddlNroCargasBC').val();
            disableCtrTramos("BC", nroCargasTramoAB);
        } else {
            var nroCargasTramoAB = $('#ddlNroCargasCD').val();
            disableCtrTramos("CD", nroCargasTramoAB);
        }
    }

    // Control que no se envie el formulario con post y
    // permite validar los controles con HTML5
    $('#formCargasPuntuales').submit(function (event) {
        if (this.checkValidity()) {
            event.preventDefault();

            console.log("Ejecutando modelo");
            ejecutarModelo();
        }
    });

    /**
      * Máximiza imagen de esquema
      * Autor: Santiago Quiñones
    */
    $('#spanZoom').click(function () {
        console.log('Maximizando elemento...');

        var nroTramos = $('#ddlNroTramos').val();

        if (nroTramos == 1) {
            $('.imagepreview').attr('src', '../../Images/CargaPuntual/Tramo1.png');
        } else if (nroTramos == 2) {
            $('.imagepreview').attr('src', '../../Images/CargaPuntual/Tramo2.png');
        } else {
            $('.imagepreview').attr('src', '../../Images/CargaPuntual/Tramo3.png');
        }

        // abre la ventana modal
	    $('#imagemodal').modal('show'); 
        
    });

    $('#spanZoom').hover(function () {
        console.log('Sobre el icono');
        $(this).css('cursor', 'pointer');
        
    });

    
    /**
      * Descarga las gráficas
      * Autor: Santiago Quiñones
    */
    $("#save-cable").click(function () {
        console.log('Download img cable');
        $("#chartCable").get(0).toBlob(function (blob) {
            saveAs(blob, "cable.png");
        });
    });

    $("#save-deformada").click(function () {
        console.log('Download img deformada');
        $("#chartDeformada").get(0).toBlob(function (blob) {
            saveAs(blob, "deformada.png");
        });
    });

    // descargar archivo de resultados
    $("#btnDecargarResultados").click(function () {
        console.log("Descargando archivo de resultados... ");
        
        $.ajax({
            type: "POST",
            url: "CargasPuntuales.aspx/getInforme",
            data: "{}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                generarInformeTXT(msg);
            }
        });


    });
    

    /**
      * Carga ejemplos dependiendo del número de tramos
      * Autor: Santiago Quiñones
    */
    $('#btnEjemplo').click(function () {
        
        var nroTramos = $('#ddlNroTramos').val();
        var arrCargas;
        var arrDistancias;
        var longVano;
        var longCable;
        var nroCargas;

        if (nroTramos == UN_TRAMO) {
            console.log('Cargando ejemplo para un tramo.');
            // TRAMO AB
            $('#ddlNroCargasAB').val(6);
            nroCargas = 6;
            arrCargas = [10, 5, 20, 10, 20, 25];
            arrDistancias = [4, 4, 5, 4, 7, 2, 6];
            longVano = 5;
            longCable = -30;
            setInputs('AB', nroCargas, arrCargas, arrDistancias, longVano, longCable);

            setConfiguracionControlesTramos('AB');

        } else if (nroTramos == DOS_TRAMOS) {
            console.log('Cargando ejemplo para dos tramos.');

            // TRAMO AB
            $('#ddlNroCargasAB').val(6);
            nroCargas = 6;
            arrCargas = [10, 5, 20, 10, 20, 25];
            arrDistancias = [4, 4, 5, 4, 7, 2, 6];
            longVano = 5;
            longCable = -30;
            setInputs('AB', nroCargas, arrCargas, arrDistancias, longVano, longCable);
            setConfiguracionControlesTramos('AB');

            // TRAMO BC
            $('#ddlNroCargasBC').val(3);
            nroCargas = 3;
            arrCargas = [5, 2.5, 6.25];
            arrDistancias = [2, 4, 5, 4];
            longVano = 1.5;
            longCable = -30;
            setInputs('BC', nroCargas, arrCargas, arrDistancias, longVano, longCable);
            setConfiguracionControlesTramos('BC');

        } else {
            console.log('Cargando ejemplo para tres tramos.');


            // TRAMO AB
            $('#ddlNroCargasAB').val(6);
            nroCargas = 6;
            arrCargas = [10, 5, 20, 10, 20, 25];
            arrDistancias = [4, 4, 5, 4, 7, 2, 6];
            longVano = 5;
            longCable = -30;
            setInputs('AB', nroCargas, arrCargas, arrDistancias, longVano, longCable);
            setConfiguracionControlesTramos('AB');

            // TRAMO BC
            $('#ddlNroCargasBC').val(3);
            nroCargas = 3;
            arrCargas = [5, 2.5, 6.25];
            arrDistancias = [2, 4, 5, 4];
            longVano = 1.5;
            longCable = -30;
            setInputs('BC', nroCargas, arrCargas, arrDistancias, longVano, longCable);
            setConfiguracionControlesTramos('BC');

            // TRAMO CD
            $('#ddlNroCargasCD').val(4);
            nroCargas = 4;
            arrCargas = [10, 45, 45, 10];
            arrDistancias = [15, 13, 14, 13, 15];
            longVano = 18;
            longCable = 5;
            setInputs('CD', nroCargas, arrCargas, arrDistancias, longVano, longCable);
            setConfiguracionControlesTramos('CD');
        }

        
    });
});


// Propiedades en tablas
$(function () {

    $("table").delegate('td', 'mouseover mouseleave', function (e) {
        if (e.type == 'mouseover') {
            $(this).parent().addClass("hover");
            $("colgroup").eq($(this).index()).addClass("hover");
        } else {
            $(this).parent().removeClass("hover");
            $("colgroup").eq($(this).index()).removeClass("hover");
        }
    });

});

