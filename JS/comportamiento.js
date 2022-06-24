

 
 function imagenCorrecta(elemento){

   if( "excadrill"==elemento){
  document.getElementById("mensaje").innerHTML="Felicitaciones, has seleccionado la opción correcta"
  document.getElementById('imagen').src="../img/pcolor.jpg";
  document.getElementById("idTexto").style.color="yellow"
  document.getElementById("mensaje").style.display="block";

   }else{
    document.getElementById("mensaje").innerHTML="Pokémon incorrecto, la respuesta es: excadrill"
    document.getElementById('imagen').src="../img/pcolor.jpg";
    document.getElementById("idTexto").style.color="red"
    document.getElementById("mensaje").style.display="block";
   }
}
function reiniciar() {
    document.getElementById('imagen').src="../img/pnegro.jpg";
    document.getElementById("idTexto").style.color="black"
    document.getElementById("mensaje").style.display="none";
}
