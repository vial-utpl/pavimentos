//Nueva funcion
function modulo_elastico() {
    var Mr = parseFloat($('#modelascarpeta').val()) - parseFloat(107365.434712621);
    var Mrt = parseFloat($('#modelascarpeta').val());
    if (107365.434712621 <= Mrt && Mrt <= 500000) {
        var resultado = polino8(0.202948127934633, 0.00000145311130139714, -0.00000000000929927397699858, 0.000000000000000103330377760333, -0.000000000000000000000872742154502837, 0.0000000000000000000000000044306848566805, -0.0000000000000000000000000000000127778560749968, 0.000000000000000000000000000000000000019361081833392, -0.0000000000000000000000000000000000000000000119892171311759, Mr)
        $("#coefEstrucCarpAsNDT").val(resultado.toFixed(3));
        $("#coefEstrucCarpAsFactor").val(resultado.toFixed(3));
        $("#coefEstrucCarpAsVida").val(resultado.toFixed(3));
        loadGraph10();

    } else {
        $("#coefEstrucCarpAsNDT").val("");
        $("#coefEstrucCarpAsFactor").val("");
        $("#coefEstrucCarpAsVida").val("");
        $("#modelascarpeta").val("");
        swal("Valores de módulo elastico entre 107365.434712621 y 500000 ");

    }
}

//************************ Valor de ZR ******************************
function ValorZr(){

	var valorCmb = document.getElementById("cmbconfia").value;

	if (valorCmb == 1) {
		document.getElementById("zr").value = 0;
		document.getElementById('recibeconf').innerHTML = "Confiabilidad: 50%";
		document.getElementById('recibeconf1').innerHTML = "Confiabilidad: 50%";
		document.getElementById('recibeconf2').innerHTML = "Confiabilidad: 50%";
		document.getElementById('recibeconf3').innerHTML = "Confiabilidad: 50%";
		document.getElementById('recibeconf4').innerHTML = "Confiabilidad: 50%";
		document.getElementById('recibeconf5').innerHTML = "Confiabilidad: 50%";
	} else if (valorCmb == 2) {
		document.getElementById("zr").value = -0.253;
		document.getElementById('recibeconf').innerHTML = "Confiabilidad: 60%";
		document.getElementById('recibeconf1').innerHTML = "Confiabilidad: 60%";
		document.getElementById('recibeconf2').innerHTML = "Confiabilidad: 60%";
		document.getElementById('recibeconf3').innerHTML = "Confiabilidad: 60%";
		document.getElementById('recibeconf4').innerHTML = "Confiabilidad: 60%";
		document.getElementById('recibeconf5').innerHTML = "Confiabilidad: 60%";

	} else if (valorCmb == 3) {
		document.getElementById("zr").value = -0.524;
		document.getElementById('recibeconf').innerHTML = "Confiabilidad: 70%";
		document.getElementById('recibeconf1').innerHTML = "Confiabilidad: 70%";
		document.getElementById('recibeconf2').innerHTML = "Confiabilidad: 70%";
		document.getElementById('recibeconf3').innerHTML = "Confiabilidad: 70%";
		document.getElementById('recibeconf4').innerHTML = "Confiabilidad: 70%";
		document.getElementById('recibeconf5').innerHTML = "Confiabilidad: 70%";

	} else if (valorCmb == 4) {
		document.getElementById("zr").value = -0.674;
		document.getElementById('recibeconf').innerHTML = "Confiabilidad: 75%";
		document.getElementById('recibeconf1').innerHTML = "Confiabilidad: 75%";
		document.getElementById('recibeconf2').innerHTML = "Confiabilidad: 75%";
		document.getElementById('recibeconf3').innerHTML = "Confiabilidad: 75%";
		document.getElementById('recibeconf4').innerHTML = "Confiabilidad: 75%";
		document.getElementById('recibeconf5').innerHTML = "Confiabilidad: 75%";

	} else if (valorCmb == 5) {
		document.getElementById("zr").value = -0.841;
		document.getElementById('recibeconf').innerHTML = "Confiabilidad: 80%";
		document.getElementById('recibeconf1').innerHTML = "Confiabilidad: 80%";
		document.getElementById('recibeconf2').innerHTML = "Confiabilidad: 80%";
		document.getElementById('recibeconf3').innerHTML = "Confiabilidad: 80%";
		document.getElementById('recibeconf4').innerHTML = "Confiabilidad: 80%";
		document.getElementById('recibeconf5').innerHTML = "Confiabilidad: 80%";

	} else if (valorCmb == 6) {
		document.getElementById("zr").value = -1.037;
		document.getElementById('recibeconf').innerHTML = "Confiabilidad: 85%";
		document.getElementById('recibeconf1').innerHTML = "Confiabilidad: 85%";
		document.getElementById('recibeconf2').innerHTML = "Confiabilidad: 85%";
		document.getElementById('recibeconf3').innerHTML = "Confiabilidad: 85%";
		document.getElementById('recibeconf4').innerHTML = "Confiabilidad: 85%";
		document.getElementById('recibeconf5').innerHTML = "Confiabilidad: 85%";

	} else if (valorCmb == 7) {
		document.getElementById("zr").value = -1.282;
		document.getElementById('recibeconf').innerHTML = "Confiabilidad: 90%";
		document.getElementById('recibeconf1').innerHTML = "Confiabilidad: 90%";
		document.getElementById('recibeconf2').innerHTML = "Confiabilidad: 90%";
		document.getElementById('recibeconf3').innerHTML = "Confiabilidad: 90%";
		document.getElementById('recibeconf4').innerHTML = "Confiabilidad: 90%";
		document.getElementById('recibeconf5').innerHTML = "Confiabilidad: 90%";

	} else if (valorCmb == 8) {
		document.getElementById("zr").value = -1.34;
		document.getElementById('recibeconf').innerHTML = "Confiabilidad: 91%";
		document.getElementById('recibeconf1').innerHTML = "Confiabilidad: 91%";
		document.getElementById('recibeconf2').innerHTML = "Confiabilidad: 91%";
		document.getElementById('recibeconf3').innerHTML = "Confiabilidad: 91%";
		document.getElementById('recibeconf4').innerHTML = "Confiabilidad: 91%";
		document.getElementById('recibeconf5').innerHTML = "Confiabilidad: 91%";

	} else if (valorCmb == 9) {
		document.getElementById("zr").value = -1.405;
		document.getElementById('recibeconf').innerHTML = "Confiabilidad: 92%";
		document.getElementById('recibeconf1').innerHTML = "Confiabilidad: 92%";
		document.getElementById('recibeconf2').innerHTML = "Confiabilidad: 92%";
		document.getElementById('recibeconf3').innerHTML = "Confiabilidad: 92%";
		document.getElementById('recibeconf4').innerHTML = "Confiabilidad: 92%";
		document.getElementById('recibeconf5').innerHTML = "Confiabilidad: 92%";

	} else if (valorCmb == 10) {
		document.getElementById("zr").value = -1.476;
		document.getElementById('recibeconf').innerHTML = "Confiabilidad: 93%";
		document.getElementById('recibeconf1').innerHTML = "Confiabilidad: 93%";
		document.getElementById('recibeconf2').innerHTML = "Confiabilidad: 93%";
		document.getElementById('recibeconf3').innerHTML = "Confiabilidad: 93%";
		document.getElementById('recibeconf4').innerHTML = "Confiabilidad: 93%";
		document.getElementById('recibeconf5').innerHTML = "Confiabilidad: 93%";

	} else if (valorCmb == 11) {
		document.getElementById("zr").value = -1.555;
		document.getElementById('recibeconf').innerHTML = "Confiabilidad: 94%";
		document.getElementById('recibeconf1').innerHTML = "Confiabilidad: 94%";
		document.getElementById('recibeconf2').innerHTML = "Confiabilidad: 94%";
		document.getElementById('recibeconf3').innerHTML = "Confiabilidad: 94%";
		document.getElementById('recibeconf4').innerHTML = "Confiabilidad: 94%";
		document.getElementById('recibeconf5').innerHTML = "Confiabilidad: 94%";

	} else if (valorCmb == 12) {
		document.getElementById("zr").value = -1.645;
		document.getElementById('recibeconf').innerHTML = "Confiabilidad: 95%";
		document.getElementById('recibeconf1').innerHTML = "Confiabilidad: 95%";
		document.getElementById('recibeconf2').innerHTML = "Confiabilidad: 95%";
		document.getElementById('recibeconf3').innerHTML = "Confiabilidad: 95%";
		document.getElementById('recibeconf4').innerHTML = "Confiabilidad: 95%";
		document.getElementById('recibeconf5').innerHTML = "Confiabilidad: 95%";

	} else if (valorCmb == 13) {
		document.getElementById("zr").value = -1.751;
		document.getElementById('recibeconf').innerHTML = "Confiabilidad: 96%";
		document.getElementById('recibeconf1').innerHTML = "Confiabilidad: 96%";
		document.getElementById('recibeconf2').innerHTML = "Confiabilidad: 96%";
		document.getElementById('recibeconf3').innerHTML = "Confiabilidad: 96%";
		document.getElementById('recibeconf4').innerHTML = "Confiabilidad: 96%";
		document.getElementById('recibeconf5').innerHTML = "Confiabilidad: 96%";

	} else if (valorCmb == 14) {
		document.getElementById("zr").value = -1.881;
		document.getElementById('recibeconf').innerHTML = "Confiabilidad: 97%";
		document.getElementById('recibeconf1').innerHTML = "Confiabilidad: 97%";
		document.getElementById('recibeconf2').innerHTML = "Confiabilidad: 97%";
		document.getElementById('recibeconf3').innerHTML = "Confiabilidad: 97%";
		document.getElementById('recibeconf4').innerHTML = "Confiabilidad: 97%";
		document.getElementById('recibeconf5').innerHTML = "Confiabilidad: 97%";

	} else if (valorCmb == 15) {
		document.getElementById("zr").value = -2.054;
		document.getElementById('recibeconf').innerHTML = "Confiabilidad: 98%";
		document.getElementById('recibeconf1').innerHTML = "Confiabilidad: 98%";
		document.getElementById('recibeconf2').innerHTML = "Confiabilidad: 98%";
		document.getElementById('recibeconf3').innerHTML = "Confiabilidad: 98%";
		document.getElementById('recibeconf4').innerHTML = "Confiabilidad: 98%";
		document.getElementById('recibeconf5').innerHTML = "Confiabilidad: 98%";

	} else if (valorCmb == 16) {
		document.getElementById("zr").value = -2.327;
		document.getElementById('recibeconf').innerHTML = "Confiabilidad: 99%";
		document.getElementById('recibeconf1').innerHTML = "Confiabilidad: 99%";
		document.getElementById('recibeconf2').innerHTML = "Confiabilidad: 99%";
		document.getElementById('recibeconf3').innerHTML = "Confiabilidad: 99%";
		document.getElementById('recibeconf4').innerHTML = "Confiabilidad: 99%";
		document.getElementById('recibeconf5').innerHTML = "Confiabilidad: 99%";

	} else if (valorCmb == 17) {
		document.getElementById("zr").value = -3.09;
		document.getElementById('recibeconf').innerHTML = "Confiabilidad: 99.9%";
		document.getElementById('recibeconf1').innerHTML = "Confiabilidad: 99.9%";
		document.getElementById('recibeconf2').innerHTML = "Confiabilidad: 99.9%";
		document.getElementById('recibeconf3').innerHTML = "Confiabilidad: 99.9%";
		document.getElementById('recibeconf4').innerHTML = "Confiabilidad: 99.9%";
		document.getElementById('recibeconf5').innerHTML = "Confiabilidad: 99.9%";

	} else if (valorCmb == 18) {
		document.getElementById("zr").value = -3.75;
		document.getElementById('recibeconf').innerHTML = "Confiabilidad: 99.99%";
		document.getElementById('recibeconf1').innerHTML = "Confiabilidad: 99.99%";
		document.getElementById('recibeconf2').innerHTML = "Confiabilidad: 99.99%";
		document.getElementById('recibeconf3').innerHTML = "Confiabilidad: 99.99%";
		document.getElementById('recibeconf4').innerHTML = "Confiabilidad: 99.99%";
		document.getElementById('recibeconf5').innerHTML = "Confiabilidad: 99.99%";
	}
}

function Habilitarsub(){
	var check = document.getElementById('agregarSubBase');
	var check2 = document.getElementById('agregarMaterial');
	var ayuda = document.getElementsByClassName('ayudaG1');
	EspesorTotal();

	if (check.checked ==true && check2.checked == false ) {
		document.getElementById('addSubBaseGraf').style.visibility = 'visible';
		document.getElementById('espesorSubBase').removeAttribute("disabled");
		
		document.getElementById('tablacomboSub').style.display = 'contents';
		document.getElementById('tablacomboSub1').style.display = 'contents';
		document.getElementById('tablacomboMej').style.display = 'none';
		document.getElementById('tablacomboMej1').style.display = 'none';
		//titutlo Subbase
		document.getElementById('titulosdegraf').innerHTML= 'Subrasante';
		document.getElementById('bloqueSubBase').style.backgroundColor = "#8A4B08";
		document.getElementById('bloquesubra').style.backgroundColor = "#CA5E06";
		document.getElementById('tituloaddSubra').innerHTML= 'SubBase';
		//CONDICIONES DE DRENAJE
		document.getElementById('MenuSub').setAttribute("data-toggle", "tab");
		document.getElementById('MenuMatMej').removeAttribute("data-toggle");
		//TABLA
		document.getElementById('TablaSub').style.display = 'inline';
		document.getElementById('TablaMaterial').style.display = 'none';
		//Ventana de ayuda
		ayuda[0].style.display='block';
		ayuda[1].style.display='block';

		//MENU CONDICONES DRENAJE
		document.getElementById('MenuSub').innerHTML= 'Subbase';
		document.getElementById('MenuMatMej').innerHTML = '';
		//Deshabilitar borde
		document.getElementById('espesorMaterial').style.borderColor = "";
		document.getElementById('espesorMaterial').style.boxShadow = "";
		document.getElementById('espesorMaterial').setAttribute("class","form-control form-control-sm");

		//Poner en 0
		document.getElementById('espesorMaterial').value = "";
		document.getElementById('humedad3').value = "";
		document.getElementById('coefDrenaMaterial').value = "";
		document.getElementById('cmbcalidre3').value = "selec";
		EspesorTotal();
	}else if (check.checked == false && check2.checked==false ) {
		document.getElementById('addSubBaseGraf').style.visibility = 'hidden';
		document.getElementById('espesorSubBase').setAttribute("disabled", "");

		document.getElementById('tablacomboSub').style.display = 'none';
		document.getElementById('tablacomboSub1').style.display = 'none';
		document.getElementById('tablacomboMej').style.display = 'none';
		document.getElementById('tablacomboMej1').style.display = 'none';


		//CONDICIONES DE DRENAJE

		document.getElementById('MenuSub').removeAttribute("data-toggle");
		document.getElementById('MenuMatMej').removeAttribute("data-toggle");

		//TABLA
		document.getElementById('TablaSub').style.display = 'none';
		document.getElementById('TablaMaterial').style.display = 'none';
		//Subrasante
		document.getElementById('tituloaddSubra').innerHTML= 'Subrasante';
		document.getElementById('bloquesubra').style.backgroundColor = "#8A4B08";

		//Ventana de ayuda
		ayuda[0].style.display='none';
		ayuda[1].style.display='none';
		//MENU CONDICONES DRENAJE
		document.getElementById('MenuSub').innerHTML= '';
		document.getElementById('MenuMatMej').innerHTML = '';

		//Deshabilitar borde
		document.getElementById('espesorMaterial').style.borderColor = "";
		document.getElementById('espesorMaterial').style.boxShadow = "";
		document.getElementById('espesorSubBase').style.borderColor = "";
		document.getElementById('espesorSubBase').style.boxShadow = "";
		document.getElementById('espesorMaterial').setAttribute("class","form-control form-control-sm");
		document.getElementById('espesorSubBase').setAttribute("class","form-control form-control-sm");

		//Poner en 0
		document.getElementById('espesorSubBase').value = "";//Poner en 0
		document.getElementById('espesorMaterial').value = "";

		document.getElementById('humedad2').value = "";//poner en 0 Humedad Subbase
		document.getElementById('coefDrenaSubBase').value = "";
		document.getElementById('cmbcalidre2').value = "selec";

		document.getElementById('humedad3').value = "";//Poner en 0 Humedad Material
		document.getElementById('coefDrenaMaterial').value = "";
		document.getElementById('cmbcalidre3').value = "selec";
		EspesorTotal();
	}else if(check.checked == false && check2.checked == true){
		document.getElementById('addSubBaseGraf').style.visibility = 'visible';

		document.getElementById('addMaterialGraf').style.visibility = 'hidden';
		document.getElementById('espesorSubBase').setAttribute("disabled", "");

		//titutlo Subbase
		document.getElementById('tituloaddSubra').innerHTML= 'Material de Mejoramiento';
		document.getElementById('titulosdegraf').innerHTML= 'Subrasante';
		document.getElementById('bloqueSubBase').style.backgroundColor = "#8A4B08";
		document.getElementById('bloquesubra').style.backgroundColor = "#CA5E06";

		//CONDICIONES DE DRENAJE
		document.getElementById('MenuSub').removeAttribute("data-toggle");
		document.getElementById('MenuMatMej').setAttribute("data-toggle", "tab");

		//TABLA
		document.getElementById('TablaSub').style.display = 'none';
		document.getElementById('TablaMaterial').style.display = 'inline';

		//Ventana de ayuda
		ayuda[0].style.display='none';
		ayuda[1].style.display='none';

		document.getElementById('tablacomboMej').style.display = 'table-row';
		document.getElementById('tablacomboMej1').style.display = 'table-row';
		document.getElementById('tablacomboSub').style.display = 'none';
		document.getElementById('tablacomboSub1').style.display = 'none';
		//MENU CONDICONES DRENAJE
		document.getElementById('MenuSub').innerHTML= '';
		document.getElementById('MenuMatMej').innerHTML = 'Material de Mejoramiento';

		//Deshabilitar borde
		document.getElementById('espesorSubBase').style.borderColor = "";
		document.getElementById('espesorSubBase').style.boxShadow = "";
		document.getElementById('espesorSubBase').setAttribute("class","form-control form-control-sm");

		//Poner en 0
		document.getElementById('espesorSubBase').value = "";//Poner en 0

		document.getElementById('humedad2').value = "";//poner en 0 Humedad Subbase
		document.getElementById('coefDrenaSubBase').value = "";
		document.getElementById('cmbcalidre2').value = "selec";
		EspesorTotal();
	}else if(check.checked == true && check2.checked == true){
		document.getElementById('addSubBaseGraf').style.visibility = 'visible';
		document.getElementById('addMaterialGraf').style.visibility = 'visible';
		//titutlo Subbase
		document.getElementById('titulosdegraf').innerHTML= 'SubBase';
		document.getElementById('espesorSubBase').removeAttribute("disabled");

		//CONDICIONES DE DRENAJE

		document.getElementById('MenuSub').setAttribute("data-toggle", "tab");
		document.getElementById('MenuMatMej').setAttribute("data-toggle", "tab");

		//TABLA
		document.getElementById('TablaSub').style.display = 'inline';
		document.getElementById('TablaMaterial').style.display = 'inline';

		document.getElementById('tablacomboMej').style.display = 'table-row';
		document.getElementById('tablacomboMej1').style.display = 'table-row';
		document.getElementById('tablacomboSub').style.display = 'contents';
		document.getElementById('tablacomboSub1').style.display = 'contents';
		
		//Ventana de ayuda
		ayuda[0].style.display='block';
		ayuda[1].style.display='block';
		//MENU CONDICONES DRENAJE
		document.getElementById('MenuSub').innerHTML= 'Subbase';
		document.getElementById('MenuMatMej').innerHTML = 'Material de Mejoramiento';
		//ANIADIR CAPAS
		document.getElementById('tituloaddMat').innerHTML = 'Subrasante';
		document.getElementById('titulosdegraf').innerHTML = 'Material de Mejoramiento';
		document.getElementById('tituloaddSubra').innerHTML = 'Subbase';
		document.getElementById('bloqueMaterial').style.backgroundColor = "#8A4B08";
		document.getElementById('bloqueSubBase').style.backgroundColor = "#556B2F";
		EspesorTotal();
	}
}

function HabilitarMat(){
	var check2 = document.getElementById('agregarMaterial');
	var check1 = document.getElementById('agregarSubBase');
	EspesorTotal();

	if (check2.checked ==true && check1.checked == false  ) {
		document.getElementById('addSubBaseGraf').style.visibility = 'visible';
		document.getElementById('espesorMaterial').removeAttribute("disabled");

		//titulo
		document.getElementById('titulosdegraf').innerHTML= 'Material De Mejoramiento';
		//habilitar
		document.getElementById('tablacomboMej').style.display = 'table-row';
		document.getElementById('tablacomboMej1').style.display = 'table-row';
		document.getElementById('tablacomboSub').style.display = 'none';
		document.getElementById('tablacomboSub1').style.display = 'none';
		//CONDICIONES DE DRENAJE

		document.getElementById('MenuMatMej').setAttribute("data-toggle", "tab");
		document.getElementById('MenuSub').removeAttribute("data-toggle");

		//TABLA
		document.getElementById('TablaMaterial').style.display = 'inline';
		document.getElementById('TablaSub').style.display = 'none';

		//MENU CONDICONES DRENAJE
		document.getElementById('MenuMatMej').innerHTML = 'Material de Mejoramiento';
		document.getElementById('MenuSub').innerHTML= '';

		//ANIADIR CAPAS
		document.getElementById('tituloaddSubra').innerHTML = 'Material de Mejoramiento';
		document.getElementById('titulosdegraf').innerHTML = 'Subrasante';

		document.getElementById('bloquesubra').style.backgroundColor = "#CA5E06";
		document.getElementById('bloqueSubBase').style.backgroundColor = "#8A4B08";

		//Deshabilitar borde
		document.getElementById('espesorSubBase').style.borderColor = "";
		document.getElementById('espesorSubBase').style.boxShadow = "";
		document.getElementById('espesorSubBase').setAttribute("class","form-control form-control-sm");

		//Poner en 0
		document.getElementById('espesorSubBase').value = "";

		document.getElementById('humedad2').value = "";//poner en 0 Humedad Subbase
		document.getElementById('coefDrenaSubBase').value = "";
		document.getElementById('cmbcalidre2').value = "selec";
		EspesorTotal();
	}else if(check2.checked ==false && check1.checked == true){
		document.getElementById('addMaterialGraf').style.visibility = 'hidden';
		document.getElementById('addSubBaseGraf').style.visibility = 'visible';
		
		document.getElementById('espesorMaterial').setAttribute("disabled", "");

		//titulo
		document.getElementById('titulosdegraf').innerHTML= 'SubBase';

		//desabilitar		
		document.getElementById('tablacomboMej').style.display = 'none';
		document.getElementById('tablacomboMej1').style.display = 'none';
		document.getElementById('tablacomboSub').style.display = 'contents';
		document.getElementById('tablacomboSub1').style.display = 'contents';

		//CONDICIONES DE DRENAJE
		document.getElementById('MenuMatMej').removeAttribute("data-toggle");
		document.getElementById('MenuSub').setAttribute("data-toggle", "tab");

		//TABLA
		document.getElementById('TablaMaterial').style.display = 'none';
		document.getElementById('TablaSub').style.display = 'inline';
		//MENU CONDICONES DRENAJE
		document.getElementById('MenuMatMej').innerHTML = '';
		document.getElementById('MenuSub').innerHTML= 'Subbase';
		//ANIADIR CAPAS
		document.getElementById('tituloaddMat').innerHTML = 'Material de Mejoramiento';
		document.getElementById('titulosdegraf').innerHTML = 'Subrasante';
		document.getElementById('bloquesubra').style.backgroundColor = "#CA5E06";
		document.getElementById('bloqueSubBase').style.backgroundColor = "#8A4B08";

		//Deshabilitar borde
		document.getElementById('espesorMaterial').style.borderColor = "";
		document.getElementById('espesorMaterial').style.boxShadow = "";
		document.getElementById('espesorMaterial').setAttribute("class","form-control form-control-sm");

		//Poner en 0
		document.getElementById('espesorMaterial').value = "";

		document.getElementById('humedad3').value = "";//Poner en 0 Humedad Material
		document.getElementById('coefDrenaMaterial').value = "";
		document.getElementById('cmbcalidre3').value = "selec";
		EspesorTotal();
	}else if (check2.checked == false && check1.checked==false ) {
		document.getElementById('addSubBaseGraf').style.visibility = 'hidden';
		document.getElementById('addMaterialGraf').style.visibility = 'hidden';
		//COMBO MEJ
		document.getElementById('tablacomboMej').style.display = 'none';
		document.getElementById('tablacomboMej1').style.display = 'none';
		document.getElementById('tablacomboSub').style.display = 'none';
		document.getElementById('tablacomboSub1').style.display = 'none';

		document.getElementById('espesorMaterial').setAttribute("disabled", "");
		//deshabilitar
		document.getElementById('bloquesubra').style.backgroundColor = "#8A4B08";

		//CONDICIONES DE DRENAJE

		document.getElementById('MenuMatMej').removeAttribute("data-toggle");
		document.getElementById('MenuSub').removeAttribute("data-toggle");

		//TABLA
		document.getElementById('TablaMaterial').style.display = 'none';
		document.getElementById('TablaSub').style.display = 'none';
		//MENU CONDICONES DRENAJE
		document.getElementById('MenuMatMej').innerHTML = '';
		document.getElementById('MenuSub').innerHTML= '';
		//ANIADIR CAPAS
		document.getElementById('tituloaddSubra').innerHTML = 'Subrasante';

		//Deshabilitar borde
		document.getElementById('espesorMaterial').style.borderColor = "";
		document.getElementById('espesorMaterial').style.boxShadow = "";
		document.getElementById('espesorSubBase').style.borderColor = "";
		document.getElementById('espesorSubBase').style.boxShadow = "";
		document.getElementById('espesorMaterial').setAttribute("class","form-control form-control-sm");
		document.getElementById('espesorSubBase').setAttribute("class","form-control form-control-sm");

		//Poner en 0
		document.getElementById('espesorSubBase').value = "";
		document.getElementById('espesorMaterial').value = "";

		document.getElementById('humedad3').value = "";//Poner en 0 Humedad Material
		document.getElementById('coefDrenaMaterial').value = "";
		document.getElementById('cmbcalidre3').value = "selec";

		document.getElementById('humedad2').value = "";//poner en 0 Humedad Subbase
		document.getElementById('coefDrenaSubBase').value = "";
		document.getElementById('cmbcalidre2').value = "selec";
		EspesorTotal();
	}else if (check2.checked ==true && check1.checked == true) {
		document.getElementById('addSubBaseGraf').style.visibility = 'visible';
		document.getElementById('addMaterialGraf').style.visibility = 'visible';
		document.getElementById('espesorMaterial').removeAttribute("disabled");
		//habilitar
		document.getElementById('tablacomboMej').style.display = 'table-row';
		document.getElementById('tablacomboMej1').style.display = 'table-row';
		document.getElementById('tablacomboSub').style.display = 'contents';
		document.getElementById('tablacomboSub1').style.display = 'contents';

		//CONDICIONES DE DRENAJE

		document.getElementById('MenuMatMej').setAttribute("data-toggle", "tab");
		document.getElementById('MenuSub').setAttribute("data-toggle", "tab");

		//TABLA
		document.getElementById('TablaMaterial').style.display = 'inline';
		document.getElementById('TablaSub').style.display = 'inline';
		//MENU CONDICONES DRENAJE
		document.getElementById('MenuMatMej').innerHTML = 'Material de Mejoramiento';
		document.getElementById('MenuSub').innerHTML= 'Subbase';
		//ANIADIR CAPAS
		document.getElementById('tituloaddMat').innerHTML = 'Subrasante';
		document.getElementById('titulosdegraf').innerHTML = 'Material De Mejoramiento';
		document.getElementById('tituloaddSubra').innerHTML = 'Subbase';

		document.getElementById('bloqueMaterial').style.backgroundColor = "#8A4B08";
		document.getElementById('bloqueSubBase').style.backgroundColor = "#556B2F";
		EspesorTotal();
	}	
}

function VentanaCoefDrena(){
	document.getElementById("navCoefDrena").className="active";
	document.getElementById("navFacTemperatura").className="";
	document.getElementById("navEpMr").className="";
	document.getElementById("navSnFuturo").className="";
	document.getElementById("navCoefEstructural").className="";
	document.getElementById("navVidaRemanante").className="";
	document.getElementById("navNDT").className="";

	var CoefDrena = document.getElementById("menuCoefDrena").getAttribute("aria-expanded");
	var FacTemperatura = document.getElementById("menuFacTemperatura").getAttribute("aria-expanded");
	var EpMr = document.getElementById("menuEpMr").getAttribute("aria-expanded");
	var SnFuturo = document.getElementById("menuSnFuturo").getAttribute("aria-expanded");
	var CoefEstructural = document.getElementById("menuCoefEstructural").getAttribute("aria-expanded");
	var VidaRemanante = document.getElementById("menuVidaRemanante").getAttribute("aria-expanded");
	var NDT = document.getElementById("menuNDT").getAttribute("aria-expanded");

	if (CoefDrena == "false"){
		CoefDrena = "true";
		FacTemperatura = "false";
		EpMr = "false";
		SnFuturo = "false";
		CoefEstructural = "false";
		VidaRemanante = "false";
		NDT = "false";
	} else {
		CoefDrena = "true";
	}

	document.getElementById("menuCoefDrena").setAttribute("aria-expanded",CoefDrena);
	document.getElementById("menuFacTemperatura").setAttribute("aria-expanded",FacTemperatura);
	document.getElementById("menuEpMr").setAttribute("aria-expanded",EpMr);
	document.getElementById("menuSnFuturo").setAttribute("aria-expanded",SnFuturo);
	document.getElementById("menuCoefEstructural").setAttribute("aria-expanded",CoefEstructural);
	document.getElementById("menuVidaRemanante").setAttribute("aria-expanded",VidaRemanante);
	document.getElementById("menuNDT").setAttribute("aria-expanded",NDT);
}

function desHabilitarMetodos(){
	document.getElementById("botonNDT").style.visibility = "hidden";
	document.getElementById("botonVida").style.visibility = "hidden";
	document.getElementById("botonFactor").style.visibility = "hidden";
}

function habilitarMetodos(){
	document.getElementById("botonNDT").style.visibility = "visible";
	document.getElementById("botonVida").style.visibility = "visible";
	document.getElementById("botonFactor").style.visibility = "visible";
}

