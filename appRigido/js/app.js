var pasoPaso = false;

$(document).ready(function () {
    
    // Para agregar la capa de base //
    $('.numeric2').autoNumeric({
        aSep: '',
        aDec: '.',
        mDec: 2
    });
    $('.integer').autoNumeric({
        aSep: '',
        aDec: '.',
        mDec: 0
    });
    

  

    // arreglo para mostrar visualmente la capa base y que mostrara tambien el calculo de los parametros de la base//
    $('#materialsubbasegranular').css('display', 'none');
    $('#materialsubbasecemento').css('display', 'none');
    $('#materialsubbasebituminoso').css('display', 'none');
    $('#grafica-sbs-granular').css('display', 'none');
    $('#grafica-sbs-cemento').css('display', 'none');
    $('#grafica-sbs-bituminosa').css('display', 'none');
    $('#dat-subbase-graftr').css('display', 'none');

    $("#clasfvehiculos input:text").css('display', 'none');
   
    //botones Cargar ejemplo - Calcular - Reporte - Detalle
    document.getElementById('reporte').style.display = 'true';
    document.getElementById('btnPaso').style.display = 'true';
    document.getElementById('clcd').style.display = 'none';
    document.getElementById('ejemplo').style.display = 'none';
    $("#tabinicial1").on("click", function () {
        $("#ejemplo").hide();
        $("#clcd").hide();
    });

    $("#tabinicial2").on("click", function () {
        $("#ejemplo").show();
        $("#clcd").show();
    });
    $('.right-proceso-rigid').hide();
    $('#btnPaso').click(function () {
        $("#panelPrimario").toggleClass('col-md-12 col-md-5');
        $("#panelPrimario").find(".dis-col-3").toggleClass('col-md-3 col-md-12');
        $("#panelPrimario").find(".dis-col-4").toggleClass('col-md-4 col-md-12');
        $("#panelPrimario").find(".dis-col-6").toggleClass('col-md-6 col-md-12');
        $("#panelPrimario").find(".dis-col-8").toggleClass('col-md-8 col-md-12');
        $("#panelPrimario").find(".dis-col-9").toggleClass('col-md-9 col-md-12');
        $("#div-paso-paso").toggleClass('col-md-12 col-md-7');
        $('#div-paso-paso').toggle();
        var divpasopaso = $("#div-paso-paso");
		var wh = $( window ).height() + 'px'; 
        if (divpasopaso.is(":visible")) {
            $('#btnPaso').hide();
            $('#tituloapp').css('height', "40px");
            $('#tituloapp').css('line-height', "40px");
            $('#procedimientos').css('height', "40px");
            $('#procedimientos').css('line-height', "40px");
            $('#panelPrimario').css('height', wh);
            $('#div-ingreso-datos').css('height', wh);
            $('#div-ingreso-datos').css('overflow-y', "scroll");
            $('#pestanas').css('height', wh);
            $('#pestanas').css('overflow-y', "scroll");
            $('.right-proceso-rigid').show();
            $('.helpData').hide();
            $('.btnRigidoEjemplo').hide();
            
            $('.dis-col-9').addClass('');
            $('.col-subrasante').css('height', "720px");
            
            $('.mk').css('height', "120px");
            $('.mk1').css('height', "100px");
            //$('.height-drenaje').css('height', "130px");
            //$('.height-drenaje-body').css('height', "110px");
            $('.base_contenedor').css('height', "auto");
            /*$('.coef_J').css('height', "auto");
            $('.coef_J_body').css('height', "auto");*/
            $('.fila-2-principal, .fila-2-secundario').addClass('auto-height');
            $('.fila-2-principal_reducida, .fila-2-secundario_reducida').addClass('auto-height');
            $('.height-fac-PS').css('height', "230px");
            
            $('#myModal_aviso_rigid_anclas').modal('show');  
            $("html, body").animate({
				scrollTop: 0 + "px"
            });
        } else {
            $('#tituloapp').css('height', "30px");
            $('#tituloapp').css('line-height', "30px");
            $('#procedimientos').css('height', "30px");
            $('#procedimientos').css('line-height', "30px");
            $('#panelPrimario').css('height', "");
            $('#div-ingreso-datos').css('height', "");
            $('#div-ingreso-datos').css('overflow-y', "");
            $('#pestanas').css('height', "");
            $('#pestanas').css('overflow-y', "");
            $('.right-proceso-rigid').hide();
            $('.helpData').show();
            //$('.dis-col-9').css('height', "215px");
            $('.col-subrasante').css('height', "auto");
            $('.mk').css('height', "165px");
            $('.mk1').css('height', "145px");
            //$('.height-drenaje').css('height', "180px");
            //$('.height-drenaje-body').css('height', "160px");
            $('.base_contenedor').css('height', "190px");
            //$('.coef_J').css('height', "234px");
            //$('.coef_J_body').css('height', "224px");
            $('.fila-2-principal, .fila-2-secundario').removeClass('auto-height');
            $('.fila-2-principal_reducida, .fila-2-secundario_reducida').removeClass('auto-height');
            $('.height-fac-PS').css('height', "230px");
            $('.btnRigidoEjemplo').show();
        }
    });

    $('#salirProcedimientos').click(function () {
        $('#btnPaso').trigger('click');
        $('#btnPaso').show();

    });

    // métodos para anclar secciones de la pagina
    $("#parametroTrafico").on("click", function () {
        $("ul.nav-pills li").removeClass("active");
        $("#paso-paso").find(".tab-pane").removeClass("in active");
        $("#tabTrafico").addClass('active');
        $("#tabEjesEquivalentes").addClass('in active');
    });

    $("#parametroSubbase").on("click", function () {
        $("ul.nav-pills li").removeClass("active");
        $("#paso-paso").find(".tab-pane").removeClass("in active");
        $("#tabSubbase").addClass('active');
        $("#grafsubbaseGranular").addClass('in active');
    });
    $("#parametroDrenaje").on("click", function () {
        $("ul.nav-pills li").removeClass("active");
        $("#paso-paso").find(".tab-pane").removeClass("in active");
        $("#tabDrenaje").addClass('active');
        $("#drenaje").addClass('in active');
    });
    $("#parametroK").on("click", function () {
        $("ul.nav-pills li").removeClass("active");
        $("#paso-paso").find(".tab-pane").removeClass("in active");
        $("#tabK").addClass('active');
        $("#moduloSubrasante").addClass('in active');
    });
    $("#parametroFundacionRigida").on("click", function () {
        $("ul.nav-pills li").removeClass("active");
        $("#paso-paso").find(".tab-pane").removeClass("in active");
        $("#tabFundacionRigida").addClass('active');
        $("#efectfundacionrigida").addClass('in active');
    });
    $("#parametroPerdidaSoporte").on("click", function () {
        $("ul.nav-pills li").removeClass("active");
        $("#paso-paso").find(".tab-pane").removeClass("in active");
        $("#tabPerdidaSoporte").addClass('active');
        $("#moduloKCORR").addClass('in active');
    });

    $("#parametroResultados").on("click", function () {
        $("ul.nav-pills li").removeClass("active");
        $("#paso-paso").find(".tab-pane").removeClass("in active");
        $("#tabEspesorFinal").addClass('active');
        $("#espesorhormigon").addClass('in active');
    });

    //botón continuar
    $("#Continuar_rigido").on("click", function () {
        $("#div-ingreso-datos ul.nav-pills li").removeClass("active");
        $("#variables").find(".tab-pane").removeClass("in active");
        $("#tabinicial2").addClass('active');
        $("#variablesentrada").addClass('in active');
        $("#ejemplo").show();
        $("#clcd").show();
    });

    // Guardar las imágenes

    $("#guardarSubbaseGranular").click(function () {
        $("#subBaseGranular").get(0).toBlob(function (blob) {
            saveAs(blob, "Ábaco de diseño para subbase granular.jpg");
        }, "image/jpeg", 1);
    });

    $("#guardarsubBaseCemento").click(function () {
        $("#subBaseCemento").get(0).toBlob(function (blob) {
            saveAs(blob, "Ábaco de diseño para subbase tratada con cemento.jpg");
        }, "image/jpeg", 1);
    });

    $("#guardarsubBaseBituminoso").click(function () {
        $("#subBaseBituminoso").get(0).toBlob(function (blob) {
            saveAs(blob, "Ábaco de diseño para subbase tratada con asfalto.jpg");
        }, "image/jpeg", 1);
    });

    $("#guardarmoduloReaccionCompuestoK").click(function () {
        $("#moduloReaccionCompuestoK").get(0).toBlob(function (blob) {
            saveAs(blob, "Ábaco de diseño para el módulo de reacción compuesto.jpg");
        }, "image/jpeg", 1);
    });

    $("#guardarKfundacionRigida").click(function () {
        $("#KfundacionRigida").get(0).toBlob(function (blob) {
            saveAs(blob, "Ábaco de diseño para el efecto de fundación rígida.jpg");
        }, "image/jpeg", 1);
    });

    $("#guardarperdidaSoporteK").click(function () {
        $("#perdidaSoporteK").get(0).toBlob(function (blob) {
            saveAs(blob, "Ábaco de diseño para el factor de pérdida de soporte.jpg");
        }, "image/jpeg", 1);
    });

    $("#guardarespesorFinalD").click(function () {
        $("#espesorFinalDamplio").get(0).toBlob(function (blob) {
            saveAs(blob, "Ábaco del espesor de la losa de concreto.jpg");
        }, "image/jpeg", 1);
    });

    $('#materialsbs').on('click', function () {
        var subbasemat = $("#subbasematerial").text();
        if (subbasemat == ("Subbase granular")) {
            $('#materialsubbasegranular').show(10);
            $('#grafica-sbs-granular').show(10);
            document.getElementById('grafica-sbs-cemento').style.display = 'none';
            document.getElementById('grafica-sbs-bituminosa').style.display = 'none';
            document.getElementById('materialsubbasecemento').style.display = 'none';
            document.getElementById('materialsubbasebituminoso').style.display = 'none';

            $("#subbaseCBR").prop('checked',false);
                $("#subbasevalor-r").prop('checked',false);
                $("#subbasetriaxal-texas").prop('checked',false);
                $("#subbaseRCNC").prop('checked',false);
                $("#subbaseEM").prop('checked',false);
                $("#subbase-crc-td").text("(Seleccione material)");
                $("#subbase-crc").val("");
                $("#subbasea2").val("");
                $("#subbaseMb").val("");
        } else {
            $("#subbase-crc-td").text("(Seleccione material)");
            document.getElementById('materialsubbasegranular').style.display = 'none';
            document.getElementById('grafica-sbs-granular').style.display = 'none';
            if (subbasemat == ("Subbase tratada con cemento")) {
                $('#materialsubbasecemento').show(10);
                $('#grafica-sbs-cemento').show(10);

                document.getElementById('grafica-sbs-granular').style.display = 'none';
                document.getElementById('grafica-sbs-bituminosa').style.display = 'none';
                document.getElementById('materialsubbasegranular').style.display = 'none';
                document.getElementById('materialsubbasebituminoso').style.display = 'none';
                $("#subbasevalor-r").prop('checked',false);
                $("#subbasetriaxal-texas").prop('checked',false);
                $("#subbaseRCNC").prop('checked',true);
                $("#subbaseEM").prop('checked',false);
                $("#subbase-crc-td").text("Resistencia a la compresión no confinada");
                $("#subbase-crc").val("");
                $("#subbasea2").val("");
                $("#subbaseMb").val("");
            } else {
                $("#subbase-crc-td").text("(Seleccione material)");
                document.getElementById('materialsubbasecemento').style.display = 'none';
                document.getElementById('grafica-sbs-cemento').style.display = 'none'
                if (subbasemat == ("Subbase tratada con asfalto")) {
                    $('#materialsubbasebituminoso').show(10);
                    $('#grafica-sbs-bituminosa').show(10);

                    $("#subbaseCBR").prop('checked',false);
                $("#subbasevalor-r").prop('checked',false);
                $("#subbasetriaxal-texas").prop('checked',false);
                $("#subbaseRCNC").prop('checked',false);
                $("#subbaseEM").prop('checked',true);
                $("#subbase-crc-td").text("Estabilidad de Marshall");
                $("#subbase-crc").val("");
                $("#subbasea2").val("");
                $("#subbaseMb").val("");
                    document.getElementById('grafica-sbs-granular').style.display = 'none';
                    document.getElementById('grafica-sbs-cemento').style.display = 'none';
                    document.getElementById('materialsubbasegranular').style.display = 'none';
                    document.getElementById('materialsubbasecemento').style.display = 'none';
                    

                } else {
                    $("#subbase-crc-td").text("(Seleccione material)");
                    document.getElementById('materialsubbasebituminoso').style.display = 'none';
                    document.getElementById('grafica-sbs-bituminosa').style.display = 'none';
                }
            }
        }

    });


    $("#subbaseCBR").on("click", function () {
        var subbaseCBR = $("#subbaseCBR")
        if (subbaseCBR.is(":checked")) {
            $("#subbase-crc-td").text("CBR (%)");
            $("#subbase-crc").val("");
            $("#subbasea2").val("");
            $("#subbaseMb").val("");
        } else {
            $("#subbase-crc-td").text("");

        };
    });
    $("#subbasevalor-r").on("click", function () {
        var subbasevalr = $("#subbasevalor-r")
        if (subbasevalr.is(":checked")) {
            $("#subbase-crc-td").text("Valor-R");
            $("#subbase-crc").val("");
            $("#subbasea2").val("");
            $("#subbaseMb").val("");
        } else {
            $("#subbase-crc-td").text("");

        };
    });
    $("#subbasetriaxal-texas").on("click", function () {
        var subbasetrtexas = $("#subbasetriaxal-texas")
        if (subbasetrtexas.is(":checked")) {
            $("#subbase-crc-td").text("Triaxial de Texas");
            $("#subbase-crc").val("");
            $("#subbasea2").val("");
            $("#subbaseMb").val("");
        } else {
            $("#subbase-crc-td").text("");

        };
    });
    $("#subbaseRCNC").on("click", function () {
        var subbasercnc = $("#subbaseRCNC")
        if (subbasercnc.is(":checked")) {
            $("#subbase-crc-td").text("Resistencia a la compresión no confinada");
            $("#subbase-crc").val("");
            $("#subbasea2").val("");
            $("#subbaseMb").val("");
        } else {
            $("#subbase-crc-td").text("");
        };
    });
    $("#subbaseEM").on("click", function () {
        var subbaseem = $("#subbaseEM")
        if (subbaseem.is(":checked")) {
            $("#subbase-crc-td").text("Estabilidad de Marshall");
            $("#subbase-crc").val("");
            $("#subbasea2").val("");
            $("#subbaseMb").val("");
        } else {
            $("#subbase-crc-td").text("");

        };
    });


    // Considerar profundidad rigida//
    $("#funrigida").on("click", function () {
        var kcombinado = parseFloat($('kfrsubrasante').val());
        var kfundacion = parseFloat($('ksubrasante').val());
        var funrigida = $("#funrigida")
        if (funrigida.is(":checked")) {
            
            $("#profrigida").prop("disabled", false);
            
            $("#usoK").val(kcombinado)
            calcularyprofundidadrigida();
            datosgraf();
            loadGraph9();
            copyk();
            loadGraph6();
            finalk();
        } else {
            
            $('#kfrsubrasante').val("")
            $("#profrigida").prop("disabled", true);
            $("#usoK").val(kfundacion);
            loadGraph4();
            copyk();
            perdidasorporte();
            loadGraph6();
            finalk();

        };
    });




    // controles del modal para los tipos de vehiculos//
    $('#closemodalx').click(function () {
        $('#myModalvehiculos').modal('hide');
    });


    
    
    // Para poder ingresar el porcentaje de los vehiculos//

    
    $("#clcd").on("click", function () {
		var valid = $('#frmGeneral').valid();
		if (valid){

            if (($("#trf_tmda").val() === "") && ($("#trf_tasa_cre").val() === "") && ($("#trf_per_dis").val() === "") && ($("#trf_direccionalidad").val() === "") && ($("#trf_espesor").val() === "")) {
                $("#noCalcula_ESALS").show();
            } else {
                $("#noCalcula_ESALS").hide();
            }

			var espesord = Newton();
			var esp = (Math.ceil(espesord / 0.5) * 0.5).toFixed(2);
			$("#d").val(espesord.toFixed(2));
			$("#dr").val(esp);
			iterarEspesor();
			loadGraph7();
			var altura = $(document).height();
			$("html, body").animate({
				scrollTop: altura + "px"
            });
            $("#btnPaso").show();
            $("#reporte").show();
            $(".datosESALS").show();
			if(($('#trf_tmda').val() === "")&&($('#trf_tasa_cre').val() === "")&&($('#trf_per_dis').val() === "")&&($('#trf_direccionalidad').val() === "")&&($('#trf_espesor').val() === "")){
				$(".datosESALS").hide();
			} else {
			$(".datosESALS").show();
		}
    }

    });
    $("#cargar-vehiculos").on("click", function () {
        
        if(($('#trf_tmda').val() === "")&&($('#trf_tasa_cre').val() === "")&&($('#trf_per_dis').val() === "")&&($('#trf_direccionalidad').val() === "")&&($('#trf_espesor').val() === "")){
            $(".datosESALS").hide();
            $("#noCalcula_ESALS").show();
        } else {
        $(".datosESALS").show();
        $("#noCalcula_ESALS").hide();
        
    }

    });

    
    
    copyk();
    finalk();

});

