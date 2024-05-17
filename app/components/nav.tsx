import ArrowIcon from "./arrow-icon";
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
    <aside className="mb-4 md:mb-10 -ml-[8px] tracking-tight">
      <div className="lg:top-20 lg:sticky flex justify-between">
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
                  className="relative flex m-1 px-2 py-1 hover:text-neutral-800 transition-all align-middle"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
        <a
          className="flex items-center max-w-24 text-[#0000ff] md:text-neutral-600 hover:text-[#0000ff] underline hover:underline md:no-underline"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/mtrickett/mtrick-dot-net"
        >
          <span className="text-[#0000ff]">
            <ArrowIcon />
          </span>
          <p className="ml-2 h-7">view code</p>
        </a>
      </div>
    </aside>
  );
}
