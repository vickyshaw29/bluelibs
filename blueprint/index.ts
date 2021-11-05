import { Users } from "./collections/Users";
import { Post} from "./collections/Posts";
import { generateProject, app } from "./utils";

const application = app({
  id: "list",
  sharedModels: [
    // Configure shared models
  ],
  collections: [Users,Post],
});

generateProject(application, {
  // Mark this as true when you want to override even the non-overridable files
  // override: true,
});
