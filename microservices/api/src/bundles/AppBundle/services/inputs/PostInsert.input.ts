import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { PostInsertInput as BasePostInsertInput } from "./PostInsert.input.base";

@Schema()
export class PostInsertInput extends BasePostInsertInput {
  // You can extend the base here
}
