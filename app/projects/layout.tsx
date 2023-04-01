"use client"
import NavBar from "../components/NavBar";
import { ContextProvider } from "./carouselContext";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="bg-bg1">
    <ContextProvider>
    <div>
    <NavBar />
    {children}
    </div>
    </ContextProvider>
    </section>;
}
