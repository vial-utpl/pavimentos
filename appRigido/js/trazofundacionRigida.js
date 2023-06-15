var polino9 = function (a, b, c, d, e, f, g, h, j, k, x) {
    return ((a) + (b * (x)) + (c * Math.pow(x, 2)) + (d * Math.pow(x, 3)) + (e * Math.pow(x, 4)) + (f * Math.pow(x, 5)) + (g * Math.pow(x, 6)) + (h * Math.pow(x, 7)) + (j * Math.pow(x, 8)) + (k * Math.pow(x, 9)));
}
var interpo = function (a, b, c, d, e) {
    return (d + (((c - a) * (e - d)) / (b - a)));
}

function calcularyprofundidadrigida() {
    var fundacionrigida = parseFloat($('#profrigida').val());
    var modresiliente = parseFloat($('#Modulor').val());
    var modresilientex = ((modresiliente * -0.0025687961) + 51.375922);
    $("#mrx").val(modresilientex);
    if ((2 <= fundacionrigida) && (fundacionrigida <= 10)) {
        var prof2 = polino9(6.54811454378068, -0.473978273570538, 0.322766780853271, -0.0641184775158763, 0.0066606909094844, -0.000393260457713041, 0.0000137163939371021, -0.000000279133669067733, 0.00000000305552658175223, -0.0000000000138347067092301, (modresilientex.toFixed(8)));

        var prof5 = polino9(2.02378632314503, 0.652734793722629, -0.270388968288898, 0.0580236343666911, -0.00631217201589607, 0.000390876619349001, -0.0000143230037679132, 0.000000307372202357215, -0.00000000356992248262689, 0.0000000000173379032485099, (modresilientex.toFixed(8)));
        var prof10 = polino9(-0.0938097257167101, 0.222064077854156, -0.0815878938883543, 0.018907465506345, -0.00214166927617043, 0.000136683378514135, -0.0000051159959468805, 0.000000111446990747055, -0.00000000130897211819692, 0.00000000000642061650699653, (modresilientex.toFixed(8)));
        if ((2 <= fundacionrigida) && (fundacionrigida <= 5)) {
            var prof = interpo(2, 5, fundacionrigida, prof2, prof5)
            $("#profunrigiday").val(prof)
        } else if ((5 < fundacionrigida) && (fundacionrigida <= 10)) {
            var prof = interpo(5, 10, fundacionrigida, prof5, prof10)
            $("#profunrigiday").val(prof)
        } else {
            $("#profunrigiday").val("")
        }
    }
    else if ((fundacionrigida < 2)) {
        alert("Valores entre 2 y 10");
        $('#profrigida').val("")
        $('#profunrigiday').val("")
        
        
    } else if (10 < fundacionrigida) {
        alert("Este parámetro tiene un rango de valores entre 2 y 10 pies, valores superiores a 10 no tienen mayor incidencia en el cálculo por ese motivo se considera el módulo de reacción inicial.");
        $('#profrigida').val("")
        $('#kfrsubrasante').val("")
        $("#profrigida").prop("disabled", true);
        $("#funrigida").prop("checked", false);
        
        
        
        
    }

}

function datosgraf() {
    var profunrigiday = parseFloat($('#profunrigiday').val());

    var k1400 = (profunrigiday + 35.2065547157416) / (0.381231144044354);
    var k1200 = (profunrigiday + 41.4729962102531) / (0.487539839398712);
    var k1000 = (profunrigiday + 46.2473307294072) / (0.596373916349033);
    var k800 = (profunrigiday + 58.2873060652091) / (0.824566554037785);
    var k700 = (profunrigiday + 66.0948390450232) / (0.981518873750619);
    var k600 = (profunrigiday + 77.9826457998345) / (1.21292100913586);
    var k500 = (profunrigiday + 96.0258663577656) / (1.55780906061215);
    var k400 = (profunrigiday + 124.119486931670) / (2.11102099414414);
    var k300 = (profunrigiday + 172.719092711055) / (3.06703164471723);
    var k200 = (profunrigiday + 297.314900152387) / (5.49939647754002);
    var k100 = (profunrigiday + 793.602999605812) / (15.14717699288810);
    var k50 = (profunrigiday + 2652.14201135943) / (51.1739037593021);

    var k = parseFloat($('#ksubrasante').val());
    if ((50 <= k) && (k <= 100)) {
        var kfr = interpo(50, 100, k, k50, k100)
        $("#kfrx").val(kfr)
    } else if ((100 < k) && (k <= 200)) {
        var kfr = interpo(100, 200, k, k100, k200)
        $("#kfrx").val(kfr)
    } else if ((200 < k) && (k <= 300)) {
        var kfr = interpo(200, 300, k, k200, k300)
        $("#kfrx").val(kfr)
    } else if ((300 < k) && (k <= 400)) {
        var kfr = interpo(300, 400, k, k300, k400)
        $("#kfrx").val(kfr)
    } else if ((400 < k) && (k <= 500)) {
        var kfr = interpo(400, 500, k, k400, k500)
        $("#kfrx").val(kfr)
    } else if ((500 < k) && (k <= 600)) {
        var kfr = interpo(500, 600, k, k500, k600)
        $("#kfrx").val(kfr)
    } else if ((600 < k) && (k <= 700)) {
        var kfr = interpo(600, 700, k, k600, k700)
        $("#kfrx").val(kfr)
    } else if ((700 < k) && (k <= 800)) {
        var kfr = interpo(700, 800, k, k700, k800)
        $("#kfrx").val(kfr)
    } else if ((800 < k) && (k <= 1000)) {
        var kfr = interpo(800, 1000, k, k800, k1000)
        $("#kfrx").val(kfr)
    } else if ((1000 < k) && (k <= 1200)) {
        var kfr = interpo(1000, 1200, k, k1000, k1200)
        $("#kfrx").val(kfr)
    } else if ((1200 < k) && (k <= 1400)) {
        var kfr = interpo(1200, 1400, k, k1200, k1400)
        $("#kfrx").val(kfr)
    } else {
        $("#kfrx").val("")
    }
    var kfrx = parseFloat($('#kfrx').val());
    var kfrsubrasante = (kfrx - 51.375922) / (0.0255207405);
    $("#kfrsubrasante").val(kfrsubrasante.toFixed(2));
}