function CalcularDrenaje(){
	var check = document.getElementById('agregarSubBase');
	var check2 = document.getElementById('agregarMaterial');
	var ayuda = document.getElementsByClassName('ayudaG1');

	//SubBase activada
	if (check.checked ==true && check2.checked == false ) {
		if (
		//Nav Base
		document.getElementById("cmbcalidre").value == "selec" ||
		document.getElementById("humedad").value == "" || 
		//Nav SubBase
		document.getElementById("cmbcalidre2").value == "selec" ||
		document.getElementById("humedad2").value == "" 
		) 
		{
			sweetAlert("Campos vacíos", "Por favor, complete todos los espacios necesarios", "error");
			desHabilitarMetodos();
		}else{
			habilitarMetodos();
		}
	//Todos desactivados		
	}else if (check.checked == false && check2.checked==false ) {
		if (
			//Nav Base
			document.getElementById("cmbcalidre").value == "selec" ||
			document.getElementById("humedad").value == "" 
			) 
		{
			sweetAlert("Campos vacíos", "Por favor, complete todos los espacios necesarios", "error");
			desHabilitarMetodos();	
		}else{
			habilitarMetodos();
		}
		//Mejoramiento activado	
	}else if(check.checked == false && check2.checked == true){
		if (
			//Nav Base
			document.getElementById("cmbcalidre").value == "selec" ||
			document.getElementById("humedad").value == "" || 
			//Nav Material de mejoramiento
			document.getElementById("cmbcalidre3").value == "selec"||
			document.getElementById("humedad3").value == "" 
			) 
		{
			sweetAlert("Campos vacíos", "Por favor, complete todos los espacios necesarios", "error");
			desHabilitarMetodos();
		}else{
			habilitarMetodos();
		}
		//SubBase y Mejoramiento activados	
	}else if(check.checked == true && check2.checked == true){
		if (
			//Nav Base
			document.getElementById("cmbcalidre").value == "selec" ||
			document.getElementById("humedad").value == "" || 
			//Nav SubBase
			document.getElementById("cmbcalidre2").value == "selec" ||
			document.getElementById("humedad2").value == "" ||
			//Nav Material de mejoramiento
			document.getElementById("cmbcalidre3").value == "selec" ||
			document.getElementById("humedad3").value == ""
			) 
		{
			sweetAlert("Campos vacíos", "Por favor, complete todos los espacios necesarios", "error");
			desHabilitarMetodos();
		}else{
			habilitarMetodos();
		}
	}
}

function CalcularFactorCondicion(){
	var check = document.getElementById('agregarSubBase');
	var check2 = document.getElementById('agregarMaterial');
	var ayuda = document.getElementsByClassName('ayudaG1');

	//Validacion tipo de base
	if (document.getElementById("cmbBases").value == 1) {
		//SubBase activada
		if (check.checked ==true && check2.checked == false ) {
			if (
			//SubBase pantalla principal
			document.getElementById("espesorSubBase").value == "" || 	
			//Nav Base
			document.getElementById("cmbcalidre").value == "selec" ||
			document.getElementById("humedad").value == "" || 
			//Nav SubBase
			document.getElementById("cmbcalidre2").value == "selec" ||
			document.getElementById("humedad2").value == "" ||
			//Body FC
			document.getElementById("cmbConcretoFactor").value == "selec" ||
			document.getElementById("coefEstrucCarpAs").value == "" || 
			document.getElementById("cmbGranularFactor").value == "selec" ||
			document.getElementById("coefBaseGra").value == "" || 
			document.getElementById("coefEstrucCarpAsFactor").value == "" ||
			//Body FC SubBase
			document.getElementById("cmbSubGranularFactor").value == "" ||
			document.getElementById("coefSubBase").value == "" 
			) 
			{
				sweetAlert("Campos vacíos", "Por favor, complete todos los espacios necesarios", "error");
				//Limpia Body FC
				document.getElementById("snefFactorCondi").value = ""; 
				document.getElementById("espFinalFactor").value = ""; 
				document.getElementById('coefEstrucCarpAs').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefBaseGra').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefEstrucCarpAsFactor').setAttribute("class","form-control form-control-sm validar");
				//subbase
				document.getElementById('coefSubBase').setAttribute("class","form-control form-control-sm validar");
				ValidarCamposConModal();
			}else{
				SnefFactorCondicion();
				EspesorSobreCFactor();
				ValidarCamposConModal();
				document.getElementById('coefEstrucCarpAs').setAttribute("class","");
				document.getElementById('coefBaseGra').setAttribute("class","");
				document.getElementById('coefEstrucCarpAsFactor').setAttribute("class","");
				//subbase
				document.getElementById('coefSubBase').setAttribute("class","");
			}
		//Todos desactivados		
		}else if (check.checked == false && check2.checked==false ) {
			if (
				//Nav Base
				document.getElementById("cmbcalidre").value == "selec" ||
				document.getElementById("humedad").value == "" || 
				//Body FC
				document.getElementById("cmbConcretoFactor").value == "selec" ||
				document.getElementById("coefEstrucCarpAs").value == "" || 
				document.getElementById("cmbGranularFactor").value == "selec" ||
				document.getElementById("coefBaseGra").value == "" || 
				document.getElementById("coefEstrucCarpAsFactor").value == "" 
				) 
			{
				sweetAlert("Campos vacíos", "Por favor, complete todos los espacios necesarios", "error");
				//Limpia Body FC
				document.getElementById("snefFactorCondi").value = ""; 
				document.getElementById("espFinalFactor").value = "";
				document.getElementById('coefEstrucCarpAs').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefBaseGra').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefEstrucCarpAsFactor').setAttribute("class","form-control form-control-sm validar");
				ValidarCamposConModal(); 	
			}else{
				SnefFactorCondicion();
				EspesorSobreCFactor();
				ValidarCamposConModal();
				document.getElementById('coefEstrucCarpAs').setAttribute("class","");
				document.getElementById('coefBaseGra').setAttribute("class","");
				document.getElementById('coefEstrucCarpAsFactor').setAttribute("class","");
			}
		//Mejoramiento activado	
		}else if(check.checked == false && check2.checked == true){
			if (
				//Mejoramiento pantalla principal
				document.getElementById("espesorMaterial").value == "" || 
				//Nav Base
				document.getElementById("cmbcalidre").value == "selec" ||
				document.getElementById("humedad").value == "" || 
				//Nav Material de mejoramiento
				document.getElementById("cmbcalidre3").value == "selec" ||
				document.getElementById("humedad3").value == "" ||
				//Body FC
				document.getElementById("cmbConcretoFactor").value == "selec" ||
				document.getElementById("coefEstrucCarpAs").value == "" || 
				document.getElementById("cmbGranularFactor").value == "selec" ||
				document.getElementById("coefBaseGra").value == "" || 
				document.getElementById("coefEstrucCarpAsFactor").value == "" ||
				document.getElementById("coefMaterial").value == "" 
				) 
			{
				sweetAlert("Campos vacíos", "Por favor, complete todos los espacios necesarios", "error");

				//Limpia Body FC
				document.getElementById("snefFactorCondi").value = ""; 
				document.getElementById("espFinalFactor").value = "";
				document.getElementById('coefEstrucCarpAs').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefBaseGra').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefEstrucCarpAsFactor').setAttribute("class","form-control form-control-sm validar");
				//Mejoramiento
				document.getElementById('coefMaterial').setAttribute("class","form-control form-control-sm validar");
				ValidarCamposConModal(); 
			}else{
				SnefFactorCondicion();
				EspesorSobreCFactor();
				ValidarCamposConModal();
				document.getElementById('coefEstrucCarpAs').setAttribute("class","");
				document.getElementById('coefBaseGra').setAttribute("class","");
				document.getElementById('coefEstrucCarpAsFactor').setAttribute("class","");
				//Mejoramiento
				document.getElementById('coefMaterial').setAttribute("class","");
			}
		//SubBase y Mejoramiento activados	
		}else if(check.checked == true && check2.checked == true){
			if (
				//SubBase pantalla principal
				document.getElementById("espesorSubBase").value == "" ||
				//Mejoramiento pantalla principal
				document.getElementById("espesorMaterial").value == "" ||
				//Nav Base
				document.getElementById("cmbcalidre").value == "selec" ||
				document.getElementById("humedad").value == "" || 
				//Nav SubBase
				document.getElementById("cmbcalidre2").value == "selec" ||
				document.getElementById("humedad2").value == "" ||
				//Nav Material de mejoramiento
				document.getElementById("cmbcalidre3").value == "selec" ||
				document.getElementById("humedad3").value == "" ||
				//Body FC
				document.getElementById("cmbConcretoFactor").value == "selec" ||
				document.getElementById("coefEstrucCarpAs").value == "" || 
				document.getElementById("cmbGranularFactor").value == "selec" ||
				document.getElementById("coefBaseGra").value == "" || 
				document.getElementById("coefEstrucCarpAsFactor").value == "" ||
				document.getElementById("coefMaterial").value == ""  
				) 
			{
				sweetAlert("Campos vacíos", "Por favor, complete todos los espacios necesarios", "error");

				//Limpia Body FC
				document.getElementById("snefFactorCondi").value = ""; 
				document.getElementById("espFinalFactor").value = "";
				document.getElementById('coefEstrucCarpAs').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefBaseGra').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefEstrucCarpAsFactor').setAttribute("class","form-control form-control-sm validar");
				//Mejoramiento
				document.getElementById('coefMaterial').setAttribute("class","form-control form-control-sm validar");
				//subbase
				document.getElementById('coefSubBase').setAttribute("class","form-control form-control-sm validar");
				ValidarCamposConModal();  
			}else{
				SnefFactorCondicion();
				EspesorSobreCFactor();
				ValidarCamposConModal();
				document.getElementById('coefEstrucCarpAs').setAttribute("class","");
				document.getElementById('coefBaseGra').setAttribute("class","");
				document.getElementById('coefEstrucCarpAsFactor').setAttribute("class","");
				//Mejoramiento
				document.getElementById('coefMaterial').setAttribute("class","");
				//subbase
				document.getElementById('coefSubBase').setAttribute("class","");
			}
		}	
	} else if(document.getElementById("cmbBases").value == 2){
		//SubBase activada
		if (check.checked ==true && check2.checked == false ) {
			if (
			//SubBase pantalla principal
			document.getElementById("espesorSubBase").value == "" || 	
			//Nav Base
			document.getElementById("cmbcalidre").value == "selec" ||
			document.getElementById("humedad").value == "" || 
			//Nav SubBase
			document.getElementById("cmbcalidre2").value == "selec" ||
			document.getElementById("humedad2").value == "" ||
			//Body FC
			document.getElementById("cmbConcretoFactor").value == "selec" ||
			document.getElementById("coefEstrucCarpAs").value == "" || 
			document.getElementById("cmbEstabilizadaFactor").value == "selec" ||
			document.getElementById("coefBaseCem").value == "" || 
			document.getElementById("coefEstrucCarpAsFactor").value == "" ||
			//Body FC SubBase
			document.getElementById("cmbSubGranularFactor").value == "" ||
			document.getElementById("coefSubBase").value == "" 
			) 
			{
				sweetAlert("Campos vacíos", "Por favor, complete todos los espacios necesarios", "error");

				//Limpia Body FC
				document.getElementById("snefFactorCondi").value = ""; 
				document.getElementById("espFinalFactor").value = "";
				document.getElementById('coefEstrucCarpAs').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefBaseCem').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefEstrucCarpAsFactor').setAttribute("class","form-control form-control-sm validar");
				//subbase
				document.getElementById('coefSubBase').setAttribute("class","form-control form-control-sm validar");
				ValidarCamposConModal(); 
			}else{
				SnefFactorCondicion();
				EspesorSobreCFactor();
				ValidarCamposConModal();
				document.getElementById('coefEstrucCarpAs').setAttribute("class","");
				document.getElementById('coefBaseCem').setAttribute("class","");
				document.getElementById('coefEstrucCarpAsFactor').setAttribute("class","");
				//subbase
				document.getElementById('coefSubBase').setAttribute("class","");
			}
		//Todos desactivados		
		}else if (check.checked == false && check2.checked==false ) {
			if (
				//Nav Base
				document.getElementById("cmbcalidre").value == "selec" ||
				document.getElementById("humedad").value == "" || 
				//Body FC
				document.getElementById("cmbConcretoFactor").value == "selec" ||
				document.getElementById("coefEstrucCarpAs").value == "" || 
				document.getElementById("cmbEstabilizadaFactor").value == "selec" ||
				document.getElementById("coefBaseCem").value == "" || 
				document.getElementById("coefEstrucCarpAsFactor").value == "" 
				) 
			{
				sweetAlert("Campos vacíos", "Por favor, complete todos los espacios necesarios", "error");

				//Limpia Body FC
				document.getElementById("snefFactorCondi").value = ""; 
				document.getElementById("espFinalFactor").value = "";
				document.getElementById('coefEstrucCarpAs').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefBaseCem').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefEstrucCarpAsFactor').setAttribute("class","form-control form-control-sm validar");
				ValidarCamposConModal(); 
					
			}else{
				SnefFactorCondicion();
				EspesorSobreCFactor();
				ValidarCamposConModal();
				document.getElementById('coefEstrucCarpAs').setAttribute("class","");
				document.getElementById('coefBaseCem').setAttribute("class","");
				document.getElementById('coefEstrucCarpAsFactor').setAttribute("class",""); 
			}
		//Mejoramiento activado	
		}else if(check.checked == false && check2.checked == true){
			if (
				//Mejoramiento pantalla principal
				document.getElementById("espesorMaterial").value == "" || 
				//Nav Base
				document.getElementById("cmbcalidre").value == "selec" ||
				document.getElementById("humedad").value == "" || 
				//Nav Material de mejoramiento
				document.getElementById("cmbcalidre3").value == "selec" ||
				document.getElementById("humedad3").value == "" ||
				//Body FC
				document.getElementById("cmbConcretoFactor").value == "selec" ||
				document.getElementById("coefEstrucCarpAs").value == "" || 
				document.getElementById("cmbEstabilizadaFactor").value == "selec" ||
				document.getElementById("coefBaseCem").value == "" || 
				document.getElementById("coefEstrucCarpAsFactor").value == "" ||
				document.getElementById("coefMaterial").value == ""  
				) 
			{
				sweetAlert("Campos vacíos", "Por favor, complete todos los espacios necesarios", "error");

				//Limpia Body FC
				document.getElementById("snefFactorCondi").value = ""; 
				document.getElementById("espFinalFactor").value = "";
				document.getElementById('coefEstrucCarpAs').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefBaseCem').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefEstrucCarpAsFactor').setAttribute("class","form-control form-control-sm validar");
				//Mejoramiento
				document.getElementById('coefMaterial').setAttribute("class","form-control form-control-sm validar");
				ValidarCamposConModal(); 
			}else{
				SnefFactorCondicion();
				EspesorSobreCFactor();
				ValidarCamposConModal();
				document.getElementById('coefEstrucCarpAs').setAttribute("class","");
				document.getElementById('coefBaseCem').setAttribute("class","");
				document.getElementById('coefEstrucCarpAsFactor').setAttribute("class","");
				//Mejoramiento
				document.getElementById('coefMaterial').setAttribute("class",""); 
			}
		//SubBase y Mejoramiento activados	
		}else if(check.checked == true && check2.checked == true){
			if (
				//SubBase pantalla principal
				document.getElementById("espesorSubBase").value == "" ||
				//Mejoramiento pantalla principal
				document.getElementById("espesorMaterial").value == "" ||
				//Nav Base
				document.getElementById("cmbcalidre").value == "selec" ||
				document.getElementById("humedad").value == "" || 
				//Nav SubBase
				document.getElementById("cmbcalidre2").value == "selec" ||
				document.getElementById("humedad2").value == "" ||
				//Nav Material de mejoramiento
				document.getElementById("cmbcalidre3").value == "selec" ||
				document.getElementById("humedad3").value == "" ||
				//Body FC
				document.getElementById("cmbConcretoFactor").value == "selec" ||
				document.getElementById("coefEstrucCarpAs").value == "" || 
				document.getElementById("cmbEstabilizadaFactor").value == "selec" ||
				document.getElementById("coefBaseCem").value == "" || 
				document.getElementById("coefEstrucCarpAsFactor").value == "" ||
				document.getElementById("coefMaterial").value == ""  
				) 
			{
				sweetAlert("Campos vacíos", "Por favor, complete todos los espacios necesarios", "error");

				//Limpia Body FC
				document.getElementById("snefFactorCondi").value = ""; 
				document.getElementById("espFinalFactor").value = "";
				document.getElementById('coefEstrucCarpAs').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefBaseCem').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefEstrucCarpAsFactor').setAttribute("class","form-control form-control-sm validar");
				//Mejoramiento
				document.getElementById('coefMaterial').setAttribute("class","form-control form-control-sm validar");
				//subbase
				document.getElementById('coefSubBase').setAttribute("class","form-control form-control-sm validar");
				ValidarCamposConModal(); 
			}else{
				SnefFactorCondicion();
				EspesorSobreCFactor();
				ValidarCamposConModal();
				document.getElementById('coefEstrucCarpAs').setAttribute("class","");
				document.getElementById('coefBaseCem').setAttribute("class","");
				document.getElementById('coefEstrucCarpAsFactor').setAttribute("class","");
				//Mejoramiento
				document.getElementById('coefMaterial').setAttribute("class","");
				//subbase
				document.getElementById('coefSubBase').setAttribute("class","");
			}
		}
	}
}

function CalcularVidaRemanente(){
	var check = document.getElementById('agregarSubBase');
	var check2 = document.getElementById('agregarMaterial');
	var ayuda = document.getElementsByClassName('ayudaG1');
	

	//Validacion tipo de base
	if (document.getElementById("cmbBases").value == 1) {
		//SubBase activada
		if (check.checked ==true && check2.checked == false ) {
			if (
			//Body vida remanente
			document.getElementById("nroInicial").value == "" ||
			document.getElementById("cmbConcretoVida").value =="selec" ||
			document.getElementById("coefEstrucCarpAs1").value == "" || 
			document.getElementById("cmbGranularVidaRema").value =="selec" ||
			document.getElementById("coefBaseGra1").value == "" ||
			document.getElementById("desvRemanente").value == "" ||
			document.getElementById("coefEstrucCarpAsVida").value == ""||
			//Body vida remanente SubBase
			document.getElementById("cmbSubGranularVida").value =="" ||
			document.getElementById("coefSubBase1").value == "" 
			) 
			{
				sweetAlert("Campos vacíos", "Por favor, complete todos los espacios necesarios", "error");
				habilitarMetodos();
				document.getElementById('nroInicial').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefEstrucCarpAs1').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefBaseGra1').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('desvRemanente').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefEstrucCarpAsVida').setAttribute("class","form-control form-control-sm validar");
				//SubBase
				document.getElementById('coefSubBase1').setAttribute("class","form-control form-control-sm validar");
				ValidarCamposConModal();
			}else{
				Sn0VidaRemanente();
				EsalsRemanente(document.getElementById('totalModResEfectivo').value);
				Rl();
				CF();
				SnefVidaRemanente();
				EspesorSobreCVida();
				ValidarCamposConModal();
				document.getElementById('nroInicial').setAttribute("class","");
				document.getElementById('coefEstrucCarpAs1').setAttribute("class","");
				document.getElementById('coefBaseGra1').setAttribute("class","");
				document.getElementById('desvRemanente').setAttribute("class","");
				document.getElementById('coefEstrucCarpAsVida').setAttribute("class","");
				//SubBase
				document.getElementById('coefSubBase1').setAttribute("class","");
			}
		//Todos desactivados		
		}else if (check.checked == false && check2.checked==false ) {
			if (
				//Body vida remanente
				document.getElementById("nroInicial").value == "" ||
				document.getElementById("cmbConcretoVida").value =="selec" ||
				document.getElementById("coefEstrucCarpAs1").value == "" || 
				document.getElementById("cmbGranularVidaRema").value =="selec" ||
				document.getElementById("coefBaseGra1").value == "" ||
				document.getElementById("desvRemanente").value == "" ||
				document.getElementById("coefEstrucCarpAsVida").value == ""
				) 
			{
				sweetAlert("Campos vacíos", "Por favor, complete todos los espacios necesarios", "error");
				habilitarMetodos();
				document.getElementById('nroInicial').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefEstrucCarpAs1').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefBaseGra1').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('desvRemanente').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefEstrucCarpAsVida').setAttribute("class","form-control form-control-sm validar");
				ValidarCamposConModal();
				
			}else{
				Sn0VidaRemanente();
				EsalsRemanente(document.getElementById('totalModResEfectivo').value);
				Rl();
				CF();
				SnefVidaRemanente();
				EspesorSobreCVida();
				ValidarCamposConModal();
				document.getElementById('nroInicial').setAttribute("class","");
				document.getElementById('coefEstrucCarpAs1').setAttribute("class","");
				document.getElementById('coefBaseGra1').setAttribute("class","");
				document.getElementById('desvRemanente').setAttribute("class","");
				document.getElementById('coefEstrucCarpAsVida').setAttribute("class","");
			}
		//Mejoramiento activado	
		}else if(check.checked == false && check2.checked == true){
			if (
				//Body vida remanente
				document.getElementById("nroInicial").value == "" ||
				document.getElementById("cmbConcretoVida").value =="selec" ||
				document.getElementById("coefEstrucCarpAs1").value == "" || 
				document.getElementById("cmbGranularVidaRema").value =="selec" ||
				document.getElementById("coefBaseGra1").value == "" ||
				document.getElementById("desvRemanente").value == "" ||
				document.getElementById("coefEstrucCarpAsVida").value == ""||
				//Body vida remanente Mejoramiento
				document.getElementById("coefMaterial1").value == "" 
				) 
			{
				sweetAlert("Campos vacíos", "Por favor, complete todos los espacios necesarios", "error");
				habilitarMetodos();
				document.getElementById('nroInicial').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefEstrucCarpAs1').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefBaseGra1').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('desvRemanente').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefEstrucCarpAsVida').setAttribute("class","form-control form-control-sm validar");
				//Mejoramiento
				document.getElementById('coefMaterial1').setAttribute("class","form-control form-control-sm validar");
				ValidarCamposConModal();
				
			}else{
				Sn0VidaRemanente();
				EsalsRemanente(document.getElementById('totalModResEfectivo').value);
				Rl();
				CF();
				SnefVidaRemanente();
				EspesorSobreCVida();
				ValidarCamposConModal();
				document.getElementById('nroInicial').setAttribute("class","");
				document.getElementById('coefEstrucCarpAs1').setAttribute("class","");
				document.getElementById('coefBaseGra1').setAttribute("class","");
				document.getElementById('desvRemanente').setAttribute("class","");
				document.getElementById('coefEstrucCarpAsVida').setAttribute("class","");
				//Mejoramiento
				document.getElementById('coefMaterial1').setAttribute("class","");
			}
		//SubBase y Mejoramiento activados	
		}else if(check.checked == true && check2.checked == true){
			if (
				//Body vida remanente
				document.getElementById("nroInicial").value == "" ||
				document.getElementById("cmbConcretoVida").value =="selec" ||
				document.getElementById("coefEstrucCarpAs1").value == "" || 
				document.getElementById("cmbGranularVidaRema").value =="selec" ||
				document.getElementById("coefBaseGra1").value == "" ||
				document.getElementById("desvRemanente").value == "" ||
				document.getElementById("coefEstrucCarpAsVida").value == ""||
				//Body vida remanente SubBase
				document.getElementById("cmbSubGranularVida").value =="" ||
				document.getElementById("coefSubBase1").value == "" ||
				//Body vida remanente Mejoramiento
				document.getElementById("coefMaterial1").value == "" 
				) 
			{
				sweetAlert("Campos vacíos", "Por favor, complete todos los espacios necesarios", "error");
				habilitarMetodos();
				document.getElementById('nroInicial').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefEstrucCarpAs1').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefBaseGra1').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('desvRemanente').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefEstrucCarpAsVida').setAttribute("class","form-control form-control-sm validar");
				//Mejoramiento
				document.getElementById('coefMaterial1').setAttribute("class","form-control form-control-sm validar");
				//SubBase
				document.getElementById('coefSubBase1').setAttribute("class","form-control form-control-sm validar");
				ValidarCamposConModal();
				
			}else{
				Sn0VidaRemanente();
				EsalsRemanente(document.getElementById('totalModResEfectivo').value);
				Rl();
				CF();
				SnefVidaRemanente();
				EspesorSobreCVida();
				ValidarCamposConModal();
				document.getElementById('nroInicial').setAttribute("class","");
				document.getElementById('coefEstrucCarpAs1').setAttribute("class","");
				document.getElementById('coefBaseGra1').setAttribute("class","");
				document.getElementById('desvRemanente').setAttribute("class","");
				document.getElementById('coefEstrucCarpAsVida').setAttribute("class","");
				//Mejoramiento
				document.getElementById('coefMaterial1').setAttribute("class","");
				//SubBase
				document.getElementById('coefSubBase1').setAttribute("class","");
			}
		}	
	} else if(document.getElementById("cmbBases").value == 2){
		//SubBase activada
		if (check.checked ==true && check2.checked == false ) {
			if (
			//Body vida remanente
			document.getElementById("nroInicial").value == "" ||
			document.getElementById("cmbConcretoVida").value =="selec" ||
			document.getElementById("coefEstrucCarpAs1").value == "" || 
			document.getElementById("cmbEstabilizadaVidaRema").value =="selec" ||
			document.getElementById("coefBaseCem1").value == "" ||
			document.getElementById("desvRemanente").value == "" ||
			document.getElementById("coefEstrucCarpAsVida").value == ""||
			//Body vida remanente SubBase
			document.getElementById("cmbSubGranularVida").value =="" ||
			document.getElementById("coefSubBase1").value == "" 
			) 
			{
				sweetAlert("Campos vacíos", "Por favor, complete todos los espacios necesarios", "error");
				habilitarMetodos();
				document.getElementById('nroInicial').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefEstrucCarpAs1').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefBaseCem1').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('desvRemanente').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefEstrucCarpAsVida').setAttribute("class","form-control form-control-sm validar");
				//SubBase
				document.getElementById('coefSubBase1').setAttribute("class","form-control form-control-sm validar");
				ValidarCamposConModal();
			}else{
				Sn0VidaRemanente();
				EsalsRemanente(document.getElementById('totalModResEfectivo').value);
				Rl();
				CF();
				SnefVidaRemanente();
				EspesorSobreCVida();
				ValidarCamposConModal();
				document.getElementById('nroInicial').setAttribute("class","");
				document.getElementById('coefEstrucCarpAs1').setAttribute("class","");
				document.getElementById('coefBaseCem1').setAttribute("class","");
				document.getElementById('desvRemanente').setAttribute("class","");
				document.getElementById('coefEstrucCarpAsVida').setAttribute("class","");
				//SubBase
				document.getElementById('coefSubBase1').setAttribute("class","");
			}
		//Todos desactivados		
		}else if (check.checked == false && check2.checked==false ) {
			if (
				//Body vida remanente
				document.getElementById("nroInicial").value == "" ||
				document.getElementById("cmbConcretoVida").value =="selec" ||
				document.getElementById("coefEstrucCarpAs1").value == "" || 
				document.getElementById("cmbEstabilizadaVidaRema").value =="selec" ||
				document.getElementById("coefBaseCem1").value == "" ||
				document.getElementById("desvRemanente").value == "" ||
				document.getElementById("coefEstrucCarpAsVida").value == ""
				) 
			{
				sweetAlert("Campos vacíos", "Por favor, complete todos los espacios necesarios", "error");
				habilitarMetodos();
				document.getElementById('nroInicial').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefEstrucCarpAs1').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefBaseCem1').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('desvRemanente').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefEstrucCarpAsVida').setAttribute("class","form-control form-control-sm validar");
				ValidarCamposConModal();
			}else{
				Sn0VidaRemanente();
				EsalsRemanente(document.getElementById('totalModResEfectivo').value);
				Rl();
				CF();
				SnefVidaRemanente();
				EspesorSobreCVida();
				ValidarCamposConModal();
				document.getElementById('nroInicial').setAttribute("class","");
				document.getElementById('coefEstrucCarpAs1').setAttribute("class","");
				document.getElementById('coefBaseCem1').setAttribute("class","");
				document.getElementById('desvRemanente').setAttribute("class","");
				document.getElementById('coefEstrucCarpAsVida').setAttribute("class","");
			}
		//Mejoramiento activado	
		}else if(check.checked == false && check2.checked == true){
			if (
				//Body vida remanente
				document.getElementById("nroInicial").value == "" ||
				document.getElementById("cmbConcretoVida").value =="selec" ||
				document.getElementById("coefEstrucCarpAs1").value == "" || 
				document.getElementById("cmbEstabilizadaVidaRema").value =="selec" ||
				document.getElementById("coefBaseCem1").value == "" ||
				document.getElementById("desvRemanente").value == "" ||
				document.getElementById("coefEstrucCarpAsVida").value == ""||
				//Body vida remanente Mejoramiento
				document.getElementById("coefMaterial1").value == "" 
				) 
			{
				sweetAlert("Campos vacíos", "Por favor, complete todos los espacios necesarios", "error");
				habilitarMetodos();
				document.getElementById('nroInicial').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefEstrucCarpAs1').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefBaseCem1').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('desvRemanente').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefEstrucCarpAsVida').setAttribute("class","form-control form-control-sm validar");
				//Mejoramiento
				document.getElementById('coefMaterial1').setAttribute("class","form-control form-control-sm validar");
				ValidarCamposConModal();
			}else{
				Sn0VidaRemanente();
				EsalsRemanente(document.getElementById('totalModResEfectivo').value);
				Rl();
				CF();
				SnefVidaRemanente();
				EspesorSobreCVida();
				ValidarCamposConModal();
				document.getElementById('nroInicial').setAttribute("class","");
				document.getElementById('coefEstrucCarpAs1').setAttribute("class","");
				document.getElementById('coefBaseCem1').setAttribute("class","");
				document.getElementById('desvRemanente').setAttribute("class","");
				document.getElementById('coefEstrucCarpAsVida').setAttribute("class","");
				//Mejoramiento
				document.getElementById('coefMaterial1').setAttribute("class","");
			}
		//SubBase y Mejoramiento activados	
		}else if(check.checked == true && check2.checked == true){
			if (
				//Body vida remanente
				document.getElementById("nroInicial").value == "" ||
				document.getElementById("cmbConcretoVida").value =="selec" ||
				document.getElementById("coefEstrucCarpAs1").value == "" || 
				document.getElementById("cmbEstabilizadaVidaRema").value =="selec" ||
				document.getElementById("coefBaseCem1").value == "" ||
				document.getElementById("desvRemanente").value == "" ||
				document.getElementById("coefEstrucCarpAsVida").value == ""||
				//Body vida remanente SubBase
				document.getElementById("cmbSubGranularVida").value =="" ||
				document.getElementById("coefSubBase1").value == "" ||
				//Body vida remanente Mejoramiento
				document.getElementById("coefMaterial1").value == "" 
				) 
			{
				sweetAlert("Campos vacíos", "Por favor, complete todos los espacios necesarios", "error");
				habilitarMetodos();
				document.getElementById('nroInicial').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefEstrucCarpAs1').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefBaseCem1').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('desvRemanente').setAttribute("class","form-control form-control-sm validar");
				document.getElementById('coefEstrucCarpAsVida').setAttribute("class","form-control form-control-sm validar");
				//Mejoramiento
				document.getElementById('coefMaterial1').setAttribute("class","form-control form-control-sm validar");
				//SubBase
				document.getElementById('coefSubBase1').setAttribute("class","form-control form-control-sm validar");
				ValidarCamposConModal();
			}else{
				Sn0VidaRemanente();
				EsalsRemanente(document.getElementById('totalModResEfectivo').value);
				Rl();
				CF();
				SnefVidaRemanente();
				EspesorSobreCVida();
				ValidarCamposConModal();
				document.getElementById('nroInicial').setAttribute("class","");
				document.getElementById('coefEstrucCarpAs1').setAttribute("class","");
				document.getElementById('coefBaseCem1').setAttribute("class","");
				document.getElementById('desvRemanente').setAttribute("class","");
				document.getElementById('coefEstrucCarpAsVida').setAttribute("class","");
				//Mejoramiento
				document.getElementById('coefMaterial1').setAttribute("class","");
				//SubBase
				document.getElementById('coefSubBase1').setAttribute("class","");
			}
		}
	} else if(document.getElementById("cmbBases").value == 0){
		sweetAlert("Campos vacíos", "Por favor, complete todos los espacios necesarios", "error");
	}
}

