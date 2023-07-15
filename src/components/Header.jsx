import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material'
import Logo from '../assets/logo.png'

const Container = styled(AppBar)`
    background: #060606;
    height: 9vh;
`

function Header() {
  return (
    <Container position='static'>
        <Toolbar>
            <img src={Logo} alt="logo" style={{ width: 70 }} />
        </Toolbar>
    </Container>
  )
}

export default Header
