import { Paper } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'

const PaperBackground = ({ children, ...props }) => {
  return (
    <Paper
      sx={{
        width: '100%',
        margin: '1rem',
        padding: '1rem',
        borderRadius: '20px',
      }}
      {...props}
    >
      {children}
    </Paper>
  )
}

PaperBackground.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PaperBackground
