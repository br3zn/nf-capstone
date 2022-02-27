import { useEffect, useState } from "react";
import ListWrapper from "../atoms/ListWrapper";
import ListItem from "../atoms/ListItem";

// default List component - expects dataArr[{name: String, details: String}]
export default function List({ dataArr }) {
  const [listItems, setListItems] = useState([]);

  // effect hook sets listItems when dataArr changes
  useEffect(() => {
    if (dataArr.length > 0) {
      setListItems(
        dataArr.map((item, index) => {
          return (
            <ListItem key={index}>
              <h3>{item.name}</h3>
              <p>{item.details}</p>
            </ListItem>
          );
        })
      );
    }
  }, [dataArr]);

  // return empty ListWrapper when no listItems are available - should prevent layout shift
  if (listItems.length === 0) {
    return <ListWrapper> </ListWrapper>;
  }
  // return listItems content
  return <ListWrapper>{listItems.map(item => item)}</ListWrapper>;
}
