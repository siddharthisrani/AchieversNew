export default function Button({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button
      className="
      rounded-full
      bg-[#E26743]
      px-7
      py-4
      font-semibold
      transition-all
      duration-300
      hover:scale-105
      hover:bg-[#C14E2A]
      "
    >
      {children}
    </button>
  );
}