import { Button, Grid2, MenuItem } from '@mui/material'

import InputElement from '../Shared/FormElements/InputElement'
import React from 'react'
import ToDoListItems from './ToDoListItems'
import toastr from 'toastr'
import { useForm } from 'react-hook-form'
import useToDoListStore from '../../stores/useToDoListStore'
import { useTranslation } from 'react-i18next'

const ToDoListForm = () => {
  const { t } = useTranslation(['Common'])
  const { tasks, categories, fetchTasks, addTask, removeTask, setCategories } =
    useToDoListStore()

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      description: '',
      category: '1',
    },
  })

  const ErrorCallback = () => {
    toastr.error('Erro de comunicação com o servidor')
  }

  React.useEffect(() => {
    fetchTasks(() => ErrorCallback())

    if (localStorage.getItem('categories')) {
      const storedCategories = JSON.parse(localStorage.getItem('categories'))
      setCategories([...categories, ...storedCategories])
    }
  }, [])

  const onSubmit = async (data) => {
    const { description, category } = data
    if (description === '') {
      toastr.error(t('Errors:RequiredFields', { fields: t('Description') }))
      return
    }
    await addTask(
      description,
      category,
      () => reset({ description: '', category: '1' }),
      () => ErrorCallback()
    )
  }

  const onRemove = async (taskId) => {
    await removeTask(taskId, () => ErrorCallback())
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
            {categories.map(({ categoryId, name, active = true }) => {
              if (active === true)
                return (
                  <MenuItem key={categoryId} value={categoryId}>
                    {t(name)}
                  </MenuItem>
                )
            })}
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
      <ToDoListItems tasks={tasks} onRemove={onRemove} />
    </>
  )
}

export default ToDoListForm
