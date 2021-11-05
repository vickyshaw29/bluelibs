export default /* GraphQL */ `
  input UserUpdateInput {
    isEnabled: Boolean
    profile: UserProfileInput
    roles: [UserRoles]
  }

  input UserProfileInput {
    firstName: String!
    lastName: String!
  }
`;
