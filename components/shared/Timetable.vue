<template>
  <div class="wrapper">
    <Title class="title">Программа дня</Title>
    <div class="timetable">
      <Step time="15:30">
        Сбор гостей, <br>
        фуршет
      </Step>
      <ProgramLine class="line line--first" />
      <Step time="16:00">
        Свадебная <br>
        церемония
      </Step>
      <ProgramLine class="line line--second" />
      <Step time="17:00">
        Праздничный <br>
        банкет
      </Step>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Title from "~/components/atomic/Title.vue";
  import ProgramLine from '~/components/atomic/ProgramLine.vue';
  import Step from '~/components/atomic/Step.vue';
</script>

<style scoped lang="scss">
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 70px 20px;
  }

  .title {
    color: $color-primary;
  }

  .timetable {
    position: relative;
  }

  .line {
    position: absolute;

    &--first {
      left: 50%;
      transform: translateX(-50%);
      top: 60px;
    }

    &--second {
      left: 50%;
      transform: translateX(-50%);
      bottom: 54px;
    }
  }
</style>
