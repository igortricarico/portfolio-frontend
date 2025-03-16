import { Button, Grid2, MenuItem } from '@mui/material'
import { useFieldArray, useForm } from 'react-hook-form'

import InputElement from '../Shared/FormElements/InputElement'
import React from 'react'
import ToDoListItems from './ToDoListItems'
import toastr from 'toastr'
import { useTranslation } from 'react-i18next'

const ToDoListForm = () => {
  const { t } = useTranslation(['Common'])
  const [categories, setCategories] = React.useState([
    { id: '1', name: 'Geral', color: '#fff' },
  ])

  const { control, handleSubmit, reset, getValues } = useForm({
    defaultValues: {
      description: '',
      category: '1',
      items: [],
    },
  })

  const { fields, append, remove, replace } = useFieldArray({
    control: control,
    name: 'items',
  })

  React.useEffect(() => {
    if (localStorage.getItem('items'))
      replace(JSON.parse(localStorage.getItem('items')))

    if (localStorage.getItem('categories'))
      setCategories([
        ...categories,
        ...JSON.parse(localStorage.getItem('categories')),
      ])
  }, [])

  const onSubmit = (data) => {
    const { description, category } = data
    if (description === '') {
      toastr.error(t('Errors:RequiredFields', { fields: t('Description') }))
      return
    }

    append({ description, category })
    localStorage.setItem('items', JSON.stringify(getValues().items))
    reset({ ...getValues(), description: '', category: '1' })
  }

  const onRemove = (index) => {
    remove(index)
    localStorage.setItem('items', JSON.stringify(getValues().items))
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
            {categories.map(({ id, name }) => (
              <MenuItem key={id} value={id}>
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
      <ToDoListItems fields={fields} onRemove={onRemove} />
    </>
  )
}

export default ToDoListForm
