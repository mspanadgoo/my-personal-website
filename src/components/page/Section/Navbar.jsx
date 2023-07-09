import {useEffect, useState} from 'react'
import LanguageChanger from '../../LanguageChanger'

const Navbar = ({buttons, onLangClick, languages}) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navbarClasses = `fixed flex flex-row top-0 left-0 w-full p-4 transition-all duration-300 ${isScrolled ? 'bg-black shadow-xl' : 'bg-transparent'}`

  return (
    <nav className={navbarClasses}>
      <div className='grow hidden md:flex items-center justify-between px-4 py-3 sm:p-0'>
        <div className='flex gap-5'>
          {buttons &&
            buttons.map((button, key) => {
              return (
                <button className='font-semibold text-white' onClick={button.onClick} key={key}>
                  {button.title}
                </button>
              )
            })}
        </div>
      </div>

      <div class='grow md:hidden flex items-center'>
        <button class='outline-none mobile-menu-button'>
          <svg
            className='w-6 h-6 text-white hover:text-red-500 '
            x-show='!showMenu'
            fill='none'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='3'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path d='M4 6h16M4 12h16M4 18h16'></path>
          </svg>
        </button>
      </div>

      <div className=''>
        <LanguageChanger onClick={onLangClick} languages={languages} />
      </div>
    </nav>
  )
}

export default Navbar
