import 'toastr/build/toastr.min.css'

import { Grid2, Link, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ThemeProvider, alpha, createTheme } from '@mui/material/styles'

import AppRoutes from './components/Routes/Routes'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import { TYPOGRAPHY_CONFIGURATION } from './utills/Constants'
import background from './assets/images/background.png'
import i18n from './i18n'
import { useTranslation } from 'react-i18next'

function App() {
  const [viewBackground, setViewBackground] = useState(false)
  const [i18nInitialized, setI18nInitialized] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage?.getItem('darkMode') === 'true' ? true : false
  )

  const { t } = useTranslation()

  useEffect(() => {
    if (i18n.isInitialized) {
      setI18nInitialized(true)
    } else {
      const handleI18nInitialized = () => {
        setI18nInitialized(true)
      }
      i18n.on('initialized', handleI18nInitialized)
      return () => {
        i18n.off('initialized', handleI18nInitialized)
      }
    }
  }, [])

  const changeMode = (id) => {
    if (id === 'theme') {
      localStorage.setItem('darkMode', !isDarkMode)
      setIsDarkMode(!isDarkMode)
    } else if (id === 'background') setViewBackground(!viewBackground)
  }

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
    typography: TYPOGRAPHY_CONFIGURATION,
  })

  if (!i18nInitialized) return null

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
            backgroundAttachment: 'fixed',
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
              flexWrap: 'nowrap',
              overflow: 'auto',
            }}
          >
            <Grid2>
              <NavBar isDarkMode={isDarkMode} changeMode={changeMode} />
            </Grid2>
            {!viewBackground && (
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
            )}
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
                    {t('BackgroundImage')}
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
