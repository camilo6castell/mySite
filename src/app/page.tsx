import Section from "../ui/components/layout/Section";
import HeroSection from "../ui/components/hero/HeroSection";
import TracksSection from "../ui/components/roles/RolesSection";
import ContactPreview from "../ui/components/contact/ContactSection";

export default function Page() {
  return (
    <>
      <HeroSection id="home" />
      <TracksSection id="tracks" />
      <Section id="contact">
        <ContactPreview />
      </Section>
    </>
  );
}