function CalcularNDT(){
	if (document.getElementById("coefEstrucCarpAsNDT").value == "") {
		sweetAlert("Campos vacíos", "Por favor, complete todos los espacios necesarios", "error");
		document.getElementById("snefNDT").value = ""; 
		document.getElementById("espFinalNDT").value = "";
		document.getElementById('coefEstrucCarpAsNDT').setAttribute("class","form-control form-control-sm validar");
		ValidarCamposConModal();
	}else{
		ValidarCamposConModal();
		SnefNDT();
		EspesorSobreCNDT();
		SNefNDT1();
		document.getElementById('coefEstrucCarpAsNDT').setAttribute("class","");
	}
}

function ValidarCampos(){
	var val = document.getElementsByClassName('validar');
	for (var i = 0; i < val.length; i++) {
		if (val[i].value=='') {
			val[i].style.borderColor = "red";
			val[i].style.boxShadow = "1px 1px 1px 1px red";
		}else if (val[i].value!='') {
			val[i].style.borderColor = "";
			val[i].style.boxShadow = "";
		}
	}	
}
function ValidarCamposConModal(){
	var check = document.getElementById('agregarSubBase');
	var check2 = document.getElementById('agregarMaterial');
	var ayuda = document.getElementsByClassName('ayudaG1');
	
	//SubBase activada
	if (check.checked ==true && check2.checked == false ) {
		if(
			document.getElementById("espesorCarpAs").value == "" ||
			document.getElementById("espesorBase").value == "" || 
			document.getElementById("cmbBases").value == 0 ||
			document.getElementById("serviciabilidad").value == "" || 
			document.getElementById("nroFinal").value == "" || 
			document.getElementById("temperatura").value == "" || 
			document.getElementById("carga").value == "" || 
			document.getElementById("radioPlato").value == "" || 
			document.getElementById("defleCentroCarga").value == "" || 
			document.getElementById("cmbconfia").value == 0 ||
			document.getElementById("moduloResRetro").value == "" || 
			document.getElementById("espesorSubBase").value == "" || 
			document.getElementById("factorc").value == "" || 
			document.getElementById("humedad2").value == ""|| 
			document.getElementById("modelascarpeta").value == ""    
			)
		{
			sweetAlert("Campos vacíos", "Por favor, complete todos los espacios necesarios", "error");
			document.getElementById('espesorSubBase').setAttribute("class","form-control form-control-sm validar");
			ValidarCampos();
			desHabilitarMetodos();
		}else{
			ValidarCampos();
			document.getElementById('espesorSubBase').setAttribute("class","form-control form-control-sm");
		}
	//Todos desactivados		
	}else if (check.checked == false && check2.checked==false ) {
		if(
			document.getElementById("espesorCarpAs").value == "" ||
			document.getElementById("espesorBase").value == "" || 
			document.getElementById("cmbBases").value == 0 ||
			document.getElementById("serviciabilidad").value == "" || 
			document.getElementById("nroFinal").value == "" || 
			document.getElementById("temperatura").value == "" || 
			document.getElementById("carga").value == "" || 
			document.getElementById("radioPlato").value == "" || 
			document.getElementById("defleCentroCarga").value == "" || 
			document.getElementById("cmbconfia").value == 0 ||
			document.getElementById("moduloResRetro").value == "" || 
			document.getElementById("factorc").value == ""  || 
			document.getElementById("humedad").value == "" || 
			document.getElementById("modelascarpeta").value == "" 
			)

		{
			sweetAlert("Campos vacíos", "Por favor, complete todos los espacios necesarios", "error");
			ValidarCampos();
			desHabilitarMetodos();
		}else{
			ValidarCampos();
		}
	//Mejoramiento activado	
	}else if(check.checked == false && check2.checked == true){
		if(
			document.getElementById("espesorCarpAs").value == "" ||
			document.getElementById("espesorBase").value == "" || 
			document.getElementById("cmbBases").value == 0 ||
			document.getElementById("serviciabilidad").value == "" || 
			document.getElementById("nroFinal").value == "" || 
			document.getElementById("temperatura").value == "" || 
			document.getElementById("carga").value == "" || 
			document.getElementById("radioPlato").value == "" || 
			document.getElementById("defleCentroCarga").value == "" || 
			document.getElementById("cmbconfia").value == 0 ||
			document.getElementById("moduloResRetro").value == "" || 
			document.getElementById("espesorMaterial").value == "" || 
			document.getElementById("factorc").value == ""  || 
			document.getElementById("humedad3").value == "" || 
			document.getElementById("modelascarpeta").value == ""  
			)
		{
			sweetAlert("Campos vacíos", "Por favor, complete todos los espacios necesarios", "error");
			document.getElementById('espesorMaterial').setAttribute("class","form-control form-control-sm validar");
			ValidarCampos();
			desHabilitarMetodos();
		}else{
			ValidarCampos();
			document.getElementById('espesorMaterial').setAttribute("class","form-control form-control-sm ");
		}
	//SubBase y Mejoramiento activados	
	}else if(check.checked == true && check2.checked == true){
		if(
			document.getElementById("espesorCarpAs").value == "" ||
			document.getElementById("espesorBase").value == "" || 
			document.getElementById("cmbBases").value == 0 ||
			document.getElementById("serviciabilidad").value == "" || 
			document.getElementById("nroFinal").value == "" || 
			document.getElementById("temperatura").value == "" || 
			document.getElementById("carga").value == "" || 
			document.getElementById("radioPlato").value == "" || 
			document.getElementById("defleCentroCarga").value == "" || 
			document.getElementById("cmbconfia").value == 0 ||
			document.getElementById("moduloResRetro").value == "" || 
			document.getElementById("espesorSubBase").value == "" || 
			document.getElementById("espesorMaterial").value == "" || 
			document.getElementById("factorc").value == "" || 
			document.getElementById("humedad2").value == ""  || 
			document.getElementById("humedad3").value == "" || 
			document.getElementById("modelascarpeta").value == ""   
			)
		{
			sweetAlert("Campos vacíos", "Por favor, complete todos los espacios necesarios", "error");
			document.getElementById('espesorSubBase').setAttribute("class","form-control form-control-sm validar");
			document.getElementById('espesorMaterial').setAttribute("class","form-control form-control-sm validar");
			ValidarCampos();
			desHabilitarMetodos();
		}else{
			ValidarCampos();
			document.getElementById('espesorSubBase').setAttribute("class","form-control form-control-sm ");
			document.getElementById('espesorMaterial').setAttribute("class","form-control form-control-sm ");
		}
	}
}
function ActivarCalcular(){
	var check = document.getElementById('agregarSubBase');
	var check2 = document.getElementById('agregarMaterial');
	var ayuda = document.getElementsByClassName('ayudaG1');
	
	//SubBase activada
	if (check.checked ==true && check2.checked == false ) {
		if(
			document.getElementById("espesorCarpAs").value == "" ||
			document.getElementById("espesorBase").value == "" || 
			document.getElementById("cmbBases").value == 0 ||
			document.getElementById("serviciabilidad").value == "" || 
			document.getElementById("nroFinal").value == "" || 
			document.getElementById("temperatura").value == "" || 
			document.getElementById("carga").value == "" || 
			document.getElementById("radioPlato").value == "" || 
			document.getElementById("defleCentroCarga").value == "" || 
			document.getElementById("cmbconfia").value == 0 ||
			document.getElementById("moduloResRetro").value == "" || 
			document.getElementById("espesorSubBase").value == "" || 
			document.getElementById("factorc").value == "" || 
			document.getElementById("humedad2").value == ""|| 
			document.getElementById("modelascarpeta").value == ""    
			)
		{
			sweetAlert("Campos vacíos", "Por favor, complete todos los espacios necesarios", "error");
			document.getElementById('espesorSubBase').setAttribute("class","form-control form-control-sm validar");
			ValidarCampos();
			desHabilitarMetodos();
		}else{
			lanzarfuncionesCal();
			lanzarGraficas();
			ValidarCampos();
			document.getElementById('espesorSubBase').setAttribute("class","form-control form-control-sm");
		}
	//Todos desactivados		
	}else if (check.checked == false && check2.checked==false ) {
		if(
			document.getElementById("espesorCarpAs").value == "" ||
			document.getElementById("espesorBase").value == "" || 
			document.getElementById("cmbBases").value == 0 ||
			document.getElementById("serviciabilidad").value == "" || 
			document.getElementById("nroFinal").value == "" || 
			document.getElementById("temperatura").value == "" || 
			document.getElementById("carga").value == "" || 
			document.getElementById("radioPlato").value == "" || 
			document.getElementById("defleCentroCarga").value == "" || 
			document.getElementById("cmbconfia").value == 0 ||
			document.getElementById("moduloResRetro").value == "" || 
			document.getElementById("factorc").value == ""  || 
			document.getElementById("humedad").value == "" || 
			document.getElementById("modelascarpeta").value == "" 
			)

		{
			sweetAlert("Campos vacíos", "Por favor, complete todos los espacios necesarios", "error");
			ValidarCampos();
			desHabilitarMetodos();
		}else{
			lanzarfuncionesCal();
			lanzarGraficas();
			ValidarCampos();
		}
	//Mejoramiento activado	
	}else if(check.checked == false && check2.checked == true){
		if(
			document.getElementById("espesorCarpAs").value == "" ||
			document.getElementById("espesorBase").value == "" || 
			document.getElementById("cmbBases").value == 0 ||
			document.getElementById("serviciabilidad").value == "" || 
			document.getElementById("nroFinal").value == "" || 
			document.getElementById("temperatura").value == "" || 
			document.getElementById("carga").value == "" || 
			document.getElementById("radioPlato").value == "" || 
			document.getElementById("defleCentroCarga").value == "" || 
			document.getElementById("cmbconfia").value == 0 ||
			document.getElementById("moduloResRetro").value == "" || 
			document.getElementById("espesorMaterial").value == "" || 
			document.getElementById("factorc").value == ""  || 
			document.getElementById("humedad3").value == "" || 
			document.getElementById("modelascarpeta").value == ""  
			)
		{
			sweetAlert("Campos vacíos", "Por favor, complete todos los espacios necesarios", "error");
			document.getElementById('espesorMaterial').setAttribute("class","form-control form-control-sm validar");
			ValidarCampos();
			desHabilitarMetodos();
		}else{
			
			lanzarfuncionesCal();
			lanzarGraficas();
			ValidarCampos();
			document.getElementById('espesorMaterial').setAttribute("class","form-control form-control-sm ");
		}
	//SubBase y Mejoramiento activados	
	}else if(check.checked == true && check2.checked == true){
		if(
			document.getElementById("espesorCarpAs").value == "" ||
			document.getElementById("espesorBase").value == "" || 
			document.getElementById("cmbBases").value == 0 ||
			document.getElementById("serviciabilidad").value == "" || 
			document.getElementById("nroFinal").value == "" || 
			document.getElementById("temperatura").value == "" || 
			document.getElementById("carga").value == "" || 
			document.getElementById("radioPlato").value == "" || 
			document.getElementById("defleCentroCarga").value == "" || 
			document.getElementById("cmbconfia").value == 0 ||
			document.getElementById("moduloResRetro").value == "" || 
			document.getElementById("espesorSubBase").value == "" || 
			document.getElementById("espesorMaterial").value == "" || 
			document.getElementById("factorc").value == "" || 
			document.getElementById("humedad2").value == ""  || 
			document.getElementById("humedad3").value == "" || 
			document.getElementById("modelascarpeta").value == ""   
			)
		{
			sweetAlert("Campos vacíos", "Por favor, complete todos los espacios necesarios", "error");
			document.getElementById('espesorSubBase').setAttribute("class","form-control form-control-sm validar");
			document.getElementById('espesorMaterial').setAttribute("class","form-control form-control-sm validar");
			ValidarCampos();
			desHabilitarMetodos();
		}else{
			lanzarfuncionesCal();
			lanzarGraficas();
			ValidarCampos();
			document.getElementById('espesorSubBase').setAttribute("class","form-control form-control-sm ");
			document.getElementById('espesorMaterial').setAttribute("class","form-control form-control-sm ");
		}
	}
}

function AnclaRelacionEp(){
	document.getElementById("navCoefDrena").className="";
	document.getElementById("navFacTemperatura").className="";
	document.getElementById("navEpMr").className="active";
	document.getElementById("navSnFuturo").className="";
	document.getElementById("navCoefEstructural").className="";
	document.getElementById("navVidaRemanante").className="";
	document.getElementById("navNDT").className="";

	var CoefDrena = document.getElementById("menuCoefDrena").getAttribute("aria-expanded");
	var FacTemperatura = document.getElementById("menuFacTemperatura").getAttribute("aria-expanded");
	var EpMr = document.getElementById("menuEpMr").getAttribute("aria-expanded");
	var SnFuturo = document.getElementById("menuSnFuturo").getAttribute("aria-expanded");
	var CoefEstructural = document.getElementById("menuCoefEstructural").getAttribute("aria-expanded");
	var VidaRemanante = document.getElementById("menuVidaRemanante").getAttribute("aria-expanded");
	var NDT = document.getElementById("menuNDT").getAttribute("aria-expanded");

	if (EpMr == "false"){
		SnFuturo = "false";
		CoefDrena = "false";
		EpMr = "true";
		FacTemperatura = "false";
		CoefEstructural = "false";
		VidaRemanante = "false";
		NDT = "false";
	} else {
		EpMr = "false";
	}

	document.getElementById("menuCoefDrena").setAttribute("aria-expanded",CoefDrena);
	document.getElementById("menuFacTemperatura").setAttribute("aria-expanded",FacTemperatura);
	document.getElementById("menuEpMr").setAttribute("aria-expanded",EpMr);
	document.getElementById("menuSnFuturo").setAttribute("aria-expanded",SnFuturo);
	document.getElementById("menuCoefEstructural").setAttribute("aria-expanded",CoefEstructural);
	document.getElementById("menuVidaRemanante").setAttribute("aria-expanded",VidaRemanante);
	document.getElementById("menuNDT").setAttribute("aria-expanded",NDT);
}

function AnclaNomograma(){
	document.getElementById("navCoefDrena").className="";
	document.getElementById("navFacTemperatura").className="";
	document.getElementById("navEpMr").className="";
	document.getElementById("navSnFuturo").className="active";
	document.getElementById("navCoefEstructural").className="";
	document.getElementById("navVidaRemanante").className="";
	document.getElementById("navNDT").className="";

	var CoefDrena = document.getElementById("menuCoefDrena").getAttribute("aria-expanded");
	var FacTemperatura = document.getElementById("menuFacTemperatura").getAttribute("aria-expanded");
	var EpMr = document.getElementById("menuEpMr").getAttribute("aria-expanded");
	var SnFuturo = document.getElementById("menuSnFuturo").getAttribute("aria-expanded");
	var CoefEstructural = document.getElementById("menuCoefEstructural").getAttribute("aria-expanded");
	var VidaRemanante = document.getElementById("menuVidaRemanante").getAttribute("aria-expanded");
	var NDT = document.getElementById("menuNDT").getAttribute("aria-expanded");

	if (SnFuturo = "false"){
		SnFuturo = "true";
		CoefDrena = "false";
		EpMr = "false";
		FacTemperatura = "false";
		CoefEstructural = "false";
		VidaRemanante = "false";
		NDT = "false";
	} else {
		SnFuturo = "false";
	}

	document.getElementById("menuCoefDrena").setAttribute("aria-expanded",CoefDrena);
	document.getElementById("menuFacTemperatura").setAttribute("aria-expanded",FacTemperatura);
	document.getElementById("menuEpMr").setAttribute("aria-expanded",EpMr);
	document.getElementById("menuSnFuturo").setAttribute("aria-expanded",SnFuturo);
	document.getElementById("menuCoefEstructural").setAttribute("aria-expanded",CoefEstructural);
	document.getElementById("menuVidaRemanante").setAttribute("aria-expanded",VidaRemanante);
	document.getElementById("menuNDT").setAttribute("aria-expanded",NDT);
}

function AnclaFactorTem(){
	document.getElementById("navCoefDrena").className="";
	document.getElementById("navFacTemperatura").className="active";
	document.getElementById("navEpMr").className="";
	document.getElementById("navSnFuturo").className="";
	document.getElementById("navCoefEstructural").className="";
	document.getElementById("navVidaRemanante").className="";
	document.getElementById("navNDT").className="";

	var CoefDrena = document.getElementById("menuCoefDrena").getAttribute("aria-expanded");
	var FacTemperatura = document.getElementById("menuFacTemperatura").getAttribute("aria-expanded");
	var EpMr = document.getElementById("menuEpMr").getAttribute("aria-expanded");
	var SnFuturo = document.getElementById("menuSnFuturo").getAttribute("aria-expanded");
	var CoefEstructural = document.getElementById("menuCoefEstructural").getAttribute("aria-expanded");
	var VidaRemanante = document.getElementById("menuVidaRemanante").getAttribute("aria-expanded");
	var NDT = document.getElementById("menuNDT").getAttribute("aria-expanded");

	if (FacTemperatura == "false"){
		FacTemperatura = "true";
		CoefDrena = "false";
		EpMr = "false";
		SnFuturo = "false";
		CoefEstructural = "false";
		VidaRemanante = "false";
		NDT = "false";
	} else {
		FacTemperatura = "false";
	}

	document.getElementById("menuCoefDrena").setAttribute("aria-expanded",CoefDrena);
	document.getElementById("menuFacTemperatura").setAttribute("aria-expanded",FacTemperatura);
	document.getElementById("menuEpMr").setAttribute("aria-expanded",EpMr);
	document.getElementById("menuSnFuturo").setAttribute("aria-expanded",SnFuturo);
	document.getElementById("menuCoefEstructural").setAttribute("aria-expanded",CoefEstructural);
	document.getElementById("menuVidaRemanante").setAttribute("aria-expanded",VidaRemanante);
	document.getElementById("menuNDT").setAttribute("aria-expanded",NDT);
}

function AnclaMetodoNDT(){
	document.getElementById("navCoefDrena").className="";
	document.getElementById("navFacTemperatura").className="";
	document.getElementById("navEpMr").className="";
	document.getElementById("navSnFuturo").className="";
	document.getElementById("navCoefEstructural").className="";
	document.getElementById("navVidaRemanante").className="";
	document.getElementById("navNDT").className="active";

	var CoefDrena = document.getElementById("menuCoefDrena").getAttribute("aria-expanded");
	var FacTemperatura = document.getElementById("menuFacTemperatura").getAttribute("aria-expanded");
	var EpMr = document.getElementById("menuEpMr").getAttribute("aria-expanded");
	var SnFuturo = document.getElementById("menuSnFuturo").getAttribute("aria-expanded");
	var CoefEstructural = document.getElementById("menuCoefEstructural").getAttribute("aria-expanded");
	var VidaRemanante = document.getElementById("menuVidaRemanante").getAttribute("aria-expanded");
	var NDT = document.getElementById("menuNDT").getAttribute("aria-expanded");

	if (NDT = "false"){
		SnFuturo = "false";
		CoefDrena = "false";
		EpMr = "false";
		FacTemperatura = "false";
		CoefEstructural = "false";
		VidaRemanante = "false";
		NDT = "true";
	} else {
		NDT = "false";
	}

	document.getElementById("menuCoefDrena").setAttribute("aria-expanded",CoefDrena);
	document.getElementById("menuFacTemperatura").setAttribute("aria-expanded",FacTemperatura);
	document.getElementById("menuEpMr").setAttribute("aria-expanded",EpMr);
	document.getElementById("menuSnFuturo").setAttribute("aria-expanded",SnFuturo);
	document.getElementById("menuCoefEstructural").setAttribute("aria-expanded",CoefEstructural);
	document.getElementById("menuVidaRemanante").setAttribute("aria-expanded",VidaRemanante);
	document.getElementById("menuNDT").setAttribute("aria-expanded",NDT);
}

function AnclaMetodoVida(){
	document.getElementById("navCoefDrena").className="";
	document.getElementById("navFacTemperatura").className="";
	document.getElementById("navEpMr").className="";
	document.getElementById("navSnFuturo").className="";
	document.getElementById("navCoefEstructural").className="";
	document.getElementById("navVidaRemanante").className="active";
	document.getElementById("navNDT").className="";

	var CoefDrena = document.getElementById("menuCoefDrena").getAttribute("aria-expanded");
	var FacTemperatura = document.getElementById("menuFacTemperatura").getAttribute("aria-expanded");
	var EpMr = document.getElementById("menuEpMr").getAttribute("aria-expanded");
	var SnFuturo = document.getElementById("menuSnFuturo").getAttribute("aria-expanded");
	var CoefEstructural = document.getElementById("menuCoefEstructural").getAttribute("aria-expanded");
	var VidaRemanante = document.getElementById("menuVidaRemanante").getAttribute("aria-expanded");
	var NDT = document.getElementById("menuNDT").getAttribute("aria-expanded");

	if (VidaRemanante = "false"){
		SnFuturo = "false";
		CoefDrena = "false";
		EpMr = "false";
		FacTemperatura = "false";
		CoefEstructural = "false";
		VidaRemanante = "true";
		NDT = "false";
	} else {
		VidaRemanante = "false";
	}

	document.getElementById("menuCoefDrena").setAttribute("aria-expanded",CoefDrena);
	document.getElementById("menuFacTemperatura").setAttribute("aria-expanded",FacTemperatura);
	document.getElementById("menuEpMr").setAttribute("aria-expanded",EpMr);
	document.getElementById("menuSnFuturo").setAttribute("aria-expanded",SnFuturo);
	document.getElementById("menuCoefEstructural").setAttribute("aria-expanded",CoefEstructural);
	document.getElementById("menuVidaRemanante").setAttribute("aria-expanded",VidaRemanante);
	document.getElementById("menuNDT").setAttribute("aria-expanded",NDT);
}

function AnclaTablaFactor(){
	document.getElementById("navCoefDrena").className="";
	document.getElementById("navFacTemperatura").className="";
	document.getElementById("navEpMr").className="";
	document.getElementById("navSnFuturo").className="";
	document.getElementById("navCoefEstructural").className="active";
	document.getElementById("navVidaRemanante").className="";
	document.getElementById("navNDT").className="";

	var CoefDrena = document.getElementById("menuCoefDrena").getAttribute("aria-expanded");
	var FacTemperatura = document.getElementById("menuFacTemperatura").getAttribute("aria-expanded");
	var EpMr = document.getElementById("menuEpMr").getAttribute("aria-expanded");
	var SnFuturo = document.getElementById("menuSnFuturo").getAttribute("aria-expanded");
	var CoefEstructural = document.getElementById("menuCoefEstructural").getAttribute("aria-expanded");
	var VidaRemanante = document.getElementById("menuVidaRemanante").getAttribute("aria-expanded");
	var NDT = document.getElementById("menuNDT").getAttribute("aria-expanded");

	if (CoefEstructural = "false"){
		SnFuturo = "false";
		CoefDrena = "false";
		EpMr = "false";
		FacTemperatura = "false";
		CoefEstructural = "true";
		VidaRemanante = "false";
		NDT = "false";
	} else {
		CoefEstructural = "false";
	}

	document.getElementById("menuCoefDrena").setAttribute("aria-expanded",CoefDrena);
	document.getElementById("menuFacTemperatura").setAttribute("aria-expanded",FacTemperatura);
	document.getElementById("menuEpMr").setAttribute("aria-expanded",EpMr);
	document.getElementById("menuSnFuturo").setAttribute("aria-expanded",SnFuturo);
	document.getElementById("menuCoefEstructural").setAttribute("aria-expanded",CoefEstructural);
	document.getElementById("menuVidaRemanante").setAttribute("aria-expanded",VidaRemanante);
	document.getElementById("menuNDT").setAttribute("aria-expanded",NDT);
}

function AnclaBase(){
	document.location.href = "#condicion1";
	document.location.href = "#datosTraficoEntorno";
	document.getElementById("navBase").className="active";
	document.getElementById("navSubBase").className="";
	document.getElementById("navMatMej").className="";

	var checkSub = document.getElementById('agregarSubBase');
	var checkMat = document.getElementById('agregarMaterial');

	

	  if (checkSub.checked == "false" && checkMat.checked == "false"){
	  	base = "false";
	  	subBase = "false";
	  	matMej = "false";
	  } 
	document.getElementById("MenuBase").setAttribute("aria-expanded", base);
	document.getElementById("MenuSub").setAttribute("aria-expanded", subBase);
	document.getElementById("MenuMatMej").setAttribute("aria-expanded", matMej);
}

function AnclaSubBase(){
	document.location.href = "#condicion2";
	document.location.href = "#datosTraficoEntorno";
	document.getElementById("navBase").className="";
	document.getElementById("navSubBase").className="active";
	document.getElementById("navMatMej").className="";

	var checkSub = document.getElementById('agregarSubBase');

	  if (checkSub.checked == "true"){
	  	var subBase = "true"
	  	var base = "false";
	  	var matMej = "false";
	  } else {
	  	suBase = "false"
	  }
	document.getElementById("MenuBase").setAttribute("aria-expanded", base);
	document.getElementById("MenuSub").setAttribute("aria-expanded", subBase);
	document.getElementById("MenuMatMej").setAttribute("aria-expanded", matMej);

}

function AnclaMatMej(){
	document.location.href = "#condicion3";
	document.location.href = "#datosTraficoEntorno";
	document.getElementById("navBase").className="";
	document.getElementById("navSubBase").className="";
	document.getElementById("navMatMej").className="active";

	var checkMat = document.getElementById('agregarMaterial');
	

	  if (checkMat.checked == "true"){
	  	var matMej = "true";
	  	var base = "false";
	  	var subBase = "false";
	  } else {
	  	matMej = "false";
	  }
	document.getElementById("MenuBase").setAttribute("aria-expanded", base);
	document.getElementById("MenuSub").setAttribute("aria-expanded", subBase);
	document.getElementById("MenuMatMej").setAttribute("aria-expanded", matMej);
}

//Espesores.js
function EspesorTotal(){
	var Primero1 = document.getElementById('espesorCarpAs').value;
	var Segundo1 = document.getElementById('espesorBase').value;
	var Tercero1 = document.getElementById('espesorSubBase').value;
	var Cuarto1 = document.getElementById('espesorMaterial').value;

	if (Primero1!=""&&Segundo1!=""&&Tercero1!=""&&Cuarto1!="") {
		var total = eval(parseFloat(Primero1)+parseFloat(Segundo1)+parseFloat(Tercero1)+parseFloat(Cuarto1));
		document.getElementById("espesorTotalPav").value = total;
	}
	else if (Primero1!=""&&Segundo1!=""&&Tercero1!=""&&Cuarto1=="") {
		var total = eval(parseFloat(Primero1)+parseFloat(Segundo1)+parseFloat(Tercero1));
		document.getElementById("espesorTotalPav").value = total;
	}
	else if (Primero1!=""&&Segundo1!=""&&Tercero1==''&&Cuarto1=="") {
		var total = eval(parseFloat(Primero1)+parseFloat(Segundo1));
		document.getElementById("espesorTotalPav").value = total;
	}else if (Primero1!=""&&Segundo1!=""&&Tercero1==''&&Cuarto1!="") {
		var total = eval(parseFloat(Primero1)+parseFloat(Segundo1)+parseFloat(Cuarto1));
		document.getElementById("espesorTotalPav").value = total;
	}
}

function servi(){
	var select1 = document.getElementById("serviciabilidad").value;
	var total = 4.2-select1;
	document.getElementById("totalPsi").innerHTML = total.toFixed(2);	
}

function TiposBases(){
	var select1 = document.getElementById("cmbBases");
	var x1 = document.getElementsByClassName('ayudaE');
	var x2 = document.getElementsByClassName('ayudaG');
	var espesor = document.getElementById('espesorCarpAs').value;


	if (select1.value ==0) {
		//titulo
		document.getElementById("granular1").innerHTML = "";
		document.getElementById("granular2").innerHTML = "";
		document.getElementById("granular3").innerHTML = "";
		document.getElementById("granular4").innerHTML = "";
		var selec = document.getElementById('cmbBases').value;
		//BORRAR NINGUNA BASE

		document.getElementById('tipoBase').innerHTML = '';

		//Graficos
		
		document.getElementById('divgraficaGranular').style.display = 'none';
		document.getElementById('divgraficaCemento').style.display = 'none';

		//Descargas
		document.getElementById('downgranular').style.display = 'none';
		document.getElementById('downcemento').style.display = 'none';

		

		//Ventana de ayuda
		x1[0].style.display = 'none';
		x1[1].style.display = 'none';
		x2[0].style.display = 'none';
		x2[1].style.display = 'none';

		//Nombre de la gráfica del factor de correcion
		document.getElementById("nombreFactor").innerHTML = "";
		//GRAFICAS REPORTE BASES
		document.getElementById('recibeContieneG').style.display='none';
		document.getElementById('recibeContieneC').style.display='none';
		


	}else if (select1.value == 1) {
		document.getElementById("tituloBaseFactor").innerHTML = "Base Granular";
		document.getElementById("tituloBaseVidaRema").innerHTML = "Base Granular";

		document.getElementById("cmbGranularFactor").style.display = "inline";
		document.getElementById("cmbEstabilizadaFactor").style.display = "none";

		document.getElementById("cmbGranularVidaRema").style.display = "inline";
		document.getElementById("cmbEstabilizadaVidaRema").style.display = "none";

		//DESABILITO LOS DE TRATADA CON CEMENTO
		document.getElementById("coefBaseCem").style.display = "none";
		document.getElementById("coefBaseCem1").style.display = "none";
		
		//Graficos
		document.getElementById('divgraficaGranular').style.display = 'inline';
		document.getElementById('divgraficaCemento').style.display = 'none';

		//Descargas
		document.getElementById('downgranular').style.display = 'block';
		document.getElementById('downcemento').style.display = 'none';

		
		//Ventana de ayuda
		x1[0].style.display = 'none';
		x1[1].style.display = 'none';
		x2[0].style.display = 'inline';
		x2[1].style.display = 'inline';

		//TIPO BASE GRANULAR
		document.getElementById('tipoBase').innerHTML = 'G'+espesor;

		//Nombre de la gráfica del factor de correcion
		document.getElementById("nombreFactor").innerHTML = "Ajuste d0 por temperatura bases granulares";
		//Reporte
		document.getElementById("recibebase").innerHTML = "Tipo de base: Granular"

		//GRAFICAS REPORTE BASES
		document.getElementById('recibeContieneG').style.display='inline';
		document.getElementById('recibeContieneC').style.display='none';



	}
	if (select1.value==2) {
		document.getElementById("tituloBaseFactor").innerHTML = "Base Estabilizada";
		document.getElementById("tituloBaseVidaRema").innerHTML = "Base Estabilizada";

		
		document.getElementById("cmbEstabilizadaFactor").style.display = "inline";
		document.getElementById("cmbGranularFactor").style.display = "none";

		document.getElementById("cmbEstabilizadaVidaRema").style.display = "inline";
		document.getElementById("cmbGranularVidaRema").style.display = "none";

		//Deshabilito los de Granular
		document.getElementById("coefBaseGra").style.display = "none";
		document.getElementById("coefBaseGra1").style.display = "none";

		//Graficos
		document.getElementById('divgraficaGranular').style.display = 'none';
		document.getElementById('divgraficaCemento').style.display = 'inline';
		
		//Descargas
		document.getElementById('downgranular').style.display = 'none';
		document.getElementById('downcemento').style.display = 'block';
		

		//Ventana ayuda
		x1[0].style.display = 'inline';
		x1[1].style.display = 'inline';
		x2[0].style.display = 'none';
		x2[1].style.display = 'none';

		//TIPO BASE CEMENTO
		document.getElementById('tipoBase').innerHTML = 'C'+espesor;

		//Nombre de la gráfica del factor de correcion
		document.getElementById("nombreFactor").innerHTML = "Ajuste d0 por temperatura bases tratadas por cemento";
		//Reporte
		document.getElementById('recibebase').innerHTML = "Tipo de base: Tratada con cemento";

		//GRAFICAS REPORTE BASES
		document.getElementById('recibeContieneG').style.display='none';
		document.getElementById('recibeContieneC').style.display='inline';

	}
}

