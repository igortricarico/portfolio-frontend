import { useState } from 'react'
import { ThemeProvider, alpha, createTheme } from '@mui/material/styles'
import background from './assets/images/background.png'
import NavBar from './components/NavBar/NavBar'
import { Grid2, Link, Typography } from '@mui/material'
import AppRoutes from './components/Routes/Routes'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage?.getItem('lightMode') === 'true' ? true : false
  )

  const changeMode = () => {
    localStorage.setItem('lightMode', !isDarkMode)
    setIsDarkMode(!isDarkMode)
  }

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  })

  return (
    <ThemeProvider theme={theme} defaultMode="light">
      <BrowserRouter>
        <Grid2
          sx={{
            flexGrow: 1,
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <Grid2
            container
            sx={{
              width: '100vw',
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Grid2>
              <NavBar isDarkMode={isDarkMode} onChangeDarkMode={changeMode} />
            </Grid2>
            <Grid2 size="grow" margin="3rem">
              <Grid2
                sx={{
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  backgroundColor: (theme) =>
                    alpha(theme.palette.background.paper, 0.5),
                  borderRadius: '20px',
                }}
              >
                <AppRoutes />
              </Grid2>
            </Grid2>
            <Grid2 sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
              <Grid2
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.primary.contrastText,
                  borderRadius: '10px',
                  padding: '2px 5px 2px 5px',
                }}
              >
                <Typography>
                  <Link
                    href="https://www.flickr.com/photos/nasawebbtelescope/54088897300/in/album-72177720313923911"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: (theme) => theme.palette.primary.main }}
                  >
                    Imagem de JWST
                  </Link>
                </Typography>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
