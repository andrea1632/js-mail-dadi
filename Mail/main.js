let mailUtente;
let mailTotali = ["andrea@gmail.it", "luca@gmail.it", "alessandro@gmail.it", "jonny@gmail.it"];
mailUtente = prompt("inserisci la tua mail");
console.log(mailUtente);
let content = document.getElementById("email");
let mailTrovata = false;
for (var i = 0; i <= mailTotali.length; i++) {
    if (mailUtente == mailTotali[i]){
        mailTrovata = true;        
    }
}
if (mailTrovata == true){
    content.innerHTML += `<h1>la tua mail è già registrata</h1>`
} else{
    content.innerHTML += `<h1>vai a registrarti</h1>`
}