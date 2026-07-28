import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0E0C0A] text-[#F1EAD8]">
      <h1 className="text-8xl font-bold">404</h1>

      <p className="mt-6 text-xl">
        The page you are looking for doesn't exist.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-full bg-[#E26743] px-8 py-4"
      >
        Back Home
      </Link>
    </main>
  );
}