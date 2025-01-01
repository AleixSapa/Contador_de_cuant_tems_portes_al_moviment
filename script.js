// Elements del DOM
var loginForm = document.getElementById("loginForm");
var loginUsername = document.getElementById("loginUsername");
var loginPassword = document.getElementById("loginPassword");
var loginMessage = document.getElementById("loginMessage");

var registerForm = document.getElementById("registerForm");
var registerUsername = document.getElementById("registerUsername");
var registerPassword = document.getElementById("registerPassword");
var godDate = document.getElementById("godDate");
var discipler = document.getElementById("discipler");
var finishedDiscipleship = document.getElementById("finishedDiscipleship");
var disciplesCount = document.getElementById("disciplesCount");
var disciplesNames = document.getElementById("disciplesNames");
var registerMessage = document.getElementById("registerMessage");

// Funció per obtenir usuaris registrats del localStorage
function getUsers() {
    var users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
}

// Funció per guardar usuaris al localStorage
function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

// Funció per validar la contrasenya
function validatePassword(password) {
    return password.length >= 6; // Contrassenya ha de tenir almenys 6 caràcters
}

// Gestió del formulari d'inici de sessió
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var username = loginUsername.value;
    var password = loginPassword.value;

    // Comprovar si els camps estan buits
    if (!username || !password) {
        loginMessage.textContent = "Nom d'usuari i contrasenya són obligatoris. 😟";
        return;
    }

    if (!validatePassword(password)) {
        loginMessage.textContent = "La contrasenya ha de tenir almenys 6 caràcters. 😟";
        return;
    }

    var users = getUsers();
    var user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Iniciar sessió amb èxit
        localStorage.setItem("loggedInUser", username); // Guardar l'usuari loguejat
        window.location.href = "inici.html"; // Redirigir a inici.html
    } else {
        loginMessage.textContent = "Usuari o contrasenya incorrecta. 😟";
    }
});

window.username = registerUsername.value;
window.password = registerPassword.value;
window.godDateValue = godDate.value;
window.disciplerValue = discipler.value;
window.finishedDiscipleshipValue = finishedDiscipleship.value;
window.disciplesCountValue = disciplesCount.value;
window.disciplesNamesValue = disciplesNames.value;


// Gestió del formulari de registre
registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var username = registerUsername.value;
    var password = registerPassword.value;
    var godDateValue = godDate.value;
    var disciplerValue = discipler.value;
    var finishedDiscipleshipValue = finishedDiscipleship.value;
    var disciplesCountValue = disciplesCount.value;
    var disciplesNamesValue = disciplesNames.value;

    if (!validatePassword(password)) {
        registerMessage.textContent = "La contrasenya ha de tenir almenys 6 caràcters. 😟";
        return;
    }

    var users = getUsers();
    var userExists = users.some(user => user.username === username);

    if (userExists) {
        registerMessage.textContent = "Aquest nom d'usuari ja està registrat. 😕";
    } else {
        // Afegir el nou usuari amb les respostes a les noves preguntes
        users.push({
            username: username,
            password: password,
            godDate: godDateValue,
            discipler: disciplerValue,
            finishedDiscipleship: finishedDiscipleshipValue,
            disciplesCount: disciplesCountValue,
            disciplesNames: disciplesNamesValue
        });
        saveUsers(users);
        registerMessage.textContent = "Usuari registrat amb èxit! 🎉";
    }
});
