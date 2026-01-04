<script setup>
import { ref } from 'vue';

const techs = ref([
    { n: 'Cérebro Positrônico', s: 'Asimov', r: 'Redes Neurais / Deep Learning', p: 70 },
    { n: 'Replicador', s: 'Star Trek', r: 'Impressão 3D Molecular', p: 45 },
    { n: 'Comunicação Quântica', s: 'Duna', r: 'Entrelaçamento Quântico', p: 30 },
    { n: 'Interface Neural', s: 'Matrix', r: 'Neuralink / BCI', p: 85 }
])
</script>

<template>
<section id="view-tech" class="view-content">
        <h3 class="fw-bold mb-4">EXTRAPOLAÇÃO TECNOLÓGICA</h3>
        <div class="row g-3" id="tech-grid">
          <div class="col-md-3" v-for="(tech, index) in techs" :key="index" >
            <div class="tech-panel p-3 text-center">
              <h6 class="text-info">{{tech.n}}</h6>
              <div class="progress bg-dark my-2" style="height: 5px;">
                <div class="progress-bar bg-info" :style="{ width: tech.p + '%' }"></div>
              </div>
              <small class="font-mono" style="font-size: 0.7rem;">PRECISÃO: {{tech.p}}%</small>
            </div>
          </div>
        </div>
      </section>
</template>
