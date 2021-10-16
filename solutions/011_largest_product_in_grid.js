// https://projecteuler.net/problem=11
//
// What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 20×20 grid?

import { getProductOfNumbersInArray, getLargestNumberInArray } from "../utils/numbers.js";

const grid = [
	[ '08', '02', '22', '97', '38', '15', '00', '40', '00', '75', '04', '05', '07', '78', '52', '12', '50', '77', '91', '08' ],
	[ '49', '49', '99', '40', '17', '81', '18', '57', '60', '87', '17', '40', '98', '43', '69', '48', '04', '56', '62', '00' ],
	[ '81', '49', '31', '73', '55', '79', '14', '29', '93', '71', '40', '67', '53', '88', '30', '03', '49', '13', '36', '65' ],
	[ '52', '70', '95', '23', '04', '60', '11', '42', '69', '24', '68', '56', '01', '32', '56', '71', '37', '02', '36', '91' ],
	[ '22', '31', '16', '71', '51', '67', '63', '89', '41', '92', '36', '54', '22', '40', '40', '28', '66', '33', '13', '80' ],
	[ '24', '47', '32', '60', '99', '03', '45', '02', '44', '75', '33', '53', '78', '36', '84', '20', '35', '17', '12', '50' ],
	[ '32', '98', '81', '28', '64', '23', '67', '10', '26', '38', '40', '67', '59', '54', '70', '66', '18', '38', '64', '70' ],
	[ '67', '26', '20', '68', '02', '62', '12', '20', '95', '63', '94', '39', '63', '08', '40', '91', '66', '49', '94', '21' ],
	[ '24', '55', '58', '05', '66', '73', '99', '26', '97', '17', '78', '78', '96', '83', '14', '88', '34', '89', '63', '72' ],
	[ '21', '36', '23', '09', '75', '00', '76', '44', '20', '45', '35', '14', '00', '61', '33', '97', '34', '31', '33', '95' ],
	[ '78', '17', '53', '28', '22', '75', '31', '67', '15', '94', '03', '80', '04', '62', '16', '14', '09', '53', '56', '92' ],
	[ '16', '39', '05', '42', '96', '35', '31', '47', '55', '58', '88', '24', '00', '17', '54', '24', '36', '29', '85', '57' ],
	[ '86', '56', '00', '48', '35', '71', '89', '07', '05', '44', '44', '37', '44', '60', '21', '58', '51', '54', '17', '58' ],
	[ '19', '80', '81', '68', '05', '94', '47', '69', '28', '73', '92', '13', '86', '52', '17', '77', '04', '89', '55', '40' ],
	[ '04', '52', '08', '83', '97', '35', '99', '16', '07', '97', '57', '32', '16', '26', '26', '79', '33', '27', '98', '66' ],
	[ '88', '36', '68', '87', '57', '62', '20', '72', '03', '46', '33', '67', '46', '55', '12', '32', '63', '93', '53', '69' ],
	[ '04', '42', '16', '73', '38', '25', '39', '11', '24', '94', '72', '18', '08', '46', '29', '32', '40', '62', '76', '36' ],
	[ '20', '69', '36', '41', '72', '30', '23', '88', '34', '62', '99', '69', '82', '67', '59', '85', '74', '04', '36', '16' ],
	[ '20', '73', '35', '29', '78', '31', '90', '01', '74', '31', '49', '71', '48', '86', '81', '16', '23', '57', '05', '54' ],
	[ '01', '70', '54', '71', '83', '51', '54', '69', '16', '92', '33', '48', '61', '43', '52', '01', '89', '19', '67', '48' ]
];

const directions = {
    UP: 'up',
    DOWN: 'down',
    LEFT: 'left',
    RIGHT: 'right',
    DIAGONAL: {
        UP: {
            LEFT: 'diagonal.up.left',
            RIGHT: 'diagonal.up.right'
        },
        DOWN: {
            LEFT: 'diagonal.down.left',
            RIGHT: 'diagonal.down.right'
        }
    }
}

function getNumberFromGridCoords (x, y) {
    return Number.parseInt(grid[y][x]);
}

function doesGridPointExist (x, y) {
    const yValid = y > -1 && y < grid.length - 1;
    if (!yValid) return false;
    const xValid = x > -1 && x < grid[y].length - 1;
    return xValid;
}

function getUpwardsAdjacentNumbers (x, y, adjacentNumbersToCount = 3) {
    const lastYCoord = y + adjacentNumbersToCount;
    if ( !doesGridPointExist(x, lastYCoord) ) return -1;

    let adjacentNumbers = [];
    for (let i = 0; i < adjacentNumbersToCount; i++) {
        y--;
        adjacentNumbers.push(getNumberFromGridCoords(x, y));
    }
    return adjacentNumbers;
}

function getDownwardsAdjacentNumbers (x, y, adjacentNumbersToCount = 3) {
    const lastYCoord = y + 3;
    if ( !doesGridPointExist(x, lastYCoord) ) return -1;

    let adjacentNumbers = [];
    for (let i = 0; i < adjacentNumbersToCount; i++) {
        y++;
        adjacentNumbers.push(getNumberFromGridCoords(x, y));
    }
    return adjacentNumbers;    
}

function getLeftwardsAdjacentNumbers (x, y, adjacentNumbersToCount = 3) {
    const lastXCoord = x - adjacentNumbersToCount;
    if ( !doesGridPointExist(lastXCoord, y) ) return -1;

    let adjacentNumbers = [];
    for (let i = 0; i < adjacentNumbersToCount; i++) {
        x--;
        adjacentNumbers.push(getNumberFromGridCoords(x, y));
    }
    return adjacentNumbers;    
}

