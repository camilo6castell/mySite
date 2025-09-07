import Section from '../components/Section'
import Hero from '../components/Hero'
import ProjectsPreview from '../components/ProjectsPreview'
import AboutPreview from '../components/AboutPreview'
import ContactPreview from '../components/ContactPreview'

export default function Page() {
  return (
    <div>
      <Section id="home"><Hero /></Section>
      <Section id="projects"><ProjectsPreview /></Section>
      <Section id="contact"><ContactPreview /></Section>
      {/* <Section id="about"><AboutPreview /></Section> */}
    </div>
  )
}
