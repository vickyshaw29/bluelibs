/** @overridable */
import { IRoute } from "@bluelibs/x-ui";
import * as React from "react";
import { PostsList } from "../components/List/PostsList";
import { PostsCreate } from "../components/Create/PostsCreate";
import { PostsEdit } from "../components/Edit/PostsEdit";
import { PostsView } from "../components/View/PostsView";

import { SettingFilled } from "@ant-design/icons";

export const POSTS_LIST: IRoute = {
  path: "/admin/posts",
  component: PostsList,
  menu: {
    key: "POSTS_LIST",
    label: "management.posts.menu.title",
    icon: SettingFilled,
  },
};

export const POSTS_CREATE: IRoute = {
  path: "/admin/posts/create",
  component: PostsCreate,
};

export const POSTS_EDIT: IRoute<{ id: string }> = {
  path: "/admin/posts/:id/edit",
  component: PostsEdit,
};

export const POSTS_VIEW: IRoute<{ id: string }> = {
  path: "/admin/posts/:id/view",
  component: PostsView,
};
