let winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let playerTurn = 1;
let boxes = document.querySelectorAll('.box');
let winner = document.getElementById('playerWin');
let playerTurnSpan = document.getElementById('playerTurn');


boxes.forEach((box)=>{
    box.addEventListener('click', ()=>{
        if (playerTurn == 1) {
            box.innerText = "O";
            playerTurn = 2;
        } else {
            box.innerText = "X";
            playerTurn = 1;
        }
        box.disabled = true;
        checkWinner();
    });
});


function checkWinner() {
    for (let winningPattern of winningPatterns){
        let pos1 = boxes[winningPattern[0]].innerText;
        let pos2 = boxes[winningPattern[1]].innerText;
        let pos3 = boxes[winningPattern[2]].innerText;


        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos1 === pos3 && pos2 === pos3) {
                if (pos1 === "O") {
                    winner.innerText = "O is winner";
                } else{
                    winner.innerText = "X is winner";
                }
                boxes.forEach((box) => {
                    box.disabled = true;
                });
            }
        }
    }
}

function restart() {
    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerText = "";
        winner.innerText = "";
    });
}