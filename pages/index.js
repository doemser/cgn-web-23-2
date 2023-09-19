import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>Next.js Dynamic Routes</h1>
      <Link href="/snacks">Go to snacks overview</Link>
    </>
  );
}
