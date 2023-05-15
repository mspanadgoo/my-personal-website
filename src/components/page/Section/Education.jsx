import EducationHistory from '../../EducationHistory'
import {Localization} from '../../localization/Localization'
import Section from './Section'

const Education = ({innerRef}) => {
  return (
    <Section title={Localization.EDUCATION} innerRef={innerRef} className={'rounded-3xl bg-white shadow-2xl'}>
      {Localization.EDUCATION_HISTORY.map((history, key) => {
        return (
          <div key={key}>
            <EducationHistory history={history} />
          </div>
        )
      })}
    </Section>
  )
}

export default Education
