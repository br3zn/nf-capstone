import { gql, useQuery } from "@apollo/client";
import Head from "next/head";

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

  if (error)
    return (
      <h3 className={`w-full text-center`}>
        <span
          className={`text-4xl font-black uppercase tracking-wider dark:text-slate-100`}
        >
          Error:
        </span>{" "}
        {error}
      </h3>
    );
  if (loading)
    return (
      <h3
        className={`mt-4 w-full text-center text-4xl font-black uppercase tracking-wider dark:text-slate-100`}
      >
        Loading Terps
      </h3>
    );
  const { getAllTerps } = data;
  return (
    <>
      <Head>
        <title>Terps | Bubatz</title>
        <meta
          name="description"
          content="Bubatz is a educational app about cannabis and everything around it."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`my-4 ml-8 flex flex-col items-center justify-center gap-14 dark:text-slate-400`}
      >
        <h2
          className={`text-4xl font-black uppercase tracking-wide text-gray-800 dark:text-slate-100`}
        >
          Terpene Information
        </h2>
        {getAllTerps.map(terp => (
          <div key={terp.id} className={`w-80 md:w-96`}>
            <details className={``}>
              <summary
                className={`cursor-pointer text-2xl text-slate-300 before:pl-3`}
              >
                <span
                  className={`relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-2 before:bg-red-500 `}
                >
                  <span className={`relative`}>{terp.name}</span>
                </span>
              </summary>
              <p className={``}>{terp.description}</p>
            </details>
          </div>
        ))}
      </div>
    </>
  );
}
