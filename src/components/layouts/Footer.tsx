import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between p-6 w-full">
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/projects">Projects</Link>
    </footer>
  );
}