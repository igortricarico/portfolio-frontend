import { TextField, Typography } from '@mui/material'

import { Controller } from 'react-hook-form'
import PropTypes from 'prop-types'
import React from 'react'

const InputElement = ({ control, name, label = null, ...rest }) => {
  return (
    <>
      {!!label && <Typography marginBottom="1vh">{label}</Typography>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <TextField {...field} fullWidth {...rest?.textFieldProps} />
        )}
      />
    </>
  )
}

InputElement.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default InputElement
