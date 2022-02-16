import HeaderBar from "./HeaderBar";

export default function Layout({ children }) {
  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-900`}>
      <HeaderBar />
      <main>{children}</main>
    </div>
  );
}
