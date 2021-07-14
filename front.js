function mit() {
    document.getElementById("vidMit").style.display = "block";
    document.getElementById("mitButton").style.display ="none";
    document.getElementById("ohneButton").style.display ="none";
    document.getElementById("text").style.display ="none";
    document.getElementById("img").replaceWith(document.getElementById("vidMit"));
    document.getElementById("vidMit").play();

    document.getElementById("vidMit").onended = function nextMit(){
        document.getElementById("vidMit").style.display = "none";
        document.getElementById("Fernseher1").style.display = "block";
        document.getElementById("vidMit").replaceWith(document.getElementById("Fernseher1"));
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
        document.getElementById("vidOhne").replaceWith(document.getElementById("Fernseher1"));
      }
  }
 