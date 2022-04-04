import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import { Accordion } from "@mantine/core";

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
        className={`my-4 flex flex-col items-center justify-center gap-14 dark:text-slate-400`}
      >
        <h2
          className={`ml-8 text-4xl font-black uppercase tracking-wide text-gray-800 dark:text-slate-100`}
        >
          Terpene Information
        </h2>
        <Accordion className={`w-full`}>
          {getAllTerps.map(terp => (
            <Accordion.Item key={terp.id} label={terp.name}>
              {terp.description}
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </>
  );
}
