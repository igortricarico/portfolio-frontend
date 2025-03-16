import { Button, Grid2, Typography } from '@mui/material'

import PropTypes from 'prop-types'
import React from 'react'
import { useTranslation } from 'react-i18next'

const ToDoListItems = ({ fields, onRemove }) => {
  const { t } = useTranslation(['Common'])
  const categories = localStorage.getItem('categories')
    ? JSON.parse(localStorage.getItem('categories'))
    : []

  return (
    <Grid2 sx={{ maxHeight: '50vh', overflowY: 'auto' }}>
      {fields.map((field, index) => {
        const { description, category } = field

        const displayCategory = categories.find(
          (item) => item.categoryId === category
        )

        return (
          <Grid2
            key={index}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            padding="1vh"
            margin="1vh"
            sx={{ border: 2, borderColor: displayCategory?.color || 'black' }}
          >
            <Grid2 display="flex" flexDirection="row">
              <Grid2 display="flex" flexDirection="column">
                <Typography marginRight="1vh">{`${t('Category')}:`}</Typography>
                <Typography marginRight="1vh">{`${t('Description')}:`}</Typography>
              </Grid2>
              <Grid2 display="flex" flexDirection="column">
                <Typography>{displayCategory?.name || t('General')}</Typography>
                <Typography>{description}</Typography>
              </Grid2>
            </Grid2>
            <Button onClick={() => onRemove(index)}>{t('Remove')}</Button>
          </Grid2>
        )
      })}
    </Grid2>
  )
}

ToDoListItems.propTypes = {
  fields: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default ToDoListItems
