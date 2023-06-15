$.fn.dataTableExt.afnFiltering.push(
	function (oSettings, aData, iDataIndex, row) {
	    var iFini = document.getElementById('fini').value;
	    var iFfin = document.getElementById('ffin').value;

	    var iDateCol = 0;

        // Buscar columna que contenga la palabra "Fecha"
	    $('#dataTables1 th').each(function (index, elem) {
	        (elem.innerText == 'Fecha') ? iDateCol = index : 0;
	    })
	    
	    iFini = iFini.substring(6, 10) + iFini.substring(3, 5) + iFini.substring(0, 2);
	    iFfin = iFfin.substring(6, 10) + iFfin.substring(3, 5) + iFfin.substring(0, 2);

	    var dat = aData[iDateCol].substring(6, 10) + aData[iDateCol].substring(3, 5) + aData[iDateCol].substring(0, 2);
	    //var datoffin = aData[iEndDateCol].substring(6, 10) + aData[iEndDateCol].substring(3, 5) + aData[iEndDateCol].substring(0, 2);

	    if (iFini === "" && iFfin === "") {
	        return true;
	    }
	    else if (iFini <= dat && iFfin === "") {
	        return true;
	    }
	    else if (iFfin >= dat && iFini === "") {
	        return true;
	    }
	    else if (iFini <= dat && iFfin >= dat) {
	        return true;
	    }
	    return false;
	}
);