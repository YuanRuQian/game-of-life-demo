import { Typography } from '@mui/material'
import React from 'react'

export const GameIntroduction = () => (
  <>
    <Typography variant="h4" component="div" gutterBottom>
      🎮 Game of Life 🌱
    </Typography>
    <Typography variant="body1" component="div" gutterBottom>
      The Game of Life, also known simply as Life, is a cellular automaton devised by the British
      mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution
      is determined by its initial state, requiring no further input. One interacts with the Game of
      Life by creating an initial configuration and observing how it evolves. It is Turing complete
      and can simulate a universal constructor or any other Turing machine.
    </Typography>
    <Typography style={{ marginTop: '1rem' }} variant="h6" component="div" gutterBottom>
      Rules
    </Typography>
    <Typography variant="body1" component="div" gutterBottom>
      <ol>
        <li>Any live cell with fewer than two live neighbors dies, as if by underpopulation.</li>
        <li>Any live cell with two or three live neighbors lives on to the next generation.</li>
        <li>Any live cell with more than three live neighbors dies, as if by overpopulation.</li>
        <li>
          Any dead cell with exactly three live neighbors becomes a live cell, as if by
          reproduction.
        </li>
      </ol>
    </Typography>
  </>
)
