// JavaScript Document
$(document).ready(function(e) {
    alert ("El documento esta lsito")

document.addEventListener("diviceready", function(){
	$('.btn').click(function(){
var boton=(($(this).attr('class')).split(' '))[1];
	switch (boton)
	{
		case 'b1':
			navigator.notification.beep(1);
		break;
		case 'b2':
			navigator.notification.beep(2);
		break;
		case 'b3':
			navigator.notification.beep(5);
		break;
		case 'b4':
			navigator.notification.beep(10);
		break;
		case 'v1':
			navigator.notification.vibrate(500);
		break;
		case 'v2':
			navigator.notification.vibrate(500);
			navigator.notification.vibrate(500);
		break;
	}

	});
	$('#derecha').swiperight(function(){
	navigator.notification.alert("Deliz&oacute; a la derecha",function() {},"practica1","aceptar");
	});
	
	$('#izquierda').swipeleft(function(){
		navigator.notification.confirm ('¿Que desea hacer...?'),function(opcion){
			switch (opcion)
			{
			case '1':
				navigator.notification.beep(1);
				break;
				case '2':
					navigator.notification.vibrate(500);
					break;
			}
},"Practica1","beep","vibrate",("cancelar");
});

},false);
});
$('table td').eq(1).text(divice.name);
$('table td').eq(3).text(divice.cordova);
$('table td').eq(5).text(divice.plataform);
$('table td').eq(7).text(divice.version);
$('table td').eq(9).text(divice.UUID);
