import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { PostUpdateInput as BasePostUpdateInput } from "./PostUpdate.input.base";

@Schema()
export class PostUpdateInput extends BasePostUpdateInput {
  // You can extend the base here
}
