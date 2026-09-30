let player1Number = 0;
let player2Number = 0;

let player1Choice = "";
let player2Choice = "";

function selectNumber(player, number) {
    if (player === 1) {
        player1Number = number;
        document.getElementById("player1Selected").innerText =
            "Selected Number: " + number;
    } else {
        player2Number = number;
        document.getElementById("player2Selected").innerText =
            "Selected Number: " + number;
    }
}

function selectChoice(player, choice) {
    if (player === 1) {
        player1Choice = choice;
        document.getElementById("player1Choice").innerText =
            "Choice: " + choice;
    } else {
        player2Choice = choice;
        document.getElementById("player2Choice").innerText =
            "Choice: " + choice;
    }
}

function playGame() {

    if (player1Number === 0 || player2Number === 0) {
        document.getElementById("result").innerText =
            "Both players must select a number!";
        return;
    }

    if (player1Choice === "" || player2Choice === "") {
        document.getElementById("result").innerText =
            "Both players must choose Odd or Even!";
        return;
    }

    let sum = player1Number + player2Number;

    let resultType;

    if (sum % 2 === 0) {
        resultType = "Even";
    } else {
        resultType = "Odd";
    }

    let winner;

    if (player1Choice === resultType && player2Choice === resultType) {
        winner = "Both players chose " + resultType + ". No winner!";
    } 
    else if (player1Choice === resultType) {
        winner = "Player 1 Wins!";
    } 
    else if (player2Choice === resultType) {
        winner = "Player 2 Wins!";
    } 
    else {
        winner = "No winner!";
    }

    document.getElementById("result").innerText =
        player1Number + " + " + player2Number +
        " = " + sum + " (" + resultType + ")\n" +
        winner;
}