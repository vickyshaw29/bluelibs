export default /* GraphQL */ `
  type User {
    _id: ObjectId
    createdAt: Date!

    """
    Represents the user who has created this object
    """
    createdBy: User

    """
    Represents the user's id who has created this object
    """
    createdById: ObjectId
    email: String!
    fullName: String!
    isEnabled: Boolean!
    profile: UserProfile!
    roles: [UserRoles]!

    """
    Represents the user who has made the latest update on this object
    """
    updatedBy: User

    """
    Represents the user's id who has made the latest update on this object
    """
    updatedById: ObjectId
  }

  type UserProfile {
    firstName: String!
    lastName: String!
  }

  enum UserRoles {
    ADMIN
    SALES
    MANAGER
    END_CUSTOMER
  }
`;
