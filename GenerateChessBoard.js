"use strict";

const chessBoard = {
    containElement: null,
    countLine: 9,
    countCell: 9,
    numbersOfLine: ["", 8, 7, 6, 5, 4, 3, 2, 1],
    letterOfCell: ["", "A", "B", "C", "D", "E", "F", "G", "H"],

    getElement() {
        let $board = document.createElement("div");
        $board.className = "board";
        let $tagBody = document.querySelector("body");
        $tagBody.appendChild($board);
        this.containElement = $board;
        this.getCountLine();
    },

    getCountLine() {
        let $Line = document.querySelector(".board");
        for (let line = 0; line < this.countLine || line < this.numbersOfLine.length; line++) {
            let $newLineDiv = document.createElement("div");
            $newLineDiv.className = "boardLine";
            $Line.appendChild($newLineDiv);
            for (let cell = 0; cell < this.countCell || cell < this.letterOfCell.length; cell++) {
                let $newCell = document.createElement("div");
                $newCell.className = "boardCell";
                if (line == 0 && cell !== 0) {
                    $newCell.innerHTML = this.letterOfCell[cell];
                } else if (cell == 0) {
                    $newCell.innerHTML = this.numbersOfLine[line];
                }
                $newLineDiv.appendChild($newCell);
            }
        }
    }


};


chessBoard.getElement();
