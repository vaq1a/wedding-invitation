<template>
  <h2 ref="title" class="title" :style="animationStyle">
    <slot />
  </h2>
</template>

<script setup lang="ts">
import { useInView } from 'motion-v'

const title = ref(null)
const isInView = useInView(title, {
  once: true,
})

const animationStyle = computed(() => ({
  opacity: isInView.value ? 1 : 0,
  transition: 'all 1s ease-in-out'
}))
</script>

<style scoped lang="scss">
  .title {
    font-size: 58px;
    line-height: 1;
    font-family: $font-kindentosca;
    text-align: center;
  }
</style>
