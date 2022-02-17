import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type Strain {
    leaflyId: ID!
    name: String!
    terpTop: String!
    thc: Int
    cbd: Int
    flowerSvg: String
    terps: [Terpene]
  }
  type Terpene {
    name: String
    score: Float
  }
  type Query {
    allStrains(skip: Int!, take: Int!): [Strain]!
  }
`;
module.exports = typeDefs;
