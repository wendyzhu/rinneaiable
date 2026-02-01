import Navigation from './components/Navigation'
import Hero from './components/Hero'
import WhySection from './components/WhySection'
import SolutionsSection from './components/SolutionsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import KnowledgeBaseChatbot from './components/KnowledgeBaseChatbot'

export default function Home() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Hero />
        <WhySection />
        <SolutionsSection />
        <ContactSection />
      </main>
      <Footer />
      <KnowledgeBaseChatbot />
    </>
  )
}
