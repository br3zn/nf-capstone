import Head from "next/head";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <>
      <Head>
        <title>Profile | Bubatz</title>
        <meta
          name="description"
          content="Bubatz is a educational app about cannabis and everything around it."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`flex h-full flex-col items-center justify-evenly gap-6 pt-8 dark:text-slate-400`}
      >
        <h2
          className={`text-center text-4xl font-black uppercase tracking-wide text-gray-800 dark:text-gray-300`}
        >
          <span
            className={`relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-2 before:bg-red-500 `}
          >
            <span className={`relative`}>Sorry</span>
          </span>
        </h2>
        <div className={`space-y-8 px-4 text-lg`}>
          <p className={`max-w-md`}>
            This page is currently not ready for deployment
          </p>
          <p className={`max-w-md text-right`}>
            Take a look at the{" "}
            <Link href={`/strains`}>
              <a className={`text-orange-700 dark:text-slate-100`}>
                strain overview
              </a>
            </Link>{" "}
            or read more about the different{" "}
            <Link href={`/terps`}>
              <a className={`text-orange-700 dark:text-slate-100`}>terpenes</a>
            </Link>{" "}
            included in cannabis.
          </p>
        </div>
      </div>
    </>
  );
}
