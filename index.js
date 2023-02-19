// Iteration 1: Names and Input
let hacker1;
let hacker2;

hacker1 = 'Marcelo';
hacker2 = 'Diogo';

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let one = hacker1.length;
let two = hacker2.length;
if (one > two) {
  console.log(`The driver has the longest name, it has ${one} characters.`);
} else if (one < two) {
  console.log(
    `It seems that the navigator has the longest name, it has ${two} characters.`
  );
} else {
  console.log(`Wow, you both have equally long names, ${one} characters!`);
}

// Iteration 3: Loops
let up = hacker1.toUpperCase();
const upper = up.split('');
console.log(upper.join(' '));

let result = '';
for (let i = one - 1; i >= 0; i--) {
  result += hacker1[i];
}

console.log(result);

let order = hacker1.localeCompare(hacker2);

if (order < 0) {
  console.log(`The driver's name goes first`);
} else if (order > 0) {
  console.log(`Yo, the navigator goes first definetely`);
} else {
  console.log(`What?! You both have the same name?`);
}
