$(document).ready(function () {
    console.log("Start...");

    $("#btnEjemplo").on("click", function () {
        $('.espesorSubbase').show(10);
        $('.espesorBase').show(10);
        $("#addBase").prop("checked", true);
        $('#capaBase').show(10);
        $('#tipoBase').css('display', 'inline-block');
        $('#coeficiente_m2').show(10);
        $('#caracteristicas_Base').show(10);
        $('.parbase').show(10);
        $("#addSubbase").prop("checked", true);
        $('#capaSubbase').show(10);
        $('#coeficiente_m3').show(10);
        $('#caracteristicas_Subbase').show(10);
        $('.parsubbase').show(10);
        $("#tipoBase").val("gra");
        $("#subbase_caracteristicas").prop("disabled", false);
        $("#select_drenaje_subbase").prop("disabled", false);
        $("#porcentaje_humedad_m3").prop("disabled", false);
        $("#base_caracteristicas").prop("disabled", false);
        $("#select_drenaje_base").prop("disabled", false);
        $("#porcentaje_humedad_m2").prop("disabled", false);
        tipo_Base();
        selectBase();
        $("#pi").val("4.20");
        $("#pf").val("2.50");
        serviciabilidad();
        copyPf();
        $("#tipoConfiabilidad").val("-1.282");
        selectConfiabilidad();
        valueConfiabilidad();
        $("#So_Flexible").val(0.45);
        $("#Esals_Flexible").val(2373645);
        $("#base_CBR").prop("checked", true);
        $('#base_caracteristicas_tr').show(10);
        $('#graficas_base').show(10);
        $('#grafica_base_granular').show(10);
        $("#base_caracteristicas_td").text("CBR (%)");
        $("#base_caracteristicas").val("");
        $("#a2").val("");
        $("#Mb").val("");
        $("#base_caracteristicas").val("60.00");
        basePropiedad();
        $("#select_drenaje_base").val("Buena (1 día)");
        $("#porcentaje_humedad_m2").val("28.00");
        clc_coeficiente_m2();
        $("#subbase_CBR").prop("checked", true);
        $('#subbase_caracteristicas_tr').show(10);
        $('#grafica_capa_subbase').show(10);
        $("#subbase_caracteristicas_td").text("CBR (%)");
        $("#subbase_caracteristicas").val("");
        $("#a3").val("");
        $("#Msb").val("");
        $("#subbase_caracteristicas").val("35.00");
        subbaseprop();
        $("#select_drenaje_subbase").val("Buena (1 día)");
        $("#porcentaje_humedad_m3").val("28.00");
        clc_coeficiente_m3();
        $("#subrasante_caracteristicas_flexible").val(7);
        mrcalular();
        $("#modulo_elastico_asfalto").val(400000);
        modulo_elastico();
        var altura = $(document).height();
        $("html, body").animate({
            scrollTop: 0 + "px"
        });


    });
});

function selectBase() {
    var contmat = $("#bcont").text();
    if (contmat == ("Base granular")) {
        $('#base_granular').show(10);
        $('#grafica_base_granular').show(10);
        document.getElementById('grafica_base_cemento').style.display = 'none';
        document.getElementById('grafica_base_bituminoso').style.display = 'none';
        document.getElementById('base_cemento').style.display = 'none';
        document.getElementById('base-bit').style.display = 'none';

    } else {

        document.getElementById('base_granular').style.display = 'none';
        document.getElementById('grafica_base_granular').style.display = 'none';
        if (contmat == ("Base tratada con cemento")) {
            $('#base_cemento').show(10);
            $('#grafica_base_cemento').show(10);

            document.getElementById('grafica_base_granular').style.display = 'none';
            document.getElementById('grafica_base_bituminoso').style.display = 'none';
            document.getElementById('base_granular').style.display = 'none';
            document.getElementById('base-bit').style.display = 'none';

        } else {

            document.getElementById('base_cemento').style.display = 'none';
            document.getElementById('grafica_base_cemento').style.display = 'none'
            if (contmat == ("Base tratada con asfálto")) {
                $('#base-bit').show(10);
                $('#grafica_base_bituminoso').show(10);

                document.getElementById('grafica_base_granular').style.display = 'none';
                document.getElementById('grafica_base_cemento').style.display = 'none';
                document.getElementById('base_granular').style.display = 'none';
                document.getElementById('base_cemento').style.display = 'none';


            } else {

                document.getElementById('base-bit').style.display = 'none';
                document.getElementById('grafica_base_bituminoso').style.display = 'none';
            }
        }
    }
}