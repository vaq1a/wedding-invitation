<template>
  <main>
    <Calendar />
    <GuestForm />
  </main>
</template>

<script setup lang="ts">
import Calendar from "~/components/ui/calendar/Calendar.vue";
import GuestForm from "~/components/guest-form/GuestForm.vue";

useHead({
  title: 'Приглашение',
  meta: [
    { name: 'description', content: 'Описание страницы' },
    { name: 'keywords', content: 'ключевые, слова' }
  ]
})
</script>