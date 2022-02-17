import React from "react";
import Image from "next/image";

export default function ListItem(props) {
  return (
    <div
      className={`flex max-h-fit w-full flex-auto cursor-default flex-col items-center justify-center gap-2 py-4 transition-all hover:bg-slate-100 dark:hover:bg-slate-800 sm:flex-row`}
    >
      <div className={`h-36 w-36`}>
        <Image
          src={props.flowerSvg}
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
          {props.strainName}
        </h1>
        <ul
          className={`flex w-11/12 items-center justify-between text-lg text-gray-600 dark:text-gray-400`}
        >
          <li>
            <span className={`text-center text-sm text-gray-500`}>THC:</span>{" "}
            {props.thcLevel === 0 ? "-" : `${props.thcLevel}%`}
          </li>
          <li className={`capitalize`}>
            {props.topTerp && `${props.topTerp}`}
          </li>
          <li>
            <span className={`text-sm text-gray-500`}>CBD:</span>{" "}
            {props.cbdLevel === 0 ? "-" : `${props.cbdLevel}%`}
          </li>
        </ul>
      </div>
    </div>
  );
}
