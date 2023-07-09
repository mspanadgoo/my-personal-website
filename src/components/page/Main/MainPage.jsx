import Experience from '../Section/Experience'
import Footer from '../Section/Footer'
import Portfolio from '../Section/Portfolio'
import AboutMe from '../Section/AboutMe'
import ContactMe from '../Section/ContactMe'
import {Localization} from '../../localization/Localization'
import {useRef} from 'react'
import Home from '../Section/Home'
import Navbar from '../Section/Navbar'

const MainPage = ({onLangClick, languages, socialMediaItems}) => {
  const ref = useRef([])

  const handleRefClick = (id) => {
    ref?.current[id]?.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'start'})
  }

  const navigationItems = [
    {title: Localization.HOME, onclick: () => handleRefClick(0)},
    {title: Localization.ABOUT_ME, onClick: () => handleRefClick(1)},
    {title: Localization.EXPERIENCE, onClick: () => handleRefClick(2)},
    {title: Localization.PORTFOLIO, onClick: () => handleRefClick(3)},
    {title: Localization.CONTACT_ME, onClick: () => handleRefClick(4)},
  ]

  return (
    <div>
      <Navbar buttons={navigationItems} onLangClick={onLangClick} languages={languages} />

      <div className='flex flex-col'>
        <Home innerRef={(el) => (ref.current[0] = el)} />
        <AboutMe innerRef={(el) => (ref.current[1] = el)} />
        <Experience innerRef={(el) => (ref.current[2] = el)} />
        <Portfolio innerRef={(el) => (ref.current[3] = el)} />
        <ContactMe innerRef={(el) => (ref.current[4] = el)} />
      </div>

      <Footer socialMediaItems={socialMediaItems} />
    </div>
  )
}

export default MainPage
