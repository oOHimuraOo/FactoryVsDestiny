<script setup>
  import { onMounted, defineProps, ref, defineEmits, watch } from 'vue';

  const emit = defineEmits(['ViewChange']);
  const props = defineProps({
    userName: String,
    cardsLauched: Number,
    cardsTotal: Number
  });

  let cardsPorcentage = ref(1);
  let selectedViewName = ref('latest');

  function changeView(viewName) {
    selectedViewName.value = viewName;
    emit('ViewChange', viewName);
  }

  function changePercentage() {
    if (props.cardsLauched === 0) {
      console.log("CardsLauched não pode ser 0");
    }
    if (props.cardsTotal === 0) {
      console.log("CardsTotal não pode ser 0");
    }

    cardsPorcentage.value = Math.round(((props.cardsLauched) / props.cardsTotal) * 100);
    console.log(props.cardsLauched);
  }

  function isActive(viewName) {
  const validViews = {
    latest: true,
    data: true,
    logs: true
  };
  return validViews[viewName] ? viewName === selectedViewName.value ? 'active' : '' : '';
}


  onMounted(() => {
    changePercentage();
  })

  watch(() => props.cardsLauched, (newVal) => {
    if (newVal) {
      changePercentage();
    }
  })
</script>

<template>
  <div class="sidebar d-flex flex-column p-0">
    <div class="p-4 border-bottom border-secondary text-center">
      <h5 class="fw-bold mb-0 tracking-widest" style="color: var(--primary-neon);">Factory Vs. Destiny</h5>
      <small class="font-mono text-secondary">ID: {{ props.userName ?? 'Unknown' }}</small>
    </div>

    <nav class="nav flex-column p-2 flex-grow-1">
      <a href="#" @click="changeView('latest')" class="nav-link d-flex align-items-center gap-3" :class="isActive('latest')" >
        <span>⊞</span> Latest Updates
      </a>
      <a href="#" @click="changeView('data')" class="nav-link d-flex align-items-center gap-3" :class="isActive('data')" >
        <span>📊</span> All Avaible data
      </a>
      <a href="#" @click="changeView('logs')" class="nav-link d-flex align-items-center gap-3" :class="isActive('logs')">
        <span>≋</span> Cronological Logs
      </a>
    </nav>

    <div class="p-3 border-top border-secondary">
      <div class="d-flex justify-content-between small font-mono text-secondary mb-1">
        <span>Fabricator Progress</span>
        <span>{{ cardsPorcentage }}%</span>
      </div>
      <div class="progress bg-dark" style="height: 3px;">
        <div class="progress-bar bg-info" :style="{ width: cardsPorcentage + '%' } "></div>
      </div>
    </div>
  </div>
</template>
