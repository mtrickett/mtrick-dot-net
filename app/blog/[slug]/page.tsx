import { CustomMDX } from "app/components/mdx";
import Image from "next/image";
import { Pagination } from "app/components/pagination";
import { baseUrl } from "app/sitemap";
import { getBlogPosts } from "app/blog/utils";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <Pagination currentPage={params} />
      <div className="mb-8 full-width-hero">
        {post.metadata.image && (
          <Image
            src={
              post.metadata.image
                ? `${post.metadata.image}`
                : `/og?title=${encodeURIComponent(post.metadata.title)}`
            }
            width={1200}
            height={400}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            alt={`Project screenshot`}
          />
        )}
        {post.metadata.video && (
          <video width="auto" height="auto" loop autoPlay muted>
            <source src={post.metadata.video} type="video/mp4" />
          </video>
        )}
      </div>
      <div className="flex justify-between items-center mt-2 mb-1 text-sm">
        <h1 className="font-semibold text-2xl tracking-tighter title">
          {post.metadata.title}
        </h1>
        <p className="bg-neutral-100 px-3 py-1.5 rounded-lg w-fit font-bold text-gray-900 text-xs uppercase">
          {post.metadata.tag}
        </p>
      </div>
      <p className="text-neutral-600 text-sm">{Number(post.metadata.year)}</p>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
      <Pagination currentPage={params} />
    </section>
  );
}
