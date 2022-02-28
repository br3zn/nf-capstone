import { useState } from "react";
import SearchTextInput from "../atoms/SearchTextInput";
import IconBubble from "../../components/IconBubble";
import { useStore } from "../../lib/store";
import shallow from "zustand/shallow";

const useSearch = () => {
  const { searchString, update, reset } = useStore(
    store => ({
      searchString: store.searchString,
      update: store.update,
      reset: store.reset,
    }),
    shallow
  );

  return { searchString, update, reset };
};

// Search component
export default function Search() {
  const [inputIsVisible, setInputIsVisible] = useState(false); // use State hook to set the initial visibility of the search input
  const { update, reset } = useSearch();

  // handler function for the inputIsVisible toggle button
  const handleClick = () => {
    setInputIsVisible(!inputIsVisible);
  };
  return (
    <>
      <button onClick={handleClick}>
        <IconBubble state={inputIsVisible} />
      </button>
      {inputIsVisible && (
        <SearchTextInput handler={e => update(e.target.value)} />
      )}
    </>
  );
}
