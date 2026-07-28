export default function Section({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="py-24 lg:py-36">
      {children}
    </section>
  );
}