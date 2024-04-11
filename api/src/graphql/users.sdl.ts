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

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
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

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`