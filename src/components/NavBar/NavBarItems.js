import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

import ChangeLanguageMenu from './ChangeLanguageMenu'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { NAV_BAR_ITEMS } from '../../utills/Constants'
import PanoramaIcon from '@mui/icons-material/Panorama'
import PropTypes from 'prop-types'
import React from 'react'
import TranslateIcon from '@mui/icons-material/Translate'
import { useNavigate } from 'react-router-dom'

const NavBarItems = ({ setOpen, isDarkMode, changeMode }) => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleItemSelection = (path) => () => {
    setOpen(false)
    navigate(path)
  }

  return (
    <Box sx={{ maxWidth: '20rem' }} role="presentation">
      <ChangeLanguageMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
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
            <ListItemText>Alterar tema</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={(event) => setAnchorEl(event.currentTarget)}>
            <ListItemIcon>
              <TranslateIcon />
            </ListItemIcon>
            <ListItemText>Alterar idioma</ListItemText>
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
