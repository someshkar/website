import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import Header from './header'

import lightTheme from '../themes/light'
import darkTheme from '../themes/dark'

import './styles/normalize.css'
import './styles/fonts.css'
import './styles/global.css'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.textColor};
    transition: all 0.5s ease-out;
  }
`

const Content = styled.div`
  margin: 0 10rem;
  @media only screen and (max-width: 768px) {
    margin: 0 2rem;
  }
`

const Layout = ({ children }) => {
  let localIsDark

  if (localStorage.getItem('isDark') === 'false') {
    localIsDark = false
  } else {
    localIsDark = true
  }

  console.log(localIsDark)

  const [isDark, setIsDark] = useState(localIsDark)

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Content>{children}</Content>
      <GlobalStyle />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
