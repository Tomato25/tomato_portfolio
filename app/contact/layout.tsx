import NavBar from "../components/NavBar";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="bg-bg1 h-screen w-screen">
    <NavBar />
    {children}
    </section>;
}
