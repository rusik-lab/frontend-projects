import { defineStore } from 'pinia'
import api from '../services/api'
import router from '../router'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token')
  }),

  actions: {
    async login(email, password) {
      const res = await api.post('/auth/login', { email, password })
      this.token = res.data.token
      localStorage.setItem('token', this.token)
      router.push('/tasks')
    },

    async register(email, password) {
      await api.post('/auth/register', { email, password })
      await this.login(email, password)
    },

    logout() {
      this.token = null
      localStorage.removeItem('token')
      router.push('/login')
    }
  }
})
