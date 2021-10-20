const elTrafficLight = document.querySelector('.traffic-light');
const elRed = document.querySelector('.red');
const elYellow = document.querySelector('.yellow');
const elGreen = document.querySelector('.green');
const elBgImge = document.querySelector('.bg-img');
const eltext = document.querySelector('.text');
const eltextYellow = document.querySelector('.text__yellow');
const eltextGreen = document.querySelector('.text__green');

function goTrafficLight() {
   // red
   setTimeout(() => {
      elRed.style.backgroundColor = "red";
      eltext.textContent = '12';
   }, 1000);
   setTimeout(() => {
      elRed.style.backgroundColor = "red";
      eltext.textContent = '11';
   }, 2000);
   setTimeout(() => {
      elRed.style.backgroundColor = "red";
      eltext.textContent = '10';
   }, 3000);
   setTimeout(() => {
      elRed.style.backgroundColor = "red";
      eltext.textContent = '9';
   }, 4000);
   setTimeout(() => {
      elRed.style.backgroundColor = "red";
      eltext.textContent = '8';
   }, 5000);
   setTimeout(() => {
      elRed.style.backgroundColor = "red";
      eltext.textContent = '7';
   }, 6000);
   setTimeout(() => {
      elRed.style.backgroundColor = "red";
      eltext.textContent = '6';
   }, 7000);
   setTimeout(() => {
      elRed.style.backgroundColor = "white";
      eltext.textContent = '5';
   }, 7500);
   setTimeout(() => {
      elRed.style.backgroundColor = "red";
      eltext.textContent = '4';
   }, 8000);
   setTimeout(() => {
      elRed.style.backgroundColor = "white";
      eltext.textContent = '3';
   }, 9500);
   setTimeout(() => {
      elRed.style.backgroundColor = "red";
      eltext.textContent = '2';
   }, 9500);
   setTimeout(() => {
      elRed.style.backgroundColor = "white";
      eltext.textContent = '1';
   }, 10000);

   // yellow

   setTimeout(() => {
      elYellow.style.backgroundColor = "white";
      eltextYellow.textContent = '3';
   }, 11000);
   setTimeout(() => {
      elYellow.style.backgroundColor = "yellow";
      eltextYellow.textContent = '2';
   }, 12000);
   setTimeout(() => {
      elYellow.style.backgroundColor = "white";
      eltextYellow.textContent = '1';
   }, 13000);

   setTimeout(() => {
      elBgImge.classList.add("bg-img--go");
    }, 14000);
   // green

   setTimeout(() => {
      elGreen.style.backgroundColor = "green";
      eltextGreen.textContent = '12';
   }, 14000);
   setTimeout(() => {
      elGreen.style.backgroundColor = "green";
      eltextGreen.textContent = '11';
   }, 15000);
   setTimeout(() => {
      elGreen.style.backgroundColor = "green";
      eltextGreen.textContent = '10';
   }, 16000);
   setTimeout(() => {
      elGreen.style.backgroundColor = "green"
      eltextGreen.textContent = '9'
   }, 17000);
   setTimeout(() => {
      elGreen.style.backgroundColor = "green";
      eltextGreen.textContent = '8';
   }, 18000);
   setTimeout(() => {
      elGreen.style.backgroundColor = "green";
      eltextGreen.textContent = '7';
   }, 19000);
   setTimeout(() => {
      elGreen.style.backgroundColor = "green";
      eltextGreen.textContent = '6';
   }, 20000);
   setTimeout(() => {
      elGreen.style.backgroundColor = "white";
      eltextGreen.textContent = '5';
   }, 21500);
   setTimeout(() => {
      elGreen.style.backgroundColor = "green";
      eltextGreen.textContent = '4';
   }, 22000);
   setTimeout(() => {
      elGreen.style.backgroundColor = "white";
      eltextGreen.textContent = '3';
   }, 22500);
   setTimeout(() => {
      elGreen.style.backgroundColor = "green";
      eltextGreen.textContent = '2';
   }, 23000);
   setTimeout(() => {
      elGreen.style.backgroundColor = "white";
      eltextGreen.textContent = '1';
   }, 24000);


}
goTrafficLight();