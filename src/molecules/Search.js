import { useState } from "react";
import SearchTextInput from "../atoms/SearchTextInput";
import IconBubble from "../../components/IconBubble";
import { useStore } from "../../lib/store";
import shallow from "zustand/shallow";

const useSearch = () => {
  const { searchString, update } = useStore(
    store => ({
      searchString: store.searchString,
      update: store.update,
    }),
    shallow
  );

  return { searchString, update };
};

// Search component
export default function Search() {
  const [inputIsVisible, setInputIsVisible] = useState(false); // use State hook to set the initial visibility of the search input
  const { update } = useSearch();

  // handler function for the inputIsVisible toggle button
  const handleClick = () => {
    setInputIsVisible(!inputIsVisible);
  };
  return (
    <>
      <button className={`absolute`} onClick={handleClick}>
        <IconBubble state={inputIsVisible} />
      </button>
      {inputIsVisible && (
        <SearchTextInput handler={e => update(e.target.value)} />
      )}
    </>
  );
}
