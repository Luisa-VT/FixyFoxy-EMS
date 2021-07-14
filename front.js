let auswahlliste = [];

function mit() {
  document.getElementById("vidMit").style.display = "block";
  document.getElementById("mitButton").style.display = "none";
  document.getElementById("ohneButton").style.display = "none";
  document.getElementById("text").style.display = "none";
  document.getElementById("img").replaceWith(document.getElementById("vidMit"));
  document.getElementById("vidMit").play();

  document.getElementById("vidMit").onended = function nextMit() {
    document.getElementById("vidMit").style.display = "none";
    document.getElementById("imgTokens").style.display = "block";
    document.getElementById("auswahlT1").style.display = "block";
    document.getElementById("auswahlT2").style.display = "block";
    document.getElementById("auswahlT3").style.display = "block";
    document
      .getElementById("vidMit")
      .replaceWith(document.getElementById("imgTokens"));
  };
}
function ohne() {
  document.getElementById("vidOhne").style.display = "block";
  document.getElementById("mitButton").style.display = "none";
  document.getElementById("ohneButton").style.display = "none";
  document.getElementById("text").style.display = "none";
  document
    .getElementById("img")
    .replaceWith(document.getElementById("vidOhne"));
  document.getElementById("vidOhne").play();

  document.getElementById("vidOhne").onended = function nextMit() {
    document.getElementById("vidOhne").style.display = "none";
    document.getElementById("FernseherSchlafzimmer").style.display = "block";
    document.getElementById("tv").style.display = "block";
    document
      .getElementById("vidOhne")
      .replaceWith(document.getElementById("FernseherSchlafzimmer"));
  };
}

function hover() {
  if (document.getElementById("auswahlT1").style.color != "lightseagreen") {
    document.getElementById("auswahlT1").style.color = "lemonchiffon";
  }
}
function hoverend() {
  if (document.getElementById("auswahlT1").style.color == "lemonchiffon") {
    document.getElementById("auswahlT1").style.color = "transparent";
  }
}
function hover2() {
  if (document.getElementById("auswahlT2").style.color != "lightseagreen") {
    document.getElementById("auswahlT2").style.color = "lemonchiffon";
  }
}
function hoverend2() {
  if (document.getElementById("auswahlT2").style.color == "lemonchiffon") {
    document.getElementById("auswahlT2").style.color = "transparent";
  }
}
function hover3() {
  if (document.getElementById("auswahlT3").style.color != "lightseagreen") {
    document.getElementById("auswahlT3").style.color = "lemonchiffon";
  }
}
function hoverend3() {
  if (document.getElementById("auswahlT3").style.color == "lemonchiffon") {
    document.getElementById("auswahlT3").style.color = "transparent";
  }
}

function auswahl1() {
  if (auswahlliste.includes("Sushi")) {
    document.getElementById("auswahlT1").style.color = "transparent";
    auswahlliste.shift("Sushi");
  } else {
    document.getElementById("auswahlT1").style.color = "lightseagreen";
    auswahlliste.push("Sushi");
    if (auswahlliste.length >= 2) {
      weiterMit();
    }
  }
}
function auswahl2() {
  if (auswahlliste.includes("Urlaub")) {
    document.getElementById("auswahlT2").style.color = "transparent";
    auswahlliste.shift("Urlaub");
  } else {
    document.getElementById("auswahlT2").style.color = "lightseagreen";
    auswahlliste.push("Urlaub");
    if (auswahlliste.length >= 2) {
      weiterMit();
    }
  }
}

function auswahl3() {
  if (auswahlliste.includes("Pinguin")) {
    document.getElementById("auswahlT3").style.color = "transparent";
    auswahlliste.shift("Pinguin");
  } else {
    document.getElementById("auswahlT3").style.color = "lightseagreen";
    auswahlliste.push("Pinguin");
    if (auswahlliste.length >= 2) {
      weiterMit();
    }
  }
}

function weiterMit() {
  document.getElementById("weiterMit").style.display = "block";
  document.getElementById("auswahlT1").style.display = "none";
  document.getElementById("auswahlT2").style.display = "none";
  document.getElementById("auswahlT3").style.display = "none";
  document
    .getElementById("imgTokens")
    .replaceWith(document.getElementById("weiterMit"));
  document.getElementById("weiterMit").play();

  document.getElementById("weiterMit").onended = function nextnextMit() {
    document.getElementById("weiterMit").style.display = "none";
    document.getElementById("FernseherSchlafzimmer").style.display = "block";
    document.getElementById("tv").style.display = "block";
    document
      .getElementById("weiterMit")
      .replaceWith(document.getElementById("FernseherSchlafzimmer"));
  };
}

