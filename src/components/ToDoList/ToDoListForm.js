import { Button, Grid2, MenuItem } from '@mui/material'

import InputElement from '../Shared/FormElements/InputElement'
import PropTypes from 'prop-types'
import React from 'react'
import ToDoListItems from './ToDoListItems'
import toastr from 'toastr'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

const ToDoListForm = ({
  tasks = [],
  categories = [],
  addTask,
  removeTask,
  errorCallback,
}) => {
  const { t } = useTranslation(['Common'])

  const activeCategories = React.useMemo(
    () => categories.filter((category) => category.active === 1),
    [categories]
  )

  const { control, handleSubmit, reset, setValue, getValues } = useForm({
    defaultValues: {
      description: '',
      category: '1',
    },
  })

  React.useEffect(() => {
    setValue('category', activeCategories[0]?.category_id.toString())
  }, [categories])

  const onSubmit = async (data) => {
    const { description, category } = data
    if (description === '') {
      toastr.error(t('Errors:RequiredFields', { fields: t('Description') }))
      return
    } else if (category === undefined) {
      toastr.error(t('Errors:RequiredFields', { fields: t('Category') }))
      return
    }
    await addTask(
      { description, category_id: +category },
      () =>
        reset({
          ...getValues(),
          description: '',
        }),
      () => errorCallback()
    )
  }

  const onRemove = async (taskId) => {
    await removeTask(taskId, () => errorCallback())
  }

  return (
    <>
      <Grid2
        container
        component="form"
        display="flex"
        flexDirection="row"
        rowSpacing={2}
        columnSpacing={2}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid2 size={12}>
          <InputElement
            control={control}
            name="category"
            label={t('Category')}
            textFieldProps={{
              variant: 'outlined',
              rows: 4,
              select: true,
            }}
          >
            {activeCategories.map(({ category_id: categoryId, name }) => (
              <MenuItem key={categoryId} value={categoryId}>
                {t(name)}
              </MenuItem>
            ))}
          </InputElement>
        </Grid2>
        <Grid2 size={12}>
          <InputElement
            control={control}
            name="description"
            label={t('Description')}
            textFieldProps={{
              variant: 'outlined',
              multiline: true,
              rows: 4,
            }}
          />
        </Grid2>
        <Grid2 size={12} display="flex" justifyContent="flex-end">
          <Button type="submit">{t('Add')}</Button>
        </Grid2>
      </Grid2>
      <ToDoListItems
        tasks={tasks}
        categories={categories}
        onRemove={onRemove}
      />
    </>
  )
}

ToDoListForm.propTypes = {
  tasks: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  addTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  errorCallback: PropTypes.func.isRequired,
}

export default ToDoListForm
