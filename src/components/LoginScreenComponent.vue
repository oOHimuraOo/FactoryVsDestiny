<script setup>
import { onMounted, ref, defineEmits } from 'vue';

const CredentialsTexts = ["CHECKING ID", "USER VERIFIED", "PERMISSIONS OK", "CREDENTIALS VALIDATED", "WELCOME USER: β-013"];
const ProtocolTexts = [">> Boot sequence initiated...", ">> Power grid stabilized...", ">> Core subsystems online...", ">> Neural interface modules loaded...", ">> Data clusters synchronized...", ">> Research protocols active...", ">> Systems ready..."];
const timer = 750;
const emit = defineEmits(['LoginEfetuado']);

let StatusClass = ref(['blink']);
let StatusText = ref(">> Awaiting Launch Protocol...");
let Credentials = ref("Verifying Credentials");
let progress = ref(0);
let logginPressed = ref(false);

function Logar() {
  logginPressed.value = true;
  ProtocolTexts.forEach((text, i) => {
    setTimeout(() => {
      StatusClass.value = [''];
      StatusText.value = text;
      progress.value = Math.round(((i+1) / ProtocolTexts.length) *100);

      if (StatusText.value === ">> Systems ready...") {
        setTimeout(() => {
          emit('LoginEfetuado');
        }, timer * 2)
      }
    }, (i+1) * timer);
  });

}
function ChangeText() {
  CredentialsTexts.forEach((text, i) => {
    setTimeout(() => {
      Credentials.value = text;
    }, (i+1) * timer)
  });
};

onMounted(() => {
  ChangeText();
})


</script>


<template>
  <div id="login-screen" class="position-fixed inset-0 w-100 h-100 z-3 flex-column d-flex align-items-center justify-content-center transition-opacity" style="z-index: 9999;">
      <div class="scanline"></div>
      <div class="tech-panel p-5 text-center" style="max-width: 450px; width: 90%;">
          <p class="rajdhani-regular text-primary-neon mb-2 small" style="color: var(--primary-neon);">SISTEMA OPERACIONAL β: 0.13-STABLE</p>
          <h1 class="display-6 rajdanhani-regular fw-bold mb-4 tracking-tighter text-light">{{ Credentials }}</h1>

          <div v-if="Credentials == 'WELCOME USER: β-013'">
            <div class="progress bg-dark mb-4" style="height: 4px; border-radius: 0;" >
                <div id="loading-bar" class="progress-bar" :style="{ width: progress + '%', backgroundColor: 'var(--primary-neon)', transition: 'width 1.5s ease-in-out' }"></div>
            </div>

            <p id="login-status" class="rajdhani-regular small mb-4 text-secondary text-sky-600" :class="StatusClass"> {{ StatusText }}</p>

            <button @click="Logar" class="btn btn-neon w-100 py-3" :disabled="logginPressed">Launch</button>
          </div>
      </div>
  </div>
</template>

