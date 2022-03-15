let numeriDesiderati = prompt("quanti numeri vuoi?");
if (isNaN(numeriDesiderati)){
    alert("INSERISCI UN NUMERO")
}
numeriDesiderati = parseInt(numeriDesiderati);
let numeriTotali = [];
let content = document.getElementById("content");
let numeriSottratti = prompt("quanti numeri vuoi togliere?");
let contentSottrati = document.getElementById("numeriSottratti")

for (let i = 0; i <= numeriDesiderati -1; i++){
    let numeroRandom = Math.floor(Math.random() * 99 + 1);
    numeriTotali.push(numeroRandom);
    console.log(numeriTotali);
    content.innerHTML += `  ${numeriTotali[i]}`;
}
for (let i = 1; i <= numeriSottratti; i++){
    numeriTotali.pop()
}
console.log(numeriTotali)
contentSottrati.innerHTML += `${numeriTotali}`