import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "stuff",
  },
  "/about": {
    name: "about",
  },
};

export function Navbar() {
  return (
    <aside className="mb-16 -ml-[8px] tracking-tight">
      <div className="lg:top-20 lg:sticky">
        <nav
          className="relative md:relative flex flex-row items-start px-0 scroll-pr-6 pb-0 md:overflow-auto fade"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="relative flex m-1 px-2 py-1 hover:text-neutral-800 dark:hover:text-neutral-200 transition-all align-middle"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
