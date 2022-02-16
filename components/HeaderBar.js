import LogoIcon from "./LogoIcon";
import LogoText from "./LogoText";

export default function HeaderBar(props) {
  return (
    <div className="sticky top-0 left-0 flex min-h-fit w-screen items-center justify-around gap-4 bg-white/30 py-4 px-8 backdrop-blur-md backdrop-opacity-80">
      <LogoIcon size={"sm"} />
      <LogoText size={"sm"} />
    </div>
  );
}
