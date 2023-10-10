var slides = document.getElementsByClassName("Containers");
if (slides.length > 0) {
    var slidePosition = 1;
    SlideShow(slidePosition);

    // Autoplay funktion (skift billede hver 3 sekunder)
    var autoplayInterval = setInterval(function() {
        plusSlides(1); 
    }, 3000); 

    // forward/Back
    function plusSlides(n) {
        clearInterval(autoplayInterval); 
        SlideShow(slidePosition += n);
    }

    // billede karussel
    function currentSlide(n) {
        clearInterval(autoplayInterval);
        SlideShow(slidePosition = n);
    }

    function SlideShow(n) {
        if (n > slides.length) { 
            slidePosition = 1;
        }
        if (n < 1) { 
            slidePosition = slides.length;
        }
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slidePosition - 1].style.display = "block";
    }
}




// countdown
document.addEventListener("DOMContentLoaded", function() {

    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    let countDown = new Date('20 Oct, 2023 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
    }, second)
});

var burgerMenu = document.getElementById("burger-menu");
var navLinks = document.getElementById("nav-links");

burgerMenu.addEventListener("click", showmenu);

function showmenu() {
  navLinks.style.right = "0";
}

function hidemenu() {
  navLinks.style.right = "-200px";
}

function tilføjOpskrift(num) {
  
  var antalPortioner = document.getElementById("taldropdown" + num).value;


  var opskriftTitel = document.querySelector(".sektion:nth-child(" + num + ") h2").textContent;


  var nytElement = document.createElement("li");

  
  nytElement.textContent = antalPortioner + " stk. " + opskriftTitel;

  
  var valgteOpskrifterListe = document.getElementById("valgteOpskrifter");
  valgteOpskrifterListe.appendChild(nytElement);
}



let checkaf = document.getElementById("checkaf");
const buttoncheck = document.getElementById("buttoncheck");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

function seOmChecked(){
    let checkedCount = 0; 

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkedCount++;
        }
    }

    if (checkedCount >= 3) { 
        checkaf.innerHTML = "Måltidskassen er nu tilføjet til kurven";
        checkaf.style.color = "green"; 
    } else {
        checkaf.innerHTML = "Afkryds mindst tre opskrifter nedenfor!";
        checkaf.style.color = "red"; 
    }
}


//Billedkarrusel
//Variable
const billed1 = document.getElementById("billed1");
const billed2 = document.getElementById("billed2");
const billed3 = document.getElementById("billed3");
const billed4 = document.getElementById("billed4");
const hoejrePil = document.getElementById("hoejrePil");
const venstrePil = document.getElementById("venstrePil");

//Array
const karrusell = [billed1, billed2, billed3, billed4];

billed1.style.display = "block";
billed2.style.display = "none";
billed3.style.display = "none";
billed4.style.display = "none";

//Bottons
hoejrePil.addEventListener("click", naesteBillede);
venstrePil.addEventListener("click", forrigeBillede);

//Function
function naesteBillede(){
    karrusell[0].style.display = "none"; 
    karrusell.push(karrusell[0]); 
    karrusell.shift(); 
    karrusell[0].style.display = "block"; 
}

function forrigeBillede(){
    karrusell[0].style.display = "none";
    karrusell.unshift(karrusell[2]);
    karrusell.pop();
    karrusell[0].style.display = "block";
}



  
  












    