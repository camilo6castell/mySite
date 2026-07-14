import HeroSection from "../ui/components/hero/HeroSection";
import TracksSection from "../ui/components/roles/RolesSection";
import ContactSection from "../ui/components/contact/ContactSection";

export default function Page() {
  return (
    <>
      <HeroSection id="home" />
      <TracksSection id="roles" />
      <ContactSection id="contact" />
    </>
  );
}
