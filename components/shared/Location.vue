<template>
  <div class="wrapper">
    <Title class="title">
      МЕСТО <br />
      ПРОВЕДЕНИЯ
    </Title>
    <div class="preview">
      <div class="image-container">
        <BorderIcon class="border--top border" />
        <img src="/homestead.png" :alt="imageAlt"  class="responsive-image" />
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

  defineProps({
    imageAlt: {
      type: String,
      default: "Место проведения",
    },
  });

  const handleMapOpen = () => {
    console.log('Opening map...');
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
    text-transform: uppercase;
  }

  .preview {
    position: relative;
    width: 100%;
  }

  .image-container {
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
    margin: -50px auto 0;
  }

  .description {
    padding: 20px;
    color: $color-primary;
  }

  .border {
    position: absolute;
    z-index: 3;

    &--top {
      top: -45px;
      left: 0;
      right: 0;
    }

    &--bottom {
      bottom: 15px;
      left: 0;
      right: 0;
    }
  }
</style>
