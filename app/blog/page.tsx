import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Stuff",
  description: "This is my stuff",
};

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 font-semibold text-2xl tracking-tighter">
        Check out my cool stuff 😎
      </h1>
      <BlogPosts />
    </section>
  );
}
