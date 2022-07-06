import React from 'react'
import './App.css'
import { Controller } from './components/Controller'
import { GridBoard } from './components/GridBoard'
import { Header } from './components/Header'
import { useGrid } from './hooks/useGrid'

const App = () => {
  const { grid, toggleCell, resetGrid, isAutoRunning, beginAutoRun, stopAutoRun, shuffleGrid } =
    useGrid({
      size: 20,
      filler: 'dead',
    })

  return (
    <div className="App">
      <Header />
      <Controller
        onReset={resetGrid}
        onAutoRun={beginAutoRun}
        onStopAutoRun={stopAutoRun}
        isAutoRunning={isAutoRunning}
        onShuffle={shuffleGrid}
      />
      <GridBoard states={grid} toggleCell={toggleCell} />
    </div>
  )
}

export default App
