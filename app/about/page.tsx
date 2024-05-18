export const metadata = {
  title: "about",
  description: "This is about me",
};

export default function About() {
  return (
    <section>
      <h1 className="mb-8 font-semibold text-2xl tracking-tighter">About me</h1>
      <p>
        Here's my{" "}
        <span className="text-[#0000ff] underline">
          <a
            href="https://www.linkedin.com/in/melanietrickett/"
            target="_blank"
          >
            linkedin
          </a>
        </span>
        .
      </p>
    </section>
  );
}
