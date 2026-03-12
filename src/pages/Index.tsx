import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import GitHubGraph from "@/components/GitHubGraph";
import OpenSourceSection from "@/components/OpenSourceSection";
import ProjectsList from "@/components/ProjectsList";

/**
 * Main Portfolio Page
 * Sections: Hero → Skills → GitHub Graph → Open Source → Top Projects → Footer
 * All content fits within ~2 scrollable desktop pages.
 */
const Index = () => {
  return (
    <main className="page-bg text-foreground min-h-screen">
      <HeroSection />
      <SkillsSection />
      <GitHubGraph />
      <OpenSourceSection />
      <ProjectsList />
      <footer className="px-6 md:px-16 lg:px-24 py-10 text-muted-foreground font-mono text-xs">
        © {new Date().getFullYear()} — Built with purpose.
      </footer>
    </main>
  );
};

export default Index;
