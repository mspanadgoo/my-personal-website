const LanguageChanger = ({onClick, languages}) => {
  const onLangClick = (input) => {
    onClick(input)
  }

  return (
    <div className='flex gap-1 border'>
      {languages &&
        languages.map((lang, key) => {
          return (
            <button key={key} className='p-1' onClick={() => onLangClick(lang.key)}>
              {lang.title}
            </button>
          )
        })}
    </div>
  )
}

export default LanguageChanger
