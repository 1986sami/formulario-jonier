document.querySelector("#btnRegistrar").addEventListener("click",validar)/*relacionar unboton*/
function validar(){
     let nombre = document.getElementById("name").value
     let apellido = document.getElementById("lastname").value
     let cedula = document.getElementById("idcard").value
     let correo= document.getElementById("email").value
     let contraseña= document.getElementById("password").value
     alert(nombre + "" + apellido + "" + cedula + "" + correo + "" + contraseña) 
   
}