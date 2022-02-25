import Image from "next/image";
import Modal from "./modal";
import { useEffect, useState } from "react";
import { orderBy } from "lodash";
import { isArray } from "lodash/lang";
import TerpScoreChart from "./PolarChart";

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
      <div
        className={`flex w-64 min-w-fit flex-col items-start justify-around gap-4`}
      >
        <h2 className={`text-3xl font-medium text-gray-800 dark:text-gray-200`}>
          {strain.strainName}
        </h2>
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

export default function List({ listArr, children }) {
  const [listContent, setListContent] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [modalContent, setModalContent] = useState([]);

  useEffect(() => {
    setListContent(listArr);
  }, [listArr]);

  const loadModal = (terpList, strainName) => {
    if (isArray(terpList)) {
      const orderedContent = orderBy(terpList, "name", "asc");
      setModalContent([orderedContent, strainName]);
      setIsVisible(true);
    } else {
      console.warn("Modal content has to be an array!");
    }
  };
  const hideModal = () => {
    setIsVisible(false);
  };
  return (
    <div className={`flex h-auto flex-col divide-y dark:divide-slate-600`}>
      {listContent &&
        listContent.map(strain => (
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
      {isVisible && (
        <Modal handleClose={() => hideModal()}>
          <h2 className={`text-center text-3xl font-bold tracking-wider`}>
            Terpene List
          </h2>
          <div className={`py-4 px-3`}>
            <p className={`italic text-gray-700`}>
              These terpenes are found in {modalContent[1]}:
            </p>
            {modalContent && <TerpScoreChart {...modalContent[0]} />}
          </div>
        </Modal>
      )}
      {children}
    </div>
  );
}
