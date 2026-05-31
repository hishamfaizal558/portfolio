import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import FloatingNav from './components/FloatingNav'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import {
  contactMethods,
  cyberSkills,
  navItems,
  projects,
} from './data/portfolioData'
import { scrollToSection, submitContactForm } from './utils/navigation'

function App() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white">
      <HeroSection onNavigate={scrollToSection} />
      <AboutSection cyberSkills={cyberSkills} />
      <ProjectsSection projects={projects} />
      <ContactSection
        contactMethods={contactMethods}
        onNavigate={scrollToSection}
        onSubmit={submitContactForm}
      />
      <FloatingNav navItems={navItems} onNavigate={scrollToSection} />
    </div>
  )
}

export default App
