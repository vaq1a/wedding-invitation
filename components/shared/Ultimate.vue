<template>
  <div class="wrapper">
    <Description class="description">
      Приглашаем отметить этот день вместе с нами!
    </Description>
  </div>

</template>

<script setup lang="ts">
import Description from '~/components/atomic/Description.vue';
</script>

<style scoped lang="scss">
.wrapper {
  padding: 20px 20px 70px;
}

.description {
  color: $color-primary;
}
</style>