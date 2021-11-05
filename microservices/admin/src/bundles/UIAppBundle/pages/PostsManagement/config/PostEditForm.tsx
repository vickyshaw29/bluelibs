import { Service } from "@bluelibs/core";
import { PostEditForm as BasePostEditForm } from "./PostEditForm.base";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Post } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class PostEditForm extends BasePostEditForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<Post> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
