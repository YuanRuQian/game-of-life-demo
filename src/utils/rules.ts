// Rules:
// Any live cell with fewer than two live neighbors dies, as if by under population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by overpopulation.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

import { CellPosition, CellState } from './cell'
import { GridStates } from './grid'

export const getCellStateNextRound = (state: CellState, neighborCount: number): CellState => {
  const isAliveNextRound = state === 'alive' ? [2, 3].includes(neighborCount) : neighborCount === 3
  return isAliveNextRound ? 'alive' : 'dead'
}

const countNeighbors = (gridStates: GridStates, position: CellPosition) => {
  const gridSize = gridStates.length
  const iterators = [-1, 0, 1]
  let count = 0
  for (const x of iterators)
    for (const y of iterators) {
      if (x === 0 && y === 0) continue
      const { row, col } = position
      const nx = row + x
      const ny = col + y
      if (nx < 0 || nx === gridSize || ny < 0 || ny === gridSize) continue
      if (gridStates[nx][ny] === 'alive') count += 1
    }
  return count
}

export const computeNextGridStates = (gridStates: GridStates): GridStates =>
  gridStates.map((rowStates, row) =>
    rowStates.map((colState, col) =>
      getCellStateNextRound(colState, countNeighbors(gridStates, { row, col }))
    )
  )
