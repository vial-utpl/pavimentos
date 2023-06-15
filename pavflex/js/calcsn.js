var clc_psi_coord_x = function(a, b, c, d, e, f, g, h, i, j, k) {
    return ((a) + (b * (k)) + (c * Math.pow(k, 2)) + (d * Math.pow(k, 3)) + (e * Math.pow(k, 4)) + (f * Math.pow(k, 5)) + (g * Math.pow(k, 6)) + (h * Math.pow(k, 7)) + (i * Math.pow(k, 8))+(j * Math.pow(k, 9)));
}


function calcular_coord_x_psi() {

    var tercera_lineaPaso_tl_coord_y = parseFloat($('#tercera_lineaPaso_tl_coord_y').val());
    var psi = parseFloat($('#psi').val());

    if (psi == 0.5) {
        var spsix = 125.6554 + clc_psi_coord_x(-0.117588181259407, 0.00545206201033466, 0.10300382040441, -0.0302826438564807, 0.00357269166852348, -0.00020470343542911, 0.00000641278658974898, -0.000000112205070790239, 0.00000000102943376913134, -0.00000000000385950304918406, tercera_lineaPaso_tl_coord_y);
        $("#psi_coord_x").val(spsix);
    } else if (psi == 0.6) {
        var spsix = 125.6554 + clc_psi_coord_x(-0.0197096141847624, 0.00119568043299978, -0.0241112383082509, 0.00314799463376403, 0.000322274609061424, -0.0000428545904469502, 0.00000186246298028436, -0.0000000391637783314636, 0.000000000404631632019981, -0.0000000000016484608274768, tercera_lineaPaso_tl_coord_y);
        $("#psi_coord_x").val(spsix);
    } else if (psi == 0.7) {
        var spsix = 125.6554 + clc_psi_coord_x(0.00826417762914389, -0.000631215092823822, -0.0151521225925535, 0.00608233839739114, -0.000214516989217373, -0.00000748051502341696, 0.000000678219095107124, -0.0000000176560266407222, 0.000000000202637222973534, -0.000000000000878905062336004, tercera_lineaPaso_tl_coord_y);
        $("#psi_coord_x").val(spsix);
    } else if (psi == 0.8) {
        var spsix = 125.6554 + clc_psi_coord_x(0.016973317578731, -0.00116652274334683, -0.0230074430583045, 0.0125034391239751, -0.00103004926131689, 0.0000389919606504918, -0.000000744356867699025, 0.0000000065674988225517, -0.0000000000136558594293623, -0.0000000000000886551472696357, tercera_lineaPaso_tl_coord_y);
        $("#psi_coord_x").val(spsix);
    } else if (psi == 0.9) {
        var spsix = 125.6554 + clc_psi_coord_x(-0.0190629119385903, 0.00136791904407119, -0.00672956719063222, 0.0129206045530736, -0.00128722600857145, 0.0000590334823300509, -0.00000146508920195743, 0.0000000202037900853824, -0.000000000145165949573534, 0.000000000000421590693399591, tercera_lineaPaso_tl_coord_y);
        $("#psi_coord_x").val(spsix);

    } else if ((1 <= psi) && (psi <= 1.5)) {
        var spsix1 = 125.6554 + clc_psi_coord_x(-0.00595993664501293, 0.000329977142314419, 0.0930393754970282, -0.00585448618221562, 0.000242063697442063, -0.00000868825611632928, 0.000000282041607846395, -0.00000000605742583870139, 0.0000000000682612421448736, -0.000000000000303761127647237, tercera_lineaPaso_tl_coord_y);

        var spsix15 = 125.6554 + clc_psi_coord_x(0.00344947840039822, -0.000893415071004711, 0.368623873073375, -0.0555048768292181, 0.00417231849405653, -0.00017900658446024, 0.00000459790435058949, -0.000000069951713560501, 0.000000000581061832547261, -0.00000000000202957964121747, tercera_lineaPaso_tl_coord_y);

        var s1d = psi - 1;
        var difspsix = spsix15 - spsix1;

        if (s1d.toFixed(1) == 0) {
            var spsix = spsix1;
            $("#psi_coord_x").val(spsix);
        } else if (s1d.toFixed(1) == 0.1) {
            var spsix = (0.235416989403709 * difspsix) + spsix1;
            $("#psi_coord_x").val(spsix);
        } else if (s1d.toFixed(1) == 0.2) {
            var spsix = (0.45341143770978 * difspsix) + spsix1;
            $("#psi_coord_x").val(spsix);
        } else if (s1d.toFixed(1) == 0.3) {
            var spsix = (0.650398950298715 * difspsix) + spsix1;
            $("#psi_coord_x").val(spsix);
        } else if (s1d.toFixed(1) == 0.4) {
            var spsix = (0.83085761693174 * difspsix) + spsix1;
            $("#psi_coord_x").val(spsix);
        } else if (s1d.toFixed(1) == 0.5) {
            var spsix = spsix15;
            $("#psi_coord_x").val(spsix);
        }

    } else if ((1.5 < psi) && (psi <= 2)) {
        var spsi15 = clc_psi_coord_x(0.00344947840039822, -0.000893415071004711, 0.368623873073375, -0.0555048768292181, 0.00417231849405653, -0.00017900658446024, 0.00000459790435058949, -0.000000069951713560501, 0.000000000581061832547261, -0.00000000000202957964121747, tercera_lineaPaso_tl_coord_y);
        var spsi2 = 5.08819999999999 + clc_psi_coord_x(0.00135973523720168, 0.000116473069510903, 0.161101494682953, -0.0172822022577748, 0.00108552156780206, -0.0000421853095531333, 0.00000103504628690132, -0.00000001559435182374451, 0.000000000131296875498579, -0.000000000000471239660045975, tercera_lineaPaso_tl_coord_y);

        var s1d = psi - 1.5;

        if (s1d.toFixed(1) == 0.1) {
            var spsix = (0.235416989403709 * (spsi2 - spsi15)) + spsi15 + 125.6554;
            $("#psi_coord_x").val(spsix);
        } else if (s1d.toFixed(1) == 0.2) {
            var spsix = (0.45341143770978 * (spsi2 - spsi15)) + spsi15 + 125.6554;
            $("#psi_coord_x").val(spsix);
        } else if (s1d.toFixed(1) == 0.3) {
            var spsix = (0.650398950298715 * (spsi2 - spsi15)) + spsi15 + 125.6554;
            $("#psi_coord_x").val(spsix);
        } else if (s1d.toFixed(1) == 0.4) {
            var spsix = (0.83085761693174 * (spsi2 - spsi15)) + spsi15 + 125.6554;
            $("#psi_coord_x").val(spsix);
        } else if (s1d.toFixed(1) == 0.5) {
            var spsix = spsix2;
            $("#psi_coord_x").val(spsix);
        }

    } else if ((2 < psi) && (psi <= 2.5)) {
        var spsi2 = 5.08819999999999 + clc_psi_coord_x(0.00135973523720168, 0.000116473069510903, 0.161101494682953, -0.0172822022577748, 0.00108552156780206, -0.0000421853095531333, 0.00000103504628690132, -0.00000001559435182374451, 0.000000000131296875498579, -0.000000000000471239660045975, tercera_lineaPaso_tl_coord_y);
        var spsi25 = 5.3197 + clc_psi_coord_x(-0.00405755584097278, -0.00163407717786868, 0.331305090890964, -0.0508744855615078, 0.00395470400781051, -0.00017526806888668, 0.00000462018670255304, -0.0000000716326655630928, 0.000000000602836860508563, -0.00000000000212377142697013, tercera_lineaPaso_tl_coord_y);
        var s1d = psi - 2;
        if (s1d.toFixed(1) == 0.1) {
            var spsix = (0.235416989403709 * (spsi25 - spsi2)) + spsi2 + 125.6554;
            $("#psi_coord_x").val(spsix);
        } else if (s1d.toFixed(1) == 0.2) {
            var spsix = (0.45341143770978 * (spsi25 - spsi2)) + spsi2 + 125.6554;
            $("#psi_coord_x").val(spsix);
        } else if (s1d.toFixed(1) == 0.3) {
            var spsix = (0.650398950298715 * (spsi25 - spsi2)) + spsi2 + 125.6554;
            $("#psi_coord_x").val(spsix);
        } else if (s1d.toFixed(1) == 0.4) {
            var spsix = (0.83085761693174 * (spsi25 - spsi2)) + spsi2 + 125.6554;
            $("#psi_coord_x").val(spsix);
        } else if (s1d.toFixed(1) == 0.5) {
            var spsix = spsix25;
            $("#psi_coord_x").val(spsix);
        }
    } else if ((2.5 < psi) && (psi <= 3)) {
        var spsi25 = 5.3197 + clc_psi_coord_x(-0.00405755584097278, -0.00163407717786868, 0.331305090890964, -0.0508744855615078, 0.00395470400781051, -0.00017526806888668, 0.00000462018670255304, -0.0000000716326655630928, 0.000000000602836860508563, -0.00000000000212377142697013, tercera_lineaPaso_tl_coord_y);
        var spsi3 = 6.7837 + clc_psi_coord_x(0.00483329261942345, -0.00235807800027032, 0.34079108494916, -0.0525547749784891, 0.00405820878859231, -0.000178031296371728, 0.0000046408309684054, -0.000000071171980253748, 0.000000000592986835632955, -0.00000000000207054994724981, tercera_lineaPaso_tl_coord_y);
        var s1d = psi - 2.5;
        if (s1d.toFixed(1) == 0.1) {
            var spsix = (0.235416989403709 * (spsi3 - spsi25)) + spsi25 + 125.6554;
            $("#psi_coord_x").val(spsix);
        } else if (s1d.toFixed(1) == 0.2) {
            var spsix = (0.45341143770978 * (spsi3 - spsi25)) + spsi25 + 125.6554;
            $("#psi_coord_x").val(spsix);
        } else if (s1d.toFixed(1) == 0.3) {
            var spsix = (0.650398950298715 * (spsi3 - spsi25)) + spsi25 + 125.6554;
            $("#psi_coord_x").val(spsix);
        } else if (s1d.toFixed(1) == 0.4) {
            var spsix = (0.83085761693174 * (spsi3 - spsi25)) + spsi25 + 125.6554;
            $("#psi_coord_x").val(spsix);
        } else if (s1d.toFixed(1) == 0.5) {
            var spsix = spsix3;
            $("#psi_coord_x").val(spsix);
        }
    }


}

