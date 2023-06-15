$(document).ready(function() {
    console.log("Start...");

    $("#ejemplo").on("click", function() {
        $("#materialsbs").val("gra");
        materialsubbase();
        $("#pinicial").val(4.2);
        $("#pfinal").val(2.5);
        serviciabilidadrig();
        copyPfRigid();
        $("#factorc").val("-1.645");
        factorconfia();
        $("#destandar").val(0.35);
        $("#tipoberma").val("concreto");
        $("#dispcarga").val("no");
        $("#tipopavimento").val("no reforzado");
        transfcarga();
        $("#tcvalor").val(3.9);
        materialsbs();
        $("#subbaseCBR").prop("checked", true);
        $("#subbase-crc-td").text("CBR (%)");
        $("#subbase-crc").val(45);
        parametrossubbase();
        $("#calidaddrenaje").val("Excelente (2 horas)");
        $("#subbasehumedad").val(5);
        calcdrenajesubbase();
        $("#datosubrasante").val(5);
        calcmoduloresiliente();
        $("#espesorsubbase").val(12);
        loadGraph4();
        $("#funrigida").prop("checked", true);
        $(".fundaRigida").show();
        $("#profrigida").prop("disabled", false);
        
        $("#profrigida").val(5);

        calcularyprofundidadrigida();
        datosgraf();
        loadGraph9();
        copyk();
        loadGraph6();
        $("#materialsubbase1").val("Estabilización con cal");
        perdidasorporte();
        $("#valorLsoporte").val(1.77);
        loadGraph6();
        finalk();
        $("#tipoagregado").val("Grueso-ígneo");
        $("#fc").val(405);
        modelastico();
        $("#Sc").val(650);
        $("#numeroejesequi").val(5100000);

    });
});

function materialsbs() {
    var subbasemat = $("#subbasematerial").text();
    if (subbasemat == ("Subbase granular")) {
        $('#materialsubbasegranular').show(10);
        $('#grafica-sbs-granular').show(10);
        document.getElementById('grafica-sbs-cemento').style.display = 'none';
        document.getElementById('grafica-sbs-bituminosa').style.display = 'none';
        document.getElementById('materialsubbasecemento').style.display = 'none';
        document.getElementById('materialsubbasebituminoso').style.display = 'none';

    } else {

        document.getElementById('materialsubbasegranular').style.display = 'none';
        document.getElementById('grafica-sbs-granular').style.display = 'none';
        if (subbasemat == ("Subbase tratada con cemento")) {
            $('#materialsubbasecemento').show(10);
            $('#grafica-sbs-cemento').show(10);

            document.getElementById('grafica-sbs-granular').style.display = 'none';
            document.getElementById('grafica-sbs-bituminosa').style.display = 'none';
            document.getElementById('materialsubbasegranular').style.display = 'none';
            document.getElementById('materialsubbasebituminoso').style.display = 'none';

        } else {

            document.getElementById('materialsubbasecemento').style.display = 'none';
            document.getElementById('grafica-sbs-cemento').style.display = 'none'
            if (subbasemat == ("Subbase tratada con asfálto")) {
                $('#materialsubbasebituminoso').show(10);
                $('#grafica-sbs-bituminosa').show(10);

                document.getElementById('grafica-sbs-granular').style.display = 'none';
                document.getElementById('grafica-sbs-cemento').style.display = 'none';
                document.getElementById('materialsubbasegranular').style.display = 'none';
                document.getElementById('materialsubbasecemento').style.display = 'none';


            } else {

                document.getElementById('materialsubbasebituminoso').style.display = 'none';
                document.getElementById('grafica-sbs-bituminosa').style.display = 'none';
            }
        }
    }
}