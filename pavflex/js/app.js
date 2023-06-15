$(document).ready(function () {
    console.log("Start...");


    $('.numeric3').autoNumeric({
        aSep: '',
        aDec: '.',
        mDec: 3
    });
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


    $('#clcESALS').click(function () {
        $('#esal').show(500);

    });
    $('#salirProcesos').click(function () {
        $('#detalle').trigger('click');
        $("#detalle").show(); 
        $("#reporte").show();
       

    });
    

   


    $('.espesorSubbase').css('display', 'none');
    $('.espesorBase').css('display', 'none');
    $('.recalc_process').css('display', 'none');
   
    $("#addCapa input:checkbox").click(function () {
        $("#addMateriales").find("." + $(this).attr("name")).toggle();

    });

    $("#base_caracteristicas").prop("disabled", true);
    $("#select_drenaje_base").prop("disabled", true);
    $("#porcentaje_humedad_m2").prop("disabled", true);
    $('#addBase').on('click', function () {
        var addBase = $("#addBase")
        if (addBase.is(":checked")) {
            $('#tipoBase').css('display', 'inline-block');
            $('.espesorBase').show(10);
            $("#base_caracteristicas").prop("disabled", false);
            $("#select_drenaje_base").prop("disabled", false);
            $("#porcentaje_humedad_m2").prop("disabled", false);
            $("#m2").prop("disabled", false);

        } else {
            $('.espesorBase').css('display', 'none');
            $('#tipoBase').css('display', 'none');
            $("#base_caracteristicas").prop("disabled", true);
            $("#select_drenaje_base").prop("disabled", true);
            $("#porcentaje_humedad_m2").prop("disabled", true);
            $("#m2").prop("disabled", true);
        };

    });

    $("#subbase_caracteristicas").prop("disabled", true);
    $("#select_drenaje_subbase").prop("disabled", true);
    $("#porcentaje_humedad_m3").prop("disabled", true);
    $('#addSubbase').on('click', function () {
        var addSubbase = $("#addSubbase")
        if (addSubbase.is(":checked")) {
            $('.espesorSubbase').show(10);
            $("#subbase_caracteristicas").prop("disabled", false);
            $("#select_drenaje_subbase").prop("disabled", false);
            $("#porcentaje_humedad_m3").prop("disabled", false);
            $("#m3").prop("disabled", false);

        } else {
            $('.espesorSubbase').css('display', 'none');

            $("#subbase_caracteristicas").prop("disabled", true);
            $("#select_drenaje_subbase").prop("disabled", true);
            $("#porcentaje_humedad_m3").prop("disabled", true);
            $("#m3").prop("disabled", true);

        };

    });


    document.getElementById('base_granular').style.display = 'none';
    document.getElementById('base_cemento').style.display = 'none';
    document.getElementById('base-bit').style.display = 'none';
    document.getElementById('grafica_base_granular').style.display = 'none';
    document.getElementById('grafica_base_cemento').style.display = 'none';
    document.getElementById('grafica_base_bituminoso').style.display = 'none';
    $('#tipoBase').on('click', function () {
        var contmat = $("#bcont").text();
        if (contmat == ("Base granular")) {
            $('#base_cemento').show(10);
                $('#grafica_base_cemento').show(10);
                $("#base_CBR").prop('checked',false);
                $("#base_valor-r").prop('checked',false);
                $("#base_triaxal-texas").prop('checked',false);
                $("#R_C_N_C").prop('checked',false);
                $("#E_M").prop('checked',false);
            $('#base_granular').show(10);
            $('#grafica_base_granular').show(10);
            document.getElementById('grafica_base_cemento').style.display = 'none';
            document.getElementById('grafica_base_bituminoso').style.display = 'none';
            document.getElementById('base_cemento').style.display = 'none';
            document.getElementById('base-bit').style.display = 'none';
            $("#base_caracteristicas_td").text("(Seleccionar)");
            $("#base_caracteristicas").val("");
            $("#a2").val("");
            $("#Mb").val("");
            loadGraphBaseGranular();
        } else {

            document.getElementById('base_granular').style.display = 'none';
            document.getElementById('grafica_base_granular').style.display = 'none';
            if (contmat == ("Base tratada con cemento")) {
                $('#base_cemento').show(10);
                $('#grafica_base_cemento').show(10);
                $("#base_CBR").prop('checked',false);
                $("#base_valor-r").prop('checked',false);
                $("#base_triaxal-texas").prop('checked',false);
                $("#R_C_N_C").prop('checked',true);
                $("#base_caracteristicas_td").text("RCNC");
                $("#E_M").prop('checked',false);
                $("#base_caracteristicas").val("");
            $("#a2").val("");
            $("#Mb").val("");
            loadGraphBaseCemento();
                document.getElementById('grafica_base_granular').style.display = 'none';
                document.getElementById('grafica_base_bituminoso').style.display = 'none';
                document.getElementById('base_granular').style.display = 'none';
                document.getElementById('base-bit').style.display = 'none';

            } else {

                document.getElementById('base_cemento').style.display = 'none';
                document.getElementById('grafica_base_cemento').style.display = 'none'
                if (contmat == ("Base tratada con asfálto")) {
                    $('#base_cemento').show(10);
                $('#grafica_base_cemento').show(10);
                $("#base_CBR").prop('checked',false);
                $("#base_valor-r").prop('checked',false);
                $("#base_triaxal-texas").prop('checked',false);
                $("#R_C_N_C").prop('checked',false);
                $("#E_M").prop('checked',true);
                    $('#base-bit').show(10);
                    $('#grafica_base_bituminoso').show(10);
                    $("#base_caracteristicas_td").text("Estabilidad de Marshall");
                    document.getElementById('grafica_base_granular').style.display = 'none';
                    document.getElementById('grafica_base_cemento').style.display = 'none';
                    document.getElementById('base_granular').style.display = 'none';
                    document.getElementById('base_cemento').style.display = 'none';
                    $("#base_caracteristicas").val("");
                    $("#a2").val("");
                    $("#Mb").val("");
                    loadGraphBaseBituminosa();
                } else {

                    document.getElementById('base-bit').style.display = 'none';
                    document.getElementById('grafica_base_bituminoso').style.display = 'none';
                }
            }
        }

    });

    document.getElementById('graficas_base').style.display = 'none';
    $("#base_CBR").on("click", function () {
        var base_CBR = $("#base_CBR")
        if (base_CBR.is(":checked")) {
            $('#base_caracteristicas_tr').show(10);
            $('#graficas_base').show(10);
            $("#base_caracteristicas_td").text("CBR (%)");
            $("#base_caracteristicas").val("");
            $("#a2").val("");
            $("#Mb").val("");
            
        } else {
            document.getElementById('base_caracteristicas_tr').style.display = 'none';
            document.getElementById('graficas_base').style.display = 'none';
            $("#base_caracteristicas_td").text("");
            
        };
    });
    $("#base_valor-r").on("click", function () {
        var bsvalr = $("#base_valor-r")
        if (bsvalr.is(":checked")) {
            $('#base_caracteristicas_tr').show(10);
            $("#base_caracteristicas_td").text("Valor-R");
            $('#graficas_base').show(10);
            $("#base_caracteristicas").val("");
            $("#a2").val("");
            $("#Mb").val("");
        } else {
            document.getElementById('base_caracteristicas_tr').style.display = 'none';
            document.getElementById('graficas_base').style.display = 'none';
            $("#base_caracteristicas_td").text("");

        };
    });
    $("#base_triaxal-texas").on("click", function () {
        var bstrtexas = $("#base_triaxal-texas")
        if (bstrtexas.is(":checked")) {
            $('#base_caracteristicas_tr').show(10);
            $("#base_caracteristicas_td").text("Triaxial de Texas");
            $('#graficas_base').show(10);
            $("#base_caracteristicas").val("");
            $("#a2").val("");
            $("#Mb").val("");
        } else {
            document.getElementById('base_caracteristicas_tr').style.display = 'none';
            document.getElementById('graficas_base').style.display = 'none';
            $("#base_caracteristicas_td").text("");

        };
    });
    $("#R_C_N_C").on("click", function () {
        var R_C_N_C = $("#R_C_N_C")
        if (R_C_N_C.is(":checked")) {
            $('#base_caracteristicas_tr').show(10);
            $('#graficas_base').show(10);
            $("#base_caracteristicas_td").text("RCNC");
            $("#base_caracteristicas").val("");
            $("#a2").val("");
            $("#Mb").val("");
        } else {
            document.getElementById('base_caracteristicas_tr').style.display = 'none';
            document.getElementById('graficas_base').style.display = 'none';
            $("#base_caracteristicas_td").text("");

        };
    });
    $("#E_M").on("click", function () {
        var em = $("#E_M")
        if (em.is(":checked")) {
            $('#base_caracteristicas_tr').show(10);
            $('#graficas_base').show(10);
            $("#base_caracteristicas_td").text("Estabilidad de Marshall");
            $("#base_caracteristicas").val("");
            $("#a2").val("");
            $("#Mb").val("");
        } else {
            document.getElementById('base_caracteristicas_tr').style.display = 'none';
            document.getElementById('graficas_base').style.display = 'none';
            $("#base_caracteristicas_td").text("");

        };
    });

    document.getElementById('grafica_capa_subbase').style.display = 'none';
    $("#subbase_CBR").on("click", function () {
        var subbase_CBR = $("#subbase_CBR")
        if (subbase_CBR.is(":checked")) {
            $('#subbase_caracteristicas_tr').show(10);
            $('#grafica_capa_subbase').show(10);
            $("#subbase_caracteristicas_td").text("CBR (%)");
            $("#subbase_caracteristicas").val("");
            $("#a3").val("");
            $("#Msb").val("");
        } else {
            document.getElementById('subbase_caracteristicas_tr').style.display = 'none';
            document.getElementById('grafica_capa_subbase').style.display = 'none';
            $("#subbase_caracteristicas_td").text("");

        };
    });
    $("#subbase_valor-r").on("click", function () {
        var sbsvalr = $("#subbase_valor-r")
        if (sbsvalr.is(":checked")) {
            $('#subbase_caracteristicas_tr').show(10);
            $("#subbase_caracteristicas_td").text("Valor-R");
            $('#grafica_capa_subbase').show(10);
            $("#subbase_caracteristicas").val("");
            $("#a3").val("");
            $("#Msb").val("");
        } else {
            document.getElementById('subbase_caracteristicas_tr').style.display = 'none';
            document.getElementById('grafica_capa_subbase').style.display = 'none';
            $("#subbase_caracteristicas_td").text("");

        };
    });
    $("#subbase_triaxal-texas").on("click", function () {
        var sbstrtexas = $("#subbase_triaxal-texas")
        if (sbstrtexas.is(":checked")) {
            $('#subbase_caracteristicas_tr').show(10);
            $("#subbase_caracteristicas_td").text("Triaxial de Texas");
            $('#grafica_capa_subbase').show(10);
            $("#subbase_caracteristicas").val("");
            $("#a3").val("");
            $("#Msb").val("");
        } else {
            document.getElementById('subbase_caracteristicas_tr').style.display = 'none';
            document.getElementById('grafica_capa_subbase').style.display = 'none';
            $("#subbase_caracteristicas_td").text("");

        };
    });
    document.getElementById('contenedor_coeficiente_a1_oculto').style.display = 'none';
    document.getElementById('datos_grafica_subbase_tr').style.display = 'none';
    document.getElementById('datos_grafica_base_tr').style.display = 'none';

    tipo_Base();

    $('#closeModal').click(function () {
        $('#myModal').modal('hide');
    });
    $('#load-Vehiculos').click(function () {
        
        $(".ESALS_flex").show();
        if(($("#traficoTMDAflexible").val() === "")&&($("#traficoTasa_CreFlexible").val() === "")&&($("#traficoPeriodo_diseñoFlexible").val() === "")&&($("#traficoDireccionalidadFlexible").val() === "")&&($("#traficoSN_Flexible").val() === "")){
            $("#aviso_ESALS").show();
        } else {
        $("#aviso_ESALS").hide();
    }
    });


    $("#FlotaVehiculo input:text").css("display", "none");
    $("#FlotaVehiculo input:checkbox").click(function () {
        $("#FlotaVehiculo").find("." + $(this).attr("name")).toggle();

    });

    
    document.getElementById('reporte').style.display = 'none';
    document.getElementById('detalle').style.display = 'none';
    document.getElementById('btnClcSN').style.display = 'none';
    document.getElementById('btnEjemplo').style.display = 'none';
    $("#btnDatosProyeto").on("click", function () {
        $("#btnEjemplo").hide();
        $("#btnClcSN").hide();
    });
    $("#btnVarProyecto").on("click", function () {
        $("#btnEjemplo").show();
        $("#btnClcSN").show();
    });

    // métodos para mostrar la ventana de procedimientos paso a paso
    $("#detalle").on("click", function () {
        $("#detalle").hide();
        $("#reporte").hide();
        $("html, body").animate({
            scrollTop: 0 + "px"
        });
        $("#panelPrincipal").toggleClass('col-md-12 col-md-5');
        $("#panelPrincipal").find(".aj").toggleClass('col-md-6 col-md-12');
        $("#panelPrincipal").find(".cg").toggleClass('col-md-4 col-md-12');
        $("#panelPrincipal").find(".cf").toggleClass('col-md-6 col-md-12');
        $("#panelPrincipal").find(".ch").toggleClass('col-md-6 col-md-12');
        $("#panelPrincipal").find(".ci").toggleClass('col-md-6 col-md-12');
        $("#panelSecundaria").toggleClass('col-md-12 col-md-7');
        $('#panelSecundaria').toggle();
        var panelSecundaria = $("#panelSecundaria")
        if (panelSecundaria.is(":visible")) {
            $(".liBtnEjemplo").hide();
            
            $('#tituloPrincipal').css('height', "40px");
            $('#tituloPrincipal').css('line-height', "40px");
            $('#tituloSecundario').css('height', "40px");
            $('#tituloSecundario').css('line-height', "40px");
            $('#panelPrincipalvariables').css('height', "600px");
            $('#panelSecundaria_procedimientos').css('height', "600px");
            $('#panelPrincipalvariables').css('overflow-y', "scroll");
            $('#panelSecundaria_procedimientos').css('overflow-y', "scroll");
            $('.right-proceso').show();
            $('.helpData').hide();
            $('#myModal_aviso_anclas').modal('show');         
            
            
        } else {
            $(".liBtnEjemplo").show();
            $('#tituloPrincipal').css('height', "30px");
            $('#tituloPrincipal').css('line-height', "30px");
            $('#tituloSecundario').css('height', "30px");
            $('#tituloSecundario').css('line-height', "30px");
            $('#panelPrincipalvariables').css('height', "");
            $('#panelSecundaria_procedimientos').css('height', "");
            $('#panelPrincipalvariables').css('overflow-y', "");
            $('#panelSecundaria_procedimientos').css('overflow-y', "");
            $('.right-proceso').hide();
            $('.helpData').show();

        }

    });

    
    // métodos para anclar secciones de la pagina
    $("#principalTrafico").on("click", function () {
        $("ul.nav-pills li").removeClass("active");
        $("#proceso").find(".tab-pane").removeClass("in active");
        $("#tab2").addClass('active');
        $("#tab_proceso_trafico").addClass('in active');
    });
    $("#parametros_Base").on("click", function () {
        $("ul.nav-pills li").removeClass("active");
        $("#proceso").find(".tab-pane").removeClass("in active");
        $("#tab4").addClass('active');
        $("#tab_proceso_base").addClass('in active');
    });
    $("#coeficiente_drenaje_m2").on("click", function () {
        $("ul.nav-pills li").removeClass("active");
        $("#proceso").find(".tab-pane").removeClass("in active");
        $("#tab3").addClass('active');
        $("#tab_proceso_drenaje").addClass('in active');
    });
    $("#parametros_Subbase").on("click", function () {
        $("ul.nav-pills li").removeClass("active");
        $("#proceso").find(".tab-pane").removeClass("in active");
        $("#tab5").addClass('active');
        $("#tab_proceso_subbase").addClass('in active');
    });
    $("#coeficiente_drenaje_m3").on("click", function () {
        $("ul.nav-pills li").removeClass("active");
        $("#proceso").find(".tab-pane").removeClass("in active");
        $("#tab3").addClass('active');
        $("#tab_proceso_drenaje").addClass('in active');
    });
    $("#principal_modulo_elastico").on("click", function () {
        $("ul.nav-pills li").removeClass("active");
        $("#proceso").find(".tab-pane").removeClass("in active");
        $("#tab6").addClass('active');
        $("#tab_proceso_asfalto").addClass('in active');
    });
    $("#aresultados").on("click", function () {
        $("ul.nav-pills li").removeClass("active");
        $("#proceso").find(".tab-pane").removeClass("in active");
        $("#tab8").addClass('active');
        $("#tab_proceso_espesor").addClass('in active');
    });
    $("#resultdos_SN").on("click", function () {
        $("ul.nav-pills li").removeClass("active");
        $("#proceso").find(".tab-pane").removeClass("in active");
        $("#tab7").addClass('active');
        $("#tab_proceso_SN").addClass('in active');
    });
    $("#resultado_espesor").on("click", function () {
        $("ul.nav-pills li").removeClass("active");
        $("#proceso").find(".tab-pane").removeClass("in active");
        $("#tab8").addClass('active');
        $("#tab_proceso_espesor").addClass('in active');
    });
    $("#Continuar").on("click", function () {
        $("#panelPrincipalvariables ul.nav-pills li").removeClass("active");
        $("#entradas").find(".tab-pane").removeClass("in active");
        $("#tab10").addClass('active');
        $("#variablesProyecto").addClass('in active');
        $("#btnEjemplo").show();
        $("#btnClcSN").show();
    });


    // métodos para descargar gráficas
    $("#save_base_granular").click(function () {
        $("#chartGranular").get(0).toBlob(function (blob) {
            saveAs(blob, "Carta de diseño para base granular.jpg");
        }, "image/jpeg", 1);
    });
    $("#save_base_cemento").click(function () {
        $("#chartCemento").get(0).toBlob(function (blob) {
            saveAs(blob, "Carta de diseño para base tratada con cemento.png");
        });
    });
    $("#save_base_bituminoso").click(function () {
        $("#chartBituminoso").get(0).toBlob(function (blob) {
            saveAs(blob, "Carta de diseño para base tratada con asfálto.png");
        }, "image/jpeg", 0.95);
    });
    $("#save_subbase_granular").click(function () {
        $("#chart_subbase_Granular").get(0).toBlob(function (blob) {
            saveAs(blob, "Carta de diseño para subbase granular.png");
        });
    });
    $("#save-moduloElastico").click(function () {
        $("#chart_moduloElastico").get(0).toBlob(function (blob) {
            saveAs(blob, "Carta de diseño para el coeficiente estructural de la carpeta asfáltica.png");
        });
    });
    $("#save_SN").click(function () {
        $("#chartSN").get(0).toBlob(function (blob) {
            saveAs(blob, "Carta de diseño para la estimación del número estructural.png");
        });
    });

});

