import List, {
  ALL_STRAINS_QUERY,
  allStrainsQueryVars,
} from "../../components/List";
import { initializeApollo, addApolloState } from "../../lib/apolloClient";

const StrainsIndex = () => (
  <>
    <List />
  </>
);

export async function getStaticProps() {
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
