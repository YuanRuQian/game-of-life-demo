import { CellColor } from './color'

export type CellState = 'alive' | 'dead'

export type CellPosition = {
  row: number
  col: number
}

export type CellColorConfig = {
  alive: CellColor
  dead: CellColor
}

const DefaultColorConfig: CellColorConfig = {
  alive: 'warning',
  dead: 'inherit',
}

type CellColorGetterProps = {
  state: CellState
  colorConfig?: CellColorConfig
}

export const getCellColor = ({ state, colorConfig }: CellColorGetterProps) =>
  (colorConfig || DefaultColorConfig)[state]
