import HeaderBar from "./HeaderBar";

export default function Layout({ children }) {
  return (
    <div className={`h-screen bg-slate-50 dark:bg-slate-900`}>
      <HeaderBar />
      <main
        className={`flex w-screen flex-col items-center justify-center gap-6 overflow-scroll py-36`}
      >
        {children}
      </main>
    </div>
  );
}
