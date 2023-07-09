const LanguageChanger = ({onClick, languages}) => {
  const onLangClick = (input) => {
    onClick(input)
  }

  return (
    <div className='flex gap-1 bg-white'>
      {languages &&
        languages.map((lang, key) => {
          return (
            <button className={'text-black font-bold p-1'} key={key} onClick={() => onLangClick(lang.key)}>
              {lang.title}
            </button>
          )
        })}
    </div>
  )
}

export default LanguageChanger
