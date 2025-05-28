<template>
  <main>
    <Calendar />
  </main>
</template>

<script setup lang="ts">
import Calendar from "~/components/ui/calendar/Calendar.vue";

useHead({
  title: 'Приглашение',
  meta: [
    { name: 'description', content: 'Описание страницы' },
    { name: 'keywords', content: 'ключевые, слова' }
  ]
})
</script>