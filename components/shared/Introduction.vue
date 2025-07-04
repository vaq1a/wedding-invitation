<template>
  <div class="wrapper">
    <Title class="title">Вадим <br> Алина</Title>
    <div class="image-container">
      <img
        src="/pair.jpg"
        alt="Вадим и Алина"
        class="responsive-image"
        loading="lazy"
      />
    </div>
    <Description class="date">
      23.08.2025
    </Description>
  </div>
</template>

<script setup lang="ts">
import Title from "~/components/atomic/Title.vue";
import Description from '~/components/atomic/Description.vue';
</script>

<style scoped lang="scss">
.wrapper {
  max-width: 100%;
  overflow: hidden;
  position: relative;
}

.title {
  color: $color-light;
  font-size: 85px;
  position: absolute;
  top: 45px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
}

.date {
  color: $color-light;
  position: absolute;
  bottom: 45px;
  left: 50%;
  transform: translateX(-50%);
}

.image-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.image-container::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%);
  pointer-events: none;
}

.image-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background: linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 100%);
  pointer-events: none;
}

.responsive-image {
  width: 100%;
  height: auto;
  max-width: 100%;
  object-fit: contain;
}
</style>
