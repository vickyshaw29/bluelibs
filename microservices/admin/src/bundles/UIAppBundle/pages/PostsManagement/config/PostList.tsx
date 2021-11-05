import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Post } from "@bundles/UIAppBundle/collections";
import { PostList as BasePostList } from "./PostList.base";

@Service({ transient: true })
export class PostList extends BasePostList {
  build() {
    super.build();
    // Perform additional modifications such as updating how a list item renders or add additional ones
  }

  static getRequestBody(): QueryBodyType<Post> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
