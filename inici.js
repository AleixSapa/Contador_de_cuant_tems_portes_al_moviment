var data = new Date(); // Obtenim la data actual

var dia = data.getDate(); // Obtenim el dia
var resta_data= mes = data.getMonth() + 1; // Obtenim el mes (les dates comencen a comptar des de 0, per això sumem 1)
var any = data.getFullYear(); // Obtenim l'any
var resta_data=data-20-20-2020
console.log(resta_data)
coneixe=window.godDateValue

console.log(window.godDateValue); // Accedeix al valor de godDate


// Funció per canviar el text
function canviarText() {
    // Canviar el text del títol
    document.getElementById("titol").innerHTML = "El text ha canviat!";
    
    // Canviar el text del paràgraf
    document.getElementById("parraf").innerHTML = "Ara aquest paràgraf també ha canviat!";
    }