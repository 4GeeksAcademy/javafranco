/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var who = ["The dog", "My grandma", "The mailman", "My bird"];
  var action = ["ate", "peed", "crushed", "broke"];
  var what = ["my homework", "my phone", "the car"];
  var when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  var rdm1 = Math.floor(Math.random() * who.length);
  var rdm2 = Math.floor(Math.random() * action.length);
  var rdm3 = Math.floor(Math.random() * what.length);
  var rdm4 = Math.floor(Math.random() * when.length);

  document.querySelector("#theexcuse").innerHTML =
    first + who[rdm1] + action[rdm2] + what[rdm3] + when[rdm4];
};
