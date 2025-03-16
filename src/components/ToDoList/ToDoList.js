import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'

import CategoriesForm from './CategoriesForm'
import PaperBackground from '../Shared/PaperBackground/PaperBackground'
import React from 'react'
import ToDoListForm from './ToDoListForm'

const ToDoList = () => {
  const [value, setValue] = React.useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <PaperBackground>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Tarefas" value="1" />
            <Tab label="Categorias" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <ToDoListForm />
        </TabPanel>
        <TabPanel value="2">
          <CategoriesForm />
        </TabPanel>
      </TabContext>
    </PaperBackground>
  )
}

export default ToDoList
