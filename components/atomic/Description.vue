<template>
  <p ref="description" class="description" :style="animationStyle">
    <slot />
  </p>
</template>

<script setup lang="ts">
import { useInView } from 'motion-v'

const description = ref(null)
const isInView = useInView(description, {
  once: true,
  margin: "-200px 0px -110px 0px"
})

const animationStyle = computed(() => ({
  opacity: isInView.value ? 1 : 0,
  transition: 'all 1s ease-in-out'
}))
</script>

<style scoped lang="scss">
  .description {
    font-size: 20px;
    line-height: 1.25;
    text-align: center;
  }
</style>
