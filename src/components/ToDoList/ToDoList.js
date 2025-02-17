import { Button, Grid2, Typography } from '@mui/material'
import { useFieldArray, useForm } from 'react-hook-form'

import InputElement from '../Shared/FormElements/InputElement'
import PaperBackground from '../Shared/PaperBackground/PaperBackground'
import React from 'react'

const ToDoList = () => {
  const { control, handleSubmit, reset, getValues } = useForm({
    defaultValues: {
      description: '',
      items: [],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: control,
    name: 'items',
  })

  const onSubmit = (data) => {
    append({ description: data.description })
    reset({ ...getValues(), description: '' })
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
        <Grid2 size={12} display="flex" justifyContent="flex-end">
          <Button type="submit">Submit</Button>
        </Grid2>
        {fields.map((field, index) => (
          <Grid2 key={field.id} size={12}>
            <Typography>{field.description}</Typography>
            <Button onClick={() => remove(index)}>Remover</Button>
          </Grid2>
        ))}
      </Grid2>
    </PaperBackground>
  )
}

export default ToDoList
