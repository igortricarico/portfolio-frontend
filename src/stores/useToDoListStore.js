import { create } from 'zustand'

const useToDoListStore = create((set) => ({
  tasks: [],
  categories: [{ categoryId: '1', name: 'General', color: '#fff' }],

  // Ação para buscar tarefas
  fetchTasks: async (onError = () => {}) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/tasks/')
      if (!response.ok) {
        onError()
        return
      }
      const data = await response.json()
      set({ tasks: data })
    } catch {
      onError()
    }
  },

  // Ação para adicionar uma tarefa
  addTask: async (
    description,
    category,
    onSuccess = () => {},
    onError = () => {}
  ) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/tasks/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description, category }),
      })
      if (!response.ok) {
        onError()
        return
      }
      const newTask = await response.json()
      set((state) => ({ tasks: [...state.tasks, newTask.task] }))
      onSuccess()
    } catch {
      onError()
    }
  },

  // Ação para remover uma tarefa
  removeTask: async (taskId, onError = () => {}) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/tasks/${taskId}`, {
        method: 'DELETE',
      })
      if (!response.ok) {
        onError()
        return
      }
      set((state) => ({
        tasks: state.tasks.filter((task) => task.task_id !== taskId),
      }))
    } catch {
      onError()
    }
  },

  // Ação para definir categorias
  setCategories: (newCategories) => set({ categories: newCategories }),
}))

export default useToDoListStore
