function setup $( document ).ready(function() {
    console.log( "ready!" );
});


function sumar (a,b) {
 document.getElementById('resultado').value = ""+(Number(a)+Number(b))
 var total = total + input(a);
}
function restar (a,b){
 document.getElementById('resultado').value = ""+(Number(a)-Number(b));
}
function multiplicar (a,b){
 document.getElementById('resultado').value = ""+(Number(a)*Number(b));
}
function dividir (a,b){
 document.getElementById('resultado').value = ""+(Number(a)/Number(b));
}




function reset() {
       document.getElementById("a").value = "";
       document.getElementById("b").value = "";
       document.getElementById("resultado").value = "";

   }

/*
   function supersuma(){
var suma = a + b
retur

   }
*/

console.log(total);
