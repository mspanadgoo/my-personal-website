import github from '../assets/images/social/github.svg'
import gitlab from '../assets/images/social/gitlab.svg'
import linkedin from '../assets/images/social/linkedin.svg'
import skype from '../assets/images/social/skype.svg'
import stackoverflow from '../assets/images/social/stackoverflow.svg'
import telegram from '../assets/images/social/telegram.svg'
import twitter from '../assets/images/social/twitter.svg'
import whatsapp from '../assets/images/social/whatsapp.svg'

const SocialLinks = ({items}) => {
  const getIcon = (title) => {
    switch (title.toLowerCase()) {
      case 'github':
        return github
      case 'gitlab':
        return gitlab
      case 'linkedin':
        return linkedin
      case 'skype':
        return skype
      case 'stackoverflow':
        return stackoverflow
      case 'telegram':
        return telegram
      case 'twitter':
        return twitter
      case 'whatsapp':
        return whatsapp
      default:
        console.error('Warning: Must add icon and handle the Switch')
        break
    }
  }

  return (
    <div className='flex gap-2'>
      {items &&
        items.map((item, key) => {
          return (
            <a href={item.link} key={key} className='h-6' target='_blank' rel='noreferrer'>
              <img src={getIcon(item.title)} alt={item.title} className='h-6 w-6' />
            </a>
          )
        })}
    </div>
  )
}

export default SocialLinks
