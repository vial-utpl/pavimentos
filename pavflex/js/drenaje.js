var interpo = function(a, b, c, d, e) {
    return (d + (((c - a) * (e - d)) / (b - a)));
}

function clc_coeficiente_m2() {
    var drenporcent = parseFloat($('#porcentaje_humedad_m2').val())
    var drencalidad = $("#select_drenaje_base option:selected").text()

    $('#tabla_drenaje_base').css('background-color', "");
    $('#Excelente').css('background-color', "");
    $('#Buena').css('background-color', "");
    $('#Aceptable').css('background-color', "");
    $('#Pobre').css('background-color', "");
    $('#Muypobre').css('background-color', "");
    $('.01').css('background-color', "");
    $('.15').css('background-color', "");
    $('.525').css('background-color', "");
    $('.25').css('background-color', "");
    $('.01').css('color', "");
    $('.15').css('color', "");
    $('.525').css('color', "");
    $('.25').css('color', "");

    if ((drencalidad == "Excelente (2 horas)")) {
        $('#Excelente').css('background-color', "#c0e4fc");
        if ((0 <= drenporcent) && (drenporcent <= 1)) {
            $('.01').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_base #Excelente .01').css('background-color', "#008ED1");
            $('#tabla_drenaje_base #Excelente .01').css('color', "#FFFFFF");
            var m21 = interpo(0, 1, drenporcent, 1.4, 1.35)
            $("#m2").val(m21.toFixed(2));
            document.getElementById("ec_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + "1.40" + " + " + "(" + "(" + "(" + drenporcent.toFixed(2) + " - " + "0" + ")" + " x " + "(" + "1.35" + " - " + "1.40" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
            document.getElementById("resol_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + m21.toFixed(2);
        } else if ((1 < drenporcent) && (drenporcent <= 5)) {
            $('.15').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_base #Excelente .15').css('background-color', "#008ED1");
            $('#tabla_drenaje_base #Excelente .15').css('color', "#FFFFFF");
            var m22 = interpo(1, 5, drenporcent, 1.35, 1.30)
            $("#m2").val(m22.toFixed(2));
            document.getElementById("ec_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + "1.35" + " + " + "(" + "(" + "(" + drenporcent.toFixed(2) + " - " + "1.00" + ")" + " x " + "(" + "1.30" + " - " + "1.35" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
            document.getElementById("resol_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + m22.toFixed(2);
        } else if ((5 < drenporcent) && (drenporcent <= 25)) {
            $('.525').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_base #Excelente .525').css('background-color', "#008ED1");
            $('#tabla_drenaje_base #Excelente .525').css('color', "#FFFFFF");
            var m23 = interpo(5, 25, drenporcent, 1.30, 1.20)
            $("#m2").val(m23.toFixed(2));
            document.getElementById("ec_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + "1.30" + " + " + "(" + "(" + "(" + drenporcent.toFixed(2) + " - " + "5.00" + ")" + " x " + "(" + "1.20" + " - " + "1.30" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
            document.getElementById("resol_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + m23.toFixed(2);
        } else if ((25 < drenporcent)) {
            $('.25').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_base #Excelente .25').css('background-color', "#008ED1");
            $('#tabla_drenaje_base #Excelente .25').css('color', "#FFFFFF");
            $("#m2").val("1.20");
            document.getElementById("ec_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + "1.20";
            document.getElementById("resol_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + "1.20";
        } else {

        }

    } else if ((drencalidad == "Buena (1 día)")) {
        $('#Buena').css('background-color', "#c0e4fc");
        if ((0 <= drenporcent) && (drenporcent <= 1)) {
            $('.01').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_base #Buena .01').css('background-color', "#008ED1");
            $('#tabla_drenaje_base #Buena .01').css('color', "#FFFFFF");
            var m24 = interpo(0, 1, drenporcent, 1.35, 1.25)
            $("#m2").val(m24.toFixed(2));
            document.getElementById("ec_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + "1.35" + " + " + "(" + "(" + "(" + drenporcent.toFixed(2) + " - " + "0" + ")" + " x " + "(" + "1.25" + " - " + "1.35" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
            document.getElementById("resol_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + m24.toFixed(2);
        } else if ((1 < drenporcent) && (drenporcent <= 5)) {
            $('.15').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_base #Buena .15').css('background-color', "#008ED1");
            $('#tabla_drenaje_base #Buena .15').css('color', "#FFFFFF");
            var m25 = interpo(1, 5, drenporcent, 1.25, 1.15)
            $("#m2").val(m25.toFixed(2));
            document.getElementById("ec_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + "1.25" + " + " + "(" + "(" + "(" + drenporcent.toFixed(2) + " - " + "1.00" + ")" + " x " + "(" + "1.15" + " - " + "1.25" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
            document.getElementById("resol_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + m25.toFixed(2);
        } else if ((5 < drenporcent) && (drenporcent <= 25)) {
            $('.525').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_base #Buena .525').css('background-color', "#008ED1");
            $('#tabla_drenaje_base #Buena .525').css('color', "#FFFFFF");
            var m26 = interpo(5, 25, drenporcent, 1.15, 1.00)
            $("#m2").val(m26.toFixed(2));
            document.getElementById("ec_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + "1.15" + " + " + "(" + "(" + "(" + drenporcent.toFixed(2) + " - " + "5.00" + ")" + " x " + "(" + "1.00" + " - " + "1.15" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
            document.getElementById("resol_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + m26.toFixed(2);
        } else if ((25 < drenporcent)) {
            $('.25').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_base #Buena .25').css('background-color', "#008ED1");
            $('#tabla_drenaje_base #Buena .25').css('color', "#FFFFFF");
            $("#m2").val("1.00");
            document.getElementById("ec_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + "1.00";
            document.getElementById("resol_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + "1.00";
        } else {

        }

    } else if ((drencalidad == "Aceptable (1 semana)")) {
        $('#Aceptable').css('background-color', "#c0e4fc");
        if ((0 <= drenporcent) && (drenporcent <= 1)) {
            $('.01').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_base #Aceptable .01').css('background-color', "#008ED1");
            $('#tabla_drenaje_base #Aceptable .01').css('color', "#FFFFFF");
            var m27 = interpo(0, 1, drenporcent, 1.25, 1.15)
            $("#m2").val(m27.toFixed(2));
            document.getElementById("ec_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + "1.25" + " + " + "(" + "(" + "(" + drenporcent.toFixed(2) + " - " + "0" + ")" + " x " + "(" + "1.15" + " - " + "1.25" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
            document.getElementById("resol_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + m27.toFixed(2);
        } else if ((1 < drenporcent) && (drenporcent <= 5)) {
            $('.15').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_base #Aceptable .15').css('background-color', "#008ED1");
            $('#tabla_drenaje_base #Aceptable .15').css('color', "#FFFFFF");
            var m28 = interpo(1, 5, drenporcent, 1.15, 1.05)
            $("#m2").val(m28.toFixed(2));
            document.getElementById("ec_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + "1.15" + " + " + "(" + "(" + "(" + drenporcent.toFixed(2) + " - " + "1.00" + ")" + " x " + "(" + "1.05" + " - " + "1.15" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
            document.getElementById("resol_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + m28.toFixed(2);
        } else if ((5 < drenporcent) && (drenporcent <= 25)) {
            $('.525').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_base #Aceptable .525').css('background-color', "#008ED1");
            $('#tabla_drenaje_base #Aceptable .525').css('color', "#FFFFFF");
            var m29 = interpo(5, 25, drenporcent, 1.00, 0.8)
            $("#m2").val(m29.toFixed(2));
            document.getElementById("ec_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + "1.00" + " + " + "(" + "(" + "(" + drenporcent.toFixed(2) + " - " + "5.00" + ")" + " x " + "(" + "0.80" + " - " + "1.00" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
            document.getElementById("resol_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + m29.toFixed(2);
        } else if ((25 < drenporcent)) {
            $('.25').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_base #Aceptable .25').css('background-color', "#008ED1");
            $('#tabla_drenaje_base #Aceptable .25').css('color', "#FFFFFF");
            $("#m2").val("0.80");
            document.getElementById("ec_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + "0.80";
            document.getElementById("resol_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + "0.80";
        } else {

        }

    } else if ((drencalidad == "Pobre (1 mes)")) {
        $('#Pobre').css('background-color', "#c0e4fc");
        if ((0 <= drenporcent) && (drenporcent <= 1)) {
            $('.01').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_base #Pobre .01').css('background-color', "#008ED1");
            $('#tabla_drenaje_base #Pobre .01').css('color', "#FFFFFF");
            var m291 = interpo(0, 1, drenporcent, 1.15, 1.05)
            $("#m2").val(m291.toFixed(2));
            document.getElementById("ec_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + "1.15" + " + " + "(" + "(" + "(" + drenporcent.toFixed(2) + " - " + "0" + ")" + " x " + "(" + "1.05" + " - " + "1.15" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
            document.getElementById("resol_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + m291.toFixed(2);
        } else if ((1 < drenporcent) && (drenporcent <= 5)) {
            $('.15').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_base #Pobre .15').css('background-color', "#008ED1");
            $('#tabla_drenaje_base #Pobre .15').css('color', "#FFFFFF");
            var m292 = interpo(1, 5, drenporcent, 1.05, 0.8)
            $("#m2").val(m292.toFixed(2));
            document.getElementById("ec_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + "1.05" + " + " + "(" + "(" + "(" + drenporcent.toFixed(2) + " - " + "1.00" + ")" + " x " + "(" + "0.80" + " - " + "1.05" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
            document.getElementById("resol_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + m292.toFixed(2);
        } else if ((5 < drenporcent) && (drenporcent <= 25)) {
            $('.525').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_base #Pobre .525').css('background-color', "#008ED1");
            $('#tabla_drenaje_base #Pobre .525').css('color', "#FFFFFF");
            var m293 = interpo(5, 25, drenporcent, 0.8, 0.6)
            $("#m2").val(m293.toFixed(2));
            document.getElementById("ec_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + "0.80" + " + " + "(" + "(" + "(" + drenporcent.toFixed(2) + " - " + "5.00" + ")" + " x " + "(" + "0.60" + " - " + "0.80" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
            document.getElementById("resol_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + m293.toFixed(2);
        } else if ((25 < drenporcent)) {
            $('.25').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_base #Pobre .25').css('background-color', "#008ED1");
            $('#tabla_drenaje_base #Pobre .25').css('color', "#FFFFFF");
            $("#m2").val("0.60");
            document.getElementById("ec_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + "0.60";
            document.getElementById("resol_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + "0.60";
        } else {

        }

    } else if ((drencalidad == "Muy pobre (el agua no drena)")) {
        $('#Muypobre').css('background-color', "#c0e4fc");
        if ((0 <= drenporcent) && (drenporcent <= 1)) {
            $('.01').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_base #Muypobre .01').css('background-color', "#008ED1");
            $('#tabla_drenaje_base #Muypobre .01').css('color', "#FFFFFF");
            var m294 = interpo(0, 1, drenporcent, 1.05, 0.95)
            $("#m2").val(m294.toFixed(2));
            document.getElementById("ec_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + "1.05" + " + " + "(" + "(" + "(" + drenporcent.toFixed(2) + " - " + "0" + ")" + " x " + "(" + "0.95" + " - " + "1.05" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
            document.getElementById("resol_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + m294.toFixed(2);
        } else if ((1 < drenporcent) && (drenporcent <= 5)) {
            $('.15').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_base #Muypobre .15').css('background-color', "#008ED1");
            $('#tabla_drenaje_base #Muypobre .15').css('color', "#FFFFFF");
            var m295 = interpo(1, 5, drenporcent, 0.95, 0.75)
            $("#m2").val(m295.toFixed(2));
            document.getElementById("ec_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + "0.95" + " + " + "(" + "(" + "(" + drenporcent.toFixed(2) + " - " + "1.00" + ")" + " x " + "(" + "0.75" + " - " + "0.95" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
            document.getElementById("resol_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + m295.toFixed(2);
        } else if ((5 < drenporcent) && (drenporcent <= 25)) {
            $('.525').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_base #Muypobre .525').css('background-color', "#008ED1");
            $('#tabla_drenaje_base #Muypobre .525').css('color', "#FFFFFF");
            var m296 = interpo(5, 25, drenporcent, 0.75, 0.4)
            $("#m2").val(m296.toFixed(2));
            document.getElementById("ec_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + "0.75" + " + " + "(" + "(" + "(" + drenporcent.toFixed(2) + " - " + "5.00" + ")" + " x " + "(" + "0.40" + " - " + "0.75" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
            document.getElementById("resol_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + m296.toFixed(2);
        } else if ((25 < drenporcent)) {
            $('.25').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_base #Muypobre .25').css('background-color', "#008ED1");
            $('#tabla_drenaje_base #Muypobre .25').css('color', "#FFFFFF");
            $("#m2").val("0.40");
            document.getElementById("ec_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + "0.40";
            document.getElementById("resol_interpolacion_drenaje_base").innerHTML = "m<sub>2</sub>" + " = " + "0.40";
        } else {

        }

    } else {
        $("#m2").val("");
    }
}

function clc_coeficiente_m3() {
    var drenacalidadm3 = $("#select_drenaje_subbase option:selected").val()
    var drenporcentm3 = parseFloat($('#porcentaje_humedad_m3').val())
    var drencalidadm3 = $("#select_drenaje_subbase option:selected").text()
    
    $('#tabla_drenaje_subbase').css('background-color', "");
    $('#Excelentesb').css('background-color', "");
    $('#Buenasb').css('background-color', "");
    $('#Aceptablesb').css('background-color', "");
    $('#Pobresb').css('background-color', "");
    $('#Muypobresb').css('background-color', "");
    $('.01_subbase').css('background-color', "");
    $('.15_subbase').css('background-color', "");
    $('.525_subbase').css('background-color', "");
    $('.25_subbase').css('background-color', "");
    $('.01_subbase').css('color', "");
    $('.15_subbase').css('color', "");
    $('.525_subbase').css('color', "");
    $('.25_subbase').css('color', "");

    if ((drencalidadm3 == "Excelente (2 horas)")) {
        $('#Excelentesb').css('background-color', "#c0e4fc");
        if ((0 <= drenporcentm3) && (drenporcentm3 <= 1)) {
            $('.01_subbase').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_subbase #Excelentesb .01_subbase').css('background-color', "#008ED1");
            $('#tabla_drenaje_subbase #Excelentesb .01_subbase').css('color', "#FFFFFF");
            var m31 = interpo(0, 1, drenporcentm3, 1.4, 1.35)
            $("#m3").val(m31.toFixed(2));
            document.getElementById("ec_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + "1.40" + " + " + "(" + "(" + "(" + drenporcentm3.toFixed(2) + " - " + "0" + ")" + " x " + "(" + "1.35" + " - " + "1.40" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
            document.getElementById("resol_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + m31.toFixed(2);
        } else if ((1 < drenporcentm3) && (drenporcentm3 <= 5)) {
            $('.15_subbase').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_subbase #Excelentesb .15_subbase').css('background-color', "#008ED1");
            $('#tabla_drenaje_subbase #Excelentesb .15_subbase').css('color', "#FFFFFF");
            var m32 = interpo(1, 5, drenporcentm3, 1.35, 1.30)
            $("#m3").val(m32.toFixed(2));
            document.getElementById("ec_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + "1.35" + " + " + "(" + "(" + "(" + drenporcentm3.toFixed(2) + " - " + "1.00" + ")" + " x " + "(" + "1.30" + " - " + "1.35" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
            document.getElementById("resol_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + m32.toFixed(2);
        } else if ((5 < drenporcentm3) && (drenporcentm3 <= 25)) {
            $('.525_subbase').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_subbase #Excelentesb .525_subbase').css('background-color', "#008ED1");
            $('#tabla_drenaje_subbase #Excelentesb .525_subbase').css('color', "#FFFFFF");
            var m33 = interpo(5, 25, drenporcentm3, 1.30, 1.20)
            $("#m3").val(m33.toFixed(2));
            document.getElementById("ec_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + "1.30" + " + " + "(" + "(" + "(" + drenporcentm3.toFixed(2) + " - " + "5.00" + ")" + " x " + "(" + "1.20" + " - " + "1.30" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
            document.getElementById("resol_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + m33.toFixed(2);
        } else if ((25 < drenporcentm3)) {
            $('.25_subbase').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_subbase #Excelentesb .25_subbase').css('background-color', "#008ED1");
            $('#tabla_drenaje_subbase #Excelentesb .25_subbase').css('color', "#FFFFFF");
            $("#m3").val("1.20");
            document.getElementById("ec_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + "1.20";
            document.getElementById("resol_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + "1.20";
        } else {

        }

    } else if ((drencalidadm3 == "Buena (1 día)")) {
        $('#Buenasb').css('background-color', "#c0e4fc");
        if ((0 <= drenporcentm3) && (drenporcentm3 <= 1)) {
            $('.01_subbase').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_subbase #Buenasb .01_subbase').css('background-color', "#008ED1");
            $('#tabla_drenaje_subbase #Buenasb .01_subbase').css('color', "#FFFFFF");
            var m34 = interpo(0, 1, drenporcentm3, 1.35, 1.25)
            $("#m3").val(m34.toFixed(2));
            document.getElementById("ec_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + "1.35" + " + " + "(" + "(" + "(" + drenporcentm3.toFixed(2) + " - " + "0" + ")" + " x " + "(" + "1.25" + " - " + "1.35" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
            document.getElementById("resol_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + m34.toFixed(2);
        } else if ((1 < drenporcentm3) && (drenporcentm3 <= 5)) {
            $('.15_subbase').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_subbase #Buenasb .15_subbase').css('background-color', "#008ED1");
            $('#tabla_drenaje_subbase #Buenasb .15_subbase').css('color', "#FFFFFF");
            var m35 = interpo(1, 5, drenporcentm3, 1.25, 1.15)
            $("#m3").val(m35.toFixed(2));
            document.getElementById("ec_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + "1.25" + " + " + "(" + "(" + "(" + drenporcentm3.toFixed(2) + " - " + "1.00" + ")" + " x " + "(" + "1.15" + " - " + "1.25" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
            document.getElementById("resol_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + m35.toFixed(2);
        } else if ((5 < drenporcentm3) && (drenporcentm3 <= 25)) {
            $('.525_subbase').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_subbase #Buenasb .525_subbase').css('background-color', "#008ED1");
            $('#tabla_drenaje_subbase #Buenasb .525_subbase').css('color', "#FFFFFF");
            var m36 = interpo(5, 25, drenporcentm3, 1.15, 1.00)
            $("#m3").val(m36.toFixed(2));
            document.getElementById("ec_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + "1.15" + " + " + "(" + "(" + "(" + drenporcentm3.toFixed(2) + " - " + "5.00" + ")" + " x " + "(" + "1.00" + " - " + "1.15" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
            document.getElementById("resol_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + m36.toFixed(2);
        } else if ((25 < drenporcentm3)) {
            $('.25_subbase').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_subbase #Buenasb .25_subbase').css('background-color', "#008ED1");
            $('#tabla_drenaje_subbase #Buenasb .25_subbase').css('color', "#FFFFFF");
            $("#m3").val("1.00");
            document.getElementById("ec_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + "1.00";
            document.getElementById("resol_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + "1.00";
        } else {

        }

    } else if ((drencalidadm3 == "Aceptable (1 semana)")) {
        $('#Aceptablesb').css('background-color', "#c0e4fc");
        if ((0 <= drenporcentm3) && (drenporcentm3 <= 1)) {
            $('.01_subbase').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_subbase #Aceptablesb .01_subbase').css('background-color', "#008ED1");
            $('#tabla_drenaje_subbase #Aceptablesb .01_subbase').css('color', "#FFFFFF");
            var m37 = interpo(0, 1, drenporcentm3, 1.25, 1.15)
            $("#m3").val(m37.toFixed(2));
            document.getElementById("ec_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + "1.25" + " + " + "(" + "(" + "(" + drenporcentm3.toFixed(2) + " - " + "0" + ")" + " x " + "(" + "1.15" + " - " + "1.25" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
            document.getElementById("resol_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + m37.toFixed(2);
        } else if ((1 < drenporcentm3) && (drenporcentm3 <= 5)) {
            $('.15_subbase').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_subbase #Aceptablesb .15_subbase').css('background-color', "#008ED1");
            $('#tabla_drenaje_subbase #Aceptablesb .15_subbase').css('color', "#FFFFFF");
            var m38 = interpo(1, 5, drenporcentm3, 1.15, 1.05)
            $("#m3").val(m38.toFixed(2));
            document.getElementById("ec_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + "1.15" + " + " + "(" + "(" + "(" + drenporcentm3.toFixed(2) + " - " + "1.00" + ")" + " x " + "(" + "1.05" + " - " + "1.15" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
            document.getElementById("resol_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + m38.toFixed(2);
        } else if ((5 < drenporcentm3) && (drenporcentm3 <= 25)) {
            $('.525_subbase').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_subbase #Aceptablesb .525_subbase').css('background-color', "#008ED1");
            $('#tabla_drenaje_subbase #Aceptablesb .525_subbase').css('color', "#FFFFFF");
            var m39 = interpo(5, 25, drenporcentm3, 1.00, 0.8)
            $("#m3").val(m39.toFixed(2));
            document.getElementById("ec_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + "1.00" + " + " + "(" + "(" + "(" + drenporcentm3.toFixed(2) + " - " + "5.00" + ")" + " x " + "(" + "0.80" + " - " + "1.00" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
            document.getElementById("resol_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + m39.toFixed(2);
        } else if ((25 < drenporcentm3)) {
            $('.25_subbase').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_subbase #Aceptablesb .25_subbase').css('background-color', "#008ED1");
            $('#tabla_drenaje_subbase #Aceptablesb .25_subbase').css('color', "#FFFFFF");
            $("#m3").val("0.80");
            document.getElementById("ec_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + "0.80";
            document.getElementById("resol_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + "0.80";
        } else {

        }

    } else if ((drencalidadm3 == "Pobre (1 mes)")) {
        $('#Pobresb').css('background-color', "#c0e4fc");
        if ((0 <= drenporcentm3) && (drenporcentm3 <= 1)) {
            $('.01_subbase').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_subbase #Pobresb .01_subbase').css('background-color', "#008ED1");
            $('#tabla_drenaje_subbase #Pobresb .01_subbase').css('color', "#FFFFFF");
            var m391 = interpo(0, 1, drenporcentm3, 1.15, 1.05)
            $("#m3").val(m391.toFixed(2));
            document.getElementById("ec_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + "1.15" + " + " + "(" + "(" + "(" + drenporcentm3.toFixed(2) + " - " + "0" + ")" + " x " + "(" + "1.05" + " - " + "1.15" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
            document.getElementById("resol_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + m391.toFixed(2);
        } else if ((1 < drenporcentm3) && (drenporcentm3 <= 5)) {
            $('.15_subbase').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_subbase #Pobresb .15_subbase').css('background-color', "#008ED1");
            $('#tabla_drenaje_subbase #Pobresb .15_subbase').css('color', "#FFFFFF");
            var m392 = interpo(1, 5, drenporcentm3, 1.05, 0.8)
            $("#m3").val(m392.toFixed(2));
            document.getElementById("ec_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + "1.05" + " + " + "(" + "(" + "(" + drenporcentm3.toFixed(2) + " - " + "1.00" + ")" + " x " + "(" + "0.80" + " - " + "1.05" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
            document.getElementById("resol_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + m392.toFixed(2);
        } else if ((5 < drenporcentm3) && (drenporcentm3 <= 25)) {
            $('.525_subbase').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_subbase #Pobresb .525_subbase').css('background-color', "#008ED1");
            $('#tabla_drenaje_subbase #Pobresb .525_subbase').css('color', "#FFFFFF");
            var m393 = interpo(5, 25, drenporcentm3, 0.8, 0.6)
            $("#m3").val(m393.toFixed(2));
            document.getElementById("ec_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + "0.80" + " + " + "(" + "(" + "(" + drenporcentm3.toFixed(2) + " - " + "5.00" + ")" + " x " + "(" + "0.60" + " - " + "0.80" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
            document.getElementById("resol_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + m393.toFixed(2);
        } else if ((25 < drenporcentm3)) {
            $('.25_subbase').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_subbase #Pobresb .25_subbase').css('background-color', "#008ED1");
            $('#tabla_drenaje_subbase #Pobresb .25_subbase').css('color', "#FFFFFF");
            $("#m3").val("0.60");
            document.getElementById("ec_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + "0.60";
            document.getElementById("resol_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + "0.60";
        } else {

        }

    } else if ((drencalidadm3 == "Muy pobre (el agua no drena)")) {
        $('#Muypobresb').css('background-color', "#c0e4fc");
        if ((0 <= drenporcentm3) && (drenporcentm3 <= 1)) {
            $('.01_subbase').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_subbase #Muypobresb .01_subbase').css('background-color', "#008ED1");
            $('#tabla_drenaje_subbase #Muypobresb .01_subbase').css('color', "#FFFFFF");
            var m394 = interpo(0, 1, drenporcentm3, 1.05, 0.95)
            $("#m3").val(m394.toFixed(2));
            document.getElementById("ec_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + "1.05" + " + " + "(" + "(" + "(" + drenporcentm3.toFixed(2) + " - " + "0" + ")" + " x " + "(" + "0.95" + " - " + "1.05" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
            document.getElementById("resol_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + m394.toFixed(2);
        } else if ((1 < drenporcentm3) && (drenporcentm3 <= 5)) {
            $('.15_subbase').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_subbase #Muypobresb .15_subbase').css('background-color', "#008ED1");
            $('#tabla_drenaje_subbase #Muypobresb .15_subbase').css('color', "#FFFFFF");
            var m395 = interpo(1, 5, drenporcentm3, 0.95, 0.75)
            $("#m3").val(m395.toFixed(2));
            document.getElementById("ec_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + "0.95" + " + " + "(" + "(" + "(" + drenporcentm3.toFixed(2) + " - " + "1.00" + ")" + " x " + "(" + "0.75" + " - " + "0.95" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
            document.getElementById("resol_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + m395.toFixed(2);
        } else if ((5 < drenporcentm3) && (drenporcentm3 <= 25)) {
            $('.525_subbase').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_subbase #Muypobresb .525_subbase').css('background-color', "#008ED1");
            $('#tabla_drenaje_subbase #Muypobresb .525_subbase').css('color', "#FFFFFF");
            var m396 = interpo(5, 25, drenporcentm3, 0.75, 0.4)
            $("#m3").val(m396.toFixed(2));
            document.getElementById("ec_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + "0.75" + " + " + "(" + "(" + "(" + drenporcentm3.toFixed(2) + " - " + "5.00" + ")" + " x " + "(" + "0.40" + " - " + "0.75" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
            document.getElementById("resol_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + m396.toFixed(2);
        } else if ((25 < drenporcentm3)) {
            $('.25_subbase').css('background-color', "#c0e4fc");
            $('#tabla_drenaje_subbase #Muypobresb .25_subbase').css('background-color', "#008ED1");
            $('#tabla_drenaje_subbase #Muypobresb .25_subbase').css('color', "#FFFFFF");
            $("#m3").val("0.40");
            document.getElementById("ec_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + "0.40";
            document.getElementById("resol_interpolacion_drenaje_subbase").innerHTML = "m<sub>3</sub>" + " = " + "0.40";
        } else {

        }

    } else {
        $("#m3").val("");
    }
}