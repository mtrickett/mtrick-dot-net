import ArrowIcon from "./arrow-icon";
import Link from "next/link";
import { getBlogPosts } from "app/blog/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (Number(a.metadata.year) > Number(b.metadata.year)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1"
            href={`/blog/${post.slug}`}
          >
            <div className="flex md:flex-row flex-col space-x-0 md:space-x-2 bg-neutral-100 md:bg-white md:hover:bg-neutral-100 mb-6 md:mb-0 px-4 md:px-0 py-2 rounded-lg w-full group">
              <span className="md:text-right md:m-2 py-1.5 md:py-0">
                <p className="md:block hidden md:w-[100px] md:text-neutral-600">
                  {post.metadata.year}
                </p>
                <p className="inline mt-2 rounded-lg w-fit font-bold text-neutral-600 text-xs md:text-neutral-500 uppercase">
                  {post.metadata.tag}
                </p>
              </span>
              <p className="md:m-2 md:pr-2 text-neutral-900 tracking-tight">
                <span className="group-hover:text-[#0000ff] font-semibold">
                  {post.metadata.title}
                </span>
                {`: `}
                {post.metadata.summary}
              </p>
              <div className="inline md:opacity-0 group-hover:opacity-100 mt-4 mb-1 w-4 h-4 text-[#0000ff] md:-translate-x-5 md:translate-y-2 rotate-45">
                <ArrowIcon />
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
