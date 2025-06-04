<template>
  <div class="envelope">
    <div class="envelope__content">
      Вы приглашены на свадьбу!
      <slot />
    </div>
    <div class="envelope__flap" :class="{ 'envelope__flap--open': isOpen }" @click="toggleEnvelope">
      <div class="envelope__flap-inner" />
    </div>
  </div>
</template>

<script setup lang="ts">
import useConfetti from '~/composables/useConfetti';

const isOpen = ref(false);

const toggleEnvelope = () => {
  isOpen.value = !isOpen.value;

  useConfetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
};
</script>

<style scoped lang="scss">
.envelope {
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 5px;
  overflow: hidden;
  margin: auto;
}

.envelope__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: $color-primary-20;
  z-index: 1;
  text-align: center;
}

.envelope__flap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: top;
  transition: transform 0.5s ease;
  z-index: 2;
  cursor: pointer;
}

.envelope__flap--open {
  transform: rotateX(180deg);
}

.envelope__flap-inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $color-dark-10;
  clip-path: polygon(0 0, 50% 50%, 100% 0);
}
</style>
