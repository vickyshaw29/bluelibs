import { IRoute } from "@bluelibs/x-ui";
import "./i18n";

import {
  POSTS_LIST as BASE_POSTS_LIST,
  POSTS_CREATE as BASE_POSTS_CREATE,
  POSTS_EDIT as BASE_POSTS_EDIT,
  POSTS_VIEW as BASE_POSTS_VIEW,
} from "./config/routes";

export const POSTS_LIST: IRoute = {
  ...BASE_POSTS_LIST,
};

export const POSTS_CREATE: IRoute = {
  ...BASE_POSTS_CREATE,
};

export const POSTS_EDIT: IRoute = {
  ...BASE_POSTS_EDIT,
};

export const POSTS_VIEW: IRoute = {
  ...BASE_POSTS_VIEW,
};
