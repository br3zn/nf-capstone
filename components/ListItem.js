import React from "react";

export default function ListItem(props) {
  return (
    <div
      className={`flex max-h-fit w-full flex-auto cursor-default flex-col items-center justify-center gap-2 py-4 transition-all hover:bg-slate-100`}
    >
      <h1 className={`text-center text-3xl font-medium text-gray-900`}>
        {props.strainName}
      </h1>
      <ul
        className={`flex w-full items-center justify-between px-8 text-lg text-gray-600`}
      >
        <li>{props.thcLevel && `${props.thcLevel}`}%</li>
        <li className={`capitalize`}>{props.topTerp && `${props.topTerp}`}</li>
        <li>{props.cbdLevel && `${props.cbdLevel}`}%</li>
      </ul>
    </div>
  );
}
