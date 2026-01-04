<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import DashboardView from '@/Views/DashboardView.vue';
import HeaderSubcomponent from './HeaderSubcomponent.vue';
import TimelineView from '@/Views/TimelineView.vue';
import AnalyticsView from '@/Views/AnalyticsView.vue';
import TechView from '@/Views/TechView.vue';


  const emit = defineEmits(['OpenCardModal', 'OpenLoreModal']);
  const props = defineProps({
    activeViewName: String,
    cardsLiberated: Array,
    LogsLiberated: Array,
    AllAvaibleCards: Array,
    AllAvaibleLores: Array
  });

  function ContentDisplayer(component) {
    return component === props.activeViewName;
  }

  function openCardModal(cardIndex) {
    console.log(cardIndex);
    emit('openCardModal', cardIndex)
  }

  function OpenLoreModal(loreIndex) {
    emit('OpenLoreModal', loreIndex)
  }

    let lastCards = ref(['001', '002', '003']);
</script>

<template>
  <div class="flex-grow-1 overflow-auto ">
    <HeaderSubcomponent />

    <main class="container-fluid p-4">
      <!-- VIEW: DASHBOARD -->
      <DashboardView v-if="ContentDisplayer('latest')" :-new-cards="props.cardsLiberated" :-last-cards="lastCards" :-new-lores="props.LogsLiberated" @-open-card-modal="openCardModal" @-open-lore-modal="OpenLoreModal"/>

      <!-- VIEW: TIMELINE -->
      <TimelineView v-if="ContentDisplayer('logs')" :-all-lore="AllAvaibleLores" @open-lore-modal="OpenLoreModal" />

      <!-- VIEW: ANALYTICS -->
      <AnalyticsView v-if="ContentDisplayer('data')" :-cards-avaible="AllAvaibleCards" @open-card-modal="openCardModal" />

      <!-- VIEW: TECH -->
      <TechView v-if="ContentDisplayer('')"/>
    </main>
  </div>
</template>
