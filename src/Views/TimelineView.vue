<script setup>
  import { ref, defineProps, defineEmits, onMounted } from 'vue';
  import * as LE from '../utils/LoreEssentials';
  import * as CE from '../utils/CardEssentials';

  const emit = defineEmits(['openLoreModal']);
  const props = defineProps({
    AllLore: Array
  })

  let timelineInfo = ref([]);

  function openLoreModal(loreIdxs) {
    emit("openLoreModal", loreIdxs)
  }

  function mountTimelineInfo() {
    if (!props.AllLore || !Array.isArray(props.AllLore)) return;

    timelineInfo.value = [];

    props.AllLore.forEach(idxs => {
      timelineInfo.value.push({
        tn: LE.LoreTopicNameReader(idxs.t),
        cn: LE.LoreChapterNameReader(idxs.t, idxs.c),
        cs: LE.LoreChapterSinopseReader(idxs.t, idxs.c),
        a: LE.LoreAuthorReader(idxs.t),
        ca: LE.LoreCoAuthorReader(idxs.t),
        ci: LE.LoreChapterCardFinder(idxs.t, idxs.c),
        idxs: idxs
      })
    });

  }

  onMounted(() => {
    mountTimelineInfo()
  })

</script>

<template>
  <section id="view-timeline" class="view-content">
    <div class="container">
      <h3 class="fw-bold mb-5">CRONOLOGICAL LOGS</h3>
      <div class="timeline-container position-relative">
        <div class="timeline-line position-absolute start-50 translate-middle-x" style="top: 0; bottom: 0; width: 2px; background-color: #dee2e6;"></div>
        <div v-for="(info, index) in timelineInfo" :key="index" class="timeline-item position-relative mb-5">
          <div class="timeline-connector position-absolute" :style="{ top: '50%', [index % 2 === 0 ? 'right' : 'left']: '0', width: 'calc(50%)', height: '2px', backgroundColor: '#dee2e6', transform: index % 2 === 0 ? 'translateX(-100%)' : 'translateX(100%)' }"></div>
          <div :class="[index % 2 === 0 ? 'me-auto' : 'ms-auto', info.idxs.r ? ' cover-black' : 'timeline-content', 'timeline-card']" @click="info.idxs.r ? null : openLoreModal(info.idxs)">
            <div class="card-art-wrapper">
              <img :src="CE.CardFullImageFinder(info.ci)" class="card-art" :alt="CE.CardNameReader(info.ci)">
            </div>
            <div class="tech-panel p-4  position-relative">
              <div class="d-flex justify-content-between">
                <span class="fw-bold text-info font-mono">{{info.tn}}</span>
                <span class="small opacity-50">{{ info.a }} // {{ info.ca }}</span>
              </div>
              <h5 class="mt-2">{{info.cn}}</h5>
              <p class="small text-secondary mb-0">{{info.cs}}</p>
            </div>
          </div>
          <div class="timeline-dot position-absolute top-50 start-50 translate-middle bg-white border border-primary rounded-circle" style="width: 20px; height: 20px; z-index: 10;"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .cover-black {
    position: relative;
  }

  .cover-black::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    z-index: 100;
  }

  @media (min-width: 768px) {
    .timeline-line {
      display: block !important;
    }

    .timeline-connector {
      display: block !important;
    }

    .timeline-card {
      width: calc(50% - 40px) !important;
    }
  }

  @media (max-width: 767px) {
    .timeline-line {
      display: none !important;
    }

    .timeline-connector {
      display: none !important;
    }

    .timeline-item {
      margin-left: 0 !important;
    }

    .timeline-card {
      width: 100% !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
    }

    .timeline-dot {
      display: none !important;
    }

    .card-art-wrapper {
      max-height: 300px !important;
      overflow: hidden;
    }

    .tech-panel {
      padding: 1rem !important;
    }
  }
</style>
