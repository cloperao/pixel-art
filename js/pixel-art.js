var nombreColores = ['White', 'LightYellow',
    'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
    'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
    'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
    'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
    'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
    'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
    'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
    'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
    'LightGreen', 'PaleGreen', 'PaleTurquoise',
    'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
    'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
    'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
    'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
    'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
    'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
    'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
    'BlueViolet', 'DarkViolet', 'DarkOrchid',
    'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
    'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

//Variable que guarda el estado del mouse
var mouseApretado = false;

//Cargar ambas grillas
generarGrillaDePixeles();
generarPaletaDeColores();



// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change',
    (function() {
        // Se guarda el color de la rueda en colorActual
        colorActual = colorPersonalizado.value;
        // Completar para que cambie el indicador-de-color al colorActual
        colorPersonalizado.style.backgroundColor = colorActual;
        indicadorDeColor.style.backgroundColor = colorActual;

    })
);

//Variables de Paleta y de Grilla de pixeles
var paleta = document.getElementById("paleta");
var grillaPixeles = document.getElementById("grilla-pixeles");
var indicadorDeColor = document.getElementById("indicador-de-color");

//Funcion para generar la paleta de colores
function generarPaletaDeColores() {
    var elemento = document.createElement("div");
    for (i = 0; i < nombreColores.length; i++) {
        var elemento = document.createElement("div");
        elemento.style.backgroundColor = nombreColores[i];
        elemento.className = "color-paleta"
        elemento.addEventListener("click", indicarColor);
        document.getElementById("paleta").appendChild(elemento);
    }
}

//Funcion para generar la grilla de pixeles
function generarGrillaDePixeles() {
    var elemento = document.createElement("div");
    for (i = 0; i < 1750; i++) {
        var elemento = document.createElement("div");
        elemento.style.border = "1px solid black";
        elemento.addEventListener("mousedown", mousePresionado);
        elemento.addEventListener("mouseup", mouseNoPresionado);
        elemento.addEventListener("mouseover", pintar);
        document.getElementById("grilla-pixeles").appendChild(elemento);
    }
}

//Agregar indicador de color
function indicarColor(event) {
    var elemento = event.currentTarget;
    indicadorDeColor.style.backgroundColor = elemento.style.backgroundColor;
}


//Funcion al apretar el mouse
function mousePresionado() {
    return mouseApretado = true;
}

//Funcion al desparetar el mouse
function mouseNoPresionado() {
    return mouseApretado = false;
}


//Pintar
function pintar(event) {
    if (mouseApretado == true) {
        var elemento = event.currentTarget;
        elemento.style.backgroundColor = indicadorDeColor.style.backgroundColor;
    } else {
        return;
    }
}

//Boton Guardar
document.getElementById("guardar").addEventListener("click", guardarPixelArt);

// Borrar
document.getElementById("borrar").addEventListener("click", function() {
    var divs = document.querySelectorAll("#grilla-pixeles div");
    for (i = 0; i < divs.length; i++) {
        $(divs[i]).animate({
            backgroundColor: "#ffffff"
        }, 1000);
    }
});


//Cargar Super Heroe
var divs = document.querySelectorAll(".imgs img");
for (i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", function() {
        var mostrar = event.currentTarget.getAttribute("id");
        switch (mostrar) {
            case "batman":
                cargarSuperheroe(batman);
                break;
            case "wonder":
                cargarSuperheroe(wonder);
                break;
            case "flash":
                cargarSuperheroe(flash);
                break;
            case "invisible":
                cargarSuperheroe(invisible);
                break;
        }
    });
}