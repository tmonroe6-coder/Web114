"use strict";

/* Tierney Monroe - 06/23/2026

PLANNING / PSEUDOCODE

1. Initialize score = 0

2. Question 1:
   What college do I plan to transfer to?
   Correct answer: KU or Bryant & Stratton University

3. Question 2:
   What is my major?
   Correct answer: Graphic Design

4. Question 3:
   Where do I work?
   Correct answer: Papa Johns

5. Question 4:
   What career am I interested in?
   Correct answer: Physical Therapy Assistant

6. Calculate percentage:
   (score / 4) * 100

7. Final feedback:
   4 correct = Excellent
   3 correct = Great job
   1-2 correct = Keep practicing
   0 correct = Try again

Logical operators:
   && for input validation
   || for multiple accepted answers
*/

console.log("=== My Quiz Game ===");

// Initialize score
let score = 0;

// Question 1
let transferSchool = prompt("What college do I plan to transfer to?");

if (transferSchool && transferSchool.trim() !== "") {
    transferSchool = transferSchool.toLowerCase();

    if (
        transferSchool === "ku" ||
        transferSchool === "university of kansas" ||
        transferSchool === "bryant stratton university" ||
        transferSchool === "bryant & stratton university"
    ) {
        console.log("Question 1: Correct!");
        score++;
    } else {
        console.log("Question 1: Incorrect.");
    }
} else {
    alert("Please enter an answer for Question 1.");
}

// Question 2
let majorAnswer = prompt("What is my major?");

if (majorAnswer && majorAnswer.trim() !== "") {
    majorAnswer = majorAnswer.toLowerCase();

    if (majorAnswer === "graphic design") {
        console.log("Question 2: Correct!");
        score++;
    } else {
        console.log("Question 2: Incorrect.");
    }
} else {
    alert("Please enter an answer for Question 2.");
}

// Question 3
let workPlace = prompt("Where do I work?");

if (workPlace && workPlace.trim() !== "") {
    workPlace = workPlace.toLowerCase();

    if (workPlace === "papa johns" || workPlace === "papa john's") {
        console.log("Question 3: Correct!");
        score++;
    } else {
        console.log("Question 3: Incorrect.");
    }
} else {
    alert("Please enter an answer for Question 3.");
}

// Question 4
let futureCareer = prompt("What career am I interested in?");

if (futureCareer && futureCareer.trim() !== "") {
    futureCareer = futureCareer.toLowerCase();

    if (
        futureCareer === "physical therapy assistant" ||
        futureCareer === "pta"
    ) {
        console.log("Question 4: Correct!");
        score++;
    } else {
        console.log("Question 4: Incorrect.");
    }
} else {
    alert("Please enter an answer for Question 4.");
}

// Calculate percentage
let percentage = (score / 4) * 100;

console.log("Final Score: " + score);
console.log("Percentage: " + percentage + "%");

// Final feedback
if (score === 4) {
    console.log("Excellent!");
} else if (score === 3) {
    console.log("Great job!");
} else if (score > 0 && score < 3) {
    console.log("Keep practicing!");
} else {
    console.log("Try again!");
}

// Additional logical operator example
if (!(score === 4)) {
    console.log("Not a perfect score.");
}

// Final summary alert
alert(`Quiz Complete!

Score: ${score}/4
Percentage: ${percentage}%

Thanks for taking my quiz!`);

