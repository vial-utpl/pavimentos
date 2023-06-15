$(document).ready(function () {
    console.log("Start...");
    $("#ejm").on("click", function () {
        $("#desvest").val(-1.645);
        $("#destandar").val(0.30);
        $("#numeroejesequi").val(5100000);
        $("#deltapsi").val(1.7);
        $("#pfinal").val(2.5);
        $("#Sc").val(650);
        $("#subbasem2").val(1.15);
        $("#tcvalor").val(3.2);
        $("#Ec").val(5009171.84);
        $("#kfinal").val(71.18);
    });

});

function f(x) {
    
    var zr = parseFloat($('#desvest').val());
    var so = parseFloat($('#destandar').val());
    var w18 = parseFloat($('#numeroejesequi').val());
    var psi = parseFloat($('#deltapsi').val());
    var pt = parseFloat($('#pfinal').val());
    var sc = parseFloat($('#Sc').val());
    var cd = parseFloat($('#subbasem2').val());
    var sccd = sc * cd;
    var j = parseFloat($('#tcvalor').val());
    var j215 = 215.63 * j;
    var ec = parseFloat($('#Ec').val());
    var k = parseFloat($('#kfinal').val());
    var eck = ec / k;
    var t2 = 18.42 / (Math.pow(eck, 0.25));
    var t1 = Math.log10((psi) / (4.5 - 1.5));

    return ((zr * so) + (7.35 * Math.log10(x + 1)) - (0.06) + (t1 / (1 + (1.624e7 / (Math.pow((x + 1), 8.46))))) + ((4.22 - (0.32 * pt)) * Math.log10((sccd * ((Math.pow(x, 0.75)) - 1.132)) / (j215 * (Math.pow(x, 0.75) - t2)))) - (Math.log10(w18)));

}



function g(x) {
    var psi = parseFloat($('#deltapsi').val());
    var pt = parseFloat($('#pfinal').val());
    var sc = parseFloat($('#Sc').val());
    var cd = parseFloat($('#subbasem2').val());

    var j = parseFloat($('#tcvalor').val());


    var k = parseFloat($('#kfinal').val());
    return ((137052000 * Math.log(psi / 3)) / (Math.log(10) * Math.pow((x + 1), (473 / 50)) * Math.pow(((16200000 / Math.pow((x + 1), (423 / 50))) + 1), 2))) + (((21563 * j) * ((211 / 50) - ((8 * pt) / 25)) * ((Math.pow(x, (7 / 4))) - ((921e-1 / 4 * Math.pow(k, (1 / 4))) / (50))) * (((175 * sc * cd * Math.pow(x, (3 / 4))) / ((21563 * j) * ((Math.pow(x, (7 / 4))) - ((921e-1 / 4 * Math.pow(k, (1 / 4))) / (50))))) - ((175 * sc * cd * Math.pow(x, (3 / 4)) * (Math.pow(x, (7 / 4)) - (283 / 250))) / ((21563 * j) * Math.pow(((Math.pow(x, (7 / 4))) - ((921e-1 / 4 * Math.pow(k, (1 / 4))) / (50))), 2)))) / (100 * Math.log(10) * sc * cd * (Math.pow(x, (7 / 4)) - (283 / 250))))) + ((147) / (20 * Math.log(10) * (x + 1)))
    
}

function abs_(x) {
    if (x < 0) {
        return -x;
    } else {
        return x;
    }
}

var Newton = function () {
    
    var iterations = 1000000;
    var x = 0;


    while (abs_(f(x)) > 0.0000001 && iterations >= 0) {
        x = x - (f(x) / g(x));
        iterations = iterations - 1;
    }

    return x;


}

