<script setup lang="ts">
interface InputProps {
  placeholder: string;
  name: string;
  error?: string | Ref<string, string>;
  maxWidth?: string;
}

const props = defineProps<InputProps>();

const inputModel = defineModel<string>("input");
</script>

<template>
  <div class="input-wrapper">
    <input
      v-model="inputModel"
      :placeholder="props.placeholder"
      :name="props.name"
      :class="[
        'input',
        props.maxWidth ? `max-w-[${props.maxWidth}]` : 'max-w-[328px]',
      ]"
    />
    <span v-if="error" class="error">{{ error }}</span>
  </div>
</template>

<style scoped lang="postcss">
.input-wrapper {
  @apply flex flex-col gap-2;
}

.input {
  @apply w-full h-[46px] border border-solid border-[#0F0F100D] rounded-[12px] py-3 px-[18px] bg-white;
  @apply font-montserrat font-normal text-base leading-[22px] tracking-normal text-black;
  @apply placeholder:text-[#0F0F108C] placeholder:font-montserrat placeholder:font-normal placeholder:text-base placeholder:leading-[22px] placeholder:tracking-normal;
}

.error {
  @apply text-red-500 text-sm mt-1;
}
</style>