function restrictionDireccionalidad (){
    var trf_direccionalidad = parseFloat($('#trf_direccionalidad').val());
    if(50 > trf_direccionalidad) {
        alert ("Valores entre 50% y 100%")
        $('#trf_direccionalidad').val("")
    }  

}
function restrictionPorcent () {
    var trf_tasa_cre = parseFloat($('#trf_tasa_cre').val());
    if(trf_tasa_cre > 100) {
        alert ("Valores entre 0 y 100")
        $('#trf_tasa_cre').val("")
    }
    var trf_direccionalidad = parseFloat($('#trf_direccionalidad').val());
    if(trf_direccionalidad > 100) {
        alert ("Valores entre 0 y 100")
        $('#trf_direccionalidad').val("")
    }
    var trf_direccionalidad = parseFloat($('#trf_direccionalidad').val());
    if(trf_direccionalidad > 100) {
        alert ("Valores entre 0 y 100")
        $('#trf_direccionalidad').val("")
    }
}
function copyPfRigid() {
    var pf = parseFloat($('#pfinal').val());
    if ( pf <= 2 ) {
        $('#trf_pt').val("2");
    } else if ((2 < pf) && (pf <= 2.5)) {
        $('#trf_pt').val("2.5");
    }else if (pf > 2.5) {
        $('#trf_pt').val("3");
}
}

