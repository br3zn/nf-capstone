import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type Strain {
    leaflyId: ID!
    name: String!
    terpTop: String
    thc: Int
    flowerSvg: String
    terps: [Terpene]
    energizeScore: Float
    description: String
  }
  type Terpene {
    name: String
    score: Float
  }
  type TerpInfo {
    id: Int!
    name: String
    description: String
  }
  type Query {
    allStrains(skip: Int!, take: Int!): [Strain]!
    getStrainByName(name: String!): Strain
    getAllTerps: [TerpInfo]
    getTerpById(id: Int!): [TerpInfo]
  }
`;
module.exports = typeDefs;
