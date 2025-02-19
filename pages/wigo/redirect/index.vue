<template>
  <div class="page-container">
    <img src="/thankyou/Oval-Orange.svg" class="orange" alt="Orange Oval">
    <img src="/thankyou/Oval-Orange-Dark.svg" class="orange-dark" alt="Dark Orange Oval">
    <img src="/thankyou/Oval-Magenta.svg" class="magenta" alt="Magenta Oval">
    <img src="/thankyou/Oval-Pink.svg" class="pink" alt="Pink Oval">
    <div class="content">
        <img src="/thankyou/wigo.svg" class="wigo" alt="Wigo">
        <p class="text">{{ message }}</p>
        <p class="text">{{ message2 }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'nuxt/app';

const message = ref('');
const message2 = ref('Redirect back to app');
const route = useRoute();

onMounted(() => {
  const result = route.query.result;

  if (result === '100') {
    message.value = 'Linking Success';
  } else {
    message.value = 'Linking Failed';
  }
});
</script>

<style scoped>
body, html {
  height: 100%;
  margin: 0;
}

.page-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.content {
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 10;
}

.wigo {
  width: 13vh;
  margin-bottom: 2vh;
}

.text {
  width: 33vh;
  font-size: 2.7vh;
  font-family: Arial Narrow;
  font-weight: 300;
  color: white;
}

.orange {
  position: fixed;
  z-index: 0;
  width: 97vh;
  left: -14vh;
  top: -25vh;
}

.orange-dark {
  position: fixed;
  z-index: 0;
  width: 51vh;
  left: -10vh;
  top: 14vh;
}

.pink {
  position: fixed;
  z-index: 0;
  width: 51vh;
  right: -8vh;
  top: 21vh;
}
</style>
