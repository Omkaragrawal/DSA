const solveMinesweeper = (arrayOfArray = [
    []
]) => {
    const solvedMatrix = [];
    const checkLeft = (row, column) => {
        return (column > 0 && !!arrayOfArray[row][column - 1]);
    }
    const checkRight = (row, column) => {
        return (column < arrayOfArray[row].length - 1 && !!arrayOfArray[row][column + 1]);
    }
    const checkTop = (row, column) => {
        return (row > 0 && !!arrayOfArray[row - 1][column])
    }
    const checkBottom = (row, column) => {
        return (row < arrayOfArray.length - 1 && !!arrayOfArray[row + 1][column])
    }
    const checkTopLeft = (row, column) => {
        return (column > 0 && row > 0 && !!arrayOfArray[row - 1][column - 1]);
    }
    const checkTopRight = (row, column) => {
        return (row > 0 && arrayOfArray[row - 1].length - 1 && !!arrayOfArray[row - 1][column + 1])
    }
    const checkBottomLeft = (row, column) => {
        return (row < arrayOfArray.length - 1 && column > 0 && !!arrayOfArray[row + 1][column - 1])
    }
    const checkBottomRight = (row, column) => {
        return (row < arrayOfArray.length - 1 && column < arrayOfArray[row + 1].length - 1 && !!arrayOfArray[row + 1][column + 1]);
    }


    const putNumber = (row, column) => {
        let count = 0;
        count += (checkTopLeft(row, column)) ? 1 : 0;
        count += (checkTop(row, column)) ? 1 : 0;
        count += (checkTopRight(row, column)) ? 1 : 0;
        count += (checkLeft(row, column)) ? 1 : 0;
        count += (checkRight(row, column)) ? 1 : 0;
        count += (checkBottomLeft(row, column)) ? 1 : 0;
        count += (checkBottom(row, column)) ? 1 : 0;
        count += (checkBottomRight(row, column)) ? 1 : 0;
        return count
    };
    for (let y = 0; y < arrayOfArray.length; y++) {
        solvedMatrix[y] = [];
        for (let x = 0; x < arrayOfArray[y].length; x++) {
            if (!!arrayOfArray[y][x]) {
                solvedMatrix[y][x] = arrayOfArray[y][x];
            } else {
                solvedMatrix[y][x] = putNumber(y, x);
            }
        }
    }
    return solvedMatrix;
};

const mineField = [
    ['*', '*', '', ''],
    ['*', '*', '', ''],
    ['', '', '*', ''],
    ['', '', '', '']
];

console.table(solveMinesweeper(mineField));