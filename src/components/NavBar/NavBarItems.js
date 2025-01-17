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
import PropTypes from 'prop-types'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBarItems = ({ setOpen, isDarkMode, onChangeDarkMode }) => {
  const navigate = useNavigate()

  const handleItemSelection = (path) => () => {
    setOpen(false)
    navigate(path)
  }

  return (
    <Box sx={{ width: 250 }} role="presentation">
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
          <ListItemButton onClick={onChangeDarkMode}>
            <ListItemIcon>
              {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
            </ListItemIcon>
            <ListItemText>Tema</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}

NavBarItems.propTypes = {
  setOpen: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  onChangeDarkMode: PropTypes.func.isRequired,
}

export default NavBarItems
