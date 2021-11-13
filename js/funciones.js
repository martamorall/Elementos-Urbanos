var cajas=document.querySelectorAll("form input");
var cajaChequeo=null; //Caja con la que trabajo
var cajaNombre=null;

//Evento para ver en qué caja me he posicionado
cajas.forEach(caja =>{
    caja.addEventListener("keydown", () =>{
        elementoSeleccionado(caja);
    })
});

//Evalua la expresión regular cuando pierde el foco
cajas.forEach(caja =>{
    caja.addEventListener("keyup", () =>{
        evaluaPatron(caja);
    })
});

cajas.forEach(caja =>{
    caja.addEventListener("blur", () =>{
        evaluaPatron(caja);
    })
});
 
function elementoSeleccionado(caja){
    cajaChequeo=caja.id;
}

function evaluaPatron(){
    if(cajaChequeo=="cId"){
        var patron=/^[0-9]+$/
        var resultado=patron.test(cId.value);
        
        //Si el resultado es false
        if(!resultado){
            document.getElementById("cId").style.color="red";
            document.getElementById("cId").focus();//no le deja salir del input hasta que no lo escribe bien
        }else{
            document.getElementById("cId").style.color="black";
        }
    }
    if(cajaChequeo=="cNombre"){
        var patron=/(?=^.{1,50}$)[a-zA-Záéíóú]+/;
        var resultado=patron.test(cNombre.value);
        if(!resultado){
            document.getElementById("cNombre").style.color="red";
            document.getElementById("cNombre").focus();//no le deja salir del input hasta que no lo escribe bien
        }else{
            document.getElementById("cNombre").style.color="black";
        }
    }
    if(cajaChequeo=="cDescripcion"){
        var patron=/(?=^.{1,150}$)[a-zA-Z0-9áéíóú]+/;
        var resultado=patron.test(cDescripcion.value);
        if(!resultado){
            document.getElementById("cDescripcion").style.color="red";
            document.getElementById("cDescripcion").focus();//no le deja salir del input hasta que no lo escribe bien
        }else{
            document.getElementById("cDescripcion").style.color="black";
        }
    }
    if(cajaChequeo=="cTipo"){
        var patron=/^Alcantarilla$|^Sucia$|^Limpia$|^Farola$|^Papelera$|^Jardin$|^Datos$|^Eléctrica$/;
        var resultado=patron.test(cTipo.value);
        if(!resultado){
            document.getElementById("cTipo").style.color="red";
            document.getElementById("cTipo").focus();//no le deja salir del input hasta que no lo escribe bien
        }else{
            document.getElementById("cTipo").style.color="black";
        }
    }
    if(cajaChequeo=="cLatitud"){
        var patron=/^[0-9.]*$/;
        var resultado=patron.test(cLatitud.value);
        if(!resultado){
            document.getElementById("cLatitud").style.color="red";
            document.getElementById("cLatitud").focus();//no le deja salir del input hasta que no lo escribe bien
        }else{
            document.getElementById("cLatitud").style.color="black";
        }
    }
    if(cajaChequeo=="cLongitud"){
        var patron=/^[-][0-9.]*$/;
        var resultado=patron.test(cLongitud.value);
        if(!resultado){
            document.getElementById("cLongitud").style.color="red";
            document.getElementById("cLongitud").focus();//no le deja salir del input hasta que no lo escribe bien
        }else{
            document.getElementById("cLongitud").style.color="black";
        }
    }
    if(cajaChequeo=="cFecahac"){
        /* Tiene que comenzar por - */
        var patron =/^[0-9]{2}[-][0-9]{2}[-][0-9]{4}$/
        
        var resultado =patron.test(cFecahac.value);
        console.log("Resltado Chequeo:"+resultado )
        if(!resultado){
           document.getElementById("cFecahac").style.color="red"
           document.getElementById("cFecahac").focus()
        }  else{
            document.getElementById("cFecahac").style.color="black"
        } 
    }
    if(cajaChequeo=="cFecaham"){
        /* Tiene que comenzar por - */
        var patron =/^[0-9]{2}[-][0-9]{2}[-][0-9]{4}$/
        
        var resultado =patron.test(cFecaham.value);
        console.log("Resltado Chequeo:"+resultado )
        if(!resultado){
           document.getElementById("cFecaham").style.color="red"
           document.getElementById("cFecaham").focus()
        }  else{document.getElementById("cFecaham").style.color="black"} 
        
        
        }
        

}