import { Box, Button, Grid2, Typography } from '@mui/material'

import PropTypes from 'prop-types'
import React from 'react'
import { useTranslation } from 'react-i18next'

const CategoriesItems = ({ fields, onUpdate }) => {
  const { t } = useTranslation(['Common'])

  return (
    <Grid2 sx={{ maxHeight: '50vh', overflowY: 'auto' }}>
      {fields.map((field, index) => {
        const { categoryId, name, color, active } = field

        return (
          <Grid2
            key={categoryId}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            padding="1vh"
            margin="1vh"
            sx={{ border: 2 }}
          >
            <Grid2 display="flex" flexDirection="row">
              <Grid2 display="flex" flexDirection="column">
                <Typography marginRight="1vh">{`${t('Name')}:`}</Typography>
                <Typography marginRight="1vh">{`${t('Color')}:`}</Typography>
              </Grid2>
              <Grid2 display="flex" flexDirection="column" minWidth="5vh">
                <Typography>{name}</Typography>
                <Box sx={{ backgroundColor: color, height: '1.5vh' }} />
              </Grid2>
            </Grid2>
            <Button onClick={() => onUpdate(index, field)}>
              {active ? t('Deactivate') : t('Activate')}
            </Button>
          </Grid2>
        )
      })}
    </Grid2>
  )
}

CategoriesItems.propTypes = {
  fields: PropTypes.array.isRequired,
  onUpdate: PropTypes.func.isRequired,
}

export default CategoriesItems
