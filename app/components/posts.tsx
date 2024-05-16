import { formatDate, getBlogPosts } from "app/blog/utils";

import Link from "next/link";

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
            <div className="flex md:flex-row flex-col space-x-0 md:space-x-2 hover:bg-neutral-100 py-2 rounded-lg w-full group">
              <span className="text-right m-2">
                <p className="mb-1 pr-3 w-[100px] text-neutral-600">
                  {post.metadata.year}
                </p>
                <p className="inline bg-neutral-100 mt-2 px-3 py-1.5 rounded-lg w-fit font-bold text-gray-900 text-xs uppercase">
                  {post.metadata.tag}
                </p>
              </span>
              <p className="m-2 pr-2 text-neutral-900 tracking-tight">
                <b className="group-hover:text-[#0000ff] group-hover:underline">
                  {post.metadata.title}
                </b>
                {`: `}
                {post.metadata.summary}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
