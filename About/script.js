var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
        }
      else {
          mybutton.style.display = "none";
        }
}

function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
}


function showhide_1(){
    var div = document.getElementById("more1");
    if (div.style.display !== "block") {
        div.style.display = "block";
        document.getElementById("more1").scrollIntoView({behavior: 'smooth'});
        document.getElementById("myBUTTON_1").innerHTML="Read less";
    }
    else {
        div.style.display = "none";
        document.getElementById("myBUTTON_1").innerHTML="Read more";
    }
}

function showhide_2(){
  var div = document.getElementById("more2");
  if (div.style.display !== "block") {  
        div.style.display = "block";
        document.getElementById("more2").scrollIntoView({behavior: 'smooth'});
        document.getElementById("myBUTTON_2").innerHTML="Read less";
  }
  else {
        div.style.display = "none";
        document.getElementById("myBUTTON_2").innerHTML="Read more";
  }
}

function showhide_3(){
  var div = document.getElementById("more3");
  if (div.style.display !== "block") {
        div.style.display = "block";
        document.getElementById("more3").scrollIntoView({behavior: 'smooth'});
        document.getElementById("myBUTTON_3").innerHTML="Read less";
  }
  else {
        div.style.display = "none";
        document.getElementById("myBUTTON_3").innerHTML="Read more";
  }
}



var string = " “ For us, ‘Vorsprung’ begins in the mind. Every single Audi employee lives the progress in his or her field of expertise that will define the mobility of the future. Every step of the way at Audi is shaped by this forward-looking mindset: We think ahead. ” ";
var str = string.split("");
var el = document.getElementById('str');

(function animate() {
      str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
      var running = setTimeout(animate, 50);
})();