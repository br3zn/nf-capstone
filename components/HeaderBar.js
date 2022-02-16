import LogoIcon from "./LogoIcon";
import Link from "next/link";
import Heading from "./Heading/Heading";
import { useRouter } from "next/router";

export default function HeaderBar() {
  const router = useRouter();

  return (
    <div className="sticky top-0 left-0 z-30 flex min-h-fit w-screen items-center justify-center gap-4 bg-white/80 backdrop-blur dark:bg-black/60">
      <Link href={"/"} passHref>
        <div className={`flex cursor-pointer items-center gap-4 py-4`}>
          {router.pathname !== "/" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-amber-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          )}
          <LogoIcon size={"sm"} />
          <Heading size={"sm"} path={router.pathname} />
        </div>
      </Link>
    </div>
  );
}
