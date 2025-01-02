// Comprovar si l'usuari està loguejat
var loggedInUser = localStorage.getItem("loggedInUser");
if (!loggedInUser) {
    window.location.href = "index.html"; // Si no hi ha sessió, redirigir
} else {
    // Mostrar el nom de l'usuari
    document.getElementById("userDisplay").textContent = loggedInUser;

    // Recuperar dades de l'usuari
    var users = JSON.parse(localStorage.getItem("users"));
    var currentUser = users.find(user => user.username === loggedInUser);

    if (currentUser) {
        // Mostrar el temps des de la data de coneixement de Déu
        if (currentUser.godDate) {
            var godDate = new Date(currentUser.godDate);
            var today = new Date();

            var years = today.getFullYear() - godDate.getFullYear();
            var months = today.getMonth() - godDate.getMonth();
            var days = today.getDate() - godDate.getDate();

            if (months < 0) {
                years--;
                months += 12;
            }
            if (days < 0) {
                months--;
                var previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
                days += previousMonth.getDate();
            }

            var timeMessage = `Fa ${years} anys, ${months} mesos i ${days} dies que coneixes Déu.`;
            document.getElementById("timeMessage").textContent = timeMessage;
        } else {
            document.getElementById("timeMessage").textContent = "No s'ha pogut determinar la data.";
        }

        // Calcular el temps en el discipulat
        if (currentUser.discipulatStartDate) {
            var discipulatStartDate = new Date(currentUser.discipulatStartDate);
            var today = new Date();

            var discipulatYears = today.getFullYear() - discipulatStartDate.getFullYear();
            var discipulatMonths = today.getMonth() - discipulatStartDate.getMonth();
            var discipulatDays = today.getDate() - discipulatStartDate.getDate();

            if (discipulatMonths < 0) {
                discipulatYears--;
                discipulatMonths += 12;
            }
            if (discipulatDays < 0) {
                discipulatMonths--;
                var previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
                discipulatDays += previousMonth.getDate();
            }

            var discipulatMessage = `Fa ${discipulatYears} anys, ${discipulatMonths} mesos i ${discipulatDays} dies que portes en el discipulat.`;
            document.getElementById("discipulatMessage").textContent = discipulatMessage;
        } else {
            document.getElementById("discipulatMessage").textContent = "No s'ha pogut determinar la data del discipulat.";
        }

        // Mostrar l'estat del discipulat
        var discipulatStatusMessage = currentUser.discipulatFinished === "si"
            ? "Has acabat el discipulat. Felicitats! 🎉"
            : "Encara estàs en el discipulat. Segueix endavant! 💪";
        document.getElementById("discipulatStatusMessage").textContent = discipulatStatusMessage;
    }
}

// Botó per tancar la sessió
document.getElementById("logoutButton").addEventListener("click", function () {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
});
