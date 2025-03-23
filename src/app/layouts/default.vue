<script setup lang="ts"></script>

<template>
  <div class="layout">
    <main class="page">
      <slot />
    </main>
  </div>
</template>

<style lang="postcss">
.layout {
  @apply flex flex-col min-h-screen;
}

.page {
  @apply flex-auto flex;
}
</style>
