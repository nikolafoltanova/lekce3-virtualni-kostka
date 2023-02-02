// tady je místo pro náš program

/*
// cviceni:vstup a vystup
let covid = document.querySelector('.covid')
let jmeno = prompt('Zadejte své jméno:')
let vek = Number(prompt('Zadejte věk:'))

covid.innerHTML = 'Jméno: ' + jmeno + '<p>' + 'Věk: ' + vek
*/

let sazba = Number(prompt('Jaká je Vaše hodinová sazba?'))
let hodina = Number(prompt('Kolik hodin pracujete?'))
let den = Number(prompt('Kolik dní pracujete v měsíci?'))

document.body.innerHTML += sazba*hodina*den