function getRightwardsAdjacentNumbers (x, y, adjacentNumbersToCount = 3) {
    const lastXCoord = x + adjacentNumbersToCount;
    if ( !doesGridPointExist(lastXCoord, y) ) return -1;

    let adjacentNumbers = [];
    for (let i = 0; i < adjacentNumbersToCount; i++) {
        x++;
        adjacentNumbers.push(getNumberFromGridCoords(x, y));
    }
    return adjacentNumbers;   
}

function getDiagonalUpLeftAdjacentNumbers (x, y, adjacentNumbersToCount = 3) {
    const lastXCoord = x - adjacentNumbersToCount;
    const lastYCoord = y - adjacentNumbersToCount;
    if (!doesGridPointExist(lastXCoord, lastYCoord)) return -1;

    let adjacentNumbers = [];
    while (y > lastYCoord) {
        y--;
        x--;
        adjacentNumbers.push(getNumberFromGridCoords(x, y));
    }
    return adjacentNumbers;
}

function getDiagonalUpRightAdjacentNumbers (x, y, adjacentNumbersToCount = 3) {
    const lastXCoord = x + adjacentNumbersToCount;
    const lastYCoord = y - adjacentNumbersToCount;
    if (!doesGridPointExist(lastXCoord, lastYCoord)) return -1;

    let adjacentNumbers = [];
    while (y > lastYCoord) {
        y--;
        x++;
        adjacentNumbers.push(getNumberFromGridCoords(x, y));
    }
    return adjacentNumbers;
}

function getDiagonalDownLeftAdjacentNumbers (x, y, adjacentNumbersToCount = 3) {
    const lastXCoord = x - adjacentNumbersToCount;
    const lastYCoord = y + adjacentNumbersToCount;
    if (!doesGridPointExist(lastXCoord, lastYCoord)) return -1;

    let adjacentNumbers = [];
    while (y < lastYCoord) {
        y++;
        x--;
        adjacentNumbers.push(getNumberFromGridCoords(x, y));
    }
    return adjacentNumbers;
}

function getDiagonalDownRightAdjacentNumbers (x, y, adjacentNumbersToCount = 3) {
    const lastXCoord = x + adjacentNumbersToCount;
    const lastYCoord = y + adjacentNumbersToCount;
    if (!doesGridPointExist(lastXCoord, lastYCoord)) return -1;

    let adjacentNumbers = [];
    while (y < lastYCoord) {
        y++;
        x++;
        adjacentNumbers.push(getNumberFromGridCoords(x, y));
    }
    return adjacentNumbers;
}

function getAdjacentNumbersInDirection (x, y, direction, adjacentNumbersToCount = 3) {

    const firstNumber = Number.parseInt(getNumberFromGridCoords(x, y));
    if(!firstNumber) return -1;

    switch (direction) {

        case directions.UP:
            return getUpwardsAdjacentNumbers(x, y, adjacentNumbersToCount);

        case directions.DOWN:
            return getDownwardsAdjacentNumbers(x, y, adjacentNumbersToCount);

        case directions.LEFT:
            return getLeftwardsAdjacentNumbers(x, y, adjacentNumbersToCount);

        case directions.RIGHT:
            return getRightwardsAdjacentNumbers(x, y, adjacentNumbersToCount);

        case directions.DIAGONAL.UP.LEFT:
            return getDiagonalUpLeftAdjacentNumbers(x, y, adjacentNumbersToCount);

        case directions.DIAGONAL.UP.RIGHT:
            return getDiagonalUpRightAdjacentNumbers(x, y, adjacentNumbersToCount);
    }

}

function findGreatestProductOfFourAdjacentNumbersInGrid() {

    let products = [];

    // Go left to right across the grid, getting all adjacent sets.
    for ( let y = 0; y < grid.length; y++ ) {

        for ( let x = 0; x < grid[y].length; x++ ) {

            const currentNumber = getNumberFromGridCoords(x, y);

            let leftwardsNumbers = getLeftwardsAdjacentNumbers(x, y);
            if (!(leftwardsNumbers === -1)) {
                leftwardsNumbers.unshift(currentNumber);
                products.push(getProductOfNumbersInArray(leftwardsNumbers)); 
            }
           
            let rightwardsNumbers = getRightwardsAdjacentNumbers(x, y);
            if (!(rightwardsNumbers === -1)) {
                rightwardsNumbers.unshift(currentNumber);
                products.push(getProductOfNumbersInArray(rightwardsNumbers)); 
            }

            let downLeftwardsNumbers = getDiagonalDownLeftAdjacentNumbers(x, y);
            if (!(downLeftwardsNumbers === -1)) {
                downLeftwardsNumbers.unshift(currentNumber);
                products.push(getProductOfNumbersInArray(downLeftwardsNumbers)); 
            }

            let downRightwardsNumbers = getDiagonalDownRightAdjacentNumbers(x, y);
            if (!(downRightwardsNumbers === -1)) {
                downRightwardsNumbers.unshift(currentNumber);
                products.push(getProductOfNumbersInArray(downRightwardsNumbers)); 
            }

        }

    }

    return getLargestNumberInArray(products);

}

console.log(findGreatestProductOfFourAdjacentNumbersInGrid());