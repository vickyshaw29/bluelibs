import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";
import { PostInsertInput, PostUpdateInput } from "../../../services/inputs";
import { PostsCollection } from "../../../collections/Posts/Posts.collection";

export default {
  Query: [
    [],
    {
      PostsFindOne: [X.ToNovaOne(PostsCollection)],
      PostsFind: [X.ToNova(PostsCollection)],
      PostsCount: [X.ToCollectionCount(PostsCollection)],
    },
  ],
  Mutation: [
    [],
    {
      PostsInsertOne: [
        X.ToModel(PostInsertInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.ToDocumentInsert(PostsCollection),
        X.ToNovaByResultID(PostsCollection),
      ],
      PostsUpdateOne: [
        X.ToModel(PostUpdateInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.CheckDocumentExists(PostsCollection),
        X.ToDocumentUpdateByID(PostsCollection, null, ({ document }) => ({
          $set: document,
        })),
        X.ToNovaByResultID(PostsCollection),
      ],
      PostsDeleteOne: [
        X.CheckDocumentExists(PostsCollection),
        X.ToDocumentDeleteByID(PostsCollection),
      ],
    },
  ],
  Subscription: {
    PostsSubscription: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscription(PostsCollection)],
    },
    PostsSubscriptionCount: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscriptionCount(PostsCollection)],
    },
  },
} as IResolverMap;
