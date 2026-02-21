<template>
  <section class="panel decision">
    <h2 v-if="going === null">Вы пойдёте на мероприятие?</h2>
    <h2 v-else-if="going">Отлично! Ждём вас 🎶</h2>
    <h2 v-else>Жаль, возможно в следующий раз</h2>

<div v-if="going === null" class="buttons">
  <button @click="going = true">Пойду</button>
  <button @click="going = false">Не пойду</button>
</div>

  </section>
</template>

<script setup>
import { useEventState } from '../composables/useEventState'

const { going } = useEventState()
</script>

<style scoped>
.decision {
  background: linear-gradient(135deg, #ff512f, #dd2476);
  color: white;
  padding: 50px;
  border-radius: 14px;
  text-align: center;
}

.buttons {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}

button {
  flex: 1;
  padding: 18px 0;
  font-size: 18px;
  border: none;
  cursor: pointer;
}

</style>
