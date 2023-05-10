import Experience from '../Section/Experience'
import Education from '../Section/Education'
import Languages from '../Section/Languages'
import Skills from '../Section/Skills'
import Footer from '../Section/Footer'
import Licenses from '../Section/Licenses'
import Portfolio from '../Section/Portfolio'
import Header from '../Section/Header'
import AboutMe from '../Section/AboutMe'
import ContactMe from '../Section/ContactMe'

const MainPage = ({onLangClick, languages}) => {
  return (
    <div className='grid gap-2 mx-12 my-10'>
      <Header onLangClick={onLangClick} languages={languages} />
      <AboutMe />
      <Experience />
      <Education />
      <Skills />
      <Languages />
      <Licenses />
      <Portfolio />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default MainPage
