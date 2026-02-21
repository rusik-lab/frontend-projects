<template>
  <section class="panel info">
    <p><strong>Дата:</strong> 24 июня 2026</p>
    <p><strong>Город:</strong> Экибастуз</p>
    <p><strong>Формат:</strong> {{ format }}</p>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useEventState } from '../composables/useEventState'

const { mood } = useEventState()

const format = computed(() => {
  if (mood.value === 'энергично') return 'Танцевальный фестиваль'
  if (mood.value === 'мрачно') return 'Техно / индастриал'
  return 'Лаунж-вечеринка'
})
</script>

<style scoped>
.info {
  background: #151515;
  color: #00ffe1;
  padding: 40px;
  border-radius: 12px;
  font-size: 18px;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 🔥 В РЯД */
  gap: 20px;
}

</style>
