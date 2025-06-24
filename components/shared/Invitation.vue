<template>
  <div class="wrapper">
    <BorderIcon class="border--top border" />
    <div class="invitation">
      <Title>
        Дорогие родные <br />
        и близкие!
      </Title>
      <Description class="description">
        С особым трепетом приглашаем Вас на наш первый семейный праздник - НАШУ СВАДЬБУ!
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
}

.border {
  position: relative;
  z-index: 3;

  &--top {
    top: 20px;
  }

  &--bottom {
    bottom: 20px;
  }
}

.invitation {
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 70px 20px;
  background-color: $color-primary;

  .title,
  .description {
    color: $color-light;
  }
}
</style>
