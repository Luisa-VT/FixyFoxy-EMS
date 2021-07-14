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

function auswahl1() {
  if (auswahlliste.includes("Sushi")) {
    document.getElementById("auswahlT1").style.color = "teal";
    auswahlliste.shift("Sushi");
  } else {
    document.getElementById("auswahlT1").style.color = "blue";
    auswahlliste.push("Sushi");
    document.getElementById("tv").innerHTML = "Sushi";
    if (auswahlliste.length >= 2) {
      weiterMit();
    }
  }
}
function auswahl2() {
  if (auswahlliste.includes("Urlaub")) {
    document.getElementById("auswahlT2").style.color = "teal";
    auswahlliste.shift("Urlaub");
  } else {
    document.getElementById("auswahlT2").style.color = "green";
    auswahlliste.push("Urlaub");
    document.getElementById("tv").innerHTML = "Urlaub";
    if (auswahlliste.length >= 2) {
      weiterMit();
    }
  }
}

function auswahl3() {
  if (auswahlliste.includes("Pinguin")) {
    document.getElementById("auswahlT3").style.color = "teal";
    auswahlliste.shift("Pinguin");
  } else {
    document.getElementById("auswahlT3").style.color = "white";
    document.getElementById("tv").innerHTML = "Pinguin";
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
      document.getElementById("tv").style.display = "block";
      document
        .getElementById("backOhne")
        .replaceWith(document.getElementById("Fernseher"));
    };
  }
}

function wortfertig() {
  console.log(auswahlliste);
  if (
    document.getElementById("fword").value == "Pinguin" ||
    document.getElementById("fword").value == "pinguin"
  ) {
    console.log("richtig");
  }
}
