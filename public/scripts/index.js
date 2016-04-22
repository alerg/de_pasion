document.getElementById('experiment'+ 1).classList.add('show');
document.getElementById('experiment'+ 1).children[0].classList.add('show');
var preguntaActual = 1;
var isOk = false;

var logicaCheck = function(name, next, categoria_evento){
	var dep = document.getElementsByName(name);
	var deportes = [];
	for(var i = 0; i < dep.length ; i++){
		if(dep[i].checked){
			deportes.push(dep[i].value);				
		}
	}
	if(deportes.length == 0){
		alert('Por favor, seleccione una o varias opciones');
	}else{
		isOk = true;
		document.getElementById('experiment' + preguntaActual).classList.remove('show');
		document.cookie = 'pregunta' + preguntaActual +'='+ next + ';';
		preguntaActual = next;
    	ga('send', 'event', 'investigacion', categoria_evento, '', deportes.join());
	}
}

var logicaRadio = function(name, categoria_evento, nextSI, nextNO){
	var meses = document.getElementsByName(name);
	var value;
	for(var i = 0; i < meses.length ; i++){
		if(meses[i].checked){
			value = meses[i].value;
			i = meses.length;	
		}
	}
	if(value){
		isOk = true;
    	ga('send', 'event', 'investigacion', categoria_evento, value);
    	document.getElementById('experiment' + preguntaActual).classList.remove('show');
    	if(value == 'NO'){
			document.cookie = 'pregunta' + preguntaActual +'='+ nextNO || nextSI + ';';
    		preguntaActual = nextNO || nextSI;
    	}else{
    		document.cookie = 'pregunta' + preguntaActual +'='+ nextSI + ';';
    		preguntaActual = nextSI;
    	}
	}else{
		alert('Por favor, elije una opción');
	}
}

function continuar(){
	isOk = false;
	var existsValue = exists(preguntaActual);
	if(existsValue){
		document.getElementById('experiment'+ preguntaActual).classList.remove('show');
		document.getElementById('experiment'+ existsValue).classList.add('show');
		preguntaActual = Number(existsValue);
		continuar();
	}else{
		switch(preguntaActual){
			case 0:
				preguntaActual++;
			break;
			case 1:
				var existsValue = exists(1);
				if(existsValue){
					preguntaActual = existsValue;
					continuar();
				}else{
					logicaCheck('deporte', 2, 'que_deporte');
				}
			break;
			case 2:
				logicaRadio('experiment2Value', 'organiza_juega_partidos', 3, 8);
			break;
			case 3:
				logicaRadio('mes', 'cada_cuanto_juega', 4);
			break;
			case 4:
				logicaRadio('experiment4Value', 'sumarse_a_desconocidos', 5, 6);
			break;
			case 5:
				logicaRadio('experiment5Value', 'calificar_a_desconocidos', 6);
			break;
			case 6:
				logicaRadio('experiment6Value', 'sumarse_a_equipo', 7);
			break;
			case 7:
				logicaCheck('cancha', 8, 'al_elejir_cancha');
			break;
		}
		if(isOk){
			document.getElementById('experiment'+ preguntaActual).classList.add('show');
		}
	}
}


var exists = function(preguntaNUmero){
	var coo = document.cookie.split(';');
	for (var i  = 0 ; i < coo.length ; i++) {
		var keyValue = coo[i].split("=");
		if(keyValue[0] == ' pregunta' + preguntaNUmero){
			return keyValue[1];
		}
	};
	return false;
}

continuar();

function mySubmit(e, form){
	continuar();
	e.preventDefault();
	console.log(form);
}