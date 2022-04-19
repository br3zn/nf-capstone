import Link from "next/link";

export default function NavMenu({ navArr }) {
  return (
    <>
      <nav
        className={`z-20 h-48 w-full bg-slate-100 dark:bg-slate-800 md:h-20`}
      >
        <ul
          role={`navigation`}
          className={`flex h-full w-full flex-col items-center justify-evenly divide-y dark:divide-slate-600 md:flex-row md:divide-y-0 md:divide-x`}
        >
          {{ ...navArr } &&
            navArr.map(item => (
              <Link key={item.id} href={`/${item.url}`} passHref>
                <a
                  className={`group flex h-full w-full items-center justify-center text-xl font-medium tracking-wider text-slate-700 transition-all hover:bg-slate-300 dark:hover:bg-slate-700`}
                >
                  <li
                    className={`flex w-20 items-center border-l-2 border-slate-200 pl-2.5 group-hover:border-slate-500 dark:border-slate-700 dark:text-slate-300 dark:group-hover:text-slate-100`}
                  >
                    {item.label}
                  </li>
                </a>
              </Link>
            ))}
        </ul>
      </nav>
    </>
  );
}
