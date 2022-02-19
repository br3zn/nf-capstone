import { gql, useQuery, NetworkStatus } from "@apollo/client";
import Image from "next/image";
import Modal from "./modal";
import { useState } from "react";
import { orderBy } from "lodash";

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
  }
`;
export const allStrainsQueryVars = {
  skip: 0,
  take: 10,
};

function ListItem(strain) {
  return (
    <div
      className={`flex max-h-fit w-full flex-auto cursor-default flex-col items-center justify-center gap-2 py-4 transition-all hover:bg-slate-100 dark:hover:bg-slate-800 sm:flex-row`}
    >
      <div className={`h-36 w-36`}>
        <Image
          src={strain.flowerSvg}
          alt="Computer generated SVG"
          width={300}
          height={300}
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div
        className={`flex h-36 w-96 flex-col items-center justify-center gap-4`}
      >
        <h1
          className={`text-center text-3xl font-medium text-gray-800 dark:text-gray-200`}
        >
          {strain.strainName}
        </h1>
        <ul
          className={`flex w-11/12 items-center justify-between text-lg text-gray-600 dark:text-gray-400`}
        >
          <li>
            <span className={`text-center text-sm text-gray-500`}>THC:</span>{" "}
            {strain.thcLevel === 0 ? "-" : `${strain.thcLevel}%`}
          </li>
          <li className={`capitalize`}>
            <span className={`text-center text-sm text-gray-500`}>
              Top Terp:
            </span>{" "}
            {strain.topTerp && `${strain.topTerp}`}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function List() {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ALL_STRAINS_QUERY,
    {
      variables: allStrainsQueryVars,
      notifyOnNetworkStatusChange: true,
    }
  );
  const loadingMoreStrains = networkStatus === NetworkStatus.fetchMore;
  const [isVisible, setIsVisible] = useState(false);
  const [modalContent, setModalContent] = useState([]);

  const showModal = content => {
    const orderedContent = orderBy(content, "score", "desc");
    setModalContent(orderedContent);
    setIsVisible(true);
  };
  const hideModal = () => {
    setIsVisible(false);
  };
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

  return (
    <div
      className={`flex h-auto w-screen flex-col divide-y dark:divide-slate-600`}
    >
      {allStrains.map(strain => (
        <button key={strain.leaflyId} onClick={() => showModal(strain.terps)}>
          <ListItem
            strainName={strain.name}
            topTerp={strain.terpTop}
            thcLevel={strain.thc}
            terps={strain.terps}
            flowerSvg={strain.flowerSvg}
          />
        </button>
      ))}
      <Modal
        isVisible={isVisible}
        handleClose={() => hideModal()}
        title={`Terpenes`}
        content={modalContent}
      />
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
