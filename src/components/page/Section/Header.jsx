import LanguageChanger from '../../LanguageChanger'
import Section from './Section'

const Header = ({buttons, onLangClick, languages}) => {
  return (
    <Section>
      <LanguageChanger onClick={onLangClick} languages={languages}/>

      {buttons &&
        buttons.map((button) => {
          return <button onClick={button.onClick}>{button.title}</button>
        })}
    </Section>
  )
}

export default Header
