// Wrapper for the ListItem atom
// sets a fixed height and has overflow-y: scroll
// overflow-x will be hidden
export default function ListWrapper({ children }) {
  return (
    <ul
      className={`flex h-96 w-full flex-col divide-y overflow-x-hidden overflow-y-scroll dark:divide-slate-600`}
    >
      {children}
    </ul>
  );
}