function restrictionPorcentaje () {
    var traficoTasa_CreFlexible = parseFloat($('#traficoTasa_CreFlexible').val());
    if(traficoTasa_CreFlexible > 100) {
        alert ("Valores entre 0 y 100")
        $('#traficoTasa_CreFlexible').val("")
    }
    var traficoDireccionalidadFlexible = parseFloat($('#traficoDireccionalidadFlexible').val());
    if(traficoDireccionalidadFlexible > 100) {
        alert ("Valores entre 0 y 100")
        $('#traficoDireccionalidadFlexible').val("")
    }
    
}
function copyPf() {
    var pf = parseFloat($('#pf').val());
    if ( pf <= 2 ) {
        $('#trafico_ptFlexible').val("2");
    } else if ((2 < pf) && (pf <= 2.5)) {
        $('#trafico_ptFlexible').val("2.5");
    }else if (pf > 2.5) {
        $('#trafico_ptFlexible').val("3");
    }
}
function copyDrenaje() {
    var drenporcent = parseFloat($('#porcentaje_humedad_m2').val())
    var drencalidad = $("#select_drenaje_base option:selected").text()
    $("#select_drenaje_subbase").val(drencalidad);
        $("#porcentaje_humedad_m3").val(drenporcent);
        clc_coeficiente_m3();
}





