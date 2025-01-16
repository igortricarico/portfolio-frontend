import { Typography } from '@mui/material'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Typography>Página principal</Typography>} />
      <Route path="/about" element={<Typography>Sobre</Typography>} />
      <Route path="/contact" element={<Typography>Contato</Typography>} />
      <Route path="*" element={<Typography>Rota não encontrada</Typography>} />
    </Routes>
  )
}

export default AppRoutes
