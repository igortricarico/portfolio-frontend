import { Box } from '@mui/system'
import { Modal } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'

const CustomModal = ({ children, ...rest }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

  return (
    <Modal {...rest}>
      <Box sx={style}>{children}</Box>
    </Modal>
  )
}

CustomModal.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CustomModal
