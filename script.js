"use strict"

// Like the f-string
// 'Some random text ${}'


// European table
// 18 black, 18 red, 1 green

// betting on a single number gives you x35
// betting on a color giv


// spinning wheel with 37 numbers
// before every turn a bet has to be placed
// bets can be placed on one number or different numbers


let numbers = []

let colors = ["Green"]

let bank_account = parseInt(prompt("How much are you taking to the casino today?:"));

// Problem with creating a while loop to avoid user input errors #####
// Tried to avoid everything but numbers as input ######

// I found out about the global search that looks for the numbers between 0 and 9 in my
// bank account variable and then checks if the number is greater than or equal to 100
// if yes, the loop breaks and the rest of the code executes, otherwise it will prompt again

while(true) {
    if (/^[0-9.,]+$/.test(bank_account)) {
        if(bank_account >= 100){
            break;
        }
        else {
            bank_account = parseInt(prompt("How much are you taking to the casino today?:"));
        }
}
    else {
    bank_account = parseInt(prompt("How much are you taking to the casino today?:"));
}
}

let i = 0

// Creats 37 numbers and pushes it into the numbers array from 0 to 37

while (i < 37) {
    numbers.push(i)
    i++
}

// Pushes 18x black and 18x red to the colors array which looks like this Black, Red, Black, Red etc...

for (let i = 0; i < 36; i++) {
    colors.push("black")
    colors.push("red")
    i++
}

let generateRandomNumber = Math.floor(Math.random() * numbers.length)

// Function that decides how much to add to your bank account 

function multipleBet(a) {
    if (a == 2) {
        bank_account += betAmount * 17
        return bank_account
        }
    else if (a == 3) {
        bank_account += betAmount * 11
        return bank_account
        }
    else if (a == 4) {
        bank_account += betAmount * 8
        return bank_account
        }
    else if (a == 6) {
        bank_account += betAmount * 5
        return bank_account
        }
    else if (a == 12) {
        bank_account += betAmount * 2
        return bank_account
        }
    else if (a == 18) {
        bank_account += betAmount * 1
        return bank_account
        }
}

// Function to find a common number between two arrays

function findCommonNumber(array1, array2) {
    for(let i = 0; i < array1.length; i++) {
        for(let j = 0; j < array2.length; j++) {
            if(array1[i] === array2[j]) {
                return true;
            }
        }
    }
    return false;
}

let betAmount = parseInt(prompt("How much would you like to bet?"))

// Global search to check if the bet amount is a number and not a symbol or letter.
// If statement inside to check that bet amount does not exceed the amount the player has in his bank account

while(true) {
    if (/^[0-9.,]+$/.test(betAmount)) {
        if(betAmount <= bank_account){
            break;
        }
        else {
            betAmount = parseInt(prompt("How much would you like to bet?"))
        }
}
    else {
    betAmount = parseInt(prompt("How much would you like to bet?"))
}
}

let decision = "v"

let chosenNumbers = []

let multipleRandomNumbers = []

// Makes sures the player selects only the letters "s", "m" r "c" to avoid errors and
// executes code according to the chosen letter

while (decision != "s" || decision != "m" || decision != "c") {
    let decision = prompt("What do you want to bet on? Please type 's' for single number 'm' for multiple numbers or c for 'colors'").toLowerCase()
    if(decision == "s") {
        let guessNumber = parseInt(prompt("What number do you want to bet on?"))
        while(true) {
            if (/^[0-9.,]+$/.test(guessNumber)) {
                if(guessNumber <= 37){
                    break;
                }
                else {
                    guessNumber = parseInt(prompt("How much would you like to bet?"))
                }
            }
            else {
                guessNumber = parseInt(prompt("How much would you like to bet?"))
            }
        }
        generateRandomNumber == guessNumber? bank_account += betAmount * 36: bank_account -= betAmount;
        break;
    }
    else if (decision == "m") {
        let amountOfNumbers = parseInt(prompt("How many numbers would you like to bet on? Choose from 2 to 6, 12 or 18"))
        // Makes the user enter as many numbers as chosen 
        for (let i = 0; i < amountOfNumbers; i++) {


            // INSERT A WHILE LOOP TO MAKE SURE THE PLAYER DOES NOT ENTER ANYTHING ELSE BUT NUMBERS
            // BETWEEN 0 AND 37

            let createRandomNumbers = parseInt(prompt(`Please enter the ${amountOfNumbers} numbers you want to bet on between 0 and 37`))
            chosenNumbers[i] = createRandomNumbers



        }
        // Generate as many random numbers as the amount of numbers the user wanted to bet on
        for (let i = 0; i < chosenNumbers.length; i++) {
            multipleRandomNumbers[i] = Math.floor(Math.random() * numbers.length)
        }
        // Check if the users chosen numbers have any numbers in common with the random generated numbers
        findCommonNumber(chosenNumbers, multipleRandomNumbers) == true? multipleBet(amountOfNumbers):bank_account -= betAmount
        break;
    }

    else if (decision == "c") {
        let colorBet = prompt("Which color would you like to bet on?")
        let randomColor = colors[Math.floor(Math.random() * colors.length)]
        colorBet == randomColor?  multipleBet(18):bank_account -= betAmount;
        break;
    }
}
// Changes the bank account value according to the won or loss just made
document.getElementById("bank-account").innerHTML = "Bank account: " + bank_account;


// Refactor code, insert many while loops to avoid the user creating errors











































































