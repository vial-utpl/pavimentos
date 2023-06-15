var interpo = function(a, b, c, d, e) {
    return (d + (((c - a) * (e - d)) / (b - a)));
}

function calcdrenajesubbase() {
    var subbasehumedad = parseFloat($('#subbasehumedad').val())
    var calidaddrenaje = $("#calidaddrenaje option:selected").text()
    $('#tabla-drenaje').css('background-color', "");
    $('#Cal_Excelente').css('background-color', "");
    $('#Cal_Buena').css('background-color', "");
    $('#Cal_Aceptable').css('background-color', "");
    $('#Cal_Pobre').css('background-color', "");
    $('#Cal_Muypobre').css('background-color', "");
    $('.Por_01').css('background-color', "");
    $('.Por_15').css('background-color', "");
    $('.Por_525').css('background-color', "");
    $('.Por_25').css('background-color', "");

    if ((calidaddrenaje == "Excelente (2 horas)")) {
        $('#Cal_Excelente').css('background-color', "#c0e4fc");
        if ((0 <= subbasehumedad) && (subbasehumedad <= 1)) {
            $('.Por_01').css('background-color', "#c0e4fc");
            $('#tabla-drenaje #Cal_Excelente .Por_01').css('background-color', "#008ED1");
            var m21 = interpo(0, 1, subbasehumedad, 1.25, 1.20)
            $("#subbasem2").val(m21.toFixed(3));
            document.getElementById("proceso1").innerHTML = "m2" + " = " + "1.25" + " + " + "(" + "(" + "(" + subbasehumedad.toFixed(2) + " - " + "0" + ")" + " x " + "(" + "1.20" + " - " + "1.35" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
            document.getElementById("proceso2").innerHTML = "m2" + " = " + m21.toFixed(3);
        } else if ((1 < subbasehumedad) && (subbasehumedad <= 5)) {
            $('.Por_15').css('background-color', "#c0e4fc");
            $('#tabla-drenaje #Cal_Excelente .Por_15').css('background-color', "#008ED1");
            var m22 = interpo(1, 5, subbasehumedad, 1.20, 1.15)
            $("#subbasem2").val(m22.toFixed(3));
            document.getElementById("proceso1").innerHTML = "m2" + " = " + "1.20" + " + " + "(" + "(" + "(" + subbasehumedad.toFixed(2) + " - " + "1.00" + ")" + " x " + "(" + "1.15" + " - " + "1.20" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
            document.getElementById("proceso2").innerHTML = "m2" + " = " + m22.toFixed(3);
        } else if ((5 < subbasehumedad) && (subbasehumedad <= 25)) {
            $('.Por_525').css('background-color', "#c0e4fc");
            $('#tabla-drenaje #Cal_Excelente .Por_525').css('background-color', "#008ED1");
            var m23 = interpo(5, 25, subbasehumedad, 1.15, 1.10)
            $("#subbasem2").val(m23.toFixed(3));
            document.getElementById("proceso1").innerHTML = "m2" + " = " + "1.15" + " + " + "(" + "(" + "(" + subbasehumedad.toFixed(2) + " - " + "5.00" + ")" + " x " + "(" + "1.10" + " - " + "1.15" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
            document.getElementById("proceso2").innerHTML = "m2" + " = " + m23.toFixed(3);
        } else if ((25 < subbasehumedad)) {
            $('.Por_25').css('background-color', "#c0e4fc");
            $('#tabla-drenaje #Cal_Excelente .Por_25').css('background-color', "#008ED1");
            $("#subbasem2").val("1.10");
            document.getElementById("proceso1").innerHTML = "m2" + " = " + "1.10";
            document.getElementById("proceso2").innerHTML = "m2" + " = " + "1.10";
        } else {

        }

    } else if ((calidaddrenaje == "Buena ( 1 día)")) {
        $('#Cal_Buena').css('background-color', "#c0e4fc");
        if ((0 <= subbasehumedad) && (subbasehumedad <= 1)) {
            $('.Por_01').css('background-color', "#c0e4fc");
            $('#tabla-drenaje #Cal_Buena .Por_01').css('background-color', "#008ED1");
            var m24 = interpo(0, 1, subbasehumedad, 1.2, 1.15)
            $("#subbasem2").val(m24.toFixed(3));
            document.getElementById("proceso1").innerHTML = "m2" + " = " + "1.20" + " + " + "(" + "(" + "(" + subbasehumedad.toFixed(2) + " - " + "0" + ")" + " x " + "(" + "1.15" + " - " + "1.20" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
            document.getElementById("proceso2").innerHTML = "m2" + " = " + m24.toFixed(3);
        } else if ((1 < subbasehumedad) && (subbasehumedad <= 5)) {
            $('.Por_15').css('background-color', "#c0e4fc");
            $('#tabla-drenaje #Cal_Buena .Por_15').css('background-color', "#008ED1");
            var m25 = interpo(1, 5, subbasehumedad, 1.15, 1.10)
            $("#subbasem2").val(m25.toFixed(3));
            document.getElementById("proceso1").innerHTML = "m2" + " = " + "1.15" + " + " + "(" + "(" + "(" + subbasehumedad.toFixed(2) + " - " + "1.00" + ")" + " x " + "(" + "1.10" + " - " + "1.15" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
            document.getElementById("proceso2").innerHTML = "m2" + " = " + m25.toFixed(3);
        } else if ((5 < subbasehumedad) && (subbasehumedad <= 25)) {
            $('.Por_525').css('background-color', "#c0e4fc");
            $('#tabla-drenaje #Cal_Buena .Por_525').css('background-color', "#008ED1");
            var m26 = interpo(5, 25, subbasehumedad, 1.10, 1.00)
            $("#subbasem2").val(m26.toFixed(3));
            document.getElementById("proceso1").innerHTML = "m2" + " = " + "1.10" + " + " + "(" + "(" + "(" + subbasehumedad.toFixed(2) + " - " + "5.00" + ")" + " x " + "(" + "1.00" + " - " + "1.10" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
            document.getElementById("proceso2").innerHTML = "m2" + " = " + m26.toFixed(3);
        } else if ((25 < subbasehumedad)) {
            $('.Por_25').css('background-color', "#c0e4fc");
            $('#tabla-drenaje #Cal_Buena .Por_25').css('background-color', "#008ED1");
            $("#subbasem2").val("1.00");
            document.getElementById("proceso1").innerHTML = "m2" + " = " + "1.00";
            document.getElementById("proceso2").innerHTML = "m2" + " = " + "1.00";
        } else {

        }

    } else if ((calidaddrenaje == "Aceptable (1 semana)")) {
        $('#Cal_Aceptable').css('background-color', "#c0e4fc");
        if ((0 <= subbasehumedad) && (subbasehumedad <= 1)) {
            $('.Por_01').css('background-color', "#c0e4fc");
            $('#tabla-drenaje #Cal_Aceptable .Por_01').css('background-color', "#008ED1");
            var m27 = interpo(0, 1, subbasehumedad, 1.15, 1.10)
            $("#subbasem2").val(m27.toFixed(3));
            document.getElementById("proceso1").innerHTML = "m2" + " = " + "1.15" + " + " + "(" + "(" + "(" + subbasehumedad.toFixed(2) + " - " + "0" + ")" + " x " + "(" + "1.10" + " - " + "1.15" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
            document.getElementById("proceso2").innerHTML = "m2" + " = " + m27.toFixed(3);
        } else if ((1 < subbasehumedad) && (subbasehumedad <= 5)) {
            $('.Por_15').css('background-color', "#c0e4fc");
            $('#tabla-drenaje #Cal_Aceptable .Por_15').css('background-color', "#008ED1");
            var m28 = interpo(1, 5, subbasehumedad, 1.10, 1.00)
            $("#subbasem2").val(m28.toFixed(3));
            document.getElementById("proceso1").innerHTML = "m2" + " = " + "1.10" + " + " + "(" + "(" + "(" + subbasehumedad.toFixed(2) + " - " + "1.00" + ")" + " x " + "(" + "1.00" + " - " + "1.10" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
            document.getElementById("proceso2").innerHTML = "m2" + " = " + m28.toFixed(3);
        } else if ((5 < subbasehumedad) && (subbasehumedad <= 25)) {
            $('.Por_525').css('background-color', "#c0e4fc");
            $('#tabla-drenaje #Cal_Aceptable .Por_525').css('background-color', "#008ED1");
            var m29 = interpo(5, 25, subbasehumedad, 1.00, 0.9)
            $("#subbasem2").val(m29.toFixed(3));
            document.getElementById("proceso1").innerHTML = "m2" + " = " + "1.00" + " + " + "(" + "(" + "(" + subbasehumedad.toFixed(2) + " - " + "5.00" + ")" + " x " + "(" + "0.90" + " - " + "1.00" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
            document.getElementById("proceso2").innerHTML = "m2" + " = " + m29.toFixed(3);
        } else if ((25 < subbasehumedad)) {
            $('.Por_25').css('background-color', "#c0e4fc");
            $('#tabla-drenaje #Cal_Aceptable .Por_25').css('background-color', "#008ED1");
            $("#subbasem2").val("0.900");
            document.getElementById("proceso1").innerHTML = "m2" + " = " + "0.90";
            document.getElementById("proceso2").innerHTML = "m2" + " = " + "0.90";
        } else {

        }

    } else if ((calidaddrenaje == "Pobre (1 mes)")) {
        $('#Cal_Pobre').css('background-color', "#c0e4fc");
        if ((0 <= subbasehumedad) && (subbasehumedad <= 1)) {
            $('.Por_01').css('background-color', "#c0e4fc");
            $('#tabla-drenaje #Cal_Pobre .Por_01').css('background-color', "#008ED1");
            var m291 = interpo(0, 1, subbasehumedad, 1.10, 1.00)
            $("#subbasem2").val(m291.toFixed(3));
            document.getElementById("proceso1").innerHTML = "m2" + " = " + "1.10" + " + " + "(" + "(" + "(" + subbasehumedad.toFixed(2) + " - " + "0" + ")" + " x " + "(" + "1.00" + " - " + "1.10" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
            document.getElementById("proceso2").innerHTML = "m2" + " = " + m291.toFixed(3);
        } else if ((1 < subbasehumedad) && (subbasehumedad <= 5)) {
            $('.Por_15').css('background-color', "#c0e4fc");
            $('#tabla-drenaje #Cal_Pobre .Por_15').css('background-color', "#008ED1");
            var m292 = interpo(1, 5, subbasehumedad, 1.00, 0.9)
            $("#subbasem2").val(m292.toFixed(3));
            document.getElementById("proceso1").innerHTML = "m2" + " = " + "1.00" + " + " + "(" + "(" + "(" + subbasehumedad.toFixed(2) + " - " + "1.00" + ")" + " x " + "(" + "0.90" + " - " + "1.00" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
            document.getElementById("proceso2").innerHTML = "m2" + " = " + m292.toFixed(3);
        } else if ((5 < subbasehumedad) && (subbasehumedad <= 25)) {
            $('.Por_525').css('background-color', "#c0e4fc");
            $('#tabla-drenaje #Cal_Pobre .Por_525').css('background-color', "#008ED1");
            var m293 = interpo(5, 25, subbasehumedad, 0.9, 0.8)
            $("#subbasem2").val(m293.toFixed(3));
            document.getElementById("proceso1").innerHTML = "m2" + " = " + "0.90" + " + " + "(" + "(" + "(" + subbasehumedad.toFixed(2) + " - " + "5.00" + ")" + " x " + "(" + "0.80" + " - " + "0.90" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
            document.getElementById("proceso2").innerHTML = "m2" + " = " + m293.toFixed(3);
        } else if ((25 < subbasehumedad)) {
            $('.Por_25').css('background-color', "#c0e4fc");
            $('#tabla-drenaje #Cal_Pobre .Por_25').css('background-color', "#008ED1");
            $("#subbasem2").val("0.800");
            document.getElementById("proceso1").innerHTML = "m2" + " = " + "0.80";
            document.getElementById("proceso2").innerHTML = "m2" + " = " + "0.80";
        } else {

        }

    } else if ((calidaddrenaje == "Muy pobre (el agua no drena)")) {
        $('#Cal_Muypobre').css('background-color', "#c0e4fc");
        if ((0 <= subbasehumedad) && (subbasehumedad <= 1)) {
            $('.Por_01').css('background-color', "#c0e4fc");
            $('#tabla-drenaje #Cal_Muypobre .Por_01').css('background-color', "#008ED1");
            var m294 = interpo(0, 1, subbasehumedad, 1.00, 0.90)
            $("#subbasem2").val(m294.toFixed(3));
            document.getElementById("proceso1").innerHTML = "m2" + " = " + "1.00" + " + " + "(" + "(" + "(" + subbasehumedad.toFixed(2) + " - " + "0" + ")" + " x " + "(" + "0.90" + " - " + "1.00" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
            document.getElementById("proceso2").innerHTML = "m2" + " = " + m294.toFixed(3);
        } else if ((1 < subbasehumedad) && (subbasehumedad <= 5)) {
            $('.Por_15').css('background-color', "#c0e4fc");
            $('#tabla-drenaje #Cal_Muypobre .Por_15').css('background-color', "#008ED1");
            var m295 = interpo(1, 5, subbasehumedad, 0.90, 0.80)
            $("#subbasem2").val(m295.toFixed(3));
            document.getElementById("proceso1").innerHTML = "m2" + " = " + "0.90" + " + " + "(" + "(" + "(" + subbasehumedad.toFixed(2) + " - " + "1.00" + ")" + " x " + "(" + "0.80" + " - " + "0.90" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
            document.getElementById("proceso2").innerHTML = "m2" + " = " + m295.toFixed(3);
        } else if ((5 < subbasehumedad) && (subbasehumedad <= 25)) {
            $('.Por_525').css('background-color', "#c0e4fc");
            $('#tabla-drenaje #Cal_Muypobre .Por_525').css('background-color', "#008ED1");
            var m296 = interpo(5, 25, subbasehumedad, 0.80, 0.70)
            $("#subbasem2").val(m296.toFixed(3));
            $("#m2").val(m296.toFixed(3));
            document.getElementById("proceso1").innerHTML = "m2" + " = " + "0.80" + " + " + "(" + "(" + "(" + subbasehumedad.toFixed(2) + " - " + "5.00" + ")" + " x " + "(" + "0.70" + " - " + "0.80" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
            document.getElementById("proceso2").innerHTML = "m2" + " = " + m296.toFixed(3);
        } else if ((25 < subbasehumedad)) {
            $('.Por_25').css('background-color', "#c0e4fc");
            $('#tabla-drenaje #Cal_Muypobre .Por_25').css('background-color', "#008ED1");
            $("#subbasem2").val("0.700");
            document.getElementById("proceso1").innerHTML = "m2" + " = " + "0.70";
            document.getElementById("proceso2").innerHTML = "m2" + " = " + "0.70";
        } else {

        }

    } else {
        $("#subbasem2").val("");
    }
}