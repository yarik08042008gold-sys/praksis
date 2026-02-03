// Variabler (Oppgave 8)
let name = "Jaroslav";
let loggedIn = true;
let price = 150;

// Alert knapp (Oppgave 7)
function visAlert() {
  alert("Hei! Dette er en hilsen fra " + name);
}

// If / else (Oppgave 8)
function sjekkStatus() {
  if (loggedIn && price <= 200) {
    alert("Du er logget inn og har tilgang 👍");
  } else if (!loggedIn) {
    alert("Du er ikke logget inn ❌");
  } else {
    alert("Ikke nok saldo 💸");
  }
}

/* MODAL (Oppgave 9) */
// (убрали дубли — оставили одну рабочую версию)
function openModal() {
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function sendForm() {
  alert("Skjemaet er sendt ✅");
  closeModal();
}

/* (твоя функция с объектами — оставляем как есть) */
function visLedigeTimer() {
  let month = Number(document.getElementById("monthInput").value);

  let ledigeTimer = {
    1: 12, 2: 8, 3: 15, 4: 6,
    5: 10, 6: 20, 7: 5, 8: 14,
    9: 9, 10: 11, 11: 7, 12: 16
  };

  let monthNavn = {
    1: "Januar", 2: "Februar", 3: "Mars", 4: "April",
    5: "Mai", 6: "Juni", 7: "Juli", 8: "August",
    9: "September", 10: "Oktober", 11: "November", 12: "Desember"
  };

  let resultat = document.getElementById("ledigResultat");

  if (month >= 1 && month <= 12) {
    resultat.textContent =
      "Ledige timer i " + monthNavn[month] + ": " + ledigeTimer[month];
  } else {
    resultat.textContent = "Feil måned";
  }
}

/* Oppgave 10: Switch case */
function visManedSwitch() {
  const month = Number(document.getElementById("monthInput").value);
  const result = document.getElementById("monthResult");

  let monthNavn = "";

  switch (month) {
    case 1: monthNavn = "Januar"; break;
    case 2: monthNavn = "Februar"; break;
    case 3: monthNavn = "Mars"; break;
    case 4: monthNavn = "April"; break;
    case 5: monthNavn = "Mai"; break;
    case 6: monthNavn = "Juni"; break;
    case 7: monthNavn = "Juli"; break;
    case 8: monthNavn = "August"; break;
    case 9: monthNavn = "September"; break;
    case 10: monthNavn = "Oktober"; break;
    case 11: monthNavn = "November"; break;
    case 12: monthNavn = "Desember"; break;
    default:
      result.textContent = "Feil måned (skriv 1-12)";
      return;
  }

  result.textContent = "Måned: " + monthNavn;
}
