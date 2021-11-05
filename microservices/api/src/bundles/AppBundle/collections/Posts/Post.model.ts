import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { Post as BasePost } from "./Post.model.base";

@Schema()
export class Post extends BasePost {
  // You can extend the base here
}