function ControlAsfal(){
	var selecss = document.getElementById("cmbConcretoFactor").value;
	if (selecss == 0) {

		document.getElementById("coefEstrucCarpAs").value = 0.375;
		document.getElementById('TituConcreto1').style.backgroundColor = "#A9BCF5";
		document.getElementById('TituConcreto11').style.backgroundColor = "#A9BCF5";
		document.getElementById('TituConcreto111').style.backgroundColor = "#A9BCF5";

		//Desactivar las demas
		document.getElementById('TituConcreto22').style.backgroundColor = "";
		document.getElementById('TituConcreto222').style.backgroundColor = "";

		document.getElementById('TituConcreto33').style.backgroundColor = "";
		document.getElementById('TituConcreto333').style.backgroundColor = "";

		document.getElementById('TituConcreto44').style.backgroundColor = "";
		document.getElementById('TituConcreto444').style.backgroundColor = "";

		document.getElementById('TituConcreto55').style.backgroundColor = "";
		document.getElementById('TituConcreto555').style.backgroundColor = "";

	}else if (selecss == 1) {
		document.getElementById("coefEstrucCarpAs").value = 0.30;
		
		document.getElementById('TituConcreto1').style.backgroundColor = "#A9BCF5";
		document.getElementById('TituConcreto22').style.backgroundColor = "#A9BCF5";
		document.getElementById('TituConcreto222').style.backgroundColor = "#A9BCF5";

		//Desactivar las demas
		document.getElementById('TituConcreto11').style.backgroundColor = "";
		document.getElementById('TituConcreto111').style.backgroundColor = "";

		document.getElementById('TituConcreto33').style.backgroundColor = "";
		document.getElementById('TituConcreto333').style.backgroundColor = "";

		document.getElementById('TituConcreto44').style.backgroundColor = "";
		document.getElementById('TituConcreto444').style.backgroundColor = "";

		document.getElementById('TituConcreto55').style.backgroundColor = "";
		document.getElementById('TituConcreto555').style.backgroundColor = "";

	}else if (selecss==2) {
		document.getElementById("coefEstrucCarpAs").value = 0.25;
		
		document.getElementById('TituConcreto1').style.backgroundColor = "#A9BCF5";
		document.getElementById('TituConcreto33').style.backgroundColor = "#A9BCF5";
		document.getElementById('TituConcreto333').style.backgroundColor = "#A9BCF5";

		//Desactivar las demas
		document.getElementById('TituConcreto22').style.backgroundColor = "";
		document.getElementById('TituConcreto222').style.backgroundColor = "";

		document.getElementById('TituConcreto11').style.backgroundColor = "";
		document.getElementById('TituConcreto111').style.backgroundColor = "";

		document.getElementById('TituConcreto44').style.backgroundColor = "";
		document.getElementById('TituConcreto444').style.backgroundColor = "";

		document.getElementById('TituConcreto55').style.backgroundColor = "";
		document.getElementById('TituConcreto555').style.backgroundColor = "";

	}else if(selecss==3){
		document.getElementById("coefEstrucCarpAs").value = 0.17;
		
		document.getElementById('TituConcreto1').style.backgroundColor = "#A9BCF5";
		document.getElementById('TituConcreto44').style.backgroundColor = "#A9BCF5";
		document.getElementById('TituConcreto444').style.backgroundColor = "#A9BCF5";

		//Desactivar las demas
		document.getElementById('TituConcreto22').style.backgroundColor = "";
		document.getElementById('TituConcreto222').style.backgroundColor = "";

		document.getElementById('TituConcreto33').style.backgroundColor = "";
		document.getElementById('TituConcreto333').style.backgroundColor = "";

		document.getElementById('TituConcreto11').style.backgroundColor = "";
		document.getElementById('TituConcreto111').style.backgroundColor = "";

		document.getElementById('TituConcreto55').style.backgroundColor = "";
		document.getElementById('TituConcreto555').style.backgroundColor = "";

	}else if(selecss==4){
		document.getElementById("coefEstrucCarpAs").value = 0.275;
		
		document.getElementById('TituConcreto1').style.backgroundColor = "#A9BCF5";
		document.getElementById('TituConcreto55').style.backgroundColor = "#A9BCF5";
		document.getElementById('TituConcreto555').style.backgroundColor = "#A9BCF5";

		//Desactivar las demas
		document.getElementById('TituConcreto22').style.backgroundColor = "";
		document.getElementById('TituConcreto222').style.backgroundColor = "";

		document.getElementById('TituConcreto33').style.backgroundColor = "";
		document.getElementById('TituConcreto333').style.backgroundColor = "";

		document.getElementById('TituConcreto44').style.backgroundColor = "";
		document.getElementById('TituConcreto444').style.backgroundColor = "";

		document.getElementById('TituConcreto11').style.backgroundColor = "";
		document.getElementById('TituConcreto111').style.backgroundColor = "";

	}
}

function ControlAsfal1(){
	var selecsss = document.getElementById("cmbConcretoVida").value;
	if (selecsss == 0) {

		document.getElementById("coefEstrucCarpAs1").value = 0.375;

		document.getElementById('1TituConcreto11').style.backgroundColor = "#A9BCF5";
		document.getElementById('1TituConcreto111').style.backgroundColor = "#A9BCF5";
		document.getElementById('1TituConcreto1111').style.backgroundColor = "#A9BCF5";

		//Desactivar las demas
		document.getElementById('1TituConcreto222').style.backgroundColor = "";
		document.getElementById('1TituConcreto2222').style.backgroundColor = "";

		document.getElementById('1TituConcreto333').style.backgroundColor = "";
		document.getElementById('1TituConcreto3333').style.backgroundColor = "";

		document.getElementById('1TituConcreto444').style.backgroundColor = "";
		document.getElementById('1TituConcreto4444').style.backgroundColor = "";

		document.getElementById('1TituConcreto555').style.backgroundColor = "";
		document.getElementById('1TituConcreto5555').style.backgroundColor = "";

	}else if (selecsss == 1) {
		document.getElementById("coefEstrucCarpAs1").value = 0.30;

		document.getElementById('1TituConcreto11').style.backgroundColor = "#A9BCF5";
		document.getElementById('1TituConcreto222').style.backgroundColor = "#A9BCF5";
		document.getElementById('1TituConcreto2222').style.backgroundColor = "#A9BCF5";

		//Desactivar las demas
		document.getElementById('1TituConcreto111').style.backgroundColor = "";
		document.getElementById('1TituConcreto1111').style.backgroundColor = "";

		document.getElementById('1TituConcreto333').style.backgroundColor = "";
		document.getElementById('1TituConcreto3333').style.backgroundColor = "";

		document.getElementById('1TituConcreto444').style.backgroundColor = "";
		document.getElementById('1TituConcreto4444').style.backgroundColor = "";

		document.getElementById('1TituConcreto555').style.backgroundColor = "";
		document.getElementById('1TituConcreto5555').style.backgroundColor = "";
		
	}else if (selecsss==2) {
		document.getElementById("coefEstrucCarpAs1").value = 0.25;

		document.getElementById('1TituConcreto11').style.backgroundColor = "#A9BCF5";
		document.getElementById('1TituConcreto333').style.backgroundColor = "#A9BCF5";
		document.getElementById('1TituConcreto3333').style.backgroundColor = "#A9BCF5";

		//Desactivar las demas
		document.getElementById('1TituConcreto222').style.backgroundColor = "";
		document.getElementById('1TituConcreto2222').style.backgroundColor = "";

		document.getElementById('1TituConcreto111').style.backgroundColor = "";
		document.getElementById('1TituConcreto1111').style.backgroundColor = "";

		document.getElementById('1TituConcreto444').style.backgroundColor = "";
		document.getElementById('1TituConcreto4444').style.backgroundColor = "";

		document.getElementById('1TituConcreto555').style.backgroundColor = "";
		document.getElementById('1TituConcreto5555').style.backgroundColor = "";
		
	}else if(selecsss==3){
		document.getElementById("coefEstrucCarpAs1").value = 0.17;

		document.getElementById('1TituConcreto11').style.backgroundColor = "#A9BCF5";
		document.getElementById('1TituConcreto444').style.backgroundColor = "#A9BCF5";
		document.getElementById('1TituConcreto4444').style.backgroundColor = "#A9BCF5";

		//Desactivar las demas
		document.getElementById('1TituConcreto222').style.backgroundColor = "";
		document.getElementById('1TituConcreto2222').style.backgroundColor = "";

		document.getElementById('1TituConcreto333').style.backgroundColor = "";
		document.getElementById('1TituConcreto3333').style.backgroundColor = "";

		document.getElementById('1TituConcreto111').style.backgroundColor = "";
		document.getElementById('1TituConcreto1111').style.backgroundColor = "";

		document.getElementById('1TituConcreto555').style.backgroundColor = "";
		document.getElementById('1TituConcreto5555').style.backgroundColor = "";
		
	}else if(selecsss==4){
		document.getElementById("coefEstrucCarpAs1").value = 0.275;

		document.getElementById('1TituConcreto11').style.backgroundColor = "#A9BCF5";
		document.getElementById('1TituConcreto555').style.backgroundColor = "#A9BCF5";
		document.getElementById('1TituConcreto5555').style.backgroundColor = "#A9BCF5";

		//Desactivar las demas
		document.getElementById('1TituConcreto222').style.backgroundColor = "";
		document.getElementById('1TituConcreto2222').style.backgroundColor = "";

		document.getElementById('1TituConcreto333').style.backgroundColor = "";
		document.getElementById('1TituConcreto3333').style.backgroundColor = "";

		document.getElementById('1TituConcreto444').style.backgroundColor = "";
		document.getElementById('1TituConcreto4444').style.backgroundColor = "";

		document.getElementById('1TituConcreto111').style.backgroundColor = "";
		document.getElementById('1TituConcreto1111').style.backgroundColor = "";
	}
}

//PRIMEROOOO
function Esta(){
	var selec = document.getElementById("cmbEstabilizadaFactor").value;
	if (selec == 0) {
		document.getElementById("coefBaseCem").value = 0.275;
		document.getElementById("coefBaseCem").style.display='inline';

		document.getElementById('TituBaseEstab1').style.backgroundColor = "#A9BCF5";
		document.getElementById('TituBaseEstab11').style.backgroundColor = "#A9BCF5";
		document.getElementById('TituBaseEstab111').style.backgroundColor = "#A9BCF5";

		//Desactivar las demas
		document.getElementById('TituBaseEstab22').style.backgroundColor = "";
		document.getElementById('TituBaseEstab222').style.backgroundColor = "";

		document.getElementById('TituBaseEstab33').style.backgroundColor = "";
		document.getElementById('TituBaseEstab333').style.backgroundColor = "";

		document.getElementById('TituBaseEstab44').style.backgroundColor = "";
		document.getElementById('TituBaseEstab444').style.backgroundColor = "";

		document.getElementById('TituBaseEstab55').style.backgroundColor = "";
		document.getElementById('TituBaseEstab555').style.backgroundColor = "";

	}else if (selec == 1) {
		document.getElementById("coefBaseCem").value = 0.20 ;
		document.getElementById("coefBaseCem").style.display='inline';

		document.getElementById('TituBaseEstab1').style.backgroundColor = "#A9BCF5";
		document.getElementById('TituBaseEstab22').style.backgroundColor = "#A9BCF5";
		document.getElementById('TituBaseEstab222').style.backgroundColor = "#A9BCF5";

		//Desactivar las demas
		document.getElementById('TituBaseEstab11').style.backgroundColor = "";
		document.getElementById('TituBaseEstab111').style.backgroundColor = "";

		document.getElementById('TituBaseEstab33').style.backgroundColor = "";
		document.getElementById('TituBaseEstab333').style.backgroundColor = "";

		document.getElementById('TituBaseEstab44').style.backgroundColor = "";
		document.getElementById('TituBaseEstab444').style.backgroundColor = "";

		document.getElementById('TituBaseEstab55').style.backgroundColor = "";
		document.getElementById('TituBaseEstab555').style.backgroundColor = "";

	}else if (selec==2) {
		document.getElementById("coefBaseCem").value = 0.175 ;
		document.getElementById("coefBaseCem").style.display='inline';

		document.getElementById('TituBaseEstab1').style.backgroundColor = "#A9BCF5";
		document.getElementById('TituBaseEstab33').style.backgroundColor = "#A9BCF5";
		document.getElementById('TituBaseEstab333').style.backgroundColor = "#A9BCF5";

		//Desactivar las demas
		document.getElementById('TituBaseEstab22').style.backgroundColor = "";
		document.getElementById('TituBaseEstab222').style.backgroundColor = "";

		document.getElementById('TituBaseEstab11').style.backgroundColor = "";
		document.getElementById('TituBaseEstab111').style.backgroundColor = "";

		document.getElementById('TituBaseEstab44').style.backgroundColor = "";
		document.getElementById('TituBaseEstab444').style.backgroundColor = "";

		document.getElementById('TituBaseEstab55').style.backgroundColor = "";
		document.getElementById('TituBaseEstab555').style.backgroundColor = "";

	}else if(selec==3){
		document.getElementById("coefBaseCem").value = 0.15 ;
		document.getElementById("coefBaseCem").style.display='inline';

		document.getElementById('TituBaseEstab1').style.backgroundColor = "#A9BCF5";
		document.getElementById('TituBaseEstab44').style.backgroundColor = "#A9BCF5";
		document.getElementById('TituBaseEstab444').style.backgroundColor = "#A9BCF5";

		//Desactivar las demas
		document.getElementById('TituBaseEstab22').style.backgroundColor = "";
		document.getElementById('TituBaseEstab222').style.backgroundColor = "";

		document.getElementById('TituBaseEstab33').style.backgroundColor = "";
		document.getElementById('TituBaseEstab333').style.backgroundColor = "";

		document.getElementById('TituBaseEstab11').style.backgroundColor = "";
		document.getElementById('TituBaseEstab111').style.backgroundColor = "";

		document.getElementById('TituBaseEstab55').style.backgroundColor = "";
		document.getElementById('TituBaseEstab555').style.backgroundColor = "";

	}else if(selec==4){
		document.getElementById("coefBaseCem").value = 0.115;
		document.getElementById("coefBaseCem").style.display='inline';

		document.getElementById('TituBaseEstab1').style.backgroundColor = "#A9BCF5";
		document.getElementById('TituBaseEstab55').style.backgroundColor = "#A9BCF5";
		document.getElementById('TituBaseEstab555').style.backgroundColor = "#A9BCF5";

		//Desactivar las demas
		document.getElementById('TituBaseEstab22').style.backgroundColor = "";
		document.getElementById('TituBaseEstab222').style.backgroundColor = "";

		document.getElementById('TituBaseEstab33').style.backgroundColor = "";
		document.getElementById('TituBaseEstab333').style.backgroundColor = "";

		document.getElementById('TituBaseEstab44').style.backgroundColor = "";
		document.getElementById('TituBaseEstab444').style.backgroundColor = "";

		document.getElementById('TituBaseEstab11').style.backgroundColor = "";
		document.getElementById('TituBaseEstab111').style.backgroundColor = "";
	}
}
//segundoooo
function Esta1(){
	var selec = document.getElementById("cmbEstabilizadaVidaRema").value;
	if (selec == 0) {
		document.getElementById("coefBaseCem1").value = 0.275;
		document.getElementById("coefBaseCem1").style.display='inline';

		document.getElementById('1TituBaseEstab11').style.backgroundColor = "#A9BCF5";
		document.getElementById('1TituBaseEstab111').style.backgroundColor = "#A9BCF5";
		document.getElementById('1TituBaseEstab1111').style.backgroundColor = "#A9BCF5";

		//Desactivar las demas
		document.getElementById('1TituBaseEstab222').style.backgroundColor = "";
		document.getElementById('1TituBaseEstab2222').style.backgroundColor = "";

		document.getElementById('1TituBaseEstab333').style.backgroundColor = "";
		document.getElementById('1TituBaseEstab3333').style.backgroundColor = "";

		document.getElementById('1TituBaseEstab444').style.backgroundColor = "";
		document.getElementById('1TituBaseEstab4444').style.backgroundColor = "";

		document.getElementById('1TituBaseEstab555').style.backgroundColor = "";
		document.getElementById('1TituBaseEstab5555').style.backgroundColor = "";

	}else if (selec == 1) {
		document.getElementById("coefBaseCem1").value = 0.20 ;
		document.getElementById("coefBaseCem1").style.display='inline';

		document.getElementById('1TituBaseEstab11').style.backgroundColor = "#A9BCF5";
		document.getElementById('1TituBaseEstab222').style.backgroundColor = "#A9BCF5";
		document.getElementById('1TituBaseEstab2222').style.backgroundColor = "#A9BCF5";

		//Desactivar las demas
		document.getElementById('1TituBaseEstab111').style.backgroundColor = "";
		document.getElementById('1TituBaseEstab1111').style.backgroundColor = "";

		document.getElementById('1TituBaseEstab333').style.backgroundColor = "";
		document.getElementById('1TituBaseEstab3333').style.backgroundColor = "";

		document.getElementById('1TituBaseEstab444').style.backgroundColor = "";
		document.getElementById('1TituBaseEstab4444').style.backgroundColor = "";

		document.getElementById('1TituBaseEstab555').style.backgroundColor = "";
		document.getElementById('1TituBaseEstab5555').style.backgroundColor = "";

	}else if (selec==2) {
		document.getElementById("coefBaseCem1").value = 0.175 ;
		document.getElementById("coefBaseCem1").style.display='inline';

		document.getElementById('1TituBaseEstab11').style.backgroundColor = "#A9BCF5";
		document.getElementById('1TituBaseEstab333').style.backgroundColor = "#A9BCF5";
		document.getElementById('1TituBaseEstab3333').style.backgroundColor = "#A9BCF5";

		//Desactivar las demas
		document.getElementById('1TituBaseEstab222').style.backgroundColor = "";
		document.getElementById('1TituBaseEstab2222').style.backgroundColor = "";

		document.getElementById('1TituBaseEstab111').style.backgroundColor = "";
		document.getElementById('1TituBaseEstab1111').style.backgroundColor = "";

		document.getElementById('1TituBaseEstab444').style.backgroundColor = "";
		document.getElementById('1TituBaseEstab4444').style.backgroundColor = "";

		document.getElementById('1TituBaseEstab555').style.backgroundColor = "";
		document.getElementById('1TituBaseEstab5555').style.backgroundColor = "";

	}else if(selec==3){
		document.getElementById("coefBaseCem1").value = 0.15 ;
		document.getElementById("coefBaseCem1").style.display='inline';

		document.getElementById('1TituBaseEstab11').style.backgroundColor = "#A9BCF5";
		document.getElementById('1TituBaseEstab444').style.backgroundColor = "#A9BCF5";
		document.getElementById('1TituBaseEstab4444').style.backgroundColor = "#A9BCF5";

		//Desactivar las demas
		document.getElementById('1TituBaseEstab222').style.backgroundColor = "";
		document.getElementById('1TituBaseEstab2222').style.backgroundColor = "";

		document.getElementById('1TituBaseEstab333').style.backgroundColor = "";
		document.getElementById('1TituBaseEstab3333').style.backgroundColor = "";

		document.getElementById('1TituBaseEstab111').style.backgroundColor = "";
		document.getElementById('1TituBaseEstab1111').style.backgroundColor = "";

		document.getElementById('1TituBaseEstab555').style.backgroundColor = "";
		document.getElementById('1TituBaseEstab5555').style.backgroundColor = "";

	}else if(selec==4){
		document.getElementById("coefBaseCem1").value = 0.115;
		document.getElementById("coefBaseCem1").style.display='inline';

		document.getElementById('1TituBaseEstab11').style.backgroundColor = "#A9BCF5";
		document.getElementById('1TituBaseEstab555').style.backgroundColor = "#A9BCF5";
		document.getElementById('1TituBaseEstab5555').style.backgroundColor = "#A9BCF5";

		//Desactivar las demas
		document.getElementById('1TituBaseEstab222').style.backgroundColor = "";
		document.getElementById('1TituBaseEstab2222').style.backgroundColor = "";

		document.getElementById('1TituBaseEstab333').style.backgroundColor = "";
		document.getElementById('1TituBaseEstab3333').style.backgroundColor = "";

		document.getElementById('1TituBaseEstab444').style.backgroundColor = "";
		document.getElementById('1TituBaseEstab4444').style.backgroundColor = "";

		document.getElementById('1TituBaseEstab111').style.backgroundColor = "";
		document.getElementById('1TituBaseEstab1111').style.backgroundColor = "";
	}
}
//primero
function Sub(){
	var selec = document.getElementById("cmbGranularFactor").value;
	
	if (selec == 0) {
		document.getElementById("coefBaseGra").value =0.12;
		document.getElementById("coefBaseGra").style.display= 'inline';

		document.getElementById('TituBaseSubyGranu1').style.backgroundColor = "#A9BCF5";
		document.getElementById('TituBaseSubyGranu11').style.backgroundColor = "#A9BCF5";
		document.getElementById('TituBaseSubyGranu111').style.backgroundColor = "#A9BCF5";

		//Desactivar las demas
		document.getElementById('TituBaseSubyGranu22').style.backgroundColor = "";
		document.getElementById('TituBaseSubyGranu222').style.backgroundColor = "";

	}else if (selec == 1) {
		document.getElementById("coefBaseGra").value =0.05;
		document.getElementById("coefBaseGra").style.display= 'inline';

		document.getElementById('TituBaseSubyGranu1').style.backgroundColor = "#A9BCF5";
		document.getElementById('TituBaseSubyGranu22').style.backgroundColor = "#A9BCF5";
		document.getElementById('TituBaseSubyGranu222').style.backgroundColor = "#A9BCF5";

		//Desactivar las demas
		document.getElementById('TituBaseSubyGranu11').style.backgroundColor = "";
		document.getElementById('TituBaseSubyGranu111').style.backgroundColor = "";
	}
}
//segundo
function Sub1(){
	var selec = document.getElementById("cmbGranularVidaRema").value;

	if (selec == 0) {
		document.getElementById("coefBaseGra1").value =0.12;
		document.getElementById("coefBaseGra1").style.display= 'inline';

		document.getElementById('1TituBaseSubyGranu11').style.backgroundColor = "#A9BCF5";
		document.getElementById('1TituBaseSubyGranu111').style.backgroundColor = "#A9BCF5";
		document.getElementById('1TituBaseSubyGranu1111').style.backgroundColor = "#A9BCF5";

		//Desactivar las demas
		document.getElementById('1TituBaseSubyGranu222').style.backgroundColor = "";
		document.getElementById('1TituBaseSubyGranu2222').style.backgroundColor = "";
		

	}else if (selec == 1) {
		document.getElementById("coefBaseGra1").value =0.05;
		document.getElementById("coefBaseGra1").style.display= 'inline';

		document.getElementById('1TituBaseSubyGranu11').style.backgroundColor = "#A9BCF5";
		document.getElementById('1TituBaseSubyGranu222').style.backgroundColor = "#A9BCF5";
		document.getElementById('1TituBaseSubyGranu2222').style.backgroundColor = "#A9BCF5";

		//Desactivar las demas
		document.getElementById('1TituBaseSubyGranu111').style.backgroundColor = "";
		document.getElementById('1TituBaseSubyGranu1111').style.backgroundColor = "";
	}
}
//primero
function subGranular (){
	var selec = document.getElementById("cmbSubGranularFactor").value;

	if (selec == "") {
		
		
		
	}else if (selec == 0) {
		document.getElementById('coefSubBase').style.display = 'inline';
		document.getElementById("coefSubBase").value =0.12;

		document.getElementById('TituSubyGranu1').style.backgroundColor = "#A9BCF5";
		document.getElementById('TituSubyGranu11').style.backgroundColor = "#A9BCF5";
		document.getElementById('TituSubyGranu111').style.backgroundColor = "#A9BCF5";

		//Desactivar las demas
		document.getElementById('TituSubyGranu22').style.backgroundColor = "";
		document.getElementById('TituSubyGranu222').style.backgroundColor = "";

		
	}else if (selec == 1) {
		document.getElementById('coefSubBase').style.display = 'inline';
		document.getElementById("coefSubBase").value =0.05;
		document.getElementById('TituSubyGranu1').style.backgroundColor = "#A9BCF5";
		document.getElementById('TituSubyGranu22').style.backgroundColor = "#A9BCF5";
		document.getElementById('TituSubyGranu222').style.backgroundColor = "#A9BCF5";

		//Desactivar las demas
		document.getElementById('TituSubyGranu11').style.backgroundColor = "";
		document.getElementById('TituSubyGranu111').style.backgroundColor = "";

	}

}
//segundo
function subGranular1 (){
	var selec = document.getElementById("cmbSubGranularVida").value;

	if (selec == "") {
		document.getElementById("coefSubBase1").value ='';

	}else if (selec == 0) {		
		document.getElementById('coefSubBase1').style.display = 'inline';
		document.getElementById("coefSubBase1").value =0.12;

		document.getElementById('1TituSubyGranu11').style.backgroundColor = "#A9BCF5";
		document.getElementById('1TituSubyGranu111').style.backgroundColor = "#A9BCF5";
		document.getElementById('1TituSubyGranu1111').style.backgroundColor = "#A9BCF5";

		//Desactivar las demas
		document.getElementById('1TituSubyGranu222').style.backgroundColor = "";
		document.getElementById('1TituSubyGranu2222').style.backgroundColor = "";
		

	}else if (selec == 1) {
		document.getElementById('coefSubBase1').style.display = 'inline';
		document.getElementById("coefSubBase1").value =0.05;

		document.getElementById('1TituSubyGranu11').style.backgroundColor = "#A9BCF5";
		document.getElementById('1TituSubyGranu222').style.backgroundColor = "#A9BCF5";
		document.getElementById('1TituSubyGranu2222').style.backgroundColor = "#A9BCF5";

		//Desactivar las demas
		document.getElementById('1TituSubyGranu111').style.backgroundColor = "";
		document.getElementById('1TituSubyGranu1111').style.backgroundColor = "";
	}

}
//FIn Espesores.js

