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
    document.getElementById("tv").innerHTML = "Regen";
    if(auswahlliste.length >= 2){
      weiterMit();
    }
  }
  function auswahl2(){
    document.getElementById("auswahlT2").style.color ="green";
    auswahlliste.push("Haare");
    document.getElementById("tv").innerHTML = "Haare";
    if(auswahlliste.length >= 2){
      weiterMit();
    }
  }
  function auswahl3(){
    document.getElementById("auswahlT3").style.color ="white";
    document.getElementById("tv").innerHTML = "Pinguin";
    auswahlliste.push("Pinguin");
    if(auswahlliste.length >= 2){
      weiterMit();
    }
  }

  
  function weiterMit(){
    document.getElementById("weiterMit").style.display = "block";
    document.getElementById("auswahlT1").style.display ="none";
    document.getElementById("auswahlT2").style.display ="none";
    document.getElementById("auswahlT3").style.display ="none";
    document.getElementById("imgTokens").replaceWith(document.getElementById("weiterMit"));
    document.getElementById("weiterMit").play();

    document.getElementById("weiterMit").onended = function nextnextMit(){
        document.getElementById("weiterMit").style.display = "none";
        document.getElementById("Fernseher1").style.display = "block";
        document.getElementById("tv").style.display = "block";
        document.getElementById("weiterMit").replaceWith(document.getElementById("Fernseher1"));
      }
  }

  function weiter(){
    
    document.getElementById("tv").style.display ="none";
    document.getElementById("weiter").style.display ="none";
    if(auswahlliste.length >= 1){
      for(let i in auswahlliste){
        console.log(i);
      if(auswahlliste[i] == "Haare"){
        console.log("hello");
        for(let j in auswahlliste){
          if(auswahlliste[j] == "Pinguin"){
        document.getElementById("backMit").style.display ="block";
      document.getElementById("Fernseher1").replaceWith(document.getElementById("backMit"));
      document.getElementById("backMit").play();

      document.getElementById("backMit").onended = function Mit(){
        document.getElementById("backMit").style.display = "none";
        document.getElementById("Fernseher").style.display = "block";
        document.getElementById("tv").style.display = "block";
        document.getElementById("tv").innerHTML = "Pinguin";
        document.getElementById("backMit").replaceWith(document.getElementById("Fernseher"));
      
      }
      }
      else if(auswahlliste[j] == "Regen"){
        document.getElementById("backMit").style.display ="block";
      document.getElementById("Fernseher1").replaceWith(document.getElementById("backMit"));
      document.getElementById("backMit").play();

      document.getElementById("backMit").onended = function Mit(){
        document.getElementById("backMit").style.display = "none";
        document.getElementById("Fernseher").style.display = "block";
        document.getElementById("tv").style.display = "block";
        document.getElementById("tv").innerHTML = "Regen";
        document.getElementById("backMit").replaceWith(document.getElementById("Fernseher"));
      }
      }
     } 
      }
      else{
        document.getElementById("backMit").style.display ="block";
      document.getElementById("Fernseher1").replaceWith(document.getElementById("backMit"));
      document.getElementById("backMit").play();

      document.getElementById("backMit").onended = function Mit(){
        document.getElementById("backMit").style.display = "none";
        document.getElementById("Fernseher").style.display = "block";
        document.getElementById("tv").style.display = "block";
        document.getElementById("tv").innerHTML = "no";
        document.getElementById("backMit").replaceWith(document.getElementById("Fernseher"));
      }
      }
    }
    }
    else{
      document.getElementById("backOhne").style.display ="block";
      document.getElementById("Fernseher1").replaceWith(document.getElementById("backOhne"));
      document.getElementById("backOhne").play();

      document.getElementById("backOhne").onended = function Ohne(){
        document.getElementById("backOhne").style.display = "none";
        document.getElementById("Fernseher").style.display = "block";
        document.getElementById("tv").style.display = "block";
        document.getElementById("backOhne").replaceWith(document.getElementById("Fernseher"));
      }
    }
  }
 