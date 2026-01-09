<script setup>
  import { defineProps, defineEmits, ref, onMounted, onUnmounted, watch } from 'vue';
  import * as CE from '../utils/CardEssentials';
  import * as LE from '../utils/LoreEssentials';

  const emit = defineEmits(['OpenCardModal', 'OpenLoreModal']);
  const props = defineProps({
    NewCards: Array,
    NewLores: Array,
    ReleaseDate: String,
    NextRelease: String
  })

  let SystemLogs = ["Connecting to central control unit...", "Loading visual analysis subroutines...", "Decoding archived manuscripts...", "Updating laboratory software modules...", "Data synchronization completed."];
  let ActualLogs = [];

  let DisplayLogs = ref([]);
  let systemIndex = 0;
  let ActualLogIndex = 0;
  let TotalIdx = systemIndex + ActualLogIndex;
  let intervalId2 = null;

  function mountLoreLogs() {
    if (!props.NewLores || !Array.isArray(props.NewLores)) return;

    ActualLogs = [];

    props.NewLores.forEach(lore => {
      const chapterName = LE.LoreChapterNameReader(lore.t, lore.c);

      ActualLogs.push({
        text: chapterName,
        index: lore,
      });
    });
  }

  function pushLog(text, prefix = "[SYS]") {
    let idx = systemIndex + ActualLogIndex;
    DisplayLogs.value.push({ idx, text, prefix });

    if (DisplayLogs.value.length > 5) {
      DisplayLogs.value.shift();
    }
  }

  function startSystemLogs() {
    intervalId2 = setInterval(() => {
      if (systemIndex < SystemLogs.length) {
        pushLog(SystemLogs[systemIndex], "[SYS]");
        systemIndex++;
      } else {
        clearInterval(intervalId2);
        intervalId2 = null;
        TotalIdx = systemIndex + ActualLogIndex
        startActualLogs();
      }
    }, 500);
  }

  function startActualLogs() {
    intervalId2 = setInterval(() => {
      if (ActualLogIndex < ActualLogs.length) {
        pushLog(ActualLogs[ActualLogIndex], "[LOG]");
        ActualLogIndex++;
        TotalIdx = systemIndex + ActualLogIndex
      } else {
        clearInterval(intervalId2);
        TotalIdx = systemIndex + ActualLogIndex
        reorderLogs();
      }
    }, 500);
  }

  function isNewLog(index) {
    return index >= TotalIdx - 2;
  }

  function reorderLogs() {
    DisplayLogs.value = [... DisplayLogs.value].reverse();
  }

  function HandleLogClick(log) {

    emit("OpenLoreModal", log);
  }

  function createManaSymbolsArray(manaCost) {
    return manaCost.split('|')
  }

  function rarityClass(rarity) {
  switch (rarity?.toLowerCase()) {
    case 'common':
      return 'rarity-common';
    case 'uncommon':
      return 'rarity-uncommon';
    case 'rare':
      return 'rarity-rare';
    case 'mythic':
    case 'mythic rare':
      return 'rarity-mythic';
    case 'special':
      return 'rarity-special';
    default:
      return 'rarity-unknown';
  }
}

  function openCardModal(CardIndex) {
    emit("OpenCardModal", CardIndex);
  }

  let allDataReleased = ref(false);
  let d = ref(300);
  let d1 = ref(300);
  let h = ref(12);
  let h1 = ref(12);
  let m = ref(35);
  let m1 = ref(35);
  let s = ref(56);
  let s1 = ref(56);
  let data = ref('3/01/2026');

  let intervalId = null;
  let intervalId1 = null;

  function updateCountdown1() {
    const targetDate = new Date(props.NextRelease);
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      clearInterval(intervalId1);
      return;
    }

    d1.value = Math.floor(diff / (1000 * 60 * 60 * 24));
    h1.value = Math.floor((diff / (1000 * 60 * 60)) % 24);
    m1.value = Math.floor((diff / (1000 * 60)) % 60);
    s1.value = Math.floor((diff / 1000) % 60);
  }

  function updateCountdown() {
    const targetDate = new Date(props.ReleaseDate);
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      allDataReleased.value = true;
      clearInterval(intervalId);
      return;
    }
    d.value = Math.floor(diff / (1000 * 60 * 60 * 24));
    h.value = Math.floor((diff / (1000 * 60 * 60)) % 24);
    m.value = Math.floor((diff / (1000 * 60)) % 60);
    s.value = Math.floor((diff / 1000) % 60);
  }

  onMounted(() => {
    mountLoreLogs();
    startSystemLogs();
    updateCountdown();
    updateCountdown1();
    intervalId = setInterval(updateCountdown, 1000);
    intervalId1 = setInterval(updateCountdown1, 1000);
  })

  onUnmounted(() => {
    clearInterval(intervalId2);
    clearInterval(intervalId);
  })

  watch(() => props.NewLores, (newVal) => {
    if (newVal) {
      mountLoreLogs();
    }
  })

  watch(() => props.NextRelease, (newVal) => {
    if (newVal) {
      intervalId1 = setInterval(updateCountdown1, 1000);
    }
  })

