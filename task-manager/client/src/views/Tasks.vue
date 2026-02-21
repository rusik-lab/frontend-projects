<template>
  <div class="tasks-wrapper">
    <h1>My Tasks</h1>
    <p class="subtitle">Manage your daily tasks</p>

    <div class="task-form">
      <input class="input" v-model="title" placeholder="Task title" />
      <select class="input" v-model="priority">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button class="btn" @click="addTask">Add</button>
    </div>

    <div v-for="task in tasks" :key="task._id" class="task">
      <span>{{ task.title }} ({{ task.priority }})</span>
      <button @click="removeTask(task._id)">Delete</button>
    </div>

    <button class="btn logout" @click="logout">Logout</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'
import { useAuthStore } from '../store/auth'

const auth = useAuthStore()

const tasks = ref([])
const title = ref('')
const priority = ref('medium')

const loadTasks = async () => {
  const res = await api.get('/tasks')
  tasks.value = res.data
}

const addTask = async () => {
  if (!title.value) return
  await api.post('/tasks', { title: title.value, priority: priority.value })
  title.value = ''
  await loadTasks()
}

const removeTask = async (id) => {
  await api.delete(`/tasks/${id}`)
  await loadTasks()
}

const logout = () => {
  auth.logout()
}

onMounted(loadTasks)
</script>

<input
  class="input"
  v-model="title"
  placeholder="Task title"
/>
