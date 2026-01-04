<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';

  const currentTime = ref('');
  const timeClass = ref('');
  let intervalId;

  function updateTime() {
    const now = new Date();

    currentTime.value = now.toLocaleTimeString('pt-BR', { hour12: false });
  }

  onMounted(() => {
    updateTime();
    intervalId = setInterval(() => {
      updateTime()
      timeClassChanger()
    } , 1000);
  });

  onUnmounted(() => {
    clearInterval(intervalId);
  });

  function timeClassChanger() {
    return currentTime.value >= '16:20:00' && currentTime.value < '16:21:00' ? timeClass.value = 'text-sky-600' : timeClass.value = '';
  }
</script>

<template>
  <header class="p-3 bg-dark border-bottom border-secondary d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center gap-2">
      <span class="status-dot blink"></span>
        <span class="font-mono small">SISTEMS ONLINE // CLEARANCE LEVEL: <span class="text-sky-600">Genesis‑013/CL-Ω/Prime</span></span>
      </div>
      <div id="clock" class="font-mono small text-secondary" :class="timeClass">{{ currentTime }}</div>
  </header>
</template>
