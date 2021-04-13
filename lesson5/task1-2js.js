'use strict';
const settings = {
    rowCount: 9,
    colCount: 9,
    blackCellColor: '#000',
    letterColors: '#ff0000',
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    numbers: [1, 2, 3, 4, 5, 6, 7, 8],
};

const game = {
    settings,
    containerElement: null,
    cellElements: [],

    run() {
        this.init();
        this.render();
        this.placeFigures();
    },

    init() {
        
        this.containerElement = document.getElementsByClassName('chessboard')[0];
        console.log(this.containerElement)
        this.initCells();
    },

    initCells() {
        this.containerElement.innerHTML = '';
        this.cellElements = [];

        for (let row = 0; row < this.settings.rowCount; row++) {
            const trElem = document.createElement('tr');
            this.containerElement.appendChild(trElem);

            for (let col = 0; col < this.settings.colCount; col++) {
                const cell = document.createElement('td');
                trElem.appendChild(cell);

                this.cellElements.push(cell);
            }
        }
    },


    render() {

        for (let row = 0; row < this.settings.rowCount; row++) {
            const rowTable = document.querySelector(`tr:nth-child(${row + 1})`);

            for (let col = 0; col < this.settings.colCount; col++) {
                const cell = rowTable.querySelector(`td:nth-child(${col + 1})`)
                if (row > 0 && col > 0)
                    if (row % 2 !== 0){
                        if (col % 2 !== 0) {cell.style.backgroundColor =  this.settings.blackCellColor;}
                        }   
                    else {
                        if (col % 2 === 0) {cell.style.backgroundColor =  this.settings.blackCellColor;}
                    }
                
            }
            
        }

        for (let index = 1; index < this.settings.colCount; index++) {
            this.cellElements[index].innerHTML = this.settings.letters[index - 1]
        }

        for (let index = 9, j = 0; index < this.cellElements.length; index += 9, j++) {
            this.cellElements[index].innerHTML = this.settings.numbers[j];
        }

    },

    placeFigures() {
        for (let index = 1; index < this.cellElements.length; index++) {
            if (index === 10 || index === 17 || index === 73 || index === 80) {
                this.cellElements[index].innerHTML = 'Л';
                this.cellElements[index].style.color = this.settings.letterColors;
            }

            if ((18 < index && index < 27) || (63 < index && index < 72)) {
                this.cellElements[index].innerHTML = 'П';
                this.cellElements[index].style.color = this.settings.letterColors;
            }

            if (index === 11 || index === 16 || index === 74 || index === 79) {
                this.cellElements[index].innerHTML = 'К';
                this.cellElements[index].style.color = this.settings.letterColors;
            }

            if (index === 12 || index === 15 || index === 75 || index === 78) {
                this.cellElements[index].innerHTML = 'С';
                this.cellElements[index].style.color = this.settings.letterColors;
            }
            
            if (index === 13 || index === 76 ) {
                this.cellElements[index].innerHTML = 'Кж';
                this.cellElements[index].style.color = this.settings.letterColors;
            }
            
            if (index === 14 || index === 77 ) {
                this.cellElements[index].innerHTML = 'Км';
                this.cellElements[index].style.color = this.settings.letterColors;
            }
        }
    },

};

game.run();