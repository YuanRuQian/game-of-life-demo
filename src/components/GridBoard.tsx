import { Grid, IconButton, Tooltip } from '@mui/material'
import React from 'react'
import { CellPosition, CellState, getCellColor } from '../utils/cell'
import { GridStates } from '../utils/grid'
import CellIcon from '@mui/icons-material/SquareRounded'
import { WandEmojiCursorStyle } from '../utils/cursor'

type CellProps = {
  position: CellPosition
  state: CellState
  toggleCell: ({ row, col }: CellPosition) => void
}

const Cell = ({ state, position, toggleCell }: CellProps) => {
  const cellBackgroundColor = getCellColor({ state })
  const handleClick = () => toggleCell(position)

  const tooltipTitle = `Click to make the cell ${state === 'alive' ? 'dead' : 'alive'}`

  return (
    <Grid item>
      <Tooltip title={tooltipTitle} arrow>
        <IconButton
          style={{ padding: 0, ...WandEmojiCursorStyle }}
          aria-label="fingerprint"
          color={cellBackgroundColor}
          onClick={handleClick}
          size="small"
        >
          <CellIcon />
        </IconButton>
      </Tooltip>
    </Grid>
  )
}

type RowProps = {
  rowIndex: number
  states: CellState[]
  toggleCell: ({ row, col }: CellPosition) => void
}

const Row = ({ rowIndex, states, toggleCell }: RowProps) => (
  <Grid container item justifyContent="center">
    {states.map((state, colIndex) => (
      <Cell
        key={`${rowIndex},${colIndex}`}
        state={state}
        position={{ row: rowIndex, col: colIndex }}
        toggleCell={toggleCell}
      />
    ))}
  </Grid>
)

type GridBoardProps = {
  states: GridStates
  toggleCell: ({ row, col }: CellPosition) => void
}

export const GridBoard = ({ states, toggleCell }: GridBoardProps) => {
  return (
    <Grid container>
      {states.map((rowStates: CellState[], rowIndex: number) => (
        <Row key={`${rowIndex}`} rowIndex={rowIndex} states={rowStates} toggleCell={toggleCell} />
      ))}
    </Grid>
  )
}