var polino8 = function (a, b, c, d, e, f, g, h, i, j) {
    return ((a) + (b * (j)) + (c * Math.pow(j, 2)) + (d * Math.pow(j, 3)) + (e * Math.pow(j, 4)) + (f * Math.pow(j, 5)) + (g * Math.pow(j, 6)) + (h * Math.pow(j, 7)) + (i * Math.pow(j, 8)));
}

function tipo_Base() {
    var tpbs = $("#tipoBase option:selected").text();
    if (tpbs == $("#tipoBase option:first").text()) {
        $("#bcont").text("Base");
    } else {
        $("#bcont").text("Base " + tpbs);
    };

}

function selectConfiabilidad() {
    var tpconf = $("#tipoConfiabilidad option:selected").val();
    $("#ZrFlexible").val(tpconf);
}

function valueConfiabilidad() {
    var valconf = $("#tipoConfiabilidad option:selected").text();
    $("#valorConfiabilidad").val(valconf);
}

function serviciabilidad() {
    var pi = parseFloat($('#pi').val());
    var pf = parseFloat($('#pf').val());
    if ((pi == "") && (pf == "")) {
        $("#psi").val("");
    } else if (pi > pf) {
        var psi = pi - pf;
        $("#psi").val(psi.toFixed(2));
    } else {
        $("#psi").val("");
    }
}

