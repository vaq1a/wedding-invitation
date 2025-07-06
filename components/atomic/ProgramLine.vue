<template>
  <svg ref="line" :style="animationStyle" width="263" height="238" viewBox="0 0 263 238" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M142.5 3.99944C184.5 -9 266 15.598 262 65.998C258 116.398 181.5 121.331 132 114.498C100 110.165 7.39994 111.598 0.999935 175.998C-5.40006 240.398 78.6667 242.333 121.5 233.499" stroke="#344611"/>
  </svg>
</template>

<script setup lang="ts">
const line = ref(null)
const isInView = useInView(line, {
  once: true,
  margin: "-200px 0px -110px 0px"
})

const animationStyle = computed(() => ({
  opacity: isInView.value ? 1 : 0,
  transition: 'all 1s ease-in-out'
}))
</script>