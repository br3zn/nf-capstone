import { ApolloServer, gql } from "apollo-server-micro";
import { RESTDataSource } from "apollo-datasource-rest";

class LeaflyAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://consumer-api.leafly.com/api/";
  }

  async getStrains(skip = 0, take = 2) {
    const { hits } = await this.get("strain_playlists/v2", {
      // Query parameters
      skip: skip,
      take: take,
    });
    return hits.strain;
  }
}
const typeDefs = gql`
  type Strain {
    id: ID!
    name: String!
    phenotype: String
    slug: String
  }
  type Query {
    strains: [Strain!]
  }
`;

const resolvers = {
  Query: {
    strains: async (_, __, { dataSources }) => {
      return dataSources.leaflyAPI.getStrains();
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      leaflyAPI: new LeaflyAPI(),
    };
  },
});

const startServer = apolloServer.start();

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://studio.apollographql.com"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET");
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