function modulo_elastico() {
    var Mr = parseFloat($('#modulo_elastico_asfalto').val()) - parseFloat(107365.434712621);
    var Mrt = parseFloat($('#modulo_elastico_asfalto').val());
    if (107365.434712621 <= Mrt && Mrt <= 500000) {
        var resultado = polino8(0.202948127934633, 0.00000145311130139714, -0.00000000000929927397699858, 0.000000000000000103330377760333, -0.000000000000000000000872742154502837, 0.0000000000000000000000000044306848566805, -0.0000000000000000000000000000000127778560749968, 0.000000000000000000000000000000000000019361081833392, -0.0000000000000000000000000000000000000000000119892171311759, Mr)
        $("#a1").val(resultado.toFixed(2));
        $("#coeficiente_a1_oculto").val(resultado);
        loadGraph10();

    } else {
        $("#a1").val("");
        $("#modulo_elastico_asfalto").val("");
        alert("Valores de módulo elastico entre 107365.434712621 y 500000 ");

    }
}

function basePropiedad() {
    var propbs = parseFloat($('#base_caracteristicas').val());
    var txtbs = $('#base_caracteristicas_td').text();

    if ((txtbs == "CBR (%)")) {
        loadGraphBaseGranular();
        if ((20 <= propbs) && (propbs < 30)) {
            var rescbrmrbs = 1000 * interpo(20, 30, propbs, 15.0230074694818, 19.544932471734)
            $("#Mb").val(rescbrmrbs.toFixed(2));

            var rescbra2 = interpo(20, 30, propbs, 0.0706283786059987, 0.0955587552841399)
            $("#a2").val(rescbra2.toFixed(3));
            $("#coefa2").val(rescbra2);
            loadGraphBaseGranular();
        } else if ((30 <= propbs) && (propbs < 40)) {
            var rescbrmrbs = 1000 * interpo(30, 40, propbs, 19.544932471734, 21.9692373419286)
            $("#Mb").val(rescbrmrbs.toFixed(2));

            var rescbra2 = interpo(30, 40, propbs, 0.0955587552841399, 0.107186360373456)
            $("#a2").val(rescbra2.toFixed(3));
            $("#coefa2").val(rescbra2);
            loadGraphBaseGranular();
        } else if ((40 <= propbs) && (propbs < 50)) {
            var rescbrmrbs = 1000 * interpo(40, 50, propbs, 21.9692373419286, 23.9708870641511)
            $("#Mb").val(rescbrmrbs.toFixed(2));

            var rescbra2 = interpo(40, 50, propbs, 0.107186360373456, 0.116422577496943)
            $("#a2").val(rescbra2.toFixed(3));
            $("#coefa2").val(rescbra2);
            loadGraphBaseGranular();
        } else if ((50 <= propbs) && (propbs < 60)) {
            var rescbrmrbs = 1000 * interpo(50, 60, propbs, 23.9708870641511, 26.1576967562231)
            $("#Mb").val(rescbrmrbs.toFixed(2));

            var rescbra2 = interpo(50, 60, propbs, 0.116422577496943, 0.121067483784083)
            $("#a2").val(rescbra2.toFixed(3));
            $("#coefa2").val(rescbra2);
            loadGraphBaseGranular();
        } else if ((60 <= propbs) && (propbs < 70)) {
            var rescbrmrbs = 1000 * interpo(60, 70, propbs, 26.1576967562231, 27.4467257106997)
            $("#Mb").val(rescbrmrbs.toFixed(2));

            var rescbra2 = interpo(60, 70, propbs, 0.121067483784083, 0.130130426259131)
            $("#a2").val(rescbra2.toFixed(3));
            $("#coefa2").val(rescbra2);
            loadGraphBaseGranular();
        } else if ((70 <= propbs) && (propbs <= 100)) {
            var rescbrmrbs = 1000 * interpo(70, 100, propbs, 27.4467257106997, 29.885030366055)
            $("#Mb").val(rescbrmrbs.toFixed(2));

            var rescbra2 = interpo(70, 100, propbs, 0.130130426259131, 0.139162176214383)
            $("#a2").val(rescbra2.toFixed(3));
            $("#coefa2").val(rescbra2);
            loadGraphBaseGranular();
        } else {
            $("#a2").val("");
            $("#Mb").val("");
            $("#base_caracteristicas").val("");
            alert("Valores de CBR entre 20 y 100 ");

        }
    } else {
        if (txtbs == "Valor-R") {
            loadGraphBaseGranular();
            if ((50 <= propbs) && (propbs < 60)) {
                var resvalrmrbs = 1000 * interpo(50, 60, propbs, 12.8698758668939, 17.7185969332761)
                $("#Mb").val(resvalrmrbs.toFixed(2));

                var resvalra2 = interpo(50, 60, propbs, 0.0604915312604105, 0.0854487203135154)
                $("#a2").val(resvalra2.toFixed(3));
                $("#coefa2").val(resvalra2);
                loadGraphBaseGranular();
            } else if ((60 <= propbs) && (propbs < 70)) {
                var resvalrmrbs = 1000 * interpo(60, 70, propbs, 17.7185969332761, 21.8042294500142)
                $("#Mb").val(resvalrmrbs.toFixed(2));

                var resvalra2 = interpo(60, 70, propbs, 0.0854487203135154, 0.106424964061259)
                $("#a2").val(resvalra2.toFixed(3));
                $("#coefa2").val(resvalra2);
                loadGraphBaseGranular();
            } else if ((70 <= propbs) && (propbs < 80)) {
                var resvalrmrbs = 1000 * interpo(70, 80, propbs, 21.8042294500142, 27.4972106232133)
                $("#Mb").val(resvalrmrbs.toFixed(2));

                var resvalra2 = interpo(70, 80, propbs, 0.106424964061259, 0.130317427955303)
                $("#a2").val(resvalra2.toFixed(3));
                $("#coefa2").val(resvalra2);
                loadGraphBaseGranular();
            } else if ((80 <= propbs) && (propbs <= 85)) {
                var resvalrmrbs = 1000 * interpo(80, 85, propbs, 27.4972106232133, 29.898688693769)
                $("#Mb").val(resvalrmrbs.toFixed(2));

                var resvalra2 = interpo(80, 85, propbs, 0.130317427955303, 0.139212768169924)
                $("#a2").val(resvalra2.toFixed(3));
                $("#coefa2").val(resvalra2);
                loadGraphBaseGranular();
            } else {
                $("#a2").val("");
                $("#Mb").val("");
                $("#base_caracteristicas").val("");
                alert("Valores de Valor-R entre 50 y 85 ");

            }
        } else {
            if (txtbs == "Triaxial de Texas") {
                loadGraphBaseGranular();
                if ((2 <= propbs) && (propbs < 2.5)) {
                    var resttmrbs = 1000 * interpo(2, 2.5, propbs, 29.9956270156365, 21.8109191344268)
                    $("#Mb").val(resttmrbs.toFixed(2));

                    var restta2 = interpo(2, 2.5, propbs, 0.139571838428953, 0.10645583228812)
                    $("#a2").val(restta2.toFixed(3));
                    $("#coefa2").val(restta2);
                    loadGraphBaseGranular();
                } else if ((2.5 <= propbs) && (propbs < 3.5)) {
                    var resttmrbs = 1000 * interpo(2.5, 3.5, propbs, 21.8109191344268, 16.86057094832118)
                    $("#Mb").val(resttmrbs.toFixed(2));

                    var restta2 = interpo(2.5, 3.5, propbs, 0.10645583228812, 0.0806989508812654)
                    $("#a2").val(restta2.toFixed(3));
                    $("#coefa2").val(restta2);
                    loadGraphBaseGranular();
                } else if ((3.5 <= propbs) && (propbs <= 4)) {
                    var resttmrbs = 1000 * interpo(3.5, 4, propbs, 16.8605709483211, 11.5462035607932)
                    $("#Mb").val(resttmrbs.toFixed(2));

                    var restta2 = interpo(3.5, 4, propbs, 0.0806989508812654, 0.0540491155087283)
                    $("#a2").val(restta2.toFixed(3));
                    $("#coefa2").val(restta2);
                    loadGraphBaseGranular();
                } else {
                    $("#a2").val("");
                    $("#Mb").val("");
                    $("#base_caracteristicas").val("");
                    alert("Valores de Triaxial de Texas entre 2 y 4 ");

                }

            } else {
                if (txtbs == "RCNC") {
                    loadGraphBaseCemento();
                    if ((200 <= propbs) && (propbs < 400)) {
                        var resttmrbs = 100000 * interpo(200, 400, propbs, 5.22431077873117, 5.98363683859668)
                        $("#Mb").val(resttmrbs.toFixed(2));
                        loadGraphBaseCemento();

                        var restta2 = interpo(200, 400, propbs, 0.126407315198078, 0.154215895890955)
                        $("#a2").val(restta2.toFixed(3));
                        $("#coefa2").val(restta2);

                    } else if ((400 <= propbs) && (propbs < 600)) {
                        var resttmrbs = 100000 * interpo(400, 600, propbs, 5.98363683859668, 6.90654878778335)
                        $("#Mb").val(resttmrbs.toFixed(2));
                        loadGraphBaseCemento();

                        var restta2 = interpo(400, 600, propbs, 0.154215895890955, 0.188613100854893)
                        $("#a2").val(restta2.toFixed(3));
                        $("#coefa2").val(restta2);

                    } else if ((600 <= propbs) && (propbs < 800)) {
                        var resttmrbs = 100000 * interpo(600, 800, propbs, 6.90654878778335, 8.1682001311317)
                        $("#Mb").val(resttmrbs.toFixed(2));
                        loadGraphBaseCemento();

                        var restta2 = interpo(600, 800, propbs, 0.188613100854893, 0.220517721622787)
                        $("#a2").val(restta2.toFixed(3));
                        $("#coefa2").val(restta2);

                    } else if ((800 <= propbs) && (propbs <= 1000)) {
                        var resttmrbs = 100000 * interpo(800, 1000, propbs, 8.1682001311317, 9.33559954015664)
                        $("#Mb").val(resttmrbs.toFixed(2));
                        loadGraphBaseCemento();

                        var restta2 = interpo(800, 1000, propbs, 0.220517721622787, 0.249873745142948)
                        $("#a2").val(restta2.toFixed(3));
                        $("#coefa2").val(restta2);

                    } else {
                        $("#a2").val("");
                        $("#Mb").val("");
                        $("#base_caracteristicas").val("");
                        alert("Valores de Resistencia a la compresión no confinada entre 200 y 1000 ");

                    }

                } else {
                    if (txtbs == "Estabilidad de Marshall") {
                        loadGraphBaseBituminosa();
                        if ((198.630256174412 <= propbs) && (propbs < 200)) {
                            var resttmrbs = 100000 * interpo(198.630256174412, 200, propbs, 1, 1.00292076819914)
                            $("#Mb").val(resttmrbs.toFixed(2));

                            var restta2 = interpo(198.630256174412, 200, propbs, 0.123709360377129, 0.124092751404665)
                            $("#a2").val(restta2.toFixed(3));
                            $("#coefa2").val(restta2);
                            loadGraphBaseBituminosa();

                        } else if (((200 <= propbs) && (propbs < 400))) {
                            var resttmrbs = 100000 * interpo(200, 400, propbs, 1.00292076819914, 1.2756786412862)
                            $("#Mb").val(resttmrbs.toFixed(2));

                            var restta2 = interpo(200, 400, propbs, 0.124092751404665, 0.159895976481639)
                            $("#a2").val(restta2.toFixed(3));
                            $("#coefa2").val(restta2);
                            loadGraphBaseBituminosa();

                        } else if (((400 <= propbs) && (propbs < 600))) {
                            var resttmrbs = 100000 * interpo(400, 600, propbs, 1.2756786412862, 1.42151561895372)
                            $("#Mb").val(resttmrbs.toFixed(2));

                            var restta2 = interpo(400, 600, propbs, 0.159895976481639, 0.179039087097953)
                            $("#a2").val(restta2.toFixed(3));
                            $("#coefa2").val(restta2);
                            loadGraphBaseBituminosa();

                        } else if (((600 <= propbs) && (propbs < 800))) {
                            var resttmrbs = 100000 * interpo(600, 800, propbs, 1.42151561895372, 1.73846420853441)
                            $("#Mb").val(resttmrbs.toFixed(2));

                            var restta2 = interpo(600, 800, propbs, 0.179039087097953, 0.204108849989347)
                            $("#a2").val(restta2.toFixed(3));
                            $("#coefa2").val(restta2);
                            loadGraphBaseBituminosa();

                        } else if (((800 <= propbs) && (propbs < 1000))) {
                            var resttmrbs = 100000 * interpo(800, 1000, propbs, 1.73846420853441, 2.1366616553913)
                            $("#Mb").val(resttmrbs.toFixed(2));

                            var restta2 = interpo(800, 1000, propbs, 0.204108849989347, 0.229158161687388)
                            $("#a2").val(restta2.toFixed(3));
                            $("#coefa2").val(restta2);
                            loadGraphBaseBituminosa();

                        } else if (((1000 <= propbs) && (propbs < 1200))) {
                            var resttmrbs = 100000 * interpo(1000, 1200, propbs, 2.1366616553913, 2.43440449344358)
                            $("#Mb").val(resttmrbs.toFixed(2));

                            var restta2 = interpo(1000, 1200, propbs, 0.229158161687388, 0.248758444843062)
                            $("#a2").val(restta2.toFixed(3));
                            $("#coefa2").val(restta2);
                            loadGraphBaseBituminosa();

                        } else if (((1200 <= propbs) && (propbs < 1400))) {
                            var resttmrbs = 100000 * interpo(1200, 1400, propbs, 2.43440449344358, 3.01102758597231)
                            $("#Mb").val(resttmrbs.toFixed(2));

                            var restta2 = interpo(1200, 1400, propbs, 0.248758444843062, 0.273646247843687)
                            $("#a2").val(restta2.toFixed(3));
                            $("#coefa2").val(restta2);
                            loadGraphBaseBituminosa();

                        } else if (((1400 <= propbs) && (propbs < 1600))) {
                            var resttmrbs = 100000 * interpo(1400, 1600, propbs, 3.01102758597231, 3.47423381747679)
                            $("#Mb").val(resttmrbs.toFixed(2));

                            var restta2 = interpo(1400, 1600, propbs, 0.273646247843687, 0.297044047201776)
                            $("#a2").val(restta2.toFixed(3));
                            $("#coefa2").val(restta2);
                            loadGraphBaseBituminosa();

                        } else if (((1600 <= propbs) && (propbs <= 1627.5568227323))) {
                            var resttmrbs = 100000 * interpo(1600, 1627.5568227323, propbs, 3.47423381747679, 3.53275281472159)
                            $("#Mb").val(resttmrbs.toFixed(2));

                            var restta2 = interpo(1600, 1627.5568227323, propbs, 0.297044047201776, 0.3)
                            $("#a2").val(restta2.toFixed(3));
                            $("#coefa2").val(restta2);
                            loadGraphBaseBituminosa();

                        } else {
                            $("#Mb").val("");
                            $("#base_caracteristicas").val("");
                            $("#a2").val("");
                            $("#base_caracteristicas").val("");
                            alert("Valores de Estabilidad de Marshall entre 198.6 y 1627.56");

                        }

                    } else {}
                }
            }
        }
    }
}

