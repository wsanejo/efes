import { company } from "@/data/site";
import type { CSSProperties } from "react";
import { AboutSection } from "@/components/about-section";
import { ClientsSection } from "@/components/clients-section";
import { ContactSection } from "@/components/contact-section";
import { DashboardSection } from "@/components/dashboard-section";
import { FloatingUI } from "@/components/floating-ui";
import { Footer } from "@/components/footer";
import { GallerySection } from "@/components/gallery-section";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { ProjectsSection } from "@/components/projects-section";
import { ServicesSection } from "@/components/services-section";

export function SiteShell() {
  const themeStyle = {
    "--steel": company.theme.steel,
    "--graphite": company.theme.graphite,
    "--mist": company.theme.mist,
    "--slate": company.theme.slate,
    "--ember": company.theme.ember,
    "--line": company.theme.line,
    "--panel": company.theme.panel
  } as CSSProperties;

  return (
    <div style={themeStyle}>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <ClientsSection />
        <ProjectsSection />
        <DashboardSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingUI />
    </div>
  );
}
