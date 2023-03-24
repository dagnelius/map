import { places } from "./places.js";
const circles = document.querySelectorAll("circle");
let score = 0;
let max_score = 10;
let current_place;
let shown = [];

function random_place() {
  let found = false;
  while (!found) {
    let verdict = [];
    let rnd = Math.floor(Math.random() * (11 - 1) + 1);
    let possibility = places.filter((item) => item.id == rnd);
    verdict = shown.filter((item) => item.id == rnd);
    if (verdict.length == 0) {
      found = true;
      shown.push(possibility[0]);
      return possibility[0];
    }
  }
}

function global_reset() {
  current_place = random_place();
  document.querySelector(".guessy-img").src = current_place.img;
  document.querySelector(".guessy-txt").textContent = current_place.name;
}

circles.forEach((item) =>
  item.addEventListener("click", (e) => {
    let place = places.filter((item) => item.id == Number(e.target.id));
    let current_guess = place[0].id;
    if (current_guess == current_place.id) {
      score++;
      document.querySelector(
        ".guessy-score"
      ).textContent = `Punkti: ${score}/10`;
      if (score == 10) return;
      global_reset();
    }
  })
);

global_reset();
