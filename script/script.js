/*
In pieno tema natalizio sfruttiamo le timing functions per  fare il conto alla rovescia per il Natale!  Ogni secondo il nostro countdown dovrà scalare fino alla mezzanotte del 25 dicembre!
Vi sono forniti in allegato HTML e CSS, cercate di analizzarli per capire come intervenire sul countdown.
*/ //!Questo esercizio richiede un po' di ricerca 
/* ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
Da quante ore è composto un giorno?
Da quanti minuti è composta un'ora?
Da quanti secondi è composto un minuto?
Da quanti millisecondi è composto un secondo?
Quanti millisecondi mi separano dal Natale?
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi?
*/

//! prendo elementi dal dom
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");


//! dichiaro la funzione
function countdown() {

    //! data di oggi (automatica)
    const now = new Date();

    //! data futura (per calcolare differenza)
    const targetDate = new Date("2022-12-25");

    //! calcolo differenza (in millisecondi) 
    let remainTime = targetDate - now;

    //! ottengo (secondi,minuti,ore,giorni) senza decimali
    let seconds = Math.floor(remainTime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60 - 1);
    let days = Math.floor(hours / 24);

    //! Ottengo il modulo 
    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    //! aggiungo lo 0 se il numero è minore di 10
    days = days < 10 ? "0" + days : days;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    //! stampo in pagina
    daysElement.innerText = days;
    hoursElement.innerText = hours;
    minutesElement.innerText = minutes;
    secondsElement.innerText = seconds;
};
//! invoco la funzione, imposto intervallo della funzione countdown (refresh)
countdown();
setInterval(countdown, 1000);
