"use strict";

const calculate = document
  .querySelector("#calculate")
  .addEventListener("click", calc);
const clear = document
  .querySelector("#clear")
  .addEventListener("click", clearList);

const finalResult = document.querySelector("#results");

document.addEventListener("DOMContentLoaded", eventListeners);

function calc() {
  let firstnumber = document.querySelector("#firstnumber").value;
  let secondNumber = document.querySelector("#secondnumber").value;
  let operator = document.querySelector("#operator").value;
  let results;

  if (isNaN(firstnumber, secondNumber)) {
    document.querySelector("#hide").classList.remove("hidden");
  } else if (operator == "add") {
    results = Number(firstnumber) + Number(secondNumber);
    document.querySelector("#hide").classList.add("hidden");
    finalFinalResults(results);
  } else if (operator == "sub") {
    results = Number(firstnumber) - Number(secondNumber);
    finalFinalResults(results);
  } else if (operator == "mul") {
    results = Number(firstnumber) * Number(secondNumber);
    finalFinalResults(results);
  } else if (operator == "div") {
    results = Number(firstnumber) / Number(secondNumber);
    finalFinalResults(results);
  }

  function finalFinalResults(number) {
    const list = document.createElement("li");
    document.querySelector("#secondnumber").value = "";
    document.querySelector("#firstnumber").value = "";
    list.textContent = number;
    finalResult.appendChild(list);
  }
}

function clearList() {
  console.log("clear");
  document.querySelector("#hide").classList.add("hidden");
  finalResult.innerHTML = "";
}
