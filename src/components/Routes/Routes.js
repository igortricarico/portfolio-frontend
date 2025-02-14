import { Route, Routes } from 'react-router-dom'

import Home from '../Home/Home'
import React from 'react'
import ToDoList from '../ToDoList/ToDoList'
import { Typography } from '@mui/material'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todolist" element={<ToDoList />} />
      <Route path="*" element={<Typography>Rota não encontrada</Typography>} />
    </Routes>
  )
}

export default AppRoutes
