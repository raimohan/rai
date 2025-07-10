import { motion } from "framer-motion";
import { Navbar } from "@/components/navigation/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { WorkTogetherSection } from "@/components/sections/work-together-section";
import { GitHubSyncSection } from "@/components/sections/github-sync-section";
import { MetaBrainSection } from "@/components/sections/metabrain-section";
import { KnowledgeSection } from "@/components/sections/knowledge-section";
import { CTASection } from "@/components/sections/cta-section";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-primary text-white overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <WorkTogetherSection />
        <GitHubSyncSection />
        <MetaBrainSection />
        <KnowledgeSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
