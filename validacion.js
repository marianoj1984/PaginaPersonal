//Haz tú validación en javascript acá
var validar = function(){
var nom = document.getElementById("nombre").value;
var email = document.getElementById("email").value;
var asunto = document.getElementById("asunto").value;
var mensaje = document.getElementById("mensaje").value;

if(nom==""){
    alert("El campo nombre no puede esta vacio");
    document.getElementById("nombre").focus();
}else{if(nom.length>50){
    alert("El ccampo nombre no puede superar los 50 caracteres");
    document.getElementById("nombre").focus();
        }else{if(email==""){
        alert("El campo email no puede esta vacio");
        document.getElementById("email").focus();
        }else{if(email.length>50){
            alert("El campo email no puede superar los 50 caracteres");
            document.getElementById("email").focus();
                }else{if(asunto==""){
                alert("El campo asunto no puede esta vacio");
                document.getElementById("asunto").focus();
                    }else{if(asunto.length>50){
                        document.getElementById("boton").disabled = false;

                        alert("El campo asunto no puede superar los 50 caracteres");
                        document.getElementById("asunto").focus();
                        }else{if(mensaje==""){
                                alert("El campo mensaje no puede esta vacio");
                                document.getElementById("mensaje").focus();
                                }else{if(mensaje.length<300){
                                            document.getElementById("boton").disabled = false;
                                            document.getElementById("nombre").value="";
                                            document.getElementById("email").value="";
                                            document.getElementById("asunto").value="";
                                            document.getElementById("mensaje").value="";
                                            document.getElementById("nombre").focus();
                                        }else{
                                        alert("El campo mensaje no puede superar los 50 caracteres");
                                        document.getElementById("mensaje").focus(); 
                                        }    
                                    }
                                }
                            }
                        }
                    }
                }
            }

   
    


}