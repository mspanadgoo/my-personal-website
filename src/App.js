import './App.css'
import Description from './components/Description'
import Experience from './components/Experience'
import Education from './components/Education'
import Languages from './components/Languages'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Licenses from './components/Licenses'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Header from './components/Header'

function App() {
  return (
    <div className='App'>
      <Header />
      <Description />
      <Experience />
      <Education />
      <Skills />
      <Languages />
      <Licenses />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
