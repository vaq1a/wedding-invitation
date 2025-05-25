<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const id = parseInt(route.params.id as string);
const { getUser, updateUser } = useUsers();

const user = ref(await getUser(id));

const handleSubmit = async (e: Event) => {
  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);

  try {
    await updateUser(id, {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
    });
    router.push('/users');
  } catch (error) {
    console.error('Failed to update user:', error);
  }
};
</script>

<template>
  <div>
    <h1>Edit User</h1>

    <form @submit.prevent="handleSubmit">
      <input
          name="name"
          :value="user.name"
          placeholder="Name"
          required
      />
      <input
          name="email"
          type="email"
          :value="user.email"
          placeholder="Email"
          required
      />
      <button type="submit">Update User</button>
    </form>
  </div>
</template>
