import List, {
  ALL_STRAINS_QUERY,
  allStrainsQueryVars,
} from "../../components/List";
import { initializeApollo, addApolloState } from "../../lib/apolloClient";
import Head from "next/head";

const StrainsIndex = () => (
  <>
    <Head>
      <title>Strains | Bubatz</title>
      <meta
        name="description"
        content="Bubatz is a educational app about cannabis and everything around it."
      />
    </Head>

    <List />
  </>
);

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_STRAINS_QUERY,
    variables: allStrainsQueryVars,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}
export default StrainsIndex;
