import LanguageChanger from '../../LanguageChanger'
import Section from './Section'

const Header = ({buttons, onLangClick, languages}) => {
  return (
    <Section className='sticky top-0 bg-white border-b'>
      <div className='flex flex-row justify-between'>
        <div className='flex gap-5'>
          {buttons &&
            buttons.map((button, key) => {
              return (
                <button className='font-semibold' onClick={button.onClick} key={key}>
                  {button.title}
                </button>
              )
            })}
        </div>

        <LanguageChanger onClick={onLangClick} languages={languages} />
      </div>
    </Section>
  )
}

export default Header
