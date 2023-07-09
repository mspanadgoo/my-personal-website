import {Localization} from '../../localization/Localization'
import profile from '../../../assets/images/profile.png'
import Section from './Section'

const AboutMe = ({innerRef}) => {
  return (
    <Section className={'bg-red-500'} innerRef={innerRef}>
      <div className='flex flex-row'>
        <img className='h-44' src={profile} alt='profile' />
        <div className='grid gap-1'>
          <h1 className='text-start text-2xl font-bold'>
            {Localization.FIRST_NAME} {Localization.LAST_NAME}
          </h1>
          <h2 className='text-start text-xl font-semibold'>{Localization.JOB_TITLE}</h2>
          <p className='text-start'>{Localization.SUMMARY}</p>
        </div>
      </div>
    </Section>
  )
}

export default AboutMe
