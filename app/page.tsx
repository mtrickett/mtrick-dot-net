import Link from "next/link";

export default function Page() {
  return (
    <section>
      <a
        className="block mt-10"
        href="https://commons.wikimedia.org/wiki/File:Rotating_globe.gif"
        target="_blank"
      >
        <img
          className="m-auto"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Rotating_globe.gif"
          width="150"
          height="150"
        />
      </a>
      <div className="flex justify-around gap-4 mt-10 min-w-full font-semibold text-2xl tracking-tighter overflow-hidden select-none marquee shrink">
        <div>
          <span>
            <h1>Welcome to mtrick dot net!</h1>
          </span>
          <span>
            <h1>Welcome to mtrick dot net!</h1>
          </span>
        </div>
      </div>
      <div className="mt-10">
        <p>
          {`Hello! I'm `}
          <span className="bg-neutral-100 text-neutral-400">[Name]</span>
          {`, `}
          <span className="bg-neutral-100 text-neutral-400">
            [Position/Role]
          </span>
          {` at `}
          <span className="bg-neutral-100 text-neutral-400">
            [Company/Project]
          </span>
          {`. I've always been passionate about `}
          <span className="bg-neutral-100 text-neutral-400">
            [Area of Expertise/Interest]
          </span>
          {`, and this website is my space to share that passion with you.`}
          <sup className="text-neutral-600">†</sup>
        </p>
        <p className="mt-4">
          Check out{" "}
          <Link className="text-[#0000ff] underline" href="/blog">
            my stuff
          </Link>
          .<sup className="text-neutral-600">††</sup>
        </p>
        <sub className="text-neutral-400">
          † Text written by{" "}
          <a href="https://chatgpt.com/" target="_blank">
            a computer
          </a>
          .
        </sub>{" "}
        <sub className="block mt-1 text-neutral-400">
          †† Text written by <a href="/about">a human</a>.
        </sub>
      </div>
    </section>
  );
}
