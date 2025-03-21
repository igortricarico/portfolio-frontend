import { Button, Grid2 } from '@mui/material'

import CategoriesItems from './CategoriesItems'
import ColorPicker from '../Shared/FormElements/ColorPicker'
import InputElement from '../Shared/FormElements/InputElement'
import PropTypes from 'prop-types'
import React from 'react'
import toastr from 'toastr'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

const CategoriesForm = ({
  categories,
  addCategory,
  updateCategory,
  errorCallback,
}) => {
  const { t } = useTranslation(['Common'])

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      color: '#fff',
    },
  })

  const onSubmit = (data) => {
    const { name, color } = data
    if (name === '') {
      toastr.error(t('Errors:RequiredFields', { fields: t('Name') }))
      return
    }

    addCategory(
      { name, color },
      () => reset({ name: '', color: '#fff' }),
      () => errorCallback()
    )
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
      <CategoriesItems
        categories={categories}
        updateCategory={updateCategory}
        errorCallback={errorCallback}
      />
    </>
  )
}

CategoriesForm.propTypes = {
  categories: PropTypes.array.isRequired,
  addCategory: PropTypes.func.isRequired,
  updateCategory: PropTypes.func.isRequired,
  errorCallback: PropTypes.func.isRequired,
}

export default CategoriesForm
