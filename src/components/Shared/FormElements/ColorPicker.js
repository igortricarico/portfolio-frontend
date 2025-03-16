import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'

import { Controller } from 'react-hook-form'
import PropTypes from 'prop-types'
import { SketchPicker } from 'react-color'
import reactCSS from 'reactcss'

const ColorPicker = ({ control, name, label = null }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false)

  const styles = reactCSS({
    default: {
      color: {
        width: '36px',
        height: '14px',
        borderRadius: '2px',
      },
      swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  })

  return (
    <>
      {!!label && <Typography marginBottom="1vh">{label}</Typography>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <>
            <Box
              sx={styles.swatch}
              onClick={() => setDisplayColorPicker(!displayColorPicker)}
            >
              <Box sx={{ ...styles.color, background: field.value }} />
            </Box>
            {displayColorPicker && (
              <Box sx={styles.popover}>
                <Box
                  sx={styles.cover}
                  onClick={() => setDisplayColorPicker(false)}
                />
                <SketchPicker
                  {...field}
                  color={field.value}
                  onChange={(newColor) => {
                    field.onChange(newColor.hex)
                  }}
                />
              </Box>
            )}
          </>
        )}
      />
    </>
  )
}

ColorPicker.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
}

export default ColorPicker
