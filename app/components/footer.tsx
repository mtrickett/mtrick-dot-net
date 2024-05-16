import ArrowIcon from "./arrow-icon";

export default function Footer() {
  return (
    <footer className="mb-16">
      <p className="mt-20 text-neutral-400">
        © {new Date().getFullYear()} MIT Licensed
      </p>
      <a
        className="flex items-center max-w-24 text-neutral-400 hover:text-neutral-500 transition-all"
        rel="noopener noreferrer"
        target="_blank"
        href="https://vercel.com/templates/next.js/portfolio-starter-kit"
      >
        <ArrowIcon />
        <p className="ml-2 h-7">source</p>
      </a>
    </footer>
  );
}
