type ButtonProps = {
  children: React.ReactNode;
}

export default function Button({children} : ButtonProps) {
  return (
    <button className="rounded-full border border-white px-8 py-3 text-white">
      {children}
    </button>
  );
}