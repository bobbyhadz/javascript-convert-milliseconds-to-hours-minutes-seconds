// EXAMPLE 1 - Convert Milliseconds to Hours, Minutes, Seconds in JS

// ✅ You can use a Quick one-liner hack
const ms = 54000000;
console.log(new Date(ms).toISOString().slice(11, 19)); // 👉️ 15:00:00

// ------------------------------------------------

// ✅ Or create a reusable function
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function convertMsToTime(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;

  // 👇️ If you don't want to roll hours over, e.g. 24 to 00
  // 👇️ comment (or remove) the line below
  // commenting next line gets you `24:00:00` instead of `00:00:00`
  // or `36:15:31` instead of `12:15:31`, etc.
  hours = hours % 24;

  return `${padTo2Digits(hours)}:${padTo2Digits(
    minutes,
  )}:${padTo2Digits(seconds)}`;
}

console.log(convertMsToTime(54000000)); // 👉️ 15:00:00 (15 hours)
console.log(convertMsToTime(86400000)); // 👉️ 00:00:00 (24 hours)
console.log(convertMsToTime(36900000)); // 👉️ 10:15:00 (10 hours, 15 minutes)
console.log(convertMsToTime(15305000)); // 👉️ 04:15:05 (4 hours, 15 minutes, 5 seconds)

// ------------------------------------------------------------------

// // EXAMPLE 2 - Convert Milliseconds to Hours and Minutes in JavaScript

// function padTo2Digits(num) {
//   return num.toString().padStart(2, '0');
// }

// function convertMsToHM(milliseconds) {
//   let seconds = Math.floor(milliseconds / 1000);
//   let minutes = Math.floor(seconds / 60);
//   let hours = Math.floor(minutes / 60);

//   seconds = seconds % 60;
//   // 👇️ if seconds are greater than 30, round minutes up (optional)
//   minutes = seconds >= 30 ? minutes + 1 : minutes;

//   minutes = minutes % 60;

//   // 👇️ If you don't want to roll hours over, e.g. 24 to 00
//   // 👇️ comment (or remove) the line below
//   // commenting next line gets you `24:00:00` instead of `00:00:00`
//   // or `36:15:31` instead of `12:15:31`, etc.
//   hours = hours % 24;

//   return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
// }

// console.log(convertMsToHM(54000000)); // 👉️ 15:00 (15 hours)
// console.log(convertMsToHM(86400000)); // 👉️ 00:00 (24 hours)
// console.log(convertMsToHM(36900000)); // 👉️ 10:15 (10 hours, 15 minutes)
// console.log(convertMsToHM(15335000)); // 👉️ 04:16 (4 hours, 15 minutes, 35 seconds)
// console.log(convertMsToHM(130531000)); // 👉️ 36:16 (36 hours 15 minutes 31 seconds)

// ------------------------------------------------------------------

// // EXAMPLE 3 - Convert Milliseconds to Minutes and Seconds in JavaScript

// function padTo2Digits(num) {
//   return num.toString().padStart(2, '0');
// }

// function convertMsToMinutesSeconds(milliseconds) {
//   const minutes = Math.floor(milliseconds / 60000);
//   const seconds = Math.round((milliseconds % 60000) / 1000);

//   return seconds === 60
//     ? `${minutes + 1}:00`
//     : `${minutes}:${padTo2Digits(seconds)}`;
// }

// console.log(convertMsToMinutesSeconds(296900)); // 👉️ 4:57
// console.log(convertMsToMinutesSeconds(296499)); // 👉️ 4:56
// console.log(convertMsToMinutesSeconds(992000)); // 👉️ 16:32

// ------------------------------------------------------------------

// // EXAMPLE 4 - Padding to 2 digits

// function padTo2Digits(num) {
//   return num.toString().padStart(2, '0');
// }

// function convertMsToMinutesSeconds(milliseconds) {
//   const minutes = Math.floor(milliseconds / 60000);
//   const seconds = Math.round((milliseconds % 60000) / 1000);

//   return seconds === 60
//     ? `${padTo2Digits(minutes + 1)}:00`
//     : `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
// }

// console.log(convertMsToMinutesSeconds(296900)); // 👉️ 04:57
// console.log(convertMsToMinutesSeconds(296499)); // 👉️ 04:56
// console.log(convertMsToMinutesSeconds(992000)); // 👉️ 16:32
