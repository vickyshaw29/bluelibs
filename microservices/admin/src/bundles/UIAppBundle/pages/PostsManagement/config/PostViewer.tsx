import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Post } from "@bundles/UIAppBundle/collections";
import { PostViewer as BasePostViewer } from "./PostViewer.base";

@Service({ transient: true })
export class PostViewer extends BasePostViewer {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<Post> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
