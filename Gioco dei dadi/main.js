let dadi = [1, 2, 3, 4, 5, 6];
let content = document.getElementById("content");
console.log(dadi);
let random = Math.floor(Math.random() * 6 + 1);
console.log(random)
let random2 = Math.floor(Math.random() * 6 + 1);
if (random > dadi[random2]){
    console.log("hai vinto!")
    content.innerHTML += `hai vinto!`
}
else if(random == dadi[random2]){
    console.log("Pareggio! ripetere il sorteggio")
    content.innerHTML += `paerggio! ripetere il sorteggio`
}
else{
    console.log("hai perso")
    content.innerHTML += `hai perso`
}