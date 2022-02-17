import { gql, useQuery, NetworkStatus } from "@apollo/client";
import ListItem from "./ListItem";

export const ALL_STRAINS_QUERY = gql`
  query GetAllStrains($skip: Int!, $take: Int!) {
    strains(skip: $skip, take: $take) {
      id
      name
      terpTop
      thc
      cbd
      flowerSvg
    }
  }
`;
export const allStrainsQueryVars = {
  skip: 0,
  take: 10,
};

export default function List() {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ALL_STRAINS_QUERY,
    {
      variables: allStrainsQueryVars,
      notifyOnNetworkStatusChange: true,
    }
  );
  const loadingMoreStrains = networkStatus === NetworkStatus.fetchMore;

  const loadMoreStrains = () => {
    fetchMore({
      variables: {
        skip: strains.length,
      },
    });
  };

  if (error) return <h3>Error</h3>;
  if (loading && !loadingMoreStrains) return <h3>Loading</h3>;

  const { strains } = data;

  return (
    <div
      className={`flex h-auto w-screen flex-col divide-y dark:divide-slate-600`}
    >
      {strains.map(listItem => (
        <ListItem
          key={listItem.id}
          strainName={listItem.name}
          topTerp={listItem.terpTop}
          thcLevel={listItem.thc}
          cbdLevel={listItem.cbd}
          flowerSvg={listItem.flowerSvg}
        />
      ))}
      <button
        className={`h-12 w-full bg-slate-200 font-medium dark:bg-slate-800 dark:text-gray-400`}
        onClick={() => loadMoreStrains()}
        disabled={loadingMoreStrains}
      >
        {loadingMoreStrains ? "Loading..." : "Show More"}
      </button>
    </div>
  );
}
