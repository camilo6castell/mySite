import Section from '../components/Section'
import Hero from '../components/Hero'
import ProjectsPreview from '../components/ProjectsPreview'
import ContactPreview from '../components/ContactPreview'

export default function Page() {
  return (
    <div>
      <Section id="home"><Hero /></Section>
      <Section id="projects"><ProjectsPreview /></Section>
      <Section id="contact"><ContactPreview /></Section>
    </div>
  )
}
