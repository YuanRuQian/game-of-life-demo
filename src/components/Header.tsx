import { Backdrop, Box, Button } from '@mui/material'
import React, { useState } from 'react'
import { CrossEmojiCursorStyle, QuestionMarkEmojiCursorStyle } from '../utils/cursor'
import { GameIntroduction } from './GameIntroduction'

export const Header = () => {
  const [showIntroduction, setShowIntroduction] = useState<boolean>(false)

  const Introduction = () => {
    const openIntroduction = () => setShowIntroduction(true)
    const closeIntroduction = () => setShowIntroduction(false)

    const backdropStyle = {
      color: '#fff',
      background: '#000',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      zIndex: (theme: any) => theme.zIndex.drawer + 1,
      ...CrossEmojiCursorStyle,
    }

    const BackdropSwitchButton = () => (
      <Button
        variant="outlined"
        size="large"
        onClick={openIntroduction}
        style={QuestionMarkEmojiCursorStyle}
      >
        What's Game of Life 🤔
      </Button>
    )

    return (
      <Box style={{ marginTop: '1rem' }}>
        <BackdropSwitchButton />
        <Backdrop sx={backdropStyle} open={showIntroduction} onClick={closeIntroduction}>
          <Box sx={{ maxWidth: '80%' }}>
            <GameIntroduction />
          </Box>
        </Backdrop>
      </Box>
    )
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Introduction />
    </Box>
  )
}
