<template>
  <div class="wrapper">
    <Title class="title">Программа дня</Title>
    <div ref="timetable" class="timetable" :style="animationStyle">
      <div class="step">
        <span class="title">15:30</span>
        <HeartIcon class="heart" />
        <span class="description">
          Сбор гостей, <br>
          фуршет
        </span>
      </div>
      <ProgramLine class="line line--first" />
      <div class="step">
        <span class="title">16:30</span>
        <HeartIcon class="heart" />
        <span class="description">
          Свадебная <br>
          церемония
        </span>
      </div>
      <ProgramLine class="line line--second" />
      <div class="step step--end">
        <span class="title">17:00</span>
        <HeartIcon class="heart" />
        <span class="description">
          Праздничный <br>
          банкет
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import HeartIcon from "~/components/atomic/HeartIcon.vue";
  import Title from "~/components/atomic/Title.vue";
  import ProgramLine from '~/components/atomic/ProgramLine.vue';

  const timetable = ref(null)
  const isInView = useInView(timetable, {
    once: true,
    margin: "-200px 0px -110px 0px"
  })

  const animationStyle = computed(() => ({
    opacity: isInView.value ? 1 : 0,
    transition: 'all 1s ease-in-out'
  }))
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

  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    color: $color-primary;
    margin: 0 auto;

    &:not(:last-child) {
      margin-bottom: 95px;
    }

    .title {
      font-size: 48px;
      line-height: 55px;
    }

    .heart {
      width: 13px;
      height: 13px;
      margin-top: 7px;
      margin-bottom: 7px;
    }

    .description {
      font-size: 20px;
      line-height: 23px;
    }
  }
</style>
