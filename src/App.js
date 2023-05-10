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
    console.log(input)
    setLanguage(input)
    Localization.setLanguage(input)
  }

  const languages = [
    {title: 'FA', key: FARSI_LANGUAGE_KEY},
    {title: 'ENG', key: ENGLISH_LANGUAGE_KEY},
  ]

  return (
    <div className={`App ${language === FARSI_LANGUAGE_KEY ? 'dir-rtl' : 'dir-ltr'}`}>
      <MainPage onLangClick={onLangClick} languages={languages} />
    </div>
  )
}

export default App
