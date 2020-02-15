
//Checks to see that each Row has numbers 1-9 with no repeats

const getRow = (puzzle, rowNum) => {
  return puzzle[rowNum]
}

//Checks to see that each column has numbers 1-9 with no repeats

const getColumn = (puzzle, colNum) => {
  let colArr = []
  for (let i = 0; i < puzzle.length; i++) {
    colArr.push(puzzle[i][colNum])
  }
  return colArr
}

function getSection(puzzle, xCoord, yCoord) {
  let section = []
  xCoord  *= 3
  yCoord *= 3

  for (let i = yCoord; i < (yCoord + 3); i++) {
    for (let j = xCoord ; j < (xCoord + 3); j++) {
      section.push(puzzle[i][j])
    }
  }
  return section
}

// Check to see that each section (row, col or section, include all nums 1-9)

function includes1to9(section) {
  let val = false
  for( let i = 1; i <= section.length; i++) {
    if (section.indexOf(i) === -1) {
      return val
    }
  }
  return !val
}

//Check to see that the entire sudoku is valid, IE each row, col, and section all have numbers 1-9 with no repeats

function sudokuIsValid(puzzle) {
	let checksArr = []
	for (let i = 0; i < 9; i++) {
		checksArr.push(getRow(puzzle, i))
		checksArr.push(getColumn(puzzle, i))
	}
	 for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      checksArr.push(getSection(puzzle, i, j));
    }
  }
	for(let i = 0; i < checksArr.length; i++) {
    if(!includes1to9(checksArr[i])) {
			 return false;
		}
  }
	return true
}


//sudokuIsValid(puzzle);
// => true


//sudokuIsValid(p8zzle);
// => false


module.exports = {
  getRow,
  getColumn,
  getSection,
  includes1to9,
  sudokuIsValid
}