type ContactProps = {
  children: React.ReactNode;
}

export default function ContactButton({children} : ContactProps) {
  return (
    <button className="rounded-full bg-white px-8 py-3 text-black">
      {children}
    </button>
  );
}