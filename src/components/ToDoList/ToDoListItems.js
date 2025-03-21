import { Button, Grid2, Typography } from '@mui/material'

import PropTypes from 'prop-types'
import React from 'react'
import { useTranslation } from 'react-i18next'

const ToDoListItems = ({ tasks = [], categories = [], onRemove }) => {
  const { t } = useTranslation(['Common'])

  return (
    <Grid2 sx={{ maxHeight: '50vh', overflowY: 'auto' }}>
      {tasks.map((task, index) => {
        const { task_id: taskId, description, category_id: categoryId } = task
        const displayCategory = categories.find(
          (item) => item.category_id === categoryId
        )
        const displayName =
          displayCategory?.name === 'General'
            ? t('General')
            : displayCategory?.name

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
                <Typography>{displayName}</Typography>
                <Typography>{description}</Typography>
              </Grid2>
            </Grid2>
            <Button onClick={() => onRemove(taskId)}>{t('Remove')}</Button>
          </Grid2>
        )
      })}
    </Grid2>
  )
}

ToDoListItems.propTypes = {
  tasks: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default ToDoListItems
