import Image from "next/image";
import Link from "next/link";
import Button from "../common/Button";
import ContactButton from "../common/ContactButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image src="/images/omlplanet.png" alt="oml_planet" fill priority className="object-cover z-0"/>
      <div className="absolute inset-0 z-10 bg-black/40" />
      
      <div className="relative z-20 flex flex-col mt-70 items-center justify-center text-center">
        <h1 className="max-w-4xl text-5xl font-bold md:text-7xl text-white">Where Creativity Meets Technology</h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          We design and build modern digital experiences,
          web applications, and software solutions that solve real-world problems.
        </p>
        <div className="flex gap-4 p-6">
          <Link href="/work"><ContactButton>Explore Our Work</ContactButton></Link>
          <Link href="/contact"><Button>Contact Us</Button></Link>
        </div>
      </div>
    </section>
  );
}