//Funcion calcular presion aplicada por el plato de carga
function PresionPlato(){
	var carga = document.getElementById("carga").value;
	var radio = document.getElementById("radioPlato").value;
	var total = (carga/(Math.PI *Math.pow(radio,2)));
	var total2 = total.toFixed(3);
	document.getElementById("presionPlato").value = total2;
	//Reporte
	document.getElementById('recibeformulaPres').innerHTML = "p = "+carga+" lb / (3.14 * "+radio+" in ^ 2)";
	document.getElementById('recibeformulaPres1').innerHTML = "p = "+total.toFixed(3)+" psi";
}
//Funcion Tipo de Base
function TipoDeBase(){

	var selec= document.getElementById("cmbBases").value;
	var Temperatura = document.getElementById("temperatura").value;
	var carpetaAsfal = document.getElementById('espesorCarpAs').value;
	//Base Granular
	var g2=(-9.75931139328379E-17*Math.pow(Temperatura,9))+(5.46986907807787E-14*Math.pow(Temperatura,8))+(-1.27654962067594E-11*Math.pow(Temperatura,7))+(1.58864156551974E-09*Math.pow(Temperatura,6))+(-1.1023753410111E-07*Math.pow(Temperatura,5))+(3.76645182242896E-06*Math.pow(Temperatura,4))+(-6.53196229905006E-06*Math.pow(Temperatura,3))+(-0.00407329228255549*Math.pow(Temperatura,2))+(0.123821446090005*Temperatura)+(0.000495264121354921);
	var g4=(-1.19715687597883E-16*Math.pow(Temperatura,9))+(6.79683571074634E-14*Math.pow(Temperatura,8))+(-1.60371776893476E-11*Math.pow(Temperatura,7))+(2.0109845212668E-09*Math.pow(Temperatura,6))+(-1.39768070117618E-07*Math.pow(Temperatura,5))+(4.71830866821676E-06*Math.pow(Temperatura,4))+(-3.37913871817364E-06*Math.pow(Temperatura,3))+(-0.00521489431412192*Math.pow(Temperatura,2))+(0.149310492735822*Temperatura)+(0.000428946767669913);
	var g8=(-7.50532015925703E-17*Math.pow(Temperatura,9))+(4.60559688217666E-14*Math.pow(Temperatura,8))+(-1.17563329134641E-11*Math.pow(Temperatura,7))+(1.59756213119477E-09*Math.pow(Temperatura,6))+(-1.20932032943166E-07*Math.pow(Temperatura,5))+(4.55586268444108E-06*Math.pow(Temperatura,4))+(-2.08575530109556E-05*Math.pow(Temperatura,3))+(-0.00468997049392783*Math.pow(Temperatura,2))+(0.14747257163981*Temperatura)+(0.000354921151597409);
	var g12=(-3.97208981691757E-17*Math.pow(Temperatura,9))+(2.82342417162375E-14*Math.pow(Temperatura,8))+(-8.15889925607528E-12*Math.pow(Temperatura,7))+(1.23533836632328E-09*Math.pow(Temperatura,6))+(-1.03286285635384E-07*Math.pow(Temperatura,5))+(4.33938206434448E-06*Math.pow(Temperatura,4))+(-0.000035185010801797*Math.pow(Temperatura,3))+(-0.00417231872415869*Math.pow(Temperatura,2))+(0.14392283334746*Temperatura)+(0.000308782636238902);
	//Base Tratada Por Cemento
	var c2=(-4.15310099556024E-17*Math.pow(Temperatura,9))+(2.62622743173115E-14*Math.pow(Temperatura,8))+(-6.92666125737089E-12*Math.pow(Temperatura,7))+(9.76354528475776E-10*Math.pow(Temperatura,6))+(-7.7207082727071E-08*Math.pow(Temperatura,5))+(3.10215372678613E-06*Math.pow(Temperatura,4))+(-2.27882734407103E-05*Math.pow(Temperatura,3))+(-0.00299030349196983*Math.pow(Temperatura,2))+(0.106457175686955*Temperatura)+(0.000500063442871124);
	var c4=(2.59127222627986E-17*Math.pow(Temperatura,9))+(-7.03767350978749E-15*Math.pow(Temperatura,8))+(-3.45853147553157E-13*Math.pow(Temperatura,7))+(3.26213264734143E-10*Math.pow(Temperatura,6))+(-4.58844016115734E-08*Math.pow(Temperatura,5))+(2.69893461890547E-06*Math.pow(Temperatura,4))+(-4.66467863020625E-05*Math.pow(Temperatura,3))+(-0.0020598167211574*Math.pow(Temperatura,2))+(0.0982200116850436*Temperatura)+(0.000428806348963917);
	var c8=(2.95215822351919E-17*Math.pow(Temperatura,9))+(-8.20861037376417E-15*Math.pow(Temperatura,8))+(-3.1408641692262E-13*Math.pow(Temperatura,7))+(3.57151756086305E-10*Math.pow(Temperatura,6))+(-5.07102067004439E-08*Math.pow(Temperatura,5))+(2.96892653928182E-06*Math.pow(Temperatura,4))+(-4.98725004263179E-05*Math.pow(Temperatura,3))+(-0.00230019488662947*Math.pow(Temperatura,2))+(0.105814001726685*Temperatura)+(0.000345136123030443);
	var c12=(3.10255979038948E-17*Math.pow(Temperatura,9))+(-7.95009115370183E-15*Math.pow(Temperatura,8))+(-6.29136947074595E-13*Math.pow(Temperatura,7))+(4.26954924540035E-10*Math.pow(Temperatura,6))+(-5.75614386155721E-08*Math.pow(Temperatura,5))+(3.27351174611579E-06*Math.pow(Temperatura,4))+(-5.21425059218927E-05*Math.pow(Temperatura,3))+(-0.00259911620742059*Math.pow(Temperatura,2))+(0.114594311249675*Temperatura)+(0.000306507428604164);
	
	if (Temperatura!=68) {
		if (selec == 1) {
			if(carpetaAsfal >= 0 && carpetaAsfal <=2) {//0 a 2
				var total = (g2 -1)/2+1;
				document.getElementById("FactorCorrec").value=total.toFixed(7);
				document.getElementById('tipoBase').innerHTML = 'G'+carpetaAsfal;

			}else if (carpetaAsfal >= 2 && carpetaAsfal <=4) {//2 a 4
				var total = (((g4 -g2)*(carpetaAsfal-2))/2)+g2;
				document.getElementById("FactorCorrec").value=total.toFixed(7);
				document.getElementById('tipoBase').innerHTML = 'G'+carpetaAsfal;
				


			}else if (carpetaAsfal >= 4 && carpetaAsfal <=8) {//4 a 8
				
				var total = (((g8 -g4)*(carpetaAsfal-4))/4)+g4;
				document.getElementById("FactorCorrec").value=total.toFixed(7);
				document.getElementById('tipoBase').innerHTML = 'G'+carpetaAsfal;
				



			}else if (carpetaAsfal >= 8 && carpetaAsfal <=12) {//8 a 12
				var total = (((g12 -g8)*(carpetaAsfal-8))/4)+g8;
				document.getElementById("FactorCorrec").value=total.toFixed(7);
				document.getElementById('tipoBase').innerHTML = 'G'+carpetaAsfal;
				



			}

		}else if (selec == 2) {
			if(carpetaAsfal >= 0 && carpetaAsfal <=2) {
				var total = (c2 -1)/2+1;
				document.getElementById("FactorCorrec").value=total.toFixed(7);
				document.getElementById('tipoBase').innerHTML = 'G'+carpetaAsfal;
				

			}else if (carpetaAsfal >= 2 && carpetaAsfal <=4) {
				var total = (((c4 -c2)*(carpetaAsfal-2))/2)+c2;
				document.getElementById("FactorCorrec").value=total.toFixed(7);
				document.getElementById('tipoBase').innerHTML = 'G'+carpetaAsfal;
				

			}else if (carpetaAsfal >= 4 && carpetaAsfal <=8) {
				var total = (((c8 -c4)*(carpetaAsfal-4))/4)+c4;
				document.getElementById("FactorCorrec").value=total.toFixed(7);
				document.getElementById('tipoBase').innerHTML = 'G'+carpetaAsfal;
				

			}else if (carpetaAsfal >= 8 && carpetaAsfal <=12) {
				
				var total = (((c12 -c8)*(carpetaAsfal-8))/4)+c8;
				document.getElementById("FactorCorrec").value=total.toFixed(7);
				document.getElementById('tipoBase').innerHTML = 'G'+carpetaAsfal;
				

			}


		}

	}else if (Temperatura==68) {
		document.getElementById("FactorCorrec").value=1;
	}
}


function D0Corregido(){
	var defleCentroCarga = document.getElementById("defleCentroCarga").value;
	var factor = document.getElementById("FactorCorrec").value;
	var D0Corregido = defleCentroCarga * factor;
	document.getElementById("totalD0Cor").value= D0Corregido;
	document.getElementById("recibeformulad0Corr").innerHTML= "d0 corregido = "+defleCentroCarga+" in * "+factor;
	document.getElementById("recibeformulad0Corr1").innerHTML= "d0 corregido = "+D0Corregido+" in";
	document.getElementById("recibetextFig").innerHTML= "En la Figura 1 se puede verificar que el valor del factor corrección es "+factor+". Una vez obtenido el factor de corrección, se procede a corregir la deflexión al centro de carga con la siguiente ecuación:";
}

function EpMr() {
	var p = document.getElementById("presionPlato").value;
	var a = document.getElementById("radioPlato").value;
	var mr = document.getElementById("moduloResRetro").value;
	var D = document.getElementById("espesorTotalPav").value;
	var cor = document.getElementById("totalD0Cor").value;
	var total;
	for (i = 0; i < 100; i += 0.01) {
		var ParteB= eval(1-(1/(Math.pow(1+(Math.pow((D/a),2)),1/2))));
		var EpMr= eval( ( (1.5*p*a*(1/(mr*(Math.pow((1+(Math.pow(((D/a)*(Math.pow((i),1/3))),2))),1/2))))) + ( 1.5*p*a*(ParteB/(i*mr)) ) ) - cor);
		if (0 <= EpMr && EpMr <= 0.001) {
			total=i;
			document.getElementById("recibeD0").innerHTML = "A = d0 = "+cor+" in"; 
			document.getElementById("recibeA").innerHTML = "B = 1.5 * "+p+" psi * "+a+" in";
			document.getElementById("recibeB").innerHTML = "C = {[1-(1/(1+("+D+" in/"+a+" in)^2)^1/2)]}"
			document.getElementById("recibeC").innerHTML = "D = {"+mr+" psi*[1+(("+D+" in/"+a+" in)*((Ep/Mr)^1/3))^2]^1/2}";
			document.getElementById("recibeD").innerHTML = "E = Ep/Mr * "+mr+" psi";
			document.getElementById("recibeEpMr").innerHTML = "Ep/Mr = "+total.toFixed(3);

		}
	}
	document.getElementById("totalEpMr").value = total.toFixed(3);
	//REPORTE DESCRIP
	



}

function CalculoSN() {
	var zr = document.getElementById("zr").value;

	var so = document.getElementById("desviEst").value;

	var w18 = document.getElementById("nroFinal").value;

	var psi = document.getElementById("totalPsi").innerHTML;

	var mre = document.getElementById("totalModResEfectivo").value;

	var total = 0;
	for (i = 1; i < 10; i += 0.0001) {
		var sn = eval((zr * so) + (9.36 * Math.log10(i + 1)) - (0.2) + (((Math.log10((psi) / (4.2 - 1.5)))) / (0.4 + (1094 / Math.pow((i + 1), 5.19)))) + (2.32 * Math.log10(mre))) - 8.07 - (Math.log10(w18));
		if (0 <= sn && sn <=0.0001) {
			total = i;
			document.getElementById("recibeW18").innerHTML ="A = Nro. ESAL´S final = "+w18+" ESAL´s";
			document.getElementById("recibeWA").innerHTML = "B = [("+zr+" * "+so+") + (9.36 * Log10(SNfuturo + 1)) - (0.2)]";
			document.getElementById("recibeWB").innerHTML = "C = {Log10[("+psi+") / (4.2 - 1.5)]}";
			document.getElementById("recibeWC").innerHTML = "D = {0.4 + [1094 / ((SNfuturo + 1)^ 5.19)]} ";
			document.getElementById("recibeWD").innerHTML = "E = {[2.32 * Log10("+mre+" psi)]- 8.07 }";
			document.getElementById("recibeSN").innerHTML = "Con cualquiera de ellas se obtiene el mismo valor de SNfuturo = "+total.toFixed(3)+". Ahora bien, si no se puede resolver la ecuación matemáticamente se puede utilizar el ábaco con el cual se llegan a resultados similares, tal como se muestra en la Figura 3.";

			document.getElementById("recibeW181").innerHTML ="A = Nro. ESAL´S final = "+w18+" ESAL´s";
			document.getElementById("recibeWA1").innerHTML = "B = [("+zr+" * "+so+") + (9.36 * Log10(SNfuturo + 1)) - (0.2)]";
			document.getElementById("recibeWB1").innerHTML = "C = {Log10[("+psi+") / (4.2 - 1.5)]}";
			document.getElementById("recibeWC1").innerHTML = "D = {0.4 + [1094 / ((SNfuturo + 1)^ 5.19)]} ";
			document.getElementById("recibeWD1").innerHTML = "E = {[2.32 * Log10("+mre+" psi)]- 8.07 }";
			document.getElementById("recibeSN1").innerHTML = "Con cualquiera de ellas se obtiene el mismo valor de SNfuturo = "+total.toFixed(3)+". Ahora bien, si no se puede resolver la ecuación matemáticamente se puede utilizar el ábaco con el cual se llegan a resultados similares, tal como se muestra en la Figura 6.";

			document.getElementById("recibeW182").innerHTML ="A = Nro. ESAL´S final = "+w18+" ESAL´s";
			document.getElementById("recibeWA2").innerHTML = "B = [("+zr+" * "+so+") + (9.36 * Log10(SNfuturo + 1)) - (0.2)]";
			document.getElementById("recibeWB2").innerHTML = "C = {Log10[("+psi+") / (4.2 - 1.5)]}";
			document.getElementById("recibeWC2").innerHTML = "D = {0.4 + [1094 / ((SNfuturo + 1)^ 5.19)]} ";
			document.getElementById("recibeWD2").innerHTML = "E = {[2.32 * Log10("+mre+" psi)]- 8.07 }";
			document.getElementById("recibeSN2").innerHTML = "Con cualquiera de ellas se obtiene el mismo valor de SNfuturo = "+total.toFixed(3)+". Ahora bien, si no se puede resolver la ecuación matemáticamente se puede utilizar el ábaco con el cual se llegan a resultados similares, tal como se muestra en la Figura 8.";
			
		}
	}
	document.getElementById("totalSN").value=total.toFixed(3);

}

function EsalsRemanente(a) {
	//FORMULA PARA METODO VIDA REMANENTE
	var zr = document.getElementById("zrRemanente").value;
	var so = document.getElementById("desvRemanente").value;
	var sn = document.getElementById("sn0Remanente").value;
	var psi = document.getElementById("psiRemanente").value;

	var w18Remanente = Math.pow(10, eval((zr * so) + (9.36 * Math.log10(parseFloat(sn) + 1)) - (0.2) + (((Math.log10((psi)  / (4.2 - 1.5)))) / (0.4 + (1094 / Math.pow((parseFloat(sn) + 1), 5.19)))) + (2.32 * Math.log10(a))) - 8.07);
	document.getElementById("totalW15").value = w18Remanente.toFixed(0);


	document.getElementById("recibeWA15").innerHTML = "B = [(0 * "+so+") + (9.36 * Log10("+sn+" + 1)) - (0.2)]";
	document.getElementById("recibeWB15").innerHTML = "C = {Log10[(2.7) / (4.2 - 1.5)]}";
	document.getElementById("recibeWC15").innerHTML = "D = {0.4 + [1094 / (("+sn+" + 1)^ 5.19)]} ";
	document.getElementById("recibeWD15").innerHTML = "E = {[2.32 * Log10("+document.getElementById("totalModResEfectivo").value+")]- 8.07 }";
	document.getElementById("recibeW15").innerHTML = "A (Nro ESAL´S 1.5) = 10^[B+(C/D)+E]";
	document.getElementById("recibeTotalW15").innerHTML = "A = Nro ESAL´S 1.5= "+w18Remanente.toFixed(0);
	
}



function ModuloResilienteEfectivo(){
	var resretro = document.getElementById("moduloResRetro").value;
	var D = document.getElementById("factorc").value;
	var total = (resretro*D);

	document.getElementById("totalModResEfectivo").value = total.toFixed(3);
	// REPORTE METODO NDT
	document.getElementById("recibeModResEfectivo").innerHTML = "Mre = ("+resretro+" psi * "+D+")";
	document.getElementById("recibeTotalModResEfectivo").innerHTML = "Mre = "+total.toFixed(3)+" psi";
	document.getElementById("recibeTextModRes").innerHTML = "Con el módulo resiliente efectivo de la subrasante ("+total.toFixed(3)+" psi), se procede a calcular el SNfuturo, para ello se necesitan los siguientes datos:";
	//REPORTE METODO FACTOR
	document.getElementById("recibeModResEfectivo1").innerHTML = "Mre = ("+resretro+" psi * "+D+")";
	document.getElementById("recibeTotalModResEfectivo1").innerHTML = "Mre = "+total.toFixed(3)+" psi";
	document.getElementById("recibeTextModRes1").innerHTML = "Con el módulo resiliente efectivo de la subrasante ("+total.toFixed(3)+" psi), se procede a calcular el SNfuturo, para ello se necesitan los siguientes datos:";

	//REPORTE METODO VIDA
	document.getElementById("recibeModResEfectivo2").innerHTML = "Mre = ("+resretro+" psi * "+D+")";
	document.getElementById("recibeTotalModResEfectivo2").innerHTML = "Mre = "+total.toFixed(3)+" psi";
	document.getElementById("recibeTextModRes2").innerHTML = "Con el módulo resiliente efectivo de la subrasante ("+total.toFixed(3)+" psi), se procede a calcular el SNfuturo, para ello se necesitan los siguientes datos:";



}




function ModuloEfectivoPav(){
	var totalEp = document.getElementById("totalEpMr").value;
	var Res = document.getElementById("moduloResRetro").value;

	var tot = Res* totalEp;

	document.getElementById("totalModEfectivoPav").value = tot.toFixed(3);

	//reporte
	document.getElementById('recibedescriEpMr2').innerHTML = "Con el valor Ep/Mr, estimado por la Figura 2 o por la ecuación, se calcula el valor del módulo efectivo de las capas del pavimento (Ep) mediante una ecuación, que en este caso es de "+tot.toFixed(3)+" psi. En esta ecuación el “Mr” es el módulo resiliente retrocalculado:"
	
	document.getElementById("recibeEp").innerHTML = "Ep = "+totalEp+" * "+Res+" psi";
	document.getElementById("recibeEp2").innerHTML = "Ep = "+tot.toFixed(3)+" psi";



}

var totalMr1;
var totalMr2;
var totalMr3;
//***********Modulo Resiliente
var totalmodulo1;
var totalmodulo2;
var totalmodulo3;
function DeflexionesDistancias(){
	//FUNCION PRESION DE PLATO DE CARGA
	var carga = document.getElementById("carga").value;
	var radio = document.getElementById("radioPlato").value;
	var presionPl = (carga/(Math.PI *Math.pow(radio,2)));
	var totalPresionPlato = presionPl.toFixed(3);
	//FUNCION FACTOR DE CORRECCION
	var selec= document.getElementById("cmbBases").value;
	var Temperatura = document.getElementById("temperatura").value;
	var carpetaAsfal = document.getElementById('espesorCarpAs').value;
	//Base Granular
	var g2=(-9.75931139328379E-17*Math.pow(Temperatura,9))+(5.46986907807787E-14*Math.pow(Temperatura,8))+(-1.27654962067594E-11*Math.pow(Temperatura,7))+(1.58864156551974E-09*Math.pow(Temperatura,6))+(-1.1023753410111E-07*Math.pow(Temperatura,5))+(3.76645182242896E-06*Math.pow(Temperatura,4))+(-6.53196229905006E-06*Math.pow(Temperatura,3))+(-0.00407329228255549*Math.pow(Temperatura,2))+(0.123821446090005*Temperatura)+(0.000495264121354921);
	var g4=(-1.19715687597883E-16*Math.pow(Temperatura,9))+(6.79683571074634E-14*Math.pow(Temperatura,8))+(-1.60371776893476E-11*Math.pow(Temperatura,7))+(2.0109845212668E-09*Math.pow(Temperatura,6))+(-1.39768070117618E-07*Math.pow(Temperatura,5))+(4.71830866821676E-06*Math.pow(Temperatura,4))+(-3.37913871817364E-06*Math.pow(Temperatura,3))+(-0.00521489431412192*Math.pow(Temperatura,2))+(0.149310492735822*Temperatura)+(0.000428946767669913);
	var g8=(-7.50532015925703E-17*Math.pow(Temperatura,9))+(4.60559688217666E-14*Math.pow(Temperatura,8))+(-1.17563329134641E-11*Math.pow(Temperatura,7))+(1.59756213119477E-09*Math.pow(Temperatura,6))+(-1.20932032943166E-07*Math.pow(Temperatura,5))+(4.55586268444108E-06*Math.pow(Temperatura,4))+(-2.08575530109556E-05*Math.pow(Temperatura,3))+(-0.00468997049392783*Math.pow(Temperatura,2))+(0.14747257163981*Temperatura)+(0.000354921151597409);
	var g12=(-3.97208981691757E-17*Math.pow(Temperatura,9))+(2.82342417162375E-14*Math.pow(Temperatura,8))+(-8.15889925607528E-12*Math.pow(Temperatura,7))+(1.23533836632328E-09*Math.pow(Temperatura,6))+(-1.03286285635384E-07*Math.pow(Temperatura,5))+(4.33938206434448E-06*Math.pow(Temperatura,4))+(-0.000035185010801797*Math.pow(Temperatura,3))+(-0.00417231872415869*Math.pow(Temperatura,2))+(0.14392283334746*Temperatura)+(0.000308782636238902);
	//Base Tratada Por Cemento
	var c2=(-4.15310099556024E-17*Math.pow(Temperatura,9))+(2.62622743173115E-14*Math.pow(Temperatura,8))+(-6.92666125737089E-12*Math.pow(Temperatura,7))+(9.76354528475776E-10*Math.pow(Temperatura,6))+(-7.7207082727071E-08*Math.pow(Temperatura,5))+(3.10215372678613E-06*Math.pow(Temperatura,4))+(-2.27882734407103E-05*Math.pow(Temperatura,3))+(-0.00299030349196983*Math.pow(Temperatura,2))+(0.106457175686955*Temperatura)+(0.000500063442871124);
	var c4=(2.59127222627986E-17*Math.pow(Temperatura,9))+(-7.03767350978749E-15*Math.pow(Temperatura,8))+(-3.45853147553157E-13*Math.pow(Temperatura,7))+(3.26213264734143E-10*Math.pow(Temperatura,6))+(-4.58844016115734E-08*Math.pow(Temperatura,5))+(2.69893461890547E-06*Math.pow(Temperatura,4))+(-4.66467863020625E-05*Math.pow(Temperatura,3))+(-0.0020598167211574*Math.pow(Temperatura,2))+(0.0982200116850436*Temperatura)+(0.000428806348963917);
	var c8=(2.95215822351919E-17*Math.pow(Temperatura,9))+(-8.20861037376417E-15*Math.pow(Temperatura,8))+(-3.1408641692262E-13*Math.pow(Temperatura,7))+(3.57151756086305E-10*Math.pow(Temperatura,6))+(-5.07102067004439E-08*Math.pow(Temperatura,5))+(2.96892653928182E-06*Math.pow(Temperatura,4))+(-4.98725004263179E-05*Math.pow(Temperatura,3))+(-0.00230019488662947*Math.pow(Temperatura,2))+(0.105814001726685*Temperatura)+(0.000345136123030443);
	var c12=(3.10255979038948E-17*Math.pow(Temperatura,9))+(-7.95009115370183E-15*Math.pow(Temperatura,8))+(-6.29136947074595E-13*Math.pow(Temperatura,7))+(4.26954924540035E-10*Math.pow(Temperatura,6))+(-5.75614386155721E-08*Math.pow(Temperatura,5))+(3.27351174611579E-06*Math.pow(Temperatura,4))+(-5.21425059218927E-05*Math.pow(Temperatura,3))+(-0.00259911620742059*Math.pow(Temperatura,2))+(0.114594311249675*Temperatura)+(0.000306507428604164);
	
	if (Temperatura!=68) {
		if (selec == 1) {
			if(carpetaAsfal >= 0 && carpetaAsfal <=2) {//0 a 2
				var totalfactor = (g2 -1)/2+1;

			}else if (carpetaAsfal >= 2 && carpetaAsfal <=4) {//2 a 4
				var totalfactor = (((g4 -g2)*(carpetaAsfal-2))/2)+g2;

			}else if (carpetaAsfal >= 4 && carpetaAsfal <=8) {//4 a 8
				
				var totalfactor = (((g8 -g4)*(carpetaAsfal-4))/4)+g4;

			}else if (carpetaAsfal >= 8 && carpetaAsfal <=12) {//8 a 12
				var totalfactor = (((g12 -g8)*(carpetaAsfal-8))/4)+g8;

			}

		}else if (selec == 2) {
			if(carpetaAsfal >= 0 && carpetaAsfal <=2) {
				var total = (c2 -1)/2+1;

			}else if (carpetaAsfal >= 2 && carpetaAsfal <=4) {
				var total = (((c4 -c2)*(carpetaAsfal-2))/2)+c2;

			}else if (carpetaAsfal >= 4 && carpetaAsfal <=8) {
				var total = (((c8 -c4)*(carpetaAsfal-4))/4)+c4;

			}else if (carpetaAsfal >= 8 && carpetaAsfal <=12) {
				
				var total = (((c12 -c8)*(carpetaAsfal-8))/4)+c8;

			}


		}

	}else if (Temperatura==68) {
		var totalfactor = 1;
	}
	//FUNCION D0 CORREGIDO
	var defleCentroCarga = document.getElementById("defleCentroCarga").value;
	var D0Corregido = defleCentroCarga * totalfactor;


	//DEFLEXIONES Y DISTANCIAS
	var carga = document.getElementById("carga").value;
	var deflexion1 = document.getElementById("deflexion1").value;
	var distancia1 = document.getElementById("distancia1").value;
	totalmodulo1 = (0.24* carga)/(deflexion1*distancia1);
		//EP/MR  DEFLEXION Y DISTANCIA 1
		
		var a = document.getElementById("radioPlato").value;
		var D = document.getElementById("espesorTotalPav").value;
		
		for (i = 0; i < 100; i += 0.01) {
			var ParteB= eval(1-(1/(Math.pow(1+(Math.pow((D/a),2)),1/2))));
			var EpMr1= eval( ( (1.5*totalPresionPlato*a*(1/(totalmodulo1*(Math.pow((1+(Math.pow(((D/a)*(Math.pow((i),1/3))),2))),1/2))))) + ( 1.5*totalPresionPlato*a*(ParteB/(i*totalmodulo1)) ) ) - D0Corregido);
			if (0 <= EpMr1 && EpMr1 <= 0.001) {
				totalMr1=i;
			}
		}

	//Deflexion y Distancia 2
	var deflexion2 = document.getElementById("deflexion2").value;
	var distancia2 = document.getElementById("distancia2").value;
	totalmodulo2 = (0.24* carga)/(deflexion2*distancia2);
		//EP/MR  DEFLEXION Y DISTANCIA 2
		
		for (i = 0; i < 100; i += 0.01) {
			var ParteB= eval(1-(1/(Math.pow(1+(Math.pow((D/a),2)),1/2))));
			var EpMr2= eval( ( (1.5*totalPresionPlato*a*(1/(totalmodulo2*(Math.pow((1+(Math.pow(((D/a)*(Math.pow((i),1/3))),2))),1/2))))) + ( 1.5*totalPresionPlato*a*(ParteB/(i*totalmodulo2)) ) ) - D0Corregido);
			if (0 <= EpMr2 && EpMr2 <= 0.001) {
				totalMr2=i;
			}
		}
		

	//Deflexion y Distancia 3
	var deflexion3 = document.getElementById("deflexion3").value;
	var distancia3 = document.getElementById("distancia3").value;
	totalmodulo3 = (0.24* carga)/(deflexion3*distancia3);

		//EP/MR  DEFLEXION Y DISTANCIA 3
		
		for (i = 0; i < 100; i += 0.01) {
			var ParteB= eval(1-(1/(Math.pow(1+(Math.pow((D/a),2)),1/2))));
			var EpMr3= eval( ( (1.5*totalPresionPlato*a*(1/(totalmodulo3*(Math.pow((1+(Math.pow(((D/a)*(Math.pow((i),1/3))),2))),1/2))))) + ( 1.5*totalPresionPlato*a*(ParteB/(i*totalmodulo3)) ) ) - D0Corregido);
			if (0 <= EpMr3 && EpMr3 <= 0.001) {
				totalMr3=i;
			}
		}

	}
	var validarTension1;
	var validarTension2;
	var validarTension3;

	function BulboTension(){
		var a = document.getElementById("radioPlato").value;

		var fre = document.getElementById('fres').value;
		if (fre=='') {
			var espeTot = document.getElementById("espesorTotalPav").value;
			document.getElementById("espesorTotalPavconFre").value = espeTot;

		}else{
			var espesor = document.getElementById("espesorTotalPav").value;
			var espeTot = espesor - fre;
			document.getElementById("espesorTotalPavconFre").value = espeTot;
		}

		validarTension1 = eval(Math.pow(Math.pow(a,2)+Math.pow(espeTot*(Math.pow(totalMr1,1/3)),2),1/2));
		document.getElementById("bulbo").style.display = "inline";
		document.getElementById("bulbo").value = validarTension1;
		var tot1 = validarTension1*0.7;

		validarTension2 = eval(Math.pow(Math.pow(a,2)+Math.pow(espeTot*(Math.pow(totalMr2,1/3)),2),1/2));
		document.getElementById("bulbo").style.display = "inline";
		document.getElementById("bulbo").value = validarTension2;
		var tot2 = validarTension2*0.7;

		validarTension3 = eval(Math.pow(Math.pow(a,2)+Math.pow(espeTot*(Math.pow(totalMr3,1/3)),2),1/2));

		document.getElementById("bulbo").style.display = "inline";
		document.getElementById("bulbo").value = validarTension3;
		var tot3 = validarTension3*0.7;

		var dis1 = document.getElementById('distancia1').value;
		var dis2 = document.getElementById('distancia2').value;
		var dis3 = document.getElementById('distancia3').value;


		if (dis1>tot1) {
			document.getElementById('moduloResRetro').value = totalmodulo1.toFixed(3);
			document.getElementById('recibeformulaBulbo').innerHTML = dis1+" > = 0.7 * "+validarTension1;
			document.getElementById('recibeformulavalidarT').innerHTML = "ae = √("+a+"^2+("+espeTot+"*∛("+totalMr1+" ))^2)";
			document.getElementById('recibeformulaTotvalidarT').innerHTML = "ae = "+validarTension1+" in";
			
			document.getElementById('recibeformMr').innerHTML = "Mr = (0.24*"+document.getElementById('carga').value+")/("+document.getElementById('deflexion1').value+" * "+dis1+")";
			document.getElementById('recibeformMrTot+")"').innerHTML = "Mr = "+totalmodulo1+" psi";

			document.getElementById('recibedefdistrabajada').innerHTML = "Ya ingresados los valores de las 3 distancias y deflexiones en el software y habiendo realizado la comparación de la premisa anterior, se determinó que el cálculo se efectuó con la deflexión y distancia 1.";



		}if (dis2>tot2) {
			document.getElementById('moduloResRetro').value = totalmodulo2.toFixed(3);
			document.getElementById('recibeformulaBulbo').innerHTML = dis2+" > = 0.7 * "+validarTension2;
			document.getElementById('recibeformulavalidarT').innerHTML = "ae=√("+a+"^2+("+espeTot+"*∛("+totalMr2+" ))^2)";
			document.getElementById('recibeformulaTotvalidarT').innerHTML = "ae = "+validarTension2+" in";

			document.getElementById('recibeformMr').innerHTML = "Mr = (0.24*"+document.getElementById('carga').value+")/("+document.getElementById('deflexion2').value+" * "+dis2+")";
			document.getElementById('recibeformMrTot').innerHTML = "Mr = "+totalmodulo2+" psi";


			document.getElementById('recibedefdistrabajada').innerHTML = "Ya ingresados los valores de las 3 distancias y deflexiones en el software y habiendo realizado la comparación de la premisa anterior, se determinó que el cálculo se efectuó con la deflexión y distancia 2.";




		}if (dis3>tot3) {
			document.getElementById('moduloResRetro').value = totalmodulo3.toFixed(3);
			document.getElementById('recibeformulaBulbo').innerHTML = dis3+" > = 0.7 * "+validarTension3;
			document.getElementById('recibeformulavalidarT').innerHTML = "ae=√("+a+"^2+("+espeTot+"*∛("+totalMr3+" ))^2)";
			document.getElementById('recibeformulaTotvalidarT').innerHTML = "ae = "+validarTension3+" in";

			document.getElementById('recibeformMr').innerHTML = "Mr = (0.24*"+document.getElementById('carga').value+")/("+document.getElementById('deflexion3').value+" * "+dis3+")";
			document.getElementById('recibeformMrTot').innerHTML = "Mr = "+totalmodulo3+" psi";


			document.getElementById('recibedefdistrabajada').innerHTML = "Ya ingresados los valores de las 3 distancias y deflexiones en el software y habiendo realizado la comparación de la premisa anterior, se determinó que el cálculo se efectuó con la deflexión y distancia 3.";




		}
	}

	function ActivarFresado(){
		var check = document.getElementById("checkfreseado");
		var textfre = document.getElementById("fres");

		if (check.checked == true) {
			textfre.style.display = "inline";
		}else{
			textfre.style.display = "none";
		}

	}

	function SnefNDT(){
		espeTot = document.getElementById("espesorTotalPav").value;
		ep = document.getElementById("totalModEfectivoPav").value;
		var total = 0.0045
		var fre = document.getElementById("fres").value;
		if (fre=="") {
			var total2 =espeTot-0;
		}else{
			var total2 = espeTot-fre;
		}

		var total1=total*total2*Math.pow(ep,1/3);
		document.getElementById("snefNDT").value = total1.toFixed(3);
		document.getElementById("recibeSnefNDT").innerHTML = "SNef = 0.045 * "+total2+" in *("+ep+" psi)^1/3";
		document.getElementById("recibeTotalSnefNDT").innerHTML = "SNef = "+total1.toFixed(3);
		document.getElementById('recibedescrsnefNDT1').innerHTML ="Este valor también puede ser obtenido usando la Figura 4, en donde se ingresa con el espesor efectivo del pavimento previo ("+total2+" in) y se traza una vertical hasta llegar al valor Ep calculado anteriormente ("+ep+" psi). A partir de este punto se traza una horizontal hasta cortar con el eje de SNef, que en este caso es de "+ total1.toFixed(3)+"."; 
		document.getElementById('recibemodelastica').innerHTML ="En la Figura 5 se obtiene el valor del coeficiente estructural del nuevo espesor de carpeta. Se ingresa con el valor del módulo elástico de la nueva sobrecarpeta ("+ document.getElementById('modelascarpeta').value+" psi) y se traza una línea vertical hasta cortar la curva; luego se traza una linea horizontal hasta cortar el coeficiente estructural, que en este caso es de "+ document.getElementById('coefEstrucCarpAsNDT').value+"."; 
		document.getElementById('recibedescrsnefNDT2').innerHTML ="Una vez obtenido el valor de SNef ("+document.getElementById('snefNDT').value+"), el SN futuro ("+document.getElementById('totalSN').value+") y el coeficiente estructural de la nueva carpeta ("+ document.getElementById('coefEstrucCarpAsNDT').value+") se calcula el espesor de sobrecarpeta mediante la siguiente ecuación:"; 
	}


