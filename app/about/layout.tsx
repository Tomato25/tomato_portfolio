import NavBar from "../components/NavBar";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="bg-green flex flex-col min-h-fit">
    <NavBar />
    {children}
    </section>;
}
