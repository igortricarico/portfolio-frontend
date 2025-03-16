import { Button, Grid2 } from '@mui/material'
import { useFieldArray, useForm } from 'react-hook-form'

import CategoriesItems from './CategoriesItems'
import ColorPicker from '../Shared/FormElements/ColorPicker'
import InputElement from '../Shared/FormElements/InputElement'
import React from 'react'
import toastr from 'toastr'
import { useTranslation } from 'react-i18next'

const CategoriesForm = () => {
  const { t } = useTranslation(['Common'])

  const { control, handleSubmit, reset, getValues } = useForm({
    defaultValues: {
      name: '',
      color: '#fff',
      categories: [],
    },
  })

  const { fields, append, remove, replace } = useFieldArray({
    control: control,
    name: 'categories',
  })

  React.useEffect(() => {
    if (localStorage.getItem('categories'))
      replace(JSON.parse(localStorage.getItem('categories')))
  }, [])

  const onSubmit = (data) => {
    const { name, color } = data
    if (name === '') {
      toastr.error(t('Errors:RequiredFields', { fields: t('Name') }))
      return
    }

    const id = crypto.randomUUID()

    append({ id, name, color })
    localStorage.setItem('categories', JSON.stringify(getValues().categories))
    reset({ ...getValues(), name: '', color: '#fff' })
  }

  const onRemove = (index) => {
    remove(index)
    localStorage.setItem('categories', JSON.stringify(getValues().categories))
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
            name="name"
            label={t('Name')}
            textFieldProps={{ variant: 'outlined' }}
          />
        </Grid2>
        <Grid2 size={12}>
          <ColorPicker control={control} name="color" label={t('Color')} />
        </Grid2>
        <Grid2 size={12} display="flex" justifyContent="flex-end">
          <Button type="submit">{t('Add')}</Button>
        </Grid2>
      </Grid2>
      <CategoriesItems fields={fields} onRemove={onRemove} />
    </>
  )
}

export default CategoriesForm
