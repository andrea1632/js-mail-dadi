let numeriDesiderati = prompt("quanti numeri vuoi?");
if (isNaN(numeriDesiderati)){
    alert("INSERISCI UN NUMERO")
}
numeriDesiderati = parseInt(numeriDesiderati);
let numeriTotali = [];
let content = document.getElementById("content");

for (let i = 0; i <= numeriDesiderati -1; i++){
    let numeroRandom = Math.floor(Math.random() * 99 + 1);
    numeriTotali.push(numeroRandom);
    console.log(numeriTotali);
    content.innerHTML += `  ${numeriTotali[i]}`
    console.log(numeroRandom)
}