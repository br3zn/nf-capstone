import LogoIcon from "./LogoIcon";
import LogoText from "./LogoText";
import Link from "next/link";

export default function HeaderBar(props) {
  return (
    <div className="sticky top-0 left-0 z-30 flex min-h-fit w-screen items-center justify-center gap-4 bg-white/80 backdrop-blur dark:bg-black/60">
      <Link href={"/"} passHref>
        <div className={`flex cursor-pointer gap-4 py-4`}>
          <LogoIcon size={"sm"} />
          <LogoText size={"sm"} />
        </div>
      </Link>
    </div>
  );
}