function calcular_coord_x_psi_base() {

    var tercera_lineaPaso_tl_coord_y = parseFloat($('#tercera_lineaPaso_base_tl_coord_y').val());
    var psi = parseFloat($('#psi').val());

    if (psi == 0.5) {
        var spsix = 125.6554 + clc_psi_coord_x(-0.117588181259407, 0.00545206201033466, 0.10300382040441, -0.0302826438564807, 0.00357269166852348, -0.00020470343542911, 0.00000641278658974898, -0.000000112205070790239, 0.00000000102943376913134, -0.00000000000385950304918406, tercera_lineaPaso_tl_coord_y);
        $("#psi_coord_x_base").val(spsix);
    } else if (psi == 0.6) {
        var spsix = 125.6554 + clc_psi_coord_x(-0.0197096141847624, 0.00119568043299978, -0.0241112383082509, 0.00314799463376403, 0.000322274609061424, -0.0000428545904469502, 0.00000186246298028436, -0.0000000391637783314636, 0.000000000404631632019981, -0.0000000000016484608274768, tercera_lineaPaso_tl_coord_y);
        $("#psi_coord_x_base").val(spsix);
    } else if (psi == 0.7) {
        var spsix = 125.6554 + clc_psi_coord_x(0.00826417762914389, -0.000631215092823822, -0.0151521225925535, 0.00608233839739114, -0.000214516989217373, -0.00000748051502341696, 0.000000678219095107124, -0.0000000176560266407222, 0.000000000202637222973534, -0.000000000000878905062336004, tercera_lineaPaso_tl_coord_y);
        $("#psi_coord_x_base").val(spsix);
    } else if (psi == 0.8) {
        var spsix = 125.6554 + clc_psi_coord_x(0.016973317578731, -0.00116652274334683, -0.0230074430583045, 0.0125034391239751, -0.00103004926131689, 0.0000389919606504918, -0.000000744356867699025, 0.0000000065674988225517, -0.0000000000136558594293623, -0.0000000000000886551472696357, tercera_lineaPaso_tl_coord_y);
        $("#psi_coord_x_base").val(spsix);
    } else if (psi == 0.9) {
        var spsix = 125.6554 + clc_psi_coord_x(-0.0190629119385903, 0.00136791904407119, -0.00672956719063222, 0.0129206045530736, -0.00128722600857145, 0.0000590334823300509, -0.00000146508920195743, 0.0000000202037900853824, -0.000000000145165949573534, 0.000000000000421590693399591, tercera_lineaPaso_tl_coord_y);
        $("#psi_coord_x_base").val(spsix);

    } else if ((1 <= psi) && (psi <= 1.5)) {
        var spsix1 = 125.6554 + clc_psi_coord_x(-0.00595993664501293, 0.000329977142314419, 0.0930393754970282, -0.00585448618221562, 0.000242063697442063, -0.00000868825611632928, 0.000000282041607846395, -0.00000000605742583870139, 0.0000000000682612421448736, -0.000000000000303761127647237, tercera_lineaPaso_tl_coord_y);

        var spsix15 = 125.6554 + clc_psi_coord_x(0.00344947840039822, -0.000893415071004711, 0.368623873073375, -0.0555048768292181, 0.00417231849405653, -0.00017900658446024, 0.00000459790435058949, -0.000000069951713560501, 0.000000000581061832547261, -0.00000000000202957964121747, tercera_lineaPaso_tl_coord_y);

        var s1d = psi - 1;
        var difspsix = spsix15 - spsix1;

        if (s1d.toFixed(1) == 0) {
            var spsix = spsix1;
            $("#psi_coord_x_base").val(spsix);
        } else if (s1d.toFixed(1) == 0.1) {
            var spsix = (0.235416989403709 * difspsix) + spsix1;
            $("#psi_coord_x_base").val(spsix);
        } else if (s1d.toFixed(1) == 0.2) {
            var spsix = (0.45341143770978 * difspsix) + spsix1;
            $("#psi_coord_x_base").val(spsix);
        } else if (s1d.toFixed(1) == 0.3) {
            var spsix = (0.650398950298715 * difspsix) + spsix1;
            $("#psi_coord_x_base").val(spsix);
        } else if (s1d.toFixed(1) == 0.4) {
            var spsix = (0.83085761693174 * difspsix) + spsix1;
            $("#psi_coord_x_base").val(spsix);
        } else if (s1d.toFixed(1) == 0.5) {
            var spsix = spsix15;
            $("#psi_coord_x_base").val(spsix);
        }

    } else if ((1.5 < psi) && (psi <= 2)) {
        var spsi15 = clc_psi_coord_x(0.00344947840039822, -0.000893415071004711, 0.368623873073375, -0.0555048768292181, 0.00417231849405653, -0.00017900658446024, 0.00000459790435058949, -0.000000069951713560501, 0.000000000581061832547261, -0.00000000000202957964121747, tercera_lineaPaso_tl_coord_y);
        var spsi2 = 5.08819999999999 + clc_psi_coord_x(0.00135973523720168, 0.000116473069510903, 0.161101494682953, -0.0172822022577748, 0.00108552156780206, -0.0000421853095531333, 0.00000103504628690132, -0.00000001559435182374451, 0.000000000131296875498579, -0.000000000000471239660045975, tercera_lineaPaso_tl_coord_y);

        var s1d = psi - 1.5;

        if (s1d.toFixed(1) == 0.1) {
            var spsix = (0.235416989403709 * (spsi2 - spsi15)) + spsi15 + 125.6554;
            $("#psi_coord_x_base").val(spsix);
        } else if (s1d.toFixed(1) == 0.2) {
            var spsix = (0.45341143770978 * (spsi2 - spsi15)) + spsi15 + 125.6554;
            $("#psi_coord_x_base").val(spsix);
        } else if (s1d.toFixed(1) == 0.3) {
            var spsix = (0.650398950298715 * (spsi2 - spsi15)) + spsi15 + 125.6554;
            $("#psi_coord_x_base").val(spsix);
        } else if (s1d.toFixed(1) == 0.4) {
            var spsix = (0.83085761693174 * (spsi2 - spsi15)) + spsi15 + 125.6554;
            $("#psi_coord_x_base").val(spsix);
        } else if (s1d.toFixed(1) == 0.5) {
            var spsix = spsix2;
            $("#psi_coord_x_base").val(spsix);
        }

    } else if ((2 < psi) && (psi <= 2.5)) {
        var spsi2 = 5.08819999999999 + clc_psi_coord_x(0.00135973523720168, 0.000116473069510903, 0.161101494682953, -0.0172822022577748, 0.00108552156780206, -0.0000421853095531333, 0.00000103504628690132, -0.00000001559435182374451, 0.000000000131296875498579, -0.000000000000471239660045975, tercera_lineaPaso_tl_coord_y);
        var spsi25 = 5.3197 + clc_psi_coord_x(-0.00405755584097278, -0.00163407717786868, 0.331305090890964, -0.0508744855615078, 0.00395470400781051, -0.00017526806888668, 0.00000462018670255304, -0.0000000716326655630928, 0.000000000602836860508563, -0.00000000000212377142697013, tercera_lineaPaso_tl_coord_y);
        var s1d = psi - 2;
        if (s1d.toFixed(1) == 0.1) {
            var spsix = (0.235416989403709 * (spsi25 - spsi2)) + spsi2 + 125.6554;
            $("#psi_coord_x_base").val(spsix);
        } else if (s1d.toFixed(1) == 0.2) {
            var spsix = (0.45341143770978 * (spsi25 - spsi2)) + spsi2 + 125.6554;
            $("#psi_coord_x_base").val(spsix);
        } else if (s1d.toFixed(1) == 0.3) {
            var spsix = (0.650398950298715 * (spsi25 - spsi2)) + spsi2 + 125.6554;
            $("#psi_coord_x_base").val(spsix);
        } else if (s1d.toFixed(1) == 0.4) {
            var spsix = (0.83085761693174 * (spsi25 - spsi2)) + spsi2 + 125.6554;
            $("#psi_coord_x_base").val(spsix);
        } else if (s1d.toFixed(1) == 0.5) {
            var spsix = spsix25;
            $("#psi_coord_x_base").val(spsix);
        }
    } else if ((2.5 < psi) && (psi <= 3)) {
        var spsi25 = 5.3197 + clc_psi_coord_x(-0.00405755584097278, -0.00163407717786868, 0.331305090890964, -0.0508744855615078, 0.00395470400781051, -0.00017526806888668, 0.00000462018670255304, -0.0000000716326655630928, 0.000000000602836860508563, -0.00000000000212377142697013, tercera_lineaPaso_tl_coord_y);
        var spsi3 = 6.7837 + clc_psi_coord_x(0.00483329261942345, -0.00235807800027032, 0.34079108494916, -0.0525547749784891, 0.00405820878859231, -0.000178031296371728, 0.0000046408309684054, -0.000000071171980253748, 0.000000000592986835632955, -0.00000000000207054994724981, tercera_lineaPaso_tl_coord_y);
        var s1d = psi - 2.5;
        if (s1d.toFixed(1) == 0.1) {
            var spsix = (0.235416989403709 * (spsi3 - spsi25)) + spsi25 + 125.6554;
            $("#psi_coord_x_base").val(spsix);
        } else if (s1d.toFixed(1) == 0.2) {
            var spsix = (0.45341143770978 * (spsi3 - spsi25)) + spsi25 + 125.6554;
            $("#psi_coord_x_base").val(spsix);
        } else if (s1d.toFixed(1) == 0.3) {
            var spsix = (0.650398950298715 * (spsi3 - spsi25)) + spsi25 + 125.6554;
            $("#psi_coord_x_base").val(spsix);
        } else if (s1d.toFixed(1) == 0.4) {
            var spsix = (0.83085761693174 * (spsi3 - spsi25)) + spsi25 + 125.6554;
            $("#psi_coord_x_base").val(spsix);
        } else if (s1d.toFixed(1) == 0.5) {
            var spsix = spsix3;
            $("#psi_coord_x_base").val(spsix);
        }
    }


}

