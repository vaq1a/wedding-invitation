<template>
  <div class="wrapper">
    <Title class="title">
      Место проведения
    </Title>
    <div class="preview">
      <div class="image-container">
        <BorderIcon class="border--top border" />
        <nuxt-img
          src="/homestead.jpg"
          width="455"
          height="256"
          format="webp"
          quality="80"
          alt="Место проведения"
          class="responsive-image"
        />
        <BorderIcon class="border--bottom border" />
      </div>
      <Button class="button" @click="handleMapOpen">
        Открыть
        карту
      </Button>
    </div>
    <Description class="description">
      Загородная усадьба “Охотник у дуба” Минский район, аг.Новоселье, ул. Лесная, 3
    </Description>
  </div>
</template>

<script setup lang="ts">
  import BorderIcon from "~/components/atomic/BorderIcon.vue";
  import Button from "~/components/atomic/Button.vue";
  import Description from "~/components/atomic/Description.vue";
  import Title from "~/components/atomic/Title.vue";

  const handleMapOpen = () => {
    const latitude = 53.913317
    const longitude = 27.209269

    const yandexUrl = `https://yandex.ru/maps/?pt=${longitude},${latitude}&z=15`

    window.open(yandexUrl, '_blank')
  };
</script>

<style scoped lang="scss">
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .title {
    padding: 20px;
    color: $color-primary;
  }

  .preview {
    position: relative;
    width: 100%;
  }

  .image-container {
    position: relative;
    width: 100%;
  }

  .responsive-image {
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
    object-fit: cover;
  }

  .button {
    position: relative;
    z-index: 3;
    margin: 5px auto 0;
  }

  .description {
    padding: 20px;
    color: $color-primary;
  }

  .border {
    position: absolute;
    z-index: 3;

    &--top {
      top: -38px;
      left: 0;
      right: 0;
    }

    &--bottom {
      bottom: -25px;
      left: 0;
    }
  }
</style>
