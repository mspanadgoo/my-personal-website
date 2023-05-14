import {useState} from 'react'
import './App.css'
import {ENGLISH_LANGUAGE_KEY, FARSI_LANGUAGE_KEY} from './Constants'
import {Localization} from './components/localization/Localization'
import MainPage from './components/page/Main/MainPage'
import {getAppLanguage, setAppLanguage} from './utilities/storage'

function App() {
  const [language, setLanguage] = useState(getAppLanguage() ?? ENGLISH_LANGUAGE_KEY)
  setAppLanguage(language)
  Localization.setLanguage(language)

  const onLangClick = (input) => {
    setLanguage(input)
    Localization.setLanguage(input)
  }

  const languages = [
    {title: 'Fa', key: FARSI_LANGUAGE_KEY},
    {title: 'Eng', key: ENGLISH_LANGUAGE_KEY},
  ]

  const socialMediaItems = [
    {title: 'Linkedin', link: 'https://www.linkedin.com/in/mspanadgoo/'},
    {
      title: 'StackOverflow',
      link: 'https://stackoverflow.com/users/7365545/mohammad-sadegh-panadgoo',
    },
    {title: 'Github', link: 'https://github.com/mspanadgoo'},
  ]

  return (
    <div className={`App ${language === FARSI_LANGUAGE_KEY ? 'dir-rtl' : 'dir-ltr'}`}>
      <MainPage onLangClick={onLangClick} languages={languages} socialMediaItems={socialMediaItems} />
    </div>
  )
}

export default App
