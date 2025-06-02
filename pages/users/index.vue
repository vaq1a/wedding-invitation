<script setup lang="ts">
  import type { NewUser } from "~/server/db/schema";

  const { users, loading, error, fetchUsers, createUser, deleteUser } = useUsers();

  const newUser = ref<NewUser>({
    name: "",
    email: "",
  });

  onMounted(() => {
    fetchUsers();
  });

  const handleSubmit = async () => {
    try {
      await createUser(newUser.value);
      newUser.value = { name: "", email: "" };
    } catch (error) {
      console.error("Failed to create user:", error);
    }
  };
</script>

<template>
  <div>
    <h1>Users</h1>

    <div v-if="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>

    <form @submit.prevent="handleSubmit">
      <input v-model="newUser.name" placeholder="Name" required />
      <input v-model="newUser.email" type="email" placeholder="Email" required />
      <button type="submit">Add User</button>
    </form>

    <ul v-if="users.length">
      <li v-for="user in users" :key="user.id">
        {{ user.name }} ({{ user.email }})
        <button @click="deleteUser(user.id)">Delete</button>
      </li>
    </ul>
    <p v-else>No users found.</p>
  </div>
</template>
