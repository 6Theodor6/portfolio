import { LanguageProvider } from './i18n'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-950 text-slate-300">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Education />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
