import Head from "next/head";
import LogoIcon from "../components/LogoIcon";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bubatz - educational cannabis app</title>
        <meta
          name="description"
          content="Bubatz is a educational app about cannabis and everything around it."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LogoIcon size={"lg"} />
      <h2 className={`text-center text-4xl text-gray-800 dark:text-gray-200`}>
        Under development.{" "}
      </h2>
      <a
        className={`text-blue-500 hover:underline`}
        href="https://github.com/br3zn/nf-capstone"
      >
        GitHub repository
      </a>
    </>
  );
}
