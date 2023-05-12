import {Localization} from '../../localization/Localization'
import Section from './Section'
import ExperienceHistory from '../../ExperienceHistory'

const Experience = () => {
  return (
    <Section title={Localization.EXPERIENCE}>
      {Localization.EXPERIENCE_HISTORY.map((history, key) => {
        return <ExperienceHistory history={history} index={key} />
      })}
    </Section>
  )
}

export default Experience
