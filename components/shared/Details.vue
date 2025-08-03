<template>
  <div class="wrapper">
    <Title class="title">Детали</Title>
    <div class="content">
      <Description class="description">
        Будем признательны, если вы отдадите предпочтение нарядам в элегантных светлых, нежных пастельных или изысканных природных тонах. В женских нарядах исключением является белый цвет.
      </Description>
      <Description class="description">
        Просим Вас не дарить нам цветы.
        Если Вы хотите сделать нам
        комплимент, замените букет
        бутылкой Вашего любимого алкоголя.
      </Description>
    </div>
  </div>
</template>

<script setup lang="ts">
import Title from '~/components/atomic/Title.vue';
import Description from '~/components/atomic/Description.vue';
import OutlineIcon from '~/components/atomic/OutlineIcon.vue';
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 20px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 45px;
}

.title {
  color: $color-primary;
}

.description {
  font-size: 18px;
  color: $color-primary;

  &__date {
    display: inline-block;
    position: relative;
  }

  &__icon {
    &--position {
      position: absolute;
      top: -6px;
      left: -5px;
    }
  }
}
</style>