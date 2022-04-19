import List from "@components/List";
import { initializeApollo, addApolloState } from "@lib/apolloClient";
import Head from "next/head";
import { gql, NetworkStatus, useQuery } from "@apollo/client";
import Search from "@components/molecules/Search";
import { useStore } from "@lib/store";

export const ALL_STRAINS_QUERY = gql`
  query GetAllStrains($skip: Int!, $take: Int!) {
    allStrains(skip: $skip, take: $take) {
      leaflyId
      name
      terpTop
      thc
      terps {
        name
        score
      }
      flowerSvg
    }
    getAllTerps {
      id
      name
      description
    }
  }
`;
export const allStrainsQueryVars = {
  skip: 0,
  take: 10,
};

export default function StrainsPage() {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ALL_STRAINS_QUERY,
    {
      variables: allStrainsQueryVars,
      notifyOnNetworkStatusChange: true,
    }
  );
  const { searchString } = useStore();

  const loadingMoreStrains = networkStatus === NetworkStatus.fetchMore;
  const loadMoreStrains = () => {
    fetchMore({
      variables: {
        skip: allStrains.length,
      },
    });
  };

  if (error) return <h3>Error</h3>;
  if (loading && !loadingMoreStrains) return <h3>Loading</h3>;
  const { allStrains } = data;
  const filteredData = allStrains.filter(item => {
    return item.name.toLowerCase().includes(searchString.toLowerCase());
  });
  return (
    <>
      <Head>
        <title>Strains | Bubatz</title>
        <meta
          name="description"
          content="Bubatz is a educational app about cannabis and everything around it."
        />
      </Head>
      <List listArr={searchString.length > 0 ? filteredData : allStrains}>
        <button
          className={`h-12 w-full bg-slate-200 font-medium dark:bg-slate-800 dark:text-gray-400`}
          onClick={() => loadMoreStrains()}
          disabled={loadingMoreStrains}
        >
          {loadingMoreStrains ? "Loading..." : "Show More"}
        </button>
      </List>
      <Search />
    </>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_STRAINS_QUERY,
    variables: allStrainsQueryVars,
  });

  return addApolloState(apolloClient, {
    props: {
      initialZustandState: {
        searchString: "",
      },
    },
  });
}
