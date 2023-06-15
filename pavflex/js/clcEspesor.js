$(document).ready(function () {
    
    $('#diseñoEconomico').on('click', function () {
        var diseñoEconomico = $("#diseñoEconomico")
        if (diseñoEconomico.is(":checked")) {
            var w18 = parseFloat($('#Esals_Flexible').val());
            if (w18 < 50000) {
                $("#espesor_asfalto_recomendado").val("1.00");
                $("#espesor_base_recomendado").val("4.00");
            } else if (50001 <= w18 && w18 <= 150000) {
                $("#espesor_asfalto_recomendado").val("2.00");
                $("#espesor_base_recomendado").val("4.00");
            } else if (150001 <= w18 && w18 <= 500000) {
                $("#espesor_asfalto_recomendado").val("2.50");
                $("#espesor_base_recomendado").val("4.00");
            } else if (500001 <= w18 && w18 <= 2000000) {
                $("#espesor_asfalto_recomendado").val("3.00");
                $("#espesor_base_recomendado").val("6.00");
            } else if (2000001 <= w18 && w18 <= 7000000) {
                $("#espesor_asfalto_recomendado").val("3.50");
                $("#espesor_base_recomendado").val("6.00");
            } else if (w18 >= 7000001) {
                $("#espesor_asfalto_recomendado").val("4.00");
                $("#espesor_base_recomendado").val("6.00");
            }
            $("#espesor_asfalto_recomendado").prop("disabled", true);
            $("#espesor_base_recomendado").prop("disabled", true);
            $("#recal_diseñoEconomico").show();
            $("#recal_espesores").hide();

            var a1 = parseFloat($('#coeficiente_a1_oculto').val());
            var D1 = parseFloat($('#espesor_asfalto_recomendado').val());
            var m2 = parseFloat($('#m2').val());
            var a2 = parseFloat($('#coefa2').val());
            var D2 = parseFloat($('#espesor_base_recomendado').val());
            var m3 = parseFloat($('#m3').val());
            var a3 = parseFloat($('#coefa3').val());
            var Sn1 = a1 * D1;
            var Snb = a2 * m2 * D2;
            var Sn2 = Sn1 + Snb;
            var Sn3 = parseFloat($('#sn3').val());
            var Snsb = Sn3 - Sn2;
            var D3 = Snsb / (a3 * m3);
            var D3_redondeado= (Math.ceil(D3 / 0.5) * 0.5)
            $("#espesor_subbase_recomendado").val(D3_redondeado.toFixed(2));
            
            document.getElementById("diseño_eco_sn1_proces").innerHTML = "SN<SUB>1</SUB> = D<SUB>1</SUB> x a<SUB>1</SUB>"
            document.getElementById("diseño_eco_sn1_result").innerHTML = "SN<SUB>1</SUB> = " + D1.toFixed(2) + " x " + a1.toFixed(2) + " = " + Sn1.toFixed(2);
            document.getElementById("diseño_eco_snb_proces").innerHTML = "SN<SUB>b</SUB> = D<SUB>2</SUB> x a<SUB>2</SUB> x m<SUB>2</SUB>"
            document.getElementById("diseño_eco_snb_result").innerHTML = "SN<SUB>b</SUB> = " + D2.toFixed(2) + " x " + a2.toFixed(2) + " x " + m2.toFixed(2) + " = " + Snb.toFixed(2);
            document.getElementById("diseño_eco_sn2_proces").innerHTML = "SN<SUB>2</SUB> = SN<SUB>1</SUB> + SN<SUB>b</SUB>"
            document.getElementById("diseño_eco_sn2_result").innerHTML = "SN<SUB>2</SUB> = " + Sn1.toFixed(2) + " + " + Snb.toFixed(2) +  " = " + Sn2.toFixed(2);
            document.getElementById("diseño_eco_snsb_proces").innerHTML = "SN<SUB>sb</SUB> = SN<SUB>3</SUB> - SN<SUB>2</SUB>"
            document.getElementById("diseño_eco_snsb_result").innerHTML = "SN<SUB>sb</SUB> = " + Sn3.toFixed(2) + " - " + Sn2.toFixed(2) +  " = " + Snsb.toFixed(2);
            document.getElementById("diseño_eco_d3_proces").innerHTML = ("D<SUB>3</SUB>" + " = " + "SN<SUB>sb</SUB>" + " / " + "a<SUB>3</SUB> x m<SUB>3</SUB>");
            document.getElementById("diseño_eco_d3_result").innerHTML = "D<SUB>3</SUB>" + " = " + Snsb.toFixed(2) + " / " + a3.toFixed(3) + "x" + m3.toFixed(2) + " = " + D3.toFixed(2) + " in" + " ≈ " + D3_redondeado.toFixed(2) + " in";
        } else {
            $('#btnClcSN').trigger('click');
            $("#espesor_asfalto_recomendado").prop("disabled", false);
            $("#espesor_base_recomendado").prop("disabled", false);
            $("#recal_diseñoEconomico").hide();
            $("#recal_espesores").hide();
        };

    });



    $("#btnClcSN").on("click", function () {
        

        
		
        var addSubbase = $("#addSubbase")
        var addBase = $("#addBase")
        $('.recalc_process').css('display', 'none');

        if (($("#traficoTMDAflexible").val() === "") && ($("#traficoTasa_CreFlexible").val() === "") && ($("#traficoPeriodo_diseñoFlexible").val() === "") && ($("#traficoDireccionalidadFlexible").val() === "") && ($("#traficoSN_Flexible").val() === "")) {
            $("#aviso_ESALS").show();
        } else {
            $("#aviso_ESALS").hide();
        }

        if ((addBase.is(":checked")) && (addSubbase.is(":checked"))) {
            var sn3 = clcEspesorAsfalto();

            $("#sn3").val(sn3.toFixed(2));
            document.getElementById('proceso_SN3').innerHTML = sn3.toFixed(2)


            var sn2 = clcEspesorSubbase();
            $("#sn2").val(sn2.toFixed(2));
            document.getElementById('proceso_SN2').innerHTML = sn2.toFixed(2)

            var sn1 = clcEspesorBase();
            $("#sn1").val(sn1.toFixed(2));
            document.getElementById('proceso_SN1').innerHTML = sn1.toFixed(2)

            var snb = sn2 - sn1;
            document.getElementById('SN_base_corregido').innerHTML = snb.toFixed(2);

            var snsb = sn3 - sn2;
            document.getElementById('SN_subbase_corregido').innerHTML = snsb.toFixed(2);
            $("#diseñoEconomico_td").show();
            if ((snb > 0) && (snsb > 0)) {
                $('.resultados').show(10);



                document.getElementById("ecuacion_SN_base").innerHTML = ("SN<SUB>b</SUB>" + " = " + "SN<SUB>2</SUB>" + " - " + "SN<SUB>1</SUB>");
                document.getElementById("calculo_SN_base").innerHTML = ("SN<SUB>b</SUB>" + " = " + sn2.toFixed(2) + " - " + sn1.toFixed(2) + " = " + $('#SN_base_corregido').text());
                document.getElementById("ecuacion_SN_subbase").innerHTML = ("SN<SUB>sb</SUB>" + " = " + "SN<SUB>3</SUB>" + " - " + "SN<SUB>2</SUB>");
                document.getElementById("calculo_SN_subbase").innerHTML = ("SN<SUB>sb</SUB>" + " = " + sn3.toFixed(2) + " - " + sn2.toFixed(2) + " = " + $('#SN_subbase_corregido').text());

                var espesor_asfalto_recomendado = (sn1 / parseFloat($('#coeficiente_a1_oculto').val()));
                var espesor_base_recomendado = (snb / ((parseFloat($('#coefa2').val())) * (parseFloat($('#m2').val()))));
                var espesor_subbase_recomendado = (snsb / ((parseFloat($('#coefa3').val())) * (parseFloat($('#m3').val()))));


                var w18 = parseFloat($('#Esals_Flexible').val());
                $('#espesor_min_primeros_val').css('background-color', "");
                $('#espesor_min_segundos_val').css('background-color', "");
                $('#espesor_min_terceros_val').css('background-color', "");
                $('#espesor_min_cuartos_val').css('background-color', "");
                $('#espesor_min_quintos_val').css('background-color', "");
                $('#espesor_min_sextos_val').css('background-color', "");

                if (w18 < 50000) {
                    $('#espesor_min_primeros_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 1) {
                        $("#espesor_asfalto_recomendado").val("1.00");
                        var easf = 1.00;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (50001 <= w18 && w18 <= 150000) {
                    $('#espesor_min_segundos_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 2) {
                        $("#espesor_asfalto_recomendado").val("2.00");
                        var easf = 2.00;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (150001 <= w18 && w18 <= 500000) {
                    $('#espesor_min_terceros_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 2.5) {
                        $("#espesor_asfalto_recomendado").val("2.50");
                        var easf = 2.50;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (500001 <= w18 && w18 <= 2000000) {
                    $('#espesor_min_cuartos_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 3) {
                        $("#espesor_asfalto_recomendado").val("3.00");
                        var easf = 3.00;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (2000001 <= w18 && w18 <= 7000000) {
                    $('#espesor_min_quintos_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 3.5) {
                        $("#espesor_asfalto_recomendado").val("3.50");
                        var easf = 3.50;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (w18 >= 7000001) {
                    $('#espesor_min_sextos_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 4) {
                        $("#espesor_asfalto_recomendado").val("4.00");
                        var easf = 4.00;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                }
                if (w18 < 50000) {
                    if (espesor_base_recomendado < 4) {
                        $("#espesor_base_recomendado").val("4.00");

                    } else {
                        $("#espesor_base_recomendado").val((Math.ceil(espesor_base_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                } else if (50001 <= w18 && w18 <= 150000) {
                    if (espesor_base_recomendado < 4) {
                        $("#espesor_base_recomendado").val("4.00");

                    } else {
                        $("#espesor_base_recomendado").val((Math.ceil(espesor_base_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                } else if (150001 <= w18 && w18 <= 500000) {
                    if (espesor_base_recomendado < 4) {
                        $("#espesor_base_recomendado").val("4.00");

                    } else {
                        $("#espesor_base_recomendado").val((Math.ceil(espesor_base_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                } else if (500001 <= w18 && w18 <= 2000000) {
                    if (espesor_base_recomendado < 6) {
                        $("#espesor_base_recomendado").val("6.00");

                    } else {
                        $("#espesor_base_recomendado").val((Math.ceil(espesor_base_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                } else if (2000001 <= w18 && w18 <= 7000000) {
                    if (espesor_base_recomendado < 6) {
                        $("#espesor_base_recomendado").val("6.00");

                    } else {
                        $("#espesor_base_recomendado").val((Math.ceil(espesor_base_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                } else if (w18 >= 7000001) {
                    if (espesor_base_recomendado < 6) {
                        $("#espesor_base_recomendado").val("6.00");

                    } else {
                        $("#espesor_base_recomendado").val((Math.ceil(espesor_base_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                }
                if (w18 < 50000) {
                    if (espesor_subbase_recomendado < 4) {
                        $("#espesor_subbase_recomendado").val("4.00");

                    } else {
                        $("#espesor_subbase_recomendado").val((Math.ceil(espesor_subbase_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                } else if (50001 <= w18 && w18 <= 150000) {
                    if (espesor_subbase_recomendado < 4) {
                        $("#espesor_subbase_recomendado").val("4.00");

                    } else {
                        $("#espesor_subbase_recomendado").val((Math.ceil(espesor_subbase_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                } else if (150001 <= w18 && w18 <= 500000) {
                    if (espesor_subbase_recomendado < 4) {
                        $("#espesor_subbase_recomendado").val("4.00");

                    } else {
                        $("#espesor_subbase_recomendado").val((Math.ceil(espesor_subbase_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                } else if (500001 <= w18 && w18 <= 2000000) {
                    if (espesor_subbase_recomendado < 6) {
                        $("#espesor_subbase_recomendado").val("6.00");

                    } else {
                        $("#espesor_subbase_recomendado").val((Math.ceil(espesor_subbase_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                } else if (2000001 <= w18 && w18 <= 7000000) {
                    if (espesor_subbase_recomendado < 6) {
                        $("#espesor_subbase_recomendado").val("6.00");

                    } else {
                        $("#espesor_subbase_recomendado").val((Math.ceil(espesor_subbase_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                } else if (w18 >= 7000001) {
                    if (espesor_subbase_recomendado < 6) {
                        $("#espesor_subbase_recomendado").val("6.00");

                    } else {
                        $("#espesor_subbase_recomendado").val((Math.ceil(espesor_subbase_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                }

                document.getElementById("resultado_EspAsfalte").innerHTML = parseFloat($('#espesor_asfalto_recomendado').val()).toFixed(2) + " in";
                document.getElementById("resultado_EspBase").innerHTML = parseFloat($('#espesor_base_recomendado').val()).toFixed(2) + " in";
                document.getElementById("resultado_EspSubbase").innerHTML = parseFloat($('#espesor_subbase_recomendado').val()).toFixed(2) + " in";


                var SNf = (parseFloat($('#resultado_EspAsfalte').text()) * parseFloat($('#coeficiente_a1_oculto').val())) + (parseFloat($('#resultado_EspBase').text()) * ((parseFloat($('#coefa2').val())) * (parseFloat($('#m2').val())))) + (parseFloat($('#resultado_EspSubbase').text()) * ((parseFloat($('#coefa3').val())) * (parseFloat($('#m3').val()))));
                $("#SnRecomendado").val(SNf);
                if (SNf >= sn3) {
                    var rev = "Cumple";
                } else {
                    var rev = "No cumple"
                }
                document.getElementById("procesoEspAsfalto").innerHTML = ("D<SUB>1</SUB>" + " = " + "SN<SUB>1</SUB>" + " / " + "a<SUB>1</SUB>");
                document.getElementById("calcEspAsfalto").innerHTML = ("D<SUB>1</SUB>" + " = " + sn1.toFixed(2) + " / " + parseFloat($('#coeficiente_a1_oculto').val()).toFixed(3) + " = " + espesor_asfalto_recomendado.toFixed(2) + " ≈ " + $('#resultado_EspAsfalte').text());
                $("#espesor_asfalto_clc").val(espesor_asfalto_recomendado.toFixed(2));

                document.getElementById("procesoEspBase").innerHTML = ("D<SUB>2</SUB>" + " = " + "SN<SUB>b</SUB>" + " / " + "a<SUB>2</SUB>" + " x " + "m<SUB>2</SUB>");
                document.getElementById("calcEspBase").innerHTML = ("D<SUB>2</SUB>" + " = " + snb.toFixed(2) + " / " + parseFloat($('#coefa2').val()).toFixed(3) + " x " + parseFloat($('#m2').val()).toFixed(2) + " = " + espesor_base_recomendado.toFixed(2) + "in" + " ≈ " + $('#resultado_EspBase').text());
                $("#espesor_base_clc").val(espesor_base_recomendado.toFixed(2));

                document.getElementById("procesoEspSubbase").innerHTML = ("D<SUB>3</SUB>" + " = " + "SN<SUB>sb</SUB>" + " / " + "a<SUB>3</SUB>" + " x " + "m<SUB>3</SUB>");
                document.getElementById("calcEspSubbase").innerHTML = ("D<SUB>3</SUB>" + " = " + snsb.toFixed(2) + " / " + parseFloat($('#coefa3').val()).toFixed(3) + " x " + parseFloat($('#m3').val()).toFixed(2) + " = " + espesor_subbase_recomendado.toFixed(2) + "in" + " ≈ " + $('#resultado_EspSubbase').text());
                $("#espesor_subbase_clc").val(espesor_subbase_recomendado.toFixed(2));

                document.getElementById("procesoSN").innerHTML = ("SN" + " = " + "D<SUB>1</SUB> x a<SUB>1</SUB>" + " + " + "D<SUB>2</SUB> x a<SUB>2</SUB> x m<SUB>2</SUB>" + " + " + "D<SUB>3</SUB> x a<SUB>2</SUB> x m<SUB>3</SUB>");
                document.getElementById("calcSN").innerHTML = "SN" + " = " + $('#resultado_EspAsfalte').text() + " x " + parseFloat($('#coeficiente_a1_oculto').val()).toFixed(3) + " " + "     +     " + " " + $('#resultado_EspBase').text() + " x " + parseFloat($('#coefa2').val()).toFixed(3) + " x " + parseFloat($('#m2').val()).toFixed(2) + " " + "      +     " + " " + $('#resultado_EspSubbase').text() + " x " + parseFloat($('#coefa3').val()).toFixed(3) + " x " + parseFloat($('#m3').val()).toFixed(2) + " = " + SNf.toFixed(2);
                document.getElementById("procesoRevisarSN").innerHTML = "Revisar" + " " + "SN" + " > " + "SN<SUB>3</SUB>";
                document.getElementById("calcRevisarSN").innerHTML = SNf.toFixed(2) + " > " + sn3.toFixed(2) + " " + rev;
                document.getElementById("explicacion_revision_sn").innerHTML = "En este caso, el número estructural de las capas diseñadas es de "+SNf.toFixed(2) + " el cual es mayor al SN<SUB>3</SUB> = " + sn3.toFixed(2) + ", por lo tanto, el diseño es satisfactorio. Por lo tanto, los espesores de las capas de pavimento flexible son:";

                espAsfBaseSubbase();
                $('#graphics8').show(10);
                document.getElementById('graphics9').style.display = 'none';
                document.getElementById('graphics10').style.display = 'none';
                document.getElementById('graphics11').style.display = 'none';

                $('#detalle').show(10);
                $('#reporte').show(10);
                var altura = $(document).height();
                $("html, body").animate({
                    scrollTop: altura + "px"
                });
                clc_coeficiente_m2();
                clc_coeficiente_m3();
                iterarSN();
                loadGraph();
            } else if ((snb <= 0) && (snsb > 0)) {
                $('.espesorBase').css('display', 'none');
                $('.resultados').show(10);


                document.getElementById("ecuacion_SN_subbase").innerHTML = ("SN<SUB>sb</SUB>" + " = " + "SN<SUB>3</SUB>" + " - " + "SN<SUB>2</SUB>");
                document.getElementById("calculo_SN_subbase").innerHTML = ("SN<SUB>sb</SUB>" + " = " + sn3.toFixed(2) + " - " + sn2.toFixed(2) + " = " + $('#SN_subbase_corregido').text());


                var espesor_asfalto_recomendado = (sn1 / parseFloat($('#coeficiente_a1_oculto').val()));
                var espesor_subbase_recomendado = (snsb / ((parseFloat($('#coefa3').val())) * (parseFloat($('#m3').val()))));



                var w18 = parseFloat($('#Esals_Flexible').val());
                $('#espesor_min_primeros_val').css('background-color', "");
                $('#espesor_min_segundos_val').css('background-color', "");
                $('#espesor_min_terceros_val').css('background-color', "");
                $('#espesor_min_cuartos_val').css('background-color', "");
                $('#espesor_min_quintos_val').css('background-color', "");
                $('#espesor_min_sextos_val').css('background-color', "");

                if (w18 < 50000) {
                    $('#espesor_min_primeros_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 1) {
                        $("#espesor_asfalto_recomendado").val("1.00");
                        var easf = 1.00;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (50001 <= w18 && w18 <= 150000) {
                    $('#espesor_min_segundos_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 2) {
                        $("#espesor_asfalto_recomendado").val("2.00");
                        var easf = 2.00;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (150001 <= w18 && w18 <= 500000) {
                    $('#espesor_min_terceros_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 2.5) {
                        $("#espesor_asfalto_recomendado").val("2.50");
                        var easf = 2.50;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (500001 <= w18 && w18 <= 2000000) {
                    $('#espesor_min_cuartos_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 3) {
                        $("#espesor_asfalto_recomendado").val("3.00");
                        var easf = 3.00;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (2000001 <= w18 && w18 <= 7000000) {
                    $('#espesor_min_quintos_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 3.5) {
                        $("#espesor_asfalto_recomendado").val("3.50");
                        var easf = 3.50;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (w18 >= 7000001) {
                    $('#espesor_min_sextos_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 4) {
                        $("#espesor_asfalto_recomendado").val("4.00");
                        var easf = 4.00;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                }
                if (w18 < 50000) {
                    if (espesor_subbase_recomendado < 4) {
                        $("#espesor_subbase_recomendado").val("4.00");

                    } else {
                        $("#espesor_subbase_recomendado").val((Math.ceil(espesor_subbase_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                } else if (50001 <= w18 && w18 <= 150000) {
                    if (espesor_subbase_recomendado < 4) {
                        $("#espesor_subbase_recomendado").val("4.00");

                    } else {
                        $("#espesor_subbase_recomendado").val((Math.ceil(espesor_subbase_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                } else if (150001 <= w18 && w18 <= 500000) {
                    if (espesor_subbase_recomendado < 4) {
                        $("#espesor_subbase_recomendado").val("4.00");

                    } else {
                        $("#espesor_subbase_recomendado").val((Math.ceil(espesor_subbase_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                } else if (500001 <= w18 && w18 <= 2000000) {
                    if (espesor_subbase_recomendado < 6) {
                        $("#espesor_subbase_recomendado").val("6.00");

                    } else {
                        $("#espesor_subbase_recomendado").val((Math.ceil(espesor_subbase_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                } else if (2000001 <= w18 && w18 <= 7000000) {
                    if (espesor_subbase_recomendado < 6) {
                        $("#espesor_subbase_recomendado").val("6.00");

                    } else {
                        $("#espesor_subbase_recomendado").val((Math.ceil(espesor_subbase_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                } else if (w18 >= 7000001) {
                    if (espesor_subbase_recomendado < 6) {
                        $("#espesor_subbase_recomendado").val("6.00");

                    } else {
                        $("#espesor_subbase_recomendado").val((Math.ceil(espesor_subbase_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                }


                document.getElementById("resultado_EspAsfalte").innerHTML = parseFloat($('#espesor_asfalto_recomendado').val()).toFixed(2) + " in";
                document.getElementById("resultado_EspSubbase").innerHTML = parseFloat($('#espesor_subbase_recomendado').val()).toFixed(2) + " in";




                var SNf = (parseFloat($('#resultado_EspAsfalte').text()) * parseFloat($('#coeficiente_a1_oculto').val())) + (parseFloat($('#resultado_EspSubbase').text()) * ((parseFloat($('#coefa3').val())) * (parseFloat($('#m3').val()))));
                $("#SnRecomendado").val(SNf);
                if (SNf >= sn3) {
                    var rev = "Cumple";
                } else {
                    var rev = "No cumple"
                }
                document.getElementById("procesoEspAsfalto").innerHTML = ("D<SUB>1</SUB>" + " = " + "SN<SUB>1</SUB>" + " / " + "a<SUB>1</SUB>");
                document.getElementById("calcEspAsfalto").innerHTML = ("D<SUB>1</SUB>" + " = " + sn1.toFixed(2) + " / " + parseFloat($('#coeficiente_a1_oculto').val()).toFixed(3) + " = " + espesor_asfalto_recomendado.toFixed(2) + " ≈ " + $('#resultado_EspAsfalte').text());
                $("#espesor_asfalto_clc").val(espesor_asfalto_recomendado.toFixed(2));

                document.getElementById("procesoEspSubbase").innerHTML = ("D<SUB>3</SUB>" + " = " + "SN<SUB>sb</SUB>" + " / " + "a<SUB>3</SUB>" + " x " + "m<SUB>3</SUB>");
                document.getElementById("calcEspSubbase").innerHTML = ("D<SUB>3</SUB>" + " = " + snsb.toFixed(2) + " / " + parseFloat($('#coefa3').val()).toFixed(3) + " x " + parseFloat($('#m3').val()).toFixed(2) + " = " + espesor_subbase_recomendado.toFixed(2) + "in" + " ≈ " + $('#resultado_EspSubbase').text());
                $("#espesor_subbase_clc").val(espesor_subbase_recomendado.toFixed(2));


                document.getElementById("procesoSN").innerHTML = ("SN" + " = " + "D<SUB>1</SUB> x a<SUB>1</SUB>" + " + " + "D<SUB>3</SUB> x a<SUB>3</SUB> x m<SUB>3</SUB>");
                document.getElementById("calcSN").innerHTML = "SN" + " = " + $('#resultado_EspAsfalte').text() + " x " + parseFloat($('#coeficiente_a1_oculto').val()).toFixed(3) + " " + "     +     " + " " + $('#resultado_EspSubbase').text() + " x " + parseFloat($('#coefa3').val()).toFixed(3) + " x " + parseFloat($('#m3').val()).toFixed(2) + " " + " = " + SNf.toFixed(2);
                document.getElementById("procesoRevisarSN").innerHTML = "Revisar" + " " + "SN" + " > " + "SN<SUB>3</SUB>";
                document.getElementById("calcRevisarSN").innerHTML = SNf.toFixed(2) + " > " + sn3.toFixed(2) + " " + rev;
                document.getElementById("explicacion_revision_sn").innerHTML = "En este caso, el número estructural de las capas diseñadas es de "+SNf.toFixed(2) + " el cual es mayor al SN<SUB>3</SUB> = " + sn3.toFixed(2) + ", por lo tanto, el diseño es satisfactorio. Por lo tanto, los espesores de las capas de pavimento flexible son:";

                espAsfSubbase();
                $('#graphics10').show(10);
                document.getElementById('graphics8').style.display = 'none';
                document.getElementById('graphics9').style.display = 'none';
                document.getElementById('graphics11').style.display = 'none';
                $('#detalle').show(10);
                $('#reporte').show(10);
                var altura = $(document).height();
                $("html, body").animate({
                    scrollTop: altura + "px"
                });
                clc_coeficiente_m2();
                clc_coeficiente_m3();
                iterarSN();
                loadGraph();
            } else if ((snsb <= 0) && (snb > 0)) {
                $('.resultados').show(10);
                $('.espesorSubbase').css('display', 'none');






                document.getElementById("ecuacion_SN_base").innerHTML = ("SN<SUB>b</SUB>" + " = " + "SN<SUB>3</SUB>" + " - " + "SN<SUB>1</SUB>");
                document.getElementById("calculo_SN_base").innerHTML = ("SN<SUB>b</SUB>" + " = " + sn2.toFixed(2) + " - " + sn1.toFixed(2) + " = " + $('#SN_base_corregido').text());


                var espesor_asfalto_recomendado = (sn1 / parseFloat($('#coeficiente_a1_oculto').val()));
                var espesor_base_recomendado = (snb / ((parseFloat($('#coefa2').val())) * (parseFloat($('#m2').val()))));



                var w18 = parseFloat($('#Esals_Flexible').val());
                $('#espesor_min_primeros_val').css('background-color', "");
                $('#espesor_min_segundos_val').css('background-color', "");
                $('#espesor_min_terceros_val').css('background-color', "");
                $('#espesor_min_cuartos_val').css('background-color', "");
                $('#espesor_min_quintos_val').css('background-color', "");
                $('#espesor_min_sextos_val').css('background-color', "");

                if (w18 < 50000) {
                    $('#espesor_min_primeros_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 1) {
                        $("#espesor_asfalto_recomendado").val("1.00");
                        var easf = 1.00;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (50001 <= w18 && w18 <= 150000) {
                    $('#espesor_min_segundos_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 2) {
                        $("#espesor_asfalto_recomendado").val("2.00");
                        var easf = 2.00;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (150001 <= w18 && w18 <= 500000) {
                    $('#espesor_min_terceros_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 2.5) {
                        $("#espesor_asfalto_recomendado").val("2.50");
                        var easf = 2.50;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (500001 <= w18 && w18 <= 2000000) {
                    $('#espesor_min_cuartos_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 3) {
                        $("#espesor_asfalto_recomendado").val("3.00");
                        var easf = 3.00;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (2000001 <= w18 && w18 <= 7000000) {
                    $('#espesor_min_quintos_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 3.5) {
                        $("#espesor_asfalto_recomendado").val("3.50");
                        var easf = 3.50;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (w18 >= 7000001) {
                    $('#espesor_min_sextos_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 4) {
                        $("#espesor_asfalto_recomendado").val("4.00");
                        var easf = 4.00;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                }
                if (w18 < 50000) {
                    if (espesor_base_recomendado < 4) {
                        $("#espesor_base_recomendado").val("4.00");

                    } else {
                        $("#espesor_base_recomendado").val((Math.ceil(espesor_base_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                } else if (50001 <= w18 && w18 <= 150000) {
                    if (espesor_base_recomendado < 4) {
                        $("#espesor_base_recomendado").val("4.00");

                    } else {
                        $("#espesor_base_recomendado").val((Math.ceil(espesor_base_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                } else if (150001 <= w18 && w18 <= 500000) {
                    if (espesor_base_recomendado < 4) {
                        $("#espesor_base_recomendado").val("4.00");

                    } else {
                        $("#espesor_base_recomendado").val((Math.ceil(espesor_base_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                } else if (500001 <= w18 && w18 <= 2000000) {
                    if (espesor_base_recomendado < 6) {
                        $("#espesor_base_recomendado").val("6.00");

                    } else {
                        $("#espesor_base_recomendado").val((Math.ceil(espesor_base_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                } else if (2000001 <= w18 && w18 <= 7000000) {
                    if (espesor_base_recomendado < 6) {
                        $("#espesor_base_recomendado").val("6.00");

                    } else {
                        $("#espesor_base_recomendado").val((Math.ceil(espesor_base_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                } else if (w18 >= 7000001) {
                    if (espesor_base_recomendado < 6) {
                        $("#espesor_base_recomendado").val("6.00");

                    } else {
                        $("#espesor_base_recomendado").val((Math.ceil(espesor_base_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                }


                document.getElementById("resultado_EspAsfalte").innerHTML = parseFloat($('#espesor_asfalto_recomendado').val()).toFixed(2) + " in";
                document.getElementById("resultado_EspBase").innerHTML = parseFloat($('#espesor_base_recomendado').val()).toFixed(2) + " in";



                var SNf = (parseFloat($('#resultado_EspAsfalte').text()) * parseFloat($('#coeficiente_a1_oculto').val())) + (parseFloat($('#resultado_EspBase').text()) * ((parseFloat($('#coefa2').val())) * (parseFloat($('#m2').val()))));
                $("#SnRecomendado").val(SNf);
                if (SNf >= sn3) {
                    var rev = "Cumple";
                } else {
                    var rev = "No cumple"
                }
                document.getElementById("procesoEspAsfalto").innerHTML = ("D<SUB>1</SUB>" + " = " + "SN<SUB>1</SUB>" + " / " + "a<SUB>1</SUB>");
                document.getElementById("calcEspAsfalto").innerHTML = ("D<SUB>1</SUB>" + " = " + sn1.toFixed(2) + " / " + parseFloat($('#coeficiente_a1_oculto').val()).toFixed(3) + " = " + espesor_asfalto_recomendado.toFixed(2) + " ≈ " + $('#resultado_EspAsfalte').text());
                $("#espesor_asfalto_clc").val(espesor_asfalto_recomendado.toFixed(2));

                document.getElementById("procesoEspBase").innerHTML = ("D<SUB>2</SUB>" + " = " + "SN<SUB>b</SUB>" + " / " + "a<SUB>2</SUB>" + " x " + "m<SUB>2</SUB>");
                document.getElementById("calcEspBase").innerHTML = ("D<SUB>2</SUB>" + " = " + snb.toFixed(2) + " / " + parseFloat($('#coefa2').val()).toFixed(3) + " x " + parseFloat($('#m2').val()).toFixed(2) + " = " + espesor_base_recomendado.toFixed(2) + "in" + " ≈ " + $('#resultado_EspBase').text());
                $("#espesor_base_clc").val(espesor_base_recomendado.toFixed(2));


                document.getElementById("procesoSN").innerHTML = ("SN" + " = " + "D<SUB>1</SUB> x a<SUB>1</SUB>" + " + " + "D<SUB>2</SUB> x a<SUB>2</SUB> x m<SUB>2</SUB>");
                document.getElementById("calcSN").innerHTML = "SN" + " = " + $('#resultado_EspAsfalte').text() + " x " + parseFloat($('#coeficiente_a1_oculto').val()).toFixed(3) + " " + "     +     " + " " + $('#resultado_EspBase').text() + " x " + parseFloat($('#coefa2').val()).toFixed(3) + " x " + parseFloat($('#m2').val()).toFixed(2) + " = " + SNf.toFixed(2);
                document.getElementById("procesoRevisarSN").innerHTML = "Revisar" + " " + "SN" + " > " + "SN<SUB>3</SUB>";
                document.getElementById("calcRevisarSN").innerHTML = SNf.toFixed(2) + " > " + sn3.toFixed(2) + " " + rev;
                document.getElementById("explicacion_revision_sn").innerHTML = "En este caso, el número estructural de las capas diseñadas es de "+SNf.toFixed(2) + " el cual es mayor al SN<SUB>3</SUB> = " + sn3.toFixed(2) + ", por lo tanto, el diseño es satisfactorio. Por lo tanto, los espesores de las capas de pavimento flexible son:";


                espAsfBase();
                $('#graphics9').show(10);
                document.getElementById('graphics8').style.display = 'none';
                document.getElementById('graphics10').style.display = 'none';
                document.getElementById('graphics11').style.display = 'none';
                $('#detalle').show(10);
                $('#reporte').show(10);
                var altura = $(document).height();
                $("html, body").animate({
                    scrollTop: altura + "px"
                });
                clc_coeficiente_m2();
                clc_coeficiente_m3();
                iterarSN();
                loadGraph();
            } else if ((snb <= 0) && (snsb <= 0)) {
                $('.resultados').show(10);
                $('.espesorSubbase').css('display', 'none');
                $('.espesorBase').css('display', 'none');

                document.getElementById("ecuacion_SN_base").innerHTML = ("SN<SUB>b</SUB>" + " = " + "SN<SUB>2</SUB>" + " - " + "SN<SUB>1</SUB>");
                document.getElementById("calculo_SN_base").innerHTML = ("SN<SUB>b</SUB>" + " = " + sn2.toFixed(2) + " - " + sn1.toFixed(2) + " = " + $('#SN_base_corregido').text());
                document.getElementById("ecuacion_SN_subbase").innerHTML = ("SN<SUB>sb</SUB>" + " = " + "SN<SUB>3</SUB>" + " - " + "SN<SUB>2</SUB>");
                document.getElementById("calculo_SN_subbase").innerHTML = ("SN<SUB>sb</SUB>" + " = " + sn3.toFixed(2) + " - " + sn2.toFixed(2) + " = " + $('#SN_subbase_corregido').text());

                var espesor_asfalto_recomendado = (sn3 / parseFloat($('#coeficiente_a1_oculto').val()));


                var w18 = parseFloat($('#Esals_Flexible').val());
                $('#espesor_min_primeros_val').css('background-color', "");
                $('#espesor_min_segundos_val').css('background-color', "");
                $('#espesor_min_terceros_val').css('background-color', "");
                $('#espesor_min_cuartos_val').css('background-color', "");
                $('#espesor_min_quintos_val').css('background-color', "");
                $('#espesor_min_sextos_val').css('background-color', "");

                if (w18 < 50000) {
                    $('#espesor_min_primeros_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 1) {
                        $("#espesor_asfalto_recomendado").val("1.00");
                        var easf = 1.00;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (50001 <= w18 && w18 <= 150000) {
                    $('#espesor_min_segundos_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 2) {
                        $("#espesor_asfalto_recomendado").val("2.00");
                        var easf = 2.00;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (150001 <= w18 && w18 <= 500000) {
                    $('#espesor_min_terceros_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 2.5) {
                        $("#espesor_asfalto_recomendado").val("2.50");
                        var easf = 2.50;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (500001 <= w18 && w18 <= 2000000) {
                    $('#espesor_min_cuartos_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 3) {
                        $("#espesor_asfalto_recomendado").val("3.00");
                        var easf = 3.00;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (2000001 <= w18 && w18 <= 7000000) {
                    $('#espesor_min_quintos_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 3.5) {
                        $("#espesor_asfalto_recomendado").val("3.50");
                        var easf = 3.50;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (w18 >= 7000001) {
                    $('#espesor_min_sextos_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 4) {
                        $("#espesor_asfalto_recomendado").val("4.00");
                        var easf = 4.00;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                }



                document.getElementById("resultado_EspAsfalte").innerHTML = parseFloat($('#espesor_asfalto_recomendado').val()).toFixed(2) + " in";





                var SNf = (parseFloat($('#resultado_EspAsfalte').text()) * parseFloat($('#coeficiente_a1_oculto').val()));
                $("#SnRecomendado").val(SNf);
                if (SNf >= sn3) {
                    var rev = "Cumple";
                } else {
                    var rev = "No cumple"
                }
                document.getElementById("procesoEspAsfalto").innerHTML = ("D<SUB>1</SUB>" + " = " + "SN<SUB>1</SUB>" + " / " + "a<SUB>1</SUB>");
                document.getElementById("calcEspAsfalto").innerHTML = ("D<SUB>1</SUB>" + " = " + sn3.toFixed(2) + " / " + parseFloat($('#coeficiente_a1_oculto').val()).toFixed(3) + " = " + espesor_asfalto_recomendado.toFixed(2) + " ≈ " + $('#resultado_EspAsfalte').text());
                $("#espesor_asfalto_clc").val(espesor_asfalto_recomendado.toFixed(2));




                document.getElementById("procesoSN").innerHTML = ("SN" + " = " + "D<SUB>1</SUB> x a<SUB>1</SUB>");
                document.getElementById("calcSN").innerHTML = "SN" + " = " + $('#resultado_EspAsfalte').text() + " x " + parseFloat($('#coeficiente_a1_oculto').val()).toFixed(3) + " = " + SNf.toFixed(2);
                document.getElementById("procesoRevisarSN").innerHTML = "Revisar" + " " + "SN" + " > " + "SN<SUB>3</SUB>";
                document.getElementById("calcRevisarSN").innerHTML = SNf.toFixed(2) + " > " + sn3.toFixed(2) + " " + rev;
                document.getElementById("explicacion_revision_sn").innerHTML = "En este caso, el número estructural de las capas diseñadas es de "+SNf.toFixed(2) + " el cual es mayor al SN<SUB>3</SUB> = " + sn3.toFixed(2) + ", por lo tanto, el diseño es satisfactorio. Por lo tanto, los espesores de las capas de pavimento flexible son:";


                espAsfSubbase();
                $('#graphics10').show(10);
                document.getElementById('graphics8').style.display = 'none';
                document.getElementById('graphics9').style.display = 'none';
                document.getElementById('graphics11').style.display = 'none';
                $('#detalle').show(10);
                $('#reporte').show(10);
                var altura = $(document).height();
                $("html, body").animate({
                    scrollTop: altura + "px"
                });

                iterarSN();
                loadGraph();
            }



        } else if ((addBase.is(":checked")) && (addSubbase.is(":not(:checked)"))) {
            $('.resultados').show(10);
            $('.espesorSubbase').css('display', 'none');

            var sn3 = clcEspesorAsfalto();

            $("#sn3").val(sn3.toFixed(2));
            document.getElementById('proceso_SN3').innerHTML = sn3.toFixed(2)


            var sn2 = clcEspesorSubbase();
            $("#sn2").val(sn2.toFixed(2));
            document.getElementById('proceso_SN2').innerHTML = sn2.toFixed(2)

            var sn1 = clcEspesorBase();
            $("#sn1").val(sn1.toFixed(2));
            document.getElementById('proceso_SN1').innerHTML = sn1.toFixed(2)

            var snb = sn3 - sn1;

            document.getElementById('SN_base_corregido').innerHTML = snb.toFixed(2);

            $("#diseñoEconomico_td").hide();
            if (snb > 0) {
                $('.espesorBase').show(10);
                document.getElementById("ecuacion_SN_base").innerHTML = ("SN<SUB>b</SUB>" + " = " + "SN<SUB>3</SUB>" + " - " + "SN<SUB>1</SUB>");
                document.getElementById("calculo_SN_base").innerHTML = ("SN<SUB>b</SUB>" + " = " + sn3.toFixed(2) + " - " + sn1.toFixed(2) + " = " + $('#SN_base_corregido').text());


                var espesor_asfalto_recomendado = (sn1 / parseFloat($('#coeficiente_a1_oculto').val()));
                var espesor_base_recomendado = (snb / ((parseFloat($('#coefa2').val())) * (parseFloat($('#m2').val()))));



                var w18 = parseFloat($('#Esals_Flexible').val());
                $('#espesor_min_primeros_val').css('background-color', "");
                $('#espesor_min_segundos_val').css('background-color', "");
                $('#espesor_min_terceros_val').css('background-color', "");
                $('#espesor_min_cuartos_val').css('background-color', "");
                $('#espesor_min_quintos_val').css('background-color', "");
                $('#espesor_min_sextos_val').css('background-color', "");

                if (w18 < 50000) {
                    $('#espesor_min_primeros_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 1) {
                        $("#espesor_asfalto_recomendado").val("1.00");
                        var easf = 1.00;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (50001 <= w18 && w18 <= 150000) {
                    $('#espesor_min_segundos_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 2) {
                        $("#espesor_asfalto_recomendado").val("2.00");
                        var easf = 2.00;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (150001 <= w18 && w18 <= 500000) {
                    $('#espesor_min_terceros_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 2.5) {
                        $("#espesor_asfalto_recomendado").val("2.50");
                        var easf = 2.50;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (500001 <= w18 && w18 <= 2000000) {
                    $('#espesor_min_cuartos_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 3) {
                        $("#espesor_asfalto_recomendado").val("3.00");
                        var easf = 3.00;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (2000001 <= w18 && w18 <= 7000000) {
                    $('#espesor_min_quintos_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 3.5) {
                        $("#espesor_asfalto_recomendado").val("3.50");
                        var easf = 3.50;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (w18 >= 7000001) {
                    $('#espesor_min_sextos_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 4) {
                        $("#espesor_asfalto_recomendado").val("4.00");
                        var easf = 4.00;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                }
                if (w18 < 50000) {
                    if (espesor_base_recomendado < 4) {
                        $("#espesor_base_recomendado").val("4.00");

                    } else {
                        $("#espesor_base_recomendado").val((Math.ceil(espesor_base_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                } else if (50001 <= w18 && w18 <= 150000) {
                    if (espesor_base_recomendado < 4) {
                        $("#espesor_base_recomendado").val("4.00");

                    } else {
                        $("#espesor_base_recomendado").val((Math.ceil(espesor_base_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                } else if (150001 <= w18 && w18 <= 500000) {
                    if (espesor_base_recomendado < 4) {
                        $("#espesor_base_recomendado").val("4.00");

                    } else {
                        $("#espesor_base_recomendado").val((Math.ceil(espesor_base_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                } else if (500001 <= w18 && w18 <= 2000000) {
                    if (espesor_base_recomendado < 6) {
                        $("#espesor_base_recomendado").val("6.00");

                    } else {
                        $("#espesor_base_recomendado").val((Math.ceil(espesor_base_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                } else if (2000001 <= w18 && w18 <= 7000000) {
                    if (espesor_base_recomendado < 6) {
                        $("#espesor_base_recomendado").val("6.00");

                    } else {
                        $("#espesor_base_recomendado").val((Math.ceil(espesor_base_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                } else if (w18 >= 7000001) {
                    if (espesor_base_recomendado < 6) {
                        $("#espesor_base_recomendado").val("6.00");

                    } else {
                        $("#espesor_base_recomendado").val((Math.ceil(espesor_base_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                }


                document.getElementById("resultado_EspAsfalte").innerHTML = parseFloat($('#espesor_asfalto_recomendado').val()).toFixed(2) + " in";
                document.getElementById("resultado_EspBase").innerHTML = parseFloat($('#espesor_base_recomendado').val()).toFixed(2) + " in";



                var SNf = (parseFloat($('#resultado_EspAsfalte').text()) * parseFloat($('#coeficiente_a1_oculto').val())) + (parseFloat($('#resultado_EspBase').text()) * ((parseFloat($('#coefa2').val())) * (parseFloat($('#m2').val()))));
                $("#SnRecomendado").val(SNf);
                if (SNf >= sn3) {
                    var rev = "Cumple";
                } else {
                    var rev = "No cumple"
                }
                document.getElementById("procesoEspAsfalto").innerHTML = ("D<SUB>1</SUB>" + " = " + "SN<SUB>1</SUB>" + " / " + "a<SUB>1</SUB>");
                document.getElementById("calcEspAsfalto").innerHTML = ("D<SUB>1</SUB>" + " = " + sn1.toFixed(2) + " / " + parseFloat($('#coeficiente_a1_oculto').val()).toFixed(3) + " = " + espesor_asfalto_recomendado.toFixed(2) + " ≈ " + $('#resultado_EspAsfalte').text());
                $("#espesor_asfalto_clc").val(espesor_asfalto_recomendado.toFixed(2));

                document.getElementById("procesoEspBase").innerHTML = ("D<SUB>2</SUB>" + " = " + "SN<SUB>b</SUB>" + " / " + "a<SUB>2</SUB>" + " x " + "m<SUB>2</SUB>");
                document.getElementById("calcEspBase").innerHTML = ("D<SUB>2</SUB>" + " = " + snb.toFixed(2) + " / " + parseFloat($('#coefa2').val()).toFixed(3) + " x " + parseFloat($('#m2').val()).toFixed(2) + " = " + espesor_base_recomendado.toFixed(2) + "in" + " ≈ " + $('#resultado_EspBase').text());
                $("#espesor_base_clc").val(espesor_base_recomendado.toFixed(2));


                document.getElementById("procesoSN").innerHTML = ("SN" + " = " + "D<SUB>1</SUB> x a<SUB>1</SUB>" + " + " + "D<SUB>2</SUB> x a<SUB>2</SUB> x m<SUB>2</SUB>");
                document.getElementById("calcSN").innerHTML = "SN" + " = " + $('#resultado_EspAsfalte').text() + " x " + parseFloat($('#coeficiente_a1_oculto').val()).toFixed(3) + " " + "     +     " + " " + $('#resultado_EspBase').text() + " x " + parseFloat($('#coefa2').val()).toFixed(3) + " x " + parseFloat($('#m2').val()).toFixed(2) + " = " + SNf.toFixed(2);
                document.getElementById("procesoRevisarSN").innerHTML = "Revisar" + " " + "SN" + " > " + "SN<SUB>3</SUB>";
                document.getElementById("calcRevisarSN").innerHTML = SNf.toFixed(2) + " > " + sn3.toFixed(2) + " " + rev;
                document.getElementById("explicacion_revision_sn").innerHTML = "En este caso, el número estructural de las capas diseñadas es de "+SNf.toFixed(2) + " el cual es mayor al SN<SUB>3</SUB> = " + sn3.toFixed(2) + ", por lo tanto, el diseño es satisfactorio. Por lo tanto, los espesores de las capas de pavimento flexible son:";

                espAsfBase();
                $('#graphics9').show(10);
                document.getElementById('graphics8').style.display = 'none';
                document.getElementById('graphics10').style.display = 'none';
                document.getElementById('graphics11').style.display = 'none';
                $('#detalle').show(10);
                $('#reporte').show(10);
                var altura = $(document).height();
                $("html, body").animate({
                    scrollTop: altura + "px"
                });
                clc_coeficiente_m2();
                clc_coeficiente_m3();
                iterarSN();
                loadGraph();
            } else {
                $('.resultados').show(10);
                $('.espesorSubbase').css('display', 'none');
                $('.espesorBase').css('display', 'none');

                document.getElementById("ecuacion_SN_base").innerHTML = ("SN<SUB>b</SUB>" + " = " + "SN<SUB>2</SUB>" + " - " + "SN<SUB>1</SUB>");
                document.getElementById("calculo_SN_base").innerHTML = ("SN<SUB>b</SUB>" + " = " + sn2.toFixed(2) + " - " + sn1.toFixed(2) + " = " + $('#SN_base_corregido').text());
                document.getElementById("ecuacion_SN_subbase").innerHTML = ("SN<SUB>sb</SUB>" + " = " + "SN<SUB>3</SUB>" + " - " + "SN<SUB>2</SUB>");
                document.getElementById("calculo_SN_subbase").innerHTML = ("SN<SUB>sb</SUB>" + " = " + sn3.toFixed(2) + " - " + sn2.toFixed(2) + " = " + $('#SN_subbase_corregido').text());

                var espesor_asfalto_recomendado = (sn3 / parseFloat($('#coeficiente_a1_oculto').val()));


                var w18 = parseFloat($('#Esals_Flexible').val());
                $('#espesor_min_primeros_val').css('background-color', "");
                $('#espesor_min_segundos_val').css('background-color', "");
                $('#espesor_min_terceros_val').css('background-color', "");
                $('#espesor_min_cuartos_val').css('background-color', "");
                $('#espesor_min_quintos_val').css('background-color', "");
                $('#espesor_min_sextos_val').css('background-color', "");

                if (w18 < 50000) {
                    $('#espesor_min_primeros_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 1) {
                        $("#espesor_asfalto_recomendado").val("1.00");
                        var easf = 1.00;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (50001 <= w18 && w18 <= 150000) {
                    $('#espesor_min_segundos_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 2) {
                        $("#espesor_asfalto_recomendado").val("2.00");
                        var easf = 2.00;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (150001 <= w18 && w18 <= 500000) {
                    $('#espesor_min_terceros_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 2.5) {
                        $("#espesor_asfalto_recomendado").val("2.50");
                        var easf = 2.50;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (500001 <= w18 && w18 <= 2000000) {
                    $('#espesor_min_cuartos_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 3) {
                        $("#espesor_asfalto_recomendado").val("3.00");
                        var easf = 3.00;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (2000001 <= w18 && w18 <= 7000000) {
                    $('#espesor_min_quintos_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 3.5) {
                        $("#espesor_asfalto_recomendado").val("3.50");
                        var easf = 3.50;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (w18 >= 7000001) {
                    $('#espesor_min_sextos_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 4) {
                        $("#espesor_asfalto_recomendado").val("4.00");
                        var easf = 4.00;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                }



                document.getElementById("resultado_EspAsfalte").innerHTML = parseFloat($('#espesor_asfalto_recomendado').val()).toFixed(2) + " in";





                var SNf = (parseFloat($('#resultado_EspAsfalte').text()) * parseFloat($('#coeficiente_a1_oculto').val()));
                $("#SnRecomendado").val(SNf);
                if (SNf >= sn3) {
                    var rev = "Cumple";
                } else {
                    var rev = "No cumple"
                }
                document.getElementById("procesoEspAsfalto").innerHTML = ("D<SUB>1</SUB>" + " = " + "SN<SUB>1</SUB>" + " / " + "a<SUB>1</SUB>");
                document.getElementById("calcEspAsfalto").innerHTML = ("D<SUB>1</SUB>" + " = " + sn3.toFixed(2) + " / " + parseFloat($('#coeficiente_a1_oculto').val()).toFixed(3) + " = " + espesor_asfalto_recomendado.toFixed(2) + " ≈ " + $('#resultado_EspAsfalte').text());
                $("#espesor_asfalto_clc").val(espesor_asfalto_recomendado.toFixed(2));




                document.getElementById("procesoSN").innerHTML = ("SN" + " = " + "D<SUB>1</SUB> x a<SUB>1</SUB>");
                document.getElementById("calcSN").innerHTML = "SN" + " = " + $('#resultado_EspAsfalte').text() + " x " + parseFloat($('#coeficiente_a1_oculto').val()).toFixed(3) + " = " + SNf.toFixed(2);
                document.getElementById("procesoRevisarSN").innerHTML = "Revisar" + " " + "SN" + " > " + "SN<SUB>3</SUB>";
                document.getElementById("calcRevisarSN").innerHTML = SNf.toFixed(2) + " > " + sn3.toFixed(2) + " " + rev;
                document.getElementById("explicacion_revision_sn").innerHTML = "En este caso, el número estructural de las capas diseñadas es de "+SNf.toFixed(2) + " el cual es mayor al SN<SUB>3</SUB> = " + sn3.toFixed(2) + ", por lo tanto, el diseño es satisfactorio. Por lo tanto, los espesores de las capas de pavimento flexible son:";

                espAsfSubbase();
                $('#graphics10').show(10);
                document.getElementById('graphics8').style.display = 'none';
                document.getElementById('graphics9').style.display = 'none';
                document.getElementById('graphics11').style.display = 'none';
                $('#detalle').show(10);
                $('#reporte').show(10);
                var altura = $(document).height();
                $("html, body").animate({
                    scrollTop: altura + "px"
                });

                iterarSN();
                loadGraph();
            }


        } else if ((addSubbase.is(":checked")) && (addBase.is(":not(:checked)"))) {
            $('.resultados').show(10);
            $('.espesorBase').css('display', 'none');
            var sn3 = clcEspesorAsfalto();

            $("#sn3").val(sn3.toFixed(2));
            document.getElementById('proceso_SN3').innerHTML = sn3.toFixed(2)


            var sn2 = clcEspesorSubbase();
            $("#sn2").val(sn2.toFixed(2));
            document.getElementById('proceso_SN2').innerHTML = sn2.toFixed(2)

            var sn1 = clcEspesorBase();
            $("#sn1").val(sn1.toFixed(2));
            document.getElementById('proceso_SN1').innerHTML = sn1.toFixed(2)

            var snsb = sn3 - sn2;
            document.getElementById('SN_subbase_corregido').innerHTML = snsb.toFixed(2);
            $("#diseñoEconomico_td").hide();
            if (snsb > 0) {
                $('.espesorSubbase').show(10);
                document.getElementById("ecuacion_SN_subbase").innerHTML = ("SN<SUB>sb</SUB>" + " = " + "SN<SUB>3</SUB>" + " - " + "SN<SUB>1</SUB>");
                document.getElementById("calculo_SN_subbase").innerHTML = ("SN<SUB>sb</SUB>" + " = " + sn3.toFixed(2) + " - " + sn2.toFixed(2) + " = " + $('#SN_subbase_corregido').text());


                var espesor_asfalto_recomendado = (sn2 / parseFloat($('#coeficiente_a1_oculto').val()));
                var espesor_subbase_recomendado = (snsb / ((parseFloat($('#coefa3').val())) * (parseFloat($('#m3').val()))));



                var w18 = parseFloat($('#Esals_Flexible').val());
                $('#espesor_min_primeros_val').css('background-color', "");
                $('#espesor_min_segundos_val').css('background-color', "");
                $('#espesor_min_terceros_val').css('background-color', "");
                $('#espesor_min_cuartos_val').css('background-color', "");
                $('#espesor_min_quintos_val').css('background-color', "");
                $('#espesor_min_sextos_val').css('background-color', "");

                if (w18 < 50000) {
                    $('#espesor_min_primeros_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 1) {
                        $("#espesor_asfalto_recomendado").val("1.00");
                        var easf = 1.00;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (50001 <= w18 && w18 <= 150000) {
                    $('#espesor_min_segundos_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 2) {
                        $("#espesor_asfalto_recomendado").val("2.00");
                        var easf = 2.00;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (150001 <= w18 && w18 <= 500000) {
                    $('#espesor_min_terceros_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 2.5) {
                        $("#espesor_asfalto_recomendado").val("2.50");
                        var easf = 2.50;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (500001 <= w18 && w18 <= 2000000) {
                    $('#espesor_min_cuartos_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 3) {
                        $("#espesor_asfalto_recomendado").val("3.00");
                        var easf = 3.00;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (2000001 <= w18 && w18 <= 7000000) {
                    $('#espesor_min_quintos_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 3.5) {
                        $("#espesor_asfalto_recomendado").val("3.50");
                        var easf = 3.50;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (w18 >= 7000001) {
                    $('#espesor_min_sextos_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 4) {
                        $("#espesor_asfalto_recomendado").val("4.00");
                        var easf = 4.00;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                }
                if (w18 < 50000) {
                    if (espesor_subbase_recomendado < 4) {
                        $("#espesor_subbase_recomendado").val("4.00");

                    } else {
                        $("#espesor_subbase_recomendado").val((Math.ceil(espesor_subbase_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                } else if (50001 <= w18 && w18 <= 150000) {
                    if (espesor_subbase_recomendado < 4) {
                        $("#espesor_subbase_recomendado").val("4.00");

                    } else {
                        $("#espesor_subbase_recomendado").val((Math.ceil(espesor_subbase_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                } else if (150001 <= w18 && w18 <= 500000) {
                    if (espesor_subbase_recomendado < 4) {
                        $("#espesor_subbase_recomendado").val("4.00");

                    } else {
                        $("#espesor_subbase_recomendado").val((Math.ceil(espesor_subbase_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                } else if (500001 <= w18 && w18 <= 2000000) {
                    if (espesor_subbase_recomendado < 6) {
                        $("#espesor_subbase_recomendado").val("6.00");

                    } else {
                        $("#espesor_subbase_recomendado").val((Math.ceil(espesor_subbase_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                } else if (2000001 <= w18 && w18 <= 7000000) {
                    if (espesor_subbase_recomendado < 6) {
                        $("#espesor_subbase_recomendado").val("6.00");

                    } else {
                        $("#espesor_subbase_recomendado").val((Math.ceil(espesor_subbase_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                } else if (w18 >= 7000001) {
                    if (espesor_subbase_recomendado < 6) {
                        $("#espesor_subbase_recomendado").val("6.00");

                    } else {
                        $("#espesor_subbase_recomendado").val((Math.ceil(espesor_subbase_recomendado / 0.5) * 0.5).toFixed(2));

                    }

                }


                document.getElementById("resultado_EspAsfalte").innerHTML = parseFloat($('#espesor_asfalto_recomendado').val()).toFixed(2) + " in";
                document.getElementById("resultado_EspSubbase").innerHTML = parseFloat($('#espesor_subbase_recomendado').val()).toFixed(2) + " in";




                var SNf = (parseFloat($('#resultado_EspAsfalte').text()) * parseFloat($('#coeficiente_a1_oculto').val())) + (parseFloat($('#resultado_EspSubbase').text()) * ((parseFloat($('#coefa3').val())) * (parseFloat($('#m3').val()))));
                $("#SnRecomendado").val(SNf);
                if (SNf >= sn3) {
                    var rev = "Cumple";
                } else {
                    var rev = "No cumple"
                }

                document.getElementById("procesoEspAsfalto").innerHTML = ("D<SUB>1</SUB>" + " = " + "SN<SUB>2</SUB>" + " / " + "a<SUB>1</SUB>");
                document.getElementById("calcEspAsfalto").innerHTML = ("D<SUB>1</SUB>" + " = " + sn2.toFixed(2) + " / " + parseFloat($('#coeficiente_a1_oculto').val()).toFixed(3) + " = " + espesor_asfalto_recomendado.toFixed(2) + " ≈ " + $('#resultado_EspAsfalte').text());
                $("#espesor_asfalto_clc").val(espesor_asfalto_recomendado.toFixed(2));



                document.getElementById("procesoEspSubbase").innerHTML = ("D<SUB>3</SUB>" + " = " + "SN<SUB>sb</SUB>" + " / " + "a<SUB>3</SUB>" + " x " + "m<SUB>3</SUB>");
                document.getElementById("calcEspSubbase").innerHTML = ("D<SUB>3</SUB>" + " = " + snsb.toFixed(2) + " / " + parseFloat($('#coefa3').val()).toFixed(3) + " x " + parseFloat($('#m3').val()).toFixed(2) + " = " + espesor_subbase_recomendado.toFixed(2) + "in" + " ≈ " + $('#resultado_EspSubbase').text());
                $("#espesor_subbase_clc").val(espesor_subbase_recomendado.toFixed(2));


                document.getElementById("procesoSN").innerHTML = ("SN" + " = " + "D<SUB>1</SUB> x a<SUB>1</SUB>" + " + " + "D<SUB>3</SUB> x a<SUB>3</SUB> x m<SUB>3</SUB>");
                document.getElementById("calcSN").innerHTML = "SN" + " = " + $('#resultado_EspAsfalte').text() + " x " + parseFloat($('#coeficiente_a1_oculto').val()).toFixed(3) + " " + "     +     " + " " + $('#resultado_EspSubbase').text() + " x " + parseFloat($('#coefa3').val()).toFixed(3) + " x " + parseFloat($('#m3').val()).toFixed(2) + " " + " = " + SNf.toFixed(2);
                document.getElementById("procesoRevisarSN").innerHTML = "Revisar" + " " + "SN" + " > " + "SN<SUB>3</SUB>";
                document.getElementById("calcRevisarSN").innerHTML = SNf.toFixed(2) + " > " + sn3.toFixed(2) + " " + rev;
                document.getElementById("explicacion_revision_sn").innerHTML = "En este caso, el número estructural de las capas diseñadas es de "+SNf.toFixed(2) + " el cual es mayor al SN<SUB>3</SUB> = " + sn3.toFixed(2) + ", por lo tanto, el diseño es satisfactorio. Por lo tanto, los espesores de las capas de pavimento flexible son:";

                espAsfSubbase();
                $('#graphics10').show(10);
                document.getElementById('graphics8').style.display = 'none';
                document.getElementById('graphics9').style.display = 'none';
                document.getElementById('graphics11').style.display = 'none';
                $('#detalle').show(10);
                $('#reporte').show(10);
                var altura = $(document).height();
                $("html, body").animate({
                    scrollTop: altura + "px"
                });
                clc_coeficiente_m2();
                clc_coeficiente_m3();
                iterarSN();
                loadGraph();
            } else {
                $('.resultados').show(10);
                $('.espesorSubbase').css('display', 'none');
                $('.espesorBase').css('display', 'none');

                document.getElementById("ecuacion_SN_base").innerHTML = ("SN<SUB>b</SUB>" + " = " + "SN<SUB>2</SUB>" + " - " + "SN<SUB>1</SUB>");
                document.getElementById("calculo_SN_base").innerHTML = ("SN<SUB>b</SUB>" + " = " + sn2.toFixed(2) + " - " + sn1.toFixed(2) + " = " + $('#SN_base_corregido').text());
                document.getElementById("ecuacion_SN_subbase").innerHTML = ("SN<SUB>sb</SUB>" + " = " + "SN<SUB>3</SUB>" + " - " + "SN<SUB>2</SUB>");
                document.getElementById("calculo_SN_subbase").innerHTML = ("SN<SUB>sb</SUB>" + " = " + sn3.toFixed(2) + " - " + sn2.toFixed(2) + " = " + $('#SN_subbase_corregido').text());

                var espesor_asfalto_recomendado = (sn3 / parseFloat($('#coeficiente_a1_oculto').val()));


                var w18 = parseFloat($('#Esals_Flexible').val());
                $('#espesor_min_primeros_val').css('background-color', "");
                $('#espesor_min_segundos_val').css('background-color', "");
                $('#espesor_min_terceros_val').css('background-color', "");
                $('#espesor_min_cuartos_val').css('background-color', "");
                $('#espesor_min_quintos_val').css('background-color', "");
                $('#espesor_min_sextos_val').css('background-color', "");

                if (w18 < 50000) {
                    $('#espesor_min_primeros_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 1) {
                        $("#espesor_asfalto_recomendado").val("1.00");
                        var easf = 1.00;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (50001 <= w18 && w18 <= 150000) {
                    $('#espesor_min_segundos_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 2) {
                        $("#espesor_asfalto_recomendado").val("2.00");
                        var easf = 2.00;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (150001 <= w18 && w18 <= 500000) {
                    $('#espesor_min_terceros_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 2.5) {
                        $("#espesor_asfalto_recomendado").val("2.50");
                        var easf = 2.50;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (500001 <= w18 && w18 <= 2000000) {
                    $('#espesor_min_cuartos_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 3) {
                        $("#espesor_asfalto_recomendado").val("3.00");
                        var easf = 3.00;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (2000001 <= w18 && w18 <= 7000000) {
                    $('#espesor_min_quintos_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 3.5) {
                        $("#espesor_asfalto_recomendado").val("3.50");
                        var easf = 3.50;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                } else if (w18 >= 7000001) {
                    $('#espesor_min_sextos_val').css('background-color', "#c0e4fc");
                    if (espesor_asfalto_recomendado < 4) {
                        $("#espesor_asfalto_recomendado").val("4.00");
                        var easf = 4.00;
                    } else {
                        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                        var easf = espesor_asfalto_recomendado;
                    }

                }



                document.getElementById("resultado_EspAsfalte").innerHTML = parseFloat($('#espesor_asfalto_recomendado').val()).toFixed(2) + " in";





                var SNf = (parseFloat($('#resultado_EspAsfalte').text()) * parseFloat($('#coeficiente_a1_oculto').val()));
                $("#SnRecomendado").val(SNf);
                if (SNf >= sn3) {
                    var rev = "Cumple";
                } else {
                    var rev = "No cumple"
                }
                document.getElementById("procesoEspAsfalto").innerHTML = ("D<SUB>1</SUB>" + " = " + "SN<SUB>2</SUB>" + " / " + "a<SUB>1</SUB>");
                document.getElementById("calcEspAsfalto").innerHTML = ("D<SUB>1</SUB>" + " = " + sn2.toFixed(2) + " / " + parseFloat($('#coeficiente_a1_oculto').val()).toFixed(3) + " = " + espesor_asfalto_recomendado.toFixed(2) + " ≈ " + $('#resultado_EspAsfalte').text());
                $("#espesor_asfalto_clc").val(espesor_asfalto_recomendado.toFixed(2));




                document.getElementById("procesoSN").innerHTML = ("SN" + " = " + "D<SUB>1</SUB> x a<SUB>1</SUB>");
                document.getElementById("calcSN").innerHTML = "SN" + " = " + $('#resultado_EspAsfalte').text() + " x " + parseFloat($('#coeficiente_a1_oculto').val()).toFixed(3) + " = " + SNf.toFixed(2);
                document.getElementById("procesoRevisarSN").innerHTML = "Revisar" + " " + "SN" + " > " + "SN<SUB>3</SUB>";
                document.getElementById("calcRevisarSN").innerHTML = SNf.toFixed(2) + " > " + sn3.toFixed(2) + " " + rev;
                document.getElementById("explicacion_revision_sn").innerHTML = "En este caso, el número estructural de las capas diseñadas es de "+SNf.toFixed(2) + " el cual es mayor al SN<SUB>3</SUB> = " + sn3.toFixed(2) + ", por lo tanto, el diseño es satisfactorio. Por lo tanto, los espesores de las capas de pavimento flexible son:";

                espAsfSubbase();
                $('#graphics10').show(10);
                document.getElementById('graphics8').style.display = 'none';
                document.getElementById('graphics9').style.display = 'none';
                document.getElementById('graphics11').style.display = 'none';
                $('#detalle').show(10);
                $('#reporte').show(10);
                var altura = $(document).height();
                $("html, body").animate({
                    scrollTop: altura + "px"
                });

                iterarSN();
                loadGraph();
            }




        } else if ((addSubbase.is(":not(:checked)")) && (addBase.is(":not(:checked)"))) {
            $('.resultados').show(10);

            var sn3 = clcEspesorAsfalto();

            $("#sn3").val(sn3.toFixed(2));
            document.getElementById('proceso_SN3').innerHTML = sn3.toFixed(2)


            var sn2 = clcEspesorSubbase();
            $("#sn2").val(sn2.toFixed(2));
            document.getElementById('proceso_SN2').innerHTML = sn2.toFixed(2)

            var sn1 = clcEspesorBase();
            $("#sn1").val(sn1.toFixed(2));
            document.getElementById('proceso_SN1').innerHTML = sn1.toFixed(2)
            $("#diseñoEconomico_td").hide();

            var espesor_asfalto_recomendado = (sn3 / parseFloat($('#coeficiente_a1_oculto').val()));


            var w18 = parseFloat($('#Esals_Flexible').val());
            $('#espesor_min_primeros_val').css('background-color', "");
            $('#espesor_min_segundos_val').css('background-color', "");
            $('#espesor_min_terceros_val').css('background-color', "");
            $('#espesor_min_cuartos_val').css('background-color', "");
            $('#espesor_min_quintos_val').css('background-color', "");
            $('#espesor_min_sextos_val').css('background-color', "");

            if (w18 < 50000) {
                $('#espesor_min_primeros_val').css('background-color', "#c0e4fc");
                if (espesor_asfalto_recomendado < 1) {
                    $("#espesor_asfalto_recomendado").val("1.00");
                    var easf = 1.00;
                } else {
                    $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                    var easf = espesor_asfalto_recomendado;
                }

            } else if (50001 <= w18 && w18 <= 150000) {
                $('#espesor_min_segundos_val').css('background-color', "#c0e4fc");
                if (espesor_asfalto_recomendado < 2) {
                    $("#espesor_asfalto_recomendado").val("2.00");
                    var easf = 2.00;
                } else {
                    $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                    var easf = espesor_asfalto_recomendado;
                }

            } else if (150001 <= w18 && w18 <= 500000) {
                $('#espesor_min_terceros_val').css('background-color', "#c0e4fc");
                if (espesor_asfalto_recomendado < 2.5) {
                    $("#espesor_asfalto_recomendado").val("2.50");
                    var easf = 2.50;
                } else {
                    $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                    var easf = espesor_asfalto_recomendado;
                }

            } else if (500001 <= w18 && w18 <= 2000000) {
                $('#espesor_min_cuartos_val').css('background-color', "#c0e4fc");
                if (espesor_asfalto_recomendado < 3) {
                    $("#espesor_asfalto_recomendado").val("3.00");
                    var easf = 3.00;
                } else {
                    $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                    var easf = espesor_asfalto_recomendado;
                }

            } else if (2000001 <= w18 && w18 <= 7000000) {
                $('#espesor_min_quintos_val').css('background-color', "#c0e4fc");
                if (espesor_asfalto_recomendado < 3.5) {
                    $("#espesor_asfalto_recomendado").val("3.50");
                    var easf = 3.50;
                } else {
                    $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                    var easf = espesor_asfalto_recomendado;
                }

            } else if (w18 >= 7000001) {
                $('#espesor_min_sextos_val').css('background-color', "#c0e4fc");
                if (espesor_asfalto_recomendado < 4) {
                    $("#espesor_asfalto_recomendado").val("4.00");
                    var easf = 4.00;
                } else {
                    $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
                    var easf = espesor_asfalto_recomendado;
                }

            }



            document.getElementById("resultado_EspAsfalte").innerHTML = parseFloat($('#espesor_asfalto_recomendado').val()).toFixed(2) + " in";





            var SNf = (parseFloat($('#resultado_EspAsfalte').text()) * parseFloat($('#coeficiente_a1_oculto').val()));
            $("#SnRecomendado").val(SNf);
            if (SNf >= sn3) {
                var rev = "Cumple";
            } else {
                var rev = "No cumple"
            }
            document.getElementById("procesoEspAsfalto").innerHTML = ("D<SUB>1</SUB>" + " = " + "SN<SUB>1</SUB>" + " / " + "a<SUB>1</SUB>");
            document.getElementById("calcEspAsfalto").innerHTML = ("D<SUB>1</SUB>" + " = " + sn3.toFixed(2) + " / " + parseFloat($('#coeficiente_a1_oculto').val()).toFixed(3) + " = " + espesor_asfalto_recomendado.toFixed(2) + " ≈ " + $('#resultado_EspAsfalte').text());
            $("#espesor_asfalto_clc").val(espesor_asfalto_recomendado.toFixed(2));




            document.getElementById("procesoSN").innerHTML = ("SN" + " = " + "D<SUB>1</SUB> x a<SUB>1</SUB>");
            document.getElementById("calcSN").innerHTML = "SN" + " = " + $('#resultado_EspAsfalte').text() + " x " + parseFloat($('#coeficiente_a1_oculto').val()).toFixed(3) + " = " + SNf.toFixed(2);
            document.getElementById("procesoRevisarSN").innerHTML = "Revisar" + " " + "SN" + " > " + "SN<SUB>3</SUB>";
            document.getElementById("calcRevisarSN").innerHTML = SNf.toFixed(2) + " > " + sn3.toFixed(2) + " " + rev;
            document.getElementById("explicacion_revision_sn").innerHTML = "En este caso, el número estructural de las capas diseñadas es de "+SNf.toFixed(2) + " el cual es mayor al SN<SUB>3</SUB> = " + sn3.toFixed(2) + ", por lo tanto, el diseño es satisfactorio. Por lo tanto, los espesores de las capas de pavimento flexible son:";
            document.getElementById('graphics8').style.display = 'none';
            document.getElementById('graphics9').style.display = 'none';
            document.getElementById('graphics10').style.display = 'none';
            espAsfalto();
            $('#graphics11').show(10);


            $('#detalle').show(10);
            $('#reporte').show(10);
            var altura = $(document).height();
            $("html, body").animate({
                scrollTop: altura + "px"
            });

            iterarSN();
            loadGraph();
        }
    

    });
});

function recalcularBase() {
    var espesorAsfalto = parseFloat($('#resultado_EspAsfalte').text());
    var espesorBase = parseFloat($('#resultado_EspBase').text());
    var espesorBasecorr = parseFloat($('#espesor_base_recomendado').val());
    var espesorSubbase = parseFloat($('#resultado_EspSubbase').text());
    var addSubbase = $("#addSubbase");
    var addBase = $("#addBase");

    var a1 = parseFloat($('#coeficiente_a1_oculto').val());

    var m2 = parseFloat($('#m2').val());
    var a2 = parseFloat($('#coefa2').val());
    var m3 = parseFloat($('#m3').val());
    var a3 = parseFloat($('#coefa3').val());
    var SN3 = parseFloat($("#SnRecomendado").val());
    var SN2 = (a1 * espesorAsfalto) + (a2 * m2 * espesorBase);

    var SN2_corr = espesorBasecorr * m2 * a2;
    var SN1 = SN2 - SN2_corr;
    var SN1_sinSubbase = SN3 - SN2_corr;
    $('.recalc_process').show();
    $('#base_recalculada').show();
    $('#subbase_recalculada').hide();
    $('#asfalto_recalculado').hide();
    if ((addBase.is(":checked")) && (addSubbase.is(":checked"))) {

        var espesor_asfalto_recomendado = SN1 / a1;
        var espesor_subbase_recomendado = (((SN3 - (SN1 + SN2_corr))) / (a3 * m3));

        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
        $("#espesor_subbase_recomendado").val((Math.ceil(espesor_subbase_recomendado / 0.5) * 0.5).toFixed(2));
        document.getElementById("proceso_SNbase_recal").innerHTML = ("SN<SUB>b</SUB>" + " = " + "D<SUB>2</SUB> x a<SUB>2</SUB> x m<SUB>2</SUB>");
        document.getElementById("clc_SNbase_recal").innerHTML = "SN<SUB>b</SUB>" + " = " + espesorBasecorr.toFixed(2) + " x " + a2.toFixed(3) + " x " + m2.toFixed(2) + " " + " = " + SN2_corr.toFixed(2);

        document.getElementById("proceso_SN2_recal").innerHTML = ("SN<SUB>2</SUB>" + " = " + "D<SUB>1</SUB> x a<SUB>1</SUB>" + " + " + "D<SUB>2</SUB><SUB>(recomendado)</SUB> x a<SUB>2</SUB> x m<SUB>2</SUB>");
        document.getElementById("clc_SN2_recal").innerHTML = "SN<SUB>2</SUB>" + " = " + $('#resultado_EspAsfalte').text() + " x " + parseFloat($('#coeficiente_a1_oculto').val()).toFixed(3) + " " + "     +     " + " " + $('#resultado_EspBase').text() + " x " + parseFloat($('#coefa2').val()).toFixed(3) + " x " + parseFloat($('#m2').val()).toFixed(2) + " " + " = " + SN2.toFixed(2);

        document.getElementById("proceso_SN1_recal").innerHTML = ("SN<SUB>1</SUB>" + " = " + "SN<SUB>2</SUB>" + " - " + "SN<SUB>b</SUB>");
        document.getElementById("clc_SN1_recal").innerHTML = "SN<SUB>1</SUB>" + " = " + SN2.toFixed(2) + " - " + SN2_corr.toFixed(3) + " = " + SN1.toFixed(2);

        document.getElementById("proceso_D1_recal").innerHTML = ("D<SUB>1</SUB>" + " = " + "SN<SUB>1</SUB>" + " / " + "a<SUB>1</SUB>");
        document.getElementById("clc_D1_recal").innerHTML = "D<SUB>1</SUB>" + " = " + SN1.toFixed(2) + " / " + a1.toFixed(3) + " = " + espesor_asfalto_recomendado.toFixed(2) + " ≈ " + (Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2);
        if (espesor_asfalto_recomendado > 0) {
            $('.espesorAsfalto').show(10);
            $('.espesorAsfalto_inf').css('display', 'none');
            var SNf = ((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5) * parseFloat($('#coeficiente_a1_oculto').val())) + (espesorBasecorr * ((parseFloat($('#coefa2').val())) * (parseFloat($('#m2').val())))) + (parseFloat($("#espesor_subbase_recomendado").val()) * ((parseFloat($('#coefa3').val())) * (parseFloat($('#m3').val()))));
            if (SNf >= parseFloat($('#sn3').val())) {
                var rev = "Cumple";
            } else {
                var rev = "No cumple"
            }

            document.getElementById("procesoSN_recal").innerHTML = ("SN" + " = " + "D<SUB>1</SUB> x a<SUB>1</SUB>" + " + " + "D<SUB>2</SUB> x a<SUB>2</SUB> x m<SUB>2</SUB>" + " + " + "D<SUB>3</SUB> x a<SUB>2</SUB> x m<SUB>3</SUB>");
            document.getElementById("calcSN_recal").innerHTML = "SN" + " = " + (Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2) + " x " + parseFloat($('#coeficiente_a1_oculto').val()).toFixed(3) + " " + "     +     " + " " + espesorBasecorr.toFixed(2) + " x " + parseFloat($('#coefa2').val()).toFixed(3) + " x " + parseFloat($('#m2').val()).toFixed(2) + " " + "      +     " + " " + parseFloat($("#espesor_subbase_recomendado").val()).toFixed(2) + " x " + parseFloat($('#coefa3').val()).toFixed(3) + " x " + parseFloat($('#m3').val()).toFixed(2) + " = " + SNf.toFixed(2);
            document.getElementById("procesoRevisarSN_recal").innerHTML = "Revisar" + " " + "SN" + " > " + "SN<SUB>3</SUB>";
            document.getElementById("calcRevisarSN_recal").innerHTML = SNf.toFixed(2) + " > " + parseFloat($('#sn3').val()).toFixed(2) + " " + rev;
            
        } else {
            $('.espesorAsfalto').css('display', 'none');
            $('.espesorAsfalto_inf').show(10);
            var SNf = (espesorBasecorr * ((parseFloat($('#coefa2').val())) * (parseFloat($('#m2').val())))) + (parseFloat($("#espesor_subbase_recomendado").val()) * ((parseFloat($('#coefa3').val())) * (parseFloat($('#m3').val()))));
            if (SNf >= parseFloat($('#sn3').val())) {
                var rev = "Cumple";
            } else {
                var rev = "No cumple"
            }
            document.getElementById("procesoSN_recal").innerHTML = ("SN" + " = " + "D<SUB>2</SUB> x a<SUB>2</SUB> x m<SUB>2</SUB>" + " + " + "D<SUB>3</SUB> x a<SUB>2</SUB> x m<SUB>3</SUB>");
            document.getElementById("calcSN_recal").innerHTML = "SN" + " = " + espesorBasecorr.toFixed(2) + " x " + parseFloat($('#coefa2').val()).toFixed(3) + " x " + parseFloat($('#m2').val()).toFixed(2) + " " + "      +     " + " " + parseFloat($("#espesor_subbase_recomendado").val()).toFixed(2) + " x " + parseFloat($('#coefa3').val()).toFixed(3) + " x " + parseFloat($('#m3').val()).toFixed(2) + " = " + SNf.toFixed(2);
            document.getElementById("procesoRevisarSN_recal").innerHTML = "Revisar" + " " + "SN" + " > " + "SN<SUB>3</SUB>";
            document.getElementById("calcRevisarSN_recal").innerHTML = SNf.toFixed(2) + " > " + parseFloat($('#sn3').val()).toFixed(2) + " " + rev;
            
        }




    } else if ((addBase.is(":checked")) && (addSubbase.is(":not(:checked)"))) {
        var espesor_asfalto_recomendado = SN1_sinSubbase / a1;


        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));

        document.getElementById("proceso_SNbase_recal").innerHTML = ("SN<SUB>b</SUB>" + " = " + "D<SUB>2</SUB> x a<SUB>2</SUB> x m<SUB>2</SUB>");
        document.getElementById("clc_SNbase_recal").innerHTML = "SN<SUB>b</SUB>" + " = " + espesorBasecorr.toFixed(2) + " x " + a2.toFixed(3) + " x " + m2.toFixed(2) + " " + " = " + SN2_corr.toFixed(2);

        document.getElementById("proceso_SN2_recal").innerHTML = ("SN<SUB>2</SUB>" + " = " + "SN<SUB>3</SUB>");
        document.getElementById("clc_SN2_recal").innerHTML = "SN<SUB>2</SUB>" + " = " + SN3.toFixed(2);

        document.getElementById("proceso_SN1_recal").innerHTML = ("SN<SUB>1</SUB>" + " = " + "SN<SUB>2</SUB>" + " - " + "SN<SUB>b</SUB>");
        document.getElementById("clc_SN1_recal").innerHTML = "SN<SUB>1</SUB>" + " = " + SN3.toFixed(2) + " - " + SN2_corr.toFixed(3) + " = " + SN1_sinSubbase.toFixed(2);

        document.getElementById("proceso_D1_recal").innerHTML = ("D<SUB>1</SUB>" + " = " + "SN<SUB>1</SUB>" + " / " + "a<SUB>1</SUB>");
        document.getElementById("clc_D1_recal").innerHTML = "D<SUB>1</SUB>" + " = " + SN1_sinSubbase.toFixed(2) + " / " + a1.toFixed(3) + " = " + espesor_asfalto_recomendado.toFixed(2) + " ≈ " + (Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2);
        if (espesor_asfalto_recomendado > 0) {
            $('.espesorAsfalto').show(10);
            $('.espesorAsfalto_inf').css('display', 'none');
            var SNf = ((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5) * parseFloat($('#coeficiente_a1_oculto').val())) + (espesorBasecorr * ((parseFloat($('#coefa2').val())) * (parseFloat($('#m2').val()))));
            if (SNf >= parseFloat($('#sn3').val())) {
                var rev = "Cumple";
            } else {
                var rev = "No cumple"
            }

            document.getElementById("procesoSN_recal").innerHTML = ("SN" + " = " + "D<SUB>1</SUB> x a<SUB>1</SUB>" + " + " + "D<SUB>2</SUB> x a<SUB>2</SUB> x m<SUB>2</SUB>");
            document.getElementById("calcSN_recal").innerHTML = "SN" + " = " + (Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2) + " x " + parseFloat($('#coeficiente_a1_oculto').val()).toFixed(3) + " " + "     +     " + " " + espesorBasecorr.toFixed(2) + " x " + parseFloat($('#coefa2').val()).toFixed(3) + " x " + parseFloat($('#m2').val()).toFixed(2) + " " + "      +     " + " " + " = " + SNf.toFixed(2);
            document.getElementById("procesoRevisarSN_recal").innerHTML = "Revisar" + " " + "SN" + " > " + "SN<SUB>3</SUB>";
            document.getElementById("calcRevisarSN_recal").innerHTML = SNf.toFixed(2) + " > " + parseFloat($('#sn3').val()).toFixed(2) + " " + rev;
            
        } else {
            $('.espesorAsfalto').css('display', 'none');
            $('.espesorAsfalto_inf').show(10);
            var SNf = (espesorBasecorr * ((parseFloat($('#coefa2').val())) * (parseFloat($('#m2').val()))));
            if (SNf >= parseFloat($('#sn3').val())) {
                var rev = "Cumple";
            } else {
                var rev = "No cumple"
            }
            document.getElementById("procesoSN_recal").innerHTML = ("SN" + " = " + "D<SUB>2</SUB> x a<SUB>2</SUB> x m<SUB>2</SUB>");
            document.getElementById("calcSN_recal").innerHTML = "SN" + " = " + espesorBasecorr.toFixed(2) + " x " + parseFloat($('#coefa2').val()).toFixed(3) + " x " + parseFloat($('#m2').val()).toFixed(2) + " " + " = " + SNf.toFixed(2);
            document.getElementById("procesoRevisarSN_recal").innerHTML = "Revisar" + " " + "SN" + " > " + "SN<SUB>3</SUB>";
            document.getElementById("calcRevisarSN_recal").innerHTML = SNf.toFixed(2) + " > " + parseFloat($('#sn3').val()).toFixed(2) + " " + rev;
            
        }

    }


}

function recalcularSubbase() {
    var espesorAsfalto = parseFloat($('#resultado_EspAsfalte').text());
    var espesorBase = parseFloat($('#resultado_EspBase').text());

    var espesorSubbasecorr = parseFloat($('#espesor_subbase_recomendado').val());
    var addSubbase = $("#addSubbase");
    var addBase = $("#addBase");

    var a1 = parseFloat($('#coeficiente_a1_oculto').val());

    var m2 = parseFloat($('#m2').val());
    var a2 = parseFloat($('#coefa2').val());
    var m3 = parseFloat($('#m3').val());
    var a3 = parseFloat($('#coefa3').val());
    var SN3 = parseFloat($("#SnRecomendado").val());
    var SN1 = parseFloat($("#sn1").val());
    var SN2 = (a1 * espesorAsfalto) + (a2 * m2 * espesorBase);

    var SN_subbase = espesorSubbasecorr * m3 * a3;

    var SN_base = (SN3 - (SN_subbase + SN1));
    var SN_1 = (SN3 - (SN_subbase));
    $('.recalc_process').show();
    $('#base_recalculada').hide();
    $('#subbase_recalculada').show();
    $('#asfalto_recalculado').hide();
    if ((addBase.is(":checked")) && (addSubbase.is(":checked"))) {

        var espesor_asfalto_recomendado = SN1 / a1;
        var espesor_base_recomendado = ((SN_base) / (a2 * m2));

        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));
        $("#espesor_base_recomendado").val((Math.ceil(espesor_base_recomendado / 0.5) * 0.5).toFixed(2));
        document.getElementById("proceso_SNsubbase_recal").innerHTML = ("SN<SUB>sb</SUB>" + " = " + "D<SUB>3</SUB> x a<SUB>3</SUB> x m<SUB>3</SUB>");
        document.getElementById("clc_SNsubbase_recal").innerHTML = "SN<SUB>sb</SUB>" + " = " + espesorSubbasecorr.toFixed(2) + " x " + a3.toFixed(3) + " x " + m3.toFixed(2) + " " + " = " + SN_subbase.toFixed(2);

        document.getElementById("proceso_SN_base_recal").innerHTML = ("SN<SUB>b</SUB>" + " = " + "SN<SUB>3</SUB>" + " - " + "(" + "SN<SUB>sb</SUB> + SN<SUB>1</SUB>" + ")");
        document.getElementById("clc_SN_base_recal").innerHTML = "SN<SUB>b</SUB>" + " = " + SN3.toFixed(2) + " - " + "(" + SN_subbase.toFixed(2) + "     +     " + SN1.toFixed(2) + " ) " + " " + " = " + SN_base.toFixed(2);

        document.getElementById("proceso_D2_recal").innerHTML = ("D<SUB>2</SUB>" + " = " + "SN<SUB>b</SUB>" + " / " + "a<SUB>2</SUB> x m<SUB>2</SUB>");
        document.getElementById("clc_D2_recal").innerHTML = "D<SUB>2</SUB>" + " = " + SN_base.toFixed(2) + " / " + a2.toFixed(3) + "x" + m2.toFixed(2) + " = " + espesor_base_recomendado.toFixed(2) + " ≈ " + (Math.ceil(espesor_base_recomendado / 0.5) * 0.5).toFixed(2);
        if (espesor_base_recomendado > 0) {
            $('.espesorBase').show(10);
            $('.espesorBase_inf').css('display', 'none');
            var SNf = ((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5) * parseFloat($('#coeficiente_a1_oculto').val())) + (espesor_base_recomendado * ((parseFloat($('#coefa2').val())) * (parseFloat($('#m2').val())))) + (parseFloat($("#espesor_subbase_recomendado").val()) * ((parseFloat($('#coefa3').val())) * (parseFloat($('#m3').val()))));
            if (SNf >= parseFloat($('#sn3').val())) {
                var rev = "Cumple";
            } else {
                var rev = "No cumple"
            }

            document.getElementById("procesoSN_recal_sb").innerHTML = ("SN" + " = " + "D<SUB>1</SUB> x a<SUB>1</SUB>" + " + " + "D<SUB>2</SUB> x a<SUB>2</SUB> x m<SUB>2</SUB>" + " + " + "D<SUB>3</SUB> x a<SUB>2</SUB> x m<SUB>3</SUB>");
            document.getElementById("calcSN_recal_sb").innerHTML = "SN" + " = " + (Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2) + " x " + parseFloat($('#coeficiente_a1_oculto').val()).toFixed(3) + " " + "     +     " + " " + (Math.ceil(espesor_base_recomendado / 0.5) * 0.5).toFixed(2) + " x " + parseFloat($('#coefa2').val()).toFixed(3) + " x " + parseFloat($('#m2').val()).toFixed(2) + " " + "      +     " + " " + parseFloat($("#espesor_subbase_recomendado").val()).toFixed(2) + " x " + parseFloat($('#coefa3').val()).toFixed(3) + " x " + parseFloat($('#m3').val()).toFixed(2) + " = " + SNf.toFixed(2);
            document.getElementById("procesoRevisarSN_recal_sb").innerHTML = "Revisar" + " " + "SN" + " > " + "SN<SUB>3</SUB>";
            document.getElementById("calcRevisarSN_recal_sb").innerHTML = SNf.toFixed(2) + " > " + parseFloat($('#sn3').val()).toFixed(2) + " " + rev;
            
        } else {
            $('.espesorBase').css('display', 'none');
            $('.espesorBase_inf').show(10);
            var SNf = (espesor_asfalto_recomendado * ((parseFloat($('#coeficiente_a1_oculto').val())))) + (parseFloat($("#espesor_subbase_recomendado").val()) * ((parseFloat($('#coefa3').val())) * (parseFloat($('#m3').val()))));
            if (SNf >= parseFloat($('#sn3').val())) {
                var rev = "Cumple";
            } else {
                var rev = "No cumple"
            }
            document.getElementById("procesoSN_recal_sb").innerHTML = ("SN" + " = " + "D<SUB>1</SUB> x a<SUB>1</SUB>" + " + " + "D<SUB>3</SUB> x a<SUB>2</SUB> x m<SUB>3</SUB>");
            document.getElementById("calcSN_recal_sb").innerHTML = "SN" + " = " + (Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2) + " x " + parseFloat($('#coeficiente_a1_oculto').val()).toFixed(3) + " " + "      +     " + " " + parseFloat($("#espesor_subbase_recomendado").val()).toFixed(2) + " x " + parseFloat($('#coefa3').val()).toFixed(3) + " x " + parseFloat($('#m3').val()).toFixed(2) + " = " + SNf.toFixed(2);
            document.getElementById("procesoRevisarSN_recal_sb").innerHTML = "Revisar" + " " + "SN" + " > " + "SN<SUB>3</SUB>";
            document.getElementById("calcRevisarSN_recal_sb").innerHTML = SNf.toFixed(2) + " > " + parseFloat($('#sn3').val()).toFixed(2) + " " + rev;
            
        }




    } else if ((addSubbase.is(":checked")) && (addBase.is(":not(:checked)"))) {
        var espesor_asfalto_recomendado = SN_1 / a1;


        $("#espesor_asfalto_recomendado").val((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2));

        document.getElementById("proceso_SNsubbase_recal").innerHTML = ("SN<SUB>sb</SUB>" + " = " + "D<SUB>3</SUB> x a<SUB>3</SUB> x m<SUB>3</SUB>");
        document.getElementById("clc_SNsubbase_recal").innerHTML = "SN<SUB>sb</SUB>" + " = " + espesorSubbasecorr.toFixed(2) + " x " + a3.toFixed(3) + " x " + m3.toFixed(2) + " " + " = " + SN_subbase.toFixed(2);

        document.getElementById("proceso_SN_base_recal").innerHTML = ("SN<SUB>1</SUB>" + " = " + "SN<SUB>3</SUB>" + " - " + "SN<SUB>sb</SUB>");
        document.getElementById("clc_SN_base_recal").innerHTML = "SN<SUB>1</SUB>" + " = " + SN3.toFixed(2) + " - " + SN_subbase.toFixed(2) + " " + " = " + SN_1.toFixed(2);

        document.getElementById("proceso_D2_recal").innerHTML = ("D<SUB>1</SUB>" + " = " + "SN<SUB>1</SUB>" + " / " + "a<SUB>1</SUB>");
        document.getElementById("clc_D2_recal").innerHTML = "D<SUB>1</SUB>" + " = " + SN_1.toFixed(2) + " / " + a1.toFixed(3) + " = " + espesor_asfalto_recomendado.toFixed(2) + " ≈ " + (Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2);
        if (espesor_asfalto_recomendado > 0) {
            $('.espesorAsfalto').show(10);
            $('.espesorBase_recal').show(10);
            $('.espesorBase_inf').css('display', 'none');
            $('.espesorAsfalto_inf').css('display', 'none');
            var SNf = ((Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5) * parseFloat($('#coeficiente_a1_oculto').val())) + (espesorSubbasecorr * ((parseFloat($('#coefa3').val())) * (parseFloat($('#m3').val()))));
            if (SNf >= parseFloat($('#sn3').val())) {
                var rev = "Cumple";
            } else {
                var rev = "No cumple"
            }

            document.getElementById("procesoSN_recal_sb").innerHTML = ("SN" + " = " + "D<SUB>1</SUB> x a<SUB>1</SUB>" + " + " + "D<SUB>3</SUB> x a<SUB>3</SUB> x m<SUB>3</SUB>");
            document.getElementById("calcSN_recal_sb").innerHTML = "SN" + " = " + (Math.ceil(espesor_asfalto_recomendado / 0.5) * 0.5).toFixed(2) + " x " + parseFloat($('#coeficiente_a1_oculto').val()).toFixed(3) + " " + "     +     " + " " + espesorSubbasecorr.toFixed(2) + " x " + parseFloat($('#coefa3').val()).toFixed(3) + " x " + parseFloat($('#m3').val()).toFixed(2) + " " + "      +     " + " " + " = " + SNf.toFixed(2);
            document.getElementById("procesoRevisarSN_recal_sb").innerHTML = "Revisar" + " " + "SN" + " > " + "SN<SUB>3</SUB>";
            document.getElementById("calcRevisarSN_recal_sb").innerHTML = SNf.toFixed(2) + " > " + parseFloat($('#sn3').val()).toFixed(2) + " " + rev;
        } else {
            $('.espesorAsfalto').css('display', 'none');
            $('.espesorBase_recal').css('display', 'none');
            $('.espesorBase_inf').css('display', 'none');
            $('.espesorAsfalto_inf').show(10);
            var SNf = (espesorSubbasecorr * ((parseFloat($('#coefa3').val())) * (parseFloat($('#m3').val()))));
            if (SNf >= parseFloat($('#sn3').val())) {
                var rev = "Cumple";
            } else {
                var rev = "No cumple"
            }
            document.getElementById("procesoSN_recal_sb").innerHTML = ("SN" + " = " + "D<SUB>3</SUB> x a<SUB>3</SUB> x m<SUB>3</SUB>");
            document.getElementById("calcSN_recal_sb").innerHTML = "SN" + " = " + espesorSubbasecorr.toFixed(2) + " x " + parseFloat($('#coefa3').val()).toFixed(3) + " x " + parseFloat($('#m3').val()).toFixed(2) + " " + " = " + SNf.toFixed(2);
            document.getElementById("procesoRevisarSN_recal_sb").innerHTML = "Revisar" + " " + "SN" + " > " + "SN<SUB>3</SUB>";
            document.getElementById("calcRevisarSN_recal_sb").innerHTML = SNf.toFixed(2) + " > " + parseFloat($('#sn3').val()).toFixed(2) + " " + rev;
        }

    }


}


function recalcularAslfalto() {

    var addSubbase = $("#addSubbase")
    var addBase = $("#addBase")
    var espesorAsfaltocorr = parseFloat($('#espesor_asfalto_recomendado').val());
    var addSubbase = $("#addSubbase");
    var addBase = $("#addBase");

    var a1 = parseFloat($('#coeficiente_a1_oculto').val());

    var m2 = parseFloat($('#m2').val());
    var a2 = parseFloat($('#coefa2').val());
    var m3 = parseFloat($('#m3').val());
    var a3 = parseFloat($('#coefa3').val());
    var SN3 = parseFloat($("#SnRecomendado").val());
    var SN2 = parseFloat($("#sn2").val());
    var SN1 = (espesorAsfaltocorr * a1);
    var SN1_sinBase = (espesorAsfaltocorr * a1);
    var SN_base = (SN2 - SN1);
    var SN_base_sinSubbase = (SN3 - SN1);

    if (SN_base > 0) {
        var SN_subbase = SN3 - (SN1 + SN_base);
    } else {
        var SN_subbase = SN3 - SN1;
    }

    var SN_subbase_sinBase = SN3 - SN1_sinBase;

    $('.recalc_process').show();
    $('#base_recalculada').hide();
    $('#subbase_recalculada').hide();
    $('#asfalto_recalculado').show();

    if ((addBase.is(":checked")) && (addSubbase.is(":checked"))) {
        var D2 = (SN_base) / (a2 * m2);
        var D3 = (SN_subbase) / (a3 * m3);
        $("#espesor_subbase_recomendado").val((Math.ceil(D3 / 0.5) * 0.5).toFixed(2));
        $("#espesor_base_recomendado").val((Math.ceil(D2 / 0.5) * 0.5).toFixed(2));
        if ((D2 > 0) && (D3 > 0)) {
            $('.espesorBase').show();
            $('.espesorSubbase').show();
            $('.espesor_sinBase').hide();
            $('.espesor_sinSubbase').hide();
            $('.espesor_sinBaseSubbase').css('display', 'none');
            document.getElementById("proceso_SN1_asf_recal").innerHTML = ("SN<SUB>1</SUB>" + " = " + "D<SUB>1</SUB> x a<SUB>1</SUB>");
            document.getElementById("clc_SN1_asf_recal").innerHTML = "SN<SUB>1</SUB>" + " = " + espesorAsfaltocorr.toFixed(2) + " x " + a1.toFixed(3) + " " + " = " + SN1.toFixed(2);
            document.getElementById("proceso_SNbase_asf_recal").innerHTML = ("SN<SUB>b</SUB>" + " = " + "SN<SUB>2</SUB> - SN<SUB>1</SUB>");
            document.getElementById("clc_SNbase_asf_recal").innerHTML = "SN<SUB>b</SUB>" + " = " + SN2.toFixed(2) + " - " + SN1.toFixed(2) + " " + " = " + SN_base.toFixed(2);
            if (SN_base > 0) {
                document.getElementById("proceso_SNsubbase_asf_recal").innerHTML = ("SN<SUB>sb</SUB>" + " = " + "SN<SUB>3</SUB> - ( SN<SUB>1</SUB> + SN<SUB>b</SUB> )");
                document.getElementById("clc_SNsubbase_asf_recal").innerHTML = "SN<SUB>sb</SUB>" + " = " + SN3.toFixed(2) + " - " + "(" + SN1.toFixed(2) + " + " + SN_base.toFixed(2) + ")" + " " + " = " + SN_subbase.toFixed(2);

            } else {
                document.getElementById("proceso_SNsubbase_asf_recal").innerHTML = ("SN<SUB>sb</SUB>" + " = " + "SN<SUB>3</SUB> -  SN<SUB>1</SUB>");
                document.getElementById("clc_SNsubbase_asf_recal").innerHTML = "SN<SUB>sb</SUB>" + " = " + SN3.toFixed(2) + " - " + SN1.toFixed(2) + " " + " = " + SN_subbase.toFixed(2);

            }

            document.getElementById("proceso_D2_asf_recal").innerHTML = ("D<SUB>2</SUB>" + " = " + "SN<SUB>b</SUB>" + " / " + "a<SUB>2</SUB> x m<SUB>2</SUB>");
            document.getElementById("clc_D2_asf_recal").innerHTML = "D<SUB>2</SUB>" + " = " + SN_base.toFixed(2) + " / " + a2.toFixed(3) + "x" + m2.toFixed(2) + " = " + D2.toFixed(2) + " ≈ " + (Math.ceil(D2 / 0.5) * 0.5).toFixed(2);
            document.getElementById("proceso_D3_recal").innerHTML = ("D<SUB>3</SUB>" + " = " + "SN<SUB>sb</SUB>" + " / " + "a<SUB>3</SUB> x m<SUB>3</SUB>");
            document.getElementById("clc_D3_recal").innerHTML = "D<SUB>3</SUB>" + " = " + SN_subbase.toFixed(2) + " / " + a3.toFixed(3) + "x" + m3.toFixed(2) + " = " + D3.toFixed(2) + " ≈ " + (Math.ceil(D3 / 0.5) * 0.5).toFixed(2);

            var SNf = ((Math.ceil(espesorAsfaltocorr / 0.5) * 0.5) * parseFloat($('#coeficiente_a1_oculto').val())) + (D2 * ((parseFloat($('#coefa2').val())) * (parseFloat($('#m2').val())))) + (D3 * ((parseFloat($('#coefa3').val())) * (parseFloat($('#m3').val()))));
            if (SNf >= parseFloat($('#sn3').val())) {
                var rev = "Cumple";
            } else {
                var rev = "No cumple"
            }

            document.getElementById("procesoSN_recal_asf").innerHTML = ("SN" + " = " + "D<SUB>1</SUB> x a<SUB>1</SUB>" + " + " + "D<SUB>2</SUB> x a<SUB>2</SUB> x m<SUB>2</SUB>" + " + " + "D<SUB>3</SUB> x a<SUB>2</SUB> x m<SUB>3</SUB>");
            document.getElementById("calcSN_recal_asf").innerHTML = "SN" + " = " + (Math.ceil(espesorAsfaltocorr / 0.5) * 0.5).toFixed(2) + " x " + parseFloat($('#coeficiente_a1_oculto').val()).toFixed(3) + " " + "     +     " + " " + (Math.ceil(D2 / 0.5) * 0.5).toFixed(2) + " x " + parseFloat($('#coefa2').val()).toFixed(3) + " x " + parseFloat($('#m2').val()).toFixed(2) + " " + "      +     " + " " + D3.toFixed(2) + " x " + parseFloat($('#coefa3').val()).toFixed(3) + " x " + parseFloat($('#m3').val()).toFixed(2) + " = " + SNf.toFixed(2);
            document.getElementById("procesoRevisarSN_recal_asf").innerHTML = "Revisar" + " " + "SN" + " > " + "SN<SUB>3</SUB>";
            document.getElementById("calcRevisarSN_recal_asf").innerHTML = SNf.toFixed(2) + " > " + parseFloat($('#sn3').val()).toFixed(2) + " " + rev;

        } else if ((D2 <= 0) && (D3 > 0)) {
            document.getElementById("proceso_SN1_asf_recal").innerHTML = ("SN<SUB>1</SUB>" + " = " + "D<SUB>1</SUB> x a<SUB>1</SUB>");
            document.getElementById("clc_SN1_asf_recal").innerHTML = "SN<SUB>1</SUB>" + " = " + espesorAsfaltocorr.toFixed(2) + " x " + a1.toFixed(3) + " " + " = " + SN1.toFixed(2);
            document.getElementById("proceso_SNbase_asf_recal").innerHTML = ""
            document.getElementById("clc_SNbase_asf_recal").innerHTML = ""
            $('.espesorBase').css('display', 'none');
            $('.espesor_sinBase').show();
            $('.espesor_sinSubbase').hide();
            $('.espesorSubbase').show();
            $('.espesor_sinBaseSubbase').css('display', 'none');
            if (SN_base > 0) {
                document.getElementById("proceso_SNsubbase_asf_recal").innerHTML = ("SN<SUB>sb</SUB>" + " = " + "SN<SUB>3</SUB> - ( SN<SUB>1</SUB> + SN<SUB>b</SUB> )");
                document.getElementById("clc_SNsubbase_asf_recal").innerHTML = "SN<SUB>sb</SUB>" + " = " + SN3.toFixed(2) + " - " + "(" + SN1.toFixed(2) + " + " + SN_base.toFixed(2) + ")" + " " + " = " + SN_subbase.toFixed(2);

            } else {
                document.getElementById("proceso_SNsubbase_asf_recal").innerHTML = ("SN<SUB>sb</SUB>" + " = " + "SN<SUB>3</SUB> -  SN<SUB>1</SUB>");
                document.getElementById("clc_SNsubbase_asf_recal").innerHTML = "SN<SUB>sb</SUB>" + " = " + SN3.toFixed(2) + " - " + SN1.toFixed(2) + " " + " = " + SN_subbase.toFixed(2);

            }

            document.getElementById("proceso_D2_asf_recal").innerHTML = ""
            document.getElementById("clc_D2_asf_recal").innerHTML = ""

            document.getElementById("proceso_D3_recal").innerHTML = ("D<SUB>3</SUB>" + " = " + "SN<SUB>sb</SUB>" + " / " + "a<SUB>3</SUB> x m<SUB>3</SUB>");
            document.getElementById("clc_D3_recal").innerHTML = "D<SUB>3</SUB>" + " = " + SN_subbase.toFixed(2) + " / " + a3.toFixed(3) + "x" + m3.toFixed(2) + " = " + D3.toFixed(2) + " ≈ " + (Math.ceil(D3 / 0.5) * 0.5).toFixed(2);

            var SNf = ((Math.ceil(espesorAsfaltocorr / 0.5) * 0.5) * parseFloat($('#coeficiente_a1_oculto').val())) + (D3 * ((parseFloat($('#coefa3').val())) * (parseFloat($('#m3').val()))));
            if (SNf >= parseFloat($('#sn3').val())) {
                var rev = "Cumple";
            } else {
                var rev = "No cumple"
            }

            document.getElementById("procesoSN_recal_asf").innerHTML = ("SN" + " = " + "D<SUB>1</SUB> x a<SUB>1</SUB>" + " + " + "D<SUB>3</SUB> x a<SUB>2</SUB> x m<SUB>3</SUB>");
            document.getElementById("calcSN_recal_asf").innerHTML = "SN" + " = " + (Math.ceil(espesorAsfaltocorr / 0.5) * 0.5).toFixed(2) + " x " + parseFloat($('#coeficiente_a1_oculto').val()).toFixed(3) + " " + "     +     " + " " + D3.toFixed(2) + " x " + parseFloat($('#coefa3').val()).toFixed(3) + " x " + parseFloat($('#m3').val()).toFixed(2) + " = " + SNf.toFixed(2);
            document.getElementById("procesoRevisarSN_recal_asf").innerHTML = "Revisar" + " " + "SN" + " > " + "SN<SUB>3</SUB>";
            document.getElementById("calcRevisarSN_recal_asf").innerHTML = SNf.toFixed(2) + " > " + parseFloat($('#sn3').val()).toFixed(2) + " " + rev;
        } else if ((D2 <= 0) && (D3 <= 0)) {
            document.getElementById("proceso_SN1_asf_recal").innerHTML = ("SN<SUB>1</SUB>" + " = " + "D<SUB>1</SUB> x a<SUB>1</SUB>");
            document.getElementById("clc_SN1_asf_recal").innerHTML = "SN<SUB>1</SUB>" + " = " + espesorAsfaltocorr.toFixed(2) + " x " + a1.toFixed(3) + " " + " = " + SN1.toFixed(2);
            document.getElementById("proceso_SNbase_asf_recal").innerHTML = ""
            document.getElementById("clc_SNbase_asf_recal").innerHTML = ""
            document.getElementById("proceso_SNsubbase_asf_recal").innerHTML = ""
            document.getElementById("clc_SNsubbase_asf_recal").innerHTML = ""
            $('.espesorBase').css('display', 'none');
            $('.espesorSubbase').css('display', 'none');
            $('.espesor_sinBase').css('display', 'none');
            $('.espesor_sinSubbase').hide();
            $('.espesor_sinBaseSubbase').show();

            document.getElementById("proceso_D2_asf_recal").innerHTML = ""
            document.getElementById("clc_D2_asf_recal").innerHTML = ""
            document.getElementById("proceso_D3_recal").innerHTML = ""
            document.getElementById("clc_D3_recal").innerHTML = ""
            var SNf = ((Math.ceil(espesorAsfaltocorr / 0.5) * 0.5) * parseFloat($('#coeficiente_a1_oculto').val()));
            if (SNf >= parseFloat($('#sn3').val())) {
                var rev = "Cumple";
            } else {
                var rev = "No cumple"
            }

            document.getElementById("procesoSN_recal_asf").innerHTML = ("SN" + " = " + "D<SUB>1</SUB> x a<SUB>1</SUB>");
            document.getElementById("calcSN_recal_asf").innerHTML = "SN" + " = " + (Math.ceil(espesorAsfaltocorr / 0.5) * 0.5).toFixed(2) + " x " + parseFloat($('#coeficiente_a1_oculto').val()).toFixed(3) + " " + " = " + SNf.toFixed(2);
            document.getElementById("procesoRevisarSN_recal_asf").innerHTML = "Revisar" + " " + "SN" + " > " + "SN<SUB>3</SUB>";
            document.getElementById("calcRevisarSN_recal_asf").innerHTML = SNf.toFixed(2) + " > " + parseFloat($('#sn3').val()).toFixed(2) + " " + rev;
        }

    } else if ((addBase.is(":checked")) && (addSubbase.is(":not(:checked)"))) {
        var D2 = (SN_base_sinSubbase) / (a2 * m2);
        $("#espesor_base_recomendado").val((Math.ceil(D2 / 0.5) * 0.5).toFixed(2));
        if (D2 > 0) {
            $('.espesorBase').show();
            $('.espesorSubbase').css('display', 'none');
            $('.espesor_sinBase').css('display', 'none');
            $('.espesor_sinSubbase').hide();
            $('.espesor_sinBaseSubbase').css('display', 'none');
            document.getElementById("proceso_SN1_asf_recal").innerHTML = ("SN<SUB>1</SUB>" + " = " + "D<SUB>1</SUB> x a<SUB>1</SUB>");
            document.getElementById("clc_SN1_asf_recal").innerHTML = "SN<SUB>1</SUB>" + " = " + espesorAsfaltocorr.toFixed(2) + " x " + a1.toFixed(3) + " " + " = " + SN1.toFixed(2);
            document.getElementById("proceso_SNbase_asf_recal").innerHTML = ("SN<SUB>b</SUB>" + " = " + "SN<SUB>3</SUB> - SN<SUB>1</SUB>");
            document.getElementById("clc_SNbase_asf_recal").innerHTML = "SN<SUB>b</SUB>" + " = " + SN3.toFixed(2) + " - " + SN1.toFixed(2) + " " + " = " + SN_base_sinSubbase.toFixed(2);
            document.getElementById("proceso_SNsubbase_asf_recal").innerHTML = ""
            document.getElementById("clc_SNsubbase_asf_recal").innerHTML = ""

            document.getElementById("proceso_D2_asf_recal").innerHTML = ("D<SUB>2</SUB>" + " = " + "SN<SUB>b</SUB>" + " / " + "a<SUB>2</SUB> x m<SUB>2</SUB>");
            document.getElementById("clc_D2_asf_recal").innerHTML = "D<SUB>2</SUB>" + " = " + SN_base_sinSubbase.toFixed(2) + " / " + a2.toFixed(3) + "x" + m2.toFixed(2) + " = " + D2.toFixed(2) + " ≈ " + (Math.ceil(D2 / 0.5) * 0.5).toFixed(2);

            document.getElementById("proceso_D3_recal").innerHTML = ""
            document.getElementById("clc_D3_recal").innerHTML = ""

            var SNf = ((Math.ceil(espesorAsfaltocorr / 0.5) * 0.5) * parseFloat($('#coeficiente_a1_oculto').val())) + (D2 * ((parseFloat($('#coefa2').val())) * (parseFloat($('#m2').val()))));
            if (SNf >= parseFloat($('#sn3').val())) {
                var rev = "Cumple";
            } else {
                var rev = "No cumple"
            }

            document.getElementById("procesoSN_recal_asf").innerHTML = ("SN" + " = " + "D<SUB>1</SUB> x a<SUB>1</SUB>" + " + " + "D<SUB>2</SUB> x a<SUB>2</SUB> x m<SUB>2</SUB>");
            document.getElementById("calcSN_recal_asf").innerHTML = "SN" + " = " + (Math.ceil(espesorAsfaltocorr / 0.5) * 0.5).toFixed(2) + " x " + parseFloat($('#coeficiente_a1_oculto').val()).toFixed(3) + " " + "     +     " + " " + (Math.ceil(D2 / 0.5) * 0.5).toFixed(2) + " x " + parseFloat($('#coefa2').val()).toFixed(3) + " x " + parseFloat($('#m2').val()).toFixed(2) + " " + " = " + SNf.toFixed(2);
            document.getElementById("procesoRevisarSN_recal_asf").innerHTML = "Revisar" + " " + "SN" + " > " + "SN<SUB>3</SUB>";
            document.getElementById("calcRevisarSN_recal_asf").innerHTML = SNf.toFixed(2) + " > " + parseFloat($('#sn3').val()).toFixed(2) + " " + rev;
        } else {
            document.getElementById("proceso_SN1_asf_recal").innerHTML = ("SN<SUB>1</SUB>" + " = " + "D<SUB>1</SUB> x a<SUB>1</SUB>");
            document.getElementById("clc_SN1_asf_recal").innerHTML = "SN<SUB>1</SUB>" + " = " + espesorAsfaltocorr.toFixed(2) + " x " + a1.toFixed(3) + " " + " = " + SN1.toFixed(2);
            document.getElementById("proceso_SNbase_asf_recal").innerHTML = ""
            document.getElementById("clc_SNbase_asf_recal").innerHTML = ""
            document.getElementById("proceso_SNsubbase_asf_recal").innerHTML = ""
            document.getElementById("clc_SNsubbase_asf_recal").innerHTML = ""
            $('.espesorBase').css('display', 'none');
            $('.espesorSubbase').css('display', 'none');
            $('.espesor_sinBase').show();
            $('.espesor_sinSubbase').hide();
            $('.espesor_sinBaseSubbase').css('display', 'none');

            document.getElementById("proceso_D2_asf_recal").innerHTML = ""
            document.getElementById("clc_D2_asf_recal").innerHTML = ""
            document.getElementById("proceso_D3_recal").innerHTML = ""
            document.getElementById("clc_D3_recal").innerHTML = ""
            var SNf = ((Math.ceil(espesorAsfaltocorr / 0.5) * 0.5) * parseFloat($('#coeficiente_a1_oculto').val()));
            if (SNf >= parseFloat($('#sn3').val())) {
                var rev = "Cumple";
            } else {
                var rev = "No cumple"
            }

            document.getElementById("procesoSN_recal_asf").innerHTML = ("SN" + " = " + "D<SUB>1</SUB> x a<SUB>1</SUB>");
            document.getElementById("calcSN_recal_asf").innerHTML = "SN" + " = " + (Math.ceil(espesorAsfaltocorr / 0.5) * 0.5).toFixed(2) + " x " + parseFloat($('#coeficiente_a1_oculto').val()).toFixed(3) + " " + " = " + SNf.toFixed(2);
            document.getElementById("procesoRevisarSN_recal_asf").innerHTML = "Revisar" + " " + "SN" + " > " + "SN<SUB>3</SUB>";
            document.getElementById("calcRevisarSN_recal_asf").innerHTML = SNf.toFixed(2) + " > " + parseFloat($('#sn3').val()).toFixed(2) + " " + rev;

        }

    } else if ((addSubbase.is(":checked")) && (addBase.is(":not(:checked)"))) {
        var D3 = (SN_subbase_sinBase) / (a3 * m3);
        $("#espesor_subbase_recomendado").val((Math.ceil(D3 / 0.5) * 0.5).toFixed(2));
        if (D3 > 0) {
            $('.espesorBase').hide();
            $('.espesorSubbase').show();
            $('.espesor_sinBase').hide();
            $('.espesor_sinSubbase').hide();
            $('.espesor_sinBaseSubbase').css('display', 'none');

            document.getElementById("proceso_SN1_asf_recal").innerHTML = ("SN<SUB>1</SUB>" + " = " + "D<SUB>1</SUB> x a<SUB>1</SUB>");
            document.getElementById("clc_SN1_asf_recal").innerHTML = "SN<SUB>1</SUB>" + " = " + espesorAsfaltocorr.toFixed(2) + " x " + a1.toFixed(3) + " " + " = " + SN1_sinBase.toFixed(2);


            document.getElementById("proceso_SNsubbase_asf_recal").innerHTML = ("SN<SUB>sb</SUB>" + " = " + "SN<SUB>3</SUB> -  SN<SUB>1</SUB>");
            document.getElementById("clc_SNsubbase_asf_recal").innerHTML = "SN<SUB>sb</SUB>" + " = " + SN3.toFixed(2) + " - " + SN1_sinBase.toFixed(2) + " " + " = " + SN_subbase_sinBase.toFixed(2);




            document.getElementById("proceso_D3_recal").innerHTML = ("D<SUB>3</SUB>" + " = " + "SN<SUB>sb</SUB>" + " / " + "a<SUB>3</SUB> x m<SUB>3</SUB>");
            document.getElementById("clc_D3_recal").innerHTML = "D<SUB>3</SUB>" + " = " + SN_subbase_sinBase.toFixed(2) + " / " + a3.toFixed(3) + "x" + m3.toFixed(2) + " = " + D3.toFixed(2) + " ≈ " + (Math.ceil(D3 / 0.5) * 0.5).toFixed(2);

            var SNf = ((Math.ceil(espesorAsfaltocorr / 0.5) * 0.5) * parseFloat($('#coeficiente_a1_oculto').val())) + (D3 * ((parseFloat($('#coefa3').val())) * (parseFloat($('#m3').val()))));
            if (SNf >= parseFloat($('#sn3').val())) {
                var rev = "Cumple";
            } else {
                var rev = "No cumple"
            }

            document.getElementById("procesoSN_recal_asf").innerHTML = ("SN" + " = " + "D<SUB>1</SUB> x a<SUB>1</SUB>" + " + " + "D<SUB>3</SUB> x a<SUB>2</SUB> x m<SUB>3</SUB>");
            document.getElementById("calcSN_recal_asf").innerHTML = "SN" + " = " + (Math.ceil(espesorAsfaltocorr / 0.5) * 0.5).toFixed(2) + " x " + parseFloat($('#coeficiente_a1_oculto').val()).toFixed(3) + " " + "     +     " + " " + D3.toFixed(2) + " x " + parseFloat($('#coefa3').val()).toFixed(3) + " x " + parseFloat($('#m3').val()).toFixed(2) + " = " + SNf.toFixed(2);
            document.getElementById("procesoRevisarSN_recal_asf").innerHTML = "Revisar" + " " + "SN" + " > " + "SN<SUB>3</SUB>";
            document.getElementById("calcRevisarSN_recal_asf").innerHTML = SNf.toFixed(2) + " > " + parseFloat($('#sn3').val()).toFixed(2) + " " + rev;
        } else {

            document.getElementById("proceso_SN1_asf_recal").innerHTML = ("SN<SUB>1</SUB>" + " = " + "D<SUB>1</SUB> x a<SUB>1</SUB>");
            document.getElementById("clc_SN1_asf_recal").innerHTML = "SN<SUB>1</SUB>" + " = " + espesorAsfaltocorr.toFixed(2) + " x " + a1.toFixed(3) + " " + " = " + SN1_sinBase.toFixed(2);
            document.getElementById("proceso_SNsubbase_asf_recal").innerHTML = ""
            document.getElementById("clc_SNsubbase_asf_recal").innerHTML = ""
            document.getElementById("proceso_D3_recal").innerHTML = ""
            document.getElementById("clc_D3_recal").innerHTML = ""
            $('.espesorBase').css('display', 'none');
            $('.espesorSubbase').css('display', 'none');
            $('.espesor_sinBase').hide();
            $('.espesor_sinSubbase').show();
            $('.espesor_sinBaseSubbase').css('display', 'none');


            var SNf = ((Math.ceil(espesorAsfaltocorr / 0.5) * 0.5) * parseFloat($('#coeficiente_a1_oculto').val()));
            if (SNf >= parseFloat($('#sn3').val())) {
                var rev = "Cumple";
            } else {
                var rev = "No cumple"
            }

            document.getElementById("procesoSN_recal_asf").innerHTML = ("SN" + " = " + "D<SUB>1</SUB> x a<SUB>1</SUB>");
            document.getElementById("calcSN_recal_asf").innerHTML = "SN" + " = " + (Math.ceil(espesorAsfaltocorr / 0.5) * 0.5).toFixed(2) + " x " + parseFloat($('#coeficiente_a1_oculto').val()).toFixed(3) + " " + " = " + SNf.toFixed(2);
            document.getElementById("procesoRevisarSN_recal_asf").innerHTML = "Revisar" + " " + "SN" + " > " + "SN<SUB>3</SUB>";
            document.getElementById("calcRevisarSN_recal_asf").innerHTML = SNf.toFixed(2) + " > " + parseFloat($('#sn3').val()).toFixed(2) + " " + rev;
        }
    }
}