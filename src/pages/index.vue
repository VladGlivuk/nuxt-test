<script setup lang="ts">
import { useMediaQuery } from "../composables/useMediaQuery";

useSeoMeta({
  title: "Test Task",
});

const isDesktop = useMediaQuery("(min-width: 1160px)");
</script>

<template>
  <section class="homePage">
    <div class="leftSide">
      <div class="textBlock">
        <h1>Test form</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
        <CirclesWithAnimatedElements v-if="!isDesktop" />

        <ApplyForm />
      </div>
    </div>
    <div v-if="isDesktop" class="rightSide">
      <CirclesWithAnimatedElements />
    </div>
  </section>
</template>

<style scoped lang="postcss">
.homePage {
  @apply flex-1 flex max-w-[1280px] w-full mx-auto p-2 items-center justify-between;

  @media (max-width: 1160px) {
    @apply justify-center;
  }
}

.leftSide {
  @apply flex flex-col gap-8;
}

.textBlock {
  @apply flex flex-col gap-6 max-w-[426px];
}

.textBlock h1 {
  @apply font-montserrat font-semibold text-[64px] leading-[95%] 
         tracking-[-1px] uppercase text-[#010101];

  @media (max-width: 1160px) {
    @apply text-[48px];
  }
}

.textBlock h2 {
  @apply font-montserrat font-normal text-base leading-[22px] 
         tracking-normal text-[#010101];
}
</style>