// calculo del valor de transferencia de carga//
function transfcarga() {
    var tipoberma = $("#tipoberma option:selected").text();
    var dispcarga = $("#dispcarga option:selected").text();
    var tipopavimento = $("#tipopavimento option:selected").text();
    if (tipoberma == "De asfálto") {
        if (dispcarga == "Si") {
            if (tipopavimento == "No reforzado o reforzado con juntas") {
                $("#tcrango").val("3.2");
                $("#tcvalor").val("3.2");
            } else if (tipopavimento == "Reforzado continuo") {
                $("#tcrango").val("2.9 - 3.2");
                $("#tcvalor").val("3.05");
            }
        } else if (dispcarga == "No") {
            if (tipopavimento == "No reforzado o reforzado con juntas") {
                $("#tcrango").val("3.8 - 4.4");
                $("#tcvalor").val("4.1");
            } else if (tipopavimento == "Reforzado continuo") {
                $("#tcrango").val("1");
                $("#tcvalor").val("1");
            }
        }
    } else if (tipoberma == "De concreto") {
        if (dispcarga == "Si") {
            if (tipopavimento == "No reforzado o reforzado con juntas") {
                $("#tcrango").val("2.5 - 3.1");
                $("#tcvalor").val("2.8");
            } else if (tipopavimento == "Reforzado continuo") {
                $("#tcrango").val("2.3 - 2.9");
                $("#tcvalor").val("2.6");
            }
        } else if (dispcarga == "No") {
            if (tipopavimento == "No reforzado o reforzado con juntas") {
                $("#tcrango").val("3.6 - 4.2");
                $("#tcvalor").val("3.9");
            } else if (tipopavimento == "Reforzado continuo") {
                $("#tcrango").val("1");
                $("#tcvalor").val("1");
            }
        }
    }

}
// calculo del valor de módulo elástico//
function modelastico() {
    var tipoagregado = $("#tipoagregado option:selected").text();
    var fc = parseFloat($('#fc').val());

    if (tipoagregado == "Grueso-ígneo") {
        var ec = 14.2233 * (17500 * Math.sqrt(fc))
        $("#Ec").val(ec.toFixed(2));
    } else if (tipoagregado == "Grueso-metamórfico") {
        var ec = 14.2233 * (15000 * Math.sqrt(fc))
        $("#Ec").val(ec.toFixed(2));
    } else if (tipoagregado == "Grueso-sedimentario") {
        var ec = 14.2233 * (11500 * Math.sqrt(fc))
        $("#Ec").val(ec.toFixed(2));
    } else if (tipoagregado == "Sin información") {
        var ec = 14.2233 * (12500 * Math.sqrt(fc))
        $("#Ec").val(ec.toFixed(2));
    }
}

