<template>
  <div class="auth-wrapper">
    <div class="card">
      <h1>Create account</h1>
      <p class="subtitle">Register to start managing tasks</p>

      <input class="input" v-model="email" placeholder="Email" />
      <input class="input" v-model="password" type="password" placeholder="Password" />

      <button class="btn" @click="submit">Register</button>

      <router-link class="link" to="/login">
        Already have an account? Login
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
  auth.register(email.value, password.value)
}
</script>
