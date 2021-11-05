export default /* GraphQL */ `
  input UserInsertInput {
    isEnabled: Boolean!
    profile: UserProfileInput!
    roles: [UserRoles]!
  }

  input UserProfileInput {
    firstName: String!
    lastName: String!
  }
`;
