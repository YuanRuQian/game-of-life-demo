import { CellState } from './cell'
import { isFunction, range } from './tool'

export type GridCreatorPros = {
  size: number
  filler: ((index: number) => CellState) | CellState
}

export type GridStates = CellState[][]

export const createGrid = ({ size, filler }: GridCreatorPros): GridStates => {
  const fillerFn = isFunction(filler) ? filler : () => filler
  return range(size).map((_) => range(size).map(fillerFn))
}

export const getRandomGridStates = (grid: GridStates): GridStates =>
  grid.map((row) => row.map((_) => (Math.random() > 0.5 ? 'alive' : 'dead')))