// calculo del valor de perdida de soporte//
function perdidasorporte() {
    var perdidasoportel = $("#materialsubbase1 option:selected").text();
    if (perdidasoportel == "") {
        $("#tiposbrango").val("");
        $("#valorLsoporte").val("");
        $("#Kcorr").val("");
    } else if (perdidasoportel == "Bases granulares tratadas con cemento") {
        var rangol = "0.0 - 1.0"
        $("#tiposbrango").val(rangol);
        $("#valorLsoporte").val("1.0");
    } else if (perdidasoportel == "Sub-bases tratadas con cemento") {
        var rangol = "0.0 - 1.0"
        $("#tiposbrango").val(rangol);
        $("#valorLsoporte").val("1.0");
    } else if (perdidasoportel == "Bases asfálticas") {
        var rangol = "0.0 - 1.0"
        $("#tiposbrango").val(rangol);
        $("#valorLsoporte").val("1.0");
    } else if (perdidasoportel == "Sub-bases estabiliadas con asfalto") {
        var rangol = "0.0 - 1.0"
        $("#tiposbrango").val(rangol);
        $("#valorLsoporte").val("1.0");
    } else if (perdidasoportel == "Estabilización con cal") {
        var rangol = "1.0 - 3.0"
        $("#tiposbrango").val(rangol);
        $("#valorLsoporte").val("3.0");
    } else if (perdidasoportel == "Materiales granulares sin tratar") {
        var rangol = "1.0 - 3.0"
        $("#tiposbrango").val(rangol);
        $("#valorLsoporte").val("3.0");
    } else if (perdidasoportel == "Suelos finos y sub-rasantes naturales") {
        var rangol = "2.0 - 3.0"
        $("#tiposbrango").val(rangol);
        $("#valorLsoporte").val("3.0");
    }
}




