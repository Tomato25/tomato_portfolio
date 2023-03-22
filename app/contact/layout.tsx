import NavBar from "../components/NavBar";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>
    <NavBar />
    {children}
    </section>;
}
