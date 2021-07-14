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
function wortfertig() {
  console.log(auswahlliste);
  if (
    document.getElementById("fword").value == "Pinguin" ||
    document.getElementById("fword").value == "pinguin"
  ) {
    ergebnis = "richtig";
    console.log("richtig");
  } else {
    ergebnis = "falsch";
  }
  document.getElementById("tv2").style.display = "none";
  document.getElementById("Fernseher").style.display = "none";

  document.getElementById("trailer").style.display = "block";
  document
    .getElementById("tv2")
    .replaceWith(document.getElementById("trailer"));
  document.getElementById("trailer").play();

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
