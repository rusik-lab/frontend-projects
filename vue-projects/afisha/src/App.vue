<template>
  <div class="layout">
    <MoodPanel />
    <InfoPanel />
    <DecisionPanel />
  </div>
</template>

<script setup>
import MoodPanel from './components/MoodPanel.vue'
import InfoPanel from './components/InfoPanel.vue'
import DecisionPanel from './components/DecisionPanel.vue'
</script>

<style>
body {
  margin: 0;
  min-height: 100vh;
  font-family: Arial, sans-serif;

  /* 🎨 Лёгкий тёмный градиент */
background: linear-gradient(160deg, #1f1c2c, #928dab);

}


.layout {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