// Mostrar - Ocultar: ayuda Periodo de diseño
function mostrarDiseno() {

    document.getElementById("ayudaDiseno").style.display = "block";
}

function ocultarDiseno() {
    document.getElementById("ayudaDiseno").style.display = "none";
}

// Mostrar - Ocultar: ayuda Direccionalidad
function mostrarDireccionalidad() {

    document.getElementById("ayudaDireccionalidad").style.display = "block";
}

function ocultarDireccionalidad() {
    document.getElementById("ayudaDireccionalidad").style.display = "none";
}

// Mostrar - Ocultar: ayuda Distribucion
function mostrarDistribucion() {

    document.getElementById("ayudaDistribucion").style.display = "block";
}

function ocultarDistribucion() {
    document.getElementById("ayudaDistribucion").style.display = "none";
}


// Mostrar - Ocultar: ayuda Confiabilidad
function mostrarConfiabilidad() {

    document.getElementById("ayudaConfiabilidad").style.display = "block";
}

function ocultarConfiabilidad() {
    document.getElementById("ayudaConfiabilidad").style.display = "none";
}

// Mostrar - Ocultar: ayuda ServiciabilidadInicial
function mostrarServiciabilidadInicial() {

    document.getElementById("ayudaServiciabilidadInicial").style.display = "block";
}