function calcular_coord_x_psi_subbase() {

    var tercera_lineaPaso_tl_coord_y = parseFloat($('#tercera_lineaPaso_subbase_tl_coord_y').val());
    var psi = parseFloat($('#psi').val());

    if (psi == 0.5) {
        var spsix = 125.6554 + clc_psi_coord_x(-0.117588181259407, 0.00545206201033466, 0.10300382040441, -0.0302826438564807, 0.00357269166852348, -0.00020470343542911, 0.00000641278658974898, -0.000000112205070790239, 0.00000000102943376913134, -0.00000000000385950304918406, tercera_lineaPaso_tl_coord_y);
        $("#psi_coord_x_subbase").val(spsix);
    } else if (psi == 0.6) {
        var spsix = 125.6554 + clc_psi_coord_x(-0.0197096141847624, 0.00119568043299978, -0.0241112383082509, 0.00314799463376403, 0.000322274609061424, -0.0000428545904469502, 0.00000186246298028436, -0.0000000391637783314636, 0.000000000404631632019981, -0.0000000000016484608274768, tercera_lineaPaso_tl_coord_y);
        $("#psi_coord_x_subbase").val(spsix);
    } else if (psi == 0.7) {
        var spsix = 125.6554 + clc_psi_coord_x(0.00826417762914389, -0.000631215092823822, -0.0151521225925535, 0.00608233839739114, -0.000214516989217373, -0.00000748051502341696, 0.000000678219095107124, -0.0000000176560266407222, 0.000000000202637222973534, -0.000000000000878905062336004, tercera_lineaPaso_tl_coord_y);
        $("#psi_coord_x_subbase").val(spsix);
    } else if (psi == 0.8) {
        var spsix = 125.6554 + clc_psi_coord_x(0.016973317578731, -0.00116652274334683, -0.0230074430583045, 0.0125034391239751, -0.00103004926131689, 0.0000389919606504918, -0.000000744356867699025, 0.0000000065674988225517, -0.0000000000136558594293623, -0.0000000000000886551472696357, tercera_lineaPaso_tl_coord_y);
        $("#psi_coord_x_subbase").val(spsix);
    } else if (psi == 0.9) {
        var spsix = 125.6554 + clc_psi_coord_x(-0.0190629119385903, 0.00136791904407119, -0.00672956719063222, 0.0129206045530736, -0.00128722600857145, 0.0000590334823300509, -0.00000146508920195743, 0.0000000202037900853824, -0.000000000145165949573534, 0.000000000000421590693399591, tercera_lineaPaso_tl_coord_y);
        $("#psi_coord_x_subbase").val(spsix);

    } else if ((1 <= psi) && (psi <= 1.5)) {
        var spsix1 = 125.6554 + clc_psi_coord_x(-0.00595993664501293, 0.000329977142314419, 0.0930393754970282, -0.00585448618221562, 0.000242063697442063, -0.00000868825611632928, 0.000000282041607846395, -0.00000000605742583870139, 0.0000000000682612421448736, -0.000000000000303761127647237, tercera_lineaPaso_tl_coord_y);

        var spsix15 = 125.6554 + clc_psi_coord_x(0.00344947840039822, -0.000893415071004711, 0.368623873073375, -0.0555048768292181, 0.00417231849405653, -0.00017900658446024, 0.00000459790435058949, -0.000000069951713560501, 0.000000000581061832547261, -0.00000000000202957964121747, tercera_lineaPaso_tl_coord_y);

        var s1d = psi - 1;
        var difspsix = spsix15 - spsix1;

        if (s1d.toFixed(1) == 0) {
            var spsix = spsix1;
            $("#psi_coord_x_subbase").val(spsix);
        } else if (s1d.toFixed(1) == 0.1) {
            var spsix = (0.235416989403709 * difspsix) + spsix1;
            $("#psi_coord_x_subbase").val(spsix);
        } else if (s1d.toFixed(1) == 0.2) {
            var spsix = (0.45341143770978 * difspsix) + spsix1;
            $("#psi_coord_x_subbase").val(spsix);
        } else if (s1d.toFixed(1) == 0.3) {
            var spsix = (0.650398950298715 * difspsix) + spsix1;
            $("#psi_coord_x_subbase").val(spsix);
        } else if (s1d.toFixed(1) == 0.4) {
            var spsix = (0.83085761693174 * difspsix) + spsix1;
            $("#psi_coord_x_subbase").val(spsix);
        } else if (s1d.toFixed(1) == 0.5) {
            var spsix = spsix15;
            $("#psi_coord_x_subbase").val(spsix);
        }

    } else if ((1.5 < psi) && (psi <= 2)) {
        var spsi15 = clc_psi_coord_x(0.00344947840039822, -0.000893415071004711, 0.368623873073375, -0.0555048768292181, 0.00417231849405653, -0.00017900658446024, 0.00000459790435058949, -0.000000069951713560501, 0.000000000581061832547261, -0.00000000000202957964121747, tercera_lineaPaso_tl_coord_y);
        var spsi2 = 5.08819999999999 + clc_psi_coord_x(0.00135973523720168, 0.000116473069510903, 0.161101494682953, -0.0172822022577748, 0.00108552156780206, -0.0000421853095531333, 0.00000103504628690132, -0.00000001559435182374451, 0.000000000131296875498579, -0.000000000000471239660045975, tercera_lineaPaso_tl_coord_y);

        var s1d = psi - 1.5;

        if (s1d.toFixed(1) == 0.1) {
            var spsix = (0.235416989403709 * (spsi2 - spsi15)) + spsi15 + 125.6554;
            $("#psi_coord_x_subbase").val(spsix);
        } else if (s1d.toFixed(1) == 0.2) {
            var spsix = (0.45341143770978 * (spsi2 - spsi15)) + spsi15 + 125.6554;
            $("#psi_coord_x_subbase").val(spsix);
        } else if (s1d.toFixed(1) == 0.3) {
            var spsix = (0.650398950298715 * (spsi2 - spsi15)) + spsi15 + 125.6554;
            $("#psi_coord_x_subbase").val(spsix);
        } else if (s1d.toFixed(1) == 0.4) {
            var spsix = (0.83085761693174 * (spsi2 - spsi15)) + spsi15 + 125.6554;
            $("#psi_coord_x_subbase").val(spsix);
        } else if (s1d.toFixed(1) == 0.5) {
            var spsix = spsix2;
            $("#psi_coord_x_subbase").val(spsix);
        }

    } else if ((2 < psi) && (psi <= 2.5)) {
        var spsi2 = 5.08819999999999 + clc_psi_coord_x(0.00135973523720168, 0.000116473069510903, 0.161101494682953, -0.0172822022577748, 0.00108552156780206, -0.0000421853095531333, 0.00000103504628690132, -0.00000001559435182374451, 0.000000000131296875498579, -0.000000000000471239660045975, tercera_lineaPaso_tl_coord_y);
        var spsi25 = 5.3197 + clc_psi_coord_x(-0.00405755584097278, -0.00163407717786868, 0.331305090890964, -0.0508744855615078, 0.00395470400781051, -0.00017526806888668, 0.00000462018670255304, -0.0000000716326655630928, 0.000000000602836860508563, -0.00000000000212377142697013, tercera_lineaPaso_tl_coord_y);
        var s1d = psi - 2;
        if (s1d.toFixed(1) == 0.1) {
            var spsix = (0.235416989403709 * (spsi25 - spsi2)) + spsi2 + 125.6554;
            $("#psi_coord_x_subbase").val(spsix);
        } else if (s1d.toFixed(1) == 0.2) {
            var spsix = (0.45341143770978 * (spsi25 - spsi2)) + spsi2 + 125.6554;
            $("#psi_coord_x_subbase").val(spsix);
        } else if (s1d.toFixed(1) == 0.3) {
            var spsix = (0.650398950298715 * (spsi25 - spsi2)) + spsi2 + 125.6554;
            $("#psi_coord_x_subbase").val(spsix);
        } else if (s1d.toFixed(1) == 0.4) {
            var spsix = (0.83085761693174 * (spsi25 - spsi2)) + spsi2 + 125.6554;
            $("#psi_coord_x_subbase").val(spsix);
        } else if (s1d.toFixed(1) == 0.5) {
            var spsix = spsix25;
            $("#psi_coord_x_subbase").val(spsix);
        }
    } else if ((2.5 < psi) && (psi <= 3)) {
        var spsi25 = 5.3197 + clc_psi_coord_x(-0.00405755584097278, -0.00163407717786868, 0.331305090890964, -0.0508744855615078, 0.00395470400781051, -0.00017526806888668, 0.00000462018670255304, -0.0000000716326655630928, 0.000000000602836860508563, -0.00000000000212377142697013, tercera_lineaPaso_tl_coord_y);
        var spsi3 = 6.7837 + clc_psi_coord_x(0.00483329261942345, -0.00235807800027032, 0.34079108494916, -0.0525547749784891, 0.00405820878859231, -0.000178031296371728, 0.0000046408309684054, -0.000000071171980253748, 0.000000000592986835632955, -0.00000000000207054994724981, tercera_lineaPaso_tl_coord_y);
        var s1d = psi - 2.5;
        if (s1d.toFixed(1) == 0.1) {
            var spsix = (0.235416989403709 * (spsi3 - spsi25)) + spsi25 + 125.6554;
            $("#psi_coord_x_subbase").val(spsix);
        } else if (s1d.toFixed(1) == 0.2) {
            var spsix = (0.45341143770978 * (spsi3 - spsi25)) + spsi25 + 125.6554;
            $("#psi_coord_x_subbase").val(spsix);
        } else if (s1d.toFixed(1) == 0.3) {
            var spsix = (0.650398950298715 * (spsi3 - spsi25)) + spsi25 + 125.6554;
            $("#psi_coord_x_subbase").val(spsix);
        } else if (s1d.toFixed(1) == 0.4) {
            var spsix = (0.83085761693174 * (spsi3 - spsi25)) + spsi25 + 125.6554;
            $("#psi_coord_x_subbase").val(spsix);
        } else if (s1d.toFixed(1) == 0.5) {
            var spsix = spsix3;
            $("#psi_coord_x_subbase").val(spsix);
        }
    }


}