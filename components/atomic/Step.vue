<template>
  <div ref="step" class="step" :style="animationStyle">
    <span class="title">{{ time }}</span>
    <HeartIcon class="heart" />
    <span class="description">
      <slot />
    </span>
  </div>
</template>

<script setup lang="ts">
import HeartIcon from '~/components/atomic/HeartIcon.vue';

defineProps({
  time: {
    type: String,
    required: true,
  },
});

const step = ref(null)
const isInView = useInView(step, {
  once: true,
  margin: "-200px 0px -110px 0px"
})

const animationStyle = computed(() => ({
  opacity: isInView.value ? 1 : 0,
  transition: 'all 1s ease-in-out'
}))
</script>

<style scoped lang="scss">
.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: $color-primary;
  margin: 0 auto;

  &:not(:last-child) {
    margin-bottom: 95px;
  }

  .title {
    font-size: 48px;
    line-height: 55px;
  }

  .heart {
    width: 13px;
    height: 13px;
    margin-top: 7px;
    margin-bottom: 7px;
  }

  .description {
    font-size: 18px;
    line-height: 23px;
    text-align: center;
  }
}
</style>