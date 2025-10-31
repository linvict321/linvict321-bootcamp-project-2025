import blogs from "../blogData";
import BlogPreview from "../components/blogPreview";

export default function BlogPage() {
  return (
    <main>
      {blogs.map((b) => (
        <BlogPreview key={b.slug} blog={b} />
      ))}
    </main>
  );
}
