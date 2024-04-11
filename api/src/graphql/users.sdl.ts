export const schema = gql`
  type User {
    id: Int!
    email: String!
    firstName: String
    lastName: String
    avatar: String
    createdAt: DateTime!
    updatedAt: DateTime!
    role: Role!
    status: [UserStatus]!
    santa: [Pairing]!
    person: [Pairing]!
    wishList: [WishList]!
    thankYouAuthor: [ThankYou]!
    thankYouToUser: [ThankYou]!
  }

  enum Role {
    ADMIN
    USER
  }
  """
  REMEMBER TO REQUIRE AUTH HERE FOR PRODUCTION !
  """
  type Query {
    users: [User!]! @skipAuth
    user(id: Int!): User @skipAuth
  }

  input CreateUserInput {
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    firstName: String
    lastName: String
    avatar: String
    role: Role!
  }

  input UpdateUserInput {
    email: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    firstName: String
    lastName: String
    avatar: String
    role: Role
  }

  """
  REMEMBER TO REQUIRE AUTH HERE FOR PRODUCTION !
  """
  type Mutation {
    createUser(input: CreateUserInput!): User! @skipAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @skipAuth
    deleteUser(id: Int!): User! @skipAuth
  }
`
