function redirectToDashboard() {
    // Effettua il reindirizzamento alla pagina di destinazione
    window.location.href = "index.html";
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

 function redirectToExam() {
    window.location.href = "Examsceltascenario.html";
}

document.getElementById('examreturn').addEventListener("click", function(e) {
    e.preventDefault();
    redirectToExam();
 });

 function redirectToVerbale() {
    window.location.href = "provaverbale.html";
}

document.getElementById('verbalereturn').addEventListener("click", function(e) {
    e.preventDefault();
    redirectToTraining();
 });