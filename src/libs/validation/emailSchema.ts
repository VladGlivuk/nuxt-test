import { helpers, required, email } from "@vuelidate/validators";

export const emailSchema = {
  required: helpers.withMessage("Email is required", required),
  email: helpers.withMessage("Please enter a valid email address", email),
};