function SnefFactorCondicion(){
		var fre = document.getElementById("fres").value;

		var EspConcreAs = document.getElementById("espesorCarpAs").value;
		if (fre=="") {
			var total =EspConcreAs-0;
		}else{
			var total = EspConcreAs-fre;
		}
		//Coeficiente Estrutural
		var coef = document.getElementById("coefEstrucCarpAs").value;
		//Espesor de Base
		var EspBase = document.getElementById("espesorBase").value;

		//Combo base
		var select = document.getElementById("cmbBases").value;
		if (select == 1) {
			var coefbas = document.getElementById("coefBaseGra").value;
		}else if(select == 2){
			var coefbas = document.getElementById("coefBaseCem").value;

		}

	//Coeficiente de Drenaje
	var coefDrena = document.getElementById("coefDrenaBase").value;
	var coefDrena2 = document.getElementById("coefDrenaSubBase").value;
	var coefDrena3 = document.getElementById("coefDrenaMaterial").value;
	//Espesor SubBase
	var subbase = document.getElementById("espesorSubBase").value;
	if (subbase =="") {
		subbase = 0;
	}
	//Coeficiente Subbase
	var coefSub = document.getElementById("coefSubBase").value;

	//Material de Mejoramiento
	var EspeMateria = document.getElementById("espesorMaterial").value;
	if (EspeMateria=="") {
		EspeMateria =0;
	}

	//Coeficiente de Material De Mejoramiento
	var coefMejora = document.getElementById("coefMaterial").value;
	if (coefMejora =="") {
		coefMejora =0;
	}
	if (coefDrena2 =="") {
		coefDrena2=0;
	}if (coefDrena3 =="") {
		coefDrena3=0;
	}

	var Resultotal= (total * coef)+(EspBase*coefbas*coefDrena)+(subbase*coefSub*coefDrena2)+(EspeMateria*coefMejora*coefDrena3);


	document.getElementById('recibemodelastica1').innerHTML ="En la Figura 7 se obtiene el valor del coeficiente estructural del nuevo espesor de carpeta. Se ingresa con el valor del módulo elástico de la nueva sobrecarpeta ("+ document.getElementById('modelascarpeta').value+" psi) y se traza una línea vertical hasta cortar la curva; luego se traza una linea horizontal hasta cortar el coeficiente estructural, que en este caso es de "+ document.getElementById('coefEstrucCarpAsFactor').value+"."; 
	document.getElementById("snefFactorCondi").value = Resultotal.toFixed(3);

	

}
function Sn0VidaRemanente(){
	var fre = document.getElementById("fres").value;

	var EspConcreAs = document.getElementById("espesorCarpAs").value;
	if (fre=="") {
		var total =EspConcreAs-0;
	}else{
		var total = EspConcreAs-fre;
	}
	//Coeficiente Estrutural
	var coef = document.getElementById("coefEstrucCarpAs1").value;
	//Espesor de Base
	var EspBase = document.getElementById("espesorBase").value;

	//Combo base
	var select = document.getElementById("cmbBases").value;
	if (select == 1) {
		var coefbas = document.getElementById("coefBaseGra1").value;
	}else if(select == 2){
		var coefbas = document.getElementById("coefBaseCem1").value;

	}

	//Coeficiente de Drenaje
	var coefDrena = document.getElementById("coefDrenaBase").value;
	var coefDrena2 = document.getElementById("coefDrenaSubBase").value;
	var coefDrena3 = document.getElementById("coefDrenaMaterial").value;
	//Espesor SubBase
	var subbase = document.getElementById("espesorSubBase").value;
	if (subbase =="") {
		subbase = 0;
	}
	//Coeficiente Subbase
	var coefSub = document.getElementById("coefSubBase1").value;

	//Material de Mejoramiento
	var EspeMateria = document.getElementById("espesorMaterial").value;
	if (EspeMateria=="") {
		EspeMateria =0;
	}

	//Coeficiente de Material De Mejoramiento
	var coefMejora = document.getElementById("coefMaterial1").value
	if (coefMejora =="") {
		coefMejora =0;
	}
	if (coefDrena2 =="") {
		coefDrena2=0;
	}if (coefDrena3 =="") {
		coefDrena3=0;
	}


	var Resultotal= (total * coef)+(EspBase*coefbas*coefDrena)+(subbase*coefSub*coefDrena2)+(EspeMateria*coefMejora*coefDrena3);
	document.getElementById("sn0Remanente").value = Resultotal;

	//IMPRIMIR
		var coefsub1 = document.getElementById("coefSubBase1").value;
		var coefMejora1 = document.getElementById("coefMaterial1").value;
		var cmbselecSub = document.getElementById('cmbSubGranularVida').value;
		if (cmbselecSub ==''&&coefMejora1=='') {
			//Vida REma
			document.getElementById("recibeSnefVida").innerHTML = "SN0 = ("+total+"*"+coef+") + ("+EspBase+"*"+coefbas+"*"+coefDrena+") + 0 + 0";
			document.getElementById("recibeTotalSnefVida").innerHTML = "SN0 = "+Resultotal.toFixed(3);
		}else if (cmbselecSub!=''&&coefMejora1=='') {
			//VIDA REMA
			document.getElementById("recibeSnefVida").innerHTML = "SN0 = ("+total+"*"+coef+") + ("+EspBase+"*"+coefbas+"*"+coefDrena+") + ("+subbase+"*"+coefsub1+"*"+coefDrena2+") + 0";
			document.getElementById("recibeTotalSnefVida").innerHTML = "SN0 = "+Resultotal.toFixed(3);

		}else if (cmbselecSub!=''&&coefMejora1!='') {
			//VIDA REMA
			document.getElementById("recibeSnefVida").innerHTML = "SN0 = ("+total+"*"+coef+") + ("+EspBase+"*"+coefbas+"*"+coefDrena+") + ("+subbase+"*"+coefsub1+"*"+coefDrena2+") + ("+EspeMateria+"*"+coefMejora1+"*"+coefDrena3+")";
			document.getElementById("recibeTotalSnefVida").innerHTML = "SN0 = "+Resultotal.toFixed(3);
		}else if (cmbselecSub==''&&coefMejora1!='') {
			//VIDA REMA
			document.getElementById("recibeSnefVida").innerHTML = "SN0 = ("+total+"*"+coef+")+("+EspBase+"*"+coefbas+"*"+coefDrena+") + 0 + ("+EspeMateria+"*"+coefMejora1+"*"+coefDrena3+")";
			document.getElementById("recibeTotalSnefVida").innerHTML = "SN0 = "+Resultotal.toFixed(3);
		}
	

}

function Rl(){
	//Esals Inicial
	nroinicial = document.getElementById("nroInicial").value;
	//Esals 1,5
	nroesa = document.getElementById("totalW15").value;

	var total =( 100 * (1-(nroinicial/nroesa)));
	document.getElementById("RL").value = total.toFixed(3);

	//REPORTE
	document.getElementById("recibeRl").innerHTML = "(%)RL = 100 * (1-("+nroinicial+"/"+nroesa+"))"
	document.getElementById("recibeTotalRl").innerHTML = "(%)RL = "+total.toFixed(3);

	
}

function CF(){
	var a = 0.5;
	var b = 0.02818837;
	var c = -0.001447416;
	var d = 6.20945 * Math.pow(10, -5);
	var e = -1.92495 * Math.pow(10, -6);
	var f = 3.97767 * Math.pow(10, -8);
	var g = -5.21916 * Math.pow(10, -10);
	var h = 4.13838 * Math.pow(10, -12);
	var i = -1.79979 * Math.pow(10, -14);
	var j = 3.28454 * Math.pow(10, -17);
    var k = document.getElementById("RL").value//RLL
    var total =  (a) + (b * k) + (c * Math.pow(k, 2)) + (d * Math.pow(k, 3)) + (e * Math.pow(k, 4)) + (f * Math.pow(k, 5)) + (g * Math.pow(k, 6)) + (h * Math.pow(k, 7)) + (i * Math.pow(k, 8)  + (j * Math.pow(k, 9)))

    document.getElementById("totalCF").value = total.toFixed(3);

}
function SnefVidaRemanente(){
	var sn = document.getElementById("sn0Remanente").value;
	var cf =document.getElementById("totalCF").value;

	var total = sn*cf;
	document.getElementById("snefVidaRemanente").value = total.toFixed(3);
	//REPORTE
	document.getElementById("recibeSnefVidaRema").innerHTML = "SNef = "+sn+"*"+cf;
	document.getElementById("recibeTotalSnefVidaRema").innerHTML = "SNef = "+total.toFixed(3);

}
function cargarEjemplo(){

	//AYUDAS GRANULAR
	document.getElementById('ayudagranu').style.display = 'inline';
	document.getElementById('ayudaGraVida').style.display = 'inline';
	
	//GRAFICA GRANULAR
	document.getElementById('recibeContieneG').style.display='inline';
	document.getElementById('recibeContieneC').style.display='none';

	//DEFELXIONES Y DISTANCIAS EN 0
	document.getElementById('deflexion1').value = '';
	document.getElementById('deflexion2').value = '';
	document.getElementById('deflexion3').value = '';
	document.getElementById('distancia1').value = '';
	document.getElementById('distancia2').value = '';
	document.getElementById('distancia3').value = '';
	//formulas drenaje
	document.getElementById("Op1").innerHTML = "m1" + " = " + "1.15" + " + " + "(" + "(" + "(" + "25"+ " - " + "5.00" + ")" + " x " + "(" + "1.00" + " - " + "1.15" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
	document.getElementById("ResOp1").innerHTML = "m1" + " = 1.000" ;

	//Descarga boton granular
	document.getElementById('downgranular').style.display = 'block';
	//Nombre de la gráfica del factor de correcion
	document.getElementById("nombreFactor").innerHTML = "Ajuste d0 por temperatura bases granulares";
	//Espesor de Asfalto
	document.getElementById("espesorCarpAs").value=4.25;
	//Espesor de Base
	document.getElementById("espesorBase").value=8;
	//TOTAL DE ESPSOR
	document.getElementById("espesorTotalPav").value = 12.25;
	//Combo Tipo de Base
	document.getElementById("cmbBases").selectedIndex = "1";
	document.getElementById("tipoBase").innerHTML = "G4.25";

	//IMRPIMIR TIPO DE BASE
	document.getElementById("recibebase").innerHTML = "Tipo de base: Granular";

	//Serviciabilidad
	document.getElementById("serviciabilidad").value = 2.50;
	document.getElementById("totalPsi").innerHTML = "1.70";
	//confiabilidad
	document.getElementById("cmbconfia").value=16;
	document.getElementById("zr").value=-2.327;
	//Impreison confia
	document.getElementById("recibeconf1").innerHTML = "Confiabilidad: 99%";
	document.getElementById("recibeconf").innerHTML = "Confiabilidad: 99%";
	document.getElementById("recibeconf2").innerHTML = "Confiabilidad: 99%";
	document.getElementById("recibeconf3").innerHTML = "Confiabilidad: 99%";
	document.getElementById("recibeconf4").innerHTML = "Confiabilidad: 99%";
	document.getElementById("recibeconf5").innerHTML = "Confiabilidad: 99%";

	//Datos de Trafico y Entorno
	document.getElementById("nroInicial").value=400000;
	document.getElementById("nroFinal").value=2400000;
	document.getElementById("temperatura").value=68;
	document.getElementById("carga").value=9000;
	document.getElementById("radioPlato").value=5.9;
	document.getElementById("defleCentroCarga").value=0.0128;
	//condiciones de drenaje
	document.getElementById("cmbcalidre").selectedIndex = "2";
	document.getElementById("humedad").value = 25;
	document.getElementById("coefDrenaBase").value = 1.000;
	//Capacidad Estructural Futura
	document.getElementById("moduloResRetro").value=16901.42;
	document.getElementById("modelascarpeta").value=446000;

	//METODO FACTOR CONDICION
	document.getElementById("tituloBaseFactor").innerHTML = "Base Granular";
	document.getElementById("cmbConcretoFactor").selectedIndex = "1";
	document.getElementById("cmbGranularFactor").style.display = "inline";
	document.getElementById("cmbGranularFactor").selectedIndex = "1";
	//HABILITO
	document.getElementById("coefBaseGra").style.display="inline";
	document.getElementById("coefEstrucCarpAs").value="0.35";
	document.getElementById("coefBaseGra").value="0.14";
	document.getElementById("coefEstrucCarpAsFactor").value="0.44";

	//METODO VIDA

	document.getElementById("tituloBaseVidaRema").innerHTML = "Base Granular";
	document.getElementById("cmbConcretoVida").selectedIndex = "1";
	document.getElementById("cmbGranularVidaRema").style.display = "inline";
	document.getElementById("cmbGranularVidaRema").selectedIndex = "1";
	//HABILITO
	document.getElementById("coefBaseGra1").style.display="inline";
	document.getElementById("coefEstrucCarpAs1").value="0.44";
	document.getElementById("coefBaseGra1").value="0.14";
	document.getElementById("coefEstrucCarpAsVida").value="0.44";
	document.getElementById("coefEstrucCarpAsNDT").value="0.44";
	

	$("#Cal_Buena").css("background-color", "#c0e4fc");
	$(".Por_25").css("background-color", "#c0e4fc");
	$("#tabla-drenaje #Cal_Buena .Por_25").css("background-color", "#008ED1");

	document.getElementById("TituConcreto1").style.backgroundColor = "#A9BCF5";
	document.getElementById("TituConcreto33").style.backgroundColor = "#A9BCF5";
	document.getElementById("TituConcreto333").style.backgroundColor = "#A9BCF5";

	document.getElementById("TituBaseSubyGranu1").style.backgroundColor = "#A9BCF5";
	document.getElementById("TituBaseSubyGranu11").style.backgroundColor = "#A9BCF5";
	document.getElementById("TituBaseSubyGranu111").style.backgroundColor = "#A9BCF5";

	document.getElementById("1TituConcreto11").style.backgroundColor = "#A9BCF5";
	document.getElementById("1TituConcreto111").style.backgroundColor = "#A9BCF5";
	document.getElementById("1TituConcreto1111").style.backgroundColor = "#A9BCF5";

	document.getElementById("1TituBaseSubyGranu11").style.backgroundColor = "#A9BCF5";
	document.getElementById("1TituBaseSubyGranu111").style.backgroundColor = "#A9BCF5";
	document.getElementById("1TituBaseSubyGranu1111").style.backgroundColor = "#A9BCF5";

	document.getElementById('divgraficaGranular').style.display = 'inline';

}

function EspesorSobreCNDT(){
	var snfut = document.getElementById("totalSN").value;
	var snef = document.getElementById("snefNDT").value;
	var coefas = document.getElementById("coefEstrucCarpAsNDT").value;
	var total = (snfut - snef)/coefas;
	document.getElementById("espFinalNDT").value = total.toFixed(3);
	//reporte
	document.getElementById("recibeDNDT").innerHTML = "D = ("+snfut+"-"+snef+")/"+coefas;
	document.getElementById("recibeTotalDNDT").innerHTML = "D = "+total.toFixed(3)+" in";

	var espT = parseInt(total);//saco sin decimal
	var decimal = total-espT;
	if (decimal<0.5&&decimal>0) {
		espT = espT+0.5;
		document.getElementById("recibeTotalDNDTRedon").innerHTML = "D redondeado = "+espT+" in";
		document.getElementById("RedonNdt").value = espT;
	}else if (decimal>=0.5&&decimal<1) {
		document.getElementById("recibeTotalDNDTRedon").innerHTML = "D redondeado = "+Math.round(total)+" in";
		document.getElementById("RedonNdt").value = Math.round(total);


	}

}
function EspesorSobreCFactor(){
	var snfut = document.getElementById("totalSN").value;
	var snef = document.getElementById("snefFactorCondi").value;
	var coefas = document.getElementById("coefEstrucCarpAsFactor").value;
	var total = (snfut - snef)/coefas;
	document.getElementById("espFinalFactor").value = total.toFixed(3);
	//reporte
	document.getElementById("recibeDFactor").innerHTML = "D = ("+snfut+"-"+snef+")/"+coefas;
	document.getElementById("recibeTotalDFactor").innerHTML = "D = "+total.toFixed(3)+" in";

	var espT = parseInt(total);//saco sin decimal
	var decimal = total-espT;
	if (decimal<0.5&&decimal>0) {
		espT = espT+0.5;
		document.getElementById("recibeTotalDFactorRedon").innerHTML = "D redondeado = "+espT+" in";
		document.getElementById("RedonFactor").value = espT;

	}else if (decimal>=0.5&&decimal<1) {
		document.getElementById("recibeTotalDFactorRedon").innerHTML = "D redondeado = "+Math.round(total)+" in";
		document.getElementById("RedonFactor").value = Math.round(total);


	}
}
function EspesorSobreCVida(){
	var snfut = document.getElementById("totalSN").value;
	var snef = document.getElementById("snefVidaRemanente").value;
	var coefas = document.getElementById("coefEstrucCarpAsVida").value;
	var total = (snfut - snef)/coefas;
	document.getElementById("espFinalVida").value = total.toFixed(3);
	//reporte
	document.getElementById("recibeDVida").innerHTML = "D = ("+snfut+"-"+snef+")/"+coefas;
	document.getElementById("recibeTotalDVida").innerHTML = "D = "+total.toFixed(3)+" in";

	var espT = parseInt(total);//saco sin decimal
	var decimal = total-espT;
	if (decimal<0.5&&decimal>0) {
		espT = espT+0.5;
		document.getElementById("recibeTotalDVidaRedon").innerHTML = "D redondeado = "+espT+" in";
		document.getElementById("RedonVida").value = espT;

	}else if (decimal>=0.5&&decimal<1) {
		document.getElementById("recibeTotalDVidaRedon").innerHTML = "D redondeado = "+Math.round(total)+" in";
		document.getElementById("RedonVida").value = Math.round(total);


	}
	
}


function ControlDeviacion(){
	document.getElementById('desvRemanente').value = document.getElementById('desviEst').value;
}
function lanzarfuncionesCal(){
	document.getElementById("botonNDT").style.visibility = "hidden";
	document.getElementById("botonVida").style.visibility = "hidden";
	document.getElementById("botonFactor").style.visibility = "hidden";
	habilitarMetodos();
	PresionPlato();
	TipoDeBase();
	D0Corregido();
	ModuloResilienteEfectivo();
	EpMr();
	ModuloEfectivoPav();
	BulboTension();
	CalculoSN();
	loadGraphSN();
	modulo_elastico();
	
}
function comprobarMetodosActPro(){
	var ndt = document.getElementById('espFinalNDT').value;
	var factor = document.getElementById('espFinalFactor').value;
	var vida = document.getElementById('espFinalVida').value;
	if (ndt!=""&&factor!=""&&vida!="") {
		document.getElementById("btnProce").style.visibility = "visible";
		document.getElementById("imp2").style.visibility = "visible";
	}else{
		document.getElementById("btnProce").style.visibility = "hidden";
		document.getElementById("imp2").style.visibility = "hidden";
	}
}

function lanzarGraficas(){
	EpMr1(); 
	SNefNDT1(); 
	loadGraphSN();
	GranularGra();
	CementorGra(); 
	Gracf();
	
}

function Procedimiento(){
	$('#exampleModalImport').modal('show');
	document.getElementById("adentro1").className = "MyClass";
	document.getElementById("adentro2").className = "MyClass";
	document.getElementById("adentro3").className = "MyClass";

	document.getElementById("paginaEntera").className = "container col-md-5";
	document.getElementById("paginaEntera").style.overflow="scroll";
	document.getElementById("paginaEntera").style.height="650px";
	document.getElementById("paginaEntera").style.width="";

	document.getElementById("contenedorTres").style.display="inline-block";

	document.getElementById("contenedorTres").style.visibility="visible";
	document.getElementById("contenedorTres").style.display="inline-block";

	document.getElementById("btnceje").style.visibility="hidden";
	document.getElementById("btnceje").style.display="none";

	

	document.getElementById("imp1").style.display="inline";
	document.getElementById("imp1").style.marginRight="3px";
	document.getElementById("imp2").style.marginLeft="225px";
	document.getElementById("imp1").style.marginTop="7px";
	document.getElementById("imp1").style.float="right";

	document.getElementById("salir").style.marginRight="12px";
	document.getElementById("salir").style.marginTop="7px";
	document.getElementById("salir").style.float="right";

	
	document.getElementById("btnCalcular").style.display="inline";
	
	document.getElementById("bodyPavimentos").style.paddingBottom="7px";
	document.getElementById("bodyEstructural").style.paddingBottom="0px";

	document.getElementById("exampleModalCenter1").style.marginRight="";
	document.getElementById("exampleModalCenter2").style.marginRight="";
	document.getElementById("exampleModalCenter3").style.marginRight="";
	document.getElementById("exampleModalCenter1").style.position="relative";
	document.getElementById("exampleModalCenter2").style.position="relative";
	document.getElementById("exampleModalCenter3").style.position="relative";

	document.getElementById("profileModal").style.position="fixed";
	document.getElementById("profileModal").style.left="36%";
	document.getElementById("profileModal").style.top="0%";
	document.getElementById("profileModal1").style.position="fixed";
	document.getElementById("profileModal1").style.left="36%";
	document.getElementById("profileModal1").style.top="0%";
	document.getElementById("profileModal2").style.position="fixed";
	document.getElementById("profileModal2").style.left="36%";
	document.getElementById("profileModal2").style.top="0%";

	document.getElementById("exampleModalCenter").style.position="relative";

	//Boton Continuar
	document.getElementById('btnContinuar').style.display="none";

	//Anclas
	document.getElementById('anclaTrafico').style.display="inline-block";	
	document.getElementById('anclaFuturo').style.display="inline-block";
	document.getElementById('anclaSNestruc').style.display="inline-block";
	document.getElementById('botonNDT').style.marginLeft = '150px';

	//Botones Calcular de cada metodo
		//Habilito
		document.getElementById('btnCalcularNDT1').style.display = 'inline';
		document.getElementById('botonFC1').style.display = 'inline';
		document.getElementById('botonVR1').style.display = 'inline';
		//DesHabilito
		document.getElementById('btnCalcularNDT').style.display = 'none';
		document.getElementById('botonFC').style.display = 'none';
		document.getElementById('botonVR').style.display = 'none';
}

function DatosDelProyecto(){
	document.getElementById('paginaEntera').style.visibility="visible";
	document.getElementById('paginaEntera').style.display="block";
	document.getElementById("paginaEntera").style.width="100%";
	document.getElementById("paginaEntera").style.overflow="hidden";
	document.getElementById("paginaEntera").style.height="auto";
	document.getElementById("paginaEntera").className = "container col-md-12";
	document.getElementById("contenedorPrincipal").style.visibility="visible";
	document.getElementById("contenedorPrincipal").style.display="block";
	document.getElementById("contenedorSecundario").style.display = "none";
	document.getElementById("contenedorSecundario").style.visibility = "hidden";
	document.getElementById("contenedorTres").style.display = "none";
	document.getElementById("contenedorTres").style.visibility = "hidden";
	document.getElementById("imp1").style.display="none";
	document.getElementById("imp2").style.display="none";
	document.getElementById("imp2").style.marginLeft="170px";


	document.getElementById("btnceje").style.display="none";

	document.getElementById("Primero").style.marginLeft="0px";
	document.getElementById("Primero").className="active";
	document.getElementById("Segundo").className="MyClass";

	//Boton Continuar
	document.getElementById('btnContinuar').style.display="inline-block";

	document.getElementById("btnCalcular").style.display="none";
	document.getElementById('botonNDT').style.marginLeft = '150px';

	//Botones Calcular de cada metodo
		//Habilito
		document.getElementById('btnCalcularNDT1').style.display = 'none';
		document.getElementById('botonFC1').style.display = 'none';
		document.getElementById('botonVR1').style.display = 'none';
		//DesHabilito
		document.getElementById('btnCalcularNDT').style.display = 'inline';
		document.getElementById('botonFC').style.display = 'inline';
		document.getElementById('botonVR').style.display = 'inline';


}
function VariablesDeEntrada(){
	document.getElementById("contenedorPrincipal").style.display = "none";
	document.getElementById("contenedorPrincipal").style.visibility = "hidden";
	document.getElementById("contenedorSecundario").style.visibility="visible";
	document.getElementById("contenedorSecundario").style.display="block";
	document.getElementById("contenedorSecundario").className = "col-md-12";
	document.getElementById("contenedorTres").style.display = "none";
	document.getElementById("contenedorTres").style.visibility = "hidden";
	document.getElementById('paginaEntera').style.visibility="visible";
	document.getElementById('paginaEntera').style.display="block";
	document.getElementById("paginaEntera").style.width="100%";
	document.getElementById("paginaEntera").style.overflow="hidden";
	document.getElementById("paginaEntera").style.height="auto";
	document.getElementById("paginaEntera").className = "container col-md-12";
	document.getElementById("adentro1").className = "container col-md-4";
	document.getElementById("adentro2").className = "container col-md-4";
	document.getElementById("adentro3").className = "container col-md-4";
	document.getElementById("contenedorSecundario").style.width="100%";
	document.getElementById("contenedorSecundario").style.overflow="hidden";
	document.getElementById("contenedorSecundario").style.height="auto";
	
	document.getElementById("btnceje").style.visibility="visible";
	document.getElementById("btnceje").style.display="inline-block";

	document.getElementById("btnceje").style.display="inline";
	document.getElementById("btnceje").style.marginRight="5px";
	document.getElementById("btnceje").style.marginTop="7px";
	document.getElementById("btnceje").style.float="right";

	document.getElementById("Primero").className="myclass";
	document.getElementById("Primero").style.marginLeft="42px";
	document.getElementById("Segundo").className="active";
	document.getElementById("imp2").style.marginLeft="170px";

	document.getElementById("bodyPavimentos").style.paddingBottom="38px";

	document.getElementById("exampleModalCenter1").style.marginRight="100%";
	document.getElementById("exampleModalCenter2").style.marginRight="100%";
	document.getElementById("exampleModalCenter3").style.marginRight="100%";
	document.getElementById("exampleModalCenter1").style.position="absolute";
	document.getElementById("exampleModalCenter2").style.position="absolute";
	document.getElementById("exampleModalCenter3").style.position="absolute";

	document.getElementById("profileModal").style.position="absolute";
	document.getElementById("profileModal").style.left="0%";
	document.getElementById("profileModal").style.top="0%";
	document.getElementById("profileModal1").style.position="absolute";
	document.getElementById("profileModal1").style.left="0%";
	document.getElementById("profileModal1").style.top="0%";
	document.getElementById("profileModal2").style.position="absolute";
	document.getElementById("profileModal2").style.left="0%";
	document.getElementById("profileModal2").style.top="0%";

	document.getElementById("exampleModalCenter").style.position="absolute";

	//Boton Continuar
	document.getElementById('btnContinuar').style.display="none";

	//Anclas
	document.getElementById('anclaTrafico').style.display="none";	
	document.getElementById('anclaFuturo').style.display="none";
	document.getElementById('anclaSNestruc').style.display="none";

	document.getElementById("btnCalcular").style.display="inline";
	document.getElementById('botonNDT').style.marginLeft = '95px';

	//Botones Calcular de cada metodo
		//Habilito
		document.getElementById('btnCalcularNDT1').style.display = 'none';
		document.getElementById('botonFC1').style.display = 'none';
		document.getElementById('botonVR1').style.display = 'none';
		//DesHabilito
		document.getElementById('btnCalcularNDT').style.display = 'inline';
		document.getElementById('botonFC').style.display = 'inline';
		document.getElementById('botonVR').style.display = 'inline';



}
function LimpiarCampoDef(){
	//DEFELXIONES Y DISTANCIAS EN 0
	document.getElementById('deflexion1').value = '';
	document.getElementById('deflexion2').value = '';
	document.getElementById('deflexion3').value = '';
	document.getElementById('distancia1').value = '';
	document.getElementById('distancia2').value = '';
	document.getElementById('distancia3').value = '';

}


