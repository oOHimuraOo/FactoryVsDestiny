<script setup>
import { ref } from 'vue';
import LoginScreenComponent from './components/LoginScreenComponent.vue';
import MainInterfaceComponent from './components/MainInterfaceComponent.vue';

let loginVisible = ref(true);
function logar() {
  loginVisible.value = false;
}

</script>

<template>
  <LoginScreenComponent v-if="loginVisible" @-login-efetuado="logar" />
  <div class="tech-grid" style="height: 100vh;">
    <MainInterfaceComponent v-if="!loginVisible" />
  </div>
</template>

