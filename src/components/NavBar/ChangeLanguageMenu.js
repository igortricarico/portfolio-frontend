import { Fade, Menu, MenuItem } from '@mui/material'

import PropTypes from 'prop-types'
import React from 'react'
import { useTranslation } from 'react-i18next'

const ChangeLanguageMenu = ({ anchorEl, setAnchorEl }) => {
  const open = Boolean(anchorEl)
  const { i18n } = useTranslation()

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language)
  }

  return (
    <Menu
      id="change-language-menu"
      MenuListProps={{
        'aria-labelledby': 'change-language-button',
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={() => setAnchorEl(null)}
      TransitionComponent={Fade}
    >
      <MenuItem onClick={() => handleLanguageChange('pt')}>
        Português Brasileiro
      </MenuItem>
      <MenuItem onClick={() => handleLanguageChange('es')}>Español</MenuItem>
      <MenuItem onClick={() => handleLanguageChange('en')}>English</MenuItem>
    </Menu>
  )
}

ChangeLanguageMenu.propTypes = {
  anchorEl: PropTypes.node.isRequired,
  setAnchorEl: PropTypes.func.isRequired,
}

export default ChangeLanguageMenu
