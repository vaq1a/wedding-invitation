<template>
  <div class="wrapper">
    <Title class="title">ПРОГРАММА ДНЯ</Title>
    <div class="timetable">
      <div class="step">
        <span class="title">15:30</span>
        <HeartIcon class="heart" />
        <span class="description">
          Сбор гостей, <br />
          фуршет
        </span>
      </div>
      <div class="step step--right step--middle">
        <span class="title">16:30</span>
        <HeartIcon class="heart" />
        <span class="description">
          Свадебная <br />
          церемония
        </span>
      </div>
      <div class="step step--end">
        <span class="title">17:00</span>
        <HeartIcon class="heart" />
        <span class="description">
          Праздничный <br />
          банкет
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import HeartIcon from "~/components/atomic/HeartIcon.vue";
  import Title from "~/components/atomic/Title.vue";
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

  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 120px;
    width: 100%;
    color: $color-primary;

    &--right {
      margin-left: auto;
    }

    &--middle {
      margin-top: 50px;
      margin-bottom: 93px;
    }

    &--end {
      max-width: 120px;
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
