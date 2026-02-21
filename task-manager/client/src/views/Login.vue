<template>
  <div class="auth-wrapper">
    <div class="card">
      <h1>Welcome back</h1>
      <p class="subtitle">Login to your account</p>

      <input class="input" v-model="email" placeholder="Email" />
      <input class="input" v-model="password" type="password" placeholder="Password" />

      <button class="btn" @click="submit">Login</button>

      <router-link class="link" to="/register">
        No account? Register
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../store/auth'

const email = ref('')
const password = ref('')
const auth = useAuthStore()

const submit = () => {
  auth.login(email.value, password.value)
}
</script>