function subbaseprop() {
    var propsbs = parseFloat($('#subbase_caracteristicas').val());
    var txtsbs = $('#subbase_caracteristicas_td').text();
    if ((txtsbs == "CBR (%)")) {
        loadGraphSubbaseGranular();
        if ((5 <= propsbs) && (propsbs < 10)) {
            var rescbrmrsbs = 1000 * interpo(5, 10, propsbs, 6.46392408638396, 10.4792886849099)
            $("#Msb").val(rescbrmrsbs.toFixed(2));

            var rescbra3 = interpo(5, 10, propsbs, 0.050216116602446, 0.0801794489232957)
            $("#a3").val(rescbra3.toFixed(3));
            $("#coefa3").val(rescbra3);
            loadGraphSubbaseGranular();
        } else if ((10 <= propsbs) && (propsbs < 20)) {
            var rescbrmrsbs = 1000 * interpo(10, 20, propsbs, 10.4792886849099, 12.7554901423004)
            $("#Msb").val(rescbrmrsbs.toFixed(2));

            var rescbra3 = interpo(10, 20, propsbs, 0.0801794489232957, 0.0944965041226648)
            $("#a3").val(rescbra3.toFixed(3));
            $("#coefa3").val(rescbra3);
            loadGraphSubbaseGranular();
        } else if ((20 <= propsbs) && (propsbs < 30)) {
            var rescbrmrsbs = 1000 * interpo(20, 30, propsbs, 12.7554901423004, 14.784568471235)
            $("#Msb").val(rescbrmrsbs.toFixed(2));

            var rescbra3 = interpo(20, 30, propsbs, 0.0944965041226648, 0.109052632484089)
            $("#a3").val(rescbra3.toFixed(3));
            $("#coefa3").val(rescbra3);
            loadGraphSubbaseGranular();
        } else if ((30 <= propsbs) && (propsbs < 40)) {
            var rescbrmrsbs = 1000 * interpo(30, 40, propsbs, 14.784568471235, 16.727034161251)
            $("#Msb").val(rescbrmrsbs.toFixed(2));

            var rescbra3 = interpo(30, 40, propsbs, 0.109052632484089, 0.120178670240633)
            $("#a3").val(rescbra3.toFixed(3));
            $("#coefa3").val(rescbra3);
            loadGraphSubbaseGranular();
        } else if ((40 <= propsbs) && (propsbs < 50)) {
            var rescbrmrsbs = 1000 * interpo(40, 50, propsbs, 16.727034161251, 17.7713218381933)
            $("#Msb").val(rescbrmrsbs.toFixed(2));

            var rescbra3 = interpo(40, 50, propsbs, 0.120178670240633, 0.125872048374778)
            $("#a3").val(rescbra3.toFixed(3));
            $("#coefa3").val(rescbra3);
            loadGraphSubbaseGranular();
        } else if ((50 <= propsbs) && (propsbs < 70)) {
            var rescbrmrsbs = 1000 * interpo(50, 70, propsbs, 17.7713218381933, 18.6051041200352)
            $("#Msb").val(rescbrmrsbs.toFixed(2));

            var rescbra3 = interpo(50, 70, propsbs, 0.125872048374778, 0.13041776687447)
            $("#a3").val(rescbra3.toFixed(3));
            $("#coefa3").val(rescbra3);
            loadGraphSubbaseGranular();
        } else if ((70 <= propsbs) && (propsbs <= 100)) {
            var rescbrmrsbs = 1000 * interpo(70, 100, propsbs, 18.6051041200352, 20.2911838814345)
            $("#Msb").val(rescbrmrsbs.toFixed(2));

            var rescbra3 = interpo(70, 100, propsbs, 0.13041776687447, 0.14)
            $("#a3").val(rescbra3.toFixed(3));
            $("#coefa3").val(rescbra3);
            loadGraphSubbaseGranular();
        } else {
            $("#a3").val("");
            $("#Msb").val("");
            $("#subbase_caracteristicas").val("");
            alert("Valores de CBR entre 5 y 100 ");

        }
    } else {
        if (txtsbs == "Valor-R") {
            loadGraphSubbaseGranular();
            if ((25 <= propsbs) && (propsbs < 30)) {
                var resvalrmrsbs = 1000 * interpo(25, 30, propsbs, 5.88663879064013, 7.2678822706746)
                $("#Msb").val(resvalrmrsbs.toFixed(2));

                var resvalra3 = interpo(25, 30, propsbs, 0.0457313755478575, 0.0564618053491426)
                $("#a3").val(resvalra3.toFixed(3));
                $("#coefa3").val(resvalra3);
                loadGraphSubbaseGranular();
            } else if ((30 <= propsbs) && (propsbs < 40)) {
                var resvalrmrsbs = 1000 * interpo(30, 40, propsbs, 7.2678822706746, 9.18675629958408)
                $("#Msb").val(resvalrmrsbs.toFixed(2));

                var resvalra3 = interpo(30, 40, propsbs, 0.0564618053491426, 0.0708923057168124)
                $("#a3").val(resvalra3.toFixed(3));
                $("#coefa3").val(resvalra3);
                loadGraphSubbaseGranular();
            } else if ((40 <= propsbs) && (propsbs < 50)) {
                var resvalrmrsbs = 1000 * interpo(40, 50, propsbs, 9.18675629958408, 11.9047045522536)
                $("#Msb").val(resvalrmrsbs.toFixed(2));

                var resvalra3 = interpo(40, 50, propsbs, 0.0708923057168124, 0.0888560427812102)
                $("#a3").val(resvalra3.toFixed(3));
                $("#coefa3").val(resvalra3);
                loadGraphSubbaseGranular();
            } else if ((50 <= propsbs) && (propsbs < 60)) {
                var resvalrmrsbs = 1000 * interpo(50, 60, propsbs, 11.9047045522536, 14.3123671269354)
                $("#Msb").val(resvalrmrsbs.toFixed(2));

                var resvalra3 = interpo(50, 60, propsbs, 0.0888560427812102, 0.105743730632435)
                $("#a3").val(resvalra3.toFixed(3));
                $("#coefa3").val(resvalra3);
                loadGraphSubbaseGranular();
            } else if ((60 <= propsbs) && (propsbs < 70)) {
                var resvalrmrsbs = 1000 * interpo(60, 70, propsbs, 14.3123671269354, 16.7268836541578)
                $("#Msb").val(resvalrmrsbs.toFixed(2));

                var resvalra3 = interpo(60, 70, propsbs, 0.105743730632435, 0.120177849687243)
                $("#a3").val(resvalra3.toFixed(3));
                $("#coefa3").val(resvalra3);
                loadGraphSubbaseGranular();
            } else if ((70 <= propsbs) && (propsbs < 80)) {
                var resvalrmrsbs = 1000 * interpo(70, 80, propsbs, 16.7268836541578, 18.591022058937)
                $("#Msb").val(resvalrmrsbs.toFixed(2));

                var resvalra3 = interpo(70, 80, propsbs, 0.120177849687243, 0.130340992532964)
                $("#a3").val(resvalra3.toFixed(3));
                $("#coefa3").val(resvalra3);
                loadGraphSubbaseGranular();
            } else if ((80 <= propsbs) && (propsbs <= 90)) {
                var resvalrmrsbs = 1000 * interpo(80, 90, propsbs, 18.591022058937, 20.2911838814345)
                $("#Msb").val(resvalrmrsbs.toFixed(2));

                var resvalra3 = interpo(80, 90, propsbs, 0.130340992532964, 0.14)
                $("#a3").val(resvalra3.toFixed(3));
                $("#coefa3").val(resvalra3);
                loadGraphSubbaseGranular();
            } else {
                $("#a3").val("");
                $("#Msb").val("");
                $("#subbase_caracteristicas").val("");
                alert("Valores de Valor-R entre 25 y 90 ");
            }
        } else {
            if (txtsbs == "Triaxial de Texas") {
                loadGraphSubbaseGranular();
                if ((2 <= propsbs) && (propsbs < 3)) {
                    var resttmrsbs = 1000 * interpo(2, 3, propsbs, 20.2911838814345, 16.7601843133017)
                    $("#Msb").val(resttmrsbs.toFixed(2));

                    var restta3 = interpo(2, 3, propsbs, 0.14, 0.120359402384654)
                    $("#a3").val(restta3.toFixed(3));
                    $("#coefa3").val(restta3);
                    loadGraphSubbaseGranular();
                } else if ((3 <= propsbs) && (propsbs < 4)) {
                    var resttmrsbs = 1000 * interpo(3, 4, propsbs, 16.7601843133017, 10.7895831282607)
                    $("#Msb").val(resttmrsbs.toFixed(2));

                    var restta3 = interpo(3, 4, propsbs, 0.120359402384654, 0.0823559009179577)
                    $("#a3").val(restta3.toFixed(3));
                    $("#coefa3").val(restta3);
                    loadGraphSubbaseGranular();
                } else if ((4 <= propsbs) && (propsbs <= 5)) {
                    var resttmrsbs = 1000 * interpo(3, 4, propsbs, 10.7895831282607, 6.0450629965365)
                    $("#Msb").val(resttmrsbs.toFixed(2));

                    var restta3 = interpo(4, 5, propsbs, 0.0823559009179577, 0.0469621214987111)
                    $("#a3").val(restta3.toFixed(3));
                    $("#coefa3").val(restta3);
                    loadGraphSubbaseGranular();
                } else {
                    $("#a3").val("");
                    $("#Msb").val("");
                    $("#subbase_caracteristicas").val("");
                    alert("Valores de Triaxial de Texas entre 2 y 5 ");
                }
            } else {}
        }
    }
}

function mrcalular() {
    var varsubr = parseFloat($('#subrasante_caracteristicas_flexible').val());
    
    if ((varsubr <= 10)) {
        var mrsubr = 1500 * varsubr;
        $("#Mr").val(mrsubr.toFixed(2));
    } else if ((10 < varsubr) && (varsubr <= 20)) {
        var mrsubr1 = 3000 * (Math.pow(varsubr, 0.65));
        $("#Mr").val(mrsubr1.toFixed(2));
    } else if ((20 <= varsubr) && (varsubr <= 100)) {
        var mrsubr2 = (4326 * Math.log(varsubr)) + 241;
        $("#Mr").val(mrsubr2.toFixed(2));
    } else if ((varsubr > 100)) {
        $("#Mr").val("");
        alert ("Valores de CBR entre 0 y 100")
    } 
    else {
        $("#Mr").val("");
        $("#subrasante_caracteristicas_flexible").val("");
    }
}