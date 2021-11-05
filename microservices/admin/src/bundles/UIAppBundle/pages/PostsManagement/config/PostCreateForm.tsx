import { Service } from "@bluelibs/core";
import { PostCreateForm as BasePostCreateForm } from "./PostCreateForm.base";

@Service({ transient: true })
export class PostCreateForm extends BasePostCreateForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
