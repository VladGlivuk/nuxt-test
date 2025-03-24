<script setup lang="ts"></script>

<template>
  <button class="button"><slot /></button>
</template>

<style scoped lang="postcss">
.button {
  @apply bg-gradient-to-br from-[#0098EA] to-[#002584] text-white;
  @apply w-fit h-[46px] rounded-[12px] gap-3 py-3 px-6;
  @apply font-montserrat font-bold text-base leading-[22px] tracking-normal;
}
</style>
