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

 function redirectToExam() {
    window.location.href = "Examsceltascenario.html";
}

document.getElementById('examreturn').addEventListener("click", function(e) {
    e.preventDefault();
    redirectToExam();
 });
 
 function redirectToes1() {
    window.location.href = "Trainingstartsession.html";
}

document.getElementById('es1return').addEventListener("click", function(e) {
    e.preventDefault();
    redirectToes1();
 });
