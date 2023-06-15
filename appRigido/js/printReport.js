$(document).ready(function () {
	
});

function imprimir1() {

	

	var printme = document.getElementById("Reporte_variables_resultados_rigid");
	var printme0 = document.getElementById("ReporteResultados_rigid");
	//DATOS DEL PROYECTO
	var recibenombre = document.getElementById('datoNombre').value;
	document.getElementById('txtNombre_rigid').innerHTML = "<strong>" + "Nombre del proyecto:  " + "</strong>" + recibenombre;
	
	var recibeubicacion = document.getElementById('datoUbicacion').value;
	document.getElementById('txtUbicacion_rigid').innerHTML = "<strong>" + "Ubicación del proyecto:  " + "</strong>" + recibeubicacion;

	var reciberuta = document.getElementById('datoRuta').value;
	document.getElementById('txtRuta_rigid').innerHTML = "<strong>" + "Ruta:  " + "</strong>" + reciberuta;

	var recibetramo = document.getElementById('datoTramo').value;
	document.getElementById('txtTramo_rigid').innerHTML = "<strong>" + "Tramo:  " + "</strong>" + recibetramo;

	var recibeDisenador = document.getElementById('datoDisenador').value;
	document.getElementById('txtDisenador_rigid').innerHTML = "<strong>" + "Diseñador:  " + "</strong>" + recibeDisenador;

	if((recibenombre === "")&&(recibeubicacion === "")&&(reciberuta === "")&&(recibetramo === "")&&(recibeDisenador === "")){
		$(".datosProyect").hide();
	} else {
		$(".datosProyect").show();
	}
	
	//FINNNN
	
	//Parámetros de diseño
	 
	var recibepi = document.getElementById('pinicial').value;
	document.getElementById('txt_pi_rigid').innerHTML = "<strong>" + "Serviciabilidad inicial (pi): " + "</strong>" + recibepi;
	var recibepf = document.getElementById('pfinal').value;
	document.getElementById('txt_pf_rigid').innerHTML = "<strong>" + "Serviciabilidad final (pf): " + "</strong>" + recibepf;
	var recibepsi = document.getElementById('deltapsi').value;
	document.getElementById('txt_psi_rigid').innerHTML = "<strong>" + "Índice de serviciabilidad (Δpsi): " + "</strong>" + recibepsi;
	var recibeconfi = $("#factorc option:selected").text();
	document.getElementById('txtConfi_rigid').innerHTML = "<strong>" + "Factor de confiabilidad: " + "</strong>" + recibeconfi;
	var recibeZr = document.getElementById('factorc').value;
	document.getElementById('txtZr_rigid').innerHTML = "<strong>" + "Desviación normal estándar (Zr): " + "</strong>" + recibeZr;
	var recibeSo = document.getElementById('destandar').value;
	document.getElementById('txtSo_rigid').innerHTML = "<strong>" + "Desviación estándar (So): " + "</strong>" + recibeSo;
	//FIN

	//Parametros de tráfico

	var recibeTMDA = document.getElementById('trf_tmda').value;
	document.getElementById('txtTMDA_rigid').innerHTML = "<strong>" + "Tráfico medio diario anual: " + "</strong>" + recibeTMDA + " vehículos/día";
	var reciber = document.getElementById('trf_tasa_cre').value;
	document.getElementById('txt_r_rigid').innerHTML = "<strong>" + "Tasa de crecimiento vehicular: " + "</strong>" + reciber + " %";
	var recibePD = document.getElementById('trf_per_dis').value;
	document.getElementById('txtPD_rigid').innerHTML = "<strong>" + "Periodo de diseño: " + "</strong>" + recibePD + " años";
	var recibeD = document.getElementById('trf_direccionalidad').value;
	document.getElementById('txtD_rigid').innerHTML = "<strong>" + "Direccionalidad: " + "</strong>" + recibeD + " %";
	
	var recibeptt = document.getElementById('trf_pt').value;
	document.getElementById('txt_ptt_rigid').innerHTML = "<strong>" + "Serviciabilidad final (Pt): " + "</strong>" + recibeptt;
	var recibeEspesor = document.getElementById('trf_espesor').value;
	document.getElementById('txt_Espesor_rigid').innerHTML = "<strong>" + "Espesor (D<sub>supuesto</sub>): " + "</strong>" + recibeEspesor + " in";
	var recibeESALS = document.getElementById('numeroejesequi').value;
	document.getElementById('txtESALS_rigid').innerHTML = "<strong>" + "Número de ejes equivalentes: " + "</strong>" + recibeESALS + " ESAL´S";

	//FIN



	//Parámetros de subbase

	var recibepropsbase = $("#subbase-crc-td").text();
	if (recibepropsbase == "CBR (%)") {
		recibepropsbase = "CBR"
		var unidadsbase = " %";
	} else {
		var unidadsbase = "";
	}

	var recibepropvsbase = document.getElementById('subbase-crc').value;
	document.getElementById('txt_propiedad_subbase_rigid').innerHTML = "<strong>" + recibepropsbase + ": " + "</strong>" + recibepropvsbase + unidadsbase;
	var recibea3 = document.getElementById('subbasea2').value;
	document.getElementById('txt_a2_rigid').innerHTML = "<strong>" + "Coeficiente estructural (a<sub>2</sub>): " + "</strong>" + recibea3;
	var recibeMsb = document.getElementById('subbaseMb').value;
	document.getElementById('txtMb_rigid').innerHTML = "<strong>" + "Módulo resiliente (Msb): " + "</strong>" + recibeMsb + " psi";
	var recibecds = document.getElementById('calidaddrenaje').value;
	document.getElementById('txt_cd_subbase_rigid').innerHTML = "<strong>" + "Calidad del drenaje: " + "</strong>" + recibecds;
	var recibepss = document.getElementById('subbasehumedad').value;
	document.getElementById('txt_porcentajeHumedad_subbase_rigid').innerHTML = "<strong>" + "Porcentaje de exposición de humedad próximos a la saturación: " + "</strong>" + recibepss + " %";
	var recibem3 = document.getElementById('subbasem2').value;
	document.getElementById('txt_m2_rigid').innerHTML = "<strong>" + "Coeficiente de drenaje de subbase (m<sub>2</sub>): " + "</strong>" + recibem3;

	//FIN

	//Coeficiente de transferencia de carga
	var recibeBerma = document.getElementById('tipoberma').value;
	document.getElementById('txt_TipoBerma').innerHTML = "<strong>" + "Tipo de berma: " + "</strong>" + recibeBerma + "";
	var recibeCarga = document.getElementById('dispcarga').value;
	document.getElementById('txt_DispCarga').innerHTML = "<strong>" + "Dispositivo de carga: " + "</strong>" + recibeCarga + "";
	var recibePavimento = document.getElementById('tipopavimento').value;
	document.getElementById('txt_TipoPavimento').innerHTML = "<strong>" + "Tipo de pavimento: " + "</strong>" + recibePavimento + "";
	var recibeRango = document.getElementById('tcrango').value;
	document.getElementById('txt_Rango').innerHTML = "<strong>" + "Rango: " + "</strong>" + recibeRango + "";
	var recibeValor = document.getElementById('tcvalor').value;
	document.getElementById('txt_Valor').innerHTML = "<strong>" + "Valor seleccionado: " + "</strong>" + recibeValor + "";
	//FIN

	//Carpeta de Hormigón
	var recibeAgregado = document.getElementById('tipoagregado').value;
	document.getElementById('txt_TipoAgregado').innerHTML = "<strong>" + "Tipo de agregado: " + "</strong>" + recibeAgregado + "";
	var recibeResistencia = document.getElementById('fc').value;
	document.getElementById('txt_Resistencia').innerHTML = "<strong>" + "Resistencia a la compresión (f'c): " + "</strong>" + recibeResistencia + " kg/cm<sup>2</sup>";
	var recibeModuloRotura = document.getElementById('Sc').value;
	document.getElementById('txt_ModuloRotura').innerHTML = "<strong>" + "Módulo de rotura (Sc): " + "</strong>" + recibeModuloRotura + " psi";
	var recibeModuloElastico = document.getElementById('Ec').value;
	document.getElementById('txt_ModuloElastico').innerHTML = "<strong>" + "Módulo elástico del concreto (Ec): " + "</strong>" + recibeModuloElastico + " psi";

	//Parámetros de subrasante
	//Módulo de reacción K
	var recibeEspesorSubb = document.getElementById('espesorsubbase').value;
	document.getElementById('txt_EspesorK').innerHTML = "<strong>" + "Espesor de subbase: " + "</strong>" + recibeEspesorSubb + " in";
	var recibeModuloResiSubrasante = document.getElementById('moduloresiliente').value;
	document.getElementById('txt_ModuloResiSubrasante').innerHTML = "<strong>" + "Módulo resiliente de subrasante (Mr): " + "</strong>" + recibeModuloResiSubrasante + " psi";
	var recibeModuloResiSubbase = document.getElementById('moduloresilientesubbase').value;
	document.getElementById('txt_ModuloResiSubbase').innerHTML = "<strong>" + "Módulo resiliente de subbase (Mb): " + "</strong>" + recibeModuloResiSubbase + " psi";
	var recibeModuloReaccion = document.getElementById('kredondeado').value;
	document.getElementById('txt_ModuloReaccion').innerHTML = "<strong>" + "Módulo de reacción (K): " + "</strong>" + recibeModuloReaccion + " pci";

	//Efecto de funación rígida
	var recibeProdundidad = document.getElementById('profrigida').value;
	document.getElementById('txt_Produndidad').innerHTML = "<strong>" + "Profundidad de fundación rigida: " + "</strong>" + recibeProdundidad + " ft";
	var recibeModuloReaccion1 = document.getElementById('kfrsubrasante').value;
	document.getElementById('txt_ModuloReaccion1').innerHTML = "<strong>" + "Módulo de reacción (Kfr): " + "</strong>" + recibeModuloReaccion1 + " pci";

	//Factor pérdida de soporte
	var recibeTipoSubbase = document.getElementById('materialsubbase1').value;
	document.getElementById('txt_TipoSubbase').innerHTML = "<strong>" + "Tipo de Subbase: " + "</strong>" + recibeTipoSubbase + "";
	var recibePerdidaRango = document.getElementById('tiposbrango').value;
	document.getElementById('txt_PerdidaRango').innerHTML = "<strong>" + "Rango de pérdida de soporte: " + "</strong>" + recibePerdidaRango + "";
	var valorsoporte = parseFloat($('#valorLsoporte').val());
    if ((0 <= valorsoporte) && (valorsoporte < 0.5)) {
        var recibePerdidaValor = 0
        
    } else if ((0.5 <= valorsoporte) && (valorsoporte < 1.5)) {
        var recibePerdidaValor = 1
        
    }
     else if ((1.5 <= valorsoporte) && (valorsoporte < 2.5)) {
        var recibePerdidaValor = 2
        
    } else if ((2.5 <= valorsoporte) && (valorsoporte <= 3)) {
        var recibePerdidaValor = 3
        
    }
	
	document.getElementById('txt_PerdidaValor').innerHTML = "<strong>" + "Valor de la pérdida de soporte (L): " + "</strong>" + recibePerdidaValor + "";
	var recibeKCorregido = document.getElementById('Kcorr').value;
	document.getElementById('txt_KCorregido').innerHTML = "<strong>" + "Módulo de reacción corregido (Kcorr): " + "</strong>" + recibeKCorregido + " pci";

	//Módulo resiliente Mr
	var recibeCBR = document.getElementById('datosubrasante').value;
	document.getElementById('txt_CBR').innerHTML = "<strong>" + "CBR: " + "</strong>" + recibeCBR + " %";
	var recibeModuloResiliente = document.getElementById('Modulor').value;
	
	document.getElementById('txt_ModuloResiliente').innerHTML = "<strong>" + "Módulo resiliente de subrasante (Mr): " + "</strong>" + recibeModuloResiliente + " psi";

	//Resultados
	var recibeEspesorLosa = document.getElementById('d').value;
	document.getElementById('txt_EspesorLosa').innerHTML = "<strong>" + "Espesor de losa de concreto: " + "</strong>" + recibeEspesorLosa + " in";
	var recibeEspesorFinal = document.getElementById('dr').value;
	document.getElementById('txt_EspesorFinal').innerHTML = "<strong>" + "Espesor de losa redondeado: " + "</strong>" + recibeEspesorFinal + " in";

	var caratula = document.getElementById("ReporteCaratula_rigid");
	var declaracion = document.getElementById("ReporteDeclaracion_rigid");

	var wme = window.open('', 'Print-Window');
	wme.document.open();

	wme.document.write('<html><head><style type="text/css"> @media print {@page {margin: 20mm 25mm 20mm 25mm;  }   }</style></head><body onload="window.print()" >' 
	+ caratula.innerHTML + '<p style = "page-break-after: always;"> &nbsp; </ p>' 
	+ declaracion.innerHTML + '<p style = "page-break-after: always;"> &nbsp; </ p>' 
	+ printme.innerHTML + '<p style = "page-break-after: always;"> &nbsp; </ p>' +printme0.innerHTML+'</body></html>');
	wme.document.close();
	document.write

	setTimeout(function () {
		wme.close();
	}, 10);

}

 function imprimir() {

	var printme = document.getElementById("Reporte_variables_resultados_rigid");
	var printme0 = document.getElementById("ReporteResultados_rigid");

	//DATOS DEL PROYECTO
	var recibenombre = document.getElementById('datoNombre').value;
	document.getElementById('txtNombre_rigid').innerHTML = "<strong>" + "Nombre del proyecto:  " + "</strong>" + recibenombre;

	var recibeubicacion = document.getElementById('datoUbicacion').value;
	document.getElementById('txtUbicacion_rigid').innerHTML = "<strong>" + "Ubicación del proyecto:  " + "</strong>" + recibeubicacion;

	var reciberuta = document.getElementById('datoRuta').value;
	document.getElementById('txtRuta_rigid').innerHTML = "<strong>" + "Ruta:  " + "</strong>" + reciberuta;

	var recibetramo = document.getElementById('datoTramo').value;
	document.getElementById('txtTramo_rigid').innerHTML = "<strong>" + "Tramo:  " + "</strong>" + recibetramo;

	var recibeDisenador = document.getElementById('datoDisenador').value;
	document.getElementById('txtDisenador_rigid').innerHTML = "<strong>" + "Diseñador:  " + "</strong>" + recibeDisenador;

	if((recibenombre === "")&&(recibeubicacion === "")&&(reciberuta === "")&&(recibetramo === "")&&(recibeDisenador === "")){
		$(".datosProyect").hide();
	} else {
		$(".datosProyect").show();
	}
	//FINNNN
	
	//Parámetros de diseño
	 
	var recibepi = document.getElementById('pinicial').value;
	document.getElementById('txt_pi_rigid').innerHTML = "<strong>" + "Serviciabilidad inicial (pi): " + "</strong>" + recibepi;
	var recibepf = document.getElementById('pfinal').value;
	document.getElementById('txt_pf_rigid').innerHTML = "<strong>" + "Serviciabilidad final (pf): " + "</strong>" + recibepf;
	var recibepsi = document.getElementById('deltapsi').value;
	document.getElementById('txt_psi_rigid').innerHTML = "<strong>" + "Índice de serviciabilidad (Δpsi): " + "</strong>" + recibepsi;
	var recibeconfi = $("#factorc option:selected").text();
	document.getElementById('txtConfi_rigid').innerHTML = "<strong>" + "Factor de confiabilidad: " + "</strong>" + recibeconfi;
	var recibeZr = document.getElementById('factorc').value;
	document.getElementById('txtZr_rigid').innerHTML = "<strong>" + "Desviación normal estándar (Zr): " + "</strong>" + recibeZr;
	var recibeSo = document.getElementById('destandar').value;
	document.getElementById('txtSo_rigid').innerHTML = "<strong>" + "Desviación estándar (So): " + "</strong>" + recibeSo;
	//FIN

	//Parametros de tráfico
	var recibeTMDA = document.getElementById('trf_tmda').value;
	document.getElementById('txtTMDA_rigid').innerHTML = "<strong>" + "Tráfico medio diario anual: " + "</strong>" + recibeTMDA + " vehículos/día";
	var reciber = document.getElementById('trf_tasa_cre').value;
	document.getElementById('txt_r_rigid').innerHTML = "<strong>" + "Tasa de crecimiento vehicular: " + "</strong>" + reciber + " %";
	var recibePD = document.getElementById('trf_per_dis').value;
	document.getElementById('txtPD_rigid').innerHTML = "<strong>" + "Periodo de diseño: " + "</strong>" + recibePD + " años";
	var recibeD = document.getElementById('trf_direccionalidad').value;
	document.getElementById('txtD_rigid').innerHTML = "<strong>" + "Direccionalidad (D): " + "</strong>" + recibeD + " %";
	
	var recibeptt = document.getElementById('trf_pt').value;
	document.getElementById('txt_ptt_rigid').innerHTML = "<strong>" + "Serviciabilidad final (Pt): " + "</strong>" + recibeptt;
	var recibeEspesor = document.getElementById('trf_espesor').value;
	document.getElementById('txt_Espesor_rigid').innerHTML = "<strong>" + "Espesor (D<sub>supuesto</sub>): " + "</strong>" + recibeEspesor + " in";
	var recibeESALS = document.getElementById('numeroejesequi').value;
	document.getElementById('txtESALS_rigid').innerHTML = "<strong>" + "Número de ejes equivalentes: " + "</strong>" + recibeESALS + " ESAL´S";
	if((recibeTMDA === "")&&(reciber === "")&&(recibePD === "")&&(recibeD === "")&&(recibeEspesor === "")){
		$(".datosESALS").hide();
		var tab_drenaje_subbase = 1
		$("#noCalcula_ESALS").hide();

	} else {
	$(".datosESALS").show();
	$("#noCalcula_ESALS").show();
	var tab_drenaje_subbase = 2
}
	//FIN



	//Parámetros de subbase

	var recibepropsbase = $("#subbase-crc-td").text();
	if (recibepropsbase == "CBR (%)") {
		recibepropsbase = "CBR"
		var unidadsbase = " %";
	} else {
		var unidadsbase = "";
	}

	var tpbs = $("#materialsbs option:selected").text();
    
	var recibepropvsbase = document.getElementById('subbase-crc').value;
	document.getElementById('txt_propiedad_subbase_rigid').innerHTML = "<strong>" + recibepropsbase + ": " + "</strong>" + recibepropvsbase + unidadsbase;
	var recibea3 = document.getElementById('subbasea2').value;
	document.getElementById('txt_a2_rigid').innerHTML = "<strong>" + "Coeficiente estructural (a<sub>2</sub>): " + "</strong>" + recibea3;
	var recibeMsb = document.getElementById('subbaseMb').value;
	document.getElementById('txtMb_rigid').innerHTML = "<strong>" + "Módulo resiliente (Msb): " + "</strong>" + recibeMsb + " psi";
	document.getElementById('print_PropiedadSubBase_rigid').innerHTML = "En este caso, la subbase es " + tpbs +  " cuya caracterización mecánica es el " + recibepropsbase + " de " + recibepropvsbase + unidadsbase + ". En la Figura 1 se traza una línea horizontal en base al valor del " + recibepropsbase + ", con la que se lee el coeficiente estructural a<sub>2</sub> igual a " + "<strong>" + recibea3 + "</strong>" + " y un módulo resiliente igual a " + "<strong>" + recibeMsb + " psi." + "</strong>";
	var recibecds = document.getElementById('calidaddrenaje').value;
	document.getElementById('txt_cd_subbase_rigid').innerHTML = "<strong>" + "Calidad del drenaje: " + "</strong>" + recibecds;
	var recibepss = document.getElementById('subbasehumedad').value;
	document.getElementById('txt_porcentajeHumedad_subbase_rigid').innerHTML = "<strong>" + "Porcentaje de exposición de humedad próximos a la saturación: " + "</strong>" + recibepss + " %";
	document.getElementById('explicacionDrenaje').innerHTML = "Para la determinación de este parámetro se emplea la tabla " + tab_drenaje_subbase + ", la misma que está en función de la calidad del drenaje y el porcentaje de tiempo de exposición de la estructura del pavimento a nivel de humedades próximas a la saturación. En este caso la calidad del drenaje es " + recibecds + " y el porcentaje de tiempo de exposición de la estructura es del " + recibepss  + "%." + " A partir de estos datos se ubica un rango de la tabla, tal como se muestra a continuación."
	document.getElementById('table_drenaje_subbase').innerHTML = "Tabla " + tab_drenaje_subbase + ". Valores de coeficiente de drenaje."
	var recibem3 = document.getElementById('subbasem2').value;
	document.getElementById('txt_m2_rigid').innerHTML = "<strong>" + "Coeficiente de drenaje de subbase (m<sub>2</sub>): " + "</strong>" + recibem3;

	//FIN

	//Coeficiente de transferencia de carga
	var recibeBerma = document.getElementById('tipoberma').value;
	document.getElementById('txt_TipoBerma').innerHTML = "<strong>" + "Tipo de berma: " + "</strong>" + recibeBerma + "";
	var recibeCarga = document.getElementById('dispcarga').value;
	document.getElementById('txt_DispCarga').innerHTML = "<strong>" + "Dispositivo de carga: " + "</strong>" + recibeCarga + "";
	var recibePavimento = document.getElementById('tipopavimento').value;
	document.getElementById('txt_TipoPavimento').innerHTML = "<strong>" + "Tipo de pavimento: " + "</strong>" + recibePavimento + "";
	var recibeRango = document.getElementById('tcrango').value;
	document.getElementById('txt_Rango').innerHTML = "<strong>" + "Rango: " + "</strong>" + recibeRango + "";
	var recibeValor = document.getElementById('tcvalor').value;
	document.getElementById('txt_Valor').innerHTML = "<strong>" + "Valor seleccionado: " + "</strong>" + recibeValor + "";
	//FIN

	//Carpeta de Hormigón
	var recibeAgregado = document.getElementById('tipoagregado').value;
	document.getElementById('txt_TipoAgregado').innerHTML = "<strong>" + "Tipo de agregado: " + "</strong>" + recibeAgregado + "";
	var recibeResistencia = document.getElementById('fc').value;
	document.getElementById('txt_Resistencia').innerHTML = "<strong>" + "Resistencia a la compresión (f'c): " + "</strong>" + recibeResistencia + " kg/cm<sup>2</sup>";
	var recibeModuloRotura = document.getElementById('Sc').value;
	document.getElementById('txt_ModuloRotura').innerHTML = "<strong>" + "Módulo de rotura (Sc): " + "</strong>" + recibeModuloRotura + " psi";
	var recibeModuloElastico = document.getElementById('Ec').value;
	document.getElementById('txt_ModuloElastico').innerHTML = "<strong>" + "Módulo elástico del concreto (Ec): " + "</strong>" + recibeModuloElastico + " psi";

	//Parámetros de subrasante
	//Módulo de reacción K
	var recibeEspesorSubb = document.getElementById('espesorsubbase').value;
	document.getElementById('txt_EspesorK').innerHTML = "<strong>" + "Espesor de subbase: " + "</strong>" + recibeEspesorSubb + " in";
	var recibeModuloResiSubrasante = document.getElementById('moduloresiliente').value;
	document.getElementById('txt_ModuloResiSubrasante').innerHTML = "<strong>" + "Módulo resiliente de subrasante (Mr): " + "</strong>" + recibeModuloResiSubrasante + " psi";
	var recibeModuloResiSubbase = document.getElementById('moduloresilientesubbase').value;
	document.getElementById('txt_ModuloResiSubbase').innerHTML = "<strong>" + "Módulo resiliente de subbase (Mb): " + "</strong>" + recibeModuloResiSubbase + " psi";
	var recibeModuloReaccion = document.getElementById('kredondeado').value;
	document.getElementById('txt_ModuloReaccion').innerHTML = "<strong>" + "Módulo de reacción (K): " + "</strong>" + recibeModuloReaccion + " pci";
	document.getElementById('print_moduloReaccion').innerHTML = "En esta figura, en primer lugar se ubica el valor correspondiente al espesor de subbase (" + recibeEspesorSubb + " in" + "), luego desde ese punto se traza una línea vertical hacia arriba y hacia abajo, ubicando el módulo elástico de subbase ("+recibeModuloResiSubbase+" psi) y módulo resiliente de subrasante ("+recibeModuloResiSubrasante+" psi), respectivamente. A partir del punto ubicado en el cuadrante del módulo resiliente se traza una línea horizontal hasta la línea inclinada de paso, para de ahí trazar una línea vertical hasta el cuadrante del módulo de reacción compuesto (k). Por otro lado, a partir del punto encontrado en el cuadrante del módulo elástico de subbase se traza una línea horizontal hasta intersectar la línea vertical trazada previamente. En esta intersección se debe leer el módulo de reacción compuesto (k) que en este caso es de " + "<strong>" + recibeModuloReaccion + " pci." + "</strong>";
	var canvas_chartModuloReaction = document.getElementById('moduloReaccionCompuestoK');
		var URL_chartK = canvas_chartModuloReaction.toDataURL('image2/jpeg');
		document.getElementById('copy_carta_moduloReaccion').src = URL_chartK;

	//Efecto de funación rígida
	var recibeProdundidad = document.getElementById('profrigida').value;
	document.getElementById('txt_Produndidad').innerHTML = "<strong>" + "Profundidad de fundación rigida: " + "</strong>" + recibeProdundidad + " ft";
	var recibeModuloReaccion1 = document.getElementById('kfrsubrasante').value;
	document.getElementById('txt_ModuloReaccion1').innerHTML = "<strong>" + "Módulo de reacción (Kfr): " + "</strong>" + recibeModuloReaccion1 + " pci";
	document.getElementById('print_fundación').innerHTML = "Cuando el pavimento se encuentra cerca de una fundación rígida se debe modificar el módulo de reacción, utilizando la figura 3. Para el trazado se deben ubicar el valor correspondiente al módulo de resiliente de subrasante (" + recibeModuloResiSubrasante + " psi)," + " de donde se traza una línea vertical hasta la profundidad de fundación (" + recibeProdundidad + " pies)." + " A partir de ese punto se traza una línea horizontal hasta ubicar el módulo de reacción obtenido previamente (" + recibeModuloReaccion + " pci)." + " Y finalmente desde ese punto se traza una línea vertical hacia abajo hasta intersecar el módulo de reacción corregido por presencia de una fundación rígida, que en este caso es igual a " + "<strong>" + recibeModuloReaccion1 + " pci." + "</strong>";
	var canvas_chartFundacion = document.getElementById('KfundacionRigida');
		var URL_chartKfundacionRigida = canvas_chartFundacion.toDataURL('image3/jpeg');
		document.getElementById('copy_carta_fundacion').src = URL_chartKfundacionRigida;
		var funrigida = $("#funrigida")
    if (funrigida.is(":checked")) {
		$('.procesoFundacionRigida').show();
		var numFigura = 4
		var numEspesor = 5
		var usoK = document.getElementById('kfrsubrasante').value;
    } else {
		$('.procesoFundacionRigida').hide();
		var numFigura = 3
		var numEspesor = 4
		var usoK = document.getElementById('kredondeado').value;
    };

	//Factor pérdida de soporte
	var recibeTipoSubbase = document.getElementById('materialsubbase1').value;
	document.getElementById('txt_TipoSubbase').innerHTML = "<strong>" + "Tipo de Subbase: " + "</strong>" + recibeTipoSubbase + "";
	var recibePerdidaRango = document.getElementById('tiposbrango').value;
	document.getElementById('txt_PerdidaRango').innerHTML = "<strong>" + "Rango de pérdida de soporte: " + "</strong>" + recibePerdidaRango + "";
	var valorsoporte = parseFloat($('#valorLsoporte').val());
    if ((0 <= valorsoporte) && (valorsoporte < 0.5)) {
        var recibePerdidaValor = 0
        
    } else if ((0.5 <= valorsoporte) && (valorsoporte < 1.5)) {
        var recibePerdidaValor = 1
        
    }
     else if ((1.5 <= valorsoporte) && (valorsoporte < 2.5)) {
        var recibePerdidaValor = 2
        
    } else if ((2.5 <= valorsoporte) && (valorsoporte <= 3)) {
        var recibePerdidaValor = 3
        
    }
	
	document.getElementById('txt_PerdidaValor').innerHTML = "<strong>" + "Valor de la pérdida de soporte (L): " + "</strong>" + recibePerdidaValor + "";
	var recibeKCorregido = document.getElementById('Kcorr').value;
	document.getElementById('txt_KCorregido').innerHTML = "<strong>" + "Módulo de reacción corregido (Kcorr): " + "</strong>" + recibeKCorregido + " pci";
	
	
	 
	document.getElementById('print_LS').innerHTML = "El factor de pérdida de soporte está en función del tipo de subbase, que en este caso está entre 0 y 3. Para realizar esta corrección se emplea el ábaco de la figura " + numFigura +". En primer lugar, se debe ubicar el valor correspondiente al módulo de reacción (K) (" + usoK + " pci)." + " Luego se traza una línea vertical hasta ubicar el valor correspondiente al factor de pérdida de soporte (" + recibePerdidaValor + ")" + " y finalmente se traza una línea horizontal hasta intersecar los valores de módulo de reacción corregido por pérdida de soporte, que en este caso es igual a  " + "<strong>" + recibeKCorregido + " pci." + "</strong>";
	var canvas_chartPerdidaSoporteK = document.getElementById('perdidaSoporteK');
		var URL_chartPerdidaSoporteK = canvas_chartPerdidaSoporteK.toDataURL('image4/jpeg');
		document.getElementById('copy_carta_LS').src = URL_chartPerdidaSoporteK;
	document.getElementById('numFiguraLS').innerHTML = "Figura " + numFigura + ". Ábaco de diseño para el factor de pérdida de soporte"

	//Módulo resiliente Mr
	var recibeCBR = document.getElementById('datosubrasante').value;
	document.getElementById('txt_CBR').innerHTML = "<strong>" + "CBR: " + "</strong>" + recibeCBR + " %";
	var recibeModuloResiliente = document.getElementById('Modulor').value;
	document.getElementById('txt_ModuloResiliente').innerHTML = "<strong>" + "Módulo resiliente de subrasante (Mr): " + "</strong>" + recibeModuloResiliente + " psi";
	var varsubr = parseFloat($('#datosubrasante').val());
    if ((varsubr <= 10)) {
		document.getElementById('MrEcuacion').innerHTML = "Mr = 1500 * CBR"
		document.getElementById('MrProceso').innerHTML = "Mr = 1500 * " + "(" +recibeCBR+ "%) = " + recibeModuloResiliente + " psi"

        
    } else if ((10 < varsubr) && (varsubr <= 20)) {
		document.getElementById('MrEcuacion').innerHTML = "Mr = 3000 * CBR"
		document.getElementById('MrProceso').innerHTML = "Mr = 3000 * " + "(" +recibeCBR+ "%) = " + recibeModuloResiliente + " psi"
        
    } else if ((20 < varsubr) && (varsubr <= 100)) {
		document.getElementById('MrEcuacion').innerHTML = "Mr = (4326 * Log(CBR^0.65))+241"
		document.getElementById('MrProceso').innerHTML = "Mr = (4326 * Log("+"(" +recibeCBR+ "%)"+"^0.65))+241 = " + recibeModuloResiliente + " psi"
        
        
	} 

//módulo elástico del hormigon
	var tipoagregado = $("#tipoagregado option:selected").text();
    var fc = parseFloat($('#fc').val());
	var ec = $("#Ec").val();
    if (tipoagregado == "Grueso-ígneo") {       
        document.getElementById('EcEcuacion').innerHTML = "Ec = 14.2233 * (17500*√f´c)"
		document.getElementById('EcProceso').innerHTML = "Ec = 14.2233 * [17500* (√" + "" +fc+ " kg/cm<sup>2</sup>)] = " + ec + " psi"
    } else if (tipoagregado == "Grueso-metamórfico") {
		
		document.getElementById('EcEcuacion').innerHTML = "Ec = 14.2233 * (15000*√f´c)"
		document.getElementById('EcProceso').innerHTML = "Ec = 14.2233 * [15000* (√" + "" +fc+ " kg/cm<sup>2</sup>)] = " + ec + " psi"
        
    } else if (tipoagregado == "Grueso-sedimentario") {
		document.getElementById('EcEcuacion').innerHTML = "Ec = 14.2233 * (11500*√f´c)"
		document.getElementById('EcProceso').innerHTML = "Ec = 14.2233 * [11500* (√" + "(" +fc+ " kg/cm<sup>2</sup>)] = " + ec + " psi"
        
    } else if (tipoagregado == "Sin información") {
		document.getElementById('EcEcuacion').innerHTML = "Ec = 14.2233 * (12500*√f´c)"
		document.getElementById('EcProceso').innerHTML = "Ec = 14.2233 * [12500* (√" + "" +fc+ " kg/cm<sup>2</sup>)] = " + ec + " psi"
        
	}
	
	
	
//Coeficiente de transferencia de carga
if(recibeRango==1){
	recibeRangoCorregido = "es de " + recibeRango
} else {
	recibeRangoCorregido = "estará entre " + recibeRango
}
document.getElementById('coef_TransferenciaJ').innerHTML = "La normativa AASHTO 1998 recomienda que para un tipo de berma de " + recibeBerma + ", que " +recibeCarga + " presente dispositivo de carga y con un tipo de pavimento " + recibePavimento + ", el valor del coeficiente estructural " + recibeRangoCorregido + ", en este caso se asumió un valor de " +recibeValor 




	//Resultados
	var recibeEspesorLosa = document.getElementById('d').value;
	document.getElementById('txt_EspesorLosa').innerHTML = "<strong>" + "Espesor de losa de concreto: " + "</strong>" + recibeEspesorLosa + " in";
	document.getElementById('txt_EspesorLosa_copy').innerHTML = "<strong>" + "Espesor de losa de concreto: " + "</strong>" + recibeEspesorLosa + " in";
	var recibeEspesorFinal = document.getElementById('dr').value;
	document.getElementById('txt_EspesorFinal').innerHTML = "<strong>" + "Espesor de losa redondeado: " + "</strong>" + recibeEspesorFinal + " in";
	document.getElementById('txt_EspesorFinal_copy').innerHTML = "<strong>" + "Espesor de losa redondeado: " + "</strong>" + recibeEspesorFinal + " in";
	document.getElementById('explicacionEspesor').innerHTML = "El método gráfico permite determinar el espesor de la losa de hormigón con el ábaco que se ilustra en la figura " + numEspesor + ". Se necesita el módulo de reacción de la subrasante (Mr), módulo elástico del hormigón (Ec), módulo de rotura del hormigón (S), coeficiente de transferencia de carga (J), coeficiente de drenaje (Cd), índice de serviciabilidad (Δpsi), confiabilidad (R), desviación estándar (So), y el número de ejes equivalentes (ESAL´S)."
	document.getElementById('print_Espesor').innerHTML = "Para el trazado de este ábaco se debe empezar por dos lados y su intersección será el espesor de la losa de hormigón. El primer trazado empieza en el valor del módulo de reacción de la subrasante (" + recibeKCorregido + " pci)" + " , luego se traza una línea vertical hasta el módulo elástico del hormigón (" + recibeModuloElastico + " psi), se continúa trazando una línea horizontal hasta el borde de la cuadrícula, para luego trazar una línea diagonal que pase por el módulo de rotura (" + recibeModuloRotura + " psi). Este trazado se extiende hasta llegar a la primera línea de paso, luego se continúa trazando una línea diagonal que cruce el eje del coeficiente de transferencia de carga (" + recibeValor + "), extendiéndola hasta la segunda línea de paso. Desde este punto se traza otra línea diagonal que pase por el eje del coeficiente de drenaje (" + recibem3 + ") y llegue hasta la siguiente línea de paso. Finalmente se traza una línea diagonal que pase por el eje del índice de serviciabilidad (" + recibepsi + ") y llegue al borde vertical de la cuadrícula, a partir de la cual se traza una línea horizontal que debe intersecar el otro trazado. Por otro lado, el segundo trazado empieza con el valor de confiabilidad (" + recibeconfi + "), luego se traza una línea diagonal que pase por el eje de la desviación estándar (" + recibeSo + ") y llegue a la línea de paso. Finalmente desde ese punto se traza una línea diagonal pasando por el eje de número de ejes equivalente (" + recibeESALS + "), y que llegue hasta el borde horizontal de la cuadrícula. A partir de este punto se traza una línea vertical hasta intersecar la horizontal trazada previamente, y en donde se lee el espesor de losa igual a " + "<strong>" + recibeEspesorLosa + " in." + "</strong>, que redondeados sería "+ "<strong>" + recibeEspesorFinal + " in." + "</strong>";
	document.getElementById('numFiguraEspesor').innerHTML = "Figura " + numEspesor + ". Ábaco de diseño para la estimación del espesor de la losa de hormigón"
	var canvas_chartEspesor = document.getElementById('espesorFinalD');
	var URL_chartEspesor = canvas_chartEspesor.toDataURL('image5/jpeg');
	document.getElementById('copy_carta_Espesor').src = URL_chartEspesor;
	document.getElementById('explicaciónClcEspesor').innerHTML = "El W18 re refiere al número de ejes equivalentes de la flota de vehículos (" +recibeESALS + " ESAL´s), el ZR es la desviación normal estándar ("+recibeZr+"), el So es la desviación estándar ("+recibeSo+"), D es el espesor de la losa de hormigón que se desea calcular, Δpsi es el índice de serviciabilidad ("+recibepsi+"), pt es la serviciabilidad final ("+recibepf+"), Sc es el módulo de rotura ("+recibeModuloRotura+" psi), Cd es el coeficiente de drenaje ("+recibem3+"), J es el coeficiente de transferencia de carga ("+recibeValor+"), Ec es el módulo elástico del hormigón ("+recibeModuloElastico+" psi) y k es el módulo de reacción de la subrasante ("+recibeKCorregido+" pci). Reemplazando todas las variables e iterando mediante el método Newton-Raphson se tiene:"

	var printme1 = document.getElementById("titulo_principal_reporte_rigid");

	var printme2 = document.getElementById("resultadosTrafico");
	var requivalenciaAux = $(printme2).find('#resultadoequivalencia').html(); //Guarda temporalmente
	$(printme2).find('#resultadoequivalencia').html('');
	printme2Txt = $(printme2).html();
	$(printme2).find('#resultadoequivalencia').html(requivalenciaAux); //Restaura div
	var tablasEquivalencia = $('<div class="tab-content col-md-12" style="text-align:center"></div>');
	var ntabla = 0;
	$('.item-trafico').each(function(i, item){
		var interpolacion = $(item).attr('value') * 1;
		if(interpolacion > 0){
			ntabla = ntabla + 1;
			var index = $(item).attr('index');
			var eje = $(item).attr('eje');
			var item = listaVehiculos[index];
			var data = item['data' + eje];
			var pt_rigido = $('#trf_pt').val() * 1;
			var tiposEjes_rigido = $(this).attr('tiposEjes');
        
        if(tiposEjes_rigido == 1) {            
            var title = 'Tabla 1.' + ntabla + '. Factores de equivalencia de carga de eje para pavimentos flexibles, eje simple'+ " y pt = " + pt_rigido +", para un vehíchulo tipo " +item.tipo + ', eje ' + eje;
        } else if (tiposEjes_rigido == 2) {
            var title = 'Tabla 1.' + ntabla + '. Factores de equivalencia de carga de eje para pavimentos flexibles, eje tándem'+ " y pt = " + pt_rigido +", para un vehíchulo tipo " +item.tipo + ', eje ' + eje;
        } else if (tiposEjes_rigido == 3) {
            var title = 'Tabla 1.' + ntabla + '. Factores de equivalencia de carga de eje para pavimentos flexibles, eje triple'+ " y pt = " + pt_rigido +", para un vehíchulo tipo " +item.tipo + ', eje ' + eje;
        }
			
			CargarTablaEquivalencia(tablasEquivalencia, data, title);
		}
	});
	$("#tablasEquivalencia").css("text-align", "center");
	var printme3 = document.getElementById("titulo_drenajeSubBase_reporte_rigid");
	var printme4 = document.getElementById("print_drenaje_Subbase_rigid");
	
	var printme5 = document.getElementById("titulo_graficaSubbase_reporte_rigid");
	var contmat = $("#subbasematerial").text();
	if (contmat == ("Subbase granular")) {
		var canvas_chartBase = document.getElementById('subBaseGranular');
		var URL_chartBase = canvas_chartBase.toDataURL('image1/jpeg');
		document.getElementById('copy_carta_subbase_rigid').src = URL_chartBase;
	} else if (contmat == ("Subbase tratada con cemento")) {
		var canvas_chartBase = document.getElementById('subBaseCemento');
		var URL_chartBase = canvas_chartBase.toDataURL('image1/jpeg');
		document.getElementById('copy_carta_subbase_rigid').src = URL_chartBase;
	} else if (contmat == ("Subbase tratada con asfalto")) {
		var canvas_chartBase = document.getElementById('subBaseBituminoso');
		var URL_chartBase = canvas_chartBase.toDataURL('image1/jpeg');
		document.getElementById('copy_carta_subbase_rigid').src = URL_chartBase;
	}

	

	

	var printme6 = document.getElementById("titulo_graficaSubRasante_reporte_rigid");
	var printme7 = document.getElementById("titulo_graficaEspesor_reporte");

	
/** 
	print_ModuloReaccionCompuesto
	var canvas_chartSubbase = document.getElementById('id del canvas procedimientos');
	var URL_chartSubbase = canvas_chartSubbase.toDataURL('image1/jpeg');
	document.getElementById('id imagen en reportes').src = URL_chartSubbase;	

var canvas_chartModuloElastico = document.getElementById('chart_moduloElastico');
	var URL_chartModuloElastico = canvas_chartModuloElastico.toDataURL('image1/jpeg');
	document.getElementById('copy_carta_ModuloElastico').src = URL_chartModuloElastico;

	var canvas_chartSN = document.getElementById('chartSN');
	var URL_canvas_chartSN = canvas_chartSN.toDataURL('image1/jpeg');
	document.getElementById('copy_carta_SN').src = URL_canvas_chartSN;

	var printme9 = document.getElementById("titulo_graficaModuloElastico_reporte");
	var printme10 = document.getElementById("titulo_graficaSN_reporte");

	var printme11 = document.getElementById("titulo_clcSN_reporte");
	var printme12 = document.getElementById("copySN");
	var printme13 = document.getElementById("titulo_clcEspesor_reporte");
	var printme14 = document.getElementById("copyEspesor");
	
	+ printme6.innerHTML + printme7.innerHTML + printme8.innerHTML + printme9.innerHTML + printme10.innerHTML + printme11.innerHTML + printme12.innerHTML + printme13.innerHTML + printme14.innerHTML 
	*/
	
	var caratula = document.getElementById("ReporteCaratula_rigid");
	var declaracion = document.getElementById("ReporteDeclaracion_rigid");
	var wme = window.open('', 'Print-Window');

	
	wme.document.write('<html><head>\
	<title>Impimir</title>\
	<style type="text/css"> \
	@media print {@page {margin: 20mm 25mm 20mm 25mm;  }   }\
	a:link {color:black; text-decoration: none} \
	a:visited {color:black; text-decoration: none} \
	a:active {color:black; text-decoration: none}\
	a:hover {color:black; text-decoration: none}\
	tr.info, td.info{background-color:#e8e8e8}\
	</style>\
	</head><body onload="window.print()" >' + caratula.innerHTML + '<p style = "page-break-after: always;"> &nbsp; </ p>' + declaracion.innerHTML + '<p style = "page-break-after: always;"> &nbsp; </ p>' + printme.innerHTML + '<p style = "page-break-after: always;"> &nbsp; </ p>' + printme0.innerHTML + '<p style = "page-break-after: always;"> &nbsp; </ p>' 
	+ printme1.innerHTML + printme2Txt + tablasEquivalencia.html() + printme3.innerHTML + printme4.innerHTML + printme5.innerHTML + printme6.innerHTML + printme7.innerHTML 
	+ '</body></html>');

	wme.document.close();
	

	setTimeout(function () {
		wme.close();
	}, 10); 

}