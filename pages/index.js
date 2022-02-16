import Head from "next/head";
import Logo from "../components/Logo";

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

      <main
        className={`flex min-h-screen w-screen flex-col items-center justify-center gap-6 bg-slate-900`}
      >
        <Logo size={"lg"} />
        <h1 className={`text-center text-4xl text-gray-200`}>
          Under development.{" "}
        </h1>
        <a
          className={`text-blue-500 hover:underline`}
          href="https://github.com/br3zn/nf-capstone"
        >
          GitHub repository
        </a>
      </main>
    </>
  );
}
