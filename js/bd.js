

var bGrabar = document.getElementById("grabarRegistro");
bGrabar.addEventListener("click", grabar, false);
function grabar() {
    grabarRegistro = true;
    nuevo = true;
    //'"' + "IdVecino" + '":' + '"' + IdVecino.value + '",'
    cfc = cFecahac.value.split("-");
    cFecahac.value = cfc[2] + "-" + cfc[1] + "-" + cfc[0];

    cfc = cFecaham.value.split("-");
    cFecaham.value = cfc[2] + "-" + cfc[1] + "-" + cfc[0];

    var datosElementoUrbano = '"' + "Nombre" + '":' + '"' + cNombre.value + '",'
        + '"' + "Descripcion" + '":' + '"' + cDescripcion.value + '",'
        + '"' + "Tipo" + '":' + '"' + cTipo.value + '",'
        + '"' + "Latitud" + '":' + '"' + cLatitud.value + '",'
        + '"' + "Longitud" + '":' + '"' + cLongitud.value + '",'
        + '"' + "FechaConstruccion" + '":' + '"' + cFecahac.value + '",'
        + '"' + "FechaMantenimiento" + '":' + '"' + cFecaham.value + '"';

    alert(datosElementoUrbano)
    var ajaxrequest = new XMLHttpRequest();
   
            //Le paso el fichero JSON con llaves
            var jdatoselemento = "{" + datosElementoUrbano + "}";
            var envio = "Todo=" + jdatoselemento;

            ajaxrequest.open("POST", "http://www.informaticasc.com/daw_2122/CiudadI/php/grabarElementoUrbano.php", true);

    //Le indica el tipo de codificación de caracteres que enviamos
    ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //Establecer la conexión con el servidor
    ajaxrequest.onreadystatechange = function () {
        alert(ajaxrequest.readyState + "--" + ajaxrequest.status); //ReadyState son valores (del 1 al 4) que indican si se estableció bien la conexión
                                                                    //Status es el código de estado (400, 500)
        if (ajaxrequest.readyState === 4 && (ajaxrequest.status === 200)) {
            var datosLeidos = ajaxrequest.responseText; //responseText indica la información que recibe del servidor (cómo responde)
            console.log("Datos Recibidos  :" + datosLeidos);
        }
    };
    //ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    alert(envio)
    ajaxrequest.send(envio);
}