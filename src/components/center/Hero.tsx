import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image src="/images/omlplanet.png" alt="oml_planet" fill priority className="object-cover"/>
    </section>
  );
}