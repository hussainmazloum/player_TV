
/* ------------------------------------- Første side (Funksjon) ------------------------------------ */


function gate() {
  const kode = document.getElementById("abbas").value;

  const message = document.getElementById("message");

  if (kode === "thmp") {
    window.location.href = "gaate.html";
  } else if (kode === "") {
    message.innerText = "Skrive koden ";
  } else {
    message.innerText = "Feil kode, prøv på nytt.";
  }
}
/* ------------------------------------- Andre side (Funksjon) ------------------------------------ */

let forsok = 4;

function gaate() {
  const code = document.getElementById("gate").value;
  const message = document.getElementById("message");
  const button = document.getElementById("openbtn");

  if (code === "bslk") {
    window.location.href = "politi.html";
  } else if (code === "") {
    message.innerText = "Skrive koden ";
  } else {
    forsok--;

    if (forsok > 0) {
      message.innerText = "Feil kode. Du har " + forsok + " forsøk igjen.";
    } else {
      message.innerText = "Ingen forsøk igjen! / knappen deaktivert";

      button.disabled = true;
    }
  }
}

/* ------------------------------------- Tilbake side (Funksjon) ------------------------------------ */

function tilbake() {
  window.location.href = "index.html";
}
