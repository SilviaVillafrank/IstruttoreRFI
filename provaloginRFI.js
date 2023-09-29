function validateMatricola() {
    const matricolaInput = document.getElementById("matricola");
    const matricolaError = document.getElementById("matricola-error");

    const matricolaPattern = /^\d+$/; // Espressione regolare per verificare che siano presenti solo numeri

    if (!matricolaPattern.test(matricolaInput.value)) {
        matricolaError.textContent = "La matricola deve contenere solo numeri.";
    } else {
        matricolaError.textContent = "";
    }
}

function validatePassword() {
    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("password-error");

    const passwordValue = passwordInput.value;

    if (passwordValue.length < 8 || !/\d/.test(passwordValue) || !/[a-zA-Z]/.test(passwordValue)) {
        passwordError.textContent = "La password deve contenere almeno 8 caratteri, inclusi lettere e numeri.";
    } else {
        passwordError.textContent = "";
    }
}

/*function redirectToDashboard() {
    // Effettua il reindirizzamento alla pagina di destinazione
    window.location.href = "provaaggiungimatricola.html";
}

// Aggiungi un gestore di eventi al pulsante "Accedi"
 document.getElementById("accediBtn").addEventListener("click", function(event) {
    // Chiama la funzione per reindirizzare alla pagina di destinazione
    redirectToDashboard();
}); 
 document.getElementById('loginForm').addEventListener("submit", function(e) {
    e.preventDefault();
    redirectToDashboard();
    // do something
 }); */

function redirectToDashboard() {
    const matricolaInput = document.getElementById("matricola");
    const passwordInput = document.getElementById("password");
    const accediError = document.getElementById("accedi-error");

    const matricolaValue = matricolaInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    // Verifica se sia la matricola che la password sono state compilate .trim
    if (matricolaValue !== "" && passwordValue !== "") {
        // Effettua il reindirizzamento alla pagina di destinazione
        return true; // Consenti il reindirizzamento
    } else {
        // Mostra un messaggio di errore o fai qualsiasi altra azione per indicare che i campi devono essere compilati
        accediError.textContent = "Compila entrambi i campi prima di procedere.";
        return false; // Impedisci il reindirizzamento
    }
}

document.getElementById('loginForm').addEventListener("submit", function(e) {
    e.preventDefault();
    if (redirectToDashboard()) {
        // Rimuovi gli utenti memorizzati quando si effettua il logout
        localStorage.removeItem('users');
        window.location.href = "Aggiungimatricola.html"; // Effettua il reindirizzamento
    }
});


document.getElementById('loginForm').addEventListener("submit", function(e) {
    e.preventDefault();
    if (redirectToDashboard()) {
        window.location.href = "Aggiungimatricola.html"; // Impedisci il reindirizzamento
    }
});