</script>

<template>
  <section id="view-dashboard" class="view-content animate-fade container">
    <div class="row g-4">
      <div class="col-12">
        <div class="tech-panel p-4 mb-2">
          <h2 class="fw-bold text-uppercase">Resource‑saving latency: <span class="text-sky-600">weekly transmissions only.</span></h2>
          <p class="text-secondary mb-0" v-if="!allDataReleased">All data will be synchronized in: <span class="text-sky-600">{{ d }}</span> days, <span class="text-sky-600">{{ h }}</span> hours, <span class="text-sky-600">{{ m }}</span> minutes, <span class="text-sky-600">{{ s }}</span> seconds</p>
          <p class="text-secondary mb-0" v-else>All data synchronized. Last Update was in: <span class="text-sky-600">{{ data }}</span></p>
        </div>
      </div>

      <div class="row g-4" v-for="(cards, index) in props.NewCards" :key="index">
        <div class="col-12 col-sm-6 col-md-4 col-lg-4 mtg-card-container" v-for="(card, idx) in cards" :key="idx">
          <div class="mtg-card" @click="openCardModal(card)">
            <div class="card-art-wrapper">
              <img :src="CE.CardFullImageFinder(card)" class="card-art" :alt="CE.CardNameReader(card)">
              <div class="card-overlay"></div>
            </div>
            <div class="card-content">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <div>
                  <h5 class="fw-bold mb-0 text-white truncate">{{ CE.CardNameReader(card) }}</h5>
                  <h6 class="fw-bold mb-0 text-white truncate">{{ CE.CardTypeReader(card) }}</h6>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center">
                  <span class="mana-cost w-100 text-center mb-2" :class="rarityClass(CE.CardRarityReader(card))">
                    {{ CE.CardRarityReader(card) }}
                  </span>
                  <span class="mana-cost">
                    <img v-for="(simbolo, i) in createManaSymbolsArray(CE.CardCostReader(card))" :src="CE.CardSymbolMounter(simbolo)" :key="i" style="max-width: 20px;">
                  </span>
                </div>
              </div>
              <p class="text-primary font-mono x-small mb-0 text-uppercase" style="font-size: 0.7rem;"></p>
            </div>
          </div>
        </div>
      </div>

      <div class="row g-4">
        <div class="col-12">
          <div class="tech-panel p-4 mb-2">
            <h2 class="fw-bold text-uppercase">New data <span class="text-sky-600">Downloading</span></h2>
            <p class="text-secondary mb-0" >Expected download time remaining <span class="text-sky-600">{{ d1 }}:{{ h1 }}:{{ m1 }}:{{ s1 }}</span></p>
          </div>
        </div>
      </div>

      <div class="row g-4">
        <div class="col-12">
          <div class="tech-panel p-4">
            <h6 class="font-mono border-bottom border-secondary pb-2 mb-3">TERMINAL_LOG</h6>
            <div id="system-log" class="font-mono small text-info overflow-hidden" style="height: 150px;">
              <transition-group name="log" tag="div" id="system-log" class="font-mono small text-info overflow-hidden" style="height: 150px;">
                <h6 class="text-secondary" v-for="(log, index) in DisplayLogs" :key="index" :style="{ cursor: log.prefix === '[LOG]' ? 'pointer' : 'default' }" @click="log.prefix === '[LOG]' ? HandleLogClick(log.text.index) : null">
                  <span class="text-sky-600 me-2">{{ log.prefix }}</span>
                  <span v-if="log.prefix === '[LOG]' && isNewLog(log.idx)" class="mana-cost rarity-special blink">[NEW]</span>
                  <span> > {{ typeof log.text === 'object' ? log.text.text : log.text }}</span>
                </h6>
              </transition-group>

            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style>
  .log-move {
    transition: transform 0.5s ease;
  }

  .log-enter-active,
  .log-leave-active {
    transition: all 0.5s ease;
  }

  .log-enter-from,
  .log-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }

</style>
