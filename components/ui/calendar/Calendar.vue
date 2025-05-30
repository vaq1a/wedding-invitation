<template>
  <div class="calendar">
    <div class="calendar__header">
      <h3>{{ month }} {{ year }}</h3>
    </div>
    <div class="calendar-grid">
      <div class="calendar-grid__weekdays">
        <div v-for="day in WEEK_DAYS" :key="day">{{ day }}</div>
      </div> 
      <div class="calendar-grid__days days">
        <div v-for="empty in EMPTY_DAYS" :key="`empty-${empty}`" class="days__item"/>
        <div
            v-for="day in TOTAL_DAYS"
            :key="day"
            class="days__item"
            :class="{ 'days__item--special-date': day === specialDate }"
        >
          <template v-if="day === specialDate">
            <Heart class="days__heart days__heart--position" />
            <span class="days__date days__date--position">{{ day }}</span>
          </template>
          <template v-else>
            {{ day }}
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Heart from '~/components/icons/Heart.vue';
import {EMPTY_DAYS, TOTAL_DAYS, WEEK_DAYS} from "~/constants/calendar";

interface Props {
  month?: string;
  year?: number;
  specialDate?: number;
}

withDefaults(defineProps<Props>(), {
  month: 'Август',
  year: 2025,
  specialDate: 23
});
</script>

<style scoped lang="scss">
.calendar {
  width: 300px;
  padding: 16px;
  color: $color-primary;

  &__header {
    text-align: center;
    margin-bottom: 16px;
  }
}

.calendar-grid {
  &__weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    font-weight: bold;
    margin-bottom: 8px;
  }

  &__days {
    text-align: center;
  }
}


.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 4px;
    position: relative;
    font-size: 16px;

    &--special-date {
      position: relative;
    }
  }

  &__heart {
    width: 38px;
    height: 38px;
    color: $color-primary;
    animation: heartbeat-pause 2.5s infinite;

    &--position {
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &__date {
    font-size: 16px;
    color: $color-light;
    font-weight: bold;

    &--position {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
    }
  }
}
</style>
