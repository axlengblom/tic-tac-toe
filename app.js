let turn = 1;
let win = false;
let xWins = 0;
let oWins = 0;
winnerSymbol = "";

document.getElementById("xWins").innerHTML = xWins;
document.getElementById("oWins").innerHTML = oWins;

function createGameBoard() {
  for (let i = 1; i < 10; i++) {
    document
      .getElementById("gameTable")
      .insertAdjacentHTML(
        "beforeend",
        `<div id='block${i}' class='block' onclick='gameFunction(this.id)'></div>`
      );
  }
}

function isOdd(num) {
  return num % 2;
}

function gameFunction(id) {
  let selectedBlock = document.getElementById(id);
  let t = isOdd(turn);
  // console.log(t);
  if (selectedBlock.innerHTML == "") {
    if (t == true) {
      // console.log(true);
      // console.log(id);
      selectedBlock.insertAdjacentHTML("beforeend", "<p>O</p>");
      turn++;
    } else {
      // console.log(false);
      // console.log(id);
      selectedBlock.insertAdjacentHTML("beforeend", "<p>X</p>");
      turn++;
    }
    console.log(turn);
  }

  checkForThree();
  if (win == true) {
    document.getElementById(
      "gameTable"
    ).innerHTML = `<div class = 'win'><p>${winnerSymbol} Wins!</p></div>`;
    if (winnerSymbol == "X") {
      xWins++;
      console.log("X wins: " + xWins);
      document.getElementById("xWins").innerHTML = xWins;
    } else if (winnerSymbol == "O") {
      oWins++;
      console.log("O wins: " + oWins);
      document.getElementById("oWins").innerHTML = oWins;
    }
  } else if (turn == 10 && win == false) {
    document.getElementById(
      "gameTable"
    ).innerHTML = `<div class = 'tie'><p>Tie!</p></div>`;
  }
}

function reset() {
  let blocks = document.querySelectorAll(".block");
  blocks.forEach((block) => {
    block.innerHTML = "";
  });
  turn = 1;
  if (document.getElementById("gameTable").innerHTML != "") {
    document.getElementById("gameTable").innerHTML = "";
    win = false;
    createGameBoard();
  }
}

function checkForThree() {
  let block1 = document.getElementById("block1");
  let block2 = document.getElementById("block2");
  let block3 = document.getElementById("block3");
  let block4 = document.getElementById("block4");
  let block5 = document.getElementById("block5");
  let block6 = document.getElementById("block6");
  let block7 = document.getElementById("block7");
  let block8 = document.getElementById("block8");
  let block9 = document.getElementById("block9");
  if (
    block1.innerHTML == block2.innerHTML &&
    block1.innerHTML == block3.innerHTML &&
    block2.innerHTML != ""
  ) {
    getInsides("block2");
  } else if (
    block1.innerHTML == block4.innerHTML &&
    block1.innerHTML == block7.innerHTML &&
    block4.innerHTML != ""
  ) {
    getInsides("block4");
  } else if (
    block1.innerHTML == block5.innerHTML &&
    block1.innerHTML == block9.innerHTML &&
    block5.innerHTML != ""
  ) {
    getInsides("block5");
  } else if (
    block2.innerHTML == block5.innerHTML &&
    block2.innerHTML == block8.innerHTML &&
    block5.innerHTML != ""
  ) {
    getInsides("block5");
  } else if (
    block3.innerHTML == block6.innerHTML &&
    block3.innerHTML == block9.innerHTML &&
    block6.innerHTML != ""
  ) {
    getInsides("block6");
  } else if (
    block4.innerHTML == block5.innerHTML &&
    block4.innerHTML == block6.innerHTML &&
    block5.innerHTML != ""
  ) {
    getInsides("block5");
  } else if (
    block7.innerHTML == block5.innerHTML &&
    block7.innerHTML == block3.innerHTML &&
    block5.innerHTML != ""
  ) {
    getInsides("block5");
  } else if (
    block7.innerHTML == block8.innerHTML &&
    block7.innerHTML == block9.innerHTML &&
    block8.innerHTML != ""
  ) {
    getInsides("block8");
  }
}

function getInsides(block) {
  let winner = JSON.stringify(document.getElementById(block).innerHTML);
  winnerSymbol = winner.charAt(4);
  // console.log(winnerSymbol);
  win = true;
  return winnerSymbol;
}

function resetScore() {
  xWins = 0;
  oWins = 0;
  document.getElementById("xWins").innerHTML = xWins;
  document.getElementById("oWins").innerHTML = oWins;
}

createGameBoard();
