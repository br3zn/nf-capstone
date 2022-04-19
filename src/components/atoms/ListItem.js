// ListItem atom belongs to the List molecule
export default function ListItem({ children }) {
  return (
    <li className={`flex h-32 w-full items-center justify-center`}>
      {children}
    </li>
  );
}
