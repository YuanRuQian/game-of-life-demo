import { Backdrop, Box, Button, IconButton, Grid } from '@mui/material'
import React, { CSSProperties, useState } from 'react'
import { CrossEmojiCursorStyle, QuestionMarkEmojiCursorStyle } from '../utils/cursor'
import { GameIntroduction } from './GameIntroduction'
import GitHubIcon from '@mui/icons-material/GitHub'

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

  const GitHubRepoLinkButton = () => {
    const navigateToProjectGitHubRepo = () =>
      window.open('https://github.com/YuanRuQian/game-of-life-demo', '_blank', 'noreferrer')

    const buttonStyle: CSSProperties = {
      position: 'absolute',
      right: '1rem',
      top: '1rem',
    }

    return (
      <IconButton
        color="inherit"
        aria-label="link to the project's GitHub repo"
        onClick={navigateToProjectGitHubRepo}
        style={buttonStyle}
      >
        <GitHubIcon fontSize="large" />
      </IconButton>
    )
  }

  return (
    <Grid container justifyContent="center">
      <Introduction />
      <GitHubRepoLinkButton />
    </Grid>
  )
}