function iterarEspesor() {

    var trf_espesor = parseFloat($('#trf_espesor').val());
    var dr = parseFloat($('#dr').val());
    var dr_text = parseFloat($('#dr').text());
    var diff = (Math.abs(dr - trf_espesor));
    
    if (dr == "") {
        $('#dr').val(0)
        if ((diff > 0.5) && (dr <= 14)) {

            if ((0 < dr) && (dr <= 6.5)) {
                $('#trf_espesor').val("6");
                $('#cargar-vehiculos').trigger('click');
                $('#clcd').trigger('click');
            } else if ((6.5 < dr) && (dr <= 7.5)) {
                $('#trf_espesor').val("7");
                $('#cargar-vehiculos').trigger('click');
                $('#clcd').trigger('click');
            } else if ((7.5 < dr) && (dr <= 8.5)) {
                $('#trf_espesor').val("8");
                $('#cargar-vehiculos').trigger('click');
                $('#clcd').trigger('click');
            } else if ((8.5 < dr) && (dr <= 9.5)) {
                $('#trf_espesor').val("9");
                $('#cargar-vehiculos').trigger('click');
                $('#clcd').trigger('click');
            } else if ((9.5 < dr) && (dr <= 10.5)) {
                $('#trf_espesor').val("10");
                $('#cargar-vehiculos').trigger('click');
                $('#clcd').trigger('click');
            } else if ((10.5 < dr) && (dr <= 11.5)) {
                $('#trf_espesor').val("11");
                $('#cargar-vehiculos').trigger('click');
                $('#clcd').trigger('click');
            } else if ((11.5 < dr) && (dr <= 12.5)) {
                $('#trf_espesor').val("12");
                $('#cargar-vehiculos').trigger('click');
                $('#clcd').trigger('click');
            } else if ((12.5 < dr) && (dr <= 13.5)) {
                $('#trf_espesor').val("13");
                $('#cargar-vehiculos').trigger('click');
                $('#clcd').trigger('click');
            } else if ((13.5 < dr) && (dr <= 14)) {
                $('#trf_espesor').val("14");
                $('#cargar-vehiculos').trigger('click');
                $('#clcd').trigger('click');
            } else if ((14 < dr)) {
                $('#trf_espesor').val("14");
                $('#cargar-vehiculos').trigger('click');
                $('#clcd').trigger('click');
            }
        }  else if ((diff > 5) && (dr > 6)) {
            $('#trf_espesor').val("14");
                $('#cargar-vehiculos').trigger('click');
                $('#clcd').trigger('click');
        }
    } else {
        if ((diff > 0.5) && (dr <= 14)) {

            if ((0 < dr) && (dr <= 6.5)) {
                $('#trf_espesor').val("6");
                $('#cargar-vehiculos').trigger('click');
                $('#clcd').trigger('click');
            } else if ((6.5 < dr) && (dr <= 7.5)) {
                $('#trf_espesor').val("7");
                $('#cargar-vehiculos').trigger('click');
                $('#clcd').trigger('click');
            } else if ((7.5 < dr) && (dr <= 8.5)) {
                $('#trf_espesor').val("8");
                $('#cargar-vehiculos').trigger('click');
                $('#clcd').trigger('click');
            } else if ((8.5 < dr) && (dr <= 9.5)) {
                $('#trf_espesor').val("9");
                $('#cargar-vehiculos').trigger('click');
                $('#clcd').trigger('click');
            } else if ((9.5 < dr) && (dr <= 10.5)) {
                $('#trf_espesor').val("10");
                $('#cargar-vehiculos').trigger('click');
                $('#clcd').trigger('click');
            } else if ((10.5 < dr) && (dr <= 11.5)) {
                $('#trf_espesor').val("11");
                $('#cargar-vehiculos').trigger('click');
                $('#clcd').trigger('click');
            } else if ((11.5 < dr) && (dr <= 12.5)) {
                $('#trf_espesor').val("12");
                $('#cargar-vehiculos').trigger('click');
                $('#clcd').trigger('click');
            } else if ((12.5 < dr) && (dr <= 13.5)) {
                $('#trf_espesor').val("13");
                $('#cargar-vehiculos').trigger('click');
                $('#clcd').trigger('click');
            } else if ((13.5 < dr) && (dr <= 14)) {
                $('#trf_espesor').val("14");
                $('#cargar-vehiculos').trigger('click');
                $('#clcd').trigger('click');
            } else if ((14 < dr)) {
                $('#trf_espesor').val("14");
                $('#cargar-vehiculos').trigger('click');
                $('#clcd').trigger('click');
            }
        }  else if ((diff > 5) && (dr > 6)) {
            $('#trf_espesor').val("14");
                $('#cargar-vehiculos').trigger('click');
                $('#clcd').trigger('click');
        }
    }
        
    





}