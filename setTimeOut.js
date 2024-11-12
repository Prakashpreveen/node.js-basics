// Syntax : setInterval(function,milliseconds,param1,param2,....)

setTimeout(() => {
  console.log("-----Baisc setTimeout Method-----");
  console.log("Print After 2 Seconds");
}, 2000); //2 Seconds

setTimeout(greeting, 4000); //4 Seconds
function greeting() {
  console.log("-----setTimeout Method Using Function-----");
  console.log("Print this Function after 2 seconds");
}

setTimeout(greeting1, 6000, "Using Parameter");
function greeting1(x) {
  console.log("-----setTimeout Method using parameters in Function-----");
  console.log(x);
}

// -----ClearTimeOut (No Result)-----
const timeOut = setTimeout(greeting2, 5000, "No Result");
if (true) {
  clearTimeout(timeOut);
}
function greeting2(y) {
  console.log(y);
}

// -----CountInterval and clearTimeOut-----
let counter = 0;
const countInterval = setInterval(count, 5000);
function count() {
  console.log(counter++);

  if (counter > 5) {
    clearTimeout(countInterval);
    console.log("Counting stopped.");
  }
}
