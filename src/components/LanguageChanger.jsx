import {ENGLISH_LANGUAGE_KEY, FARSI_LANGUAGE_KEY} from '../Constants'

const LanguageChanger = ({onClick, languages}) => {
  const onLangClick = (input) => {
    console.log('test')
    onClick(input)
  }

  return (
    <div className='flex gap-1 border'>
      {languages &&
        languages.map((lang) => {
          return (
            <button className='p-1' onClick={() => onLangClick(lang.key)}>
              {lang.title}
            </button>
          )
        })}
    </div>
  )
}

export default LanguageChanger
