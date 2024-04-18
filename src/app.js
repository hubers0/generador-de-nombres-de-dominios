/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const pronoun = ["the", "our"];
  const adj = ["great", "big"];
  const noun = ["jogger", "racoon"];

  for (const p of pronoun) {
    for (const a of adj) {
      for (const n of noun) {
        console.log(`${p}${a}${n}.com`);
      }
    }
  }
};
