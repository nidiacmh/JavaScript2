/**
*@author Nidia
*/
window.onload = iniciaDatos;

/**
*Funcion que se manda a llamar al cargar la
*pagina de html
*/

function iniciaDatos(){
  document.getElementById("link").onclick = validaSalir;
  document.getElementById("linkSearch").onclick = busqueda;
}

/**
*Funcion que valida si el usuario quiere Salir
*/

function validaSalir(){
  if (confirm("Desea salir del sitio")) {
    alert("Nos vamos a google");
    return true; //regresamos verdadero para salir
  }
  else {
    alert("Nos quedamos en el sitio");
    return false;//regresamos falso para quedarnos
  }
}

/**
*Funcion que pide una cadena para buscar en google
*/

function busqueda(){
  //Con la funcion prompt capturamos informacion del usuario
  var respuesta = prompt("Escribe la cadena a buscar:", "");
  //si hubo una respuesta concatenamos la cadena Buscar
  //al link de google
  if (respuesta) {
    alert("Tu respuesta fue: " + respuesta);
    //el operador this nos sirve para referenciar
    //al elemento que provoco el evento, en este caso
    //el elemento con identificador "linksearch"
    //y concatenamos la respuesta como un parametro
    //de una peticion get
    var nuevoLink = this + "search?q=" + respuesta;
    alert("Nuevo link:" + nuevoLink);
    //redireccionamos el link
    window.location = nuevoLink;
    //regresamos false, si no nos lleva al link originalmente
    //registrado en el elmento "linkSearch"
    return false;
  }
  else {
    alert("No proporcionaste ninguna cadena de busqueda!!!");
    return false;
  }
}
