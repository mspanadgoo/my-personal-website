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
import {useRef} from 'react'

const MainPage = ({onLangClick, languages, socialMediaItems}) => {
  const ref = useRef([])

  const handleRefClick = (id) => {
    ref?.current[id]?.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'start'})
  }

  const navigationItems = [
    {title: Localization.ABOUT_ME, onClick: () => handleRefClick(0)},
    {title: Localization.EXPERIENCE, onClick: () => handleRefClick(1)},
    {title: Localization.EDUCATION, onClick: () => handleRefClick(2)},
    {title: Localization.SKILLS, onClick: () => handleRefClick(3)},
    {title: Localization.LANGUAGES, onClick: () => handleRefClick(4)},
    {title: Localization.LICENSES, onClick: () => handleRefClick(5)},
    {title: Localization.PORTFOLIO, onClick: () => handleRefClick(6)},
    {title: Localization.CONTACT_ME, onClick: () => handleRefClick(7)},
  ]

  return (
    <div>
      <Header buttons={navigationItems} onLangClick={onLangClick} languages={languages} />

      <div className='grid gap-5 mx-96 my-10'>
        <AboutMe innerRef={(el) => (ref.current[0] = el)} />
        <Experience innerRef={(el) => (ref.current[1] = el)} />
        <Education innerRef={(el) => (ref.current[2] = el)} />
        <Skills innerRef={(el) => (ref.current[3] = el)} />
        <Languages innerRef={(el) => (ref.current[4] = el)} />
        <Licenses innerRef={(el) => (ref.current[5] = el)} />
        <Portfolio innerRef={(el) => (ref.current[6] = el)} />
        <ContactMe innerRef={(el) => (ref.current[7] = el)} />
      </div>

      <Footer socialMediaItems={socialMediaItems} />
    </div>
  )
}

export default MainPage
