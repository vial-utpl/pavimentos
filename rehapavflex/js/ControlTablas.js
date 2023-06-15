function CondicionesDrenajeBase(){
	var calidad = document.getElementById("cmbcalidre").value;
	//DRENAJE BASE
	$("#tabla-drenaje").css("background-color", "");
	$("#Cal_Excelente").css("background-color", "");
	$("#Cal_Buena").css("background-color", "");
	$("#Cal_Aceptable").css("background-color", "");
	$("#Cal_Pobre").css("background-color", "");
	$("#Cal_Muypobre").css("background-color", "");
	$(".Por_01").css("background-color", "");
	$(".Por_15").css("background-color", "");
	$(".Por_525").css("background-color", "");
	$(".Por_25").css("background-color", "");

	if (calidad==0) {
		var x = document.getElementById("humedad").value;
		

		//PINTAR
		$("#Cal_Excelente").css("background-color", "#c0e4fc");

		if (x<=1) {

			var total = (((x-0)*(1.35-1.4))/(1-0))+1.4;
			document.getElementById("coefDrenaBase").value = total.toFixed(3);

			document.getElementById("Op1").innerHTML = "m1" + " = " + "1.40" + " + " + "(" + "(" + "(" + x + " - " + "0" + ")" + " x " + "(" + "1.35" + " - " + "1.40" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
			document.getElementById("ResOp1").innerHTML = "m1" + " = " + total.toFixed(3);
            //Imprimir
            //pintar
            $(".Por_01").css("background-color", "#c0e4fc");
            $("#tabla-drenaje #Cal_Excelente .Por_01").css("background-color", "#008ED1");


        }if (x>1 && x<=5) {
        	var total = (((x-1)*(1.30-1.35))/(5-1))+1.35;
        	document.getElementById("coefDrenaBase").value = total.toFixed(3);

			//FORMULAS
			document.getElementById("Op1").innerHTML = "m1" + " = " + "1.35" + " + " + "(" + "(" + "(" + x + " - " + "1.00" + ")" + " x " + "(" + "1.30" + " - " + "1.35" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
			document.getElementById("ResOp1").innerHTML = "m1" + " = " + total.toFixed(3);

			//Imprimir
			//PINTAR
			$(".Por_15").css("background-color", "#c0e4fc");
			$("#tabla-drenaje #Cal_Excelente .Por_15").css("background-color", "#008ED1");


		}if (x>5&&x<=25) {
			var total = ((((x-5)*(1.20-1.30))/(25-5))+1.30);

			document.getElementById("coefDrenaBase").value = total.toFixed(3);
			document.getElementById("Op1").innerHTML = "m1" + " = " + "1.30" + " + " + "(" + "(" + "(" + x + " - " + "5.00" + ")" + " x " + "(" + "1.20" + " - " + "1.30" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
			document.getElementById("ResOp1").innerHTML = "m1" + " = " + total.toFixed(3);
			//Imprimir
			//PINTAR
			$(".Por_525").css("background-color", "#c0e4fc");
			$("#tabla-drenaje #Cal_Excelente .Por_525").css("background-color", "#008ED1");

		}if (x>25) {
			var total = 1.20;
			document.getElementById("coefDrenaBase").value = total.toFixed(3);
			document.getElementById("Op1").innerHTML = "";
			document.getElementById("ResOp1").innerHTML = "m1" + " = " + "1.20";
			//Imprimir
			//PINTAR
			$(".Por_25").css("background-color", "#c0e4fc");
			$("#tabla-drenaje #Cal_Excelente .Por_25").css("background-color", "#008ED1");
		}if (x=="") {
			document.getElementById("coefDrenaBase").value = "";

		}

	}

	if (calidad==1) {
		var x = document.getElementById("humedad").value;
		
		$("#Cal_Buena").css("background-color", "#c0e4fc");
		if (x<=1) {
			var total = (((x-0)*(1.25-1.35))/(1-0))+1.35;
			document.getElementById("coefDrenaBase").value = total.toFixed(3);
			document.getElementById("Op1").innerHTML = "m1" + " = " + "1.35" + " + " + "(" + "(" + "(" + x+ " - " + "0" + ")" + " x " + "(" + "1.25" + " - " + "1.35" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
			document.getElementById("ResOp1").innerHTML = "m1" + " = " + total.toFixed(3);
			//Imprimir
			//PINTAR
			$(".Por_01").css("background-color", "#c0e4fc");
			$("#tabla-drenaje #Cal_Buena .Por_01").css("background-color", "#008ED1");
		}
		if (x>1&&x<=5) {
			var total = (((x-1)*(1.15-1.25))/(5-1))+1.25;
			document.getElementById("coefDrenaBase").value = total.toFixed(3);
			document.getElementById("Op1").innerHTML = "m1" + " = " + "1.25" + " + " + "(" + "(" + "(" + x+ " - " + "1.00" + ")" + " x " + "(" + "1.15" + " - " + "1.25" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
			document.getElementById("ResOp1").innerHTML = "m1" + " = " + total.toFixed(3);
			//Imprimir
			//PINTAR
			$(".Por_15").css("background-color", "#c0e4fc");
			$("#tabla-drenaje #Cal_Buena .Por_15").css("background-color", "#008ED1");
		}
		if (x>5&&x<=25) {
			var total = (((x-5)*(1-1.15))/(25-5))+1.15;
			document.getElementById("coefDrenaBase").value = total.toFixed(3);
			document.getElementById("Op1").innerHTML = "m1" + " = " + "1.15" + " + " + "(" + "(" + "(" + x+ " - " + "5.00" + ")" + " x " + "(" + "1.00" + " - " + "1.15" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
			document.getElementById("ResOp1").innerHTML = "m1" + " = " + total.toFixed(3);
			//Imprimir
			//PINTAR
			$(".Por_525").css("background-color", "#c0e4fc");
			$("#tabla-drenaje #Cal_Buena .Por_525").css("background-color", "#008ED1");
		}
		if (x>25) {
			var total = 1;
			document.getElementById("coefDrenaBase").value = total.toFixed(3);
			document.getElementById("Op1").innerHTML = "";
			document.getElementById("ResOp1").innerHTML = "m1" + " = " + "1.00";
			//Imprimir
			//PINTAR
		$("#Cal_Buena").css("background-color", "#c0e4fc");

			$(".Por_25").css("background-color", "#c0e4fc");
			$("#tabla-drenaje #Cal_Buena .Por_25").css("background-color", "#008ED1");

		}if (x=="") {
			document.getElementById("coefDrenaBase").value = "";

		}
	}

	if (calidad == 2) {
		var x = document.getElementById("humedad").value;
		
		//PINTAR
		$("#Cal_Aceptable").css("background-color", "#c0e4fc");
		if (x<=1) {
			var total = (((x-0)*(1.15-1.25))/(1-0))+1.25;
			document.getElementById("coefDrenaBase").value = total.toFixed(3);
			document.getElementById("Op1").innerHTML = "m1" + " = " + "1.25" + " + " + "(" + "(" + "(" + x + " - " + "0" + ")" + " x " + "(" + "1.15" + " - " + "1.25" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
			document.getElementById("ResOp1").innerHTML = "m1" + " = " + total.toFixed(3);
			//Imprimir
			//PINTAR
			$(".Por_01").css("background-color", "#c0e4fc");
			$("#tabla-drenaje #Cal_Aceptable .Por_01").css("background-color", "#008ED1");
		}
		if (x>1&&x<=5) {
			var total = (((x-1)*(1.05-1.15))/(5-1))+1.15;
			document.getElementById("coefDrenaBase").value = total.toFixed(3);
			document.getElementById("Op1").innerHTML = "m1" + " = " + "1.15" + " + " + "(" + "(" + "(" + x + " - " + "1.00" + ")" + " x " + "(" + "1.05" + " - " + "1.15" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
			document.getElementById("ResOp1").innerHTML = "m1" + " = " + total.toFixed(3);
			//Imprimir
			$(".Por_15").css("background-color", "#c0e4fc");
			$("#tabla-drenaje #Cal_Aceptable .Por_15").css("background-color", "#008ED1");
		}
		if (x>5&&x<=25) {
			var total = (((x-5)*(0.8-1))/(25-5))+1;
			document.getElementById("coefDrenaBase").value = total.toFixed(3);
			document.getElementById("Op1").innerHTML = "m1" + " = " + "1.00" + " + " + "(" + "(" + "(" + x + " - " + "5.00" + ")" + " x " + "(" + "0.80" + " - " + "1.00" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
			document.getElementById("ResOp1").innerHTML = "m1" + " = " + total.toFixed(3);
			//Imprimir
			$(".Por_525").css("background-color", "#c0e4fc");
			$("#tabla-drenaje #Cal_Aceptable .Por_525").css("background-color", "#008ED1");
		}
		if (x>25) {
			var total = 0.80;
			document.getElementById("coefDrenaBase").value = total.toFixed(3);
			document.getElementById("Op1").innerHTML = "";
			document.getElementById("ResOp1").innerHTML = "m1" + " = " + "0.80";
			//Imprimir
			//PINTAR
			$(".Por_25").css("background-color", "#c0e4fc");
			$("#tabla-drenaje #Cal_Aceptable .Por_25").css("background-color", "#008ED1");

		}if (x=="") {
			document.getElementById("coefDrenaBase").value = "";

		}
	}

	if (calidad == 3) {
		var x = document.getElementById("humedad").value;
		
		//PINTAR
		$("#Cal_Pobre").css("background-color", "#c0e4fc");
		if (x<=1) {
			var total = (((x-0)*(1.05-1.15))/(1-0))+1.15;
			document.getElementById("coefDrenaBase").value = total.toFixed(3);
			document.getElementById("Op1").innerHTML = "m1" + " = " + "1.15" + " + " + "(" + "(" + "(" + x + " - " + "0" + ")" + " x " + "(" + "1.05" + " - " + "1.15" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
			document.getElementById("ResOp1").innerHTML = "m1" + " = " + total.toFixed(3);
			//Imprimir
			//PINTAR
			$(".Por_01").css("background-color", "#c0e4fc");
			$("#tabla-drenaje #Cal_Pobre .Por_01").css("background-color", "#008ED1");

		}
		if (x>1&&x<=5) {
			var total = (((x-1)*(0.8-1.05))/(5-1))+1.05;
			document.getElementById("coefDrenaBase").value = total.toFixed(3);
			document.getElementById("Op1").innerHTML = "m1" + " = " + "1.05" + " + " + "(" + "(" + "(" + x + " - " + "1.00" + ")" + " x " + "(" + "0.80" + " - " + "1.05" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
			document.getElementById("ResOp1").innerHTML = "m1" + " = " + total.toFixed(3);
			//Imprimir
			//PINTAR
			$(".Por_15").css("background-color", "#c0e4fc");
			$("#tabla-drenaje #Cal_Pobre .Por_15").css("background-color", "#008ED1");

		}
		if (x>5&&x<=25) {
			var total = (((x-5)*(0.6-0.8))/(25-5))+0.80;
			document.getElementById("coefDrenaBase").value = total.toFixed(3);
			document.getElementById("Op1").innerHTML = "m1" + " = " + "0.80" + " + " + "(" + "(" + "(" + x + " - " + "5.00" + ")" + " x " + "(" + "0.60" + " - " + "0.80" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
			document.getElementById("ResOp1").innerHTML = "m1" + " = " + total.toFixed(3);
			//Imprimir
			//PINTAR
			$(".Por_525").css("background-color", "#c0e4fc");
			$("#tabla-drenaje #Cal_Pobre .Por_525").css("background-color", "#008ED1");
		}
		if (x>25) {
			var total = 0.60;
			document.getElementById("coefDrenaBase").value = total.toFixed(3);
			document.getElementById("Op1").innerHTML = "";
			document.getElementById("ResOp1").innerHTML = "m1" + " = " + "0.60";
			//Imprimir
			//PINTAR
			$(".Por_25").css("background-color", "#c0e4fc");
			$("#tabla-drenaje #Cal_Pobre .Por_25").css("background-color", "#008ED1");

		}if (x=="") {
			document.getElementById("coefDrenaBase").value = "";

		}
	}

	if (calidad == 4) {
		var x = document.getElementById("humedad").value;
	
		//PINTAR
		$("#Cal_Muypobre").css("background-color", "#c0e4fc");
		if (x<=1) {
			var total = (((x-0)*(0.95-1.05))/(1-0))+1.05;
			document.getElementById("coefDrenaBase").value = total.toFixed(3);
			document.getElementById("Op1").innerHTML = "m1" + " = " + "1.05" + " + " + "(" + "(" + "(" + x + " - " + "0" + ")" + " x " + "(" + "0.95" + " - " + "1.05" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
			document.getElementById("ResOp1").innerHTML = "m1" + " = " + total.toFixed(3);
			//Imprimir
			//Pintar
			$(".Por_01").css("background-color", "#c0e4fc");
			$("#tabla-drenaje #Cal_Muypobre .Por_01").css("background-color", "#008ED1");
		}
		if (x>1&&x<=5) {
			var total = (((x-1)*(0.75-0.95))/(5-1))+0.95
			document.getElementById("coefDrenaBase").value = total.toFixed(3);
			document.getElementById("Op1").innerHTML = "m1" + " = " + "0.95" + " + " + "(" + "(" + "(" + x + " - " + "1.00" + ")" + " x " + "(" + "0.75" + " - " + "0.95" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
			document.getElementById("ResOp1").innerHTML = "m1" + " = " + total.toFixed(3);
			//Imprimir
			//PINTAR
			$(".Por_15").css("background-color", "#c0e4fc");
            $("#tabla-drenaje #Cal_Muypobre .Por_15").css("background-color", "#008ED1");

		}
		if (x>5&&x<=25) {
			var total = (((x-5)*(0.4-0.75))/(25-5))+0.75;
			document.getElementById("coefDrenaBase").value = total.toFixed(3);
			document.getElementById("Op1").innerHTML = "m1" + " = " + "0.75" + " + " + "(" + "(" + "(" + x + " - " + "5.00" + ")" + " x " + "(" + "0.40" + " - " + "0.75" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
			document.getElementById("ResOp1").innerHTML = "m1" + " = " + total.toFixed(3);
			//Imprimir
			//PINTAR
			$(".Por_525").css("background-color", "#c0e4fc");
            $("#tabla-drenaje #Cal_Muypobre .Por_525").css("background-color", "#008ED1");
		}
		if (x>25) {
			var total = 0.40;
			document.getElementById("coefDrenaBase").value = total.toFixed(3);
			document.getElementById("Op1").innerHTML = "";
			document.getElementById("ResOp1").innerHTML = "m1" + " = " + "0.40";
			//Imprimir
			//PINTAR
			 $(".Por_25").css("background-color", "#c0e4fc");
            $("#tabla-drenaje #Cal_Muypobre .Por_25").css("background-color", "#008ED1");
		}if (x=="") {
			document.getElementById("coefDrenaBase").value = "";

		}
	}
}

