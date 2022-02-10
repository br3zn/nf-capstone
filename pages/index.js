import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Template</title>
        <meta
          name="description"
          content="Next.js Template powered with tailwind and apollo/client"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`flex justify-center items-center h-screen`}>
        <h1 className={`text-4xl`}>
          This is a{" "}
          <a
            className={`text-blue-500 hover:underline`}
            href="https://github.com/br3zn/project-template"
          >
            Next.js Template!
          </a>
        </h1>
      </main>
    </>
  );
}
