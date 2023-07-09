import {Localization} from '../../localization/Localization'
import Section from './Section'

const Languages = ({innerRef}) => {
  return (
    <Section className={'rounded-3xl bg-white shadow-2xl'} title={Localization.LANGUAGES} innerRef={innerRef}>
      <div className='grid grid-cols-2 gap-5'>
        {Localization.LANGUAGE_SKILLS.map((item, index) => {
          return (
            <div className='rounded-2xl bg-gray-300 h-16 grid grid-cols-2 content-center'>
              <div className='font-bold'>{item.name}:</div> <div className=''>{item.level}</div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

export default Languages
