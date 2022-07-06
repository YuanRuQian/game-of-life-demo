import { Box, Button, Grid } from '@mui/material'
import React, { ReactNode } from 'react'
import ResetIcon from '@mui/icons-material/RestartAlt'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import RunIcon from '@mui/icons-material/DirectionsRun'
import StopIcon from '@mui/icons-material/Cancel'
import { ButtonColor } from '../utils/color'
import { WrenchEmojiCursorStyle } from '../utils/cursor'

type ControllerButtonProps = {
  icon: ReactNode
  text: string
  onClick: () => void
  color: ButtonColor
}

const ControllerButton = ({ icon, text, onClick, color }: ControllerButtonProps) => (
  <Grid item xs={4} style={{ padding: '1rem 0' }}>
    <Button
      style={WrenchEmojiCursorStyle}
      variant="contained"
      startIcon={icon}
      onClick={onClick}
      color={color}
    >
      {text}
    </Button>
  </Grid>
)

type ControllerProps = {
  onReset: () => void
  onShuffle: () => void
  onAutoRun: () => void
  onStopAutoRun: () => void
  isAutoRunning: boolean
}

export const Controller = ({
  onReset,
  onAutoRun,
  onStopAutoRun,
  isAutoRunning,
  onShuffle,
}: ControllerProps) => {
  const renderResetButton = () => (
    <ControllerButton color="primary" icon={<ResetIcon />} text="RESET" onClick={onReset} />
  )

  const renderShuffleButton = () => (
    <ControllerButton color="success" icon={<ShuffleIcon />} text="SHUFFLE" onClick={onShuffle} />
  )

  const renderRunButton = () => {
    const text = isAutoRunning ? 'STOP' : 'RUN'
    const icon = isAutoRunning ? <StopIcon /> : <RunIcon />
    const onClick = isAutoRunning ? onStopAutoRun : onAutoRun
    const color = isAutoRunning ? 'error' : 'secondary'
    return <ControllerButton color={color} icon={icon} text={text} onClick={onClick} />
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Grid sx={{ width: '61.8%', margin: 'auto' }} container spacing={2}>
        {renderResetButton()}
        {renderShuffleButton()}
        {renderRunButton()}
      </Grid>
    </Box>
  )
}
