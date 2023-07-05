import {Localization} from '../../localization/Localization'
import Section from './Section'

const Skills = ({innerRef}) => {
  let skills = [
    'NodeJS',
    'ReactJS',
    'MongoDB',
    'Javascript',
    'HTML/CSS',
    'UI/UX Design',
    'iOS',
    'Objective-C',
    'Swift',
    'Xcode',
    'Cocoa Touch',
    'Core Data',
    'SQLite',
    'UIKit',
    'SwiftUI',
    'MVVM',
    'MVC',
    'ARC',
    'GCD',
    'HIG',
    'Rest APIs',
    'HTTP',
    'JSON',
    'Auto Layout',
    'Cocoapods',
    'APNS',
    'Git',
    'SVN',
    'Unit Test',
    'UI Test',
    'CI/CD',
    'SOLID',
    'Clean Swift',
    'Firebase',
    'Analytics',
    'Crashlytics',
    'Multi Threading',
    'Design Patterns',
    'Algorithms',
    'Operations',
    'Push Notifications',
    'Realm',
    'Combine',
    'TDD',
    'Functional Programming',
    'Reactive Programming',
    'Core Animation',
  ]
  return (
    <Section className={'rounded-3xl bg-white shadow-2xl'} title={Localization.SKILLS} innerRef={innerRef}>
      <div className='grid grid-cols-6 gap-4'>
        {skills.map((item, index) => {
          return (
            <div className='shadow-sm rounded-2xl h-16 bg-gray-400 align-middle grid content-center'>
              <div className='text-center'>{item}</div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

export default Skills
