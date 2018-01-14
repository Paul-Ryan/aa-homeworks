

window.setTimeout(function() {
  console.log("IT'S HAMMERTIME");}, 5000
);

function bark() {
  console.log('bork');
}

function hammerTime (time) {
  window.setTimeout(function () {
    alert(`${time} is HAMMER TIME!`);
  }, time);
}
