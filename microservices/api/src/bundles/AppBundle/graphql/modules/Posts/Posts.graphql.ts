export default /* GraphQL */ `
  type Query {
    PostsFindOne(query: QueryInput): Post
    PostsFindOneByID(_id: ObjectId!): Post
    PostsFind(query: QueryInput): [Post]!
    PostsCount(query: QueryInput): Int!
  }

  type Mutation {
    PostsInsertOne(document: PostInsertInput!): Post
    PostsUpdateOne(_id: ObjectId!, document: PostUpdateInput!): Post!
    PostsDeleteOne(_id: ObjectId!): Boolean
  }

  type Subscription {
    PostsSubscription(body: EJSON): SubscriptionEvent
    PostsSubscriptionCount(filters: EJSON): SubscriptionCountEvent
  }
`;
