import NavBar from "../components/NavBar";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>
    <NavBar />
    {children}
    </section>;
}
