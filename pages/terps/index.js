import { gql, useQuery } from "@apollo/client";

const ALL_TERPS = gql`
  query GetAllTerps {
    getAllTerps {
      id
      name
      description
    }
  }
`;

export default function TerpsPage() {
  const { loading, error, data } = useQuery(ALL_TERPS);

  if (error) return <h3>Error: {error}</h3>;
  if (loading) return <h3>Loading</h3>;
  const { getAllTerps } = data;
  return (
    <div className={`dark:text-slate-400`}>
      {getAllTerps.map(terp => (
        <div key={terp.id} className={``}>
          <h3 className={`dark:text-slate-300`}>{terp.name}</h3>
          <p>{terp.description}</p>
        </div>
      ))}
    </div>
  );
}
