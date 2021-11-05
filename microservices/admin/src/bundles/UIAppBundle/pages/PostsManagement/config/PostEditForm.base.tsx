/** @overridable */
import { XRouter, use, IComponents, QueryBodyType } from "@bluelibs/x-ui";
import { XForm } from "@bluelibs/x-ui-admin";
import { Service, Inject } from "@bluelibs/core";
import { SmileOutlined } from "@ant-design/icons";
import { Routes } from "@bundles/UIAppBundle";
import * as Ant from "antd";
import {
  Post,
  UsersCollection,
  PostsCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class PostEditForm extends XForm {
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

  static getRequestBody(): QueryBodyType<Post> {
    return {
      _id: 1,
      title: 1,
      body: 1,
    };
  }

  onSubmit(_id, values: Partial<Post>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .updateOne(_id, { $set: values })
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.posts.edit_confirmation"),
          icon: <SmileOutlined />,
        });
      })
      .catch((err) => {
        Ant.notification.warn({
          message: t("generics.error"),
          description: t("generics.error_message"),
        });
      });
  }
}
