/** overridable */
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class PostUpdateInput {
  @Is(a.string().nullable())
  body?: string;

  @Is(a.string().nullable())
  title?: string;
}
