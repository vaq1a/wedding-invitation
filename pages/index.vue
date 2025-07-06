<template>
    <Introduction />
    <Invitation />
    <Calendar />
    <Location />
    <Timetable />
    <Details />
    <GuestForm />
    <Ultimate />
</template>

<script setup lang="ts">
import Calendar from '~/components/shared/Calendar.vue';
import GuestForm from '~/components/shared/GuestForm.vue';
import Invitation from '~/components/shared/Invitation.vue';
import Location from '~/components/shared/Location.vue';
import Timetable from '~/components/shared/Timetable.vue';
import Ultimate from '~/components/shared/Ultimate.vue';
import Details from '~/components/shared/Details.vue';
import Introduction from '~/components/shared/Introduction.vue';

definePageMeta({
  layout: 'default',
})

useHead({
  title: 'Приглашение на свадьбу!',
  meta: [
    { name: 'description', content: 'С особым трепетом приглашаем Вас на наш первый семейный праздник - НАШУ СВАДЬБУ!' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://vadim-alina-23-08-2025.up.railway.app' },
    { property: 'og:title', content: 'Приглашение на свадьбу!' },
    { property: 'og:description', content: 'С особым трепетом приглашаем Вас на наш первый семейный праздник - НАШУ СВАДЬБУ!' },
    { property: 'og:image', content: 'https://vadim-alina-23-08-2025.up.railway.app/pair.jpg' },
  ],
});
</script>
