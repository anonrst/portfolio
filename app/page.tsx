import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import GitHubGraph from "@/components/GitHubGraph";
import OpenSourceSection from "@/components/OpenSourceSection";
import ProjectsList from "@/components/ProjectsList";
import ScrollIndicator from "@/components/ScrollIndicator";
import BackToTop from "@/components/BackToTop";

/**
 * Main Portfolio Page - Server Component
 * All content is server-rendered for SEO
 */
export default function Home() {
  return (
    <>
      <ScrollIndicator />
      <BackToTop />
      <main className="page-bg text-foreground min-h-screen" role="main">
        <HeroSection />
        <SkillsSection />
        <GitHubGraph />
        <ProjectsList />
        <OpenSourceSection />
        <footer className="px-4 sm:px-6 md:px-16 lg:px-24 py-8 sm:py-10 text-muted-foreground font-mono text-[10px] sm:text-xs text-center sm:text-left" role="contentinfo">
          © {new Date().getFullYear()} — Built with purpose.
        </footer>
      </main>
    </>
  );
}
