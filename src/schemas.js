import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type Strain {
    id: ID!
    name: String!
    terpTop: String
    thc: Int
    cbd: Int
    flowerSvg: String
    terpenes: [Terpene]
    cannabinoids: [Cannabinoid]
  }
  type Terpene {
    name: String
    score: Float
  }
  type Cannabinoid {
    name: String
    order: Int
  }
  type Query {
    strains(skip: Int!, take: Int!): [Strain]!
  }
`;
module.exports = typeDefs;
