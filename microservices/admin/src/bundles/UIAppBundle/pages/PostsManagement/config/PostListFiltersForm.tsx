import { Service } from "@bluelibs/core";
import { PostListFiltersForm as BasePostListFiltersForm } from "./PostListFiltersForm.base";

@Service({ transient: true })
export class PostListFiltersForm extends BasePostListFiltersForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
