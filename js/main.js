// | Recupero dati

const countDays = document.getElementById("days");
const countHours = document.getElementById("hours");
const countMinutes = document.getElementById("minutes");
const countSeconds = document.getElementById("seconds");

const second = 1000 * 1;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

let seconds;
let minutes;
let hours;
let days;
let years;

//| Calcolo il tempo (i millisecondi da 01/01/1970 a 24/08/2023 alle 09.30 )

// * Inserisco la data e ora fine countdown
const dateEndCountdown = new Date(2023, 7, 23, 16, 0, 0, 0);
console.log(dateEndCountdown);
// * Concolo i millisecondi da 01/01/1970 fino a data fine countdown
let timeEndCountdown = dateEndCountdown.getTime();
console.log(timeEndCountdown);

// | Calcolo il tempo di adesso

// * Calcola la data di oggi
const dateNow = new Date();
console.log(dateNow);
// * Calcola i millisecondi da 01/01/1970 fino alla data di oggi
let timeNow = dateNow.getTime();
console.log(timeNow);

// | Calcolo _Data fine countdown_ - _tempo attuale_

let timeCountdown = timeEndCountdown - timeNow;
console.log(timeCountdown);

const countdown = setInterval(function () {
  timeCountdown--;

  if (timeCountdown <= 0) {
    clearInterval(countdown);
  }

  console.log(countdown);
}, 1000);
