import { AppBar, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import NavBarItems from './NavBarItems'
import PropTypes from 'prop-types'

const NavBar = ({ isDarkMode, onChangeDarkMode }) => {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (action) => () => {
    setOpen(action)
  }

  return (
    <>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <NavBarItems
          setOpen={setOpen}
          isDarkMode={isDarkMode}
          onChangeDarkMode={onChangeDarkMode}
        />
      </Drawer>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

NavBar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  onChangeDarkMode: PropTypes.func.isRequired,
}

export default NavBar
