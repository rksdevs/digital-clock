// var today = new Date();
// today.getSeconds();
// console.log(`${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);

// let hour = today.getHours().toFixed(2);
// let min = today.getMinutes().toFixed(2);
// let sec = today.getSeconds().toFixed(2);

// function gettingSeconds() {
//   var today = new Date();
//   console.log(today.getSeconds());
// }

// function gettingMinutes() {
//   let today = new Date();
//   console.log(today.getMinutes());
// }

// function gettingHours() {
//   let today = new Date();
//   console.log(today.getHours());
// }

// setInterval(() => {
//   let today = new Date();
//   document.getElementById("sec").innerText = today.getSeconds();
// }, 1000);

// setInterval(() => {
//   let today = new Date();
//   document.getElementById("min").innerText = today.getMinutes();
// }, 1000);

setInterval(() => {
  let today = new Date();
  document.getElementById("hour").innerText = today.getHours();
  document.getElementById("min").innerText = today.getMinutes();
  document.getElementById("sec").innerText = today.getSeconds();
}, 1000);

setInterval(() => {
  let today = new Date();
  document.getElementById("today-year").innerText = today.getFullYear();
  document.getElementById("today-month").innerText = today.getMonth();
  document.getElementById("today-day").innerText = today.getDate();
}, 1000);
