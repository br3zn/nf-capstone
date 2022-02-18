import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type Strain {
    leaflyId: ID!
    name: String!
    terpTop: String!
    thc: Int
    flowerSvg: String
    terps: [Terpene]
  }
  type Terpene {
    name: String
    score: Float
    description: String
  }
  type TerpInfo {
    id: Int!
    name: String
    description: String
  }
  type Query {
    allStrains(skip: Int!, take: Int!): [Strain]!
    getTerps: [TerpInfo]
  }
`;
module.exports = typeDefs;
