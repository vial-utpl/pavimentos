$(document).ready(function () {
    console.log("Start...");
    $("#ejm").on("click", function () {
        $("#ZrFlexible").val(-1.645);
        $("#So_Flexible").val(0.35);
        $("#Esals_Flexible").val(5000000);
        $("#psi").val(1.9);
        $("#mr1").val(5000);
        $("#mr2").val(15000);
        $("#mr3").val(20000);
    });
    
    
});

function f1(x) {
    var mr = parseFloat($('#Mb').val());
    var zr = parseFloat($('#ZrFlexible').val());
    var so = parseFloat($('#So_Flexible').val());
    var w18 = parseFloat($('#Esals_Flexible').val());
    var psi = parseFloat($('#psi').val());

    return ((zr * so) + (9.36 * Math.log10(x + 1)) - (0.2) + (((Math.log10((psi) / (4.2 - 1.5)))) / (0.4 + (1094 / Math.pow((x + 1), 5.19)))) + (2.32 * Math.log10(mr)) - 8.07 - (Math.log10(w18)));

}

function f2(x) {
    var mr = parseFloat($('#Msb').val());
    var zr = parseFloat($('#ZrFlexible').val());
    var so = parseFloat($('#So_Flexible').val());
    var w18 = parseFloat($('#Esals_Flexible').val());
    var psi = parseFloat($('#psi').val());

    return ((zr * so) + (9.36 * Math.log10(x + 1)) - (0.2) + (((Math.log10((psi) / (4.2 - 1.5)))) / (0.4 + (1094 / Math.pow((x + 1), 5.19)))) + (2.32 * Math.log10(mr)) - 8.07 - (Math.log10(w18)));

}

function f3(x) {
    var mr = parseFloat($('#Mr').val());
    var zr = parseFloat($('#ZrFlexible').val());
    var so = parseFloat($('#So_Flexible').val());
    var w18 = parseFloat($('#Esals_Flexible').val());
    var psi = parseFloat($('#psi').val());

    return ((zr * so) + (9.36 * Math.log10(x + 1)) - (0.2) + (((Math.log10((psi) / (4.2 - 1.5)))) / (0.4 + (1094 / Math.pow((x + 1), 5.19)))) + (2.32 * Math.log10(mr)) - 8.07 - (Math.log10(w18)));

}

function g(x) {
    var psi = parseFloat($('#psi').val());
    return (((283893 * Math.log((10 * psi) / (27))) / (50 * Math.log(10) * Math.pow((x + 1), 0.619) * (Math.pow(((1094 / Math.pow((x + 1), 0.519)) + (2 / 5)), 2)))) + ((234) / (25 * Math.log(10) * (x + 1))));
}

function abs_(x) {
    if (x < 0) {
        return -x;
    } else {
        return x;
    }
}

var clcEspesorBase = function () {
    var iterations = 1000000;
    var x = 0;
    while (abs_(f1(x)) > 0.0000001 && iterations >= 0) {
        x = x - (f1(x) / g(x));
        iterations = iterations - 1;
    }
    return x;
}
var clcEspesorSubbase = function () {
    var iterations = 1000000;
    var x = 0;


    while (abs_(f2(x)) > 0.0000001 && iterations >= 0) {
        x = x - (f2(x) / g(x));
        iterations = iterations - 1;
    }

    return x;


}
var clcEspesorAsfalto = function () {
    var iterations = 1000000;
    var x = 0;

    while (abs_(f3(x)) > 0.0000001 && iterations >= 0) {
        x = x - (f3(x) / g(x));
        iterations = iterations - 1;
    }
    return x;



    
}

function iterarSN() {

    var traficoSN_Flexible = parseFloat($('#traficoSN_Flexible').val());
    var sn3 = parseFloat($('#sn3').val());
    var sn = parseFloat($('#sn3').text());
    var diff = (Math.abs(sn3 - traficoSN_Flexible));
    
    if (sn == "") {
        $('#sn3').val(0)
        if ((diff > 0.5) && (sn3 <= 6)) {

            if ((0 < sn3) && (sn3 <= 1.5)) {
                $('#traficoSN_Flexible').val("1");
                $('#load-Vehiculos').trigger('click');
                $('#btnClcSN').trigger('click');

            } else if ((1.5 < sn3) && (sn3 <= 2.5)) {
                $('#traficoSN_Flexible').val("2");
                $('#load-Vehiculos').trigger('click');
                $('#btnClcSN').trigger('click');
            } else if ((2.5 < sn3) && (sn3 <= 3.5)) {
                $('#traficoSN_Flexible').val("3");
                $('#load-Vehiculos').trigger('click');
                $('#btnClcSN').trigger('click');
            } else if ((3.5 < sn3) && (sn3 <= 4.5)) {
                $('#traficoSN_Flexible').val("4");
                $('#load-Vehiculos').trigger('click');
                $('#btnClcSN').trigger('click');
            } else if ((4.5 < sn3) && (sn3 <= 5.5)) {
                $('#traficoSN_Flexible').val("5");
                $('#load-Vehiculos').trigger('click');
                $('#btnClcSN').trigger('click');
            } else if ((5.5 < sn3) && (sn3 <= 6)) {
                $('#traficoSN_Flexible').val("6");
                $('#load-Vehiculos').trigger('click');
                $('#btnClcSN').trigger('click');
            } else if ((6 < sn3)) {
                $('#traficoSN_Flexible').val("6");
                $('#load-Vehiculos').trigger('click');
                $('#btnClcSN').trigger('click');
            }
        }  else if ((diff > 5) && (sn3 > 6)) {
            $('#traficoSN_Flexible').val("6");
                $('#load-Vehiculos').trigger('click');
                $('#btnClcSN').trigger('click');
        }
    } else {
        if ((diff > 0.5) && (sn3 <= 6)) {

            if ((0 < sn3) && (sn3 <= 1.5)) {
                $('#traficoSN_Flexible').val("1");
                $('#load-Vehiculos').trigger('click');
                $('#btnClcSN').trigger('click');

            } else if ((1.5 < sn3) && (sn3 <= 2.5)) {
                $('#traficoSN_Flexible').val("2");
                $('#load-Vehiculos').trigger('click');
                $('#btnClcSN').trigger('click');
            } else if ((2.5 < sn3) && (sn3 <= 3.5)) {
                $('#traficoSN_Flexible').val("3");
                $('#load-Vehiculos').trigger('click');
                $('#btnClcSN').trigger('click');
            } else if ((3.5 < sn3) && (sn3 <= 4.5)) {
                $('#traficoSN_Flexible').val("4");
                $('#load-Vehiculos').trigger('click');
                $('#btnClcSN').trigger('click');
            } else if ((4.5 < sn3) && (sn3 <= 5.5)) {
                $('#traficoSN_Flexible').val("5");
                $('#load-Vehiculos').trigger('click');
                $('#btnClcSN').trigger('click');
            } else if ((5.5 < sn3) && (sn3 <= 6.5)) {
                $('#traficoSN_Flexible').val("6");
                $('#load-Vehiculos').trigger('click');
                $('#btnClcSN').trigger('click');
            } else if ((6.5 < sn3)) {
                $('#traficoSN_Flexible').val("6");
                $('#load-Vehiculos').trigger('click');
                $('#btnClcSN').trigger('click');
            }
        } else if ((diff > 5) && (sn3 > 6)) {
            $('#traficoSN_Flexible').val("6");
                $('#load-Vehiculos').trigger('click');
                $('#btnClcSN').trigger('click');
        }
    }
        
    





}