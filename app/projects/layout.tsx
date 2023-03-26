import NavBar from "../components/NavBar";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="bg-bg1">
    <NavBar />
    {children}
    </section>;
}
