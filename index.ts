import Color from "colorjs.io";

const container = document.createElement("div");
container.classList.add("container");

const hue = 360 * Math.random();
const shift = 90 * Math.random();
const swap = false;
console.log(hue, shift, swap);

const limit = 7;
const colours: Color[] = new Array(limit + 1).fill(0).map((_, i) => {
  // const l = (100 * i) / limit;
  // const l = 100 * i ** exp / limit ** exp;
  // const l = 100 * Math.sin(i/limit*Math.PI);
  // const l = 100 * Math.sqrt(i) / Math.sqrt(limit);
  const l = (100 * Math.pow(i, Math.PI / 2)) / Math.pow(limit, Math.PI / 2);
  const c = 100;
  const h = hue + shift * Math.cos((i / 2 / limit) * Math.PI);
  return new Color("hsl", [i > limit / 2 && swap ? (h + 160) % 360 : h, c, l]);
});

colours.forEach((c) => {
  const colour = document.createElement("div");
  colour.classList.add("swatch");
  colour.style.backgroundColor = c.toString();
  container.append(colour);
});

document.body.append(container);