function printDiv(){

		//GRAFICA CEMENTO
		var canvas1 = document.getElementById("graficaCemento");
		var dataURL1 = canvas1.toDataURL("image1/jpeg",1.0);
		document.getElementById("recibeGraficaBaseC").src = dataURL1;
			//GRAFICA Granular
			var canvas1 = document.getElementById("graficaGranular");
			var dataURL1 = canvas1.toDataURL("image1/jpeg",1.0);
			document.getElementById("recibeGraficaBaseG").src = dataURL1;
	  //DATOS DEL PROYECTO
	  var recibenombre = document.getElementById("txtNombre").value;
	  document.getElementById("recibetxtnom").innerHTML = "Nombre del proyecto: "+recibenombre;
	  //................
	  var recibeubicacion = document.getElementById("txtUbi").value;
	  document.getElementById("recibetxtubi").innerHTML = "Ubicación del proyecto: "+recibeubicacion;
	  //................
	  var recibeRuta = document.getElementById("txtRuta").value;
	  document.getElementById("recibetxtruta").innerHTML = "Ruta: "+recibeRuta;
	  //................
	  var recibeTramo = document.getElementById("txtTra").value;
	  document.getElementById("recibetxttra").innerHTML = "Tramo: "+recibeTramo;
	  //................
	  var recibdise = document.getElementById("Dise").value;
	  document.getElementById("recibetxtdise").innerHTML = "Diseñador: "+recibdise;
	  //FINNNN

	  //DATOS DEL METODO NDT
	  document.getElementById("recibeTotalEsp").innerHTML = "Espesor del pavimento: "+document.getElementById("espesorTotalPav").value+" in";
	  document.getElementById("recibeserviInicial").innerHTML = "Serviciabilidad inicial (pi): 4.2";
	  document.getElementById("recibeserviFinal").innerHTML = "Serviciabilidad final (pt): "+document.getElementById("serviciabilidad").value;
	  document.getElementById("recibeIndiceServ").innerHTML = "Índice de serviciabilidad (Δpsi): "+document.getElementById("totalPsi").innerHTML;
	  document.getElementById("recibeDesvEstan").innerHTML = "Desviación estándar (So): "+document.getElementById("desviEst").value;
	  document.getElementById("recibeDesvEstanVida3").innerHTML = "Desviación estándar (So): "+document.getElementById("desviEst").value;
	  document.getElementById("recibeEsalsF").innerHTML = "Nro. ESAL´s final: "+document.getElementById("nroFinal").value+" ESAL's";
	  //Transformacion de temperatura
	  var tempFaren = document.getElementById("temperatura").value;
	  var tempCenti = ((tempFaren -32)*(5/9)).toFixed(2);  
	  document.getElementById("recibetemp").innerHTML = "Temperatura (T): "+tempFaren+" °F - "+tempCenti+"°C";
	  document.getElementById("recibecarga").innerHTML = "Carga (P): "+document.getElementById("carga").value+" lb";
	  document.getElementById("recibeplatcar").innerHTML = "Radio del plato de carga (a): "+document.getElementById("radioPlato").value+" in";
	  document.getElementById("recibeDefcentro").innerHTML = "Deflexión al centro de la carga: "+document.getElementById("defleCentroCarga").value+" in";
	  	//confiabilidad en el metodo ValorZR()
	  	document.getElementById("recibezr").innerHTML = "Desviación normal (Zr): "+document.getElementById("zr").value;
	  	document.getElementById("recibeModRes").innerHTML = "Módulo resiliente retrocalculado: "+document.getElementById("moduloResRetro").value+" psi";
	  	document.getElementById("recibepresionplato").innerHTML = "Presión aplicada por el plato de carga: "+document.getElementById("presionPlato").value+" psi";
	  	document.getElementById("recibeFactorCorr").innerHTML = "Factor de corrección: "+document.getElementById("FactorCorrec").value;
	  	document.getElementById("recibeDCorre").innerHTML = "d0 Corregido: "+document.getElementById("totalD0Cor").value+" in";
	  	document.getElementById("recibeTotalEp").innerHTML = "Ep/Mr: "+document.getElementById("totalEpMr").value+" in";
	  	document.getElementById("recibeModEfecCapas").innerHTML = "Módulo efectivo de las capas del pavimento (Ep): "+document.getElementById("totalModEfectivoPav").value+" psi";
	  // FACTOR C EN EL INDEX-DEFINIDO
	  document.getElementById("recibeModEfecSubra").innerHTML = "Módulo resiliente efectivo de la subrasante (Mre): "+document.getElementById("totalModResEfectivo").value+" psi";
	  document.getElementById("recibeModEfecSubra2").innerHTML = "Módulo resiliente efectivo de la subrasante (Mre): "+document.getElementById("totalModResEfectivo").value+" psi";
	  document.getElementById("recibeCalcSnFut").innerHTML = "Cálculo del SN estructural futuro: "+document.getElementById("totalSN").value;
	  document.getElementById("recibesnVida").innerHTML = "Número estructural SN0: "+document.getElementById("sn0Remanente").value;
	  document.getElementById("recibedescnesal").innerHTML = "Con este valor y el Nro. ESALS´s inicial o acumulados en el carril de diseño ("+document.getElementById('nroInicial').value+") se calcula el porcentaje de vida remanente (%RL):";
	  	//DESARROLLO DEL METODO NDT
	  	//FORMULA BULBO
	  	//SI SE HABILITAN LAS DEFLEXIONES
	  	var def1 = document.getElementById('deflexion1').value;
	  	var def2 = document.getElementById('deflexion2').value;
	  	var def3 = document.getElementById('deflexion3').value;
	  	var dist1 = document.getElementById('distancia1').value;
	  	var dist2 = document.getElementById('distancia2').value;
	  	var dist3 = document.getElementById('distancia3').value;
	  	if (def1==''&&def2==''&&def3==''&&dist1==''&&dist2==''&&dist3=='') {
	  		document.getElementById('CampoDeBulbo').style.display = 'none';
	  	}else{
	  		document.getElementById('CampoDeBulbo').style.display = 'inline';

	  	}
	  	//Parrafo en Presion Plato
	  	document.getElementById("recibedescriPres").innerHTML = "Seguido, se obtiene el factor de corrección para modificar la deflexión al centro de carga por efectos de temperatura. Para ello se ingresa en la Figura 1 con la temperatura de la mezcla de asfalto (°F), hasta alcanzar el espesor de la carpeta asfáltica ("
	  	+ document.getElementById('espesorCarpAs').value + " in), y luego se traza una línea horizontal hasta llegar al factor de corrección (d0), tal como se indica a continuación:";

	  //PARA EL CALCULO SN FUTURO
	  document.getElementById("recibeEsalsF1").innerHTML = "Nro. ESAL´s final: "+document.getElementById("nroFinal").value+" ESAL´s, cuyo valor es calculado para el período de diseño ";;
	  //confiabilidad en el metodo
	  document.getElementById("recibezr1").innerHTML = "Desviación normal (Zr): "+document.getElementById("zr").value;
	  document.getElementById("recibeDesvEstan1").innerHTML = "Desviación estándar (So): "+document.getElementById("desviEst").value;
	  document.getElementById("recibeIndiceServ1").innerHTML = "Índice de serviciabilidad (Δpsi): "+document.getElementById("totalPsi").innerHTML;
	  document.getElementById("reciberesiEfec").innerHTML = "Módulo resiliente efectivo de la subrasante (Mre): "+document.getElementById("totalModResEfectivo").value+" psi";
	  // GRAFICO SN FUTURO
	  var canvas3 = document.getElementById("chartSNfuturo");
	  var dataURL3 = canvas3.toDataURL("image3/jpeg",1.0);
	  document.getElementById("recibeGrafNomogra").src = dataURL3;
	  // Grafica SNEF
	  var canvas5 = document.getElementById("Ult");
	  var dataURL5 = canvas5.toDataURL("image5/jpeg",1.0);
	  document.getElementById("recibeultimagrafica").src = dataURL5;
	  //GRAFICA RELACION EP/MR
	  //REPORTE GRAFICA
	  var canvas2 = document.getElementById("CFS");
	  var dataURL2 = canvas2.toDataURL("image2/jpeg",1.0);
	  document.getElementById("recibeGrafRelacion").src = dataURL2;
	  //sss
	  var canvas6 = document.getElementById("CF");
	  var dataURL6 = canvas6.toDataURL("image6/jpeg",1.0);
	  document.getElementById("recibeGraficaCF").src = dataURL6;
	  //Modulo elastico
	  var canvas19 = document.getElementById("chart_moduloElastico");
	  var dataURL19 = canvas19.toDataURL("image19/jpeg",1.0);
	  document.getElementById("recibeGraficaModElas").src = dataURL19;
	  document.getElementById("recibeGraficaModElas1").src = dataURL19;
	  document.getElementById("recibeGraficaModElas2").src = dataURL19;

	  	//METODO FACTOR CONDICION
	  	document.getElementById("recibeconcreFact").innerHTML = "Espesor de carpeta asfáltica (ec): "+document.getElementById("espesorCarpAs").value+" in";
	  	document.getElementById("recibebaseFact").innerHTML = "Espesor de base (e2): "+document.getElementById("espesorBase").value+" in";
	  	//METODO VIDA REMANENTE
	  	document.getElementById("recibeconcreVida").innerHTML = "Espesor de carpeta asfáltica (e1): "+document.getElementById("espesorCarpAs").value+" in";
	  	document.getElementById("recibebaseVida").innerHTML = "Espesor de base (e2): "+document.getElementById("espesorBase").value+" in";
		//SUBASE - COMPARACION - FACTOR CONDICION - VIDA REMA
		var espeSubbaseFact = document.getElementById("espesorSubBase").value;
		if (espeSubbaseFact == "") {
			document.getElementById('tablaSubbaseFact').style.display = 'none';
			document.getElementById('tablaSubbaseVida').style.display = 'none';

		}else{
			document.getElementById('tablaSubbaseFact').style.display = 'table-row';
			document.getElementById("recibesubbaseFact").innerHTML = "Espesor de subbase (e3):  "+document.getElementById("espesorSubBase").value+ " in";

			document.getElementById('tablaSubbaseVida').style.display = 'table-row';
			document.getElementById("recibesubbaseVida").innerHTML = "Espesor de subbase (e3):  "+document.getElementById("espesorSubBase").value+ " in";
		}
		
		//MATERIAL MEJORAMIENTO - COMPARACION
		var espeMaterialFact = document.getElementById("espesorMaterial").value;
		if (espeMaterialFact == "") {
			document.getElementById('tablaMaterFact').style.display = 'none';
			document.getElementById('tablaMaterVida').style.display = 'none';
		}else{
			document.getElementById('tablaMaterFact').style.display = 'table-row';
			document.getElementById("recibematerialFact").innerHTML = "Espesor de material de mejoramiento(e4):  "+document.getElementById("espesorMaterial").value+ " in";

			document.getElementById('tablaMaterVida').style.display = 'table-row';
			document.getElementById("recibematerialVida").innerHTML = "Espesor de material de mejoramiento(e4):  "+document.getElementById("espesorMaterial").value+ " in";

		}
		document.getElementById("recibeserviInicialFact").innerHTML = "Serviciabilidad inicial (pi): 4.2";
		document.getElementById("recibeserviFinalFact").innerHTML = "Serviciabilidad final (pt): "+document.getElementById("serviciabilidad").value;
		document.getElementById("recibeIndiceServFact").innerHTML = "Índice de serviciabilidad (Δpsi): "+document.getElementById("totalPsi").innerHTML;
		document.getElementById("recibeDesvEstanFact").innerHTML = "Desviación estándar (So): "+document.getElementById("desviEst").value;
		document.getElementById("recibeEsalsFFact").innerHTML = "Nro. ESAL´s final: "+document.getElementById("nroFinal").value+" ESAL´s";
		document.getElementById("recibezrFact").innerHTML = "Desviación normal (Zr): "+document.getElementById("zr").value;
		document.getElementById("recibezrVida").innerHTML = "Desviación normal (Zr): "+document.getElementById("zr").value;
		document.getElementById("recibezrVida1").innerHTML = "Desviación normal (Zr): "+document.getElementById("zr").value;
		document.getElementById("recibemodresefecFact").innerHTML = "Módulo resiliente efectivo de la subrasante (Mre): "+document.getElementById("totalModResEfectivo").value+" psi";
		document.getElementById("recibecalcsnFact").innerHTML = "Cálculo del SN estructural futuro: "+document.getElementById("totalSN").value;
		//METODO VIDA REMANENTE
		document.getElementById("recibeserviInicialVida").innerHTML = "Serviciabilidad inicial (pi): 4.2";
		document.getElementById("recibeserviFinalVida").innerHTML = "Serviciabilidad final (pt): "+document.getElementById("serviciabilidad").value;
		document.getElementById("recibeIndiceServVida").innerHTML = "Índice de serviciabilidad (Δpsi): "+document.getElementById("totalPsi").innerHTML;
		document.getElementById("recibeDesvEstanVida").innerHTML = "Desviación estándar (So): "+document.getElementById("desviEst").value;
		document.getElementById("recibeEsalsFVida").innerHTML = "Nro. ESAL´s final: "+document.getElementById("nroFinal").value+" ESAL´s ";
		document.getElementById("recibeEsalsIVida").innerHTML = "Nro. ESAL´s inicial: "+document.getElementById("nroInicial").value+" ESAL´s";
		document.getElementById("recibemodresefecVida").innerHTML = "Módulo resiliente efectivo de la subrasante (Mre): "+document.getElementById("totalModResEfectivo").value+" psi";
		document.getElementById("recibecalcsnVida").innerHTML = "Cálculo del SN estructural futuro: "+document.getElementById("totalSN").value;


	  	//METODO FACTOR - MODAL
	  	//VARIABLES PARA ECUACION FACTOR CONDUCION 
	  	var fre = document.getElementById("fres").value;

	  	var EspConcreAs = document.getElementById("espesorCarpAs").value;
	  	if (fre=="") {
	  		var total =EspConcreAs-0;
	  	}else{
	  		var total = EspConcreAs-fre;
	  	}
				//Coeficiente Estrutural
				var coef = document.getElementById("coefEstrucCarpAs").value;
				//Espesor de Base
				var EspBase = document.getElementById("espesorBase").value;

				//Combo base
				var select = document.getElementById("cmbBases").value;
				if (select = 1) {
					var coefbas = document.getElementById("coefBaseGra").value;
				}else if(select = 2){
					var coefbas = document.getElementById("coefBaseCem").value;

				}

				//Coeficiente de Drenaje
				var coefDrena = document.getElementById("coefDrenaBase").value;
				var coefDrena2 = document.getElementById("coefDrenaSubBase").value;
				var coefDrena3 = document.getElementById("coefDrenaMaterial").value;
				//Espesor SubBase
				var subbase = document.getElementById("espesorSubBase").value;
				if (subbase =="") {
					subbase = 0;
				}
				//Coeficiente Subbase
				var coefSub = document.getElementById("coefSubBase").value;

				//Material de Mejoramiento
				var EspeMateria = document.getElementById("espesorMaterial").value;
				if (EspeMateria=="") {
					EspeMateria =0;
				}

				//Coeficiente de Material De Mejoramiento
				var coefMejora = document.getElementById("coefMaterial").value;
				if (coefMejora =="") {
					coefMejora =0;
				}
				if (coefDrena2 =="") {
					coefDrena2=0;
				}if (coefDrena3 =="") {
					coefDrena3=0;
				}

				var Resultotal= (total * coef)+(EspBase*coefbas*coefDrena)+(subbase*coefSub*coefDrena2)+(EspeMateria*coefMejora*coefDrena3);
				var coefsub1 = document.getElementById("coefSubBase").value;
				var coefMejora1 = document.getElementById("coefMaterial").value;
				var cmbselecSub = document.getElementById('cmbSubGranularFactor').value;
				if (cmbselecSub ==''&&coefMejora1=='') {
					document.getElementById("recibeSnefFactor").innerHTML = "SNef = ("+total+" in *"+coef+") + ("+EspBase+" in *"+coefbas+"*"+coefDrena+") + 0 + 0";
					document.getElementById("recibeTotalSnefFactor").innerHTML = "SNef = "+Resultotal.toFixed(3);
				}else if (cmbselecSub!=''&&coefMejora1=='') {
					document.getElementById("recibeSnefFactor").innerHTML = "SNef = ("+total+" in *"+coef+") + ("+EspBase+" in *"+coefbas+"*"+coefDrena+") + ("+subbase+" in *"+coefsub1+"*"+coefDrena2+") + 0";
					document.getElementById("recibeTotalSnefFactor").innerHTML = "SNef = "+Resultotal.toFixed(3);

				}else if (cmbselecSub!=''&&coefMejora1!='') {
					document.getElementById("recibeSnefFactor").innerHTML = "SNef = ("+total+" in *"+coef+") + ("+EspBase+" in *"+coefbas+"*"+coefDrena+") + ("+subbase+" in *"+coefsub1+"*"+coefDrena2+") + ("+EspeMateria+" in *"+coefMejora1+"*"+coefDrena3+")";
					document.getElementById("recibeTotalSnefFactor").innerHTML = "SNef = "+Resultotal.toFixed(3);
				}else if (cmbselecSub==''&&coefMejora1!='') {
					document.getElementById("recibeSnefFactor").innerHTML = "SNef = ("+total+" in *"+coef+") + ("+EspBase+" in *"+coefbas+"*"+coefDrena+") + 0 + ("+EspeMateria+" in *"+coefMejora1+"*"+coefDrena3+")";
					document.getElementById("recibeTotalSnefFactor").innerHTML = "SNef = "+Resultotal.toFixed(3);
				}

		//TIPO DE BASE - COMPARACION 
		var coefBaseGra = document.getElementById("coefBaseGra").value;
	  	var coefBaseCem = document.getElementById("coefBaseCem").value;
	  	var coefMaterial = document.getElementById("coefMaterial").value;
	  	var coefMaterial1 = document.getElementById("coefMaterial1").value;
	  	var coefSubBase = document.getElementById("coefSubBase").value;
	  	var coefSubBase1 = document.getElementById("coefSubBase1").value;
		var selecbase = document.getElementById('cmbBases').value;
		
		// SUBBASE COMPARACION
		var espesorSubBase = document.getElementById("espesorSubBase").value;
		var coefEstrucCarpAs = document.getElementById("coefEstrucCarpAs").value;
		var coefDrenaSubBase = document.getElementById("coefDrenaSubBase").value;
		var coefDrenaBase = document.getElementById("coefDrenaBase").value;
		if (espesorSubBase==""&&coefDrenaSubBase=="") {
			document.getElementById('tablaSubaseMetFac').style.display = 'none';
			document.getElementById('tablaSubaseMetVida').style.display = 'none';
		}else {
			document.getElementById('tablaSubaseMetFac').style.display = 'inline';
			document.getElementById("recibecoefSubbaseFact").innerHTML = 'SubBase: e2 = '+espesorSubBase+" in ; a2= "+coefSubBase+'m2= '+coefDrenaSubBase;

			document.getElementById('tablaSubaseMetVida').style.display = 'inline';
			document.getElementById("recibecoefSubbaseVida").innerHTML = 'SubBase: e2 = '+espesorSubBase+" in ; a2= "+coefSubBase1+'m2= '+coefDrenaSubBase;

		}
		// MATERIAL MEJORAMIENTO COMPARACION
		var espesorMaterial = document.getElementById("espesorMaterial").value;
		var coefDrenaMaterial = document.getElementById("coefDrenaMaterial").value;
		if (espesorSubBase==""&&coefDrenaSubBase=="") {
			document.getElementById('tablaMaterialMetFac').style.display = 'none';
			document.getElementById('tablaMaterialMetVida').style.display = 'none';
		}else {
			document.getElementById('tablaMaterialMetFac').style.display = 'inline';
			document.getElementById("recibecoefmaterialFact").innerHTML = 'Material de mejoramiento: e3 = '+espesorMaterial+" in ; a3= "+coefMaterial+' m3 = '+coefDrenaMaterial;

			document.getElementById('tablaMaterialMetVida').style.display = 'inline';
			document.getElementById("recibecoefmaterialVida").innerHTML = 'Material de mejoramiento: e3 = '+espesorMaterial+" in ; a3= "+coefMaterial1+' m3 = '+coefDrenaMaterial;

		}
		document.getElementById("recibeEsalsFFact2").innerHTML = "Nro. ESAL´s final: "+document.getElementById("nroFinal").value+" ESAL´s, cuyo valor es calculado para el periodo de diseño. ";
		document.getElementById("recibezrFact2").innerHTML = "Desviación normal (Zr): "+document.getElementById("zr").value;
		document.getElementById("recibeDesvEstanFact2").innerHTML = "Desviación estándar (So): "+document.getElementById("desviEst").value;
		document.getElementById("recibeIndiceServFact2").innerHTML = "Índice de serviciabilidad (Δpsi): "+document.getElementById("totalPsi").innerHTML;
		document.getElementById("recibemodresefecFact2").innerHTML = "Módulo resiliente efectivo (Mre): "+document.getElementById("totalModResEfectivo").value+" psi";

		document.getElementById("recibeEsalsFVida2").innerHTML = "Nro. ESAL´s final: "+document.getElementById("nroFinal").value+" ESAL´s, cuyo valor es calculado para el periodo de diseño.";
		document.getElementById("recibeDesvEstanVida2").innerHTML = "Desviación estándar (So): "+document.getElementById("desviEst").value;
		document.getElementById("recibeIndiceServVida2").innerHTML = "Índice de serviciabilidad (Δpsi): "+document.getElementById("totalPsi").innerHTML;
		document.getElementById("recibemodresefecVida2").innerHTML = "Módulo resiliente efectivo (Mre): "+document.getElementById("totalModResEfectivo").value+" psi";
	  	//Descrip CALCULO SN
	  	// GRAFICO SN FUTURO
	  	document.getElementById("recibeGrafNomogra1").src = dataURL3;
	  	// GRAFICO SN FUTURO
	  	document.getElementById("recibeGrafNomogra2").src = dataURL3;


	
	  	

		document.getElementById('recibeDescripMet').innerHTML ="Una vez obtenido el valor de SNef ("+document.getElementById('snefFactorCondi').value+"), el SN futuro ("+document.getElementById('totalSN').value+") y el coeficiente estructural de la nueva carpeta ("+ document.getElementById('coefEstrucCarpAsNDT').value+") se calcula el espesor de sobrecarpeta mediante la siguiente ecuación:";
		document.getElementById('recibeDescripVidaR').innerHTML ="Una vez obtenido el valor de SNef ("+document.getElementById('snefVidaRemanente').value+"), el SN futuro ("+document.getElementById('totalSN').value+") y el coeficiente estructural de la nueva carpeta ("+ document.getElementById('coefEstrucCarpAsNDT').value+") se calcula el espesor de sobrecarpeta mediante la siguiente ecuación:";
	  	document.getElementById('recibeDescripCF').innerHTML="Con este porcentaje y la Figura 9 se obtiene el valor del factor condición (FC) que en este caso es "+document.getElementById('totalCF').value+". En esta figura se ingresa con el porcentaje de vida remanente ("+document.getElementById('RL').value+"%), se traza una línea vertical hasta intersecar la curva de vida remanente y luego se proyecta una línea horizontal hasta el eje CF.";
	  	document.getElementById('recibeDescriSnefVida1').innerHTML = "Con el número estructural del pavimento si este fuera nuevamente construido ("+document.getElementById('sn0Remanente').value+") y el valor CF calculado anteriormente ("+document.getElementById('totalCF').value+") se obtiene el número estrúctural efectivo de acuerdo a la siguiente expresión:"	
		document.getElementById('recibemodelastica2').innerHTML ="En la Figura 10 se obtiene el valor del coeficiente estructural del nuevo espesor de carpeta. Se ingresa con el valor del módulo elástico de la nueva sobrecarpeta ("+ document.getElementById('modelascarpeta').value+" psi) y se traza una línea vertical hasta cortar la curva; luego se traza una linea horizontal hasta cortar el coeficiente estructural, que en este caso es de "+ document.getElementById('coefEstrucCarpAsVida').value+"."; 


	  	var recibeCaratula =document.getElementById('recibeCaratula');
	  	var recibeRenuncia =document.getElementById('recibeRenuncia');
	  	var recibetituloproy =document.getElementById('recibetituloproy');
	  	var recibeDatos =document.getElementById('recibeDatos');
	  	var inicioMetodoNDT = document.getElementById('inicioMetodoNDT');
	  	var recibeDatosGenerales =document.getElementById('recibeDatosGenerales');
	  	var recibeMetodoNDT =document.getElementById('recibeMetodoNDT');
	  	var inicioMetodoFact = document.getElementById('inicioMetodoFact');
	  	var recibeDatosFactor = document.getElementById('recibeDatosFactor');
	  	var recibedesarrolloFact = document.getElementById('recibedesarrolloFact');
	  	var recibeGrafMetodoFactCondi =document.getElementById('recibeGrafMetodoFactCondi');
	  	var recibeMetodoFactCondi = document.getElementById('recibeMetodoFactCondi');
	  	var recibeMetodoFactCondi1 =document.getElementById('recibeMetodoFactCondi1');
	  	var recibeMetodoVidaRema = document.getElementById('recibeMetodoVidaRema');
	  	var recibeMetodoVidaRema1 = document.getElementById('recibeMetodoVidaRema1');
	  	var inicioMetodoVida = document.getElementById('InicioMetodoVida');
	  	var recibeMetodoVidaRemante = document.getElementById('recibeMetodoVidaRemante');
	  	var recibecontVida = document.getElementById('recibecontVida');
	  	var recibeDesarroVida = document.getElementById('recibeDesarroVida');
	  	var recibemedioTablas = document.getElementById('recibemedioTablas');
	  	var recibeMedioTablas2 = document.getElementById('recibeMedioTablas2');
	 	//TABLA COEFICEINTE DE DRENAJE 
	 	var tablaDrenajeBase =document.getElementById('tablaCoefienteDrenaBase');//TABLA COEFICIENTE BASE
	 		//TABLAS
	 		document.getElementById('titulotablaBase').style.display = 'none';
	 		document.getElementById('validoBase').style.display = 'none';
	 		document.getElementById('titulotablasubBase').style.display = 'none';
	 		document.getElementById('validosubBase').style.display = 'none';
	 		document.getElementById('titulotablaMaterial').style.display = 'none';
	 		document.getElementById('validoMaterial').style.display = 'none';
	 	//TABLA METODO FACTOR CONDICION
	 	var tablametodoFact = document.getElementById('tablaMetodoFactor');
	 	var tablaMetodoVida = document.getElementById('tablaMetodoVida');
	 	var recibeTabla1y2 = document.getElementById('recibeTabla1y2');
	 	var recibeTabla3y4 = document.getElementById('recibeTabla3y4'); 
	 		//TABLA VIDA FACTOR
	 		document.getElementById('titulotablaFact').style.display = 'none';
	 		document.getElementById('validoFactor').style.display = 'none';
	 		document.getElementById('titulotablaVida').style.display = 'none';
	 		document.getElementById('validoVida').style.display = 'none';

	 	//tabla coeficiente drenaje base
	 	document.getElementById('descripTablaBase').style.display = "none";
	 	document.getElementById('RetitulotablaBas').style.display = "inline";
	 	document.getElementById('Op1').style.fontSize = "24px";
	 	document.getElementById('Op1').removeAttribute("style");
	 	document.getElementById('ResOp1').style.fontSize = "24px";
	 	document.getElementById('ResOp1').removeAttribute("style");
	 	//tabla coeficiente drenaje SubBase
	 	document.getElementById('descripTablaSubBase').style.display = "none";
	 	document.getElementById('RetitulotablaSub').style.display = "inline";
	 	document.getElementById('Op2').style.fontSize = "24px";
	 	document.getElementById('Op2').removeAttribute("style");
	 	document.getElementById('ResOp2').style.fontSize = "24px";
	 	document.getElementById('ResOp2').removeAttribute("style");
	 	//tabla coeficiente drenaje Material
	 	document.getElementById('descripTablaMaterial').style.display = "none";
	 	document.getElementById('RetitulotablaMat').style.display = "inline";
	 	document.getElementById('Op3').style.fontSize = "24px";
	 	document.getElementById('Op3').removeAttribute("style");
	 	document.getElementById('ResOp3').style.fontSize = "24px";
	 	document.getElementById('ResOp3').removeAttribute("style");

	 	//REFERENCIA TABLA 4
	 	document.getElementById('tabla4').style.display = 'inline';
	 	document.getElementById('tabla4').setAttribute("style", "text-align: center;")
	 	//REFERENCIA TABLA 5 vida REMA
	 	document.getElementById('tabla5').style.display = 'inline';
	 	document.getElementById('tabla5').setAttribute("style", "text-align: center;")

	 	

	 	


			var newWin=window.open("","Print-Window");

			newWin.document.open();

			//newWin.document.write('<html style="font-size: 24px"><head><style type="text/css"> @media print {@page {margin: 20mm 25mm 20mm 25mm;  }   }  </style></head><body style="font-size: 24px" onload="window.print() ">  '+divToPrint.innerHTML+printTabla.innerHTML+'</body></html>');
			newWin.document.write('<html style="font-size: 18px"><head><style type="text/css"> @media print {@page {margin: 20mm 25mm 20mm 25mm;  }   } a:link {color:black; text-decoration: none} a:visited {color:black; text-decoration: none} a:active {color:black; text-decoration: none} a:hover {color:black; text-decoration: none}   </style> </head><body onload="window.print()" > '
				+ recibeCaratula.innerHTML+'<p style = "page-break-after: always;"> &nbsp; </ p>'
				+recibeRenuncia.innerHTML+'<p style = "page-break-after: always;"> &nbsp; </ p>'+recibetituloproy.innerHTML
				+recibeDatos.innerHTML+inicioMetodoNDT.innerHTML+recibeDatosGenerales.innerHTML+recibeMetodoNDT.innerHTML+'<p style = "page-break-after: always;"> &nbsp; </ p>'
				+inicioMetodoFact.innerHTML+recibeDatosFactor.innerHTML+recibedesarrolloFact.innerHTML+recibeGrafMetodoFactCondi.innerHTML+recibeMetodoFactCondi.innerHTML+recibeTabla1y2.innerHTML
				+tablaDrenajeBase.innerHTML+recibemedioTablas.innerHTML
				+tablametodoFact.innerHTML+recibeMetodoFactCondi1.innerHTML+'<p style = "page-break-after: always;"> &nbsp; </ p>'
				+inicioMetodoVida.innerHTML+recibeMetodoVidaRemante.innerHTML+recibeDesarroVida.innerHTML+recibeMetodoVidaRema.innerHTML+recibeMetodoVidaRema1.innerHTML+tablaDrenajeBase.innerHTML+recibeMedioTablas2.innerHTML+tablaMetodoVida.innerHTML+recibecontVida.innerHTML+'</body></html>');
			newWin.document.write('<style type="text/css">table{border-collapse: collapse;}td, th /* Poner borde en td y th */{border: 1px solid black;}</style>');

			

			
			newWin.document.close();

			document.write


			setTimeout(function(){newWin.close();},10);
			//TABLA RECUPERAR ESTILO BASE
			document.getElementById('descripTablaBase').style.display = "inline";
			document.getElementById('Op1').style.fontSize = "12px";
			document.getElementById('ResOp1').style.fontSize = "12px";
			//TABLA RECUPERAR ESTILO SUBBASE
			document.getElementById('descripTablaSubBase').style.display = "inline";
			document.getElementById('Op2').style.fontSize = "12px";
			document.getElementById('ResOp2').style.fontSize = "12px";
			//TABLA RECUPERAR ESTILO MATERIAL
			document.getElementById('descripTablaMaterial').style.display = "inline";
			document.getElementById('Op3').style.fontSize = "12px";
			document.getElementById('ResOp3').style.fontSize = "12px";
	 		//REFERENCIA TABLA 4
	 		document.getElementById('tabla4').style.display = 'none';
	 		document.getElementById('tabla5').style.display = 'none';

	 		//


	 		document.getElementById('titulotablaBase').style.display = 'inline-block';
	 		document.getElementById('validoBase').style.display = 'inline-block';
	 		document.getElementById('titulotablasubBase').style.display = 'inline-block';
	 		document.getElementById('validosubBase').style.display = 'inline-block';
	 		document.getElementById('titulotablaMaterial').style.display = 'inline-block';
	 		document.getElementById('validoMaterial').style.display = 'inline-block';


	 		document.getElementById('titulotablaFact').style.display = 'inline-block';
	 		document.getElementById('validoFactor').style.display = 'inline-block';
	 		document.getElementById('titulotablaVida').style.display = 'inline-block';
	 		document.getElementById('validoVida').style.display = 'inline-block';

	 		document.getElementById('RetitulotablaBas').style.display = "none";
	 		document.getElementById('RetitulotablaSub').style.display = "none";
	 		document.getElementById('RetitulotablaMat').style.display = "none";




		}


