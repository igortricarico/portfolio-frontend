import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import EmailIcon from '@mui/icons-material/Email'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const NavBarItems = ({ setOpen, isDarkMode, onChangeDarkMode }) => {
  const navigate = useNavigate()

  const handleItemSelection = (path) => () => {
    setOpen(false)
    navigate(path)
  }

  const items = [
    { name: 'home', label: 'Início', icon: <HomeIcon />, path: '/' },
    { name: 'about', label: 'Sobre', icon: <InfoIcon />, path: '/about' },
    {
      name: 'contact',
      label: 'Contato',
      icon: <EmailIcon />,
      path: '/contact',
    },
  ]

  return (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {items.map(({ name, label, icon, path }) => (
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

export default NavBarItems
