"use strict"


let estadosdeanimo = ["determinado", "compasivo", "solidario", "amable", "bondadoso", "pleno", "suertudo" ];


var elemento = parseInt(prompt("Escoge un numero del 0 al 6", 0 ));

if (elemento >= estadosdeanimo.length) {
  alert("introduce el numero correcto")

}else {
  alert("Tu estado de animo el dia de hoy es: "+estadosdeanimo[elemento]);
}


document.write("<h5>otros estados de animo</h5>");
document.write("<ul>");

for (var i = 0; i < estadosdeanimo.length; i++) {
  document.write("<li>"+estadosdeanimo[i]+"</li>");
}

document.write("</ul>");
