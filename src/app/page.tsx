import Section from "../ui/components/layout/Section";
import HeroSection from "../ui/components/hero/HeroSection";
import ProjectsSection from "../ui/components/projects/ProjectsSection";
import ContactPreview from "../ui/components/contact/ContactSection";

export default function Page() {
  return (
    <>
      <HeroSection id="home" />
      <ProjectsSection id="projects" />
      <Section id="contact">
        <ContactPreview />
      </Section>
    </>
  );
}
