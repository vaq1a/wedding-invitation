<template>
  <div class="wrapper">
    <Description class="description">
      Приглашаем отметить этот день вместе с нами! Будем счастливы видеть Вас в числе наших гостей!
    </Description>
  </div>

</template>

<script setup lang="ts">
import Description from '~/components/atomic/Description.vue';
</script>

<style scoped lang="scss">
.wrapper {
  padding: 40px 20px 100px;
}

.description {
  color: $color-primary;
}
</style>