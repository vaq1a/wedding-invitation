<template>
  <NuxtLayout>
    <div>
      <header>
        <nav class="navigation">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/users">Users</NuxtLink>
        </nav>
      </header>

      <NuxtPage />

      <footer>
        <p>© 2025 Wedding invitation</p>
      </footer>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.navigation {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
