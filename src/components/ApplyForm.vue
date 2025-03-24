<script setup lang="ts">
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { emailSchema } from "../libs/validation/emailSchema";
import { nameSchema } from "../libs/validation/nameSchema";

const form = reactive({
  email: "",
  name: "",
});

const rules = {
  email: emailSchema,
  name: nameSchema,
};

const v$ = useVuelidate(rules, form);

const handleSubmit = async () => {
  const isValid = await v$.value.$validate();

  if (isValid) {
    alert("Data is Submitted");
  }
};

const emailError = computed(() =>
  v$.value.email.$error ? v$.value.email.$errors[0].$message : ""
);
const nameError = computed(() =>
  v$.value.name.$error ? v$.value.name.$errors[0].$message : ""
);
</script>

<template>
  <form class="form" @submit.prevent="handleSubmit">
    <div class="inputsContainer">
      <Input
        placeholder="Email"
        name="email"
        v-model:input="form.email"
        :error="emailError"
      />
      <Input
        placeholder="Name"
        name="text"
        v-model:input="form.name"
        :error="nameError"
      />
    </div>

    <Button type="submit">Apply</Button>
  </form>
</template>

<style scoped lang="postcss">
.form {
  @apply flex flex-col gap-8;
}

.inputsContainer {
  @apply flex flex-col gap-4;
}
</style>
