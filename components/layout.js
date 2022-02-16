import HeaderBar from "./HeaderBar";
import Heading from "./Heading/Heading";

export default function Layout({ children }) {
  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-900`}>
      <HeaderBar>
        <Heading size={"sm"} />
      </HeaderBar>
      <main>{children}</main>
    </div>
  );
}
