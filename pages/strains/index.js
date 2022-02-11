import { useState } from "react";

export default function Strains() {
  const [strains, setStrains] = useState(null);

  const handleGetStrains = () => {
    fetch("/api/strains")
      .then(res => res.json())
      .then(setStrains);
  };

  return (
    <>
      <button onClick={handleGetStrains}>Load Strains</button>
      {strains && (
        <ul>
          {strains.map(strain => (
            <li key={strain.id}>
              <h3>{strain.name}</h3>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
