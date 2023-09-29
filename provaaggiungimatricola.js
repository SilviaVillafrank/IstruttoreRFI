// Funzione per aprire la finestra di dialogo per l'aggiunta dell'utente
function openAddUserDialog() {
    const dialog = document.getElementById("addUserDialog");
    dialog.showModal();
    document.getElementById("matricola").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("matricola-error").textContent = ""; // Rimuovi eventuali messaggi di errore esistenti
    document.getElementById("nome-error").textContent = ""; // Rimuovi eventuali messaggi di errore esistenti
}

// Funzione per chiudere la finestra di dialogo per l'aggiunta dell'utente
function closeAddUserDialog() {
    const dialog = document.getElementById("addUserDialog");
    dialog.close();
}

function saveUsersToStorage(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function loadUsersFromStorage() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users;
}

function addUser() {
    let matricola = document.getElementById("matricola").value;
    let nome = document.getElementById("nome").value;

    // Validazione della matricola (deve contenere solo numeri)
    const matricolaPattern = /^\d+$/;
    if (!matricolaPattern.test(matricola)) {
        document.getElementById("matricola-error").textContent = "La matricola deve contenere solo numeri.";
        return; // Esce dalla funzione se la validazione fallisce
    }

    // Validazione del nome (deve contenere solo lettere)
    const nomePattern = /^[A-Za-z]+$/;
    if (!nomePattern.test(nome)) {
        document.getElementById("nome-error").textContent = "Il nome deve contenere solo lettere.";
        return; // Esce dalla funzione se la validazione fallisce
    }

    // Aggiungi l'utente alla tabella
    let tableBody = document.querySelector("tbody");
    let newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${matricola}</td>
        <td>${nome}</td>
        <td><span class="status-dot"></span></td>
        <td><button class="remove-btn" onclick="removeUser(this)"><i class="fa-solid fa-user-minus fa-xl"></i></button></td>
    `;
    tableBody.appendChild(newRow);

    // Aggiungi l'utente ai dati memorizzati
    let users = loadUsersFromStorage();
    users.push({ matricola, nome });
    saveUsersToStorage(users);

    closeAddUserDialog(); // Chiudi la finestra di dialogo dopo l'aggiunta dell'utente
}

function removeUser(buttonElement) {
    let row = buttonElement.closest("tr");
    row.remove();

    // Dopo aver rimosso l'utente dalla tabella, aggiorna la lista e salvala in localStorage
    const users = loadUsersFromStorage();
    const matricola = row.querySelector("td:first-child").textContent; // Assume che la prima colonna contenga la matricola dell'utente da rimuovere
    const updatedUsers = users.filter(user => user.matricola !== matricola);
    saveUsersToStorage(updatedUsers);
}

function redirectToDashboard() {
    // Verifica se sei sulla pagina del login
    if (window.location.href.endsWith("index.html")) {
        // Verifica il valore del campo nascosto
        const resetTableFlag = document.getElementById("resetTableFlag");
        if (resetTableFlag && resetTableFlag.value === "true") {
            // Ripristina i dati degli utenti dalla memoria solo se il flag è impostato su "true"
            const users = loadUsersFromStorage();
            let tableBody = document.querySelector("tbody");
            tableBody.innerHTML = ""; // Cancella la tabella esistente
            for (const user of users) {
                let newRow = document.createElement("tr");
                newRow.innerHTML = `
                    <td>${user.matricola}</td>
                    <td>${user.nome}</td>
                    <td><span class="status-dot"></span></td>
                    <td><button class="remove-btn" onclick="removeUser(this)"><i class="fa-solid fa-user-minus fa-xl"></i></button></td>
                `;
                tableBody.appendChild(newRow);
            }
            // Imposta il campo nascosto su "false" dopo il reset
            resetTableFlag.value = "false";
        }
    }

    // Effettua il reindirizzamento alla pagina di destinazione
    window.location.href = "index.html";
}


// Carica gli utenti al caricamento della pagina
window.addEventListener('load', function () {
    const users = loadUsersFromStorage();
    let tableBody = document.querySelector("tbody");
    for (const user of users) {
        let newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${user.matricola}</td>
            <td>${user.nome}</td>
            <td><span class="status-dot"></span></td>
            <td><button class="remove-btn" onclick="removeUser(this)"><i class="fa-solid fa-user-minus fa-xl"></i></button></td>
        `;
        tableBody.appendChild(newRow);
    }
});

// Funzione per reindirizzare alla pagina di training
function redirectToTraining() {
    window.location.href = "Trainingsceltascenario.html";
}

// Funzione per reindirizzare alla pagina di esame
function redirectToExam() {
    window.location.href = "Examsceltascenario.html";
}

// Gestione dell'evento click per il reindirizzamento alla pagina di training
document.getElementById('trainingreturn').addEventListener("click", function (e) {
    e.preventDefault();
    redirectToTraining();
});

// Gestione dell'evento click per il reindirizzamento alla pagina di esame
document.getElementById('examreturn').addEventListener("click", function (e) {
    e.preventDefault();
    redirectToExam();
});

document.addEventListener('DOMContentLoaded', function () {
    // Imposta il campo nascosto su "true" quando l'utente esegue l'aggiunta di una matricola
    const resetTableFlag = document.getElementById("resetTableFlag");
    if (resetTableFlag) {
        resetTableFlag.value = "true";
    }
});

// Trova l'icona di logout e il link nascosto
const logoutIcon = document.getElementById("logout-icon");
const hiddenLogoutLink = document.getElementById("hidden-logout-link");

// Aggiungi un gestore di eventi al clic sull'icona di logout
logoutIcon.addEventListener("click", function () {
    // Fai clic sul link nascosto quando l'utente fa clic sull'icona di logout
    hiddenLogoutLink.click();
});
