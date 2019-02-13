console.log("Script ready");
// assign variables

const harmonySelection = document.getElementById("color-harmony");

// console.log(harmonySelection);

let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");
let box5 = document.querySelector(".box5");

let color = document.getElementById("head");

const colorPicker = document.querySelector("#colorpicker");

colorPicker.addEventListener("input", colorPick);

function colorPick(event) {
  console.log("color pick");

  const hexColor = event.target.value;
  console.log(hexColor);
  //   const rgbColor = convertHexToRgb(hexColor);
  //const hslColor = convertRgbToHsl(rgbColor);
  dividingInTwo(hexColor);
  setBaseColor(hexColor);
}
function setBaseColor(base) {
  console.log("set base color");
  document.getElementById("box1").style.backgroundColor = base;
}

function dividingInTwo(base) {
  const redFromHex = base.substring(1, 3);
  console.log(redFromHex);
  const greenFromHex = base.substring(3, 5);
  console.log(greenFromHex);
  const blueFromHex = base.substring(5, 8);
  console.log(blueFromHex);

  convertHexToRGB(redFromHex, greenFromHex, blueFromHex);
}

function convertHexToRGB(redFromHex, greenFromHex, blueFromHex) {
  const red = parseInt(redFromHex, 16);
  const green = parseInt(greenFromHex, 16);
  const blue = parseInt(blueFromHex, 16);

  let rgb = `rgb(${red},${green},${blue})`;
  console.log(rgb);
  changeBg(rgb);
  convertRGBtoHSL(red, green, blue);
}

function changeBg(color) {
  box1.style.backgroundColor = color;
}

function convertRGBtoHSL(red, green, blue) {
  let r = red;
  let g = green;
  let b = blue;

  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
  calculateColors(h, s, l);
}

function analogousSchemeColor(h, s, l) {
  console.log("analogSchemeColor");
  let hue = h;

  let h20 = hue + 10;
  let h30 = hue + 20;
  let h40 = hue + 30;
  let h50 = hue + 40;

  box2.style.backgroundColor = `hsl(${h20},${s}%,${l}%`;
  box3.style.backgroundColor = `hsl(${h30},${s}%,${l}%`;
  box4.style.backgroundColor = `hsl(${h40},${s}%,${l}%`;
  box5.style.backgroundColor = `hsl(${h50},${s}%,${l}%`;
}

function monochromatioSchemeColor(h, s, l) {
  let light = l;

  let l20 = light + 10;
  let l30 = light + 20;
  let l40 = light + 30;
  let l50 = light + 40;

  box2.style.backgroundColor = `hsl(${h},${s}%,${l20}%`;
  box3.style.backgroundColor = `hsl(${h},${s}%,${l30}%`;
  box4.style.backgroundColor = `hsl(${h},${s}%,${l40}%`;
  box5.style.backgroundColor = `hsl(${h},${s}%,${l50}%`;
}

function calculateColors(h, s, l) {
  let harmonyPicker = String(
    harmonySelection.options[harmonySelection.selectedIndex].value
  );
  console.log(harmonyPicker);
  if (harmonyPicker === "analogous") {
    analogousSchemeColor(h, s, l);
  } else if (harmonyPicker === "monochromatic") {
    monochromatioSchemeColor(h, s, l);
  } else if (harmonyPicker === "triad") {
    triadSchemeColor();
  } else if (harmonyPicker === "complementary") {
    compleementarySchemeColor();
  } else if (harmonyPicker === "compound") {
    compoundSchemeColor();
  } else if (harmonyPicker === "shades") {
    shadesSchemeColor();
  }
}

function triadSchemeColor() {
  console.log("run triadSchemeColor");
}

function compleementarySchemeColor() {
  console.log("run compleementarySchemeColor");
}

function compoundSchemeColor() {
  console.log("run compoundSchemeColor");
}

function shadesSchemeColor() {
  console.log("run shadesSchemeColor");
}

// function convertRGBtoHSL() {
//   r /= 255;
//   g /= 255;
//   b /= 255;

//   let h, s, l;

//   const min = Math.min(r, g, b);
//   const max = Math.max(r, g, b);

//   if (max === min) {
//     h = 0;
//   } else if (max === r) {
//     h = 60 * (0 + (g - b) / (max - min));
//   } else if (max === g) {
//     h = 60 * (2 + (b - r) / (max - min));
//   } else if (max === b) {
//     h = 60 * (4 + (r - g) / (max - min));
//   }

//   if (h < 0) {
//     h = h + 360;
//   }

//   l = (min + max) / 2;

//   if (max === 0 || min === 1) {
//     s = 0;
//   } else {
//     s = (max - l) / Math.min(l, 1 - l);
//   }
//   // multiply s and l by 100 to get the value in percent, rather than [0,1]
//   s *= 100;
//   l *= 100;

//   console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
// }

// function setBaseColor() {}

// function calculateColors() {}

// function colorPicker(event) {
//   const hexcolor = event.target.value;

//   return hexcolor;
//   const rgbcolor = convertHexToRGB(hexcolor);
//   const hslcolor = convertRGBToHSL(rgbcolor);

//   setBaseColor(hslcolor);
// }

// function setColor(id, color) {}

// colorPicker(color);
