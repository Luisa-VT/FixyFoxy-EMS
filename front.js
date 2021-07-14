let auswahlliste = [];
function mit() {
    document.getElementById("vidMit").style.display = "block";
    document.getElementById("mitButton").style.display ="none";
    document.getElementById("ohneButton").style.display ="none";
    document.getElementById("text").style.display ="none";
    document.getElementById("img").replaceWith(document.getElementById("vidMit"));
    document.getElementById("vidMit").play();

    document.getElementById("vidMit").onended = function nextMit(){
        document.getElementById("vidMit").style.display = "none";
        document.getElementById("imgTokens").style.display = "block";
        document.getElementById("auswahlT1").style.display = "block";
        document.getElementById("auswahlT2").style.display = "block";
        document.getElementById("auswahlT3").style.display = "block";
        document.getElementById("vidMit").replaceWith(document.getElementById("imgTokens"));
      }
  }
  function ohne(){
    document.getElementById("vidOhne").style.display = "block";
    document.getElementById("mitButton").style.display ="none";
    document.getElementById("ohneButton").style.display ="none";
    document.getElementById("text").style.display ="none";
    document.getElementById("img").replaceWith(document.getElementById("vidOhne"));
    document.getElementById("vidOhne").play();

    document.getElementById("vidOhne").onended = function nextMit(){
        document.getElementById("vidOhne").style.display = "none";
        document.getElementById("Fernseher1").style.display = "block";
        document.getElementById("tv").style.display = "block";
        document.getElementById("vidOhne").replaceWith(document.getElementById("Fernseher1"));
      }
  }

  function auswahl1(){
    document.getElementById("auswahlT1").style.color ="blue";
    auswahlliste.push("Regen");
  }
  function auswahl2(){
    document.getElementById("auswahlT2").style.color ="green";
    auswahlliste.push("Haare");
  }
  function auswahl3(){
    document.getElementById("auswahlT3").style.color ="white";
    auswahlliste.push("Pinguin");
  }
 