function ocultarServiciabilidadInicial() {
    document.getElementById("ayudaServiciabilidadInicial").style.display = "none";
}

// Mostrar - Ocultar: ayuda ServiciabilidadFinal
function mostrarServiciabilidadFinal() {

    document.getElementById("ayudaServiciabilidadFinal").style.display = "block";
}

function ocultarServiciabilidadFinal() {
    document.getElementById("ayudaServiciabilidadFinal").style.display = "none";
}
// INDICAR VISUALMENTE QUE TIPO DE BASE ELIGES
function materialsubbase() {
    var tpbs = $("#materialsbs option:selected").text();
    if (tpbs == $("#materialsbs option:first").text()) {
        $("#subbasematerial").text("Subbase");
    } else {
        $("#subbasematerial").text("Subbase " + tpbs);
    };

}
// CALCULA EL INDICE DE SERVICIABILIDAD
function serviciabilidadrig() {
    var pi = parseFloat($('#pinicial').val());
    var pf = parseFloat($('#pfinal').val());
    if ((pi == "") && (pf == "")) {
        $("#deltapsi").val("");
    } else if (pi > pf) {
        var psi = pi - pf;
        $("#deltapsi").val(psi.toFixed(3));
    } else {
        $("#deltapsi").val("");
    }

}
// CALCULA LAS DESVIACION NORMAL ESTANDAR
function factorconfia() {
    var factorc = $("#factorc option:selected").val();
    $("#desvest").val(factorc);
}
// CALCULA MODULO RESILIENTE Y COEFICIENTE ESTRUCTURAL DE SUBBASE
function parametrossubbase() {
    var propbs = parseFloat($('#subbase-crc').val());
    var txtbs = $('#subbase-crc-td').text();

    if ((txtbs == "CBR (%)")) {
        if ((20 <= propbs) && (propbs <= 100)) {
            var rescbrmrbs = 1000 * polino8(15.0144902782049, 0.421429863898084, 0.0211445860477397, -0.00331487108633155, 0.000170131204924928, -0.00000440480956598321, 0.0000000615888041954893, -0.000000000444189750519602, 0.00000000000129840756710479, (propbs - 20))
            $("#subbaseMb").val(rescbrmrbs.toFixed(2));
            $("#moduloresilientesubbase").val(rescbrmrbs.toFixed(2));

            var rescbra2 = polino8(0.0698548909351757, 0.0031653059436394, -0.0000897195214406565, 0.00000178076124512927, -0.000000046953998467103, 0.00000000166266209827848, -0.0000000000343305394962662, 0.000000000000333592074591108, -0.0000000000000012176024699921, (propbs - 20))

            $("#subbasea2").val(rescbra2.toFixed(3));
            loadGraph1();
        } else {
            $("#subbasea2").val("");
            $("#subbaseMb").val("");
            $("#subbase-crc").val("");
            alert("Valores de CBR entre 20 y 100 ");
            $("#moduloresilientesubbase").val("");
        }
    } else {
        if (txtbs == "Valor-R") {
            if ((50 <= propbs) && (propbs <= 85)) {
                var resvalrmrbs = 1000 * polino8(12.876417073363, 0.452196090715006, 0.0438440511934459, -0.00982612217194401, 0.000953206104895798, -0.0000526129201716685, 0.00000172642111806454, -0.0000000308742024168751, 0.000000000228477521190679, (propbs - 50))
                $("#subbaseMb").val(resvalrmrbs.toFixed(2));
                $("#moduloresilientesubbase").val(resvalrmrbs.toFixed(2));

                var resvalra2 = polino8(0.06046657944853, 0.00275476893784798, -0.000224124892611144, 0.0000661248425330996, -0.00000888859659653463, 0.000000608835710735889, -0.0000000223505547680691, 0.000000000419895487737548, -0.00000000000317369061261265, (propbs - 50))
                $("#subbasea2").val(resvalra2.toFixed(3));
                loadGraph1();



            } else {
                $("#subbasea2").val("");
                $("#subbaseMb").val("");
                $("#subbase-crc").val("");
                alert("Valores de Valor-R entre 50 y 85 ");
                $("#moduloresilientesubbase").val("");
            }
        } else {
            if (txtbs == "Triaxial de Texas") {
                if ((2 <= propbs) && (propbs <= 4)) {
                    var resttmrbs = 1000 * polino8(29.9622841116288, -13.6547539439052, -30.630188755691, 67.4826082289218, -4.39456802606582, -88.4573996663093, 89.4939237236976, -35.859985306859, 5.2930134255439, (propbs - 2))
                    $("#subbaseMb").val(resttmrbs.toFixed(2));
                    $("#moduloresilientesubbase").val(resttmrbs.toFixed(2));

                    var restta2 = polino8(0.139504007016455, -0.0531663438887335, -0.118171937589068, 0.251250937348232, -0.0413149250671268, -0.258826182223856, 0.263710435247049, -0.10423649509903, 0.0152032711630454, (propbs - 2))
                    $("#subbasea2").val(restta2.toFixed(3));
                    loadGraph1();



                } else {
                    $("#subbasea2").val("");
                    $("#subbaseMb").val("");
                    $("#subbase-crc").val("");
                    alert("Valores de Triaxial de Texas entre 2 y 4 ");
                    $("#moduloresilientesubbase").val("");
                }

            } else {
                if (txtbs == "Resistencia a la compresión no confinada") {
                    if ((200 <= propbs) && (propbs <= 1000)) {
                        var resttmrbs = 100000 * polino8(5.21255219106388, 0.0054930539427005, -0.00004386513882082, 0.000000423866207022172, -0.00000000198679762745957, 0.00000000000507781747964391, -0.00000000000000713278280941073, 0.00000000000000000516842980835603, -0.00000000000000000000151039997429519, (propbs - 200))
                        $("#subbaseMb").val(resttmrbs.toFixed(2));
                        $("#moduloresilientesubbase").val(resttmrbs.toFixed(2));
                        loadGraph2();

                        var restta2 = polino8(0.126514423821391, 0.000119014438496379, 0.000000424778811236592, -0.00000000422194143534504, 0.000000000022355322508525, -0.0000000000000606037341739917, 0.0000000000000000874838801389102, -0.000000000000000000064637475936388, 0.000000000000000000000019323613498538, (propbs - 200))
                        $("#subbasea2").val(restta2.toFixed(3));



                    } else {
                        $("#subbasea2").val("");
                        $("#subbaseMb").val("");
                        $("#subbase-crc").val("");
                        alert("Valores de Resistencia a la compresión no confinada entre 200 y 1000 ");
                        $("#moduloresilientesubbase").val("");
                    }

                } else {
                    if (txtbs == "Estabilidad de Marshall") {
                        if (((198.630256174412 <= propbs) && (propbs <= 1627.5568227323))) {
                            var resttmrbs = 100000 * polino8(0.988304102334951, 0.00190091137710624, -0.000000695682100371187, -0.0000000263621080243137, 0.000000000111298716445364, -0.000000000000187423344516066, 0.000000000000000157695777240304, -0.0000000000000000000657330932932133, 0.0000000000000000000000108097433396437, (propbs - 198.630256174412))
                            $("#subbaseMb").val(resttmrbs.toFixed(2));
                            $("#moduloresilientesubbase").val(resttmrbs.toFixed(2));

                            var restta2 = polino8(0.0692971293919982, 0.000207646355050883, 0.00000107767479518017, -0.00000000585385907109215, 0.0000000000124823124011714, -0.0000000000000139533965428724, 0.00000000000000000860481136885206, -0.00000000000000000000276939918568093, 0.000000000000000000000000363160776892116, (propbs))
                            $("#subbasea2").val(restta2.toFixed(3));

                            loadGraph3();
                        } else {
                            $("#subbaseMb").val("");
                            $("#moduloresilientesubbase").val("");
                            $("#subbase-crc").val("");
                            $("#subbasea2").val("");
                            alert("Valores de Estabilidad de Marshall entre 198.6 y 1627.56");

                        }

                    } else {}
                }
            }
        }
    }
}

