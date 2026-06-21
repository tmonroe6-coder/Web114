const setting = "a floating sky city";

alert(`Welcome to the Adventure Character Creator!
Created by Tierney Monroe.

Today's adventure takes place in ${setting}!`);

const charName = prompt(`What is your character's name?`) || "Wanderer";

const petName = prompt(`What type of pet or companion does ${charName} have?`);

const superpower = prompt(`What superpower does ${charName} have?`);

const trainingYearsText = prompt(
`How many years has ${charName} been training?`
);

const trainingYears = Number(trainingYearsText);

console.log(trainingYearsText, typeof trainingYearsText);
console.log(trainingYears, typeof trainingYears);

const powerLevel = trainingYears * 10;

const likesFighting = confirm(
`Does ${charName} like fighting monsters?

Click OK for YES
Click Cancel for NO`
);

console.log(likesFighting, typeof likesFighting);

alert(`Gathering magic for ${charName}... almost ready!`);

alert(`
====================================

Name: ${charName}
Pet: ${petName}
Superpower: ${superpower}
Power Level: ${powerLevel}
Monster Fighter? ${likesFighting ? "Yes" : "No"}

In the ${setting}, ${charName} travels with a loyal ${petName}.
Using the incredible power of ${superpower}, ${charName} protects the skies from danger.

====================================
`);