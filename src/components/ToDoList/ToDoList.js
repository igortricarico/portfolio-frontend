import { Button, Grid2, MenuItem, Typography } from '@mui/material'
import { useFieldArray, useForm } from 'react-hook-form'

import InputElement from '../Shared/FormElements/InputElement'
import PaperBackground from '../Shared/PaperBackground/PaperBackground'
import React from 'react'
import { TO_DO_LIST_CATEGORIES } from '../../utills/Constants'
import { useTranslation } from 'react-i18next'

const ToDoList = () => {
  const { t } = useTranslation(['ToDoList'])

  const { control, handleSubmit, reset, getValues } = useForm({
    defaultValues: {
      description: '',
      category: 'personal',
      items: [],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: control,
    name: 'items',
  })

  const onSubmit = (data) => {
    const { description, category } = data

    append({ description: description, category: category })
    reset({ ...getValues(), description: '', category: 'personal' })
  }

  return (
    <PaperBackground>
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
            name="description"
            label="Descrição"
            textFieldProps={{
              variant: 'outlined',
              multiline: true,
              rows: 4,
            }}
          />
        </Grid2>
        <Grid2 size={12}>
          <InputElement
            control={control}
            name="category"
            label="Categoria"
            textFieldProps={{
              variant: 'outlined',
              rows: 4,
              select: true,
            }}
          >
            {TO_DO_LIST_CATEGORIES.map((category, index) => (
              <MenuItem key={index} value={category}>
                {t(category)}
              </MenuItem>
            ))}
          </InputElement>
        </Grid2>
        <Grid2 size={12} display="flex" justifyContent="flex-end">
          <Button type="submit">Submit</Button>
        </Grid2>
        {fields.map((field, index) => {
          const { id, description, category } = field

          return (
            <Grid2 key={id} size={12}>
              <Typography>{description}</Typography>
              <Typography>{t(category)}</Typography>
              <Button onClick={() => remove(index)}>Remover</Button>
            </Grid2>
          )
        })}
      </Grid2>
    </PaperBackground>
  )
}

export default ToDoList
