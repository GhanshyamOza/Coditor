import React, { useContext, useState, useEffect } from 'react'
import { Box, styled } from '@mui/material'
import { DataContext } from '../context/DataProvider'

export default function Result() {

  const [src, setSrc] = useState('');

  const { html, css, js } = useContext(DataContext);

  const srcCode = `
    <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
    </html>
  `

  useEffect(() => {
    const timeout = setTimeout(() => {
        setSrc(srcCode)
    }, 1000)

    return () => clearTimeout(timeout);
  }, [html, css, js])

  const ResultContainer = styled(Box)`
    height: 41vh
  `

  return (
    <ResultContainer>
        <iframe 
            srcDoc={src}
            title='Output'
            sandbox='allow-scripts' 
            frameborder="0" 
            height="100%"
            width="100%"
        />
    </ResultContainer>
  )
}