function printDiv2(){

	//DATOS DEL PROYECTO
	  var recibenombre = document.getElementById("txtNombre").value;
	  document.getElementById("recibetxtnom").innerHTML = "Nombre del proyecto: "+recibenombre;
	  //................
	  var recibeubicacion = document.getElementById("txtUbi").value;
	  document.getElementById("recibetxtubi").innerHTML = "Ubicación del proyecto: "+recibeubicacion;
	  //................
	  var recibeRuta = document.getElementById("txtRuta").value;
	  document.getElementById("recibetxtruta").innerHTML = "Ruta: "+recibeRuta;
	  //................
	  var recibeTramo = document.getElementById("txtTra").value;
	  document.getElementById("recibetxttra").innerHTML = "Tramo: "+recibeTramo;
	  //................
	  var recibdise = document.getElementById("Dise").value;
	  document.getElementById("recibetxtdise").innerHTML = "Diseñador: "+recibdise;
	  //FINNNN
	//DATOS DEL METODO NDT
	  document.getElementById("recibeTotalEsp").innerHTML = "Espesor del pavimento: "+document.getElementById("espesorTotalPav").value+" in";
	  document.getElementById("recibeserviInicial").innerHTML = "Serviciabilidad inicial (pi): 4.2";
	  document.getElementById("recibeserviFinal").innerHTML = "Serviciabilidad final (pt): "+document.getElementById("serviciabilidad").value;
	  document.getElementById("recibeIndiceServ").innerHTML = "Índice de serviciabilidad (Δpsi): "+document.getElementById("totalPsi").innerHTML;
	  document.getElementById("recibeDesvEstan").innerHTML = "Desviación estándar (So): "+document.getElementById("desviEst").value;
	  document.getElementById("recibeDesvEstanVida3").innerHTML = "Desviación estándar (So): "+document.getElementById("desviEst").value;
	  document.getElementById("recibeEsalsF").innerHTML = "Nro. ESAL´s final: "+document.getElementById("nroFinal").value+" ESAL´s";
	  //Transformacion de temperatura
	  var tempFaren = document.getElementById("temperatura").value;
	  var tempCenti = ((tempFaren -32)*(5/9)).toFixed(2); 
	  document.getElementById("recibetemp").innerHTML = "Temperatura (T): "+tempFaren+" °F - "+tempCenti+"°C";
	  document.getElementById("recibecarga").innerHTML = "Carga (P): "+document.getElementById("carga").value+" lb";
	  document.getElementById("recibeplatcar").innerHTML = "Radio del plato de carga (a): "+document.getElementById("radioPlato").value+" in";
	  document.getElementById("recibeDefcentro").innerHTML = "Deflexión al centro de la carga: "+document.getElementById("defleCentroCarga").value+" in";
	  	//confiabilidad en el metodo ValorZR()
	  	document.getElementById("recibezr").innerHTML = "Desviación normal (Zr): "+document.getElementById("zr").value;
	  	document.getElementById("recibeModRes").innerHTML = "Módulo resiliente retrocalculado: "+document.getElementById("moduloResRetro").value+" psi";
	  	document.getElementById("recibepresionplato").innerHTML = "Presión aplicada por el plato de carga: "+document.getElementById("presionPlato").value+" psi";
	  	document.getElementById("recibeFactorCorr").innerHTML = "Factor de corrección: "+document.getElementById("FactorCorrec").value;
	  	document.getElementById("recibeDCorre").innerHTML = "d0 Corregido: "+document.getElementById("totalD0Cor").value+" in";
	  	document.getElementById("recibeTotalEp").innerHTML = "Ep/Mr: "+document.getElementById("totalEpMr").value+" in";
	  	document.getElementById("recibeModEfecCapas").innerHTML = "Módulo efectivo de las capas del pavimento (Ep): "+document.getElementById("totalModEfectivoPav").value+" psi";
	  // FACTOR C EN EL INDEX-DEFINIDO
	  document.getElementById("recibeModEfecSubra").innerHTML = "Módulo resiliente efectivo de la subrasante (Mre): "+document.getElementById("totalModResEfectivo").value+" psi";
	  document.getElementById("recibeModEfecSubra2").innerHTML = "Módulo resiliente efectivo de la subrasante (Mre): "+document.getElementById("totalModResEfectivo").value+" psi";
	  document.getElementById("recibeCalcSnFut").innerHTML = "Cálculo del SN estructural futuro: "+document.getElementById("totalSN").value;
	  document.getElementById("recibesnVida").innerHTML = "Número estructural SN0: "+document.getElementById("sn0Remanente").value;
	  document.getElementById("recibedescnesal").innerHTML = "Obteniendo un resultado Nro. ESAL´s 1,5 de "+document.getElementById("totalW15").value;
	  document.getElementById("recibedescnesal").innerHTML = "Siguiente a ello calculamos el porcentaje de vida remanente del pavimento cuyo valor es "+document.getElementById("RL").value+" con la siguiente fórmula:";
	  	//DESARROLLO DEL METODO NDT
	  	//FORMULA BULBO
	  	//SI SE HABILITAN LAS DEFLEXIONES
	  	var def1 = document.getElementById('deflexion1').value;
	  	var def2 = document.getElementById('deflexion2').value;
	  	var def3 = document.getElementById('deflexion3').value;
	  	var dist1 = document.getElementById('distancia1').value;
	  	var dist2 = document.getElementById('distancia2').value;
	  	var dist3 = document.getElementById('distancia3').value;
	  	if (def1==''&&def2==''&&def3==''&&dist1==''&&dist2==''&&dist3=='') {
	  		document.getElementById('CampoDeBulbo').style.display = 'none';
	  	}else{
	  		document.getElementById('CampoDeBulbo').style.display = 'inline';

	  	}
	  	//Parrafo en Presion Plato
	  	document.getElementById("recibedescriPres").innerHTML = "Seguido, obtenemos el factor de corrección cuyo valor es "
	  	+document.getElementById('FactorCorrec').value+" esto ingresando en la Figura 1 en el eje “x” la temperatura de la mezcla de asfalto (oF) y cortando en el eje “y” con la línea correspondiente al espesor de  la carpeta asfáltica, que en nuestro caso es: "
	  	+ document.getElementById('espesorCarpAs').value + " in; tal como se indica a continuación:";

	  //PARA EL CALCULO SN FUTURO
	  document.getElementById("recibeEsalsF1").innerHTML = "Nro. ESAL´s final: "+document.getElementById("nroFinal").value+" ESAL´s, cuyo valor es calculado para el periodo de diseño.";
	  //confiabilidad en el metodo
	  document.getElementById("recibezr1").innerHTML = "Desviación normal (Zr): "+document.getElementById("zr").value;
	  document.getElementById("recibeDesvEstan1").innerHTML = "Desviación estándar (So): "+document.getElementById("desviEst").value;
	  document.getElementById("recibeIndiceServ1").innerHTML = "Índice de serviciabilidad (Δpsi): "+document.getElementById("totalPsi").innerHTML;
	  document.getElementById("reciberesiEfec").innerHTML = "Módulo resiliente efectivo de la subrasante (Mre): "+document.getElementById("totalModResEfectivo").value+" psi";
	  // GRAFICO SN FUTURO
	  var canvas3 = document.getElementById("chartSNfuturo");
	  var dataURL3 = canvas3.toDataURL("image3/jpeg",1.0);
	  document.getElementById("recibeGrafNomogra").src = dataURL3;
	  // Grafica SNEF
	  var canvas5 = document.getElementById("Ult");
	  var dataURL5 = canvas5.toDataURL("image5/jpeg",1.0);
	  document.getElementById("recibeultimagrafica").src = dataURL5;
	  //GRAFICA RELACION EP/MR
	  //REPORTE GRAFICA
	  var canvas2 = document.getElementById("CFS");
	  var dataURL2 = canvas2.toDataURL("image2/jpeg",1.0);
	  document.getElementById("recibeGrafRelacion").src = dataURL2;
	  

	  	//METODO FACTOR CONDICION
	  	document.getElementById("recibeconcreFact").innerHTML = "Espesor de carpeta asfáltica (e1): "+document.getElementById("espesorCarpAs").value+" in";
	  	document.getElementById("recibebaseFact").innerHTML = "Espesor de base (e2): "+document.getElementById("espesorBase").value+" in";
	  	//METODO VIDA REMANENTE
	  	document.getElementById("recibeconcreVida").innerHTML = "Espesor de carpeta asfáltica (e1): "+document.getElementById("espesorCarpAs").value+" in";
	  	document.getElementById("recibebaseVida").innerHTML = "Espesor de base (e2): "+document.getElementById("espesorBase").value+" in";
		//SUBASE - COMPARACION - FACTOR CONDICION - VIDA REMA
		var espeSubbaseFact = document.getElementById("espesorSubBase").value;
		if (espeSubbaseFact == "") {
			document.getElementById('tablaSubbaseFact').style.display = 'none';
			document.getElementById('tablaSubbaseVida').style.display = 'none';

		}else{
			document.getElementById('tablaSubbaseFact').style.display = 'table-row';
			document.getElementById("recibesubbaseFact").innerHTML = "Espesor de subbase (e3):  "+document.getElementById("espesorSubBase").value+ " in";

			document.getElementById('tablaSubbaseVida').style.display = 'table-row';
			document.getElementById("recibesubbaseVida").innerHTML = "Espesor de subbase (e3):  "+document.getElementById("espesorSubBase").value+ " in";
		}
		
		//MATERIAL MEJORAMIENTO - COMPARACION
		var espeMaterialFact = document.getElementById("espesorMaterial").value;
		if (espeMaterialFact == "") {
			document.getElementById('tablaMaterFact').style.display = 'none';
			document.getElementById('tablaMaterVida').style.display = 'none';
		}else{
			document.getElementById('tablaMaterFact').style.display = 'table-row';
			document.getElementById("recibematerialFact").innerHTML = "Espesor de material de mejoramiento(e4):  "+document.getElementById("espesorMaterial").value+ " in";

			document.getElementById('tablaMaterVida').style.display = 'table-row';
			document.getElementById("recibematerialVida").innerHTML = "Espesor de material de mejoramiento(e4):  "+document.getElementById("espesorMaterial").value+ " in";

		}
		document.getElementById("recibeserviInicialFact").innerHTML = "Serviciabilidad inicial (pi): 4.2";
		document.getElementById("recibeserviFinalFact").innerHTML = "Serviciabilidad final (pt): "+document.getElementById("serviciabilidad").value;
		document.getElementById("recibeIndiceServFact").innerHTML = "Índice de serviciabilidad (Δpsi): "+document.getElementById("totalPsi").innerHTML;
		document.getElementById("recibeDesvEstanFact").innerHTML = "Desviación estándar (So): "+document.getElementById("desviEst").value;
		document.getElementById("recibeEsalsFFact").innerHTML = "Nro. ESAL´s final: "+document.getElementById("nroFinal").value+" ESAL´s";
		document.getElementById("recibezrFact").innerHTML = "Desviación normal (Zr): "+document.getElementById("zr").value;
		document.getElementById("recibezrVida").innerHTML = "Desviación normal (Zr): "+document.getElementById("zr").value;
		document.getElementById("recibezrVida1").innerHTML = "Desviación normal (Zr): "+document.getElementById("zr").value;
		document.getElementById("recibemodresefecFact").innerHTML = "Módulo resiliente efectivo de la subrasante (Mre): "+document.getElementById("totalModResEfectivo").value+" psi";
		document.getElementById("recibecalcsnFact").innerHTML = "Cálculo del SN estructural futuro: "+document.getElementById("totalSN").value;
		//METODO VIDA REMANENTE
		document.getElementById("recibeserviInicialVida").innerHTML = "Serviciabilidad inicial (pi): 4.2";
		document.getElementById("recibeserviFinalVida").innerHTML = "Serviciabilidad final (pt): "+document.getElementById("serviciabilidad").value;
		document.getElementById("recibeIndiceServVida").innerHTML = "Índice de serviciabilidad (Δpsi): "+document.getElementById("totalPsi").innerHTML;
		document.getElementById("recibeDesvEstanVida").innerHTML = "Desviación estándar (So): "+document.getElementById("desviEst").value;
		document.getElementById("recibeEsalsFVida").innerHTML = "Nro. ESAL´s final: "+document.getElementById("nroFinal").value+" ESAL´s";
		document.getElementById("recibeEsalsIVida").innerHTML = "Nro. ESAL´s inicial: "+document.getElementById("nroInicial").value+" ESAL´s";
		document.getElementById("recibemodresefecVida").innerHTML = "Módulo resiliente efectivo de la subrasante (Mre): "+document.getElementById("totalModResEfectivo").value+" psi";
		document.getElementById("recibecalcsnVida").innerHTML = "Cálculo del SN estructural futuro: "+document.getElementById("totalSN").value;


	  	//VARIABLES PARA ECUACION FACTOR CONDUCION 
	  	var fre = document.getElementById("fres").value;

	  	var EspConcreAs = document.getElementById("espesorCarpAs").value;
	  	if (fre=="") {
	  		var total =EspConcreAs-0;
	  	}else{
	  		var total = EspConcreAs-fre;
	  	}
				//Coeficiente Estrutural
				var coef = document.getElementById("coefEstrucCarpAs").value;
				//Espesor de Base
				var EspBase = document.getElementById("espesorBase").value;

				//Combo base
				var select = document.getElementById("cmbBases").value;
				if (select = 1) {
					var coefbas = document.getElementById("coefBaseGra").value;
				}else if(select = 2){
					var coefbas = document.getElementById("coefBaseCem").value;

				}

				//Coeficiente de Drenaje
				var coefDrena = document.getElementById("coefDrenaBase").value;
				var coefDrena2 = document.getElementById("coefDrenaSubBase").value;
				var coefDrena3 = document.getElementById("coefDrenaMaterial").value;
				//Espesor SubBase
				var subbase = document.getElementById("espesorSubBase").value;
				if (subbase =="") {
					subbase = 0;
				}
				//Coeficiente Subbase
				var coefSub = document.getElementById("coefSubBase").value;

				//Material de Mejoramiento
				var EspeMateria = document.getElementById("espesorMaterial").value;
				if (EspeMateria=="") {
					EspeMateria =0;
				}

				//Coeficiente de Material De Mejoramiento
				var coefMejora = document.getElementById("coefMaterial").value;
				if (coefMejora =="") {
					coefMejora =0;
				}
				if (coefDrena2 =="") {
					coefDrena2=0;
				}if (coefDrena3 =="") {
					coefDrena3=0;
				}

				var Resultotal= (total * coef)+(EspBase*coefbas*coefDrena)+(subbase*coefSub*coefDrena2)+(EspeMateria*coefMejora*coefDrena3);
				var coefsub1 = document.getElementById("coefSubBase").value;
				var coefMejora1 = document.getElementById("coefMaterial").value;
				var cmbselecSub = document.getElementById('cmbSubGranularFactor').value;
				if (cmbselecSub ==''&&coefMejora1=='') {
					document.getElementById("recibeSnefFactor").innerHTML = "SNef = ("+total+" in *"+coef+")+("+EspBase+" in *"+coefbas+"*"+coefDrena+")";
					document.getElementById("recibeTotalSnefFactor").innerHTML = "SNef = "+Resultotal.toFixed(3);
				}else if (cmbselecSub!=''&&coefMejora1=='') {
					document.getElementById("recibeSnefFactor").innerHTML = "SNef = ("+total+" in *"+coef+")+("+EspBase+" in *"+coefbas+"*"+coefDrena+")+("+subbase+" in *"+coefsub1+"*"+coefDrena2+")";
					document.getElementById("recibeTotalSnefFactor").innerHTML = "SNef = "+Resultotal.toFixed(3);

				}else if (cmbselecSub!=''&&coefMejora1!='') {
					document.getElementById("recibeSnefFactor").innerHTML = "SNef = ("+total+" in *"+coef+")+("+EspBase+" in *"+coefbas+"*"+coefDrena+")+("+subbase+" in *"+coefsub1+"*"+coefDrena2+")+("+EspeMateria+" in *"+coefMejora1+"*"+coefDrena3+")";
					document.getElementById("recibeTotalSnefFactor").innerHTML = "SNef = "+Resultotal.toFixed(3);
				}else if (cmbselecSub==''&&coefMejora1!='') {
					document.getElementById("recibeSnefFactor").innerHTML = "SNef = ("+total+" in *"+coef+")+("+EspBase+" in *"+coefbas+"*"+coefDrena+")+("+EspeMateria+" in *"+coefMejora1+"*"+coefDrena3+")";
					document.getElementById("recibeTotalSnefFactor").innerHTML = "SNef = "+Resultotal.toFixed(3);
				}

		//TIPO DE BASE - COMPARACION 
		var coefBaseGra = document.getElementById("coefBaseGra").value;
	  	var coefBaseCem = document.getElementById("coefBaseCem").value;
	  	var coefMaterial = document.getElementById("coefMaterial").value;
	  	var coefMaterial1 = document.getElementById("coefMaterial1").value;
	  	var coefSubBase = document.getElementById("coefSubBase").value;
	  	var coefSubBase1 = document.getElementById("coefSubBase1").value;
		var selecbase = document.getElementById('cmbBases').value;
		
		// SUBBASE COMPARACION
		var espesorSubBase = document.getElementById("espesorSubBase").value;
		var coefEstrucCarpAs = document.getElementById("coefEstrucCarpAs").value;
		var coefDrenaSubBase = document.getElementById("coefDrenaSubBase").value;
		var coefDrenaBase = document.getElementById("coefDrenaBase").value;
		if (espesorSubBase==""&&coefDrenaSubBase=="") {
			document.getElementById('tablaSubaseMetFac').style.display = 'none';
			document.getElementById('tablaSubaseMetVida').style.display = 'none';
		}else {
			document.getElementById('tablaSubaseMetFac').style.display = 'inline';
			document.getElementById("recibecoefSubbaseFact").innerHTML = 'SubBase: m2= '+coefDrenaSubBase+" ; a2= "+coefSubBase;

			document.getElementById('tablaSubaseMetVida').style.display = 'inline';
			document.getElementById("recibecoefSubbaseVida").innerHTML = 'SubBase: m2= '+coefDrenaSubBase+" ; a2= "+coefSubBase1;

		}
		// MATERIAL MEJORAMIENTO COMPARACION
		var espesorMaterial = document.getElementById("espesorMaterial").value;
		var coefDrenaMaterial = document.getElementById("coefDrenaMaterial").value;
		if (espesorSubBase==""&&coefDrenaSubBase=="") {
			document.getElementById('tablaMaterialMetFac').style.display = 'none';
			document.getElementById('tablaMaterialMetVida').style.display = 'none';
		}else {
			document.getElementById('tablaMaterialMetFac').style.display = 'table-row';
			document.getElementById("recibecoefmaterialFact").innerHTML = 'Material de mejoramiento: m3 = '+coefDrenaMaterial+" ; a3= "+coefMaterial;

			document.getElementById('tablaMaterialMetVida').style.display = 'table-row';
			document.getElementById("recibecoefmaterialVida").innerHTML = 'Material de mejoramiento: m3 = '+coefDrenaMaterial+" ; a3= "+coefMaterial1;

		}

		//ESPESOR REDONDEADO
		
		
		
		document.getElementById('recibersEspDNDTRedon').innerHTML = "Espesor sobrecarpeta 'D' redondeado: "+document.getElementById('RedonNdt').value+" in";
		document.getElementById('recibersEspDFactorRedon').innerHTML = "Espesor sobrecarpeta 'D' redondeado: "+document.getElementById('RedonFactor').value+" in";
		document.getElementById('recibersEspDVidaRedon').innerHTML = "Espesor sobrecarpeta 'D' redondeado: "+document.getElementById('RedonVida').value+" in";
		//FIN ESPESOR REDON
		document.getElementById("recibeEsalsFFact2").innerHTML = "Nro. ESAL´s final: "+document.getElementById("nroFinal").value+" ESAL´s, cuyo valor es calculado para el periodo de diseño.";
		document.getElementById("recibezrFact2").innerHTML = "Desviación normal (Zr): "+document.getElementById("zr").value;
		document.getElementById("recibeDesvEstanFact2").innerHTML = "Desviación estándar (So): "+document.getElementById("desviEst").value;
		document.getElementById("recibeIndiceServFact2").innerHTML = "Índice de serviciabilidad (Δpsi): "+document.getElementById("totalPsi").innerHTML;
		document.getElementById("recibemodresefecFact2").innerHTML = "Módulo resiliente efectivo (Mre): "+document.getElementById("totalModResEfectivo").value+" psi";

		document.getElementById("recibeEsalsFVida2").innerHTML = "Nro. ESAL´s final: "+document.getElementById("nroFinal").value+" ESAL´s, cuyo valor es calculado para el periodo de diseño.";
		document.getElementById("recibeDesvEstanVida2").innerHTML = "Desviación estándar (So): "+document.getElementById("desviEst").value;
		document.getElementById("recibeIndiceServVida2").innerHTML = "Índice de serviciabilidad (Δpsi): "+document.getElementById("totalPsi").innerHTML;
		document.getElementById("recibemodresefecVida2").innerHTML = "Módulo resiliente efectivo (Mre): "+document.getElementById("totalModResEfectivo").value+" psi";
	  	//Descrip CALCULO SN
	  	// GRAFICO SN FUTURO
	  	document.getElementById("recibeGrafNomogra1").src = dataURL3;
	  	// GRAFICO SN FUTURO
	  	document.getElementById("recibeGrafNomogra2").src = dataURL3;
	  	//LISTA DE DRENAJES
	  	// if (coefDrenaBase !=""&& coefDrenaSubBase ==''&& coefDrenaMaterial =='') {
	  	// 	document.getElementById("recibelistadrenaje").innerHTML = "<strong>m1 =</strong> "+coefDrenaBase;
	  	// }else if (coefDrenaBase !=""&& coefDrenaSubBase !=''&& coefDrenaMaterial =='') {
	  	// 	document.getElementById("recibelistadrenaje").innerHTML = "<strong>m1 =</strong> "+coefDrenaBase+" ; <strong>m2 =</strong> "+coefDrenaSubBase;
	  	// }else if (coefDrenaBase !=""&& coefDrenaSubBase !=''&& coefDrenaMaterial !='') {
	  	// 	document.getElementById("recibelistadrenaje").innerHTML = "<strong>m1 =</strong> "+coefDrenaBase+" ; <strong>m2 =</strong> "+coefDrenaSubBase+" ; <strong>m3 =</strong> "+coefDrenaMaterial;
	  	// }else if (coefDrenaBase !=""&& coefDrenaSubBase ==''&& coefDrenaMaterial !='') {
	  	// 	document.getElementById("recibelistadrenaje").innerHTML = "<strong>m1=</strong> "+coefDrenaBase+" ; <strong>m3 =</strong> "+coefDrenaMaterial;
	  	// }
	  	//LISTA COEFICIENTES ESTRUCTURALES ; FACTOR CONDICION
	  	

	  	// if (coefEstrucCarpAs !=''&& coefBaseGra !='') {
	  	// 	if (coefSubBase ==''&& espesorMaterial =='') {
	  	// 		document.getElementById("listacoefEstruc").innerHTML = "<strong>a =</strong> "+coefEstrucCarpAs+"	<strong>; a1 =</strong> "+coefBaseGra;
	  	// 	}else if (coefSubBase !=''&& espesorMaterial !='') {
	  	// 		document.getElementById("listacoefEstruc").innerHTML = "<strong>a =</strong> "+coefEstrucCarpAs+"	<strong>; a1 =</strong> "+coefBaseGra+" <strong>; a2 =</strong> "+coefSubBase+" <strong>; a3 =</strong> "+coefMaterial;

	  	// 	}else if (coefSubBase !=''&& espesorMaterial =='') {
	  	// 		document.getElementById("listacoefEstruc").innerHTML = "<strong>a =</strong> "+coefEstrucCarpAs+"	<strong>; a1 =</strong> "+coefBaseGra+" <strong>; a2 =</strong> "+coefSubBase;
	  	// 	}else if (coefSubBase ==''&& espesorMaterial !='') {
	  	// 		document.getElementById("listacoefEstruc").innerHTML = "<strong>a =</strong> "+coefEstrucCarpAs+"	<strong>; a1 =</strong> "+coefBaseGra+" <strong>; a3 =</strong> "+coefMaterial;

	  	// 	}
	  	// }else if (coefEstrucCarpAs !=''&& coefBaseCem !='') {
	  	// 	if (coefSubBase ==''&& espesorMaterial =='') {
	  	// 		document.getElementById("listacoefEstruc").innerHTML = "<strong>a =</strong> "+coefEstrucCarpAs+"	<strong; a1 =</strong "+coefBaseCem;
	  	// 	}else if (coefSubBase !=''&& espesorMaterial !='') {
	  	// 		document.getElementById("listacoefEstruc").innerHTML = "<strong>a =</strong> "+coefEstrucCarpAs+"	<strong; a1 =</strong "+coefBaseCem+" <strong>; a2 =</strong> "+coefSubBase+" <strong>; a3 =</strong> "+coefMaterial;

	  	// 	}else if (coefSubBase !=''&& espesorMaterial =='') {
	  	// 		document.getElementById("listacoefEstruc").innerHTML = "<strong>a =</strong> "+coefEstrucCarpAs+" <strong; a1 =</strong "+coefBaseCem+" <strong>; a2 =</strong> "+coefSubBase;
	  	// 	}else if (coefSubBase ==''&& espesorMaterial !='') {
	  	// 		document.getElementById("listacoefEstruc").innerHTML = "<strong>a =</strong> "+coefEstrucCarpAs+" <strong; a1 =</strong "+coefBaseCem+" <strong>; a3 =</strong> "+coefMaterial;

	  	// 	}

	  	// }
	//FIN DATOS
		//METODO NDT
		document.getElementById("recibersSnefNDT").innerHTML = "SNef= "+document.getElementById("snefNDT").value;
		document.getElementById("recibersCoefEsNDT").innerHTML = "Coeficiente estructural nueva carpeta (a)= "+document.getElementById("coefEstrucCarpAsNDT").value;
		document.getElementById("recibersEspDNDT").innerHTML = "Espesor de nueva carpeta (D)= "+document.getElementById("espFinalNDT").value+" in";
		//METODO Factor
		document.getElementById("recibersSnefFactor").innerHTML = "SNef= "+document.getElementById("snefFactorCondi").value;
		document.getElementById("recibersCoefEsFactor").innerHTML = "Coeficiente estructural nueva carpeta (a)= "+document.getElementById("coefEstrucCarpAsFactor").value;
		document.getElementById("recibersEspDFactor").innerHTML = "Espesor de nueva carpeta (D)= "+document.getElementById("espFinalFactor").value+" in";
		//METODO Vida
		document.getElementById("recibersSnCero").innerHTML = "SN0 = "+document.getElementById("sn0Remanente").value;
		document.getElementById("recibersEsalunocin").innerHTML = "Nro. ESASL´s 1,5 = "+document.getElementById("totalW15").value;
		document.getElementById("recibersRl").innerHTML = "Vida Remanente (%RL) = "+document.getElementById("RL").value+" %";
		document.getElementById("recibersCf").innerHTML = "CF = "+document.getElementById("totalCF").value;


		document.getElementById("recibersSnefVida").innerHTML = "SNef= "+document.getElementById("snefVidaRemanente").value;
		document.getElementById("recibersCoefEsVida").innerHTML = "Coeficiente estructural nueva carpeta (a)= "+document.getElementById("coefEstrucCarpAsVida").value;
		document.getElementById("recibersEspDVida").innerHTML = "Espesor de nueva carpeta (D)= "+document.getElementById("espFinalVida").value+" in"
		;


	var recibeCaratula2 =document.getElementById('recibeCaratula2');
	var recibeRenuncia =document.getElementById('recibeRenuncia');
	var inicioReporte2 =document.getElementById('InicioReporte2');
	var recibetituloProy2 =document.getElementById('recibetituloProy2');
	var recibeDatos =document.getElementById('recibeDatos');

	var inicioMetodoNDT2 = document.getElementById('inicioMetodoNDT2');
	var recibeDatosGenerales =document.getElementById('recibeDatosGenerales');
	var resultadoNDT =document.getElementById('resultadoNDT');

	var inicioMetodoFact = document.getElementById('inicioMetodoFact');
	var recibeDatosFactor = document.getElementById('recibeDatosFactor');
	var resultadoFactor = document.getElementById('resultadoFactor');

	var inicioMetodoVida = document.getElementById('InicioMetodoVida');
	var recibeMetodoVidaRemante = document.getElementById('recibeMetodoVidaRemante');
	var resultadoVida = document.getElementById('resultadoVida');

//RESULTADOS FINALES


	var newWin=window.open("","Print-Window");

			newWin.document.open();

			//newWin.document.write('<html style="font-size: 24px"><head><style type="text/css"> @media print {@page {margin: 20mm 25mm 20mm 25mm;  }   }  </style></head><body style="font-size: 24px" onload="window.print() ">  '+divToPrint.innerHTML+printTabla.innerHTML+'</body></html>');
			newWin.document.write('<style type="text/css">*{font-size: 16px;}{</style>');
			newWin.document.write('<html style=""><head><style type="text/css"> @media print {@page {margin: 20mm 25mm 20mm 25mm;  }   } a:link {color:black; text-decoration: none} a:visited {color:black; text-decoration: none} a:active {color:black; text-decoration: none} a:hover {color:black; text-decoration: none}   </style> </head><body onload="window.print()" > '
				+ recibeCaratula2.innerHTML+'<p style = "page-break-after: always;"> &nbsp; </ p>'
				+recibeRenuncia.innerHTML+'<p style = "page-break-after: always;"> &nbsp; </ p>'
				+recibetituloProy2.innerHTML+recibeDatos.innerHTML+inicioMetodoNDT2.innerHTML+recibeDatosGenerales.innerHTML+resultadoNDT.innerHTML
				+inicioMetodoFact.innerHTML+recibeDatosFactor.innerHTML+resultadoFactor.innerHTML
				+inicioMetodoVida.innerHTML+recibeMetodoVidaRemante.innerHTML+resultadoVida.innerHTML+'</body></html>');
			newWin.document.write('<style type="text/css">table{border-collapse: collapse;}td, th /* Poner borde en td y th */{border: 1px solid black;}</style>');

			

			
			newWin.document.close();

			document.write


			setTimeout(function(){newWin.close();},10);

}