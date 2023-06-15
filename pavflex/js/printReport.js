$(document).ready(function () {

});

function imprimir1() {
	var printme = document.getElementById("Reporte_variables_resultados");
	var printme0 = document.getElementById("ReporteResultados");
	//DATOS DEL PROYECTO
	var recibenombre = document.getElementById('datoNombre').value;
	document.getElementById('txtNombre').innerHTML = "<strong>" + "Nombre del proyecto:  " + "</strong>" + recibenombre;

	var recibeubicacion = document.getElementById('datoUbicacion').value;
	document.getElementById('txtUbicacion').innerHTML = "<strong>" + "Ubicación del proyecto:  " + "</strong>" + recibeubicacion;

	var reciberuta = document.getElementById('datoRuta').value;
	document.getElementById('txtRuta').innerHTML = "<strong>" + "Ruta:  " + "</strong>" + reciberuta;

	var recibetramo = document.getElementById('datoTramo').value;
	document.getElementById('txtTramo').innerHTML = "<strong>" + "Tramo:  " + "</strong>" + recibetramo;


	var recibeDiseñador = document.getElementById('datoDiseñador').value;
	document.getElementById('txtDiseñador').innerHTML = "<strong>" + "Diseñador:  " + "</strong>" + recibeDiseñador;

	if ((recibenombre === "") && (recibeubicacion === "") && (reciberuta === "") && (recibetramo === "") && (recibeDiseñador === "")) {
		$(".datosProyecto").hide();
	} else {
		$(".datosProyecto").show();
	}
	//FINNNN
	//Parámetros de diseño
	var recibepi = document.getElementById('pi').value;
	document.getElementById('txt_pi').innerHTML = "<strong>" + "Serviciabilidad inicial (pi): " + "</strong>" + recibepi;
	var recibepf = document.getElementById('pf').value;
	document.getElementById('txt_pf').innerHTML = "<strong>" + "Serviciabilidad final (pf): " + "</strong>" + recibepf;
	var recibepsi = document.getElementById('psi').value;
	document.getElementById('txt_psi').innerHTML = "<strong>" + "Índice de serviciabilidad (Δpsi): " + "</strong>" + recibepsi;
	var recibeconfi = document.getElementById('valorConfiabilidad').value;
	document.getElementById('txtConfi').innerHTML = "<strong>" + "Factor de confiabilidad: " + "</strong>" + recibeconfi;
	var recibeZr = document.getElementById('tipoConfiabilidad').value;
	document.getElementById('txtZr').innerHTML = "<strong>" + "Desviación normal estándar (Zr): " + "</strong>" + recibeZr;
	var recibeSo = document.getElementById('So_Flexible').value;
	document.getElementById('txtSo').innerHTML = "<strong>" + "Desviación estándar (So): " + "</strong>" + recibeSo;
	//FIN

	//Parametros de tráfico
	var recibeTMDA = document.getElementById('traficoTMDAflexible').value;
	document.getElementById('txtTMDA').innerHTML = "<strong>" + "Tráfico medio diario anual: " + "</strong>" + recibeTMDA+ " vehículos/día";
	var reciber = document.getElementById('traficoTasa_CreFlexible').value;
	document.getElementById('txt_r').innerHTML = "<strong>" + "Tasa de crecimiento vehicular: " + "</strong>" + reciber + " %";
	var recibePD = document.getElementById('traficoPeriodo_diseñoFlexible').value;
	document.getElementById('txtPD').innerHTML = "<strong>" + "Periodo de diseño: " + "</strong>" + recibePD + " años";
	var recibeD = document.getElementById('traficoDireccionalidadFlexible').value;
	document.getElementById('txtD').innerHTML = "<strong>" + "Direccionalidad: " + "</strong>" + recibeD + " %";
	var recibeptt = document.getElementById('trafico_ptFlexible').value;
	document.getElementById('txt_ptt').innerHTML = "<strong>" + "Serviciabilidad final (Pt): " + "</strong>" + recibeptt;
	var recibeSN = document.getElementById('traficoSN_Flexible').value;
	document.getElementById('txtSNtanteo').innerHTML = "<strong>" + "Número estructural (SN<sub>supuesto</sub>): " + "</strong>" + recibeSN;
	var recibeESALS = document.getElementById('Esals_Flexible').value;
	document.getElementById('txtESALS').innerHTML = "<strong>" + "Número de ejes equivalentes: " + "</strong>" + recibeESALS + " ESAL´S";

	if ((recibeTMDA === "") && (reciber === "") && (recibePD === "") && (recibeD === "") && (recibeSN === "")) {
			$(".ocultParametros_trafico").hide();	

	} else {		
		$(".ocultParametros_trafico").show();
	}
	//FIN

	//Parámetros de base

	var recibepropbase = $("#base_caracteristicas_td").text();
	if (recibepropbase == "CBR (%)") {
		recibepropbase = "CBR"
		var unidadbase = " %";
	} else {
		var unidadbase = "";
	}

	var recibepropvbase = document.getElementById('base_caracteristicas').value;
	document.getElementById('txt_propiedad_base').innerHTML = "<strong>" + recibepropbase + ": " + "</strong>" + recibepropvbase + unidadbase;
	var recibea2 = document.getElementById('a2').value;
	document.getElementById('txt_a2').innerHTML = "<strong>" + "Coeficiente estructural (a<sub>2</sub>): " + "</strong>" + recibea2;
	var recibeMb = document.getElementById('Mb').value;
	document.getElementById('txtMb').innerHTML = "<strong>" + "Módulo resiliente (Mb): " + "</strong>" + recibeMb + " psi";

	var recibecd = document.getElementById('select_drenaje_base').value;
	
	document.getElementById('txt_cd_base').innerHTML = "<strong>" + "Calidad del drenaje: " + "</strong>" + recibecd;
	var recibeps = document.getElementById('porcentaje_humedad_m2').value;
	document.getElementById('txt_porcentajeHumedad_base').innerHTML = "<strong>" + "Porcentaje de exposición de humedad próximos a la saturación: " + "</strong>" + recibeps + " %";
	var recibem2 = document.getElementById('m2').value;
	document.getElementById('txt_m2').innerHTML = "<strong>" + "Coeficiente de drenaje de base (m<sub>2</sub>): " + "</strong>" + recibem2;

	//FIN

	//Parámetros de subbase

	var recibepropsbase = $("#subbase_caracteristicas_td").text();
	if (recibepropsbase == "CBR (%)") {
		recibepropsbase = "CBR"
		var unidadsbase = " %";
	} else {
		var unidadsbase = "";
	}

	var recibepropvsbase = document.getElementById('subbase_caracteristicas').value;
	document.getElementById('txt_propiedad_subbase').innerHTML = "<strong>" + recibepropsbase + ": " + "</strong>" + recibepropvsbase + unidadsbase;
	var recibea3 = document.getElementById('a3').value;
	document.getElementById('txt_a3').innerHTML = "<strong>" + "Coeficiente estructural (a<sub>3</sub>): " + "</strong>" + recibea3;
	var recibeMsb = document.getElementById('Msb').value;
	document.getElementById('txtMsb').innerHTML = "<strong>" + "Módulo resiliente (Msb): " + "</strong>" + recibeMsb + " psi";

	var recibecds = document.getElementById('select_drenaje_subbase').value;
	document.getElementById('txt_cd_subbase').innerHTML = "<strong>" + "Calidad del drenaje: " + "</strong>" + recibecds;
	var recibepss = document.getElementById('porcentaje_humedad_m3').value;
	document.getElementById('txt_porcentajeHumedad_subbase').innerHTML = "<strong>" + "Porcentaje de exposición de humedad próximos a la saturación: " + "</strong>" + recibepss + " %";
	var recibem3 = document.getElementById('m3').value;
	document.getElementById('txt_m3').innerHTML = "<strong>" + "Coeficiente de drenaje de subbase (m<sub>3</sub>): " + "</strong>" + recibem3;

	//FIN

	//Parámetros de subrasante
	var recibeCBR = document.getElementById('subrasante_caracteristicas_flexible').value;
	document.getElementById('txt_CBR_subrasante').innerHTML = "<strong>" + "CBR: " + "</strong>" + recibeCBR + " %";
	var recibeMr = document.getElementById('Mr').value;
	document.getElementById('txtMr').innerHTML = "<strong>" + "Módulo resiliente (Mr): " + "</strong>" + recibeMr + " psi";
	//FIN

	//Parámetros de asfalto
	var recibeMe = document.getElementById('modulo_elastico_asfalto').value;
	document.getElementById('txt_Me').innerHTML = "<strong>" + "Módulo elástico: " + "</strong>" + recibeMe + " psi";
	var recibea1 = document.getElementById('a1').value;
	document.getElementById('txt_a1').innerHTML = "<strong>" + "Coeficiente estructural (a<sub>1</sub>): " + "</strong>" + recibea1;
	//FIN

	//Resultados
	var recibeSN3 = document.getElementById('sn3').value;
	document.getElementById('txtSN3').innerHTML = "<strong>" + "Número estructural total requerido (SN<sub>3</sub>): " + "</strong>" + recibeSN3;
	var recibeSN2 = document.getElementById('sn2').value;
	document.getElementById('txtSN2').innerHTML = "<strong>" + "Número estructural base y carpeta asfáltica (SN<sub>2</sub>): " + "</strong>" + recibeSN2;
	var recibeSN1 = document.getElementById('sn1').value;
	document.getElementById('txtSN1').innerHTML = "<strong>" + "Número estructural carpeta asfáltica (SN<sub>1</sub>): " + "</strong>" + recibeSN1;

	var recibeeA = document.getElementById('espesor_asfalto_clc').value;
	document.getElementById('txt_espesor_asfalto').innerHTML = "<strong>" + "Espesor de carpeta asfáltica: " + "</strong>" + recibeeA + " in";
	var recibeeB = document.getElementById('espesor_base_clc').value;
	document.getElementById('txt_espesor_base').innerHTML = "<strong>" + "Espesor de base: " + "</strong>" + recibeeB + " in";
	var recibeeSB = document.getElementById('espesor_subbase_clc').value;
	document.getElementById('txt_espesor_subbase').innerHTML = "<strong>" + "Espesor de subbase: " + "</strong>" + recibeeSB + " in";

	var recibeecA = document.getElementById('espesor_asfalto_recomendado').value;
	document.getElementById('txt_espesor_recomendado_asfalto').innerHTML = "<strong>" + "Espesor de carpeta asfáltica: " + "</strong>" + recibeecA + " in";
	var recibeecB = document.getElementById('espesor_base_recomendado').value;
	document.getElementById('txt_espesor_recomendado_base').innerHTML = "<strong>" + "Espesor de base: " + "</strong>" + recibeecB + " in";
	var recibeecSB = document.getElementById('espesor_subbase_recomendado').value;
	document.getElementById('txt_espesor_recomendado_subbase').innerHTML = "<strong>" + "Espesor de subbase: " + "</strong>" + recibeecSB + " in";
	//FIN
	var caratula = document.getElementById("ReporteCaratula");
	var declaracion = document.getElementById("ReporteDeclaracion");

	var wme = window.open('', 'Print-Window');
	wme.document.open();

	wme.document.write('<html><head><style type="text/css"> @media print {@page {margin: 20mm 25mm 20mm 25mm;  }   }</style></head><body onload="window.print()" >' + caratula.innerHTML + '<p style = "page-break-after: always;"> &nbsp; </ p>' + declaracion.innerHTML + '<p style = "page-break-after: always;"> &nbsp; </ p>' + printme.innerHTML + '<p style = "page-break-after: always;"> &nbsp; </ p>' + printme0.innerHTML + '</body></html>');
	wme.document.close();
	document.write

	setTimeout(function () {
		wme.close();
	}, 10);

}

