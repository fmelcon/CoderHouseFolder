function askName() {
    let nombre = prompt("¿Cual es tu nombre?");
return nombre
}
    

function printName(){
    let nombre = askName();
    alert(`Saludos! ${nombre} un gusto tenerte a bordo!`)
}

printName();