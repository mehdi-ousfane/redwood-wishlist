export const schema = gql`
  type WishList {
    id: Int!
    name: String!
    url: String!
    userId: Int!
    user: User!
    createdAt: DateTime!
    updatedAt: DateTime!
    order: Int
    eventId: String!
    event: Event!
    siteImage: String
    siteTitle: String
    siteDescription: String
  }

  type Query {
    wishLists: [WishList!]! @skipAuth
    wishList(id: Int!): WishList @skipAuth
  }

  input CreateWishListInput {
    name: String!
    url: String!
    userId: Int!
    order: Int
    eventId: String!
    siteImage: String
    siteTitle: String
    siteDescription: String
  }

  input UpdateWishListInput {
    name: String
    url: String
    userId: Int
    order: Int
    eventId: String
    siteImage: String
    siteTitle: String
    siteDescription: String
  }

  type Mutation {
    createWishList(input: CreateWishListInput!): WishList! @skipAuth
    updateWishList(id: Int!, input: UpdateWishListInput!): WishList! @skipAuth
    deleteWishList(id: Int!): WishList! @skipAuth
  }
`
