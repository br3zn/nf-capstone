import { ApolloServer } from "apollo-server-micro";
import typeDefs from "../../src/schemas";
import resolvers from "../../src/resolvers";
import LeaflyAPI from "../../src/datasources/leafly";
import BubatzDB from "../../src/datasources/bubatzdb";
import NextCors from "nextjs-cors";

const knexConfig = {
  client: "pg",
  connection: {
    host: process.env.BUBATZDB_SERVER,
    user: process.env.BUBATZDB_USER,
    database: process.env.BUBATZDB_DB,
    password: process.env.BUBATZDB_PW,
  },
};
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      leaflyAPI: new LeaflyAPI(),
      bubatzDB: new BubatzDB(knexConfig),
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
  await NextCors(req, res, {
    methods: ["GET"],
    origin: "*",
    optionsSuccessStatus: 200,
  });
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
