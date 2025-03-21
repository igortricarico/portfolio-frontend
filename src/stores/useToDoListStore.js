import { create } from 'zustand'

const useToDoListStore = create((set) => ({
  tasks: [],
  categories: [],

  // Obter tarefas
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

  // Adicionar tarefa
  addTask: async (payload, onSuccess = () => {}, onError = () => {}) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/tasks/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
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

  // Remover tarefa
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

  // Obter categorias
  fetchCategories: async (onError = () => {}) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/categories/')
      if (!response.ok) {
        onError()
        return
      }
      const categories = await response.json()
      set(() => ({
        categories: [...categories],
      }))
    } catch {
      onError()
    }
  },

  // Adicionar categoria
  addCategory: async (payload, onSuccess = () => {}, onError = () => {}) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/categories/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!response.ok) {
        onError()
        return
      }
      const newCategory = await response.json()
      set((state) => ({
        categories: [...state.categories, newCategory.category],
      }))
      onSuccess()
    } catch {
      onError()
    }
  },

  // Atualizar categoria
  updateCategory: async (categoryId, payload, onError = () => {}) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/categories/${categoryId}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      )
      if (!response.ok) {
        onError()
        return
      }
      set((state) => ({
        categories: state.categories.map((category) =>
          category.category_id === categoryId
            ? { ...category, active: payload?.active }
            : category
        ),
      }))
    } catch {
      onError()
    }
  },
}))

export default useToDoListStore
