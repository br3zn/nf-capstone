import HeaderBar from "./HeaderBar";
import { useRouter } from "next/router";
import LogoText from "./LogoText";
import HeadingStrain from "./Heading/Strain";

export default function Layout({ children }) {
  const router = useRouter();
  const currentPath = router.pathname;
  const heading = () => {
    if (currentPath === "/strains") {
      return <HeadingStrain size={"sm"} />;
    } else {
      return <LogoText size={"sm"} />;
    }
  };

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-900`}>
      <HeaderBar>{heading()}</HeaderBar>
      <main>{children}</main>
    </div>
  );
}
