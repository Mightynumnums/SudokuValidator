const expect = require('chai').expect
const {
  getRow,
  getColumn,
  getSection,
  includes1to9,
  sudokuIsValid
} = require('./sudoku.js')


const board = [
      [ 8,9,5,   7,4,2,   1,3,6 ],
      [ 2,7,1,   9,6,3,   4,8,5 ],
      [ 4,6,3,   5,8,1,   7,9,2 ],

      [ 9,3,4,   6,1,7,   2,5,8 ],
      [ 5,1,7,   2,3,8,   9,6,4 ],
      [ 6,8,2,   4,5,9,   3,7,1 ],

      [ 1,5,9,   8,7,4,   6,2,3 ],
      [ 7,4,6,   3,2,5,   8,1,9 ],
      [ 3,2,8,   1,9,6,   5,4,7 ]];

let puzzle = [
      [ 8,9,5,7,4,2,1,3,6 ],
      [ 8,7,1,9,6,3,4,8,5 ],
      [ 4,6,3,5,8,1,7,9,2 ],
      [ 9,3,4,6,1,7,2,5,8 ],
      [ 5,1,7,2,3,8,9,6,4 ],
      [ 6,8,2,4,5,9,3,7,1 ],
      [ 1,5,9,8,7,4,6,2,3 ],
      [ 7,4,6,3,2,5,8,1,9 ],
      [ 3,2,8,1,9,6,5,4,7 ]];

describe('Sudoku Simple Validator', () => {

  describe('It correctly returns a row', () => {
    describe('getRow function', () => {
      it('getRow is a function', () => {
        expect(typeof getRow).to.eql('function')
      })
      it('returns a row of values, given a puzzle board', () => {
        const rowNum = 8
        const row = getRow(board, rowNum)
        expect(row).to.eql([3,2,8,1,9,6,5,4,7])
      })
      it('returns an array', () => {
        const rowNum = 0
        const row = getRow(board, rowNum)
        expect(Array.isArray(row)).to.eql(true)
      })

      it('returns a row of values, given a puzzle board', () => {
        const rowNum = 0
        const row = getRow(board, rowNum)
        expect(row).to.eql([8, 9, 5, 7, 4, 2, 1, 3, 6])
      })
    })
  })

  describe('It correctly returns a column', () => {
    describe('getColumn function', () => {
      it('getColumn is a function', () => {
        expect(typeof getColumn).to.eql('function')
      })
      it('returns an array', () => {
        const colNum = 6
        const col = getColumn(board, colNum)
        expect(Array.isArray(col)).to.eql(true)
      })
      it('returns a column of values, given a puzzle board', () => {
        const colNum = 0
        const col = getColumn(board, colNum)
        expect(col).to.eql([8, 2, 4, 9, 5, 6, 1, 7, 3])
      })
    })
  })

  describe('It correctly returns a section', () => {
    describe('getSection is a function', () => {
      it('getSection is a function', () => {
        expect(typeof getSection).to.eql('function')
      })
      it('returns an array', () => {
        const xCoord = 0
        const yCoord = 0
        const section = getSection(board, xCoord, yCoord)
        expect(Array.isArray(section)).to.eql(true)
      })
      it('returns a section of values, given a puzzle board, a x coordinate and a y coordinate', () => {
        const xCoord = 0
        const yCoord = 0
        const section = getSection(board, xCoord, yCoord)
        expect(section).to.eql([ 8, 9, 5, 2, 7, 1, 4, 6, 3])
      })
      it('returns a section of values, given a puzzle board, a x coordinate and a y coordinate', () => {
        const xCoord = 1
        const yCoord = 0
        const section = getSection(board, xCoord, yCoord)
        expect(section).to.eql([ 7, 4, 2, 9, 6, 3, 5, 8, 1])
      })
      it('has a correct length of 9 elements in the returned array', () => {
        const xCoord = 1
        const yCoord = 0
        const section = getSection(board, xCoord, yCoord)
        expect(section.length).to.eql(9)
      })
    })
  })

  describe('It correctly evaluates if the give array, has all of the values 1 - 9 without repeats or numbers missing', () => {
    describe('includes1to9', () => {
      it('includes1to0 is a function', () => {
        expect(typeof includes1to9).to.eql('function')
      })
      it('returns a boolean value when checks if the section has all values 1-9', () => {
        const section = [1,2,5,4,6,7,9,3,8]
        const result = includes1to9(section)
        expect(typeof result).to.eql('boolean')
      })
      it('returns a boolean value when checks if the section has all values 1-9', () => {
        const section = [1,2,5,4,6,7,9,9,8]
        const result = includes1to9(section)
        expect(typeof result).to.eql('boolean')
      })
      it('returns true if section has all values 1-9 with no repeats', () => {
        const section = [1,2,5,4,6,7,9,3,8]
        const result = includes1to9(section)
        expect(result).to.eql(true)
      })
      it('returns true if section has all values 1-9 with no repeats', () => {
        const section = [1,2,5,4,6,7,9,9,8]
        const result = includes1to9(section)
        expect(result).to.eql(false)
      })
      it('returns true if section has all values 1-9 with no repeats', () => {
        const section = [1,2,5,4,6,8]
        const result = includes1to9(section)
        expect(result).to.eql(false)
      })
    })
  })

  describe('It correctly evaluates if SUDOKU is valid', () => {
    describe('sudokuIsValid', () => {
      it('sudokuIsValid is a function', () => {
        expect(typeof sudokuIsValid).to.eql('function')
      })
      it('returns a boolean value', () => {
        const isValid = sudokuIsValid(board)
        expect(typeof isValid).to.eql('boolean')
      })
      it('returns a boolean value', () => {
        const isValid = sudokuIsValid(puzzle)
        expect(typeof isValid).to.eql('boolean')
      })
      it('returns a true if the board is valid', () => {
        const isValid = sudokuIsValid(board)
        expect(isValid).to.eql(true)
      })
      it('returns a true if the board is valid', () => {
        const isValid = sudokuIsValid(puzzle)
        expect(isValid).to.eql(false)
      })
    })
  })

})