import { helpers, required, alpha } from "@vuelidate/validators";

export const nameSchema = {
  required: helpers.withMessage("Name is required", required),
  alpha: helpers.withMessage("Name must contain only letters", alpha),
};
