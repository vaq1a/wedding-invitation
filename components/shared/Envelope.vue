<template>
  <div class="envelope"
       :class="{ 'open': isOpen }"
       @click="toggleEnvelope">
    <div class="front flap"></div>
    <div class="front pocket"></div>
    <div class="letter">
      <p>Вы приглашены на свадьбу!</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleEnvelope = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped lang="scss">
.envelope {
  position: relative;
  width: 100%;
  height: 300px;
  margin-top: 200px;
}

.front {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: $color-accent-20;
}

.flap {
  clip-path: polygon(0 0, 50% 50%, 100% 0);
  z-index: 5;
  transition: transform 0.4s ease;
  transform-origin: top;
  background-color: $color-primary;
}

.pocket {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  z-index: 4;
}

.letter {
  position: absolute;
  width: 80%;
  height: 80%;
  background-color: $color-light;
  top: 5%;
  left: 5%;
  transition: transform 0.4s ease;
  z-index: 3;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  border: 1px solid red;
}

.envelope.open .flap {
  transform: rotateX(180deg);
  z-index: 2;
}

.envelope.open .letter {
  transform: translateY(-80px);
}
</style>
