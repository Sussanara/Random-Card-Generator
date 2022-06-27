/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  window.genCard = function() {
    let suit = ["♥", "♠", "♣", "♦"];
    let numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];

    function randomCard() {
      let randomsuit = suit[Math.floor(Math.random() * suit.length)];
      let randomnumbers = numbers[Math.floor(Math.random() * numbers.length)];

      document.querySelector(".icono-top").innerHTML = randomsuit;
      document.querySelector(".number").innerHTML = randomnumbers;
      document.querySelector(".icono-bottom").innerHTML = randomsuit;
    }

    randomCard();
  };

  window.genCard();
};
