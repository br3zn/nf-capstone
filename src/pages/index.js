import Head from "next/head";
import Link from "next/link";
import NavMenu from "@/components/NavMenu";
import { IconInfoCircle } from "@tabler/icons";
import { Notification } from "@mantine/core";
import { useSessionStorage } from "@hooks/useSessionStorage";

export default function Home() {
  const [notification, setNotification] = useSessionStorage("notifications", {
    showDemoInfo: true,
  });
  const navArr = [
    {
      id: 1,
      url: "strains",
      label: "Strains",
    },
    {
      id: 2,
      url: "terps",
      label: "Terpenes",
    },
    {
      id: 3,
      url: "profile",
      label: "Profile",
    },
  ];

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
      <NavMenu navArr={navArr} />
      <div
        className={`flex h-full flex-col items-center justify-evenly gap-6 pt-8 dark:text-slate-400`}
      >
        <h2
          className={`text-center text-4xl font-black uppercase tracking-wide text-gray-800 dark:text-gray-300`}
        >
          What is{" "}
          <span
            className={`relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-2 before:bg-red-500 `}
          >
            <span className={`relative`}>Bubatz?</span>
          </span>
        </h2>
        <div className={`space-y-8 px-4 text-lg`}>
          <p className={`max-w-md`}>
            This app is about cannabis and the benefits of the different
            terpenes included. The naming comes from the german slang word for a
            joint.
          </p>
          <p className={`max-w-md text-right`}>
            You can get an overview of{" "}
            <Link href={`/strains`}>
              <a className={`text-orange-700 dark:text-slate-100`}>strains</a>
            </Link>{" "}
            or read more about the different{" "}
            <Link href={`/terps`}>
              <a className={`text-orange-700 dark:text-slate-100`}>terpenes</a>
            </Link>{" "}
            included in cannabis.
          </p>
        </div>
      </div>
      {notification.showDemoInfo && (
        <Notification
          title="Info"
          icon={<IconInfoCircle size={30} color="black" />}
          radius="xs"
          color="yellow"
          onClose={() => setNotification({ showDemoInfo: false })}
          className="fixed bottom-0 right-0 mb-4 mr-4"
        >
          This App is only a demo. Visit my{" "}
          <a href="https://github.com/br3zn">GitHub</a> to get more information.
        </Notification>
      )}
    </>
  );
}
