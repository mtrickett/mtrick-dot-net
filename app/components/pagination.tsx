import Link from "next/link";
import { getBlogPosts } from "app/blog/utils";

export function Pagination({ currentPage }) {
  const projects = getBlogPosts();

  const currentIndex = projects
    .sort((a, b) => {
      if (Number(a.metadata.year) > Number(b.metadata.year)) {
        return -1;
      }
      return 1;
    })
    .findIndex((post) => post.slug === currentPage.slug);

  const previous =
    currentIndex == 0
      ? projects[projects.length - 1]
      : projects[currentIndex - 1];

  const next =
    currentIndex == projects.length - 1
      ? projects[0]
      : projects[currentIndex + 1];

  return (
    <div className="flex justify-between mb-4">
      <Link
        className="flex justify-center items-center border-neutral-300 bg-white hover:bg-neutral-100 px-3 border rounded-lg h-8 font-medium text-neutral-500 text-sm hover:text-neutral-700 me-3"
        href={`/blog/${previous.slug}`}
      >
        <svg
          className="w-3.5 h-3.5 me-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 5H1m0 0 4 4M1 5l4-4"
          />
        </svg>
        {`previous`}
      </Link>
      <Link
        className="flex justify-center items-center border-neutral-300 bg-white hover:bg-neutral-100 px-3 border rounded-lg h-8 font-medium text-neutral-500 text-sm hover:text-neutral-700 me-3"
        href={`/blog/${next.slug}`}
      >
        {`next`}{" "}
        <svg
          className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    </div>
  );
}
