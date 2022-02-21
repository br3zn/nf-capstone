import { gql, useQuery, NetworkStatus } from "@apollo/client";
import Image from "next/image";
import Modal from "./modal";
import { useState } from "react";
import { orderBy } from "lodash";
import { isArray } from "lodash/lang";

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

function ListItem(strain) {
  return (
    <article
      className={`flex max-h-fit w-full flex-auto items-center justify-center gap-4 py-4 transition-all hover:bg-slate-100 dark:hover:bg-slate-800`}
    >
      <div
        className={`relative h-36 w-36 rounded-full grayscale-[20%] transition-all hover:scale-105 hover:bg-white/50 hover:grayscale-0`}
      >
        <Image
          src={strain.flowerSvg}
          alt={`Flower SVG of ${strain.strainName}`}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={`flex w-64 flex-col items-start justify-around gap-4`}>
        <h1 className={`text-3xl font-medium text-gray-800 dark:text-gray-200`}>
          {strain.strainName}
        </h1>
        <ul
          className={`flex flex-col items-start justify-between text-lg text-gray-600 dark:text-gray-400`}
        >
          <li>
            <span className={`text-sm text-gray-500`}>THC:</span>{" "}
            {strain.thcLevel === 0 ? "-" : `${strain.thcLevel}%`}
          </li>
          <li className={`capitalize`}>
            <span className={`text-sm text-gray-500`}>Top Terp:</span>{" "}
            {strain.topTerp && `${strain.topTerp}`}
          </li>
        </ul>
      </div>
    </article>
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

  const loadModal = (contentList, contentText) => {
    if (isArray(contentList)) {
      const orderedContent = orderBy(contentList, "score", "desc");
      setModalContent([orderedContent, contentText]);
      setIsVisible(true);
    } else {
      console.warn("Modal content has to be an array!");
    }
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
  const { getAllTerps } = data;
  return (
    <div
      className={`flex h-auto w-screen flex-col divide-y dark:divide-slate-600`}
    >
      {allStrains.map(strain => (
        <button
          className={``}
          key={strain.leaflyId}
          onClick={() => loadModal(strain.terps, strain.name)}
        >
          <ListItem
            strainName={strain.name}
            topTerp={strain.terpTop}
            thcLevel={strain.thc}
            flowerSvg={strain.flowerSvg}
          />
        </button>
      ))}
      <Modal
        isVisible={isVisible}
        handleClose={() => hideModal()}
        title={`Terpene List`}
        contentList={modalContent[0]}
        contentText={`These terpenes are found in ${modalContent[1]}`}
        terpList={getAllTerps}
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
