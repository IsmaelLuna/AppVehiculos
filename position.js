
obtener();
function obtener(){navigator.geolocation.getCurrentPosition(mostrar, gestionarErrores);}
function mostrar(posicion){
var datos='';
sessionStorage.setItem('sessionLat',  posicion.coords.latitude);
sessionStorage.setItem('sessionLon',  posicion.coords.longitude);

datos+='Latitud: '+posicion.coords.latitude+'<br>';

datos+='Longitud: '+posicion.coords.longitude+'<br>';

datos+='Exactitud: '+posicion.coords.accuracy+' metros.<br>';
console.log(datos);

//document.getElementById('map').innerHTML='<iframe src="//maps.google.com/maps?q='+posicion.coords.latitude+','+posicion.coords.longitude+'&z=17&output=embed" width="100%" height="400px"></iframe>';
  /*map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: posicion.coords.latitude, lng: posicion.coords.longitude},
          zoom: 13*/
}
  /*var marker = new google.maps.Marker({
          position: {lat:  posicion.coords.latitude, lng: posicion.coords.longitude},
          map: map,
	  title: 'Mi posicion Actual'
        });*/

function gestionarErrores(error){

alert('Error: '+error.code+' '+error.message+ '\n\nPor favor compruebe que está conectado '+

'a internet y habilite la opción permitir compartir ubicación física');

}

 


 