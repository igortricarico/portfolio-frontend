import { Typography } from '@mui/material'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Typography>Sobre</Typography>} />
      <Route path="/contact" element={<Typography>Contato</Typography>} />
      <Route path="*" element={<Typography>Rota não encontrada</Typography>} />
    </Routes>
  )
}

export default AppRoutes