// CALCULA MODULO RESILIENTE 
function calcmoduloresiliente() {
    var varsubr = parseFloat($('#datosubrasante').val());
    if ((varsubr <= 10)) {
        var mrsubr = 1500 * varsubr;
        $("#Modulor").val(mrsubr.toFixed(2));
        $("#moduloresiliente").val(mrsubr.toFixed(2));
    } else if ((10 < varsubr) && (varsubr <= 20)) {
        var mrsubr1 = 3000 * (varsubr ^ 0.65);
        $("#Modulor").val(mrsubr1.toFixed(2));
        $("#moduloresiliente").val(mrsubr1.toFixed(2));
    } else if ((20 < varsubr) && (varsubr <= 100)) {
        var mrsubr2 = (4326 * Math.log(varsubr ^ 0.65)) + 241;
        $("#Modulor").val(mrsubr2.toFixed(2));
        $("#moduloresiliente").val(mrsubr2.toFixed(2));
    } else if (100 < varsubr) {
        alert("Valores permitidos entre 0 y 100");
        $('#datosubrasante').val("")
    } else {
        $("#Modulor").val("");
        $("#moduloresiliente").val("");
        $("#datosubrasante").val("");
    }
}

function calcmoduloresiliente1() {
    $("#moduloresiliente").val($("#Modulor").val())
}

function copyk() {
    var funrigida = $("#funrigida")
    if (funrigida.is(":checked")) {
        var ksub = parseFloat($('#kfrsubrasante').val());
        $('#usoK').val(ksub);

    } else {
        var ksub = parseFloat($('#ksubrasante').val());
        $('#usoK').val(ksub);
    };
    


}

function finalk() {
    var materialsubbaselect = $("#materialsubbase1 option:selected").text();
    if (materialsubbaselect == $("#materialsubbase1 option:first").text()) {
        var kfinal = parseFloat($('#usoK').val());
        $('#kfinal').val(kfinal);
        $('#Kcorr').val("");
    } else {
        var kfinal = parseFloat($('#Kcorr').val());
        $('#kfinal').val(kfinal);
    }

}