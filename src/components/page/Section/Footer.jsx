import SocialLinks from '../../SocialLinks'
import Section from './Section'

const Footer = ({socialMediaItems}) => {
  return (
    <Section className={'bg-gray-400 py-1 pt-10'}>
      <SocialLinks items={socialMediaItems} />

      <div className='dir-ltr b-0 text-center text-xs'>{`© MSPanadgoo 2023 • Designs by Mohammad Sadegh Panadgoo`}</div>
    </Section>
  )
}

export default Footer
