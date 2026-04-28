import { Suspense, lazy } from "react";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ScrollIndicator from "@/components/ScrollIndicator";
import BackToTop from "@/components/BackToTop";

// Lazy load components below the fold for better performance
const GitHubGraph = lazy(() => import("@/components/GitHubGraph"));
const OpenSourceSection = lazy(() => import("@/components/OpenSourceSection"));
const ProjectsList = lazy(() => import("@/components/ProjectsList"));

/**
 * Main Portfolio Page
 * Sections: Hero → Skills → GitHub Graph → Open Source → Top Projects → Footer
 * All content fits within ~2 scrollable desktop pages.
 */
const Index = () => {
  return (
    <>
      <ScrollIndicator />
      <BackToTop />
      <main className="page-bg text-foreground min-h-screen">
        <HeroSection />
        <SkillsSection />
        <Suspense fallback={
          <div className="px-4 sm:px-6 md:px-16 lg:px-24 py-8 sm:py-12">
            <div className="animate-pulse">
              <div className="h-4 bg-muted rounded w-24 mb-4"></div>
              <div className="glass-panel rounded-lg h-32"></div>
            </div>
          </div>
        }>
          <GitHubGraph />
          <OpenSourceSection />
          <ProjectsList />
        </Suspense>
        <footer className="px-4 sm:px-6 md:px-16 lg:px-24 py-8 sm:py-10 text-muted-foreground font-mono text-[10px] sm:text-xs text-center sm:text-left">
          © {new Date().getFullYear()} — Built with purpose.
        </footer>
      </main>
    </>
  );
};

export default Index;
