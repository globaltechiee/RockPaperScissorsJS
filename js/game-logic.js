// All code should be written in this file.

let playerOneMoveOneType,
    playerOneMoveTwoType,
    playerOneMoveThreeType,
    playerTwoMoveOneType,
    playerTwoMoveTwoType,
    playerTwoMoveThreeType,
    playerOneMoveOneValue,
    playerOneMoveTwoValue,
    playerOneMoveThreeValue,
    playerTwoMoveOneValue,
    playerTwoMoveTwoValue,
    playerTwoMoveThreeValue
// create 'setPlayerMoves()' and pass in para,
// player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {

    // Creat a failfast
    if (!moveOneType || !moveOneValue || !moveTwoType, !moveTwoValue || !moveThreeType || !moveThreeValue) {
        return;
    }

    if (!isValidMoveType(moveOneType) || !isValidMoveType(moveTwoType) || !isValidMoveType(moveThreeType)) {
        return;
    }
    if (!isValidMoveValue(moveOneValue) || !isValidMoveValue(moveTwoValue) || !isValidMoveValue(moveThreeValue)) {
        return;
    }
    if ((moveOneValue + moveTwoValue + moveThreeValue) > 99) {
        return;
    }
}

// create helper function isValidMoveType() with para. moveType
// to validate value of work, paper, or scissors
