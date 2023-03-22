import NavBar from "../components/NavBar";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>
    <NavBar />
    {children}
    </section>;
}
