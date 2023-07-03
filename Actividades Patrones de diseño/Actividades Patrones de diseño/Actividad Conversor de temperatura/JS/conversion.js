function conversionFcn(){
    let grados = document.getElementById("grados").value;
    grados = parseFloat(grados);
    let opcion = document.getElementById("selectBox").value;

    if(isNaN(grados)){
        alert("Por favor, rellene el campo de grados");
        return;
    }

    switch(true){
        case opcion == 0:
            alert("Por favor, seleccione una opción");
        break;
        case opcion == 1:
            /* Celsius a Fahrenheit */
            resultado = (grados * 1.8) + 32;
            resultado = resultado.toFixed(3);/*  This method rounds a number to a specified number of digits. */
            document.getElementById("resultado").innerHTML = resultado + " °F";
            document.getElementById("operacion").innerHTML = "(" + grados + "°C x 1.8) + 32" + " = " + resultado + "°F";
            break;
        case opcion == 2:
            /* Celsius a Kelvin */
            resultado = grados + 273.15;
            resultado = resultado.toFixed(3);
            document.getElementById("resultado").innerHTML = resultado + " °K";
            document.getElementById("operacion").innerHTML = grados + "°C + 273.15" + " = " + resultado+ "°K";
            break;
        case opcion == 3:
            /* Fahrenheit a Celsius */
            resultado = (grados - 32) / 1.8;
            resultado = resultado.toFixed(3);
            document.getElementById("resultado").innerHTML = resultado + " °C";
            document.getElementById("operacion").innerHTML = "(" + grados + "°F - 32) / 1.8" + " = " + resultado+ "°C";
            break;
        case opcion == 4:
            /* Fahrenheit a Kelvin */
            resultado = (grados + 459.67) / 1.8;
            resultado = resultado.toFixed(3);
            document.getElementById("resultado").innerHTML = resultado + " °K";
            document.getElementById("operacion").innerHTML = "(" + grados + "°F + 459.67) / 1.8" + " = " + resultado + "°K";
            break;
        case opcion == 5:
            /* Kelvin a Celsius */
            resultado = grados - 273.15;
            resultado = resultado.toFixed(3);
            document.getElementById("resultado").innerHTML = resultado + " °C";
            document.getElementById("operacion").innerHTML = grados + "°K" + " - 273.15" + " = " + resultado + "°C";
            break;
        case opcion == 6:
            /* Kelvin a Fahrenheit */
            resultado = (grados * 1.8) - 459.67;
            resultado = resultado.toFixed(3);
            document.getElementById("resultado").innerHTML = resultado + " °F";
            document.getElementById("operacion").innerHTML = "(" + grados + " °K  x 1.8)- 459.67" + " = " + resultado + " °F";
            break;
    }
}
