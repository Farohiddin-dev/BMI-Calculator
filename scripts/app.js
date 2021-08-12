//Inputs
let inputs = document.getElementsByClassName("inputs");

let height = 170;
let mass = 75;

function LetsHS() {
    height = document.getElementById("height");
    mass = document.getElementById("mass");
}

let javobi = document.getElementById("javobi");

//Button
let hisobla = document.getElementById("hisobla");
let natija = null;

hisobla.onclick = function(){
   natija = (mass.value / ((height.value * height.value) / 10000)).toFixed(2);
   if (natija<=16) {
    javobi.innerHTML = "Siz juda ozg'insiz! (yuqori ingichka)<strong>😔😔</strong>";
   }
   else if (natija<=16.9 && natija>=16) {
    javobi.innerHTML = "Siz ozg'insiz! (o'rtacha)<strong>😔</strong>";
   }
   else if (natija<=18.4 && natija>=17) {
    javobi.innerHTML = "Siz juda ozg'insiz. (boshlang'ich)<strong>😞</strong>";
   }
   else if (natija<=24.9 && natija>=18.5) {
    javobi.innerHTML = "Sizning vazninggiz yaxshi, ovqat rastioninga to'g'ri amal qlishda davom eting!<strong>☺️☺️</strong>";
   }
   else if ( natija<= 29.9 && natija>=25 ) {
    javobi.innerHTML = "Sizning vazninggiz ortiqcha, semirish arafasida turbsiz!<strong>😞😞</strong>";
   }
   else if ( natija<=34.9 && natija>=30 ) {
    javobi.innerHTML = "Siz semizlikning I sinfidasiz!<strong>😞😔</strong>";
   }
   else if ( natija<=39.9 && natija>=35 ) {
    javobi.innerHTML = "Siz semizlikning II sinfidasiz!<strong>😔</strong>";
   }
   else if ( natija>=40) {
    javobi.innerHTML = "Siz semizlikning III sinfidasiz! <strong>😔😔</strong>";
   }
   console.log(natija)
   
}