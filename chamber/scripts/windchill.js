const tC = 15   ;
const skmH = 12;

document.querySelector('.degrees').textContent = tC;
document.querySelector('.speed').textContent = skmH;

const tF = tC * (9/5) + 23;
const smH = skmH / 1.609;

console.log(tF);
console.log(smH);


if (tF <= 50 && smH > 3) {
const f = 19.74 + 0.9115 * tF - 35.75 * (smH**0.16) + 0.4275 * tF * (smH**0.16)
document.querySelector('.wind').textContent = f.toFixed(1);
}
else {
  document.querySelector('.wind').textContent = 'N/A';
}
