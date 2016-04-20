document.getElementById('experiment'+ window.experiment).classList.add('show');
document.getElementById('experiment'+ window.experiment).children[0].classList.add('show');
var preguntaActual = 1;

function continuar(){
	switch(window.experiment){
		case 1:
			document.getElementById('experiment'+ window.experiment).children[0].classList.remove('show');
			document.getElementById('experiment'+ window.experiment).children[1].classList.add('show');
		break;
	}
}

function mySubmit(e, form){
	continuar();
	e.preventDefault();
	console.log(form);
}