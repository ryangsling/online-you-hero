import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { Intro } from "@/components/portfolio/Intro";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { ProjectsStack } from "@/components/portfolio/ProjectsStack";
import { Blog } from "@/components/portfolio/Blog";
import { Toolkit } from "@/components/portfolio/Toolkit";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { SessionHUD } from "@/components/portfolio/SessionHUD";
import { Cursor } from "@/components/portfolio/Cursor";

const title = "Ahmed Alif - AI-Native Developer & Vibe Engineer";
const description =
  "I'm Md. Ahmed Alif - an AI-native developer from Sylhet who vibe-engineers products and websites with LLMs as co-pilots. Recent MVPs, experience, and a stack that ships.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Intro />
        <About />
        <Experience />
        <ProjectsStack />
        <Blog />
        <Toolkit />
        <Contact />
      </main>
      <Footer />
      <SessionHUD />
      <Cursor />
    </div>
  );
}
