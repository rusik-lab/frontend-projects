<template>
  <section class="panel">
    <h1>{{ title }}</h1>
    <p>Выберите настроение мероприятия:</p>

    <div class="buttons">
      <button @click="mood = 'энергично'">Энергично</button>
      <button @click="mood = 'мрачно'">Мрачно</button>
      <button @click="mood = 'спокойно'">Спокойно</button>
    </div>
  </section>
</template>

<script setup>
import { useEventState } from '../composables/useEventState'

const { mood, title } = useEventState()
</script>

<style scoped>
.panel {
  padding: 50px;
  background: #111;
  color: white;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.buttons {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}

button {
  flex: 1;               /* 🔥 ВАЖНО: кнопки растягиваются */
  padding: 18px 0;
  font-size: 16px;
  background: transparent;
  color: white;
  border: 2px solid #555;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: white;
  color: black;
}
</style>
