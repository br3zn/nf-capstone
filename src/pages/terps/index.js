import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import { Accordion, Group, Skeleton } from "@mantine/core";

const ALL_TERPS = gql`
  query GetAllTerps {
    getAllTerps {
      id
      name
      description
    }
  }
`;

function TerpAccordionLabel({ label, description, icon }) {
  return <Group noWrap></Group>;
}

function Terps() {
  const { loading, error, data } = useQuery(ALL_TERPS);

  if (error) return <p>Error :(</p>;

  return (
    <>
      {loading && <Skeleton height={320} />}
      <Accordion className={`w-full`}>
        {data &&
          data.getAllTerps.map(terp => (
            <Accordion.Item key={terp.id} label={terp.name}>
              {terp.description}
            </Accordion.Item>
          ))}
      </Accordion>
    </>
  );
}

export default function TerpsPage() {
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
        <Terps />
      </div>
    </>
  );
}
