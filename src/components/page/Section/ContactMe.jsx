import {Localization} from '../../localization/Localization'
import Section from './Section'

const ContactMe = ({innerRef}) => {
  return (
    <Section className={"bg-blue-500"} title={Localization.CONTACT_ME} innerRef={innerRef}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto impedit quaerat facere
      voluptatibus dolorum vel, temporibus neque rem rerum excepturi doloremque natus ea vitae
      voluptates aspernatur quibusdam nostrum ad quo.
    </Section>
  )
}

export default ContactMe
