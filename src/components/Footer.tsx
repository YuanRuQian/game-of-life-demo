import { Link, Paper } from '@mui/material'
import React, { ReactNode } from 'react'

type FooterLinkProps = {
  link: string
  children: ReactNode
}

const FooterLink = ({ link, children }: FooterLinkProps) => (
  <Link href={link} underline="hover" target="_blank" rel="noreferrer">
    {children}
  </Link>
)

export const Footer = () => (
  <Paper elevation={3} style={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
    Learn more about{' '}
    <FooterLink link="http://pi.math.cornell.edu/~lipa/mec/lesson6.html">Game of Life</FooterLink> |
    Made by <FooterLink link="https://github.com/YuanRuQian">Lydia Yuan</FooterLink>
  </Paper>
)
