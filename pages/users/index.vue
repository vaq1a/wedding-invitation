<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>

    <table class="table" v-if="users.length">
      <thead>
      <tr>
        <th class="th">Номер</th>
        <th class="th">Данные семьи</th>
        <th class="th">Присутствие</th>
        <th class="th">Нужен ли ночлег?</th>
        <th class="th">Пожелания по музыке</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(user, index) in users" :key="user.id">
        <td class="td">{{index + 1}}</td>
        <td class="td">{{user.fullName}}</td>
        <td class="td">{{user.presence}}</td>
        <td class="td">{{user.agreement}}</td>
        <td class="td">{{user.music}}</td>
      </tr>
      </tbody>
    </table>
    <p v-else>No users found.</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'fullscreen',
})

const users = ref([]);
const loading = ref(false);
const error = ref<string | null>(null);

const fetchUsers = async () => {
  loading.value = true;
  error.value = null;
  try {
    users.value = await $fetch("/api/users");
  } catch (e: unknown) {
    if (e instanceof Error) {
      error.value = e.message;
    }
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchUsers();
});
</script>

<style scoped lang="scss">
.table, .td, .th {
  padding: 10px;
  border: 1px solid $color-primary;
}
</style>
