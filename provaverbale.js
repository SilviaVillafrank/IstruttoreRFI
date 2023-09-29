// Funzione per aprire la finestra di dialogo per l'aggiunta dell'utente
function openAddUserDialog() {
    const dialog = document.getElementById("addUserDialog");
    dialog.showModal();
    document.getElementById("matricola").value="";
    document.getElementById("nome").value="";
    document.getElementById("punteggio").value="";
    document.getElementById("matricola-error").textContent = ""; // Rimuovi eventuali messaggi di errore esistenti
    document.getElementById("nome-error").textContent = ""; // Rimuovi eventuali messaggi di errore esistenti
    document.getElementById("punteggio-error").textContent = ""; // Rimuovi eventuali messaggi di errore esistenti
}


// Funzione per chiudere la finestra di dialogo per l'aggiunta dell'utente
function closeAddUserDialog() {
    const dialog = document.getElementById("addUserDialog");
    dialog.close();
}

// Funzione per aggiungere l'utente alla tabella
function addUser() {
    let matricola = document.getElementById("matricola").value;
    let nome = document.getElementById("nome").value;
    let punteggio = document.getElementById("punteggio").value;

    // Validazione della matricola (deve contenere solo numeri)
    const matricolaPattern = /^\d+$/;
    if (!matricolaPattern.test(matricola)) {
        document.getElementById("matricola-error").textContent = "La matricola deve contenere solo numeri.";
        //return; // Esce dalla funzione se la validazione fallisce
    }

    // Validazione del nome (deve contenere solo lettere)
    const nomePattern = /^[A-Za-z]+$/;
    if (!nomePattern.test(nome)) {
        document.getElementById("nome-error").textContent = "Il nome deve contenere solo lettere.";
        //return; // Esce dalla funzione se la validazione fallisce
    }

     // Se ci sono errori, esci dalla funzione
   if (!matricolaPattern.test(matricola) || !nomePattern.test(nome)) {
       return;
   }


    // Se la validazione passa, procedi ad aggiungere l'utente alla tabella
    let tableBody = document.querySelector("tbody");
    let newRow = document.createElement("tr");
    /*if (matricola && nome) {
        let tableBody = document.querySelector("tbody");
        let newRow = document.createElement("tr");*/

        newRow.innerHTML = `
            <td>${matricola}</td>
            <td>${nome}</td>
            <td>${punteggio}</td>
            <td><button class="remove-btn" onclick="removeUser(this)"><i class="fa-solid fa-user-minus fa-xl"></i></button></td>
        `;

        tableBody.appendChild(newRow);
        closeAddUserDialog(); // Chiudi la finestra di dialogo dopo l'aggiunta dell'utente
    }

function removeUser(buttonElement) {
    let row = buttonElement.closest("tr");
    row.remove();
}

function redirectToDashboard() {
    // Effettua il reindirizzamento alla pagina di destinazione
    window.location.href = "LoginRFI.html";
}

document.getElementById('loginreturn').addEventListener("click", function(e) {
    e.preventDefault();
    redirectToDashboard();
 });

 function redirectToHome() {
    window.location.href = "Aggiungimatricola.html";
}

document.getElementById('homereturn').addEventListener("click", function(e) {
    e.preventDefault();
    redirectToUtenti();
 });
