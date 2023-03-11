function temaFcn() { /* Funcion para determinar atributos de los temas */
    let opcion = document.getElementById("selectBox").value;
    /* Variables globales que se mandaran a la funcion que cambia el tema */
    let background = "";//Color de fondo de la pagina
    let title = "";//Color del titulo h1
    let backtitle = "";//Color de fondo del titulo h1(encabezado)
    let headcolor = "";//Color de fondo de los caudros de la cabecera de la tabla
    let headfont = "";//Color de la fuente de los caudros de la cabecera de la tabla
    let fontfamily = "";//Tipo de fuente de la tabla
    let fontcolor = "";//Color de la fuente de la tabla
    let backrow1 = "";//Color de fondo de las fila 1 y 3 de la tabla
    let backrow2 = "";//Color de fondo de las fila 2 y 4 de la tabla
    let icon1col = "";//Color de los iconos de fila 1 y 3
    let icon2col = "";//Color de los iconos de fila 2 y 4
    switch(true){
        case(opcion == 0):
            /* Para volver al estilo por default mandamos variables vacias para resetear*/
            background = "";
            title = "";
            backtitle = "";
            headcolor = "";
            headfont = "";
            fontfamily = "";
            fontcolor = "";
            backrow1 = "";
            backrow2 = "";
            icon1col = "";
            icon2col = "";
            changeTheme(background, title, backtitle, headcolor, headfont, fontfamily, fontcolor, backrow1, backrow2, icon1col, icon2col);
            break;
        case(opcion == 1):/* Shades of purple */
            background = "#21094E";
            title = "white";
            backtitle = "#511281";
            headcolor = "#511281";
            headfont = "white";
            fontfamily = "'Golos Text'";
            fontcolor = "#CEF2BD";
            backrow1 = "#514861";
            backrow2 = "#645680";
            icon1col = "#00f636";
            icon2col = "#fad700";
            changeTheme(background, title, backtitle, headcolor, headfont, fontfamily, fontcolor, backrow1, backrow2, icon1col, icon2col);
            break;
        case(opcion == 2):/* Tokyo Night */
            background = "#021735";
            title = "#F037A5";
            backtitle = "#1E3163";
            headcolor = "#F037A5";
            headfont = "white";
            fontfamily = "'Arvo'";
            fontcolor = "white";
            backrow1 = "#1E3163";
            backrow2 = "#2D46B9";
            icon1col = "#00f636";
            icon2col = "#ff8e14";
            changeTheme(background, title, backtitle, headcolor, headfont, fontfamily, fontcolor, backrow1, backrow2, icon1col, icon2col);
            break;
        case(opcion == 3):/* PowerShell */
            background = "#303481";
            title = "#303481";
            backtitle = "#D6E6F2";
            headcolor = "#FFF200";
            headfont = "#303481";
            fontfamily = "'Roboto'";
            fontcolor = "black";
            backrow1 = "#D6E6F2";
            backrow2 = "#F5F5F5";
            icon1col = "#303481";
            icon2col = "#F61700";
            changeTheme(background, title, backtitle, headcolor, headfont, fontfamily, fontcolor, backrow1, backrow2, icon1col, icon2col);
            break;
        case(opcion == 4):/* Cobalt2 */
            background = "#2B4865";
            title = "#8FE3CF";
            backtitle = "#002B5B";
            headcolor = "#002B5B";
            headfont = "yellow";
            fontfamily = "'Montserrat'";
            fontcolor = "black";
            backrow1 = "#53C7F1";
            backrow2 = "#8FE3CF";
            icon1col = "#D953F1";
            icon2col = "#FF0080";
            changeTheme(background, title, backtitle, headcolor, headfont, fontfamily, fontcolor, backrow1, backrow2, icon1col, icon2col);
            break;
        case(opcion == 5):/* Gruvbox Theme */
            background = "#2C061F";
            title = "#E1D89F";
            backtitle = "#374045";
            headcolor = "#ECD768";
            headfont = "#2C061F";
            fontfamily = "'Kanit'";
            fontcolor = "#E1D89F";
            backrow1 = "#3C3836";
            backrow2 = "#504945";
            icon1col = "#FB4934";
            icon2col = "#B8BB26";
            changeTheme(background, title, backtitle, headcolor, headfont, fontfamily, fontcolor, backrow1, backrow2, icon1col, icon2col); 
            break;
        }

}
function fontSizeFcn() { /* Funcion para cambiar el fontsize */
    const words = document.querySelectorAll("table");
    const words2 = document.querySelectorAll("p");
    for (let i = 0;i < words.length; i++) {
        /* Validamos que el valor sea mayor a 0 */
        if (document.getElementById("fontsize").value > 0){
            words[i].style.fontSize = document.getElementById("fontsize").value + "px";
            for (let j = 0;j < words2.length; j++) {
                words2[j].style.fontSize = document.getElementById("fontsize").value + "px";
            }
        }else{
            alert("El tamaño de la fuente debe ser mayor a 0");
        }
    }
}
/* Funcion para cambiar el tema */
function changeTheme(background, title, backtitle, headcolor, headfont, fontfamily,fontcolor, backrow1, backrow2, icon1col, icon2col){
    /* Body */
    document.body.style.backgroundColor = background;
    /* Title*/
    document.getElementById("titulo").style.color = title;
    document.getElementsByClassName("title")[0].style.backgroundColor = backtitle;
    /* Table */
    const headtab = document.querySelectorAll("table .headtab");
    for (let i = 0;i < headtab.length; i++) {
        headtab[i].style.cssText = "background-color: " + headcolor + "; color: " + headfont + ";";
    } 
    const encabezados = document.querySelectorAll("table");
    for (let i = 0;i < encabezados.length; i++) {
        encabezados[i].style.cssText = "font-family: " + fontfamily + "; color: " + fontcolor + ";";
    }
    const row1 = document.querySelectorAll("table .row1");
    for (let i = 0;i < row1.length; i++) {
        row1[i].style.cssText = "background-color: " + backrow1 + ";";
    }
    const row2 = document.querySelectorAll("table .row2");
    for (let i = 0;i < row2.length; i++) {
        row2[i].style.cssText = "background-color: " + backrow2 + ";";
    }
    /* Icons */
    const icon1 = document.querySelectorAll("table .icon1");
    for (let i = 0;i < icon1.length; i++) {
        icon1[i].style.cssText = "stroke: " + icon1col + ";";
    }
    const icon2 = document.querySelectorAll("table .icon2");
    for (let i = 0;i < icon2.length; i++) {
        icon2[i].style.cssText = "stroke: " + icon2col + ";";
    }
}