function imprimir() {

	var printme = document.getElementById("Reporte_variables_resultados");
	var printme0 = document.getElementById("ReporteResultados");
	//DATOS DEL PROYECTO
	var recibenombre = document.getElementById('datoNombre').value;
	document.getElementById('txtNombre').innerHTML = "<strong>" + "Nombre del proyecto: " + "</strong>" + recibenombre;

	var recibeubicacion = document.getElementById('datoUbicacion').value;
	document.getElementById('txtUbicacion').innerHTML = "<strong>" + "Ubicación del proyecto: " + "</strong>" + recibeubicacion;

	var reciberuta = document.getElementById('datoRuta').value;
	document.getElementById('txtRuta').innerHTML = "<strong>" + "Ruta: " + "</strong>" + reciberuta;

	var recibetramo = document.getElementById('datoTramo').value;
	document.getElementById('txtTramo').innerHTML = "<strong>" + "Tramo: " + "</strong>" + recibetramo;


	var recibeDiseñador = document.getElementById('datoDiseñador').value;
	document.getElementById('txtDiseñador').innerHTML = "<strong>" + "Diseñador: " + "</strong>" + recibeDiseñador;

	if ((recibenombre === "") && (recibeubicacion === "") && (reciberuta === "") && (recibetramo === "") && (recibeDiseñador === "")) {
		$(".datosProyecto").hide();
	} else {
		$(".datosProyecto").show();
	}
	//FINNNN
	//Parámetros de diseño
	var recibepi = document.getElementById('pi').value;
	document.getElementById('txt_pi').innerHTML = "<strong>" + "Serviciabilidad inicial (pi): " + "</strong>" + recibepi;
	var recibepf = document.getElementById('pf').value;
	document.getElementById('txt_pf').innerHTML = "<strong>" + "Serviciabilidad final (pf): " + "</strong>" + recibepf;
	var recibepsi = document.getElementById('psi').value;
	document.getElementById('txt_psi').innerHTML = "<strong>" + "Índice de serviciabilidad (Δpsi): " + "</strong>" + recibepsi;
	var recibeconfi = document.getElementById('valorConfiabilidad').value;
	document.getElementById('txtConfi').innerHTML = "<strong>" + "Factor de confiabilidad: " + "</strong>" + recibeconfi;
	var recibeZr = document.getElementById('tipoConfiabilidad').value;
	document.getElementById('txtZr').innerHTML = "<strong>" + "Desviación normal estándar (Zr): " + "</strong>" + recibeZr;
	var recibeSo = document.getElementById('So_Flexible').value;
	document.getElementById('txtSo').innerHTML = "<strong>" + "Desviación estándar (So): " + "</strong>" + recibeSo;
	//FIN

	//Parametros de tráfico
	var recibeTMDA = document.getElementById('traficoTMDAflexible').value;	
	var reciber = document.getElementById('traficoTasa_CreFlexible').value;	
	var recibePD = document.getElementById('traficoPeriodo_diseñoFlexible').value;	
	var recibeD = document.getElementById('traficoDireccionalidadFlexible').value;	
	var recibeptt = document.getElementById('trafico_ptFlexible').value;	
	var recibeSN = document.getElementById('traficoSN_Flexible').value;	
	var recibeESALS = document.getElementById('Esals_Flexible').value;
	document.getElementById('txtTMDA').innerHTML = "<strong>" + "Tráfico medio diario anual: " + "</strong>" + recibeTMDA + " vehículos/día";
		document.getElementById('txt_r').innerHTML = "<strong>" + "Tasa de crecimiento vehicular: " + "</strong>" + reciber + " %";
		document.getElementById('txtPD').innerHTML = "<strong>" + "Periodo de diseño: " + "</strong>" + recibePD + " años";
		document.getElementById('txtD').innerHTML = "<strong>" + "Direccionalidad: " + "</strong>" + recibeD + " %";
		document.getElementById('txt_ptt').innerHTML = "<strong>" + "Serviciabilidad final (Pt): " + "</strong>" + recibeptt;
		document.getElementById('txtSNtanteo').innerHTML = "<strong>" + "Número estructural (SN<sub>supuesto</sub>): " + "</strong>" + recibeSN;

	document.getElementById('txtESALS').innerHTML = "<strong>" + "Número de ejes equivalentes: " + "</strong>" + recibeESALS + " ESAL´S";
	if ((recibeTMDA === "") && (reciber === "") && (recibePD === "") && (recibeD === "") && (recibeSN === "")) {
		$(".ESALS_flex").hide();
		$(".ocultParametros_trafico").hide();
		

	} else {
		$(".ESALS_flex").show();
		$("#aviso_ESALS").hide();
		$(".ocultParametros_trafico").show();
		
		
		
	}
	
	var print_proceso_Trafico = $("#trafico")
	if (print_proceso_Trafico.is(":visible")) {		    
		$("#aviso_ESALS").hide();
		
	} else {
		$("#aviso_ESALS").show();
	}
	//FIN

	//Parámetros de base

	var recibepropbase = $("#base_caracteristicas_td").text();
	if (recibepropbase == "CBR (%)") {
		recibepropbase = "CBR"
		var unidadbase = " %";
	} else {
		var unidadbase = "";
	}

	var recibepropvbase = document.getElementById('base_caracteristicas').value;
	document.getElementById('txt_propiedad_base').innerHTML = "<strong>" + recibepropbase + ": " + "</strong>" + recibepropvbase + unidadbase;

	var recibea2 = document.getElementById('a2').value;

	document.getElementById('txt_a2').innerHTML = "<strong>" + "Coeficiente estructural (a<sub>2</sub>): " + "</strong>" + recibea2;
	var recibeMb = document.getElementById('Mb').value;
	document.getElementById('txtMb').innerHTML = "<strong>" + "Módulo resiliente (Mb): " + "</strong>" + recibeMb + " psi";
	
	var recibecd = document.getElementById('select_drenaje_base').value;
	document.getElementById('txt_cd_base').innerHTML = "<strong>" + "Calidad del drenaje: " + "</strong>" + recibecd;
	var recibeps = document.getElementById('porcentaje_humedad_m2').value;
	document.getElementById('txt_porcentajeHumedad_base').innerHTML = "<strong>" + "Porcentaje de exposición de humedad próximos a la saturación: " + "</strong>" + recibeps + " %";
	var recibem2 = document.getElementById('m2').value;
	document.getElementById('txt_m2').innerHTML = "<strong>" + "Coeficiente de drenaje de base (m<sub>2</sub>): " + "</strong>" + recibem2;
	
	if(recibecd == "Excelente (2 horas)") {
		recibecd_minuscula = "excelente (2 horas)"
	} else if ((recibecd == "Buena (1 día)")){
		recibecd_minuscula = "buena (1 día)"
	} else if ((recibecd == "Aceptable (1 semana)")) {
		recibecd_minuscula = "aceptable (1 semana)"
	} else if ((recibecd == "Pobre (1 mes)")) {
		recibecd_minuscula = "pobre (1 mes)"
	} else if ((recibecd == "Muy pobre (el agua no drena)")) {
		recibecd_minuscula = "muy pobre (el agua no drena)"
	}
	//FIN

	//Parámetros de subbase

	var recibepropsbase = $("#subbase_caracteristicas_td").text();
	if (recibepropsbase == "CBR (%)") {
		recibepropsbase = "CBR"
		var unidadsbase = " %";
	} else {
		var unidadsbase = "";
	}

	var recibepropvsbase = document.getElementById('subbase_caracteristicas').value;
	document.getElementById('txt_propiedad_subbase').innerHTML = "<strong>" + recibepropsbase + ": " + "</strong>" + recibepropvsbase + unidadsbase;
	var recibea3 = document.getElementById('a3').value;
	document.getElementById('txt_a3').innerHTML = "<strong>" + "Coeficiente estructural (a<sub>3</sub>): " + "</strong>" + recibea3;
	var recibeMsb = document.getElementById('Msb').value;
	document.getElementById('txtMsb').innerHTML = "<strong>" + "Módulo resiliente (Msb): " + "</strong>" + recibeMsb + " psi";
	
	var recibecds = document.getElementById('select_drenaje_subbase').value;
	document.getElementById('txt_cd_subbase').innerHTML = "<strong>" + "Calidad del drenaje: " + "</strong>" + recibecds;
	var recibepss = document.getElementById('porcentaje_humedad_m3').value;
	document.getElementById('txt_porcentajeHumedad_subbase').innerHTML = "<strong>" + "Porcentaje de exposición de humedad próximos a la saturación: " + "</strong>" + recibepss + " %";
	var recibem3 = document.getElementById('m3').value;
	document.getElementById('txt_m3').innerHTML = "<strong>" + "Coeficiente de drenaje de subbase (m<sub>3</sub>): " + "</strong>" + recibem3;
	if(recibecds == "Excelente (2 horas)") {
		recibecds_minuscula = "excelente (2 horas)"
	} else if ((recibecds == "Buena (1 día)")){
		recibecds_minuscula = "buena (1 día)"
	} else if ((recibecds == "Aceptable (1 semana)")) {
		recibecds_minuscula = "aceptable (1 semana)"
	} else if ((recibecds == "Pobre (1 mes)")) {
		recibecds_minuscula = "pobre (1 mes)"
	} else if ((recibecds == "Muy pobre (el agua no drena)")) {
		recibecds_minuscula = "muy pobre (el agua no drena)"
	}
	//FIN

	//Parámetros de subrasante
	var recibeCBR = document.getElementById('subrasante_caracteristicas_flexible').value;
	document.getElementById('txt_CBR_subrasante').innerHTML = "<strong>" + "CBR: " + "</strong>" + recibeCBR + " %";
	var recibeMr = document.getElementById('Mr').value;
	document.getElementById('txtMr').innerHTML = "<strong>" + "Módulo resiliente (Mr): " + "</strong>" + recibeMr + " psi";
	var varsubr = parseFloat($('#subrasante_caracteristicas_flexible').val());
	if ((varsubr <= 10)) {
		document.getElementById('MrEcuacion_flex').innerHTML = "Mr = 1500 * CBR"
		document.getElementById('MrProceso_flex').innerHTML = "Mr = 1500 * " + "(" + recibeCBR + "%) = " + recibeMr + " psi"


	} else if ((10 < varsubr) && (varsubr <= 20)) {
		document.getElementById('MrEcuacion_flex').innerHTML = "Mr = 3000 * CBR"
		document.getElementById('MrProceso_flex').innerHTML = "Mr = 3000 * " + "(" + recibeCBR + "%) = " + recibeMr + " psi"

	} else if ((20 < varsubr) && (varsubr <= 100)) {
		document.getElementById('MrEcuacion_flex').innerHTML = "Mr = (4326 * Log(CBR^0.65))+241"
		document.getElementById('MrProceso_flex').innerHTML = "Mr = (4326 * Log(" + "(" + recibeCBR + "%)" + "^0.65))+241 = " + recibeMr + " psi"


	}
	//FIN

	//Parámetros de asfalto
	var recibeMe = document.getElementById('modulo_elastico_asfalto').value;
	document.getElementById('txt_Me').innerHTML = "<strong>" + "Módulo elástico: " + "</strong>" + recibeMe + " psi";
	var recibea1 = document.getElementById('a1').value;
	document.getElementById('txt_a1').innerHTML = "<strong>" + "Coeficiente estructural (a<sub>1</sub>): " + "</strong>" + recibea1;
	
	//FIN

	//Resultados
	var recibeSN3 = document.getElementById('sn3').value;
	document.getElementById('txtSN3').innerHTML = "<strong>" + "Número estructural total requerido (SN<sub>3</sub>): " + "</strong>" + recibeSN3;
	var recibeSN2 = document.getElementById('sn2').value;
	document.getElementById('txtSN2').innerHTML = "<strong>" + "Número estructural base y carpeta asfáltica (SN<sub>2</sub>): " + "</strong>" + recibeSN2;
	var recibeSN1 = document.getElementById('sn1').value;
	document.getElementById('txtSN1').innerHTML = "<strong>" + "Número estructural carpeta asfáltica (SN<sub>1</sub>): " + "</strong>" + recibeSN1;

	var recibeeA = document.getElementById('espesor_asfalto_clc').value;
	document.getElementById('txt_espesor_asfalto').innerHTML = "<strong>" + "Espesor de carpeta asfáltica: " + "</strong>" + recibeeA + " in";
	var recibeeB = document.getElementById('espesor_base_clc').value;
	document.getElementById('txt_espesor_base').innerHTML = "<strong>" + "Espesor de base: " + "</strong>" + recibeeB + " in";
	var recibeeSB = document.getElementById('espesor_subbase_clc').value;
	document.getElementById('txt_espesor_subbase').innerHTML = "<strong>" + "Espesor de subbase: " + "</strong>" + recibeeSB + " in";

	var recibeecA = document.getElementById('espesor_asfalto_recomendado').value;
	document.getElementById('txt_espesor_recomendado_asfalto').innerHTML = "<strong>" + "Espesor de carpeta asfáltica: " + "</strong>" + recibeecA + " in";
	var recibeecB = document.getElementById('espesor_base_recomendado').value;
	document.getElementById('txt_espesor_recomendado_base').innerHTML = "<strong>" + "Espesor de base: " + "</strong>" + recibeecB + " in";
	var recibeecSB = document.getElementById('espesor_subbase_recomendado').value;
	document.getElementById('txt_espesor_recomendado_subbase').innerHTML = "<strong>" + "Espesor de subbase: " + "</strong>" + recibeecSB + " in";

	
	//FIN
	document.getElementById('graphics8').style.display = 'none';
	document.getElementById('graphics9').style.display = 'none';
	document.getElementById('graphics10').style.display = 'none';
	document.getElementById('graphics11').style.display = 'none';

	var printme1 = document.getElementById("titulo_principal_reporte");
	var printme2 = document.getElementById("procesoTrafico");
	var requivalenciaAux = $(printme2).find('#Valores_factor_Equivalencia').html(); //Guarda temporalmente
	$(printme2).find('#Valores_factor_Equivalencia').html('');
	printme2Txt = $(printme2).html();
	$(printme2).find('#Valores_factor_Equivalencia').html(requivalenciaAux); //Restaura div
	var tablasEquivalencia = $('<div></div>');
	var ntabla = 0;
	$('.item-trafico').each(function (i, item) {
		var interpolacion = $(item).attr('value') * 1;
		if (interpolacion > 0) {
			ntabla = ntabla + 1;
			var pt = $('#trafico_ptFlexible').val() * 1;
			var index = $(item).attr('index');
			var eje = $(item).attr('eje');
			var tiposEjes = $(item).attr('tiposEjes');

			if (tiposEjes == 1) {
				var item = tipoVehiculos[index];
				var title = 'Tabla 1.' + ntabla + '. Factores de equivalencia de carga de eje para pavimentos flexibles, eje simple' + " y pt = " + pt + ". Para un vehículo tipo " + item.tipo + ', eje ' + eje;
			} else if (tiposEjes == 2) {
				var item = tipoVehiculos[index];
				var title = 'Tabla 1.' + ntabla + '. Factores de equivalencia de carga de eje para pavimentos flexibles, eje tándem' + " y pt = " + pt + ". Para un vehículo tipo " + item.tipo + ', eje ' + eje;
			} else if (tiposEjes == 3) {
				var item = tipoVehiculos[index];
				var title = 'Tabla 1.' + ntabla + '. Factores de equivalencia de carga de eje para pavimentos flexibles, eje triple' + " y pt = " + pt + ". Para un vehículo tipo " + item.tipo + ', eje ' + eje;
			}

			var item = tipoVehiculos[index];
			var data = item['data' + eje];

			CargarTablaF_Equivalencia(tablasEquivalencia, data, title);

		}
	});
	$("#tablasEquivalencia").css("text-align", "center");




	var contmat = $("#bcont").text();
	if (contmat == ("Base granular")) {
		var canvas_chartBase = document.getElementById('chartGranular');
		var URL_chartBase = canvas_chartBase.toDataURL('image1/jpeg');
		document.getElementById('copy_carta_base').src = URL_chartBase;
	} else if (contmat == ("Base tratada con cemento")) {
		var canvas_chartBase = document.getElementById('chartCemento');
		var URL_chartBase = canvas_chartBase.toDataURL('image1/jpeg');
		document.getElementById('copy_carta_base').src = URL_chartBase;
	} else if (contmat == ("Base tratada con asfálto")) {
		var canvas_chartBase = document.getElementById('chartBituminoso');
		var URL_chartBase = canvas_chartBase.toDataURL('image1/jpeg');
		document.getElementById('copy_carta_base').src = URL_chartBase;
	}

	var canvas_chartSubbase = document.getElementById('chart_subbase_Granular');
	var URL_chartSubbase = canvas_chartSubbase.toDataURL('image1/jpeg');
	document.getElementById('copy_carta_subbase').src = URL_chartSubbase;

	var canvas_chartModuloElastico = document.getElementById('chart_moduloElastico');
	var URL_chartModuloElastico = canvas_chartModuloElastico.toDataURL('image1/jpeg');
	document.getElementById('copy_carta_ModuloElastico').src = URL_chartModuloElastico;

	var canvas_chartSN = document.getElementById('chartSN');
	var URL_canvas_chartSN = canvas_chartSN.toDataURL('image1/jpeg');
	document.getElementById('copy_carta_SN').src = URL_canvas_chartSN;

	var addBase = $("#addBase")
	var addSubbase = $("#addSubbase")
	var contmat = $("#bcont").text();
	if (contmat == ("Base granular")) {
		contmat = "base granular"
	} else if (contmat == ("Base tratada con cemento")) {
		contmat = "base tratada con cemento"
	} else if (contmat == ("Base tratada con asfálto")) {
		contmat = "base tratada con asfálto"
	}
	if ((addBase.is(":checked")) && (addSubbase.is(":checked"))) {
		var printme3 = document.getElementById("titulo_drenajeBase_reporte");
		var printme4 = document.getElementById("print_drenaje_base");
		var printme5 = document.getElementById("titulo_drenajeSubbase_reporte");
		var printme6 = document.getElementById("print_drenaje_subbase");
		var printme7 = document.getElementById("titulo_graficaBase_reporte");
		var printme8 = document.getElementById("titulo_graficaSubbase_reporte");
		var numero_figura_sn = 4;
		document.getElementById('figura_carta_base').innerHTML = "Figura 1. Carta de diseño para parámetros de la base";
		document.getElementById('print_PropiedadBase').innerHTML = "Para el cálculo de estos parámetros existen tres ábacos diferentes, dependiendo de la característica del material de base. En este caso se trata de una " +contmat+ ", por lo que se usa la figura 1. En esta figura se traza una línea horizontal a partir del " + recibepropbase + " igual a " + recibepropvbase + unidadbase + "Esta línea debe alcanzar hasta el coeficiente estructural y el módulo resiliente, en donde se leen esos valores; por lo tanto, el valor de coeficiente estructural a<sub>2</sub> es igual a " + "<strong>" + recibea2 + "</strong>" + " y el módulo resiliente es igual a " + "<strong>" + recibeMb + " psi." + "</strong>";
		document.getElementById('figura_carta_subbase').innerHTML = "Figura 2. Carta de diseño para parámetros de la subbase";
		document.getElementById('print_PropiedadSubbase').innerHTML = "A diferencia de la capa base, para la determinación de estos parámetros existe solo un ábaco que también depende de párametros mecánicos del material. De manera similar al caso anterior, en la figura 2 se traza una línea horizontal con un " + recibepropsbase + " igual a " + recibepropvsbase + unidadsbase + ", con la que se obtiene un valor de coeficiente estructural a<sub>3</sub> igual a " + "<strong>" + recibea3 + "</strong>" + " y un módulo de resiliencia igual a " + "<strong>" + recibeMsb + " psi." + "</strong>";
		document.getElementById('figura_carta_moduloElastico').innerHTML = "Figura 3. Carta de diseño para estimación del módulo elástico de la carpeta asfáltica.";
		document.getElementById('print_PropiedadModuloElastico').innerHTML = "Para determinar el coeficiente estructural de carpeta asfáltica, el cual está en función del módulo elástico, se emplea el ábaco ilustrado en la figura 3. En dicho ábaco, con el valor correspondiente de módulo elástico igual a " + "<strong>" + recibeMe + " psi" + "</strong>" + " se traza una línea vertical hasta llegar a la curva, y luego una línea horizontal hasta llegar al eje vertical que corresponde al coeficiente estructural. En este caso el coeficiente estructural a<sub>1</sub> es igual a " + "<strong>" + recibea1 + ".</strong>";
		document.getElementById('print_SN').innerHTML = "En el ábaco se debe empezar ubicando el valor correspondiente de confiabilidad (" + recibeconfi + "), luego se traza una línea que pasa por la desviación estándar (" + recibeSo + ") y llegue a la primera línea de paso (TL). Desde ese punto se traza una línea que pase por el número de ejes equivalentes (" + recibeESALS + "), y que llegue hasta la segunda línea de paso (TL). A partir de este punto se traza otra línea que pase por el eje del módulo resiliente de la capa y llege al borde vertical de la cuadrícula. En la figura 4 se han trazado tres líneas que corresponden a los módulos resilientes de la subrasante, subbase y base. A partir del punto ubicado en la cuadrícula, se traza una línea horizontal hasta alcanzar la pérdida de serviciabilidad de diseño (" + recibepsi + "). Finalmente, en estas intersecciones se traza una línea vertical hasta llegar al número estructural y donde se leen los valores. En este caso, el SN<sub>1</sub> es igual a " + recibeSN1 + ", SN<sub>2</sub> es igual a " + recibeSN2 + " y SN<sub>3</sub> es igual a " + recibeSN3 + "."  ;
		document.getElementById('figura_carta_sn').innerHTML = "Figura 4. Carta de diseño para estimación del número estructural";
		
		if ((recibeTMDA === "") && (reciber === "") && (recibePD === "") && (recibeD === "") && (recibeSN === "")) {
			var tab_drenaje_base = 1
			var tab_drenaje_subbase = 2
			var numero_tabla_EspesirMin = 3
		} else {
			var tab_drenaje_base = 2
			var tab_drenaje_subbase = 3
			var numero_tabla_EspesirMin = 4
		}
		

	} else if ((addBase.is(":checked")) && (addSubbase.is(":not(:checked)"))) {
		var printme3 = document.getElementById("titulo_drenajeBase_reporte");
		var printme4 = document.getElementById("print_drenaje_base");
		var printme5 = document.getElementById("titulo_drenajeSubbase_vacio");
		var printme6 = document.getElementById("print_drenaje_subbase_vacio");
		var printme7 = document.getElementById("titulo_graficaBase_reporte");
		var printme8 = document.getElementById("titulo_graficaSubbase_vacia");
		var numero_figura_sn = 3;
		document.getElementById('figura_carta_base').innerHTML = "Figura 1. Carta de diseño para parámetros de la base";
		document.getElementById('print_PropiedadBase').innerHTML = "Para el cálculo de estos parámetros existen tres ábacos diferentes, dependiendo de la característica del material de base. En este caso se trata de una " +contmat+ ", por lo que se usa la figura 1. En esta figura se traza una línea horizontal a partir del " + recibepropbase + " igual a " + recibepropvbase + unidadbase + "Esta línea debe alcanzar hasta el coeficiente estructural y el módulo resiliente, en donde se leen esos valores; por lo tanto, el valor de coeficiente estructural a<sub>2</sub> es igual a " + "<strong>" + recibea2 + "</strong>" + " y el módulo resiliente es igual a " + "<strong>" + recibeMb + " psi." + "</strong>";
		document.getElementById('figura_carta_subbase').innerHTML = "Figura 2. Carta de diseño para parámetros de la subbase";
		document.getElementById('print_PropiedadSubbase').innerHTML = "A diferencia de la capa base, para la determinación de estos parámetros existe solo un ábaco que también depende de párametros mecánicos del material. De manera similar al caso anterior, en la figura 2 se traza una línea horizontal con un " + recibepropsbase + " igual a " + recibepropvsbase + unidadsbase + ", con la que se obtiene un valor de coeficiente estructural a<sub>3</sub> igual a " + "<strong>" + recibea3 + "</strong>" + " y un módulo de resiliencia igual a " + "<strong>" + recibeMsb + " psi." + "</strong>";
		document.getElementById('figura_carta_moduloElastico').innerHTML = "Figura 2. Carta de diseño para estimación del módulo elástico de la carpeta asfáltica.";
		document.getElementById('print_PropiedadModuloElastico').innerHTML = "Para determinar el coeficiente estructural de carpeta asfáltica, el cual está en función del módulo elástico, se emplea el ábaco ilustrado en la figura 2. En dicho ábaco, con el valor correspondiente de módulo elástico igual a " + "<strong>" + recibeMe + " psi" + "</strong>" + " se traza una línea vertical hasta llegar a la curva, y luego una línea horizontal hasta llegar al eje vertical que corresponde al coeficiente estructural. En este caso el coeficiente estructural a<sub>1</sub> es igual a " + "<strong>" + recibea1 + ".</strong>";
		document.getElementById('print_SN').innerHTML = "En el ábaco se debe empezar ubicando el valor correspondiente de confiabilidad (" + recibeconfi + "), luego se traza una línea que pasa por la desviación estándar (" + recibeSo + ") y llegue a la primera línea de paso (TL). Desde ese punto se traza una línea que pase por el número de ejes equivalentes (" + recibeESALS + "), y que llegue hasta la segunda línea de paso (TL). A partir de este punto se traza otra línea que pase por el eje del módulo resiliente de la capa y llege al borde vertical de la cuadrícula. En la figura 3 se han trazado dos líneas que corresponden a los módulos resilientes de la subrasante y base. A partir del punto ubicado en la cuadrícula, se traza una línea horizontal hasta alcanzar la pérdida de serviciabilidad de diseño (" + recibepsi + "). Finalmente, en estas intersecciones se traza una línea vertical hasta llegar al número estructural y en donde se leen los valores. En este caso, el SN<sub>1</sub> es igual a " + recibeSN1 + " y SN<sub>3</sub> es igual a " + recibeSN3 + "."  ;
		document.getElementById('figura_carta_sn').innerHTML = "Figura 3. Carta de diseño para estimación del número estructural";
		
		if ((recibeTMDA === "") && (reciber === "") && (recibePD === "") && (recibeD === "") && (recibeSN === "")) {
			var tab_drenaje_base = 1
			var tab_drenaje_subbase = 2
			var numero_tabla_EspesirMin = 2
		} else {
			var tab_drenaje_base = 2
			var tab_drenaje_subbase = 3
			var numero_tabla_EspesirMin = 3
		}

	} else if ((addSubbase.is(":checked")) && (addBase.is(":not(:checked)"))) {
		var printme3 = document.getElementById("titulo_drenajeBase_vacio");
		var printme4 = document.getElementById("print_drenaje_base_vacio");
		var printme5 = document.getElementById("titulo_drenajeSubbase_reporte");
		var printme6 = document.getElementById("print_drenaje_subbase");
		var printme7 = document.getElementById("titulo_graficaBase_vacia");
		var printme8 = document.getElementById("titulo_graficaSubbase_reporte");
		var numero_figura_sn = 3;
		document.getElementById('figura_carta_base').innerHTML = "Figura 1. Carta de diseño para parámetros de la base";
		document.getElementById('print_PropiedadBase').innerHTML = "Para el cálculo de estos parámetros existen tres ábacos diferentes, dependiendo de la característica del material de base. En este caso se trata de una " +contmat+ ", por lo que se usa la figura 1. En esta figura se traza una línea horizontal a partir del " + recibepropbase + " igual a " + recibepropvbase + unidadbase + "Esta línea debe alcanzar hasta el coeficiente estructural y el módulo resiliente, en donde se leen esos valores; por lo tanto, el valor de coeficiente estructural a<sub>2</sub> es igual a " + "<strong>" + recibea2 + "</strong>" + " y el módulo resiliente es igual a " + "<strong>" + recibeMb + " psi." + "</strong>";
		document.getElementById('figura_carta_subbase').innerHTML = "Figura 1. Carta de diseño para parámetros de la subbase";
		document.getElementById('print_PropiedadSubbase').innerHTML = "A diferencia de la capa base, para la determinación de estos parámetros existe solo un ábaco que también depende de párametros mecánicos del material. De manera similar al caso anterior, en la figura 1 se traza una línea horizontal con un " + recibepropsbase + " igual a " + recibepropvsbase + unidadsbase + ", con la que se obtiene un valor de coeficiente estructural a<sub>3</sub> igual a " + "<strong>" + recibea3 + "</strong>" + " y un módulo de resiliencia igual a " + "<strong>" + recibeMsb + " psi." + "</strong>";
		document.getElementById('figura_carta_moduloElastico').innerHTML = "Figura 2. Carta de diseño para estimación del módulo elástico de la carpeta asfáltica.";
		document.getElementById('print_PropiedadModuloElastico').innerHTML = "Para determinar el coeficiente estructural de carpeta asfáltica, el cual está en función del módulo elástico, se emplea el ábaco ilustrado en la figura 2. En dicho ábaco, con el valor correspondiente de módulo elástico igual a " + "<strong>" + recibeMe + " psi" + "</strong>" + " se traza una línea vertical hasta llegar a la curva, y luego una línea horizontal hasta llegar al eje vertical que corresponde al coeficiente estructural. En este caso el coeficiente estructural a<sub>1</sub> es igual a " + "<strong>" + recibea1 + ".</strong>";
		document.getElementById('print_SN').innerHTML = "En el ábaco se debe empezar ubicando el valor correspondiente de confiabilidad (" + recibeconfi + "), luego se traza una línea que pasa por la desviación estándar (" + recibeSo + ") y llegue a la primera línea de paso (TL). Desde ese punto se traza una línea que pase por el número de ejes equivalentes (" + recibeESALS + "), y que llegue hasta la segunda línea de paso (TL). A partir de este punto se traza otra línea que pase por el eje del módulo resiliente de la capa y llege al borde vertical de la cuadrícula. En la figura 3 se han trazado dos líneas que corresponden a los módulos resilientes de la subrasante y subbase. A partir del punto ubicado en de la cuadrícula, se traza una línea horizontal hasta alcanzar la pérdida de serviciabilidad de diseño (" + recibepsi + "). Finalmente, en estas intersecciones se traza una línea vertical hasta llegar al número estructural y en donde se leen los valores. En este caso, el SN<sub>2</sub> es igual a " + recibeSN2 +  " y SN<sub>3</sub> es igual a " + recibeSN3 + "."  ;
		document.getElementById('figura_carta_sn').innerHTML = "Figura 3. Carta de diseño para estimación del número estructural";
		
		if ((recibeTMDA === "") && (reciber === "") && (recibePD === "") && (recibeD === "") && (recibeSN === "")) {
			var tab_drenaje_base = 1
			var tab_drenaje_subbase = 1
			var numero_tabla_EspesirMin = 2
		} else {
			var tab_drenaje_base = 2
			var tab_drenaje_subbase = 2
			var numero_tabla_EspesirMin = 3
		}
	} else if ((addSubbase.is(":not(:checked)")) && (addBase.is(":not(:checked)"))) {
		var printme3 = document.getElementById("titulo_drenajeBase_vacio");
		var printme4 = document.getElementById("print_drenaje_base_vacio");
		var printme5 = document.getElementById("titulo_drenajeSubbase_vacio");
		var printme6 = document.getElementById("print_drenaje_subbase_vacio");
		var printme7 = document.getElementById("titulo_graficaBase_reporte");
		var printme8 = document.getElementById("titulo_graficaSubbase_vacia");
		var numero_figura_sn = 2;
		document.getElementById('figura_carta_base').innerHTML = "Figura 1. Carta de diseño para parámetros de la base";
		document.getElementById('print_PropiedadBase').innerHTML = "Para el cálculo de estos parámetros existen tres ábacos diferentes, dependiendo de la característica del material de base. En este caso se trata de una " +contmat+ ", por lo que se usa la figura 1. En esta figura se traza una línea horizontal a partir del " + recibepropbase + " igual a " + recibepropvbase + unidadbase + "Esta línea debe alcanzar hasta el coeficiente estructural y el módulo resiliente, en donde se leen esos valores; por lo tanto, el valor de coeficiente estructural a<sub>2</sub> es igual a " + "<strong>" + recibea2 + "</strong>" + " y el módulo resiliente es igual a " + "<strong>" + recibeMb + " psi." + "</strong>";
		document.getElementById('figura_carta_subbase').innerHTML = "Figura 1. Carta de diseño para parámetros de la subbase";
		document.getElementById('print_PropiedadSubbase').innerHTML = "A diferencia de la capa base, para la determinación de estos parámetros existe solo un ábaco que también depende de párametros mecánicos del material. De manera similar al caso anterior, en la figura 1 se traza una línea horizontal con un " + recibepropsbase + " igual a " + recibepropvsbase + unidadsbase + ", con la que se obtiene un valor de coeficiente estructural a<sub>3</sub> igual a " + "<strong>" + recibea3 + "</strong>" + " y un módulo de resiliencia igual a " + "<strong>" + recibeMsb + " psi." + "</strong>";
		document.getElementById('figura_carta_moduloElastico').innerHTML = "Figura 1. Carta de diseño para estimación del módulo elástico de la carpeta asfáltica.";
		document.getElementById('print_PropiedadModuloElastico').innerHTML = "Para determinar el coeficiente estructural de carpeta asfáltica, el cual está en función del módulo elástico, se emplea el ábaco ilustrado en la figura 1. En dicho ábaco, con el valor correspondiente de módulo elástico igual a " + "<strong>" + recibeMe + " psi" + "</strong>" + " se traza una línea vertical hasta llegar a la curva, y luego una línea horizontal hasta llegar al eje vertical que corresponde al coeficiente estructural. En este caso el coeficiente estructural a<sub>1</sub> es igual a " + "<strong>" + recibea1 + ".</strong>";
		document.getElementById('print_SN').innerHTML = "En el ábaco se debe empezar ubicando el valor correspondiente de confiabilidad (" + recibeconfi + "), luego se traza una línea que pasa por la desviación estándar (" + recibeSo + ") y llegue a la primera línea de paso (TL). Desde ese punto se traza una línea que pase por el número de ejes equivalentes (" + recibeESALS + "), y que llegue hasta la segunda línea de paso (TL). A partir de este punto se traza otra línea que pase por el eje del módulo resiliente de la capa y llege al borde vertical de la cuadrícula. En la figura 2 se ha trazado una línea que corresponde al módulo resiliente de la subrasante. A partir del punto ubicado en de la cuadrícula, se traza una línea horizontal hasta alcanzar la pérdida de serviciabilidad de diseño (" + recibepsi + "). Finalmente, en esta intersección se traza una línea vertical hasta llegar al número estructural y en donde se lee el valor. En este caso, el SN<sub>3</sub> es igual a " + recibeSN3 + "."  ;
		document.getElementById('figura_carta_sn').innerHTML = "Figura 2. Carta de diseño para estimación del número estructural";
		
		if ((recibeTMDA === "") && (reciber === "") && (recibePD === "") && (recibeD === "") && (recibeSN === "")) {
			var tab_drenaje_base = 1
			var tab_drenaje_subbase = 1
			var numero_tabla_EspesirMin = 1
		} else {
			var tab_drenaje_base = 2
			var tab_drenaje_subbase = 2
			var numero_tabla_EspesirMin = 2
		}
	}
	document.getElementById('explicacionDrenaje_base').innerHTML = "Para la determinación de este parámetro se emplea la tabla " + tab_drenaje_base + ", la misma que está en función de la calidad del drenaje y el porcentaje de tiempo de exposición de la estructura a humedades próximas a la saturación. En este caso, la calidad del drenaje es " + recibecd_minuscula + " y, el porcentaje de tiempo de exposición de la estructura es del " + recibeps + " %." 
	document.getElementById('tab_drenaje_base').innerHTML = "Tabla " + tab_drenaje_base + ". Valores de coeficiente de drenaje para la base."
	document.getElementById('explicacionDrenaje_subbase').innerHTML = "Para la capa de subbase, la calidad del drenaje es " + recibecds_minuscula + " y el porcentaje de tiempo de exposición de la estructura es del " + recibepss + "%." + " A partir de estos datos y la tabla " +tab_drenaje_subbase+ " se determina el coeficiente de drenaje de esta capa." 
	document.getElementById('tab_drenaje_subbase').innerHTML = "Tabla " + tab_drenaje_subbase + ". Valores de coeficiente de drenaje."
	document.getElementById('explicacionSn').innerHTML = "Para calcular el número estructural por el método gráfico se usa el ábaco de la figura " + numero_figura_sn + ". En esta figura se pueden calcular los números estruturales de todas las capas del pavimento. Para ingresar a ella es necesario contar con el valor de confiabilidad (R), desviación estándar (So), número de ejes equivalentes (ESAL´S), módulo resiliente de la capa (Mr) y el índice de serviciabilidad (Δpsi)."
	
	
	var printme9 = document.getElementById("titulo_graficaModuloElastico_reporte");
	var printme10 = document.getElementById("titulo_graficaSN_reporte");

	var printme11 = document.getElementById("titulo_clcSN_reporte");
	var printme12 = document.getElementById("copySN");
	var printme13 = document.getElementById("titulo_clcEspesor_reporte");
	document.getElementById('numero-tabla_EspesirMin').innerHTML = "Tabla " + numero_tabla_EspesirMin + ". Valores mínimos de espesores de capas recomendados por la AASHTO."
	document.getElementById('explicación_espesor_minimo').innerHTML = "Para el cálculo del espesor de las capas del pavimento se usa el método de diseño por capas. Dado que no es práctico ni económico tener espesores de capas muy delgados, se deben considerar espesores mínimos de capas (ver tabla " +numero_tabla_EspesirMin+"). Cabe mencionar que los valores de los espesores deben redondearse a 0,5 pulgadas más cercano."
	$(".ocultar_explicación_espesor").hide();
	$(".explicacion_calculos").show();
	var printme14 = document.getElementById("copyEspesor");


	var caratula = document.getElementById("ReporteCaratula");
	var declaracion = document.getElementById("ReporteDeclaracion");
	var wme = window.open('', 'Print-Window');


	wme.document.write('<html><head><style type="text/css"> @media print {@page {margin: 20mm 25mm 20mm 25mm;  } } a:link {color:black; text-decoration: none} a:visited {color:black; text-decoration: none} a:active {color:black; text-decoration: none} a:hover {color:black; text-decoration: none}; </style> </head><body onload="window.print()" >' + caratula.innerHTML + '<p style = "page-break-after: always;"> &nbsp; </ p>' + declaracion.innerHTML + '<p style = "page-break-after: always;"> &nbsp; </ p>' + printme.innerHTML + '<p style = "page-break-after: always;"> &nbsp; </ p>' + printme0.innerHTML + '<p style = "page-break-after: always;"> &nbsp; </ p>' + printme1.innerHTML + printme2Txt + tablasEquivalencia.html() + printme3.innerHTML + printme4.innerHTML + printme5.innerHTML + printme6.innerHTML + printme7.innerHTML + printme8.innerHTML + printme9.innerHTML + printme10.innerHTML + printme11.innerHTML + printme12.innerHTML + printme13.innerHTML + printme14.innerHTML + '</body></html>');

	wme.document.close( document.getElementById('numero-tabla_EspesirMin').innerHTML = "",
	$(".ocultar_explicación_espesor").show(),
	$(".explicacion_calculos").hide());


	setTimeout(function () {
		wme.close();
	}, 10);

}