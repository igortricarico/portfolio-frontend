import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { NAV_BAR_ITEMS } from '../../utills/Constants'
import PanoramaIcon from '@mui/icons-material/Panorama'
import PropTypes from 'prop-types'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBarItems = ({ setOpen, isDarkMode, changeMode }) => {
  const navigate = useNavigate()

  const handleItemSelection = (path) => () => {
    setOpen(false)
    navigate(path)
  }

  return (
    <Box sx={{ maxWidth: '20rem' }} role="presentation">
      <List>
        {NAV_BAR_ITEMS.map(({ name, label, icon, path }) => (
          <ListItem key={name} disablePadding>
            <ListItemButton onClick={handleItemSelection(path)}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => changeMode('theme')}>
            <ListItemIcon>
              {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
            </ListItemIcon>
            <ListItemText>Tema</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              changeMode('background')
              setOpen(false)
            }}
          >
            <ListItemIcon>
              <PanoramaIcon />
            </ListItemIcon>
            <ListItemText>Visualizar plano de fundo</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}

NavBarItems.propTypes = {
  setOpen: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  changeMode: PropTypes.func.isRequired,
}

export default NavBarItems
