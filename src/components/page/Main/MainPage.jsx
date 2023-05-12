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
import {Localization} from '../../localization/Localization'

const MainPage = ({onLangClick, languages}) => {
  const navigationItems = [
    {title: Localization.ABOUT_ME, onClick: () => {}},
    {title: Localization.EXPERIENCE, onClick: () => {}},
    {title: Localization.EDUCATION, onClick: () => {}},
    {title: Localization.SKILLS, onClick: () => {}},
    {title: Localization.LANGUAGES, onClick: () => {}},
    {title: Localization.LICENSES, onClick: () => {}},
    {title: Localization.PORTFOLIO, onClick: () => {}},
    {title: Localization.CONTACT_ME, onClick: () => {}},
  ]

  return (
    <div className='grid gap-2 mx-12 my-10'>
      <Header buttons={navigationItems} onLangClick={onLangClick} languages={languages} />
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
