function redirectToDashboard() {
    // Effettua il reindirizzamento alla pagina di destinazione
    window.location.href = "LoginRFI.html";
}

document.getElementById('loginreturn').addEventListener("click", function(e) {
    e.preventDefault();
    redirectToDashboard();
 });

 function redirectToUtenti() {
    window.location.href = "Aggiungimatricola.html";
}

document.getElementById('utentireturn').addEventListener("click", function(e) {
    e.preventDefault();
    redirectToUtenti();
 });
 
 function redirectToTraining() {
    window.location.href = "Trainingsceltascenario.html";
}

document.getElementById('trainingreturn').addEventListener("click", function(e) {
    e.preventDefault();
    redirectToTraining();
 });

 function redirectToes1() {
    window.location.href = "Examstartsession.html";
}

document.getElementById('es1return').addEventListener("click", function(e) {
    e.preventDefault();
    redirectToes1();
 });
 