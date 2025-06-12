<template>
  <button class="round-button" :disabled="disabled" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup lang="ts">
  defineProps({
    disabled: {
      type: Boolean,
      default: false,
    },
  });
</script>

<style scoped lang="scss">
  .round-button {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 50%;
    padding: 15px;
    aspect-ratio: 1;
    width: 100%;
    max-width: 100px;
    min-width: 40px;
    background-color: $color-primary;
    color: $color-light;
    border: 10px solid $color-light;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: none;

    &:hover {
      background-color: $color-primary-90;
    }

    &:disabled {
      background-color: $color-dark-10;
      cursor: not-allowed;
    }
  }
</style>
