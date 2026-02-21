import { ref, computed, watch } from 'vue'

const mood = ref('энергично')
const going = ref(null)

watch(mood, value => {
  localStorage.setItem('mood', value)
})

watch(going, value => {
  localStorage.setItem('going', value)
})

export function useEventState() {
  const title = computed(() => {
    if (mood.value === 'энергично') return 'Электронный фестиваль'
    if (mood.value === 'мрачно') return 'Ночная техно-вечеринка'
    return 'Чилл-событие'
  })

  return {
    mood,
    going,
    title
  }
}
