let clock = document.getElementById("clock");

clock.textContent = new Date().toLocaleTimeString();
setInterval(() => {
  clock.textContent = new Date().toLocaleTimeString();
}, 1000);


let today = new Date();
let currentHour = today.getHours();
let greetingMessage;

if (currentHour < 12) {
  greetingMessage = "Good morning, ";
} else if (currentHour < 18) {
  greetingMessage = "Good afternoon, ";
} else {
  greetingMessage = "Good evening, ";
}

let greeting = document.getElementById("greeting");
let date = document.getElementById("date");

const months = ["January","February","March","April","May","June","July","August","September","October","November","December",];
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1;
let dd = today.getDate();

if (dd < 10) dd = "0" + dd;

const formattedToday = months[today.getMonth()] + " " + dd + ", " + yyyy;

greeting.textContent = greetingMessage;
date.textContent = formattedToday;  