//CONDICIONES DE DRENAJE 2
function CondicionesDrenajeSubBase(){
	var calidad = document.getElementById("cmbcalidre2").value;

	$("#tabla-drenaje1").css("background-color", "");
	$("#Cal_Excelente1").css("background-color", "");
	$("#Cal_Buena1").css("background-color", "");
	$("#Cal_Aceptable1").css("background-color", "");
	$("#Cal_Pobre1").css("background-color", "");
	$("#Cal_Muypobre1").css("background-color", "");
	$(".Por_011").css("background-color", "");
	$(".Por_155").css("background-color", "");
	$(".Por_5255").css("background-color", "");
	$(".Por_255").css("background-color", "");

	if (calidad==0) {
		var x = document.getElementById("humedad2").value;
		
		//PINTAR
		//PINTAR
		$("#Cal_Excelente1").css("background-color", "#c0e4fc");
		if (x<=1) {

			var total = (((x-0)*(1.35-1.4))/(1-0))+1.4;
			document.getElementById("coefDrenaSubBase").value = total.toFixed(3);
			document.getElementById("Op2").innerHTML = "m2" + " = " + "1.40" + " + " + "(" + "(" + "(" + x + " - " + "0" + ")" + " x " + "(" + "1.35" + " - " + "1.40" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
			document.getElementById("ResOp2").innerHTML = "m2" + " = " + total.toFixed(3);
			//Imprimir
			//pintar
            $(".Por_011").css("background-color", "#c0e4fc");
            $("#tabla-drenaje1 #Cal_Excelente1 .Por_011").css("background-color", "#008ED1");
		}if (x>1&&x<=5) {
			var total = (((x-1)*(1.30-1.35))/(5-1))+1.35;
			document.getElementById("coefDrenaSubBase").value = total.toFixed(3);
			document.getElementById("Op2").innerHTML = "m2" + " = " + "1.35" + " + " + "(" + "(" + "(" + x + " - " + "1.00" + ")" + " x " + "(" + "1.30" + " - " + "1.35" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
			document.getElementById("ResOp2").innerHTML = "m2" + " = " + total.toFixed(3);
			//Imprimir
			$(".Por_155").css("background-color", "#c0e4fc");
			$("#tabla-drenaje1 #Cal_Excelente1 .Por_155").css("background-color", "#008ED1");


		}if (x>5&&x<=25) {
			var total = ((((x-5)*(1.20-1.30))/(25-5))+1.30);

			document.getElementById("coefDrenaSubBase").value = total.toFixed(3);
			document.getElementById("Op2").innerHTML = "m2" + " = " + "1.30" + " + " + "(" + "(" + "(" + x + " - " + "5.00" + ")" + " x " + "(" + "1.20" + " - " + "1.30" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
			document.getElementById("ResOp2").innerHTML = "m2" + " = " + total.toFixed(3);
			//Imprimir
			//PINTAR
			$(".Por_5255").css("background-color", "#c0e4fc");
			$("#tabla-drenaje1 #Cal_Excelente1 .Por_5255").css("background-color", "#008ED1");

		}if (x>25) {
			var total = 1.20;
			document.getElementById("coefDrenaSubBase").value = total.toFixed(3);
			document.getElementById("Op2").innerHTML = "";
			document.getElementById("ResOp2").innerHTML = "m2" + " = " + "1.20";
			//Imprimir
			//PINTAR
			$(".Por_255").css("background-color", "#c0e4fc");
			$("#tabla-drenaje1 #Cal_Excelente1 .Por_255").css("background-color", "#008ED1");
		}if (x=="") {
			document.getElementById("coefDrenaSubBase").value = "";

		}

	}

	if (calidad==1) {
		var x = document.getElementById("humedad2").value;
		
		$("#Cal_Buena1").css("background-color", "#c0e4fc");
		if (x<=1) {
			var total = (((x-0)*(1.25-1.35))/(1-0))+1.35;
			document.getElementById("coefDrenaSubBase").value = total.toFixed(3);
			document.getElementById("Op2").innerHTML = "m2" + " = " + "1.35" + " + " + "(" + "(" + "(" + x+ " - " + "0" + ")" + " x " + "(" + "1.25" + " - " + "1.35" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
			document.getElementById("ResOp2").innerHTML = "m2" + " = " + total.toFixed(3);
			//Imprimir
			//PINTAR
			$(".Por_011").css("background-color", "#c0e4fc");
			$("#tabla-drenaje1 #Cal_Buena1 .Por_011").css("background-color", "#008ED1");
		}
		if (x>1&&x<=5) {
			var total = (((x-1)*(1.15-1.25))/(5-1))+1.25;
			document.getElementById("coefDrenaSubBase").value = total.toFixed(3);
			document.getElementById("Op2").innerHTML = "m2" + " = " + "1.25" + " + " + "(" + "(" + "(" + x+ " - " + "1.00" + ")" + " x " + "(" + "1.15" + " - " + "1.25" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
			document.getElementById("ResOp3").innerHTML = "m3" + " = " + total.toFixed(3);
			//Imprimir
			//PINTAR
			$(".Por_155").css("background-color", "#c0e4fc");
			$("#tabla-drenaje1 #Cal_Buena1 .Por_155").css("background-color", "#008ED1");
		}
		if (x>5&&x<=25) {
			var total = (((x-5)*(1-1.15))/(25-5))+1.15;
			document.getElementById("coefDrenaSubBase").value = total.toFixed(3);
			document.getElementById("Op2").innerHTML = "m2" + " = " + "1.15" + " + " + "(" + "(" + "(" + x+ " - " + "5.00" + ")" + " x " + "(" + "1.00" + " - " + "1.15" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
			document.getElementById("ResOp2").innerHTML = "m2" + " = " + total.toFixed(3);
			//Imprimir
			//PINTAR
			$(".Por_5255").css("background-color", "#c0e4fc");
			$("#tabla-drenaje1 #Cal_Buena1 .Por_5255").css("background-color", "#008ED1");
		}
		if (x>25) {
			var total = 1;
			document.getElementById("coefDrenaSubBase").value = total.toFixed(3);
			document.getElementById("Op2").innerHTML = "";
			document.getElementById("ResOp2").innerHTML = "m2" + " = " + "1.00";
			//Imprimir
			//PINTAR
			$(".Por_255").css("background-color", "#c0e4fc");
			$("#tabla-drenaje1 #Cal_Buena1 .Por_255").css("background-color", "#008ED1");
		}if (x=="") {
			document.getElementById("coefDrenaSubBase").value = "";

		}
	}

	if (calidad == 2) {
		var x = document.getElementById("humedad2").value;
		
		//PINTAR
		$("#Cal_Aceptable1").css("background-color", "#c0e4fc");
		if (x<=1) {
			var total = (((x-0)*(1.15-1.25))/(1-0))+1.25;
			document.getElementById("coefDrenaSubBase").value = total.toFixed(3);

			document.getElementById("Op2").innerHTML = "m2" + " = " + "1.25" + " + " + "(" + "(" + "(" + x + " - " + "0" + ")" + " x " + "(" + "1.15" + " - " + "1.25" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
			document.getElementById("ResOp2").innerHTML = "m2" + " = " + total.toFixed(3);
			//Imprimir
			//PINTAR
			$(".Por_011").css("background-color", "#c0e4fc");
			$("#tabla-drenaje1 #Cal_Aceptable1 .Por_011").css("background-color", "#008ED1");
		}
		if (x>1&&x<=5) {
			var total = (((x-1)*(1.05-1.15))/(5-1))+1.15;
			document.getElementById("coefDrenaSubBase").value = total.toFixed(3);
			document.getElementById("Op2").innerHTML = "m2" + " = " + "1.15" + " + " + "(" + "(" + "(" + x + " - " + "1.00" + ")" + " x " + "(" + "1.05" + " - " + "1.15" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
			document.getElementById("ResOp2").innerHTML = "m2" + " = " + total.toFixed(3);
			//Imprimir
			$(".Por_155").css("background-color", "#c0e4fc");
			$("#tabla-drenaje1 #Cal_Aceptable1 .Por_155").css("background-color", "#008ED1");
		}
		if (x>5&&x<=25) {
			var total = (((x-5)*(0.8-1))/(25-5))+1;
			document.getElementById("coefDrenaSubBase").value = total.toFixed(3);
			document.getElementById("Op2").innerHTML = "m2" + " = " + "1.00" + " + " + "(" + "(" + "(" + x + " - " + "5.00" + ")" + " x " + "(" + "0.80" + " - " + "1.00" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
			document.getElementById("ResOp2").innerHTML = "m2" + " = " + total.toFixed(3);
			//imprimir
			$(".Por_5255").css("background-color", "#c0e4fc");
			$("#tabla-drenaje1 #Cal_Aceptable1 .Por_5255").css("background-color", "#008ED1");
		}
		if (x>25) {
			var total = 0.80;
			document.getElementById("coefDrenaSubBase").value = total.toFixed(3);
			document.getElementById("Op2").innerHTML = "";
			document.getElementById("ResOp2").innerHTML = "m2" + " = " + "0.80";
			//Imprimir
			//PINTAR
			$(".Por_255").css("background-color", "#c0e4fc");
			$("#tabla-drenaje1 #Cal_Aceptable1 .Por_255").css("background-color", "#008ED1");
		}if (x=="") {
			document.getElementById("coefDrenaSubBase").value = "";

		}
	}

	if (calidad == 3) {
		var x = document.getElementById("humedad2").value;
		
		//PINTAR
		$("#Cal_Pobre1").css("background-color", "#c0e4fc");
		if (x<=1) {
			var total = (((x-0)*(1.05-1.15))/(1-0))+1.15;
			document.getElementById("coefDrenaSubBase").value = total.toFixed(3);

			document.getElementById("Op2").innerHTML = "m2" + " = " + "1.15" + " + " + "(" + "(" + "(" + x + " - " + "0" + ")" + " x " + "(" + "1.05" + " - " + "1.15" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
			document.getElementById("ResOp2").innerHTML = "m2" + " = " + total.toFixed(3);
			//Imprimir
			//PINTAR
			$(".Por_011").css("background-color", "#c0e4fc");
			$("#tabla-drenaje1 #Cal_Pobre1 .Por_011").css("background-color", "#008ED1");		

		}
		if (x>1&&x<=5) {
			var total = (((x-1)*(0.8-1.05))/(5-1))+1.05;
			document.getElementById("coefDrenaSubBase").value = total.toFixed(3);

			document.getElementById("Op2").innerHTML = "m2" + " = " + "1.05" + " + " + "(" + "(" + "(" + x + " - " + "1.00" + ")" + " x " + "(" + "0.80" + " - " + "1.05" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
			document.getElementById("ResOp2").innerHTML = "m2" + " = " + total.toFixed(3);
			//Imprimir
			//PINTAR
			$(".Por_155").css("background-color", "#c0e4fc");
			$("#tabla-drenaje1 #Cal_Pobre1 .Por_155").css("background-color", "#008ED1");
		}
		if (x>5&&x<=25) {
			var total = (((x-5)*(0.6-0.8))/(25-5))+0.80;
			document.getElementById("coefDrenaSubBase").value = total.toFixed(3);

			document.getElementById("Op2").innerHTML = "m2" + " = " + "0.80" + " + " + "(" + "(" + "(" + x + " - " + "5.00" + ")" + " x " + "(" + "0.60" + " - " + "0.80" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
			document.getElementById("ResOp2").innerHTML = "m2" + " = " + total.toFixed(3);
			//Imprimir
			//PINTAR
			$(".Por_5255").css("background-color", "#c0e4fc");
			$("#tabla-drenaje1 #Cal_Pobre1 .Por_5255").css("background-color", "#008ED1");
		}
		if (x>25) {
			var total = 0.60;
			document.getElementById("coefDrenaSubBase").value = total.toFixed(3);

			document.getElementById("Op2").innerHTML = "";
			document.getElementById("ResOp2").innerHTML = "m2" + " = " + "0.60";
			//Imprimir
			//PINTAR
			$(".Por_255").css("background-color", "#c0e4fc");
			$("#tabla-drenaje1 #Cal_Pobre1 .Por_255").css("background-color", "#008ED1");
		}if (x=="") {
			document.getElementById("coefDrenaSubBase").value = "";

		}
	}

	if (calidad == 4) {
		var x = document.getElementById("humedad2").value;
		
		//PINTAR
		$("#Cal_Muypobre1").css("background-color", "#c0e4fc");
		if (x<=1) {
			var total = (((x-0)*(0.95-1.05))/(1-0))+1.05;
			document.getElementById("coefDrenaSubBase").value = total.toFixed(3);

			document.getElementById("Op2").innerHTML = "m2" + " = " + "1.05" + " + " + "(" + "(" + "(" + x + " - " + "0" + ")" + " x " + "(" + "0.95" + " - " + "1.05" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
			document.getElementById("ResOp2").innerHTML = "m2" + " = " + total.toFixed(3);
			//Imprimir
			//Pintar
			$(".Por_011").css("background-color", "#c0e4fc");
			$("#tabla-drenaje1 #Cal_Muypobre1 .Por_011").css("background-color", "#008ED1");		

		}
		if (x>1&&x<=5) {
			var total = (((x-1)*(0.75-0.95))/(5-1))+0.95
			document.getElementById("coefDrenaSubBase").value = total.toFixed(3);

			document.getElementById("Op2").innerHTML = "m2" + " = " + "0.95" + " + " + "(" + "(" + "(" + x + " - " + "1.00" + ")" + " x " + "(" + "0.75" + " - " + "0.95" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
			document.getElementById("ResOp2").innerHTML = "m2" + " = " + total.toFixed(3);
			//Imprimir
			//PINTAR
			$(".Por_155").css("background-color", "#c0e4fc");
            $("#tabla-drenaje1 #Cal_Muypobre1 .Por_155").css("background-color", "#008ED1");
		}
		if (x>5&&x<=25) {
			var total = (((x-5)*(0.4-0.75))/(25-5))+0.75;
			document.getElementById("coefDrenaSubBase").value = total.toFixed(3);

			document.getElementById("Op2").innerHTML = "m2" + " = " + "0.75" + " + " + "(" + "(" + "(" + x + " - " + "5.00" + ")" + " x " + "(" + "0.40" + " - " + "0.75" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
			document.getElementById("ResOp2").innerHTML = "m2" + " = " + total.toFixed(3);
			//Imprimir
			$(".Por_5255").css("background-color", "#c0e4fc");
            $("#tabla-drenaje1 #Cal_Muypobre1 .Por_5255").css("background-color", "#008ED1");
		}
		if (x>25) {
			var total = 0.40;
			document.getElementById("coefDrenaSubBase").value = total.toFixed(3);

			document.getElementById("Op2").innerHTML = "";
			document.getElementById("ResOp2").innerHTML = "m2" + " = " + "0.40";
			//Imprimir
			//PINTAR
			 $(".Por_255").css("background-color", "#c0e4fc");
            $("#tabla-drenaje1 #Cal_Muypobre1 .Por_255").css("background-color", "#008ED1");
		}if (x=="") {
			document.getElementById("coefDrenaSubBase").value = "";

		}
	}
}
//CONDICIONES DE DRENAJE 3
function CondicionesDrenajeMaterialMejora(){
	var calidad = document.getElementById("cmbcalidre3").value;

	$("#tabla-drenaje2").css("background-color", "");
	$("#Cal_Excelente2").css("background-color", "");
	$("#Cal_Buena2").css("background-color", "");
	$("#Cal_Aceptable2").css("background-color", "");
	$("#Cal_Pobre2").css("background-color", "");
	$("#Cal_Muypobre2").css("background-color", "");
	$(".Por_0111").css("background-color", "");
	$(".Por_1555").css("background-color", "");
	$(".Por_52555").css("background-color", "");
	$(".Por_2555").css("background-color", "");

	if (calidad==0) {
		var x = document.getElementById("humedad3").value;
		
		//PINTAR
		$("#Cal_Excelente2").css("background-color", "#c0e4fc");
		if (x<=1) {

			var total = (((x-0)*(1.35-1.4))/(1-0))+1.4;
			document.getElementById("coefDrenaMaterial").value = total.toFixed(3);
			document.getElementById("Op3").innerHTML = "m3" + " = " + "1.40" + " + " + "(" + "(" + "(" + x + " - " + "0" + ")" + " x " + "(" + "1.35" + " - " + "1.40" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
			document.getElementById("ResOp3").innerHTML = "m3" + " = " + total.toFixed(3);
			//Imprimir
			//pintar
            $(".Por_0111").css("background-color", "#c0e4fc");
            $("#tabla-drenaje2 #Cal_Excelente2 .Por_0111").css("background-color", "#008ED1");

			

		}if (x>1&&x<=5) {
			var total = (((x-1)*(1.30-1.35))/(5-1))+1.35;
			document.getElementById("coefDrenaMaterial").value = total.toFixed(3);
			document.getElementById("Op3").innerHTML = "m3" + " = " + "1.35" + " + " + "(" + "(" + "(" + x + " - " + "1.00" + ")" + " x " + "(" + "1.30" + " - " + "1.35" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
			document.getElementById("ResOp3").innerHTML = "m3" + " = " + total.toFixed(3);
			//Imprimir
			//PINTAR
			$(".Por_1555").css("background-color", "#c0e4fc");
			$("#tabla-drenaje2 #Cal_Excelente2 .Por_1555").css("background-color", "#008ED1");


		}if (x>5&&x<=25) {
			var total = ((((x-5)*(1.20-1.30))/(25-5))+1.30);

			document.getElementById("coefDrenaMaterial").value = total.toFixed(3);
			document.getElementById("Op3").innerHTML = "m3" + " = " + "1.30" + " + " + "(" + "(" + "(" + x + " - " + "5.00" + ")" + " x " + "(" + "1.20" + " - " + "1.30" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
			document.getElementById("ResOp3").innerHTML = "m3" + " = " + total.toFixed(3);
			//Imprimir
			//PINTAR
			$(".Por_52555").css("background-color", "#c0e4fc");
			$("#tabla-drenaje2 #Cal_Excelente2 .Por_52555").css("background-color", "#008ED1");

		}if (x>25) {
			var total = 1.20;
			document.getElementById("coefDrenaMaterial").value = total.toFixed(3);
			document.getElementById("Op3").innerHTML = "";
			document.getElementById("ResOp3").innerHTML = "m3" + " = " + "1.20";
			//Imprimir
			//PINTAR
			$(".Por_2555").css("background-color", "#c0e4fc");
			$("#tabla-drenaje2 #Cal_Excelente2 .Por_2555").css("background-color", "#008ED1");
		}if (x=="") {
			document.getElementById("coefDrenaMaterial").value = "";

		}

	}

	if (calidad==1) {
		var x = document.getElementById("humedad3").value;
		
		$("#Cal_Buena2").css("background-color", "#c0e4fc");
		if (x<=1) {
			var total = (((x-0)*(1.25-1.35))/(1-0))+1.35;
			document.getElementById("coefDrenaMaterial").value = total.toFixed(3);
			document.getElementById("Op3").innerHTML = "m3" + " = " + "1.35" + " + " + "(" + "(" + "(" + x+ " - " + "0" + ")" + " x " + "(" + "1.25" + " - " + "1.35" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
			document.getElementById("ResOp3").innerHTML = "m3" + " = " + total.toFixed(3);
			//Imprimir
			//PINTAR
			$(".Por_0111").css("background-color", "#c0e4fc");
			$("#tabla-drenaje2 #Cal_Buena2 .Por_0111").css("background-color", "#008ED1");
		}
		if (x>1&&x<=5) {
			var total = (((x-1)*(1.15-1.25))/(5-1))+1.25;
			document.getElementById("coefDrenaMaterial").value = total.toFixed(3);
			document.getElementById("Op3").innerHTML = "m3" + " = " + "1.25" + " + " + "(" + "(" + "(" + x+ " - " + "1.00" + ")" + " x " + "(" + "1.15" + " - " + "1.25" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
			document.getElementById("ResOp3").innerHTML = "m3" + " = " + total.toFixed(3);
			//Imprimir
			//PINTAR
			$(".Por_1555").css("background-color", "#c0e4fc");
			$("#tabla-drenaje2 #Cal_Buena2 .Por_1555").css("background-color", "#008ED1");
		}
		if (x>5&&x<=25) {
			var total = (((x-5)*(1-1.15))/(25-5))+1.15;
			document.getElementById("coefDrenaMaterial").value = total.toFixed(3);
			document.getElementById("Op3").innerHTML = "m3" + " = " + "1.15" + " + " + "(" + "(" + "(" + x+ " - " + "5.00" + ")" + " x " + "(" + "1.00" + " - " + "1.15" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
			document.getElementById("ResOp3").innerHTML = "m3" + " = " + total.toFixed(3);
			//Imprimir
			//PINTAR
			$(".Por_52555").css("background-color", "#c0e4fc");
			$("#tabla-drenaje2 #Cal_Buena2 .Por_52555").css("background-color", "#008ED1");
		}
		if (x>25) {
			var total = 1;
			document.getElementById("coefDrenaMaterial").value = total.toFixed(3);
			document.getElementById("Op3").innerHTML = "";
			document.getElementById("ResOp3").innerHTML = "m3" + " = " + "1.00";
			//Imprimir
			//PINTAR
			$(".Por_2555").css("background-color", "#c0e4fc");
			$("#tabla-drenaje2 #Cal_Buena2 .Por_2555").css("background-color", "#008ED1");
		}if (x=="") {
			document.getElementById("coefDrenaMaterial").value = "";

		}
	}

	if (calidad == 2) {
		var x = document.getElementById("humedad3").value;
		
		//PINTAR
		$("#Cal_Aceptable2").css("background-color", "#c0e4fc");
		if (x<=1) {
			var total = (((x-0)*(1.15-1.25))/(1-0))+1.25;
			document.getElementById("coefDrenaMaterial").value = total.toFixed(3);

			document.getElementById("Op3").innerHTML = "m3" + " = " + "1.25" + " + " + "(" + "(" + "(" + x + " - " + "0" + ")" + " x " + "(" + "1.15" + " - " + "1.25" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
			document.getElementById("ResOp3").innerHTML = "m3" + " = " + total.toFixed(3);
			//Imprimir
			//PINTAR
			$(".Por_0111").css("background-color", "#c0e4fc");
			$("#tabla-drenaje2 #Cal_Aceptable2 .Por_0111").css("background-color", "#008ED1");
		}
		if (x>1&&x<=5) {
			var total = (((x-1)*(1.05-1.15))/(5-1))+1.15;
			document.getElementById("coefDrenaMaterial").value = total.toFixed(3);

			document.getElementById("Op3").innerHTML = "m3" + " = " + "1.15" + " + " + "(" + "(" + "(" + x + " - " + "1.00" + ")" + " x " + "(" + "1.05" + " - " + "1.15" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
			document.getElementById("ResOp3").innerHTML = "m3" + " = " + total.toFixed(3);
			//Imprimir
			$(".Por_1555").css("background-color", "#c0e4fc");
			$("#tabla-drenaje2 #Cal_Aceptable2 .Por_1555").css("background-color", "#008ED1");
		}
		if (x>5&&x<=25) {
			var total = (((x-5)*(0.8-1))/(25-5))+1;
			document.getElementById("coefDrenaMaterial").value = total.toFixed(3);
			document.getElementById("Op3").innerHTML = "m3" + " = " + "1.00" + " + " + "(" + "(" + "(" + x + " - " + "5.00" + ")" + " x " + "(" + "0.80" + " - " + "1.00" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
			document.getElementById("ResOp3").innerHTML = "m3" + " = " + total.toFixed(3);
			//imprimir
			$(".Por_52555").css("background-color", "#c0e4fc");
			$("#tabla-drenaje2 #Cal_Aceptable2 .Por_52555").css("background-color", "#008ED1");
		}
		if (x>25) {
			var total = 0.80;
			document.getElementById("coefDrenaMaterial").value = total.toFixed(3);
			document.getElementById("Op3").innerHTML = "";
			document.getElementById("ResOp3").innerHTML = "m3" + " = " + "0.80";
			//Imprimir
			//PINTAR
			$(".Por_2555").css("background-color", "#c0e4fc");
			$("#tabla-drenaje2 #Cal_Aceptable2 .Por_2555").css("background-color", "#008ED1");
		}if (x=="") {
			document.getElementById("coefDrenaMaterial").value = "";

		}
	}

	if (calidad == 3) {
		var x = document.getElementById("humedad3").value;
		
		//PINTAR
		$("#Cal_Pobre2").css("background-color", "#c0e4fc");
		if (x<=1) {
			var total = (((x-0)*(1.05-1.15))/(1-0))+1.15;
			document.getElementById("coefDrenaMaterial").value = total.toFixed(3);

			document.getElementById("Op3").innerHTML = "m3" + " = " + "1.15" + " + " + "(" + "(" + "(" + x + " - " + "0" + ")" + " x " + "(" + "1.05" + " - " + "1.15" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
			document.getElementById("ResOp3").innerHTML = "m3" + " = " + total.toFixed(3);
			//Imprimir
			//PINTAR
			$(".Por_0111").css("background-color", "#c0e4fc");
			$("#tabla-drenaje2 #Cal_Pobre2 .Por_0111").css("background-color", "#008ED1");
			
			

		}
		if (x>1&&x<=5) {
			var total = (((x-1)*(0.8-1.05))/(5-1))+1.05;
			document.getElementById("coefDrenaMaterial").value = total.toFixed(3);
			document.getElementById("Op3").innerHTML = "m3" + " = " + "1.05" + " + " + "(" + "(" + "(" + x + " - " + "1.00" + ")" + " x " + "(" + "0.80" + " - " + "1.05" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
			document.getElementById("ResOp3").innerHTML = "m3" + " = " + total.toFixed(3);
			//Imprimir
			//PINTAR
			$(".Por_1555").css("background-color", "#c0e4fc");
			$("#tabla-drenaje2 #Cal_Pobre2 .Por_1555").css("background-color", "#008ED1");
		}
		if (x>5&&x<=25) {
			var total = (((x-5)*(0.6-0.8))/(25-5))+0.80;
			document.getElementById("coefDrenaMaterial").value = total.toFixed(3);
			document.getElementById("Op3").innerHTML = "m3" + " = " + "0.80" + " + " + "(" + "(" + "(" + x + " - " + "5.00" + ")" + " x " + "(" + "0.60" + " - " + "0.80" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
			document.getElementById("ResOp3").innerHTML = "m3" + " = " + total.toFixed(3);
			//Imprimir
			//PINTAR
			$(".Por_52555").css("background-color", "#c0e4fc");
			$("#tabla-drenaje2 #Cal_Pobre2 .Por_52555").css("background-color", "#008ED1");
		}
		if (x>25) {
			var total = 0.60;
			document.getElementById("coefDrenaMaterial").value = total.toFixed(3);
			document.getElementById("Op3").innerHTML = "";
			document.getElementById("ResOp3").innerHTML = "m3" + " = " + "0.60";
			//Imprimir
			//PINTAR
			$(".Por_2555").css("background-color", "#c0e4fc");
			$("#tabla-drenaje2 #Cal_Pobre2 .Por_2555").css("background-color", "#008ED1");
		}if (x=="") {
			document.getElementById("coefDrenaMaterial").value = "";

		}
	}

	if (calidad == 4) {
		var x = document.getElementById("humedad3").value;
		
		//PINTAR
		$("#Cal_Muypobre2").css("background-color", "#c0e4fc");
		if (x<=1) {
			var total = (((x-0)*(0.95-1.05))/(1-0))+1.05;
			document.getElementById("coefDrenaMaterial").value = total.toFixed(3);

			document.getElementById("Op3").innerHTML = "m3" + " = " + "1.05" + " + " + "(" + "(" + "(" + x + " - " + "0" + ")" + " x " + "(" + "0.95" + " - " + "1.05" + ")" + ")" + " / " + "(" + "1.00" + " - " + " 0 " + ")" + ")";
			document.getElementById("ResOp3").innerHTML = "m3" + " = " + total.toFixed(3);
			//Imprimir
			//Pintar
			$(".Por_0111").css("background-color", "#c0e4fc");
			$("#tabla-drenaje2 #Cal_Muypobre2 .Por_0111").css("background-color", "#008ED1");			

		}
		if (x>1&&x<=5) {
			var total = (((x-1)*(0.75-0.95))/(5-1))+0.95
			document.getElementById("coefDrenaMaterial").value = total.toFixed(3);
			document.getElementById("Op3").innerHTML = "m3" + " = " + "0.95" + " + " + "(" + "(" + "(" + x + " - " + "1.00" + ")" + " x " + "(" + "0.75" + " - " + "0.95" + ")" + ")" + " / " + "(" + "5.00" + " - " + " 1.00 " + ")" + ")";
			document.getElementById("ResOp3").innerHTML = "m3" + " = " + total.toFixed(3);
			//Imprimir
			//PINTAR
			$(".Por_1555").css("background-color", "#c0e4fc");
            $("#tabla-drenaje2 #Cal_Muypobre2 .Por_1555").css("background-color", "#008ED1");
		}
		if (x>5&&x<=25) {
			var total = (((x-5)*(0.4-0.75))/(25-5))+0.75;
			document.getElementById("coefDrenaMaterial").value = total.toFixed(3);

			document.getElementById("Op3").innerHTML = "m3" + " = " + "0.75" + " + " + "(" + "(" + "(" + x + " - " + "5.00" + ")" + " x " + "(" + "0.40" + " - " + "0.75" + ")" + ")" + " / " + "(" + "25.00" + " - " + " 5.00 " + ")" + ")";
			document.getElementById("ResOp3").innerHTML = "m3" + " = " + total.toFixed(3);
			//Imprimir
			//PINTAR
			$(".Por_52555").css("background-color", "#c0e4fc");
            $("#tabla-drenaje2 #Cal_Muypobre2 .Por_52555").css("background-color", "#008ED1");
		}
		if (x>25) {
			var total = 0.40;
			document.getElementById("coefDrenaMaterial").value = total.toFixed(3);

			document.getElementById("Op3").innerHTML = "";
			document.getElementById("ResOp3").innerHTML = "m3" + " = " + "0.40";
			//Imprimir
			//PINTAR
			 $(".Por_2555").css("background-color", "#c0e4fc");
            $("#tabla-drenaje2 #Cal_Muypobre2 .Por_2555").css("background-color", "#008ED1");
		}if (x=="") {
			document.getElementById("coefDrenaMaterial").value = "";

		}
	}
}