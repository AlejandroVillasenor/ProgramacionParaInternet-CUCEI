function edadFcn(){
    let edad = document.getElementById("edad").value;
    edad = parseInt(edad);
    var resultado = "";
    if(edad < 18){
        resultado = "Eres menor de edad";
    }else if( edad >= 18 && edad <= 40){
        resultado = "Eres mayor de edad";
    }
    document.getElementById("resultado").innerHTML = resultado;
}

function imcFcn(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    peso = parseFloat(peso);
    altura = parseFloat(altura);
    let imc = peso / Math.pow(altura, 2);
    var simc = "";
    switch(true){
        case imc < 16:
            simc = "Tu IMC indica que tienes desnutrición severa";
            document.querySelector(".imcResult").style.cssText = "background-color: red; color: white;";
            break;
        case imc >= 16 && imc < 18.5:
            simc = "Tu IMC indica que tienes desnutrición moderada";
            document.querySelector(".imcResult").style.cssText = "background-color: orange; color: black;";
            break;
        case imc >= 18.5 && imc < 22:
            simc = "Tu IMC indica que tienes peso bajo";
            document.querySelector(".imcResult").style.cssText = "background-color: #FFC700; color: black;";
            break;
        case imc >= 22 && imc < 25:
            simc = "Tu IMC indica que tienes peso normal";
            document.querySelector(".imcResult").style.cssText = "background-color: green; color: white;"
            break;
        case imc >= 25 && imc < 30:
            simc = "Tu IMC indica que tienes sobrepeso";
            document.querySelector(".imcResult").style.cssText = "background-color: #FFC700; color: black;";
            break;
        case imc >= 30 && imc < 35:
            simc = "Tu IMC indica que tienes obesidad tipo I";
            document.querySelector(".imcResult").style.cssText = "background-color: orange; color: black;";
            break;
        case imc >= 35 && imc < 40:
            simc = "Tu IMC indica que tienes obesidad tipo II";
            document.querySelector(".imcResult").style.cssText = "background-color: #A51B0B; color: white;";
            break;
        case imc >= 40 && imc < 50:
            simc = "Tu IMC indica que tienes obesidad tipo III";
            document.querySelector(".imcResult").style.cssText = "background-color: #D11507; color: white;";
            break;
        case imc >= 50:
            simc = "Tu IMC indica que tienes obesidad tipo IV";
            document.querySelector(".imcResult").style.cssText = "background-color: #FF0000; color: white;";
            break;
    }
    document.getElementById("resultado2").innerHTML = simc;
}