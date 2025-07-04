<template>
  <div class="wrapper">
    <BorderIcon class="border--top border" color="#344611" />
    <div class="invitation">
      <Title>
        Дорогие родные <br />
        и близкие!
      </Title>
      <Description class="description">
        С особым трепетом приглашаем Вас на наш первый семейный праздник - <br> НАШУ СВАДЬБУ!
      </Description>
    </div>
    <BorderIcon class="border--bottom border" />
  </div>
</template>

<script setup lang="ts">
import BorderIcon from '~/components/atomic/BorderIcon.vue';
import Description from '~/components/atomic/Description.vue';
import Title from '~/components/atomic/Title.vue';
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
}

.border {
  position: absolute;
  z-index: 3;

  &--top {
    top: -20px;
  }

  &--bottom {
    bottom: -20px;
  }
}

.invitation {
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 40px 20px 80px 20px;
  background-color: $color-primary;

  .title,
  .description {
    color: $color-light;
  }
}
</style>
