// Text input field for the Search component
// expects a handler function for onChange event
export default function SearchTextInput({ handler }) {
  return (
    <input
      type={"search"}
      onChange={handler}
      role={"search"}
      placeholder={"Search"}
      className={`fixed bottom-4 right-24 h-12 w-56 p-2 text-2xl`}
    />
  );
}
