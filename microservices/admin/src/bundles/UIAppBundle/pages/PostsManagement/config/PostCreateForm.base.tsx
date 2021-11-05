/** @overridable */
import { XRouter, use, IComponents } from "@bluelibs/x-ui";
import { SmileOutlined } from "@ant-design/icons";
import * as Ant from "antd";
import { XFormElementType, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service, Inject } from "@bluelibs/core";
import { features } from "./features";

import {
  Post,
  UsersCollection,
  PostsCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class PostCreateForm extends XForm {
  @Inject(() => PostsCollection)
  collection: PostsCollection;

  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "title",
        label: t("management.posts.fields.title"),
        name: ["title"],
        required: true,
        component: Ant.Input,
      },

      {
        id: "body",
        label: t("management.posts.fields.body"),
        name: ["body"],
        required: true,
        component: Ant.Input,
      },
    ]);
  }

  onSubmit(document: Partial<Post>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .insertOne(document)
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.posts.create_confirmation"),
          icon: <SmileOutlined />,
        });

        if (features.view) {
          return this.router.go(Routes.POSTS_VIEW, {
            params: {
              id: _id,
            },
          });
        }
        if (features.list) {
          return this.router.go(Routes.POSTS_LIST);
        }
        if (features.edit) {
          return this.router.go(Routes.POSTS_EDIT, {
            params: {
              id: _id,
            },
          });
        }
      })
      .catch((err) => {
        Ant.notification.warn({
          message: t("generics.error"),
          description: t("generics.error_message"),
        });
      });
  }
}
