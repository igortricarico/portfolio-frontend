import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'

import CategoriesForm from './CategoriesForm'
import PaperBackground from '../Shared/PaperBackground/PaperBackground'
import React from 'react'
import ToDoListForm from './ToDoListForm'
import toastr from 'toastr'
import useToDoListStore from '../../stores/useToDoListStore'

const ToDoList = () => {
  const [value, setValue] = React.useState('1')
  const {
    tasks,
    categories,
    fetchTasks,
    addTask,
    removeTask,
    fetchCategories,
    addCategory,
    updateCategory,
  } = useToDoListStore()

  const handleChange = (_, newValue) => {
    setValue(newValue)
  }

  const ErrorCallback = () => {
    toastr.error('Erro de comunicação com o servidor')
  }

  React.useEffect(() => {
    fetchTasks(() => ErrorCallback())
    fetchCategories(() => ErrorCallback())
  }, [])

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
          <ToDoListForm
            tasks={tasks}
            categories={categories}
            addTask={addTask}
            removeTask={removeTask}
            errorCallback={ErrorCallback}
          />
        </TabPanel>
        <TabPanel value="2">
          <CategoriesForm
            categories={categories}
            addCategory={addCategory}
            updateCategory={updateCategory}
            errorCallback={ErrorCallback}
          />
        </TabPanel>
      </TabContext>
    </PaperBackground>
  )
}

export default ToDoList
