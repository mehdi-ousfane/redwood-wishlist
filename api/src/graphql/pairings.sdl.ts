export const schema = gql`
  type Pairing {
    id: Int!
    eventId: String!
    event: Event!
    santaId: Int!
    santa: User!
    personId: Int!
    person: User!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    pairings: [Pairing!]! @skipAuth
    pairing(id: Int!): Pairing @skipAuth
  }

  input CreatePairingInput {
    eventId: String!
    santaId: Int!
    personId: Int!
  }

  input UpdatePairingInput {
    eventId: String
    santaId: Int
    personId: Int
  }

  type Mutation {
    createPairing(input: CreatePairingInput!): Pairing! @skipAuth
    updatePairing(id: Int!, input: UpdatePairingInput!): Pairing! @skipAuth
    deletePairing(id: Int!): Pairing! @skipAuth
  }
`
