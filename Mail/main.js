let mailUtente;
let mailTotali = ["andrea@gmail.it", "luca@gmail.it", "alessandro@gmail.it", "jonny@gmail.it"];
mailUtente = prompt("inserisci la tua mail");
console.log(mailUtente);
let content = document.getElementById("email");
for (var i = 0; i <= mailTotali.length; i++) {
    if (mailUtente == mailTotali[i]){
        console.log("la tua mail è già registrata")
        content.innerHTML += `<h1>la tua mail è già registrata</h1>`
    }
    else{
        console.log("vai a registrarti")
        content.innerHTML += `<h1>vai a registrarti</h1>`
    }
}