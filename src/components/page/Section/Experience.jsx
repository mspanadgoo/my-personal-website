import {Localization} from '../../localization/Localization'
import Section from './Section'
import ExperienceHistory from '../../ExperienceHistory'

const Experience = ({innerRef}) => {
  return (
    <Section
      title={Localization.EXPERIENCE}
      className={'rounded-3xl bg-slate-300 shadow-2xl'}
      innerRef={innerRef}
    >
      {Localization.EXPERIENCE_HISTORY.map((history, key) => {
        return (
          <div key={key}>
            <ExperienceHistory history={history} />
          </div>
        )
      })}
    </Section>
  )
}

export default Experience
