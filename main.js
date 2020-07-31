// Schreibe eine kleine App die die Hintergrundfarbe ändert.

var count = 0;
let red = document.getElementById("rot");
let green = document.getElementById("grun");
let blue = document.getElementById("blau");

function andernHintergrund(rgb) {
    count++;
    console.log("works!")
    console.log(rgb)
    document.querySelector("body").style.backgroundColor = rgb
    document.getElementById("demo").innerHTML = `Wir haben die Farbe ${count} geändert!`
}

function andernRegler() {
    let rgb = `rgb(${red.value}, ${green.value}, ${blue.value})`;
    document.querySelector("body").style.backgroundColor = rgb
    document.getElementById("demo").innerHTML = `Neue Farbe: ${rgb} = #${(red.value*1).toString(16)}${(green.value*1).toString(16)}${(red.value*1).toString(16)}`
    console.log(rgb)
    return rgb
}



// or use function for rgb to hex
// let rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
//     let hex = x.toString(16)
//     return hex.length === 1 ? '0' + hex : hex
// }).join('')
  
