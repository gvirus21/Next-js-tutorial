import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>

      <Link href="/product">
        <a>Product</a>
      </Link>
    </>
  );
}
