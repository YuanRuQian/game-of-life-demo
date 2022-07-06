import { useState } from 'react'
import { CellPosition } from '../utils/cell'
import { createGrid, GridStates, GridCreatorPros, getRandomGridStates } from '../utils/grid'
import { computeNextGridStates } from '../utils/rules'
import { useInterval } from './useInterval'

export const useGrid = ({ size, filler }: GridCreatorPros) => {
  const initialGrid = createGrid({ size, filler })
  const [grid, setGrid] = useState<GridStates>(initialGrid)

  const toggleCell = ({ row, col }: CellPosition) => {
    grid[row][col] = grid[row][col] === 'alive' ? 'dead' : 'alive'
    setGrid([...grid])
  }

  const computeNextStates = () => {
    const nextGrid = computeNextGridStates(grid)
    setGrid(nextGrid)
  }

  const [isAutoRunning, setIsAutoRunning] = useState<boolean>(false)

  const stopRunning = useInterval(computeNextStates, isAutoRunning ? 200 : -1)

  const beginAutoRun = () => setIsAutoRunning(true)

  const stopAutoRun = () => {
    stopRunning()
    setIsAutoRunning(false)
  }

  const resetGrid = () => {
    stopAutoRun()
    setGrid(initialGrid)
  }

  const shuffleGrid = () => {
    stopAutoRun()
    const randomGridStates = getRandomGridStates(grid)
    setGrid(randomGridStates)
    beginAutoRun()
  }

  return {
    grid,
    toggleCell,
    resetGrid,
    beginAutoRun,
    stopAutoRun,
    isAutoRunning,
    shuffleGrid,
  }
}
