/** overridable */
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class PostInsertInput {
  @Is(a.string().required())
  body: string;

  @Is(a.string().required())
  title: string;
}
