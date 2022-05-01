// grabbing the input to modify later
let inputEl = document.getElementById("num");

inputEl.value = 0; //initialising input to 0

// conversion ratios
let metreFeetRatio = 3.281
let feetMetreRatio = 0.305
let litresGallonsRatio = 0.264
let gallonsLitresRatio = 3.785
let kgsPoundsRatio = 2.205
let lbsKgsRatio = 0.455

// DOM manipulation to modify text later with JS
let lenEl = document.getElementById("len")
let volEl = document.getElementById("vol")
let mEl = document.getElementById("m")

lenEl.textContent = "0 metres = 0.000 feet | 0 feet = 0.000 metres"
volEl.textContent = "0 litres = 0.000 gallons | 0 gallons = 0.000 litres"
mEl.textContent = "0 kilograms = 0.000 pounds | 0 pounds = 0.000 kilograms"

// converting function called when number is inputted
function convert() {
    let num = inputEl.value
    let mToFt = (num * metreFeetRatio).toFixed(3)
    let ftToM = (num * feetMetreRatio).toFixed(3)

    document.getElementById("len").textContent = num + " metres = " + mToFt + " feet | " + num + " feet = " + ftToM + " metres"

    let lToGal = (num * litresGallonsRatio).toFixed(3)
    let galToL = (num * gallonsLitresRatio).toFixed(3)

    document.getElementById("vol").textContent = num + " litres = " + lToGal + " gallons | " + num + " gallons = " + galToL + " litres"

    let kgToLb = (num * kgsPoundsRatio).toFixed(3)
    let lbToKg = (num * lbsKgsRatio).toFixed(3)

    document.getElementById("m").textContent = num + " kilograms = " + kgToLb + " pounds | " + num + " pounds = " + lbToKg + " kilograms"
}