function weiter() {
  document.getElementById("tv").style.display = "none";
  let Fern = document.getElementById("FernseherSchlafzimmer");
  if (auswahlliste.length >= 1) {
    for (let i in auswahlliste) {
      console.log(i);
      if (auswahlliste[i] == "Urlaub") {
        console.log("hello");
        for (let j in auswahlliste) {
          if (auswahlliste[j] == "Pinguin") {
            document.getElementById("backMit1").style.display = "block";
            console.log("document.getElement");
            Fern.replaceWith(document.getElementById("backMit1"));
            document.getElementById("backMit1").play();

            document.getElementById("backMit1").onended = function Mit() {
              console.log(document.getElementById("tv").innerHTML);
              document.getElementById("backMit1").style.display = "none";
              document.getElementById("Fernseher").style.display = "block";
              document.getElementById("tv2").style.display = "block";
              document
                .getElementById("backMit1")
                .replaceWith(document.getElementById("Fernseher"));
            };
          } else if (auswahlliste[j] == "Sushi") {
            document.getElementById("backMit2").style.display = "block";
            Fern.replaceWith(document.getElementById("backMit2"));
            document.getElementById("backMit2").play();

            document.getElementById("backMit2").onended = function Mit() {
              document.getElementById("backMit2").style.display = "none";
              document.getElementById("Fernseher").style.display = "block";
              document.getElementById("tv2").style.display = "block";
              document
                .getElementById("backMit2")
                .replaceWith(document.getElementById("Fernseher"));
            };
          }
        }
      } else if (auswahlliste[i] == "Pinguin") {
        for (let j in auswahlliste) {
          if (auswahlliste[j] == "Sushi") {
            document.getElementById("backMit3").style.display = "block";
            document
              .getElementById("FernseherSchlafzimmer")
              .replaceWith(document.getElementById("backMit3"));
            document.getElementById("backMit3").play();

            document.getElementById("backMit3").onended = function Mit() {
              document.getElementById("backMit3").style.display = "none";
              document.getElementById("Fernseher").style.display = "block";
              document.getElementById("tv2").style.display = "block";
              document
                .getElementById("backMit3")
                .replaceWith(document.getElementById("Fernseher"));
            };
          }
        }
      }
    }
  } else {
    document.getElementById("backOhne").style.display = "block";
    Fern.replaceWith(document.getElementById("backOhne"));
    document.getElementById("backOhne").play();

    document.getElementById("backOhne").onended = function Ohne() {
      document.getElementById("backOhne").style.display = "none";
      document.getElementById("Fernseher").style.display = "block";
      document.getElementById("tv2").style.display = "block";
      document
        .getElementById("backOhne")
        .replaceWith(document.getElementById("Fernseher"));
    };
  }
}
let ergebnis = "";
let ergebnis2 = "";
function wortfertig() {
  console.log(auswahlliste);
  if (
    document.getElementById("fword").value == "Eisbergsalat" ||
    document.getElementById("fword").value == "eisbergsalat" ||
    document.getElementById("fword").value == "Pazifischer Ozean" ||
    document.getElementById("fword").value == "pazifischer Ozean" ||
    document.getElementById("fword").value == "pazifischer ozean"
  ) {
    ergebnis = "richtig";
    console.log("richtig");
  } else {
    ergebnis = "falsch";
  }
  if (
    document.getElementById("sword").value == "Eisbergsalat" ||
    document.getElementById("sword").value == "eisbergsalat" ||
    document.getElementById("sword").value == "Pazifischer Ozean" ||
    document.getElementById("sword").value == "pazifischer Ozean" ||
    document.getElementById("sword").value == "pazifischer ozean"
  ) {
    ergebnis2 = "richtig";
    console.log("richtig");
  } else {
    ergebnis2 = "falsch";
  }

  if (ergebnis == "richtig" && ergebnis2 == "richtig") {
    document.getElementById("fword").style.background = "green";
    document.getElementById("sword").style.background = "green";
  } else if (ergebnis == "falsch" && ergebnis2 == "richtig") {
    document.getElementById("sword").style.background = "green";
    document.getElementById("fword").style.background = "red";
  } else if (ergebnis == "richtig" && ergebnis2 == "falsch") {
    document.getElementById("fword").style.background = "green";
    document.getElementById("sword").style.background = "red";
  } else if (ergebnis == "falsch" && ergebnis2 == "falsch") {
    document.getElementById("sword").style.background = "red";
    document.getElementById("fword").style.background = "red";
  }

  setTimeout(function () {
    document.getElementById("tv2").style.display = "none";
    document.getElementById("Fernseher").style.display = "none";
    document.getElementById("trailer").style.display = "block";
    document
      .getElementById("tv2")
      .replaceWith(document.getElementById("trailer"));
    document.getElementById("trailer").play();
  }, 3000);

  document.getElementById("trailer").onended = function trailer() {
    document.getElementById("trailer").style.display = "none";
    document.getElementById("door").style.display = "block";
    document.getElementById("Scanner").style.display = "block";
    document.getElementById("Beamer").style.display = "block";
    document.getElementById("Boden").style.display = "block";
    document.getElementById("Chips").style.display = "block";
    document.getElementById("Tuerrahmen").style.display = "block";
    document.getElementById("endseite-btn").style.display = "block";
    document
      .getElementById("trailer")
      .replaceWith(document.getElementById("door"));
  };
}
function sidebaropen() {
  document.getElementById("sidebar").classList.toggle("collapsed");
}
function sidebaropenBeamer() {
  document.getElementById("sidebar").classList.toggle("collapsed");
  document.getElementById("sidetext").innerHTML =
    "Wenn die Person ein Klopfzeichen eingestellt hat und an einer Tür entlang läuft, leuchtet eine LED auf, welche sich um die Linse eines Projektors am oberen Türrahmen befindet. ";
}
function sidebaropenScanner() {
  document.getElementById("sidebar").classList.toggle("collapsed");
  document.getElementById("sidetext").innerHTML =
    "Wenn sich der Nutzer nun eine neue Erinnerung einrichten möchte, scannt er beliebig viele NFC-Chips am Türrahmen (NFC-Reader) ein und bestätigt die Auswahl der Bilder mit einem individuell ausgewählten Klopfzeichen.";
}
function sidebaropenBoden() {
  document.getElementById("sidebar").classList.toggle("collapsed");
  document.getElementById("sidetext").innerHTML =
    "Die zuvor ausgewählten Bilder werden auf den Fußboden im Türrahmen projiziert. Die gewählten Bilder soll der Nutzer dazu verwenden, sich eine Geschichte mit seinen eigenen Erinnerungen zu überlegen. Die Verknüpfung mit einer Geschichte und den damit verbundenen Emotionen trägt dazu bei, dass ein Gedanke schneller in das Langzeitgedächtnis gelangt und man sich besser an etwas erinnern kann.";
}
function sidebaropenChips() {
  document.getElementById("sidebar").classList.toggle("collapsed");
  document.getElementById("sidetext").innerHTML =
    "Es gibt 40 NFC-Chips, die einen Bildschirm besitzen und über das Smartphone des Nutzenden mit einem individuellen Bild bespielt werden können. Diese Bilder können entweder eigene Fotos sein oder aus von uns bereitgestellten Bildern ausgewählt werden. Nach der Auswahl eines Bildes wird dieses über eine drahtlose Verbindung auf den NFC-Chip übertragen und in der Datenbank der ID des NFC-Chips das entsprechende Bild zugewiesen. Die NFC-Chips werden magnetisch an allen Türrahmen in der Wohnung angebracht. ";
}
function sidebaropenTuerrahmen() {
  document.getElementById("sidebar").classList.toggle("collapsed");
  document.getElementById("sidetext").innerHTML =
    "Nach einer Studie der University of Notre Dame sind wir besonders vergesslich, wenn wir kurz vorher durch eine Tür gelaufen sind.  Man kann sich so lange an Dinge erinnern, bis ein neues Ereignis eintritt und somit das alte in den Hintergrund rückt. ";
}
function endseite() {
  document.getElementById("door").style.display = "none";
  document.getElementById("Scanner").style.display = "none";
  document.getElementById("Beamer").style.display = "none";
  document.getElementById("Boden").style.display = "none";
  document.getElementById("Chips").style.display = "none";
  document.getElementById("Tuerrahmen").style.display = "none";
  document.getElementById("endseite-btn").style.display = "none";
  document.getElementById("endseite").style.display = "block";
}
function reload() {
  location.reload();
}
