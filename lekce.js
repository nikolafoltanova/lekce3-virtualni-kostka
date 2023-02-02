// tady je místo pro náš program

let nadpis = document.querySelector('h1');
let vstupUzivatele = prompt('Nový nadpis je?')
console.log(vstupUzivatele)
nadpis.innerHTML = vstupUzivatele


// NaN = not a number
let vysledek = document.querySelector('.vysledekZavodu')
let start = 15;
let delka = Number(prompt('Zadej délku závodu:'))
let konec = (start + delka) % 24
vysledek.innerHTML = konec