export const setAppLanguage = async (language) => {
  localStorage.setItem('Application Language', language)
}

export const getAppLanguage = () => {
  return localStorage.getItem('Application Language')
}
