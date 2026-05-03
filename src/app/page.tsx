import Section from '../ui/components/layout/Section'
import Hero from '../ui/components/hero/Hero'
import ProjectsSection from '../ui/components/projects/ProjectsSection'
import ContactPreview from '../ui/components/contact/ContactPreview'

export default function Page() {
  return (
    <div>
      <Section id="home"><Hero /></Section>
      <Section id="projects"><ProjectsSection /></Section>
      <Section id="contact"><ContactPreview /></Section>
    </div>
  )
}
