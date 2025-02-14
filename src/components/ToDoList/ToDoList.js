import { Button, Grid2 } from '@mui/material'
import { useFieldArray, useForm } from 'react-hook-form'

import InputElement from '../Shared/FormElements/InputElement'
import PaperBackground from '../Shared/PaperBackground/PaperBackground'
import React from 'react'

const ToDoList = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      items: [{ description: '' }], // Array inicial com estrutura de item
    },
  })

  const { fields, append, remove } = useFieldArray({ control, name: 'items' })

  const onSubmit = (data) => {
    append({ description: data.description }) // Adiciona um novo item com descrição
    reset({ description: '' }) // Limpa o campo de input após a submissão
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
        {/* Campo de entrada de descrição */}
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

        {/* Botão de envio */}
        <Grid2 size={12} display="flex" justifyContent="flex-end">
          <Button type="submit">Submit</Button>
        </Grid2>

        {/* Lista de itens */}
        {fields.map((field, index) => (
          <Grid2 key={field.id} size={12}>
            <p>{field.description}</p>
            <Button onClick={() => remove(index)}>Remover</Button>
          </Grid2>
        ))}
      </Grid2>
    </PaperBackground>
  )
}

export default ToDoList
