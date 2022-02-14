import React from "react";

export default function ListItem(props) {
  return (
    <div
      className={`flex h-24 w-full flex-col items-center justify-center gap-4 bg-gradient-to-b from-slate-50 to-gray-50`}
    >
      <h1 className={`text-center text-5xl font-bold`}>{props.strainName}</h1>
      <ul className={`flex w-full items-center justify-around text-lg`}>
        <li>{props.topTerp ? `${props.topTerp}` : `no data`}</li>
        {props.thcLevel && <li>{props.thcLevel}%</li>}
        {props.cbdLevel && <li>{props.cbdLevel}%</li>}
      </ul>
    </div>
  );
}
