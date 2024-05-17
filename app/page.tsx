import Link from "next/link";

export default function Page() {
  return (
    <section>
      <a
        className="block mt-10"
        href="https://commons.wikimedia.org/wiki/File:Rotating_globe.gif"
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
          <span className="line-through decoration-wavy">
            <span className="inline font-bold text-neutral-300">[Name]</span>
          </span>
          {`, `}
          <span className="line-through decoration-wavy">
            <span className="inline font-bold text-neutral-300">
              [Position/Role]
            </span>
          </span>
          {` at `}
          <span className="line-through decoration-wavy">
            <span className="inline font-bold text-neutral-300">
              [Company/Project]
            </span>
          </span>
          {`. I've always been passionate about `}
          <span className="line-through decoration-wavy">
            <span className="inline font-bold text-neutral-300">
              [Area of Expertise/Interest]
            </span>
          </span>
          {`, and this website is my space to share that passion with you.`}
        </p>
        <p className="mt-4">
          Check out{" "}
          <Link className="text-[#0000ff] underline" href="/blog">
            my stuff
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
