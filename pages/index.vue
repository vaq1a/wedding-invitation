<template>
  <main>
    <Invitation />
    <Calendar />
    <Location />
    <Timetable />
<!--    <GuestForm />-->
  </main>
</template>

<script setup lang="ts">
import Calendar from "~/components/shared/Calendar.vue";
import Invitation from "~/components/shared/Invitation.vue";
import Location from "~/components/shared/Location.vue";
import Timetable from "~/components/shared/Timetable.vue";
// import GuestForm from "~/components/shared/GuestForm.vue";

useHead({
  title: 'Приглашение',
  meta: [
    { name: 'description', content: 'Описание страницы' },
    { name: 'keywords', content: 'ключевые, слова' }
  ]
})
</script>