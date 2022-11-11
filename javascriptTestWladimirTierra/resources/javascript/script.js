console.log("BIENVENIDO A LA EVALUACIÓN DE JAVASCRIPT!!!");
function printText(){
    let value = document.getElementById('text-input').value;
    if(value == ""){
        alert("Ups! Nada que mostrar")
    } else{
        alert(value);
        document.getElementById('text-input').value = "";          
    }

}

function updateHeader(){
    let styleH3 = document.getElementById("text-header3");
    styleH3.setAttribute("class", "header-new-style");
    document.getElementById("text-header3").innerHTML = "CABECERA ACTUALIZADA "

}


function mainFunction(){
    printText();

    updateHeader();
}