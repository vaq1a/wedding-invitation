<template>
  <main class="main">
    <slot />
  </main>
</template>

<style scoped lang="scss">
.main {
  width: 100%;
  max-width: 455px;
  margin: 0 auto;
  background-color: $color-light;
  box-shadow: 0 4px 20px 12px $color-shadow;
}
</style>