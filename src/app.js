/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let randomSymbol = () => {
  let symbol = ["♦", "♥", "♠", "♣"];
  let azarSymbol = symbol[Math.round(Math.random() * (symbol.length - 1))];
  return azarSymbol;
};

let randomNumber = () => {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q", "A"];
  let azarNumbers = numbers[Math.round(Math.random() * (numbers.length - 1))];
  return azarNumbers;
};
window.onload = () => {
  let number = document.querySelector(".centerNumber");
  number.textContent = randomNumber();

  let symbol = randomSymbol();

  let top = document.querySelector(".topSymbol");
  top.textContent = symbol;

  let bottom = document.querySelector(".bottomSymbol");
  bottom.textContent = symbol;
};
