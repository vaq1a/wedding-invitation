<template>
  <button class="button" :disabled="disabled" @click="$emit('click')">
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
  .button {
    font-family: $font-tenor;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 15px;
    background-color: $color-primary;
    color: $color-light;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: none;
    outline: none;

    &:hover {
      opacity: 0.9;
    }

    &:disabled {
      background-color: $color-dark-10;
      cursor: not-allowed;
    }
  }
</style>
