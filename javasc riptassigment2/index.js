// 1. Alert Chapter
alert("Hello, this is a message");
alert("This will cause an error"); 
alert("Welcome to my website");
alert("This is an alert box");

// 2. Variables for Strings
var message = "Hello, world!";
alert(message);

var age = 25;
alert(age);

var greeting = "Good morning!";
alert(greeting);

greeting = "Good evening!";
alert(greeting);

var favoriteColor = "blue";
alert("My favorite color is " + favoriteColor);

var age;
age = 25;
alert(age);

// 3. Variables for Numbers
var height = 170;
var newHeight = height + 10;
alert(newHeight);

var num1 = 50;
var num2 = 30;
var sum = num1 + num2;
alert(sum);

var numToBeAdded = 20;
var total = sum + numToBeAdded; 
alert(total);

var price = 120;
var tax = price * 0.10; 
var totalPrice = price + tax;
alert(totalPrice);

// 4. Variables for Strings and User Info
var myAddress = "Karachi";
alert(myAddress);

var userName = "Mehak";
var userEmail = "mehak@example.com";
var userPassword = "securePass234";
alert("Name: " + userName + "\nEmail: " + userEmail + "\nPassword: " + userPassword);

var userAddress = "123 Main Street";
alert(userAddress);

var rose = "Floribundas";
alert(rose);


alert(rose);

// 5. Math expressions: Familiar
var sum1 = 25 + 30;
alert(sum1);

var num1 = 25;
var num2 = 5;
var sum2 = num1 + num2; 
alert(sum2);

var modulusResult = 27 % 4;
alert(modulusResult);

// 6. Math expressions: Unfamiliar operators
let num = 3;
let newNum = num++;
alert("num: " + num); 
alert("newNum: " + newNum); 

let counter = 10;
counter++;
counter++;
alert("Final value of counter: " + counter); 

let points = 20;
points--;
++points;
alert("Final value of points: " + points);

let number1 = 0;
++number1;
++number1;
++number1;
alert("Final value of number: " + number1);

// 7. Math expressions: Eliminating ambiguity
let remainder = 20 % 6;

let expressionValue = (6 + 2) * (5 - 3); 

let finalTotal = 5 + 3 * 2; 

let answer = 10 - 2 + 5 * 3; 

// 8. Prompts
let userNamePrompt = prompt("What is your name?");
alert("Hello, " + userNamePrompt + "!");

let agePrompt = prompt("How old are you?");
if (agePrompt === null) {
    alert("No age provided");
} else {
    alert("You are " + agePrompt + " years old.");
}

let pets = prompt("How many pets do you have?");
if (pets === "") {
    alert("You didn't enter anything.");
}

let numberInput = prompt("Enter a number between 1 and 10");
let number = Number(numberInput); 
let result = number * 2;
alert("The result is: " + result);

let favNum = prompt("What is your favorite number?");
if (favNum === "") {
    favNum = 7;
}
alert("Your favorite number is: " + favNum);

// 9.if statements
let answer1 = prompt("What is the capital of France?");
if (answer1 === "Paris") {
    alert("Correct!");
} else {
    alert("Try again!");
}

let answer2 = prompt("What is the capital of France?");
if (answer2 === "Paris") {
    alert("Correct!");
} else {
    alert("Incorrect, the correct answer is Paris.");
}

let answer3 = prompt("What is the capital of the United Kingdom?");
if (answer3 === "London" || answer3 === "The United Kingdom") {
    alert("Correct!");
} else {
    alert("Incorrect, the correct answer is London.");
}


let score = 0;

let franceAnswer = prompt("What is the capital of France?");
if (franceAnswer === "Paris") {
    score++;
    alert("Correct! Your score is: " + score);
} else {
    alert("Incorrect! Your score is: " + score);
}

let ukAnswer = prompt("What is the capital of the United Kingdom?");
if (ukAnswer === "London" || ukAnswer === "The United Kingdom") {
    score++;
    alert("Correct! Your score is: " + score);
} else {
    alert("Incorrect! Your score is: " + score);
}

let capitalGermany = prompt("What is the capital of Germany?");
let mathAnswer = prompt("What is 10 + 10?");

if (capitalGermany === "Berlin" && mathAnswer === "20") {
    alert("You got both right!");
} else if (capitalGermany === "Berlin" || mathAnswer === "20") {
    alert("You got one correct!");
} else {
    alert("You got both wrong!");
}
